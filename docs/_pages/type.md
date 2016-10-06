
## Typography

Typography elements keep vertical rhythm and have custom reset.

Defaults:

```scss
$font-leading: 1.4;                       // base font leading
$font-size-micro: 11;                     // font size of `.text-micro`
$font-size-small: 13;                     // font size of `small` and `.text-small`
$font-size-base: 15;                      // base font size
$font-size-lead: 18;                      // font size of `.text-lead` element
$font-size-h{1-6}: $font-size-base;       // font size of a heading, set to `$font-size-base` means
                                          // that it will be calculated to keep the vertical-rhythm
$font-size-btn: $font-size-base;          // font size of buttons

$font-family-base: sans-serif;            // base font family
$font-family-headings: $font-family-base; // headings font family
$font-family-monospace: monospace;        // monospace font family

$font-weight-light: 100;                  // light font weight
$font-weight-normal: 400;                 // normal/base font weight
$font-weight-bold: 700;                   // bold font weight
$font-weight-headings: $font-weight-bold; // default font weight of headings

$link-underline: true;                    // should links have underline
$link-active: false;                      // should active links look like clicked
```

Set a custom font size and keep the proper vertical rhythm:

```scss
@include font-size($size);
```

Usage:

```scss
.text {
  @include font-size(12);
}
```

### Headings

<div class="example">
  <h1>Heading Level 1</h1>
</div>

```html
<h1>Heading Level 1</h1>
<span class="h1">Heading Level 1</span>
```

<div class="example">
  <h2>Heading Level 2</h2>
</div>

```html
<h2>Heading Level 2</h2>
<span class="h2">Heading Level 2</span>
```

<div class="example">
  <h3>Heading Level 3</h3>
</div>

```html
<h3>Heading Level 3</h3>
<span class="h3">Heading Level 3</span>
```

<div class="example">
  <h4>Heading Level 4</h4>
</div>

```html
<h4>Heading Level 4</h4>
<span class="h4">Heading Level 4</span>
```

<div class="example">
  <h5>Heading Level 5</h5>
</div>

```html
<h5>Heading Level 5</h5>
<span class="h5">Heading Level 5</span>
```

<div class="example">
  <h6>Heading Level 6</h6>
</div>

```html
<h6>Heading Level 6</h6>
<span class="h6">Heading Level 6</span>
```

### Paragraphs

Default styles for `<p>`, `<strong>`, `<em>`, `<sup>`, `<sub>`, `<small>`,
`<a>`, `<mark>`, `<del>`, `<ins>`, `<s>` and `<u>`.

<div class="example">
  <p>Paragraph with a <strong>strong</strong> element.</p>
  <p>Paragraph with an <em>emphasis</em> element.</p>
  <p>Paragraph with a <sup>sup</sup> element.</p>
  <p>Paragraph with a <sub>sub</sub> element.</p>
  <p>Paragraph with a <small>small</small> element.</p>
  <p>Paragraph with a <a href="#">link</a>.</p>
  <p>Paragraph with a <mark>mark</mark> element.</p>
  <p>Paragraph with a <del>deleted text</del> and an <ins>inserted text</ins> elements.</p>
  <p>Paragraph with a <s>strikethrough</s> element.</p>
  <p>Paragraph with an <u>underline</u> element.</p>
</div>

```html
<p>Paragraph with a <strong>strong</strong> element.</p>
<p>Paragraph with an <em>emphasis</em> element.</p>
<p>Paragraph with a <sup>sup</sup> element.</p>
<p>Paragraph with a <sub>sub</sub> element.</p>
<p>Paragraph with a <small>small</small> element.</p>
<p>Paragraph with a <a href="#">link</a>.</p>
<p>Paragraph with a <mark>mark</mark> element.</p>
<p>Paragraph with a <del>deleted text</del> and an <ins>inserted text</ins> elements.</p>
<p>Paragraph with a <s>strikethrough</s> element.</p>
<p>Paragraph with an <u>underline</u> element.</p>
```

### Blockquote

<div class="example">
  <blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
      Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida.
    </p>
  </blockquote>
</div>

```html
<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
    Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida.
  </p>
</blockquote>
```

### Code

<div class="example">
<pre>
<code>
.hocus-pocus {
  display: block;
}
</code>
</pre>
</div>

```html
<pre>
  <code>
    .hocus-pocus {
      display: block;
    }
  </code>
</pre>
```

### Rule

<div class="example">
  <hr>
</div>

```html
<hr>
```

## Text Helpers

<div class="example">
  <p class="text-micro">Micro text</p>
  <p class="text-small">Small text</p>
  <p class="text-lead">Lead text</p>
</div>

```html
<p class="text-micro">Micro text</p>
<p class="text-small">Small text</p>
<p class="text-lead">Lead text</p>
```

<div class="example">
  <p class="text-mono">Mono text</p>
</div>

```html
<p class="text-mono">Mono text</p>
```

<div class="example">
  <p class="text-light">Light weight text</p>
  <p class="text-normal">Normal weight text</p>
  <p class="text-bold">Bold weight text</p>
</div>

```html
<p class="text-light">Light weight text</p>
<p class="text-normal">Normal weight text</p>
<p class="text-bold">Bold weight text</p>
```

<div class="example">
  <p class="text-lowercase">Lowercased text</p>
  <p class="text-uppercase">Uppercased text</p>
  <p class="text-capitalize">Capitalized text</p>
</div>

```html
<p class="text-lowercase">Lowercased text</p>
<p class="text-uppercase">Uppercased text</p>
<p class="text-capitalize">Capitalized text</p>
```

<div class="example">
  <p class="text-left">Left aligned text</p>
  <p class="text-center">Center aligned text</p>
  <p class="text-right">Right aligned text</p>
</div>

```html
<p class="text-left">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-right">Right aligned text</p>
```
