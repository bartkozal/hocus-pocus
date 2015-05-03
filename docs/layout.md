---
layout: default
---

### Grid system

Centered page wrapper with width set to `$grid-container`

<div class="container grid-preview">
  .container
</div>

```html
<div class="container">
  ...
</div>
```

`.grid` with nested `.grid-item` and <a href="/spacing">width helper</a>
are used to build grid:

<div class="grid">
  <div class="grid-item 1/3">
    <div class="grid-preview">
      .grid > .grid-item.1/3
    </div>
  </div>

  <div class="grid-item 2/3">
    <div class="grid-preview">
      .grid > .grid-item.2/3
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
and vertically:

<div class="grid grid-left">
  <div class="grid-item 1/3">
    <div class="grid-preview">
      .grid.grid-left > .grid-item.1/3
    </div>
  </div>
</div>

```html
<div class="grid grid-left">
  ...
</div>
```

<div class="grid grid-center">
  <div class="grid-item 1/3">
    <div class="grid-preview">
      .grid.grid-center > .grid-item.1/3
    </div>
  </div>
</div>

```html
<div class="grid grid-center">
  ...
</div>
```

<div class="grid grid-right">
  <div class="grid-item 1/3">
    <div class="grid-preview">
      .grid.grid-right > .grid-item.1/3
    </div>
  </div>
</div>

```html
<div class="grid grid-right">
  ...
</div>
```

<div class="grid grid-top">
  <div class="grid-item 1/2">
    <div class="grid-preview pv">
      .grid.grid-top > .grid-item.1/2
    </div>
  </div>
  <div class="grid-item 1/2">
    <div class="grid-preview">
      .grid.grid-top > .grid-item.1/2
    </div>
  </div>
</div>

```html
<div class="grid grid-top">
  ...
</div>
```

<div class="grid grid-middle">
  <div class="grid-item 1/2">
    <div class="grid-preview pv">
      .grid.grid-middle > .grid-item.1/2
    </div>
  </div>
  <div class="grid-item 1/2">
    <div class="grid-preview">
      .grid.grid-middle > .grid-item.1/2
    </div>
  </div>
</div>

```html
<div class="grid grid-middle">
  ...
</div>
```

<div class="grid grid-bottom">
  <div class="grid-item 1/2">
    <div class="grid-preview pv">
      .grid.grid-bottom > .grid-item.1/2
    </div>
  </div>
  <div class="grid-item 1/2">
    <div class="grid-preview">
      .grid.grid-bottom > .grid-item.1/2
    </div>
  </div>
</div>

```html
<div class="grid grid-bottom">
  ...
</div>
```

Moreover, you can create flat grid without the gutter:

<div class="grid grid-flat grid-preview pv">
  <div class="grid-item 1/2">
    <div class="grid-preview">
      .grid.grid-flat > .grid-item.1/2
    </div>
  </div>
  <div class="grid-item 1/2">
    <div class="grid-preview">
      .grid.grid-flat > .grid-item.1/2
    </div>
  </div>
</div>

```html
<div class="grid grid-flat">
  ...
</div>
```
