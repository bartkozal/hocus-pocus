---
layout: default
---

1. [Normalize](https://github.com/necolas/normalize.css) is included.

2. Box-sizing is changed for all elements (excluding `img`) and set to
   `border-box`.

    ```sass
    html
      box-sizing: border-box

    *, *:before, *:after
      box-sizing: inherit

    img
      box-sizing: content-box
    ```

3. Vertical scrollbar is always visible.


    ```sass
    html
      overflow-y: scroll
    ```
