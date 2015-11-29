### Installation

Hocus-Pocus requires [Sass](http://sass-lang.com) and
[autoprefixer](https://github.com/postcss/autoprefixer) to proper work.

Use Bower to install it:

```sh
$ bower install hocus-pocus
```

If you prefer, it's available as the NPM package too:

```sh
$ npm install hocus-pocus
```

Then import a main file just after your variables, but before
the rest of stylesheets. If you want to use color variables
in your settings import them at the beginning.

```scss
// Import colors
@import "bower_components/hocus-pocus/hocus-pocus/scss/colors";

// Define your settings
$font-family-base: "Open Sans", sans-serif;
$grid-container: 70rem;
$navbar-background: $color-blue;

// Import framework
@import "bower_components/hocus-pocus/hocus-pocus";

// Import your stylesheets
@import "compontents/meter",
        "compontents/price-box",
        "inbox/landing-headings-fix";
```

### Principles

Stick to the rules from [Mark Otto's Code Guide](http://codeguide.co/#css).
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
