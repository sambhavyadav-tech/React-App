
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/workspace/React-App/portfolio/.cache/dev-404-page.js")),
  "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx": preferDefault(require("/workspace/React-App/portfolio/node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx"))
}

