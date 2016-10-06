---
layout: default
---

## Container

Create a centered wrapper for grid elements. Usually used as a root element
for a whole layout.

Defaults:

```scss
$grid-container: 1020px; // container's width
```

Usage:

<div class="example">
  <div class="container preview-grid">
    .container
  </div>
</div>

```html
<div class="container">
  ...
</div>
```

## Grid

Build a grid using a combination of grid items and [width helpers](/#rwd).
Grid elements can be nested. It's based on flexbox.

Defaults:

```scss
$grid-gutter: $spacing-unit; // width of grid gutter
```

Usage:

<div class="example">
  <div class="grid">
  <div class="grid-item 1/3">
    <div class="preview-grid">.grid-item.1/3</div>
  </div>

  <div class="grid-item 2/3">
    <div class="preview-grid">.grid-item.2/3</div>
  </div>
  </div>
</div>

```html
<div class="grid">
  <div class="grid-item 1/3">
    ...
  </div>

  <div class="grid-item 2/3">
    ...
  </div>
</div>
```

### Grid Types

Set horizontal and/or vertical alignment:

<div class="example">
  <div class="grid grid-left">
    <div class="grid-item 1/3">
      <div class="preview-grid">
        .grid-item.1/3
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-left">
  <div class="grid-item 1/3">
    ...
  </div>
</div>
```

<div class="example">
  <div class="grid grid-center">
    <div class="grid-item 1/3">
      <div class="preview-grid">
        .grid-item.1/3
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-center">
  <div class="grid-item 1/3">
    ...
  </div>
</div>
```

<div class="example">
  <div class="grid grid-right">
    <div class="grid-item 1/3">
      <div class="preview-grid">
        .grid-item.1/3
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-right">
  <div class="grid-item 1/3">
    ...
  </div>
</div>
```

<div class="example">
  <div class="grid grid-top">
    <div class="grid-item 1/2">
      <div class="preview-grid preview-grid-large">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="preview-grid">
        .grid-item.1/2
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-top">
  <div class="grid-item 1/2">
    ...
  </div>
  <div class="grid-item 1/2">
    ...
  </div>
</div>
```

<div class="example">
  <div class="grid grid-middle">
    <div class="grid-item 1/2">
      <div class="preview-grid preview-grid-large">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="preview-grid">
        .grid-item.1/2
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-middle">
  <div class="grid-item 1/2">
    ...
  </div>
  <div class="grid-item 1/2">
    ...
  </div>
</div>
```

<div class="example">
  <div class="grid grid-bottom">
    <div class="grid-item 1/2">
      <div class="preview-grid preview-grid-large">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="preview-grid">
        .grid-item.1/2
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-bottom">
  <div class="grid-item 1/2">
    ...
  </div>
  <div class="grid-item 1/2">
    ...
  </div>
</div>
```

Create a flat grid without gutter:

<div class="example">
  <div class="grid grid-flat preview-grid">
    <div class="grid-item 1/2">
      <div class="preview-grid">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="preview-grid">
        .grid-item.1/2
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-flat">
  <div class="grid-item 1/2">
    ...
  </div>
  <div class="grid-item 1/2">
    ...
  </div>
</div>
```

Create a grid where content of a first item is aligned to left and content
of a second item is aligned to right.

<div class="example">
  <div class="grid grid-pair">
    <div class="grid-item 1/2">
      <div class="preview-grid">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="preview-grid">
        .grid-item.1/2
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-pair">
  <div class="grid-item 1/2">
    ...
  </div>
  <div class="grid-item 1/2">
    ...
  </div>
</div>
```

Reverse grid items order (available for each breakpoint in `$rwd-map`):

<div class="example">
  <div class="grid grid-reverse">
    <div class="grid-item 1/3">
      <div class="preview-grid">
        .grid-item.1/3
      </div>
    </div>
    <div class="grid-item 2/3">
      <div class="preview-grid">
        .grid-item.2/3
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-reverse">
  <div class="grid-item 1/3">
    ...
  </div>
  <div class="grid-item 2/3">
    ...
  </div>
</div>
```

<div class="example">
  <div class="grid mobile-grid-reverse">
    <div class="grid-item 2/5">
      <div class="preview-grid">
        .grid-item.2/5
      </div>
    </div>
    <div class="grid-item 3/5">
      <div class="preview-grid">
        .grid-item.3/5
      </div>
    </div>
  </div>
</div>

```html
<div class="grid mobile-grid-reverse">
  <div class="grid-item 2/5">
    ...
  </div>
  <div class="grid-item 3/5">
    ...
  </div>
</div>
```

Stack grid items (available for each breakpoint in `$rwd-map`):

<div class="example">
  <div class="grid grid-stack">
    <div class="grid-item 1/3">
      <div class="preview-grid">
        .grid-item.1/3
      </div>
    </div>
    <div class="grid-item 2/3">
      <div class="preview-grid">
        .grid-item.2/3
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-stack">
  <div class="grid-item 1/3">
    ...
  </div>
  <div class="grid-item 2/3">
    ...
  </div>
</div>
```

<div class="example">
  <div class="grid mobile-grid-stack">
    <div class="grid-item 2/5 mobile-1/1">
      <div class="preview-grid">
        .grid-item.2/5.mobile-1/1
      </div>
    </div>
    <div class="grid-item 3/5 mobile-1/1">
      <div class="preview-grid">
        .grid-item.3/5.mobile-1/1
      </div>
    </div>
  </div>
</div>

```html
<div class="grid mobile-grid-stack">
  <div class="grid-item 2/5 mobile-1/1">
    ...
  </div>
  <div class="grid-item 3/5 mobile-1/1">
    ...
  </div>
</div>
```

Combination of stack and reverse:

<div class="example">
  <div class="grid grid-reverse grid-stack">
    <div class="grid-item 5/6">
      <div class="preview-grid">
        .grid-item.5/6
      </div>
    </div>
    <div class="grid-item 1/6">
      <div class="preview-grid">
        .grid-item.1/6
      </div>
    </div>
  </div>
</div>

```html
<div class="grid grid-reverse grid-stack">
  <div class="grid-item 5/6">
    ...
  </div>
  <div class="grid-item 1/6">
    ...
  </div>
</div>
```

<div class="example">
  <div class="grid mobile-grid-reverse mobile-grid-stack">
    <div class="grid-item 1/3">
      <div class="preview-grid">
        .grid-item.1/3
      </div>
    </div>
    <div class="grid-item 2/3">
      <div class="preview-grid">
        .grid-item.2/3
      </div>
    </div>
  </div>
</div>

```html
<div class="grid mobile-grid-reverse mobile-grid-stack">
  <div class="grid-item 1/3">
    ...
  </div>
  <div class="grid-item 2/3">
    ...
  </div>
</div>
```

## Horizontal Helpers

<div class="example">
  <div class="horizontal-left preview-horizontal">Aligned to left</div>
  <div class="horizontal-center preview-horizontal">Aligned to center</div>
  <div class="horizontal-right preview-horizontal">Aligned to right</div>
</div>

```html
  <div class="horizontal-left">Aligned to left</div>
  <div class="horizontal-center">Aligned to center</div>
  <div class="horizontal-right">Aligned to right</div>
```

## Vertical Helpers

<div class="example">
  <div class="vertical-top preview-vertical">Aligned to top</div>
  <div class="vertical-middle preview-vertical">Aligned to middle</div>
  <div class="vertical-bottom preview-vertical">Aligned to bottom</div>
</div>

```html
<div class="vertical-top">Aligned to top</div>
<div class="vertical-middle">Aligned to middle</div>
<div class="vertical-bottom">Aligned to bottom</div>
```

## Float Helpers

Clearfix and float helpers.

<div class="example">
  <div class="clearfix">
    <div class="float-left preview-grid">.float-left</div>
    <div class="float-right preview-grid">.float-right</div>
  </div>
</div>

```html
<div class="clearfix">
  <div class="float-left">...</div>
  <div class="float-right">...</div>
</div>
```
