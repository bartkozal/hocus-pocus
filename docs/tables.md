---
layout: default
---

## Tables

Defaults:

```scss
$table-zebra-background: rgba($color-ui, .5);     // zebra table highlight color
$table-hover-background: $table-zebra-background; // hover table highlight color
```

Usage:

<div class="example">
  <table>
    <colgroup>
      <col class="1/4"></col>
      <col class="1/2"></col>
      <col class="1/4"></col>
    </colgroup>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell A</td>
        <td>Cell B</td>
        <td>Cell C</td>
      </tr>
      <tr>
        <td>Cell D</td>
        <td>Cell E</td>
        <td>Cell F</td>
      </tr>
      <tr>
        <td>Cell G</td>
        <td>Cell H</td>
        <td>Cell I</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table>
  <colgroup>
    <col class="1/4"></col>
    <col class="1/2"></col>
    <col class="1/4"></col>
  </colgroup>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell A</td>
      <td>Cell B</td>
      <td>Cell C</td>
    </tr>
    <tr>
      <td>Cell D</td>
      <td>Cell E</td>
      <td>Cell F</td>
    </tr>
    <tr>
      <td>Cell G</td>
      <td>Cell H</td>
      <td>Cell I</td>
    </tr>
  </tbody>
</table>
```

<div class="example">
  <table class="table-bordered">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell A</td>
        <td>Cell B</td>
        <td>Cell C</td>
      </tr>
      <tr>
        <td>Cell D</td>
        <td>Cell E</td>
        <td>Cell F</td>
      </tr>
      <tr>
        <td>Cell G</td>
        <td>Cell H</td>
        <td>Cell I</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table-bordered">
  ...
</table>
```

<div class="example">
  <table class="table-bordered table-zebra">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell A</td>
        <td>Cell B</td>
        <td>Cell C</td>
      </tr>
      <tr>
        <td>Cell D</td>
        <td>Cell E</td>
        <td>Cell F</td>
      </tr>
      <tr>
        <td>Cell G</td>
        <td>Cell H</td>
        <td>Cell I</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table-bordered table-zebra">
  ...
</table>
```

<div class="example">
  <table class="table-bordered table-hover">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell A</td>
        <td>Cell B</td>
        <td>Cell C</td>
      </tr>
      <tr>
        <td>Cell D</td>
        <td>Cell E</td>
        <td>Cell F</td>
      </tr>
      <tr>
        <td>Cell G</td>
        <td>Cell H</td>
        <td>Cell I</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table-bordered table-hover">
  ...
</table>
```
