# React Router v6 Nested Route in NotFound Component

This repository demonstrates a common, yet subtle, issue encountered when using nested routes within a `NotFound` component in React Router v6.  The issue arises when a nested route is declared inside of a component that is matched by the catch-all route (`path="*"`). This unexpected nesting behavior can lead to confusing and broken navigation.

## Problem
The problem is that a nested route within the `NotFound` component interferes with the catch-all route, leading to unexpected routing behavior.  Instead of displaying the `NotFound` component for unmatched routes, the nested route might take precedence, potentially masking the actual 404 scenario.

## Solution
The solution is to avoid nesting routes within the `NotFound` component. The `NotFound` component should simply display a 404 message.  All route matching should be handled at the top level of your route configuration.