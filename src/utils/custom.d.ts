/**
 * Dev portfolio | custom TypeScript declarations
 */

// see https://webpack.js.org/guides/typescript/#importing-other-assets
declare module "*.svg" {
    const content: any
    export default content
}
declare module "*.module.css"
