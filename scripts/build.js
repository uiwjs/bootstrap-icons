const svgtofont = require("svgtofont");
const path = require("path");
const pkg = require('../package.json')

svgtofont({
  src: path.resolve(process.cwd(), "icons", "icons"), // svg path
  dist: path.resolve(process.cwd(), "fonts"), // output path
  emptyDist: true,
  outSVGReact: true,
  outSVGPath: true,
  fontName: "btfont", // font name
  css: true, // Create CSS files.
  startNumber: 20000, // unicode start number
  nodemo: true, // no demo html files
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  website: {
    index: "symbol", // Enum{"font-class", "unicode", "symbol"}
    title: "bootstrap-icons",
    // Must be a .svg format image.
    logo: path.resolve(process.cwd(), "assets", "logo.png"),
    version: pkg.version,
    meta: {
      description: "File icons in the file tree.",
      keywords: "file,icon,bootstrap-icons,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: ``,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/uiwjs/bootstrap-icons"
      },
      {
        title: "Feedback",
        url: "https://github.com/uiwjs/bootstrap-icons/issues"
      },
      {
        title: "Font Class Demo",
        url: "font-class.html"
      },
      {
        title: "Symbol Demo",
        url: "index.html"
      },
      {
        title: "Unicode Demo",
        url: "unicode.html"
      }
    ],
    footerInfo: `
      Licensed under MIT. (Yes it's free and <a href="https://github.com/uiwjs/bootstrap-icons">open-sourced</a>)
    `
  }
}).then(() => {
  console.log("done!");
});