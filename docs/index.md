---
layout: default
---

Hocus-Pocus is a simple and design-free [SASS](http://sass-lang.com)
micro framework, ideal as a CSS starter kit.

The main idea behind the Hocus-Pocus is to make the most universal and
lightweight framework as possible. It includes only the common stuff
without the specific design. You don't have to overwrite provided CSS
classes and every default can be modified in a clean way just by adjusting
the appropriate variable.

It could not exist without work of awesome people responsible for these
projects:

* [inuitcss](https://github.com/inuitcss)
* [primer](https://github.com/primer/primer)
* [normalize.css](https://github.com/necolas/normalize.css)
* [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid)
* [sassy-gridlover](https://github.com/hiulit/Sassy-Gridlover)
* [colors](https://github.com/mrmrs/colors)

Sites built with Hocus-Pocus:

* [Shelly Cloud Status](https://status.shellycloud.com)

### Quick Start

To install Hocus-Pocus use Bower:

```sh
$ bower install hocus-pocus
```

Or [Rails Assets](https://rails-assets.org) if you have a Ruby app:

```ruby
# Gemfile

source 'https://rails-assets.org' do
  gem 'rails-assets-hocus-pocus'
end
```

Then include the main Hocus-Pocus file after your variables, but before
the rest of your stylesheets:

```sass
// Your variables
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

Follow the rules from [Mark Otto's Code Guide](http://codeguide.co/#css)

Use [autoprefixer](https://github.com/postcss/autoprefixer) or [autoprefixer-rails](https://github.com/ai/autoprefixer-rails)

Use the following naming convention:

```html
<!-- Objects -->
<div class="media"></div>
<a class="btn"></a>

<!-- Object with a related sub-object -->
<div class="media">
  <img class="media-img"></div>
  <div class="media-body"></div>
</div>

<!-- Object with modifier -->
<div class="media media-milli"></div>
<a class="btn btn-primary"></a>

<!-- Object with state -->
<a class="btn is-btn-active"></a>
<a class="btn is-btn-disabled"></a>

<!-- Object which requires wrapper -->
<!-- f.e. "position: relative" and "position: absolute" pair -->
<div class="box has-close-link">
  <a class="close-link"></a>
</div>

<!-- JavaScript handler -->
<div class="alert js-alert"></div>
```

Avoid styling generic HTML elements:

```css
/* bad */
p {
  ...
}

/* good */
.blog-post-body > p {
  ...
}
```

Avoid nested classes:

```css
/* bad */
.blog-post .meta .author {
  ...
}

/* better */
.blog-post-meta-author {
  ...
}

/* good */
.post-author {
  ...
}
```

Never use the HTML id attribute in stylesheets:

```css
/* bad */
#headline {
  ...
}

/* good */
.headline {
  ...
}
```
