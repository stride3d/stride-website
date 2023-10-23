---
title: "A closer look: Setting private members in the editor"
author: joreyk
popular: false
image: https://www.jenx.si/wp-content/uploads/2020/10/cs-roslyn-logo.png
tags: ['.NET']
---

Let's take a closer look at the DiagnosticAnalyzer added in Stride.Core.CompilerServices

---

Table of Contents:

[[TOC]]

Stride advances further in utility and features every week.
This blog will cover the new `DiagnosticAnalyzer` features in `Stride.Core.CompilerServices`

## What is a DiagnosticAnalyzer?

A `DiagnosticAnalyzer` is a Roslyn feature to scan your code while you are typing in your IDE.
C# uses them too, everytime you see a warning or red squiggly lines in your IDE, a `DiagnosticAanalyzer` get's triggered.
This analyzation has `NOTHING` to do with telemetry.

## What does it do?

The new `Diagnostics` cover mostly `Serialization`, the analyzers will create warnings when code is written that is incompatible with [Strides Serialization Rules of Thumb](https://github.com/stride3d/stride-docs/blob/master/en/manual/scripts/serialization.md#rule-of-thumb).
Each of the error codes follows this format `STRDIAGXXX` where X represents a number digit.
Clicking on the error codes will open a help page which explains in depth why the `DiagnosticAnalyzer` got triggered and explains how to resolve the warning.
The error code pages can be found [here](https://doc.stride3d.net/latest/en/diagnostics/)

## Why?

It should reduce the "Why is my property not appearing in the Editor?" moments.
Often it's unclear why a property is not showing up in the editor.
The analyzers should help to clarify these situations and help in developing in Stride

## Current State

The PR to add these Analyzers got merged. But there was no release yet which includes them.
To test them now building the engine from source is an option.
Else wait until the next release package of Stride. 

## For Engine Developers

It's easy to add new analyzers to the engine.
VS has a bug caused by .NET.
This bug causes VS to only load once Roslyn at start up.
To fix this after adding a new analyzer, compile the `Stride.Core.CompilerServices` and restart VS.

## Summary

It's a new quality of life feature to easier develop in Stride by getting immediate feedback about problems while coding.

Thank you for reading 📖, and happy coding 💻👩‍💻👨‍💻!
