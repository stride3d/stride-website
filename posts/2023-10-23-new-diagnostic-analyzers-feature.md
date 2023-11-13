---
title: "A closer look: Diagnostic Analyzers with Roslyn"
author: joreyk
popular: false
image: /images/blog/2023-10/cs-roslyn-logo.webp
tags: ['.NET']
---

Let's take a closer look at the `DiagnosticAnalyzer` feature added in `Stride.Core.CompilerServices`. This feature offers real-time code analysis in your IDE, enhancing your workflow.

---

Table of Contents:

[[TOC]]

Stride continues to evolve, adding new utilities and features every week. This blog post will cover the newly added `DiagnosticAnalyzer` feature in `Stride.Core.CompilerServices`.

## What is a `DiagnosticAnalyzer`?

A `DiagnosticAnalyzer` is a feature from Roslyn that scans your code while you are typing in your IDE. C# also utilizes this feature; every time you see a warning or red squiggly lines in your IDE, a `DiagnosticAnalyzer` gets triggered. Analyzers are offline tools used by the compiler to assist programmers. They are not used to collect telemetry on how Stride is being used.

## What does it do?

The new `Diagnostics` primarily focus on [Serialization](https://doc.stride3d.net/latest/en/manual/scripts/serialization.html). These analyzers generate warnings for code that is incompatible with [Stride's Serialization Rules of Thumb](https://doc.stride3d.net/latest/en/manual/scripts/serialization.html#rule-of-thumb).

Each error code follows this format: `STRDIAGXXX`, where 'X' represents a numerical digit. Clicking on these error codes will open a help page that explains in depth why the `DiagnosticAnalyzer` was triggered and how to resolve the warning. You can find these error code pages [here](https://doc.stride3d.net/latest/en/diagnostics/).

## Example

In this example, we'll delve into a common scenario where the `DiagnosticAnalyzer` spots issues related to Stride's serialization rules. We have a `Dictionary` property named `Name` within a class `Example`. We've also adorned the `Name` property with `[DataMember]` and `[DataMemberIgnore]` attributes which are contradictory, and this is where the `DiagnosticAnalyzer` steps in to provide valuable feedback.


```csharp
public class Example
{
    [DataMember]
    [DataMemberIgnore]
    public Dictionary<Example, int> Name { private get; set; }
}
```

Upon compiling, the `DiagnosticAnalyzer` flags three diagnostic warnings related to the attributes and the property's accessibility:

```yml
STRDIAG000: There is an Attribute Contradiction on 'Name' Member. [DataMemberIgnore] Attribute on a [DataMember] is not supported. Except if it has also [DataMemberUpdatable] Attribute.
STRDIAG009: The member 'Name' implements IDictionary<T,K> with an unsupported type for the key. Only primitive types ( like int,float,.. ) are supported or string or enums as the Dictionary Key in asset serialization. When used in other contexts the warning may not apply and can be suppressed.
STRDIAG004: The property 'Name' with [DataMember] does not have an accessible getter which is required for serialization. A public/internal/internal protected getter is expected.
```

The following image demonstrates how these warnings are displayed in Visual Studio:

{% img-click 'Diagnostics warning in Visual Studio' '/images/blog/2023-10/diagnostics-example.webp' %}

These warnings provide immediate feedback, aiding the developer in adhering to Stride's serialization rules. The `DiagnosticAnalyzer` not only pinpoints the issues but also suggests the necessary adjustments to align the code with Stride's standards. For instance, it suggests the removal of the `[DataMemberIgnore]` attribute or the addition of a `[DataMemberUpdatable]` attribute to resolve the attribute contradiction on the `Name` member. It also highlights the requirement for an accessible getter for serialization, and informs about the supported types for the `Dictionary` key in asset serialization.

## Why use it?

This real-time feedback is invaluable, making the coding process smoother and less error-prone, and ensuring that the codebase remains compliant with Stride's serialization standards.

This feature aims to minimize those "Why is my property not showing up in the [Game Studio](https://doc.stride3d.net/latest/en/manual/game-studio/index.html)?" moments. It's often unclear why certain properties don't appear in the editor. These analyzers are designed to clarify such situations, aiding your development process in Stride.

## Current State

The pull request (PR) to introduce these analyzers has been merged. However, there hasn't been a release that includes them yet. If you're eager to test them out, you can build the engine from the source. Otherwise, you'll have to wait for the next release of Stride's NuGet packages.

## For Engine Developers

Adding new analyzers to the Stride engine is straightforward. However, be aware that Visual Studio (VS) has a bug caused by .NET, which makes VS load Roslyn only once at startup. To work around this, compile `Stride.Core.CompilerServices` and restart VS after adding a new analyzer.

## Summary

This is a new quality-of-life feature that simplifies development in Stride by providing immediate feedback on coding issues.

Thank you for reading 📖, and happy coding 💻👩‍💻👨‍💻!
