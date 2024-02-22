"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5276);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5511);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3524);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7528);
const BlogIndex=({data,location})=>{var _data$site$siteMetada;const siteTitle=((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`;const posts=data.allMarkdownRemark.nodes;if(posts.length===0){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{location:location,title:siteTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bio__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"No blog posts found. Add markdown posts to \"content/blog\" (or the directory you specified for the \"gatsby-source-filesystem\" plugin in gatsby-config.js)."));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{location:location,title:siteTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bio__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol",{style:{listStyle:`none`}},posts.map(post=>{const title=post.frontmatter.title||post.fields.slug;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:post.fields.slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"post-list-item",itemScope:true,itemType:"http://schema.org/Article"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:post.fields.slug,itemProp:"url"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{itemProp:"headline"},title))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small",null,post.frontmatter.date)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{dangerouslySetInnerHTML:{__html:post.frontmatter.description||post.excerpt},itemProp:"description"}))));})));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogIndex);/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{title:"All posts"});const pageQuery="3100300281";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-insights-js.js.map