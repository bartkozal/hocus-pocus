
## Images

Images are vertically aligned to the middle of container and have
`box-sizing` set to `content-box`.

Replace any element that contains text with an image:

```scss
@include img-replace($path, $width, $height);
```

Usage:

```scss
.logo {
  @include img-replace('path/to/img.svg', 100px, 40px);
}
```

### Image Helpers

<div class="example">
  <img src="http://placehold.it/1200x200/39cccc/fff" alt="example" class="img-responsive">
</div>

```html
<img src="img.png" alt="placeholder" class="img-responsive">
```

<div class="example">
  <img src="http://placehold.it/150x150/39cccc/fff" alt="example" class="img-rounded">
</div>

```html
<img src="img.png" alt="placeholder" class="img-rounded">
```

<div class="example">
  <img src="http://placehold.it/150x150/39cccc/fff" alt="example" class="img-circle">
</div>

```html
<img src="img.png" alt="placeholder" class="img-circle">
```
