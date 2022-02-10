<p align="center">
  <a href="https://uiwjs.github.io/bootstrap-icons/index.html">
    <img src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Bootstrap Icons Font</h3>

<p align="center">
  Official open source SVG icon library for Bootstrap.
  <br>
  <a href="https://icons.getbootstrap.com/"><strong>Explore Bootstrap Icons »</strong></a>
  <br>
  <br>
  <a href="https://github.com/uiwjs/bootstrap-icons/issues">
    <img src="https://img.shields.io/github/issues/uiwjs/bootstrap-icons.svg" />
  </a>
  <a href="https://github.com/uiwjs/bootstrap-icons/network">
    <img src="https://img.shields.io/github/forks/uiwjs/bootstrap-icons.svg" />
  </a>
  <a href="https://github.com/uiwjs/bootstrap-icons/stargazers">
    <img src="https://img.shields.io/github/stars/uiwjs/bootstrap-icons.svg" />
  </a>
  <a href="https://github.com/uiwjs/bootstrap-icons/releases">
    <img src="https://img.shields.io/github/release/uiwjs/bootstrap-icons.svg" />
  </a>
  <a href="https://github.com/uiwjs/bootstrap-icons">
    <img src="https://img.shields.io/dub/l/vibe-d.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@uiw/bootstrap-icons">
    <img src="https://img.shields.io/npm/v/@uiw/bootstrap-icons.svg" />
  </a>
</p>

Visit **[https://uiwjs.github.io/bootstrap-icons/](https://uiwjs.github.io/bootstrap-icons/index.html)** and check out the search feature, which has keywords identifying common icon names and styles. For example, if you search for "swift" we call up every icon that could possibly be used as an arrow. We've also included each icon's class name for easy copy/pasting when you're developing!

They are free to use and licensed under [MIT](https://opensource.org/licenses/MIT). Use them wherever you see fit, personal or commercial. 

## 1,100+ icons

[![Bootstrap Icons full set](https://user-images.githubusercontent.com/98681/91365119-402cdc00-e7b5-11ea-9a2c-e1a03aed21c3.png)](https://icons.getbootstrap.com)

## Install

```bash
npm install @uiw/bootstrap-icons --save
```

## Usage

You can use [https://uiwjs.github.io/bootstrap-icons/](https://uiwjs.github.io/bootstrap-icons/index.html) to easily find the icon you want to use. Once you've copied the desired icon's CSS classname, simply add the icon and icon's classname, such as `archive` to an HTML element.

Suppose the font name is defined as `btfont`, The default home page is `unicode`, Will generate: 

```bash
font-class.html
index.html
symbol.html
react
btfont.json
btfont.css
btfont.eot
btfont.less
btfont.svg
btfont.symbol.svg
btfont.ttf
btfont.woff
btfont.woff2
```

Preview demo `font-class.html`, `symbol.html` annd `index.html`. Automatically generated style `btfont.css` and `btfont.less`.

### symbol svg

```xml
<svg class="icon" aria-hidden="true">
  <use xlink:href="node_modules/@uiw/bootstrap-icons/fonts/btfont.symbol.svg#btfont-javascript"></use>
</svg>
```

### Unicode

```html
<style>
.iconfont {
  font-family: "btfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<span class="iconfont">&#59907;</span>
```

### Class Name

Support for `.less` and `.css` styles references.

```html
<link rel="stylesheet" type="text/css" href="node_modules/@uiw/bootstrap-icons/fonts/btfont.css">
<i class="btfont-javascript"></i>
```

### React

Icons are used as components. `v1.3.0+` support.

```jsx
import { Activity, Wifi } from '@uiw/bootstrap-icons';

<Activity style={{ fill: 'red' }} />
<Wifi height="36" />
```

## Related

- [`@uiw/icons`](https://github.com/uiwjs/icons) The premium icon font for [`@uiwjs`](https://github.com/uiwjs) Component Library.

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/bootstrap-icons/graphs/contributors">
  <img src="https://uiwjs.github.io/bootstrap-icons/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Created By [svgtofont](https://github.com/jaywcjlove/svgtofont), Licensed under the [MIT License](https://opensource.org/licenses/MIT).
