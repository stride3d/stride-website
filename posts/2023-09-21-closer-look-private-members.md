---
title: "A closer look: Setting private members in the editor"
author: manio
popular: false
image: /images/blog/2023-09-21-closer-look-private-members/script-with-secrets.png
tags: ['.NET']
---

Let's take a closer look at why currently you can't set private members of scripts and components in the Stride Editor and explore the options to change that in the future.

---

Table of Contents:

[[TOC]]

It has been an amazing week for Stride and our Discord is booming with new people who want to learn more about the engine and maybe port some games from Unity. One of the questions that has been asked a few times was why we can't set private members on scripts in the editor. I thought it's a good opportunity to dive a little deeper into the technical reasons and engine architecture to explain the current limitation and explore the options to change it in the future.

## What is public and what is private

Let's run through a quick reminder. In C# members are annotated with [access modifiers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)
such as `public`, `protected` or `private`. The modifier describes the access objects of other classes will have when accessing the members. It allows us to control the API surface of an object by hiding away certain aspects of its state to allow the inner implementation to be changed without affecting other parts of code that would only interact with the publicly visible members.

_To understand it better read [this analogy](https://cseducators.stackexchange.com/a/1246)._

When designing systems we will often decide to make certain things public (maybe even use an interface to further describe the public API regardless of the class holding the methods) and keep most things private. This allows us to prevent accidental mistakes when another part of the systems makes changes to some delicate state.

However, with a more Data Oriented approach we can find ourselves creating classes which hold mainly data. In many Entity Component System implementations the components are just data bags that systems read and update. With this kind of approach there's rarely need for private members, although sometimes the `internal` visibility is used for data on a component that is exclusively managed by its default system.

Moreover, component's public properties are often not just modified at design time, but also at runtime. Think about the Transform component and how it's public properties are modified to move the entities around, or how changing the velocity on a Physics component affects how quickly the simulation will move it around on the next step.

## Design vs runtime access

We can talk about components in two contexts: setting the properties during level design in the editor and setting them at runtime while the game is running. We would generally expect in both cases that we can modify the properties of the component and they will be picked up by the processing system. 

With the introduction of Scripts, however, which are components containing logic, we get into a bit of a pickle. Yes, the script should be able to have private state and a public API for other components to interact with it. What if we want to restrict some data so that it can only be set once during initialization? Ideally the editor would not be constrained to modify the property during design, but once we hit the runtime it should be allowed to change.

## Editor runs your code directly

In Stride when you create a script in your project and open the project in the editor, the project will be compiled, the DLL loaded into memory of the editor, and when you add the script to an entity it will actually create a new instance of your script class. Same as at runtime.

It won't run the script Update method, but if you have any logic in your property getters and setters those will be invoked at design time. This can give you enormous flexibility. But it also means that however you want your script to behave at runtime when it comes to properties the same will be enforced at design time.

The editor uses reflection to access properties and fields on your script. It technically could modify private fields on the object instance it holds during design. But this needs to survive saving the project to disk.

## Serialization

Stride uses YAML for design time serialization of Assets. The assets can have a different form from the actual Content they are compiled to by the AssetCompiler. This is used for example by Audio or Model assets which at design time just hold a reference to your media files, but once compiled actually hold the bits of your media in a format that's easy to consume by Stride's runtime.

For components and scripts rather than having a second class for each component and doing compilation from design to runtime representation, those classes are the same in both scenarios. This simplifies things but it means that serialization constraints need to be applied equally.

While YAML is very flexible and the serializer currently uses reflection to set the properties, the runtime serialization is done using a custom binary serializer system. When you compile your game project, after C# compiler has done its job, the build system runs the AssemblyProcessor over your code to generate efficient serializer classes that do not use reflection to access members on the objects they deserialize.

Access modifiers are enforced by the CLR, which means it's not possible to generate code that accesses private members of another class directly.

### What about constructors?

If we have a private field that we want to set once, why don't we use a constructor to accept a value for it? It's certainly an option and there are serialization systems which look at constructors to provide deserialization in this way. They may be a bit more complicated but it's possible to implement them.

However, in a generic environment that Stride provides it's a bit difficult. How would the editor create a new instance of your class if it requires data to be passed in the constructor? Will it provide `default` values, will it look for a private parameterless constructor?

### What about init properties?

C# 9 has introduced [`init`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/init) properties which are only allowed to be set at object construction. Reflection is able to bypass that of course, while at the CLR level a special marker `modreq` is placed on the property which asks the compiler to provide `modreq` marker on the callsite as well (see [thread](https://stackoverflow.com/a/64749884)). Compilers which don't know about init properties would still prevent you from assigning them. And the CLR is not actually enforcing anything here - only compiler - thus the generated serializers are still able to use those properties.

But in your code the constraint will be enforced and no runtime modification will occur after the object is initialized.

```csharp
public string MyProperty { get; init; }
```

### `UnsafeAccessor` in .NET 8

As we're trying to squeeze out more performance and improve the Stride codebase we're looking at rewriting the AssemblyProcessor from Mono.Cecil and manually emitting IL into a Roslyn C# source generator. This will also mean being restricted to whatever the compiler enforces, such as not setting init properties outside of object construction.

Luckily in .NET 8 there's a new performance hack which allows you to access private fields on other classes. You can read about it more in the [proposal](https://github.com/dotnet/runtime/issues/90081) and on the [performance blog](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/#networking-primitives).

```csharp
[UnsafeAccessor(UnsafeAccessorKind.Field, Name = "_myField")]
extern static ref string _myField(MyClass c);
```

## Summary

There might be some extra work needed to implement the changes to allow setting private members in the editor. At the moment using `init` properties is nice a middle ground.

While in my opinion designing clear public APIs for components in a data driven approach is the way and it doesn't need access to private members, there's many users who see value in being able to use private members to their advantage and it's on the editor and engine to provide flexibility of choice in how you structure your code.

Thank you for reading 📖, and happy coding 💻👩‍💻👨‍💻!
