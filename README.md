# Hocus-Pocus

Hocus-Pocus is a simple, design-free [SASS][1] micro framework, ideal as a css starter kit.

It could not exist without work of the awesome people. There is a list of resources which I used:

* [necolas/normalize.css][11]
* [inuitcss/generic.reset][2]
* [inuitcss/tools.functions][4]
* [inuitcss/trumps.widths][16]
* [kristoferjoseph/flexboxgrid][10]
* [hiulit/Sassy-Gridlover][13]
* [SMACSS][14]
* [MVCSS][15]
* [Gridlover][12]
* [Inheriting box-sizing Probably Slightly Better Best-Practice][3]

To install Hocus-Pocus use Bower:

```shell
$ bower install hocus-pocus
```

Or [Rails Assets][5] if you have a Rails app:

```rb
# Gemfile

source 'https://rails-assets.org'

gem 'rails-assets-hocus-pocus'
```

Then include the main Hocus-Pocus file after your settings, but before the rest of stylesheets:

```sass
$hp-base-container: 1337px
$hp-base-font-family: "Open Sans", sans-serif

@import "bower_components/hocus-pocus/hocus-pocus"

@import "objects/meter"
@import "objects/price-box"
@import "inbox/landing-headings-fix"
```

## What is included?

1. Normalize
2. Box-sizing global reset
3. Vertical rhythm
4. Grid based on flexbox
5. Widths helpers in fraction format

## Principles

1. Use [autoprefixer][6] or [autoprefixer-rails][7]
2. Use the following directories structure (you should check the source code of Hocus-Pocus to get the reference):

  ```
  core/
    |- ...
  objects/
    |- ...
  inbox/
    |- ...
  application.sass
  ```

  `core/` - All low-level sass files like functions, mixins, helpers and base styles for html elements

  `objects/` - Reusable abstractions of application specific elements f.e. `.meter` or `.price-box`

  `inbox/` - Temporary styles, especially useful when you work with someone who isn't familiar with application's css

  `application.sass` - Main file, use it only to import partials

3. Use syntax rules from [Mark Otto's Code Guide][8]
4. Use the following `modifier-object-subobject` naming convention:

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
    <div class="media milli-media"></div>
    <a class="btn primary-btn"></a>

    <!-- Object with state -->
    <a class="btn is-active-btn"></a>
    <a class="btn is-disabled-btn"></a>

    <!-- Object which requires wrapper -->
    <!-- f.e. "position: relative" and "position: absolute" pair -->
    <div class="box has-close-link">
      <a class="close-link"></a>
    </div>

    <!-- JavaScript handler -->
    <div class="alert js-alert"></div>
  ```
4. Use classes over IDs
5. Avoid styling generic HTML elements
6. Avoid more than a one modifier and a one state class per object
7. Avoid nested classes, use the `.object-subobject` rule instead

## Contributing

[Add a new issue][9] for bugs and ideas.

[1]: http://sass-lang.com
[2]: https://github.com/inuitcss/generic.reset
[3]: http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
[4]: https://github.com/inuitcss/tools.functions
[5]: https://rails-assets.org
[6]: https://github.com/postcss/autoprefixer
[7]: https://github.com/ai/autoprefixer-rails
[8]: http://codeguide.co/#css
[9]: https://github.com/bkzl/hocus-pocus/issues
[10]: https://github.com/kristoferjoseph/flexboxgrid
[11]: https://github.com/necolas/normalize.css
[12]: http://www.gridlover.net
[13]: https://github.com/hiulit/Sassy-Gridlover
[14]: https://smacss.com
[15]: http://mvcss.io
[16]: https://github.com/inuitcss/trumps.widths
