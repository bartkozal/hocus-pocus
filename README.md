# Hocus-Pocus

Hocus-Pocus is a simple and design-free [SASS][sass] micro framework, ideal as a CSS starter kit.

It could not exist without work of awesome people behind these projects:

* [inuitcss][inuitcss]
* [normalize.css][normalize]
* [flexboxgrid][flexboxgrid]
* [sassy-gridlover][sassy-gridlover]
* [colors][colors]

[Check out the Hocus-Pocus documentation][documentation] to learn more.

## Quick Start

To install Hocus-Pocus use Bower:

```shell
$ bower install hocus-pocus
```

Or [Rails Assets][rails-assets] if you have a Ruby app:

```rb
# Gemfile

source 'https://rails-assets.org'

gem 'rails-assets-hocus-pocus'
```

Then include the main Hocus-Pocus file after your variables, but before
the rest of stylesheets:

```sass
$base-font-family: "Open Sans", sans-serif
$grid-container: 70rem

@import "bower_components/hocus-pocus/hocus-pocus"

@import "objects/meter"
@import "objects/price-box"
@import "inbox/landing-headings-fix"
```

## Principles


1. Follow the rules from [Mark Otto's Code Guide][code-guide]

1. Use [autoprefixer][autoprefixer] or [autoprefixer-rails][autoprefixer-rails]

1. Use the following naming convention:

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

1. Avoid styling generic HTML elements:

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

1. Avoid nested classes:

  ```css
    /* bad */
    .blog-post .meta .author {
      ...
    }

    /* good */
    .blog-post-meta-author {
      ...
    }
  ```

1. Never use the HTML id attribute in stylesheets:

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

## Contributing

[Add a new issue][issues] for bugs and ideas.

[sass]: http://sass-lang.com
[documentation]: http://bkzl.github.io/hocus-pocus/
[rails-assets]: https://rails-assets.org
[autoprefixer]: https://github.com/postcss/autoprefixer
[autoprefixer-rails]: https://github.com/ai/autoprefixer-rails
[code-guide]: http://codeguide.co/#css
[inuitcss]: https://github.com/inuitcss
[normalize]: https://github.com/necolas/normalize.css
[flexboxgrid]: https://github.com/kristoferjoseph/flexboxgrid
[sassy-gridlover]: https://github.com/hiulit/Sassy-Gridlover
[colors]: https://github.com/mrmrs/colors
[issues]: https://github.com/bkzl/hocus-pocus/issues
