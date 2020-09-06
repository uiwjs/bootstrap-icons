Bootstrap Icon Font
---

[![](https://img.shields.io/github/issues/uiwjs/bootstrap-icons.svg)](https://github.com/uiwjs/bootstrap-icons/issues) [![](https://img.shields.io/github/forks/uiwjs/bootstrap-icons.svg)](https://github.com/uiwjs/bootstrap-icons/network) [![](https://img.shields.io/github/stars/uiwjs/bootstrap-icons.svg)](https://github.com/uiwjs/bootstrap-icons/stargazers) [![](https://img.shields.io/github/release/uiwjs/bootstrap-icons.svg)](https://github.com/uiwjs/bootstrap-icons/releases) [![Packagist](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/uiwjs/bootstrap-icons) [![Packagist](https://img.shields.io/npm/v/@uiw/bootstrap-icons.svg)](https://www.npmjs.com/package/@uiw/bootstrap-icons)

File icons in the file tree using [vscode-material-icon-theme](https://github.com/PKief/vscode-material-icon-theme).

Visit **[https://uiwjs.github.io/bootstrap-icons/](https://uiwjs.github.io/bootstrap-icons/index.html)** and check out the search feature, which has keywords identifying common icon names and styles. For example, if you search for "swift" we call up every icon that could possibly be used as an arrow. We've also included each icon's class name for easy copy/pasting when you're developing!

They are free to use and licensed under [MIT](https://opensource.org/licenses/MIT). Use them wherever you see fit, personal or commercial. 

<p align="center">
  <a href="https://uiwjs.github.io/bootstrap-icons">
    <img src="https://github.com/uiwjs/bootstrap-icons/raw/master/assets/logo.png">
  </a>
</p>

## Install

```bash
npm install @uiw/bootstrap-icons --save
```

## Usage

You can use [https://uiwjs.github.io/bootstrap-icons/](https://uiwjs.github.io/bootstrap-icons/index.html) to easily find the icon you want to use. Once you've copied the desired icon's CSS classname, simply add the icon and icon's classname, such as `apple` to an HTML element.

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

## License

Created By [svgtofont](https://github.com/jaywcjlove/svgtofont), Licensed under the [MIT License](https://opensource.org/licenses/MIT).
