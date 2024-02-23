"use strict";
exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 6093:
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
const BlogPostTemplate=({data:{previous,next,site,markdownRemark:post},location})=>{var _site$siteMetadata;const siteTitle=((_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title)||`Title`;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{location:location,title:siteTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"blog-post",itemScope:true,itemType:"http://schema.org/Article"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{itemProp:"headline"},post.frontmatter.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,post.frontmatter.date)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{dangerouslySetInnerHTML:{__html:post.html},itemProp:"articleBody"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bio__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"blog-post-nav"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,listStyle:`none`,padding:0}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,previous&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:previous.fields.slug,rel:"prev"},"\u2190 ",previous.frontmatter.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,next&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:next.fields.slug,rel:"next"},next.frontmatter.title," \u2192")))));};const Head=({data:{markdownRemark:post}})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{title:post.frontmatter.title,description:post.frontmatter.description||post.excerpt});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPostTemplate);const pageQuery="3656084723";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-js.js.map