### Forms

Usage:

<div class="example">
  <form class="form-inline">
    <input type="email" placeholder="E-mail">
    <input type="password" placeholder="Password">

    <button type="submit">Submit</button>
  </form>
</div>

```html
<form class="form-inline">
  <input type="email" placeholder="E-mail">
  <input type="password" placeholder="Password">

  <button type="submit">Submit</button>
</form>
```

<div class="example">
  <form class="form-stacked">
    <label for="email">E-mail</label>
    <input type="text" id="email">

    <label for="password">Password</label>
    <input type="email" id="email">

    <label for="search">Search</label>
    <input type="search" id="search">

    <label for="disabled">Disabled</label>
    <input type="text" id="disabled" disabled>

    <label>
      <input type="checkbox"> Remember me
    </label>

    <label for="gender">Gender</label>
    <select id="gender">
      <option selected></option>
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>

    <label for="comment">Comment</label>
    <textarea id="comment"></textarea>

    <button type="submit">Submit</button>
  </form>
</div>

```html
<form class="form-stacked">
  <label for="email">E-mail</label>
  <input type="text" id="email">

  <label for="password">Password</label>
  <input type="email" id="email">

  <label>
    <input type="checkbox">Remember me</input>
  </label>

  <label for="gender">Gender</label>
  <select id="gender">
    <option selected></option>
    <option value="female">Female</option>
    <option value="male">Male</option>
  </select>

  <label for="comment">Comment</label>
  <textarea id="comment"></textarea>

  <button type="submit">Submit</button>
</form>
```

<div class="example">
  <form class="form-horizontal">
  <div class="form-item">
  <label for="email" class="1/4">E-mail</label>
  <input type="text" id="email">
  </div>

  <div class="form-item">
  <label for="password" class="1/4">Password</label>
  <input type="email" id="email">
  </div>

  <div class="grid grid-right">
  <div class="grid-item 3/4">
  <div class="form-item">
  <label>
  <input type="checkbox">Remember me</input>
  </label>
  </div>

  <button type="submit">Submit</button>
  </div>
  </div>
  </form>
</div>

```html
<form class="form-horizontal">
  <div class="form-item">
    <label for="email" class="1/4">E-mail</label>
    <input type="text" id="email">
  </div>

  <div class="form-item">
    <label for="password" class="1/4">Password</label>
    <input type="email" id="email">
  </div>

  <div class="grid grid-right">
    <div class="grid-item 3/4">
      <div class="form-item">
        <label>
          <input type="checkbox">Remember me</input>
        </label>
      </div>

      <button type="submit">Submit</button>
    </div>
  </div>
</form>
```
