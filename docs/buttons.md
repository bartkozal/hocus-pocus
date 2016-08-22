### Buttons

Defaults:

```scss
$btn-flat: false;                // disable drop shadow
$font-size-btn: $font-size-base; // set font size
```

Define own button types:

```scss
@include btn($name, $color)
```

Usage:

```scss
@include btn('primary', #00F)
```

### Button Types

<div class="example">
  <button type="submit">Form button</button> <a href="#" class="btn">Link as a button</a>
</div>

```html
<button type="submit">Form button</button>

<a href="#" class="btn">Link as a button</a>
```

<div class="example">
  <button disabled>Disabled button</button> <a href="#" class="btn btn-disabled">Disabled link as a button</a>
</div>

```html
<button disabled>Disabled button</button>

<a href="#" class="btn btn-disabled">Disabled link as a button</a>
```

<div class="example">
  <a href="#" class="btn btn-outline">Outline button</a> <a href="#" class="btn btn-blue btn-outline">Outline brand button</a>
</div>

```html
<a href="#" class="btn btn-outline">Outline button</a>

<a href="#" class="btn btn-brand btn-outline">Outline brand button</a>
```

<div class="example">
  <a href="#" class="btn btn-flat bg-aqua">Flat button</a>
</div>

```html
<a href="#" class="btn btn-flat">Flat button</a>
```

<div class="example">
  <a href="#" class="btn btn-shadow bg-aqua">Shadowed button</a>
</div>

```html
  <a href="#" class="btn btn-shadow">Shadowed button</a>
```

<div class="example">
  <a href="#" class="btn btn-block">Block button</a>
</div>

```html
<a href="#" class="btn btn-block">Block button</a>
```

<div class="example">
  <a href="#" class="btn btn-blue">Brand button</a>
</div>

```html
<a href="#" class="btn btn-brand">Brand button</a>
```

<div class="example">
  <a href="#" class="btn btn-positive">Positive button</a>
</div>

```html
<a href="#" class="btn btn-positive">Positive button</a>
```

<div class="example">
  <a href="#" class="btn btn-negative">Negative button</a>
</div>

```html
<a href="#" class="btn btn-negative">Negative button</a>
```
