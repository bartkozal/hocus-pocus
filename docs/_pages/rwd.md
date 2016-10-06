
## Responsive Design

Choose approach of writing responsive design that you prefer:
`mobile-first` or `desktop-first`.

Define custom breakpoints. Each of them gets a mixin and own set of helpers.

Defaults:

```scss
$rwd-type: mobile-first;  // choose between `mobile-first` and `desktop-first`
$rwd-map: (
  'tablet': 768px 1200px,
  'desktop': 1201px
);                        // helpers are based on this map
```

Additional helper for hidpi displays:

```scss
@include hidpi($density); // in dpi, defaults to 192 (retina displays)
```

Usage:

```scss
$rwd-type: desktop-first;
$rwd-map: (mobile: 680px, tablet: 681px 1200px);

@include rwd('mobile') {
  h1 {
    color: $color-red;
  }
}

@include hidpi {
  .logo {
    background-image: url('logo@2x.png');
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

## Width Helpers

Width helpers work with various elements like grid items, boxes, form inputs,
table cells etc.

Fractions of these numbers are available: `n/1`, `n/2`, `n/3`, `n/4`,
`n/5`, `n/6`, `n/8`, `n/9`, `n/10` and `n/12`.

Width helpers are generated for each breakpoint in `$rwd-map`.

Usage:

<div class="grid">
  <div class="grid-item 1/1">
    <div class="preview-grid">
      .1/1
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 1/4">
    <div class="preview-grid">
      .1/4, .2/8, .3/12
    </div>
  </div>
  <div class="grid-item 3/4">
    <div class="preview-grid">
      .3/4, .6/8, .9/12
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 2/5">
    <div class="preview-grid">
      .2/5, .4/10
    </div>
  </div>
  <div class="grid-item 3/5">
    <div class="preview-grid">
      .3/5, .6/10
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 1/6">
    <div class="preview-grid">
      .1/6, .2/12
    </div>
  </div>
  <div class="grid-item 5/6">
    <div class="preview-grid">
      .5/6, .10/12
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 1/2">
    <div class="preview-grid">
      .1/2, .2/4, .3/6, .4/8, .5/10, .6/12
    </div>
  </div>
  <div class="grid-item 1/8">
    <div class="preview-grid">
      .1/8
    </div>
  </div>
  <div class="grid-item 3/8">
    <div class="preview-grid">
      .3/8
    </div>
  </div>
</div>

<div class="grid">
  <div class="grid-item 1/5 mobile-1/2">
    <div class="preview-grid">
      .1/5.mobile-1/2
    </div>
  </div>
  <div class="grid-item 4/5 mobile-1/2">
    <div class="preview-grid">
      .4/5.mobile-1/2
    </div>
  </div>
</div>

## Visibility Helpers

Specify visibility of an element.

Visibility helpers use `!important` and are generated for each breakpoint in `$rwd-map`.

Following classes are available: `.hidden`, `.visible`, `.block`,
`.inline-block` and `.inline`

Usage:

<div class="example">
  <p class="inline mobile-hidden">Inline paragraph hidden on mobile</p>
  <small class="hidden mobile-block">Block small text visible on mobile</small>
</div>

```html
<p class="inline mobile-hidden">Inline paragraph hidden on mobile</p>
<small class="hidden mobile-block">Block small text visible on mobile</small>
```

## Spacing Helpers

Specify spacing (margin/padding) of an element.

Spacing helpers use `!important` and are generated for each size
in `$spacing-map` and each breakpoint in `$rwd-map`.

Defaults:

```scss
// spacing helpers and media gutter modifiers are generated based on this map
$spacing-map: (
  'quarter': quarter($spacing-unit),
  'third': third($spacing-unit),
  'half': halve($spacing-unit),
  'double': double($spacing-unit),
  'triple': triple($spacing-unit),
  'quadruple': quadruple($spacing-unit)
);
```

Usage:

```scss
.margin[-size][-type];
.padding[-size][-type];
.no-margin[-type];
.no-padding[-type];

/*
 * Where [-type] is blank (all values) or one of these values:
 *   -top, -right, -bottom, -left, -sides, -ends
 *
 * Where [-size] is blank ($spacing-unit) or one of these values:
 *   -quarter, -third, -half, -double, -triple, -quadruple
 */
```

<div class="example">
  <div class="padding-ends bg-green text-white text-mono text-small">
    .padding-ends
  </div>
  <div class="margin no-padding bg-olive text-white text-mono text-small">
    .margin.no-padding
  </div>
  <div class="margin-double-bottom bg-teal text-white text-mono text-small">
    .margin-double-bottom
  </div>
  <div class="padding-half-left padding-half-top mobile-no-padding-left bg-aqua text-white text-mono text-small">
    .padding-half-left.padding-half-top.mobile-no-padding-left
  </div>
  <div class="mobile-margin-sides bg-blue text-white text-mono text-small">
    .mobile-margin-sides
  </div>
  <div class="mobile-padding-half bg-navy text-white text-mono text-small">
    .mobile-padding-half
  </div>
</div>

```html
<div class="padding-ends">...</div>
<div class="margin no-padding">...</div>
<div class="margin-double-bottom">...</div>
<div class="padding-half-left padding-half-top mobile-no-padding-left">...</div>
<div class="mobile-margin-sides">...</div>
<div class="mobile-padding-half">...</div>
```
