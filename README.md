<img src="http://bkzl.github.io/hocus-pocus/images/brand-light.png" width="144px" height="72px">

Hocus-Pocus is a simple and design-free [SASS](http://sass-lang.com)
micro framework, ideal as a CSS starter kit.

The main idea behind the Hocus-Pocus is to make the most universal and
lightweight framework as possible. It includes only the common stuff
without the specific design. You don't have to overwrite provided CSS
classes and every default can be modified in a clean way just by adjusting
the appropriate variable.

**[Learn more from the documentation.](http://hocus-pocus.io)**

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
$font-family-base: "Open Sans", sans-serif
$grid-container: 70rem

@import "bower_components/hocus-pocus/hocus-pocus"

@import "objects/meter"
@import "objects/price-box"
@import "inbox/landing-headings-fix"
```

### Development

To run docs locally you need to install `jekyll` and `redcarpet` Ruby gems
first, then fetch npm dependencies with:

```sh
$ npm install
```

Now you can start a local server by running:

```sh
$ grunt server
```

To build and deploy to production:

```sh
$ grunt publish
```

### Contributing

[Add a new issue](https://github.com/bkzl/hocus-pocus/issues)
for bugs and ideas.
