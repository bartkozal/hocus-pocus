Images are verically aligned to the middle and their
`box-sizing` is set to `content-box`.

The `+img-replace` mixin allows to replace any element contains text with
image.

```scss
div {
  @include img-replace('path/to/img.svg', 100px, 40px);
}
```

### Image helpers

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
