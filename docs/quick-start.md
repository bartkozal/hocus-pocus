---
layout: default
---

To install Hocus-Pocus use Bower:

```sh
$ bower install hocus-pocus
```

Then include the main Hocus-Pocus file after your variables, but before
the rest of your stylesheets:

```sass
// Your defaults
$font-family-base: "Open Sans", sans-serif
$grid-container: 70rem

// Hocus-Pocus include
@import "bower_components/hocus-pocus/hocus-pocus"

// Your stylesheets
@import "objects/meter"
@import "objects/price-box"
@import "inbox/landing-headings-fix"
```

### Principles

Hocus-Pocus requires [SASS](http://sass-lang.com) and
[autoprefixer](https://github.com/postcss/autoprefixer) to proper work.

I recommend to follow the rules from [Mark Otto's Code Guide](http://codeguide.co/#css)
and the following naming convention:

```html
<!-- Object -->
<div class="media"></div>
<a class="btn"></a>

<!-- Object with a related sub-object -->
<div class="media">
  <img class="media-img"></img>
  <div class="media-body"></div>
</div>

<!-- Object with modifier -->
<div class="media media-milli"></div>
<a class="btn btn-primary"></a>

<!-- Object with state -->
<a class="btn is-btn-active"></a>
<a class="btn is-btn-disabled"></a>

<!-- Object which requires wrapper -->
<!-- i.e. "position: relative" and "position: absolute" pair -->
<div class="box has-close-link">
  <a class="close-link"></a>
</div>

<!-- JavaScript handler -->
<div class="alert js-alert"></div>
```
