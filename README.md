# Hocus-Pocus

Hocus-Pocus is a simple, design-free [SASS][1] micro framework, ideal as a starter kit for stylesheets. I chose my favourite parts of concepts like [inuit.css][2], [SMACSS][3] or [mvcss][4] and mixed them with my own ideas.

To install it use bower:

```shell
$ bower install hocus-pocus
```

Or [Rails Assets][5] if it's a Rails app:

```rb
# Gemfile

source 'https://rails-assets.org'
gem 'rails-assets-hocus-pocus'
```

Then you can include the main Hocus-Pocus file after your variables and before the rest of stylesheets:

```sass
$hp-base-container: 1337px
$hp-base-font-family: "Open Sans", sans-serif

@import "bower_components/hocus-pocus/hocus-pocus"

@import "objects/meter"
@import "objects/price-box"
@import "inbox/landing-headings-fix"
```

## Principles

1. Use [autoprefixer][6] or [autoprefixer-rails][7]
2. Use the following directories structure (please check the source code of Hocus-Pocus to get the referance):

  ```
  core/
    |- ...
    |- _base.sass
    |- _settings.sass
  objects/
    |- ...
  inbox/
    |- ...
  application.sass
  ```

  `core/` - All low-level sass files like functions, mixins, helpers and also the base styles for html elements

  `objects/` - Reusable abstractions and components of application specific elements f.e. `.meter` or `.price-box`

  `inbox/` - Temporary styles, especially useful when you work with someone who isn't familiar with app's stylesheet

  `application.sass` - Main file, use it only for imports

3. Use syntax rules from [Mark's Otto Code Guide][8]
4. Use the following name convenctions:

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

    <!-- Object which requires a wrapper (f.e. "position: relative" and "position: absolute" pair) -->
    <div class="box has-close-link">
      <a class="close-link">x</a>
    </div>

    <!-- JavaScript handler -->
    <div class="alert js-alert"></div>
  ```

4. Use classes over IDs
5. Avoid styles for generic HTML elements
6. Avoid more than a one modifier and a one state class per object
7. Avoid nested classes, use the `.object-subobject` rule instead

## What is included?

1. Normalize
2. Box-sizing global reset

## Contributing

[Add a new issue][322] for bugs and ideas.

[1]: http://sass-lang.com
[2]: https://github.com/inuitcss
[3]: https://smacss.com
[4]: http://mvcss.github.io
[5]: https://rails-assets.org
[6]: https://github.com/postcss/autoprefixer
[7]: https://github.com/ai/autoprefixer-rails
[8]: http://codeguide.co/#css
[322]: https://github.com/bkzl/hocus-pocus/issues
