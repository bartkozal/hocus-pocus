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
$hp-main-container: 1337px

@import "bower_components/hocus-pocus/hocus-pocus"

// ...
@import "objects/meter"
@import "objects/price-box"
@import "inbox/landing-headings-fix"
// ...
```

## Principles

1. Use [autoprefixer][6] or [autoprefixer-rails][7]
2. I recommend the following directories structure:

```
core/
	|- ...
	|- _base.sass
	|- _settings.sass
objects/
	| - ...
inbox/
	| - ...
```

`core/` - All low-level sass files like functions, mixins, helpers and also the base styles (for html elements). Please check the source code of Hocus-Pocus to get the referance.
`objects/` - Reusable abstractions and components of application specific elements f.e. `.meter` or `.price-box`.
`inbox/` - Temporary styles, especially useful when you work with someone who isn't familiar with app's stylesheet.

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
[322]: https://github.com/bkzl/hocus-pocus/issues