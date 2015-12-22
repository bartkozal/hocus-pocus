### Width Helpers

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

### Color Helpers

Color and background color helpers are based on the `$color-map`.

*Color helpers are using !important directive.*

```scss
.text[-color];
.bg[-color];

// color: -aqua, -blue, -navy, -teal, -green, -olive, -lime, -yellow, -orange,
//        -red, -fuchsia, -purple, -maroon, -white, -silver, -grey, -black,
//        -brand, -positive, -negative, -informative, -muted
```

Examples:

```scss
.text-muted {
  color: $color-muted;
}

.text-brand {
  color: $color-brand;
}

.bg-black {
  background-color: #111;
}

.bg-negative {
  background-color: $color-negative;
}
```

### Visibility Helpers

`.hidden`, `.visible`, `.block`, `.inline-block`, `.inline`

*Visibility helpers are automatically generated for responsive web design
breakpoints and using !important directive.*

### Spacing Helpers

Spacing helpers are based on the `$spacing-map`. There are four
helpers with different variants and sizes:

*Spacing helpers are automatically generated for responsive web design
breakpoints and using !important directive.*

```scss
.margin[-size][-type];
.padding[-size][-type];
.no-margin[-type];
.no-padding[-type];

// type: -top, -right, -bottom, -left, -sides, -ends
// size: -quarter, -third, -half, -double, -triple, -quadruple
```

Examples:

```scss
.no-margin {
  margin: 0;
}

.no-margin-ends {
  margin-top: 0;
  margin-bottom: 0;
}

.margin-base {
  margin: $spacing-unit;
}

.margin-double-right {
  margin-right: double($spacing-unit);
}

.no-padding-sides {
  padding-right: 0;
  padding-left: 0;
}

.padding-half-top {
  padding-top: halve($spacing-unit);
}
```

### Layout Helpers

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
