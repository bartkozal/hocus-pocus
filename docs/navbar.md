### Navbar

Defaults:

```scss
$navbar-background: $color-black;                 // navbar background color or background image
$navbar-color: $color-white;                      // navbar text color
$navbar-link-color: $color-white;                 // navbar link color
$navbar-link-background: rgba($color-white, .15); // navbar link background color
```

Usage:

<div class="example">
  <div class="navbar">
    <div class="container">
      <div class="grid grid-pair">
        <div class="grid-item 1/4">
          <a href="#" class="navbar-link">Title</a>
        </div>
        <div class="grid-item 3/4">
          <ul class="navbar-menu">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
            <li><a href="#">Item 4</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="navbar">
  <div class="container">
    <div class="grid grid-pair">
      <div class="grid-item 1/4">
        <a href="#" class="navbar-link">Title</a>
      </div>
      <div class="grid-item 3/4">
        <ul class="navbar-menu">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```
