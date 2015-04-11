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

## Contributing

[Add a new issue][issues] for bugs and ideas.

[sass]: http://sass-lang.com
[documentation]: http://bkzl.github.io/hocus-pocus/
[rails-assets]: https://rails-assets.org
[inuitcss]: https://github.com/inuitcss
[normalize]: https://github.com/necolas/normalize.css
[flexboxgrid]: https://github.com/kristoferjoseph/flexboxgrid
[sassy-gridlover]: https://github.com/hiulit/Sassy-Gridlover
[colors]: https://github.com/mrmrs/colors
[issues]: https://github.com/bkzl/hocus-pocus/issues
