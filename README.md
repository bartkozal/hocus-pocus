<img src="http://bkzl.github.io/hocus-pocus/images/brand-light.png" width="144px" height="72px">

Hocus-Pocus is a simple and design-free CSS micro-framework built with
[SASS](http://sass-lang.com).

The main idea behind the Hocus-Pocus was to make a universal and
lightweight CSS starter kit that only includes the most common stuff.
Every default can be modified in a clean way by changing a variable, so
there is no need to overwrite provided classes.

**[Looking for a quick start? Learn more from the
documentation.](http://hocus-pocus.io)**

Features included:

* Normalize
* Colors
* Vertical rhythm
* Box-sizing for all elements (excluding `<img>`) is set to `border-box`
* Grid system based on fractals with flexbox under the hood
* Responsive support with customizable breakpoints (and approach, you can
  choose between mobile-first and desktop-first)
* Helpers: layout, spacing, size, visibility
* Components: type, list, rule, image, table, form, box, flash, navbar,
  sticky footer
* Extras

Sites built with Hocus-Pocus:

* [Shelly Cloud Status](https://status.shellycloud.com)

* * * 

Hocus-Pocus could not exist without work of awesome people responsible for
these projects:

* [inuitcss](https://github.com/inuitcss)
* [primer](https://github.com/primer/primer)
* [normalize.css](https://github.com/necolas/normalize.css)
* [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid)
* [sassy-gridlover](https://github.com/hiulit/Sassy-Gridlover)
* [colors](https://github.com/mrmrs/colors)

* * *

### Development

To edit and compile documentation locally you have to install two Ruby
gems first: `$ gem install jekyll redcarpet`. Then fetch the npm
dependencies with `$ npm install`. There are two
[Grunt](http://gruntjs.com) tasks available:

* `$ grunt server` - start a server and compile CSS on every edit
* `$ grunt publish` - build and push changes to production

### Changelog

Changelog is available under [the releases
section](https://github.com/bkzl/hocus-pocus/releases).

### Contributing

Noticed a bug or have an idea? Please [add a new
issue](https://github.com/bkzl/hocus-pocus/issues). Thanks!
