<img src="http://bkzl.github.io/hocus-pocus/images/brand-light.png" width="144px" height="72px">

Hocus-Pocus is a simple and design-free [SASS](http://sass-lang.com)
micro-framework.

The main idea behind is to make a universal and lightweight starter kit
that only includes the most common stuff. There is no need to overwrite
existing Hocus-Pocus classes because every default can be modified in
a clean way by changing a variable.

Included features:

* Normalize
* Colors
* Vertical rhythm
* Flexbox grid
* Global box-sizing set to border-box (excluding `<img>`)
* Responsive with design support with customizable breakpoints and approach
  (you can choose between mobile-first and desktop-first)
* Components like: type, list, rule, image, table, form, box, flash, navbar,
  sticky footer
* Layout helpers, spacing helpers, size helpers and visibility helpers

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
