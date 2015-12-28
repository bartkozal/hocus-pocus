### Container

Create a centered wrapper for grid elements. Usually used as a root element
for a whole layout.

Defaults:

```scss
$grid-container: 1020px; // container's width
```

Usage:

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
    <div class="grid-preview">.grid-item.1/3</div>
  </div>

  <div class="grid-item 2/3">
    <div class="grid-preview">.grid-item.2/3</div>
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

Create a flat grid without gutter:

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

Create a grid where content of a first item is aligned to left and content
of a second item is aligned to right.

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

Reverse grid items order:

<div class="example">
  <div class="grid grid-reverse">
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
<div class="grid grid-reverse">
  <div class="grid-item 1/3">
    ...
  </div>
  <div class="grid-item 2/3">
    ...
  </div>
</div>
```

Stack grid items:

<div class="example">
  <div class="grid grid-stack">
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
<div class="grid grid-stack">
  <div class="grid-item 1/3">
    ...
  </div>
  <div class="grid-item 2/3">
    ...
  </div>
</div>
```

### Float Helpers

Clearfix and float helpers.

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
