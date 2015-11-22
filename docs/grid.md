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
