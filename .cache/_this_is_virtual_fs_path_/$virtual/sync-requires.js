
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/src/pages/using-typescript.tsx"))
}

