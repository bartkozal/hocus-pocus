---
layout: default
---

Images are verically aligned to the middle and their
`box-sizing` is set to `content-box`.

The `+img-replace` mixin allows to replace any element contains text with
image.

```sass
div
  @mixin img-replace('path/to/img.svg', 100px, 40px)

// div
//   background-repeat: no-repeat
//   background-image: url('path/to/img.svg')
//   width: 100px
//   height: 40px
//   text-indent: -9999px
//   white-space: nowrap
```

### Image helpers

<div class="example">
  <img src="http://placehold.it/1200x200" alt="example" class="img-responsive">
</div>

```html
<img src="img.png" alt="placeholder" class="img-responsive">
```

<div class="example">
  <img src="http://placehold.it/150x150" alt="example" class="img-rounded">
</div>

```html
<img src="img.png" alt="placeholder" class="img-rounded">
```

<div class="example">
  <img src="http://placehold.it/150x150" alt="example" class="img-circle">
</div>

```html
<img src="img.png" alt="placeholder" class="img-circle">
```
