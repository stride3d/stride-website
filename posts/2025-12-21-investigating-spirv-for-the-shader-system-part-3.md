---
title: "Investigating SPIR-V for the shader system - Part 3"
author: youness
popular: false
image: /images/spir.png
tags: ['.NET', 'Shaders']
---
In this third part we're going to design a parser for the SDSL language!
---

Table of Contents:

[[TOC]]

So many things happened since the [the last blog post](/blog/investigating-spirv-for-the-shader-system-part-2/) but none were written in a blog post format, fortunately for me, with the holidays I have time to tell more about it.

## Preface

Last time we've left on a fun design for a SPIR-V assembler/parser. This time instead of working on the backend side of the compiler, we're going to work on the frontend side, the parser. 

We're also keeping the same principles that this project started with : 

- Fast
- Low heap allocation
- Easy to update/modify

Only this time we might break some rules since we're not following any C# churches :D.

This post will show much more code, most of it will serve as an example, it won't always compile and might need some tweeking but can be used as a base to understand how the new SDSL parser works. 

## Why writing a parser from scratch and not use a library ?

This is very simple to answer : because we can!

Parsing a programming language is one of the easiest part of this whole ordeal, there are multiple ways to do it each with they pro and cons. 

The first thing we've tried was using 2 ready made parsing library, all of them were very powerful and easy to use but sacrificing on speed and heap allocation.

The third experiment with parsing SDSL was with a handmade recursive descent parser, it was the easiest and fastest to implement and apparently used in major compiler frontends (gcc and clangs) but don't quote me on that.

