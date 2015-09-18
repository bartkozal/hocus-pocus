---
layout: default
---

Use `.container` class to create a centered wrapper. It has a width of
`$grid-container`.

<div class="example">
  <div class="container grid-preview">
    .container
  </div>
</div>

```html
<div class="container">
  ...
</div>
```

### Grid

Use `.grid` with nested `.grid-item` elements to build a grid.

<div class="example">
  <div class="grid">
    <div class="grid-item 1/3">
      <div class="grid-preview">
        .grid-item.1/3
      </div>
    </div>

    <div class="grid-item 2/3">
      <div class="grid-preview">
        .grid-item.2/3
      </div>
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

There are a few additional classes to align block elements horizontally
and vertically.

<div class="example">
  <div class="grid grid-left">
    <div class="grid-item 1/3">
      <div class="grid-preview">
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
      <div class="grid-preview">
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
      <div class="grid-preview">
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
      <div class="grid-preview grid-preview-large">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="grid-preview">
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
      <div class="grid-preview grid-preview-large">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="grid-preview">
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
      <div class="grid-preview grid-preview-large">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="grid-preview">
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

You can create a flat grid without the gutter too:

<div class="example">
  <div class="grid grid-flat grid-preview">
    <div class="grid-item 1/2">
      <div class="grid-preview">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="grid-preview">
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

Or a grid with two elements where content of the first one is aligned to the
left and content of the second one is aligned to the right.

<div class="example">
  <div class="grid grid-pair">
    <div class="grid-item 1/2">
      <div class="grid-preview">
        .grid-item.1/2
      </div>
    </div>
    <div class="grid-item 1/2">
      <div class="grid-preview">
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

### Width helpers

Use width helpers with various elements like grid items, inputs or table cells.
There are available fractions of these numbers: `n/1`, `n/2`, `n/3`, `n/4`,
`n/5`, `n/6`, `n/8`, `n/9`, `n/10` and `n/12`.

<div class="grid">
  <div class="grid-item 1/1">
    <div class="grid-preview">
      .1/1
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 1/4">
    <div class="grid-preview">
      .1/4, .2/8, .3/12
    </div>
  </div>
  <div class="grid-item 3/4">
    <div class="grid-preview">
      .3/4, .6/8, .9/12
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 2/5">
    <div class="grid-preview">
      .2/5, .4/10
    </div>
  </div>
  <div class="grid-item 3/5">
    <div class="grid-preview">
      .3/5, .6/10
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 1/6">
    <div class="grid-preview">
      .1/6, .2/12
    </div>
  </div>
  <div class="grid-item 5/6">
    <div class="grid-preview">
      .5/6, .10/12
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 1/2">
    <div class="grid-preview">
      .1/2, .2/4, .3/6, .4/8, .5/10, .6/12
    </div>
  </div>
  <div class="grid-item 1/8">
    <div class="grid-preview">
      .1/8
    </div>
  </div>
  <div class="grid-item 3/8">
    <div class="grid-preview">
      .3/8
    </div>
  </div>
</div>

### Layout helpers

<div class="example">
  <div class="clearfix">
    <div class="float-left grid-preview">.float-left</div>
    <div class="float-right grid-preview">.float-right</div>
  </div>
</div>

```html
<div class="clearfix">
  <div class="float-left">.float-left</div>
  <div class="float-right">.float-right</div>
</div>
```

### Visibility helpers

`.hidden`, `.visible`, `.visible-block`, `.visible-inline-block`, `.visible-inline`

### Spacing helpers

Spacing helpers are generated based on the `$spacing-map` hash. By default you
get access to four helpers with various types and sizes:

```sass
.margin[-size][-type]
.padding[-size][-type]
.no-margin[-type]
.no-padding[-type]

// type: -top, -right, -bottom, -left, -sides, -ends
// size: -base, -quarter, -third, -half, -double, -triple, -quadruple
```

Examples:

```sass
.no-margin
  margin: 0

.no-margin-ends
  margin-top: 0
  margin-bottom: 0

.margin-base
  margin: $spacing-unit

.margin-double-right
  margin-right: double($spacing-unit)

.no-padding-sides
  padding-right: 0
  padding-left: 0

.padding-half-top
  padding-top: halve($spacing-unit)
```

### Box

Use `.box` to create an element out of your content. It has the default
padding and the last element inside has no bottom margin.

<div class="example">
  <div class="box" style="background-color: #eee;">
    <p>Element inside a box</p>
  </div>
</div>

```html
<div class="box" style="background-color: #eee;">
  ...
</div>
```

### Flash

Flash is very similar to box but has a smaller padding.

<div class="example">
  <div class="flash" style="background-color: #eee;">
    <p>Flash</p>
  </div>
</div>

```html
<div class="flash" style="background-color: #eee;">
  <p>Flash</p>
</div>
```
