---
layout: default
---

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