I haven't had the chance of finding a proper (read *idiot proof*) explanation of how to implement a recurisve descent parser but I'd like to mention [Kay Lack's video](https://www.youtube.com/watch?v=ENKT0Z3gldE) which is the clearest explanation I could ever found on this subject. 


## The 3rd experiment

It started as an expression/statement parser to compare with the current parser. In our case statements are what takes the most processing in SDSL, a low hanging fruit that we can reach fast.

To avoid allocation, we will avoid creating classes as much as we can except for the abstract syntax tree (AST). 

### The tree

We'll define some basic nodes for our AST, the first will be an abstract node and derive everything from it.

```csharp

// This struct will retain data of which part of text a node in our AST will represent
public record struct TextLocation(string Text, Range Range);

// Each node will have to store location
public abstract class ASTNode(TextLocation location)
{
    TextLocation Location { get; set; } = location;
}

// Expressions are values or a combinations of them with 
public abstract class Expression(TextLocation location) : ASTNode(location);

// Literals will contain the basic values we'll be dealing with in expressions
public abstract class Literal(TextLocation location) : Expression(location);

// Such as :

public class IntegerLiteral(long value, TextLocation location) : Literal(location);
public class FloatLiteral(double value, TextLocation location) : Literal(location);

// And others but this will be enough, I'm also leaving implementation details out for simplicity

// We'll first focus on binary operations, but there are unary and ternary operations too

public enum Operators 
{
    None,
    Multiply,
    Divide,
    Moderand,
    Add,
    Subtract,
    LeftShift,
    RightShift,
    //...

}


public class BinaryExpression(Expression left, Operator operator, Expression right, TextLocation location) : Expression(location);



```

### Scanning code

For our parser we need a construct that will keep track of the position of the parser in the text. Then we'll need to define our rules which, when matched, will advance our position in the text and when not, will reset the position.

For that we create a scanner as a `ref struct` and our rules will be written in plain function. We don't need any abstractions (or maybe a little), functions are reusable enough and we don't allocate anything on the heap by calling a function.


```csharp
public ref struct Scanner(string code)
{
    public string Code { get; } = code;
    public int Position { get; set; } = 0;

    // Sometimes we'd like to peek one or more characters to reject rules early
    public int Peek() => (int)Code[Position];
    public ReadOnlySpan<char> Peek(int size) => Code[Position..(Position+size)];

    public bool Match(string matchString, bool caseSensitive)
    {
        // The implementation is fairly straightforward :) 
    }
}
```


### Building blocks

Our rules will be functions returning a boolean, taking as parameters the scanner and an `out` reference to a node of the tree.

Here's an example for the integer parser :

```csharp

// A utility function that checks if the char is a digit with a specific value or in a range

bool IsDigitValue(char c, int value)
    => char.IsDigit(c) && (c - '0' == value);

bool IsDigitRange(char c, Range range);


bool ParseIntegerLiteral(ref Scanner scanner, out IntegerLiteral literal)
{
    // We keep track of the position before we match anything
    // We can also create copies of the struct instead by storing it in different variables
    // but I prefer copying the least amount of data possible
    var start = scanner.Position;
    // If we get a zero, that's our value :D, integer literals never start with a zero
    if(IsDigitValue(scanner.Peek(), 0))
    {
        scanner.Position += 1;
        literal = new(0, new((int)(scanner.Peek() - '0'), new(scanner.Code, position..scanner.Position)));
        return true;
    }
    // We keep scanning until there is no digits
    else if(char.IsDigit(scanner.Peek()))
    {
        while(char.IsDigit(scanner.Peek()))
            scanner.Position += 1;
        
        literal = new(0, new(int.Parse(scanner.Code[position..scanner.Position]), new(scanner.Code, position..scanner.Position)));
        return true;
    }
    // If we don't match any digit then we have to go back in the starting position
    // This is not necessary here so we can omit this line of code
    // In some cases this line of code will prove very relevant
    scanner.Position = start;

    // Sometimes in the parse we never allocate any data for the node
    // This is perfect for reducing allocation in our case
    literal = null!;
    return false;
}

```

Of course this implementation is lacking for the sake of simplicity, I leave the details to those who want to implement it themselves!

We can derive this integer parser into a float parser quite easily, each language has its own rules of writing floating point numbers and it's up to the author of the language to decide which one is best.


### Abstractions

After implementing the floating point parser we can abstract both those parsers into one encompassing everything very simply. 


```csharp

bool ParseNumberLiteral(ref Scanner scanner, out NumberLiteral number)
{
    var start = scanner.Position;
    if(ParseIntegerLiteral(ref scanner, out var integerLiteral))
    {
        number = (NumberLiteral)integerLiteral;
        return true;
    }
    else if(ParseFloatLiteral(ref scanner, out var floatLiteral))
    {
        number = (NumberLiteral)floatLiteral;
        return true;
    }
    // Same as before :)
    scanner.Position = start;
    number = null!;
    return false;
}

```


We can even go one step higher and use this number parser to create our first binary operation parser :

```csharp


// A utility function that resets the position. We can modify it to catch errors
bool ExitParser<TNode>(ref Scanner scanner, out TNode node, int position) where TNode : ASTNode;

// A utility function that looks ahead by skipping some white space.
// Looking ahead is something that happens quite often when parsing SDSL.

bool FollowedByAny(ref Scanner scanner, string chars, out char value, bool withSpaces = false, bool advance = false);


bool Spaces(ref Scanner scanner, int min = 0)
{
    var start = scanner.Position;
    while(char.IsWhiteSpace(scanner.Peek()))
        scanner.Position += 1;
    if(scanner.Position - start >= min)
        return true;
    else
    {
        scanner.Position = start;
        return false;
    }
}

bool Mul(ref Scanner scanner, out Expression expression)
{
    // Mulitplicative expressions can be stringed together, so we should use a loop
    char op = '\0';
    expression = null!;
    var position = scanner.Position;
    do
    {
        Spaces(ref scanner, 0);
        // If we have reached an operator and have already parsed a first expression
        if (op != '\0' && expression is not null)
        {
            // We nest the multiplications by creating a binary expression containing the binary expression we just finished parsing
            if (ParseNumberLiteral(ref scanner, out var number))
                expression = new BinaryExpression(expression, op.ToOperator(), number, scanner[position..scanner.Position]);
            else return ExitParser(ref scanner, out expression, position);
        }
        // In the case we haven't reached an operator
        else if (expression is null && op == '\0')
        {
            // Our number becomes our result expression
            if (ParseNumberLiteral(ref scanner, result, out var number))
                expression = number;
            else return ExitParser(ref scanner, out expression, position);
        }
    }
    // We keep parsing until we don't see any multiplicative operators
    while (FollowedByAny(ref scanner, "*/%", out op, withSpaces: true, advance: true));
    if (expression is not null)
        return true;
    else return ExitParser(ref scanner, result, out expression, position, orError);
}

```

We can also write the addition/subtraction parser, following the operator precedence : 


```csharp
bool Add(ref Scanner scanner, out Expression expression)
{
    char op = '\0';
    expression = null!;
    var position = scanner.Position;
    do
    {
        Spaces(ref scanner, 0);
        if (op != '\0' && expression is not null)
        {
            if (Add(ref scanner, out var mul))
                expression = new BinaryExpression(expression, op.ToOperator(), mul, scanner[position..scanner.Position]);
            else return ExitParser(ref scanner, out expression, position);
        }
        else if (expression is null && op == '\0')
        {
            if (Mul(ref scanner, result, out var prefix))
                expression = prefix;
            else return ExitParser(ref scanner, out expression, position);
        }
    }
    while (FollowedByAny(ref scanner, "+-", out op, withSpaces: true, advance: true));
    if (expression is not null)
        return true;
    else return ExitParser(ref scanner, result, out expression, position, orError);
}

```

And that's the gist of it! The rest is about adding all the other elements of the language.

## The difficult parts

There have been little bumps here and there while writing this parser

### C-like languages

SDSL was originally created as an extension of HLSL, a higher level of HLSL that includes mixin operators making it possible to mix some shader modules together. HLSL is itself very inspired from C/C++ in its syntax, some of the syntax in C were put in HLSL and kept in SDSL and have made it a bit more complicated to parse.

A prime example is the "Declaration follows usage" principles. In C, declaring an array is written the same way it is used (eg : `int myArray[5];` and `myArray[0] = 2;`).

This is confusing when coming from C# and creates some frictions when developping a game with Stride since we're using both C# and SDSL. There is no need to stick to C's syntax and HLSL/SDSL don't have the same memory semantic as C so the new parser supports both the C# and C syntax for array declarations and hopefully in the future SDSL will drop the C syntax and closely ressemble C# while being consistent with SPIR-V/HLSL memory semantic.

### Recursion problem

This was a problem we didn't see through the bits of code I've showed in this blog post but the original experiment had recursion instead of loops for binary operators. This lead the new parser to perform as fast as the previous one in cases where expressions were complex and varied, eg. `a + b * c + d - (3 * (5 + (e / 12)) * 4 * 1 / f)`.

This is due to the parser doing lots of backtracking and the solution was to implement [precedence climing](https://eli.thegreenplace.net/2012/08/02/parsing-expressions-by-precedence-climbing), the while loop present in our `Add` and `Multiply` parsing function we saw a bit earlier in our example 😊.


### The ambiguity of SDSL

The ideal programming language grammar is context free, all information is gathered through the parsing 
SDSL has introduced some ambiguity since mixins are considered as types, it's harder to know which identifier corresponds to which type or function. Lots of programming languages are not context free and SDSL is no different, so part of the work was offloaded to the backend

## Conclusions

Writing this SPIR-V library was very fun, I've learned a lot about SPIR-V and some of the possible use cases for it in the context of Stride. As you might have imagined, this was the easy part of this shader system rewrite. In the next installment we'll see the little adventure I went through to make the most of our shader front-end!

Thank you for reading!
