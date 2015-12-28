<div class="hidden">
  <a href="http://hocus-pocus.io">
    <img src="http://bkzl.github.io/hocus-pocus/img/brand-light.png" width="144px" height="72px">
  </a>
</div>

Hocus-Pocus is a design-free [Sass](http://sass-lang.com) micro-framework.

The main idea behind is to make a universal and lightweight starter kit
that only includes the most common stuff. There is no need to overwrite
existing Hocus-Pocus classes because every default can be modified in
a clean way by changing a variable. I wrote [a short story](https://medium.com/@bkzl/hocus-pocus-e76a6d52801b)
why have I started working on another CSS framework.

Included features:

* Improved Normalize reset
* Default colors set
* Global box-sizing set to border-box
* Flexbox based grid
* Fraction width helpers
* Responsive web design support with customizable breakpoints and approach (mobile or desktop first)
* Visibility, spacing and color helpers (generated for custom responsive breakpoints!)
* Base typography with vertical rhythm
* Lists, definition lists and menus
* Image helpers
* Tables
* Forms
* Buttons
* Media object
* Boxes
* Navbar
* Hero
* Sticky footer
* Clearfix

* * *

Sites built with Hocus-Pocus:

* [Echotags](http://echotags.io)
* [Shelly Cloud Status](https://status.shellycloud.com)
* [UIshots](http://uishots.com)

* * *

Hocus-Pocus could not exist without work of awesome people responsible for
these projects:

* [normalize.css](https://github.com/necolas/normalize.css)
* [colors](https://github.com/mrmrs/colors)
* [gridlover](http://www.gridlover.net/try)
* [inuitcss](https://github.com/inuitcss)
* [primer](https://github.com/primer/primer)

### Development

To edit and compile documentation locally fetch npm dependencies
first: `$ npm install`. Then run `$ gulp build`.

There are two main [Gulp](http://gulpjs.com) tasks:

* `$ gulp serve` - start a server and compile CSS on every edit
* `$ gulp publish` - publish changes to production

### Changelog

Changelog is available under [the releases
section](https://github.com/bkzl/hocus-pocus/releases).

### Contributing

Have you noticed a bug or have an idea? Please [add a new
issue](https://github.com/bkzl/hocus-pocus/issues). Thanks!
