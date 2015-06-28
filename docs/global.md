---
layout: default
---

[Normalize](https://github.com/necolas/normalize.css) is included.

Box-sizing is changed for all elements (excluding `<img>`) and set to `border-box`.

Vertical scrollbar is always visible.

### Defaults

To see all available defaults please check the `sass/_defaults.sass` file.
Variables listed below are recommended to set on your part.

```sass
$color-ui: $color-silver
$color-font: $color-black
$color-link: $color-blue
$color-muted: $color-gray

$font-leading: 1.4
$font-size-micro: 11
$font-size-small: 13
$font-size-base: 15

$font-family-base: sans-serif
$font-family-headings: $font-family-base
$font-family-monospace: monospace

$grid-container: 68rem
$grid-gutter: $spacing-unit

$border-radius-base: 4px

$link-underline: true
$link-active: true
$link-menu-color: $color-white 
$link-menu-background: $color-link 

$navbar-background: $color-black 
$navbar-color: $color-white 
$navbar-link-color: $color-white 
$navbar-link-background: rgba($color-white, .15) 
```

### Colors

<div class="grid">
  <div class="grid-item 1/6"><div class="color-block color-block-aqua">$color-aqua</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-blue">$color-blue</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-navy">$color-navy</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-teal">$color-teal</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-green">$color-green</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-olive">$color-olive</div></div>

  <div class="grid-item 1/6"><div class="color-block color-block-lime">$color-lime</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-yellow">$color-yellow</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-orange">$color-orange</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-red">$color-red</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-fuchsia">$color-fuchsia</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-purple">$color-purple</div></div>

  <div class="grid-item 1/6"><div class="color-block color-block-maroon">$color-maroon</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-white">$color-white</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-silver">$color-silver</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-gray">$color-gray</div></div>
  <div class="grid-item 1/6"><div class="color-block color-block-black">$color-black</div></div>
</div>

### Mixins

There is a `font-size` mixin which allows to set the element's font size
and keep the proper vertical rhytm:

```sass
div
  @include font-size(12)

// div
//   font-size: 0.75rem;
//   line-height: 1.0625rem;

```

### Functions

Sizing functions return a quotient/product of the provided value.

```sass
div
  padding: quarter(12px)
  // padding: 3px

div
  padding: third(12px)
  // padding: 4px

div
  padding: halve(12px)
  // padding: 6px

div
  padding: double(12px)
  // padding: 24px

div
  padding: triple(12px)
  // padding: 36px

div
  padding: quadruple(12px)
  // padding: 48px
```
