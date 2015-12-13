Choose your preferred way of writing responsive web design by setting the
`$rwd-type` variable to `mobile-first` or `desktop-first`.

Define custom breakpoints as `$rwd-map` variable. You can provide values
with one or two sizes.

Each breakpoint gets width, spacing, visibility helpers and a sass mixin.

```scss
$rwd-type: desktop-first;
$rwd-map: (mobile: 680px, tablet: 681px 1200px);

@include rwd('mobile') {
  h1 {
    color: red;
  }
}
```

```html
<div class="mobile-hidden">...</div>
<div class="hidden mobile-visible">...</div>

<div class="grid">
  <div class="grid-item 1/4 mobile-hidden">
    ...
  </div>

  <div class="grid-item 3/4 mobile-1/1">
    <h1 class="mobile-no-margin-top">
      ...
    </h1>
  </div>
</div>
```
