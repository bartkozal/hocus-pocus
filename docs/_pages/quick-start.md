
## Requirements

Hocus-Pocus requires [Sass](http://sass-lang.com) (version 3.3.0 or later) and
[autoprefixer](https://github.com/postcss/autoprefixer) to proper work.

## Installation

### Bower

Bower is a recommended way to install:

```sh
$ bower install hocus-pocus
```

Then import a main file just after your defaults, but before
rest of stylesheets. If you want to use color variables
in your settings import them first.

```scss
// Import colors
@import "bower_components/hocus-pocus/scss/colors";

// Define your settings
$font-family-base: "Open Sans", sans-serif;
$grid-container: 70rem;

// Import framework
@import "bower_components/hocus-pocus/hocus-pocus";

// Import your stylesheets
@import "compontents/meter",
        "compontents/price-box",
        "inbox/landing-headings-fix";
```

### Npm

If you prefer Hocus-Pocus is available as a npm package:

```sh
$ npm install hocus-pocus
```

## Principles

Stick to rules from [Mark Otto's Code Guide](http://codeguide.co/#css).

Hocus-Pocus applies a following naming convention:

```html
<!-- Element -->
<div class="media"></div>
<a class="btn"></a>

<!-- Element with a related sub-element -->
<div class="media">
  <img class="media-img"></img>
  <div class="media-body"></div>
</div>

<!-- Element with modifier -->
<div class="media media-milli"></div>
<a class="btn btn-primary"></a>

<!-- Element with state -->
<a class="btn is-btn-active"></a>
<a class="btn is-btn-disabled"></a>

<!-- Element that requires a wrapper -->
<!-- i.e. "position: relative" and "position: absolute" pair -->
<div class="box has-close-link">
  <a class="close-link"></a>
</div>

<!-- JavaScript handler -->
<div class="alert js-alert"></div>
```
