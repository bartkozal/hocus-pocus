---
layout: default
---

First you can define preffered way of writting RWD by setting the
`$responsive-type` variable with `mobile-first` or `desktop-first` keyword. Then, you should
define brakepoints in `$responsive-map` variable. There are two types of
them: with single and double arguments. For each breakpoint will be
generated visibility helpers and grid i.e.

```sass
$responsive-type: desktop-first
$responsive-map: (mobile: 680px)
```

```html
<div class="mobile-hidden">...</div>
<div class="hidden mobile-visible">...</div>

<div class="grid">
  <div class="grid-item 1/4 mobile-hidden">
    ...
  </div>

  <div class="grid-item 3/4 mobile-1/1">
    ...
  </div>
</div>
```
