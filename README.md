<div class="hidden">
  <a href="http://bkzl.github.io/hocus-pocus">
    <img src="http://bkzl.github.io/hocus-pocus/img/brand-light.png" width="144px" height="72px">
  </a>
</div>

Hocus-Pocus is a design-free [Sass](http://sass-lang.com) framework inspired by
[Primer](https://github.com/primer/primer) and
[InuitCSS](https://github.com/inuitcss/).

The main idea behind is to make a universal and lightweight stylesheet starter
kit that focuses on the most common features. You can change the look of every
single component, disable some features and define a range of helpers with
variables. A disadvantage of this approach is lack of compiled CSS version.

Sites built with Hocus-Pocus:

* [Echotags](http://echotags.io)
* [UIshots](http://uishots.com)

Do you use Hocus-Pocus? [Please let me know](https://twitter.com/_bkzl), I will put your project on the list.

### Why not Bootstrap?

 Libraries like Bootstrap or Foundation are great and have greatly changed how
 people think about CSS. However, in most cases within my own project work, I
 just don’t need all these features and UI components like progress bars or
 breadcrumbs. Instead, I prefer to have something more universal that I can use
 in any project, without needing to override framework CSS classes.

### Key Features

The following framework features are the most characteristic to Hocus-Pocus:

* Enhanced [normalize.css](https://github.com/necolas/normalize.css) reset
* Default colors set and color helpers thanks to [clrs.cc](http://clrs.cc)
* Widely responsive web design support with customizable breakpoints and approach (mobile or desktop first)
* Flexbox grid with universal, fraction based width helpers
* Visibility and spacing helpers (auto-generated for the each viewport breakpoint!)
* Typography with vertical rhythm based on [Gridlover](http://www.gridlover.net/try)
* Components like lists, menus, tables, forms, buttons, boxes, navbar or sticky footer
* Universal media object

You can find full documentation at [bkzl.github.io/hocus-pocus](http://bkzl.github.io/hocus-pocus). I always
try to find time to improve it.

Code is open sourced [on GitHub](https://github.com/bkzl/hocus-pocus/). Up to
date changelog is available under [the releases
section](https://github.com/bkzl/hocus-pocus/releases).

I appreciate any comments, feedback, and information about potential issues.
Have you experienced a framework bug or noticed a mistake in documentation?
Please [add a new issue](https://github.com/bkzl/hocus-pocus/issues). Thanks!

### Development

To edit and compile Hocus-Pocus locally you need to fetch npm dependencies
first: `npm install`.

Then run `gulp serve`.
