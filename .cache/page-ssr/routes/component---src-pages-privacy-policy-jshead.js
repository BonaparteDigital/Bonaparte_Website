exports.id = "component---src-pages-privacy-policy-jshead";
exports.ids = ["component---src-pages-privacy-policy-jshead"];
exports.modules = {

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_logo_bonaparte_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo_bonaparte_white.svg */ "./src/assets/logo_bonaparte_white.svg");
/* harmony import */ var _assets_logo_bonaparte_white_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_bonaparte_white_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribe */ "./src/components/subscribe.js");




const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "bg-green text-olive-light p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "footer_content_mobile",
    className: "md:hidden flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_logo_bonaparte_white_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: "h-5",
    alt: "Bonaparte"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-8 border-t border-olive"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "socialmedia_icons_mobile",
    className: "flex justify-center space-x-6 mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "https://x.com/bonapartedigital"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "https://www.linkedin.com/bonapartedigital"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "mailto:hello@bonapartedigital.com"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "copyright",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 ", new Date().getFullYear(), " BONAPARTE | All Rights Reserved | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/privacy-policy"
  }, "Privacy Policy")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "footer_content_desktop",
    className: "hidden md:flex md:flex-col mx-auto px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "upper-footer",
    className: "flex container max-w-screen-xl px-10 md:mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-1/3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_logo_bonaparte_white_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: "h-5",
    alt: "Bonaparte"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We're not just a digital marketing agency; we're your strategic partners in world-class branding and digital domination.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-1/3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl"
  }, "Talk To Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://calendly.com/hellobonaparte/meet-greet",
    className: "md:inline-block text-md font-bold bg-olive text-green px-6 py-2 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5"
  }, "Book a RDV")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-1/3 pl-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl mb-2"
  }, "Subscribe to our debriefs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_subscribe__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-8 border-t border-olive"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "lower-footer",
    className: "flex container max-w-screen-xl justify-between px-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "copyright",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 ", new Date().getFullYear(), " BONAPARTE | All Rights Reserved | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/privacy-policy",
    className: "hover:text-olive"
  }, "Privacy Policy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "#strategies",
    className: "px-4 hover:text-olive"
  }, "Strategies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "#testimonies",
    className: "px-4 hover:text-olive"
  }, "Testimonies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "socialmedia_icons",
    className: "flex space-x-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "https://x.com/bonapartedigital"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "https://www.linkedin.com/bonapartedigital"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "mailto:hello@bonapartedigital.com"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");



const Layout = ({
  title,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "global-wrapper",
    className: "bg-olive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    id: "global-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container mx-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_logo_bonaparte_black_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo_bonaparte_black.svg */ "./src/assets/logo_bonaparte_black.svg");
/* harmony import */ var _assets_logo_bonaparte_black_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_bonaparte_black_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon_menu.svg */ "./src/assets/icon_menu.svg");
/* harmony import */ var _assets_icon_menu_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icon_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icon_close.svg */ "./src/assets/icon_close.svg");
/* harmony import */ var _assets_icon_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icon_close_svg__WEBPACK_IMPORTED_MODULE_4__);



 // Mobile menu icon
 // Mobile close icon

