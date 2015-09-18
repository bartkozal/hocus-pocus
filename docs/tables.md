---
layout: default
---

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

Set background color of odd rows as `$table-zebra-background` variable.

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

Change `$table-hover-background` to change the color of hover.

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
