---
layout: default
---

Hocus-Pocus is a simple and design-free [SASS](http://sass-lang.com)
micro framework, ideal as a CSS starter kit.

It could not exist without work of awesome people behind these projects:

* [inuitcss](https://github.com/inuitcss)
* [normalize.css](https://github.com/necolas/normalize.css)
* [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid)
* [sassy-gridlover](https://github.com/hiulit/Sassy-Gridlover)
* [colors](https://github.com/mrmrs/colors)

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
the rest of stylesheets:

```sass
$base-font-family: "Open Sans", sans-serif
$grid-container: 70rem

@import "bower_components/hocus-pocus/hocus-pocus"

@import "objects/meter"
@import "objects/price-box"
@import "inbox/landing-headings-fix"
```

### Contributing

[Add a new issue](https://github.com/bkzl/hocus-pocus/issues)
for bugs and ideas.
