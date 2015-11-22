---
layout: default
---

Base font is described by: `$font-size-base`,
`$font-family-base`, `$font-weight-normal` and `$color-font`.

The `+font-size` mixin allows to set a custom font size
and keep the proper vertical rhythm:

```sass
div
  @include font-size(12)

// div
//   font-size: 0.75rem;
//   line-height: 1.0625rem;

```

### Headings

You can change a font-weight for all headings with `$font-weight-headings`.

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

### Helpers

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
<p class="text-lowercase">Lowercase text</p>
<p class="text-uppercase">Uppercase text</p>
<p class="text-capitalize">Capitalize text</p>
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

<div class="example">
  <p class="text-muted">Muted text</p>
  <p class="text-positive">Positive text</p>
  <p class="text-negative">Negative text</p>
  <p class="text-informative">Informative text</p>
</div>

```html
<p class="text-muted">Muted text</p>
<p class="text-positive">Positive text</p>
<p class="text-negative">Negative text</p>
<p class="text-informative">Informative text</p>
```