const Header = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isTransparent,
    1: setIsTransparent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: `${isTransparent ? 'bg-transparent' : 'bg-olive'} transition duration-300 sticky top-0 z-50`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "header.desktop",
    className: "flex items-center justify-between px-2 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "navbar.left",
    className: "z-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (_assets_logo_bonaparte_black_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    alt: "Bonaparte",
    className: "h-6 z-49"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "hamburguer.menu",
    className: "md:hidden z-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    id: "menu",
    type: "button",
    "aria-label": "Menu",
    className: "block",
    onClick: () => setIsOpen(!isOpen)
  }, isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (_assets_icon_close_svg__WEBPACK_IMPORTED_MODULE_4___default())
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (_assets_icon_menu_svg__WEBPACK_IMPORTED_MODULE_3___default())
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "navbar.center",
    className: "hidden md:flex text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "md:text-lg hidden md:flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "hover:underline underline-offset-8 decoration-orange mr-5",
    href: "#strategies"
  }, "Strategies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "hover:underline underline-offset-8 decoration-orange mr-5",
    href: "#testimonies"
  }, "Testimonies"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "navbar.right",
    className: "hidden md:flex md:pl-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://calendly.com/hellobonaparte/meet-greet",
    className: "md:inline-block text-md font-bold bg-green text-olive px-6 py-3 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5"
  }, "Book a RDV")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "hamburguer.modal",
    className: `bg-green text-olive text-5xl text-center font-mulish font-black h-full fixed top-0 w-full py-10 pt-2 pb-4 z-40 transition-transform duration-400 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "mt-20 px-4 py-4 block decoration-primary decoration-2",
    href: "#strategies",
    onClick: handleCloseModal
  }, "strategies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "px-4 py-4 block decoration-primary decoration-2",
    href: "#testimonies",
    onClick: handleCloseModal
  }, "testimonies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://calendly.com/hellobonaparte/meet-greet",
    className: "mt-20 inline-block bg-olive text-green font-bold text-2xl px-6 py-3 rounded-full hover:bg-orange transition duration-300"
  }, "Book a RDV"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3343187749_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3343187749.json */ "./public/page-data/sq/d/3343187749.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */


const Seo = ({
  description,
  title,
  image,
  children
}) => {
  var _site$siteMetadata, _site$siteMetadata2, _site$siteMetadata2$s;
  const {
    site
  } = _public_page_data_sq_d_3343187749_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:image",
    content: image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : (_site$siteMetadata2$s = _site$siteMetadata2.social) === null || _site$siteMetadata2$s === void 0 ? void 0 : _site$siteMetadata2$s.twitter) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/components/subscribe.js":
/*!*************************************!*\
  !*** ./src/components/subscribe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Subscribe = () => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const handleSubmit = evt => {
    evt.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = "https://api.hsforms.com/submissions/v3/integration/submit/23706289/3968e95b-0467-46ab-a36f-882ef8f784ab";
    var data = {
      "fields": [{
        "name": "email",
        "value": email
      }],
      "context": {
        "pageUri": "www.bonapartedigital.com",
        "pageName": "Bonaparte"
      }
    };
    var final_data = JSON.stringify(data);
    xhr.open("POST", url);
    // Sets the value of the "Content-Type" HTTP request headers to "application/json"
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText); //Returns a 200 error if the submission is succesfull.
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        alert(xhr.responseText); //Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid ins't found.
      }
    };
    xhr.send(final_data);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "w-full max-w-sm relative",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "appearance-none bg-transparent border-none w-full text-olive mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-olive-light",
    value: email,
    type: "text",
    onChange: e => setEmail(e.target.value),
    placeholder: "Enter your email",
    "aria-label": "Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "md:inline-block text-md font-bold bg-olive text-green px-6 py-2 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5",
    type: "submit"
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute bottom-0 left-0 right-0 border-b border-olive",
    style: {
      marginRight: '100px'
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subscribe);

/***/ }),

/***/ "./src/pages/privacy-policy.js?export=head":
/*!*************************************************!*\
  !*** ./src/pages/privacy-policy.js?export=head ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");



const PrivacyPolicy = ({
  data,
  location
}) => {
  const siteTitle = data.site.siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: location,
    title: siteTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "404: Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "YArretez! It looks like the place we are looking for does exist... let's go back")));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Bonaparte | Privacy Policy"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyPolicy);
const pageQuery = "3159585216";

/***/ }),

/***/ "./src/assets/icon_close.svg":
/*!***********************************!*\
  !*** ./src/assets/icon_close.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function IconClose (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M31.6666 31.1666L13.3333 12.8333","stroke":"#C0D22D","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","key":0}),React.createElement("path",{"d":"M13.3334 31.1666L31.6667 12.8333","stroke":"#C0D22D","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","key":1})]);
}

IconClose.defaultProps = {"width":"45","height":"44","viewBox":"0 0 45 44","fill":"none"};

module.exports = IconClose;

IconClose.default = IconClose;


/***/ }),

/***/ "./src/assets/icon_menu.svg":
/*!**********************************!*\
  !*** ./src/assets/icon_menu.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function IconMenu (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M7.83337 11H37.1667","stroke":"black","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","key":0}),React.createElement("path",{"d":"M7.83337 22H37.1667","stroke":"black","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","key":1}),React.createElement("path",{"d":"M7.83337 33H37.1667","stroke":"black","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","key":2})]);
}

IconMenu.defaultProps = {"width":"45","height":"44","viewBox":"0 0 45 44","fill":"none"};

module.exports = IconMenu;

IconMenu.default = IconMenu;


/***/ }),

/***/ "./src/assets/logo_bonaparte_black.svg":
/*!*********************************************!*\
  !*** ./src/assets/logo_bonaparte_black.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function LogoBonaparteBlack (props) {
    return React.createElement("svg",props,[React.createElement("title",{"id":"logo_bonaparteTitle","key":0},"Bonaparte | Digital Strategist"),React.createElement("desc",{"id":"logo_bonaparteDesc","key":1},"Logo for Bonaparte. A digital marketing agency"),React.createElement("defs",{"id":"defs1","key":2},React.createElement("style",{"id":"style1"},"\n      .cls-1{fill:#14271d}.cls-2{fill:#fff}.cls-3{fill:#ec8602}.cls-4{fill:#c0d22d}\n    ")),React.createElement("g",{"id":"layer3","style":{"display":"inline"},"transform":"translate(-56.11 -215.747)","key":3},React.createElement("g",{"id":"g1"},[React.createElement("path",{"id":"path18","d":"M752.34 260a5.53 5.53 0 1 0 5.53-5.52 5.53 5.53 0 0 0-5.53 5.52z","className":"cls-3","style":{"display":"inline"},"key":0}),React.createElement("path",{"id":"polygon18","d":"M725.79 304.16h59.99v-9.96h-48.79v-68.45l48.79-.03v-9.93h-59.99z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":1}),React.createElement("path",{"id":"path19","d":"M360.15 268.44a5.41 5.41 0 1 0 5.41 5.41 5.41 5.41 0 0 0-5.41-5.41z","className":"cls-3","style":{"display":"inline"},"key":2}),React.createElement("path",{"id":"polygon19","d":"m330.55 304.16 29.67-71.94 29.54 71.94h11.28l-36.09-88.37h-9.46l-36.22 88.37z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":3}),React.createElement("path",{"id":"path20","d":"M515.63 268.44a5.41 5.41 0 1 0 5.41 5.41 5.41 5.41 0 0 0-5.41-5.41z","className":"cls-3","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":4}),React.createElement("path",{"id":"polygon20","d":"m486.03 304.16 29.67-71.94 29.54 71.94h11.28l-36.09-88.37h-9.46l-36.22 88.37z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":5}),React.createElement("path",{"id":"path21","d":"M107.45 258.8a20.13 20.13 0 0 0 9.39-8.39 23.74 23.74 0 0 0 3.29-12.12 25.07 25.07 0 0 0-2.42-10.75 21.75 21.75 0 0 0-7-8.46 17.87 17.87 0 0 0-10.71-3.29H56.11v88.26H98a29.39 29.39 0 0 0 13-2.86 23.47 23.47 0 0 0 9.38-7.95 20.67 20.67 0 0 0 3.48-11.94 23.44 23.44 0 0 0-4.41-14.23 22.15 22.15 0 0 0-12-8.27zm3.17 27.91a15.46 15.46 0 0 1-5.22 5.53 13.39 13.39 0 0 1-7.4 2.12H67.3v-68.88h28.84a11.58 11.58 0 0 1 6.65 2 13.91 13.91 0 0 1 4.6 5.29 16.3 16.3 0 0 1 1.68 7.52 15.24 15.24 0 0 1-1.8 7.33 14.49 14.49 0 0 1-4.85 5.35 12.25 12.25 0 0 1-5.56 1.89c-2.18 0-4 2-4 4.56 0 2.56 1.77 4.57 4 4.57h2a12 12 0 0 1 7 2.12 15.24 15.24 0 0 1 4.85 5.59 16.26 16.26 0 0 1 1.8 7.58 14.76 14.76 0 0 1-1.89 7.43z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":6}),React.createElement("circle",{"id":"circle21","cx":"80.32","cy":"259.45","r":"5.65","className":"cls-3","style":{"display":"inline"},"key":7}),React.createElement("path",{"id":"path22","d":"M175.05 254.38a5.59 5.59 0 1 0 5.59 5.59 5.59 5.59 0 0 0-5.59-5.59z","className":"cls-3","style":{"display":"inline"},"key":8}),React.createElement("path",{"id":"path23","d":"M204.82 229.75a41.14 41.14 0 0 0-12.89-10.2 36.41 36.41 0 0 0-16.7-3.8 37.07 37.07 0 0 0-16.33 3.62 42.23 42.23 0 0 0-13.08 9.82 46.38 46.38 0 0 0-8.71 14.12A44.81 44.81 0 0 0 134 260a46.86 46.86 0 0 0 11.35 30.51 40.6 40.6 0 0 0 13 10 39.48 39.48 0 0 0 33 .12 41.13 41.13 0 0 0 13.07-9.76 45.91 45.91 0 0 0 8.75-46.87 47.78 47.78 0 0 0-8.35-14.25zm-1.9 42.6a35.9 35.9 0 0 1-5.89 11 29.34 29.34 0 0 1-9.4 7.86 26.12 26.12 0 0 1-12.52 2.95 26.5 26.5 0 0 1-12.28-2.83 29.33 29.33 0 0 1-9.45-7.61 35.1 35.1 0 0 1-6.08-11 38.7 38.7 0 0 1-2.15-12.72 37.9 37.9 0 0 1 2.09-12.46 37 37 0 0 1 5.95-11 28.85 28.85 0 0 1 9.39-7.8 26.72 26.72 0 0 1 12.53-2.88 26.41 26.41 0 0 1 12.09 2.76 29.27 29.27 0 0 1 9.46 7.61 36 36 0 0 1 6.14 11 38.42 38.42 0 0 1 2.14 12.77 39.31 39.31 0 0 1-2.02 12.35z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":9}),React.createElement("path",{"id":"polygon23","d":"M232.8 215.79v88.37H244v-67.71l53.27 67.71h10.2v-88.25h-11.2v68.95l-54.01-69.07z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":10}),React.createElement("path",{"id":"path24","d":"M474.5 233.77a30.09 30.09 0 0 0-5.6-9.08 28.17 28.17 0 0 0-8.46-6.48 23.73 23.73 0 0 0-10.71-2.42h-36.84v88.37h11.2v-31.74h26.39a23.44 23.44 0 0 0 13.69-4.05 27.38 27.38 0 0 0 9.09-10.58 30.66 30.66 0 0 0 3.23-13.79 27.7 27.7 0 0 0-1.99-10.23zm-11.26 19.48a16.7 16.7 0 0 1-5.35 6.72 13.3 13.3 0 0 1-8 2.49h-25.8v-36.72h25a14.24 14.24 0 0 1 8 2.37 17.68 17.68 0 0 1 5.85 6.53 19.6 19.6 0 0 1 2.24 9.4 22 22 0 0 1-1.94 9.21z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":11}),React.createElement("path",{"id":"path25","d":"M624.17 265a26.72 26.72 0 0 0 6.47-9.33 29.66 29.66 0 0 0 2.3-11.58 27.7 27.7 0 0 0-2-10.27 30.29 30.29 0 0 0-5.6-9.08 28.09 28.09 0 0 0-8.47-6.48 23.66 23.66 0 0 0-10.7-2.42h-37.83v88.37h11.2v-31.79h23.4l20.17 31.74h12.69l-21.41-33.86a22.83 22.83 0 0 0 9.78-5.3zm-17.87-2.49h-26.76v-36.77h26a13.77 13.77 0 0 1 8 2.49 18.57 18.57 0 0 1 5.85 6.66 19 19 0 0 1 2.24 9.15 21.59 21.59 0 0 1-1.93 9.09 17.08 17.08 0 0 1-5.35 6.78 13.07 13.07 0 0 1-8.05 2.55z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":12}),React.createElement("path",{"id":"polygon25","d":"M671.4 304.16h11.2v-78.41h30.5v-9.96h-72.19v9.96h30.49z","className":"cls-4","style":{"display":"inline","fill":"#14271d","fillOpacity":"1"},"key":13})]))]);
}

LogoBonaparteBlack.defaultProps = {"version":"1.1","id":"logo_bonaparte","width":"729.67","height":"88.463","aria-labelledby":"catTitle catDesc","role":"img"};

module.exports = LogoBonaparteBlack;

LogoBonaparteBlack.default = LogoBonaparteBlack;


/***/ }),

/***/ "./src/assets/logo_bonaparte_white.svg":
/*!*********************************************!*\
  !*** ./src/assets/logo_bonaparte_white.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function LogoBonaparteWhite (props) {
    return React.createElement("svg",props,[React.createElement("title",{"id":"logo_bonaparteTitle","key":0},"Bonaparte | Digital Strategist"),React.createElement("desc",{"id":"logo_bonaparteDesc","key":1},"Logo for Bonaparte. A digital marketing agency"),React.createElement("style",{"type":"text/css","key":2},"\n\t.st0{fill:#EC8602;}\n\t.st1{fill:#FFFFFF;}\n"),React.createElement("g",{"id":"layer3","key":3},React.createElement("g",{"id":"g1"},[React.createElement("path",{"id":"path18","className":"st0","d":"M1210.9,77c0,5.3,4.3,9.6,9.6,9.6c5.3,0,9.6-4.3,9.6-9.6c0-5.3-4.3-9.6-9.6-9.6c0,0,0,0,0,0\n\t\t\tC1215.2,67.4,1210.9,71.7,1210.9,77z","key":0}),React.createElement("path",{"id":"path20","className":"st0","d":"M799.2,91.7c-5.2,0-9.4,4.2-9.4,9.4s4.2,9.4,9.4,9.4c5.2,0,9.4-4.2,9.4-9.4l0,0\n\t\t\tC808.6,95.9,804.4,91.6,799.2,91.7z","key":1}),React.createElement("path",{"id":"path19","className":"st0","d":"M528.8,91.7c-5.2,0-9.4,4.2-9.4,9.4s4.2,9.4,9.4,9.4s9.4-4.2,9.4-9.4S534,91.6,528.8,91.7\n\t\t\tC528.8,91.6,528.8,91.6,528.8,91.7z","key":2}),React.createElement("path",{"id":"path22","className":"st0","d":"M206.9,67.2c-5.4,0-9.7,4.3-9.7,9.7s4.4,9.7,9.7,9.7s9.7-4.3,9.7-9.7l0,0\n\t\t\tC216.6,71.5,212.2,67.2,206.9,67.2z","key":3}),React.createElement("circle",{"id":"circle21","className":"st0","cx":"42.1","cy":"76","r":"9.8","key":4}),React.createElement("polygon",{"id":"polygon18","className":"st1","points":"1184.2,17.4 1269.1,17.4 1269.1,0.1 1164.7,0.1 1164.7,153.8 1269.1,153.8 \n\t\t\t1269.1,136.4 1184.2,136.4 1184.2,92.1 1184.2,62.4 \t\t","key":5}),React.createElement("polygon",{"id":"polygon25","className":"st1","points":"1070.1,153.8 1089.6,153.8 1089.6,17.4 1142.7,17.4 1142.7,0.1 1017.1,0.1 \n\t\t\t1017.1,17.4 1070.1,17.4 \t\t","key":6}),React.createElement("path",{"id":"path25","className":"st1","d":"M988,85.7c4.9-4.5,8.7-10.1,11.2-16.2c2.7-6.4,4-13.2,4-20.1c0-6.1-1.2-12.2-3.5-17.9\n\t\t\tc-2.3-5.8-5.6-11.1-9.7-15.8c-4.2-4.7-9.2-8.5-14.7-11.3c-5.8-2.8-12.2-4.3-18.6-4.2h-65.8v153.7h19.5V98.6h40.7l35.1,55.2h22.1\n\t\t\tL971,94.9C977.3,93.3,983.2,90.1,988,85.7L988,85.7L988,85.7z M956.9,81.3h-46.5v-64h45.2c5,0,9.8,1.5,13.9,4.3\n\t\t\tc4.3,3,7.8,7,10.2,11.6c2.6,4.9,4,10.4,3.9,15.9c0,5.5-1.1,10.9-3.4,15.8c-2,4.7-5.2,8.7-9.3,11.8\n\t\t\tC966.9,79.8,961.9,81.4,956.9,81.3L956.9,81.3z","key":7}),React.createElement("polygon",{"id":"polygon20","className":"st1","points":"799.3,28.6 850.7,153.8 870.3,153.8 807.6,0.1 791.1,0.1 728.1,153.8 747.7,153.8 \t\t\n\t\t\t","key":8}),React.createElement("path",{"id":"path24","className":"st1","d":"M727.7,31.4c-2.3-5.8-5.6-11.1-9.7-15.8c-4.1-4.7-9.1-8.5-14.7-11.3c-5.8-2.8-12.2-4.3-18.6-4.2\n\t\t\th-64.1v153.7H640V98.6h45.9c8.5,0.2,16.8-2.3,23.8-7c6.8-4.7,12.2-11,15.8-18.4c3.7-7.4,5.6-15.7,5.6-24\n\t\t\tC731.1,43.1,730,37,727.7,31.4L727.7,31.4L727.7,31.4z M708.1,65.2c-2,4.6-5.2,8.7-9.3,11.7c-4,2.9-8.9,4.4-13.9,4.3H640V17.4\n\t\t\th43.5c5,0,9.8,1.4,13.9,4.1c4.3,2.9,7.8,6.8,10.2,11.4c2.6,5,4,10.7,3.9,16.3C711.5,54.7,710.4,60.2,708.1,65.2L708.1,65.2\n\t\t\tL708.1,65.2z","key":9}),React.createElement("polygon",{"id":"polygon19","className":"st1","points":"528.9,28.6 580.3,153.8 599.9,153.8 537.2,0.1 520.7,0.1 457.7,153.8 477.3,153.8 \t\t\n\t\t\t","key":10}),React.createElement("polygon",{"id":"polygon23","className":"st1","points":"417.7,120.2 323.8,0.1 307.3,0.1 307.3,153.8 326.8,153.8 326.8,36 419.4,153.8 \n\t\t\t437.2,153.8 437.2,0.3 417.7,0.3 \t\t","key":11}),React.createElement("path",{"id":"path23","className":"st1","d":"M258.6,24.4C252.4,17,244.8,11,236.2,6.6c-9-4.5-19-6.8-29-6.6c-9.8-0.1-19.5,2.1-28.4,6.3\n\t\t\tc-8.6,4.2-16.4,10-22.8,17.1c-6.5,7.2-11.6,15.5-15.1,24.6c-3.6,9.2-5.5,19.1-5.4,29c0,19.5,7,38.3,19.7,53.1\n\t\t\tc6.3,7.3,14,13.2,22.6,17.4c18.2,8.4,39.1,8.5,57.4,0.2c8.6-4.1,16.4-9.9,22.7-17c19.9-22.2,25.8-53.6,15.2-81.5\n\t\t\tC269.8,40.1,264.9,31.7,258.6,24.4z M255.3,98.4c-2.3,6.9-5.7,13.4-10.2,19.1c-4.4,5.7-10,10.3-16.4,13.7\n\t\t\tc-6.7,3.5-14.2,5.3-21.8,5.1c-7.4,0.1-14.7-1.6-21.4-4.9c-6.3-3.2-11.9-7.7-16.4-13.2c-4.6-5.7-8.2-12.2-10.6-19.1\n\t\t\tc-2.5-7.1-3.7-14.6-3.7-22.1c0-7.4,1.2-14.7,3.6-21.7c2.3-6.9,5.8-13.4,10.4-19.1c4.4-5.6,10-10.3,16.3-13.6\n\t\t\tc6.8-3.4,14.2-5.1,21.8-5c7.3-0.1,14.5,1.5,21,4.8c6.4,3.2,11.9,7.7,16.4,13.2c4.7,5.7,8.3,12.2,10.7,19.1\n\t\t\tc2.5,7.1,3.8,14.7,3.7,22.2C258.8,84.3,257.6,91.5,255.3,98.4L255.3,98.4z","key":12}),React.createElement("path",{"id":"path21","className":"st1","d":"M89.3,74.9c6.9-3,12.6-8.1,16.3-14.6c3.8-6.4,5.7-13.7,5.7-21.1c0-6.5-1.4-12.9-4.2-18.7\n\t\t\tc-2.7-5.9-6.9-10.9-12.2-14.7c-5.4-3.9-12-5.9-18.6-5.7H0v153.5h72.9c7.8,0.1,15.6-1.6,22.6-5c6.6-3.1,12.2-7.9,16.3-13.8\n\t\t\tc4.1-6.1,6.2-13.4,6.1-20.8c0.2-8.9-2.5-17.6-7.7-24.8C105,82.3,97.7,77.2,89.3,74.9L89.3,74.9z M94.8,123.4\n\t\t\tc-2.2,3.9-5.3,7.2-9.1,9.6c-3.8,2.5-8.3,3.7-12.9,3.7H19.5V83.9l0,0V68.3l0,0V16.9h50.2c4.1,0,8.2,1.2,11.6,3.5\n\t\t\tc3.4,2.3,6.2,5.5,8,9.2c2,4.1,3,8.5,2.9,13.1c0,4.4-1,8.8-3.1,12.8c-2,3.8-4.9,7-8.4,9.3c-2.9,1.9-6.2,3-9.7,3.3l0,0\n\t\t\tc-3.8,0-7,3.5-7,7.9s3.1,7.9,7,7.9h3.5c4.3-0.1,8.6,1.2,12.2,3.7c3.6,2.5,6.5,5.8,8.4,9.7c2.1,4.1,3.2,8.6,3.1,13.2\n\t\t\tC98.1,115,97,119.5,94.8,123.4z","key":13})]))]);
}

LogoBonaparteWhite.defaultProps = {"version":"1.1","id":"Logo","x":"0px","y":"0px","viewBox":"0 0 1269.1 153.9","style":{"enableBackground":"new 0 0 1269.1 153.9"},"xmlSpace":"preserve"};

module.exports = LogoBonaparteWhite;

LogoBonaparteWhite.default = LogoBonaparteWhite;


/***/ }),

/***/ "./public/page-data/sq/d/3343187749.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3343187749.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Bonaparte | Digital Strategist","description":"Meet BONAPARTE—Your Digital Strategist. We\'re not just a digital marketing agency; we\'re your strategic partners in world-class branding and digital domination. Forget buzzwords and fluff. We deliver hard-hitting results that last.","image":"/images/Preview_Image@2x.png","social":{"twitter":"bonapartedigital"}}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-privacy-policy-jshead.js.map