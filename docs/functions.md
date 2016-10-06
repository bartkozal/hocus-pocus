---
layout: default
---

## Functions

Return a quotient/product of a provided value.

```scss
quarter($value)   // $value / 4
third($value)     // $value / 3
halve($value)     // $value / 2
double($value)    // $value * 2
triple($value)    // $value * 3
quadruple($value) // $value * 4
```

Usage:

```scss
.box-halve {
  padding: halve($spacing-unit);
}
```
