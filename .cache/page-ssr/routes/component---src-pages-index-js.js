exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 3524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/node_modules/react/index.js"
var index_js_ = __webpack_require__(5276);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./src/assets/icon_x.svg
var icon_x = __webpack_require__(9006);
var icon_x_default = /*#__PURE__*/__webpack_require__.n(icon_x);
// EXTERNAL MODULE: ./src/assets/icon_LinkedIn.svg
var icon_LinkedIn = __webpack_require__(4972);
var icon_LinkedIn_default = /*#__PURE__*/__webpack_require__.n(icon_LinkedIn);
// EXTERNAL MODULE: ./src/assets/icon_Mail.svg
var icon_Mail = __webpack_require__(9191);
var icon_Mail_default = /*#__PURE__*/__webpack_require__.n(icon_Mail);
// EXTERNAL MODULE: ./src/assets/logo_bonaparte_white.svg
var logo_bonaparte_white = __webpack_require__(5820);
var logo_bonaparte_white_default = /*#__PURE__*/__webpack_require__.n(logo_bonaparte_white);
;// CONCATENATED MODULE: ./src/components/subscribe.js
const Subscribe=()=>{const{0:email,1:setEmail}=(0,index_js_.useState)("");const handleSubmit=evt=>{evt.preventDefault();var xhr=new XMLHttpRequest();var url="https://api.hsforms.com/submissions/v3/integration/submit/23706289/3968e95b-0467-46ab-a36f-882ef8f784ab";var data={"fields":[{"name":"email","value":email}],"context":{"pageUri":"www.bonapartedigital.com","pageName":"Bonaparte"}};var final_data=JSON.stringify(data);xhr.open("POST",url);// Sets the value of the "Content-Type" HTTP request headers to "application/json"
xhr.setRequestHeader("Content-Type","application/json");xhr.onreadystatechange=function(){if(xhr.readyState===4&&xhr.status===200){alert(xhr.responseText);//Returns a 200 error if the submission is succesfull.
}else if(xhr.readyState===4&&xhr.status===403){alert(xhr.responseText);//Returns a 403 error if the portal isn't allowed to post submissions.
}else if(xhr.readyState===4&&xhr.status===404){alert(xhr.responseText);//Returns a 404 error if the formGuid ins't found.
}};xhr.send(final_data);};return/*#__PURE__*/index_js_default().createElement("form",{className:"w-full max-w-sm relative",onSubmit:handleSubmit},/*#__PURE__*/index_js_default().createElement("div",{className:"flex items-center py-2"},/*#__PURE__*/index_js_default().createElement("input",{className:"appearance-none bg-transparent border-none w-full text-olive mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-olive-light",value:email,type:"text",onChange:e=>setEmail(e.target.value),placeholder:"Enter your email","aria-label":"Email"}),/*#__PURE__*/index_js_default().createElement("button",{className:"md:inline-block text-md font-bold bg-olive text-green px-6 py-2 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5",type:"submit"},"Submit"),/*#__PURE__*/index_js_default().createElement("div",{className:"absolute bottom-0 left-0 right-0 border-b border-olive",style:{marginRight:'100px'}})));};/* harmony default export */ const subscribe = (Subscribe);
;// CONCATENATED MODULE: ./src/components/footer.js
const Footer=()=>{return/*#__PURE__*/index_js_default().createElement("footer",{className:"bg-green text-olive-light p-5"},/*#__PURE__*/index_js_default().createElement("div",{id:"footer_content_mobile",className:"md:hidden flex flex-col"},/*#__PURE__*/index_js_default().createElement("div",{className:"mx-auto mt-4"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement((logo_bonaparte_white_default()),{className:"h-5",alt:"Bonaparte"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"my-8 border-t border-olive"})," ",/*#__PURE__*/index_js_default().createElement("div",{id:"socialmedia_icons_mobile",className:"flex justify-center space-x-6 mb-8"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"https://x.com/bonapartedigital"},/*#__PURE__*/index_js_default().createElement("img",{src:(icon_x_default()),alt:"X"})),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"https://www.linkedin.com/bonapartedigital"},/*#__PURE__*/index_js_default().createElement("img",{src:(icon_LinkedIn_default()),alt:"LinkedIn"})),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"mailto:hello@bonapartedigital.com"},/*#__PURE__*/index_js_default().createElement("img",{src:(icon_Mail_default()),alt:"Mail"}))),/*#__PURE__*/index_js_default().createElement("div",{id:"copyright",className:"text-center"},/*#__PURE__*/index_js_default().createElement("p",null,"\xA9 ",new Date().getFullYear()," BONAPARTE | All Rights Reserved | ",/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/privacy-policy"},"Privacy Policy")))),/*#__PURE__*/index_js_default().createElement("div",{id:"footer_content_desktop",className:"hidden md:flex md:flex-col mx-auto px-4"},/*#__PURE__*/index_js_default().createElement("div",{id:"upper-footer",className:"flex container max-w-screen-xl px-10 md:mt-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/3"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement((logo_bonaparte_white_default()),{className:"h-5",alt:"Bonaparte"})),/*#__PURE__*/index_js_default().createElement("p",null,"We're not just a digital marketing agency; we're your strategic partners in world-class branding and digital domination.")),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/3 text-center"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-xl"},"Talk To Us"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://calendly.com/hellobonaparte/meet-greet",className:"md:inline-block text-md font-bold bg-olive text-green px-6 py-2 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5"},"Book a RDV")),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/3 pl-8"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-xl mb-2"},"Subscribe to our debriefs"),/*#__PURE__*/index_js_default().createElement(subscribe,null))),/*#__PURE__*/index_js_default().createElement("div",{className:"my-8 border-t border-olive"})," ",/*#__PURE__*/index_js_default().createElement("div",{id:"lower-footer",className:"flex container max-w-screen-xl justify-between px-10"},/*#__PURE__*/index_js_default().createElement("div",{id:"copyright",className:"text-center"},/*#__PURE__*/index_js_default().createElement("p",null,"\xA9 ",new Date().getFullYear()," BONAPARTE | All Rights Reserved | ",/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/privacy-policy",className:"hover:text-olive"},"Privacy Policy"))),/*#__PURE__*/index_js_default().createElement("div",{className:""},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"#strategies",className:"px-4 hover:text-olive"},"Strategies"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"#testimonies",className:"px-4 hover:text-olive"},"Testimonies")),/*#__PURE__*/index_js_default().createElement("div",{id:"socialmedia_icons",className:"flex space-x-6"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"https://x.com/bonapartedigital"},/*#__PURE__*/index_js_default().createElement("img",{src:(icon_x_default()),alt:"X"})),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"https://www.linkedin.com/bonapartedigital"},/*#__PURE__*/index_js_default().createElement("img",{src:(icon_LinkedIn_default()),alt:"LinkedIn"})),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"mailto:hello@bonapartedigital.com"},/*#__PURE__*/index_js_default().createElement("img",{src:(icon_Mail_default()),alt:"Mail"}))))));};/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({title,children})=>{return/*#__PURE__*/index_js_.createElement("div",{className:"global-wrapper"},/*#__PURE__*/index_js_.createElement("header",{className:"global-header"}),/*#__PURE__*/index_js_.createElement("main",null,children),/*#__PURE__*/index_js_.createElement(footer,null));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 9639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5276);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3524);
const Home=()=>{const{0:effectButtonOne,1:setEffectButtonOne}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:effectButtonTwo,1:setEffectButtonTwo}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"Bonaparte | Your Digital Strategist"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link",{as:"font",crossorigin:"anonymous",href:"/fonts/Mulish.woff2",rel:"preload",type:"font/woff2"}));

/***/ }),

/***/ 4972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(5276);

function IconLinkedIn (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M26.1676 9H10.8289C10.0941 9 9.5 9.58008 9.5 10.2973V25.6992C9.5 26.4164 10.0941 27 10.8289 27H26.1676C26.9023 27 27.5 26.4164 27.5 25.7027V10.2973C27.5 9.58008 26.9023 9 26.1676 9ZM14.8402 24.3387H12.1684V15.7465H14.8402V24.3387ZM13.5043 14.5758C12.6465 14.5758 11.9539 13.8832 11.9539 13.0289C11.9539 12.1746 12.6465 11.482 13.5043 11.482C14.3586 11.482 15.0512 12.1746 15.0512 13.0289C15.0512 13.8797 14.3586 14.5758 13.5043 14.5758ZM24.8387 24.3387H22.1703V20.1621C22.1703 19.1672 22.1527 17.884 20.7816 17.884C19.393 17.884 19.182 18.9703 19.182 20.0918V24.3387H16.5172V15.7465H19.0766V16.9207H19.1117C19.4668 16.2457 20.3387 15.532 21.6359 15.532C24.3395 15.532 24.8387 17.3109 24.8387 19.6242V24.3387Z","fill":"#ECF2C0","key":0}),React.createElement("circle",{"cx":"18.5","cy":"18","r":"17.5","stroke":"#ECF2C0","key":1})]);
}

IconLinkedIn.defaultProps = {"width":"37","height":"36","viewBox":"0 0 37 36","fill":"none"};

module.exports = IconLinkedIn;

IconLinkedIn.default = IconLinkedIn;


/***/ }),

/***/ 9191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(5276);

function IconMail (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M10.5 14.25L16.6237 18.5366C17.1196 18.8837 17.3675 19.0573 17.6372 19.1245C17.8754 19.1839 18.1246 19.1839 18.3628 19.1245C18.6325 19.0573 18.8804 18.8837 19.3763 18.5366L25.5 14.25M14.1 24H21.9C23.1601 24 23.7902 24 24.2715 23.7548C24.6948 23.539 25.039 23.1948 25.2548 22.7715C25.5 22.2902 25.5 21.6601 25.5 20.4V15.6C25.5 14.3399 25.5 13.7098 25.2548 13.2285C25.039 12.8052 24.6948 12.461 24.2715 12.2452C23.7902 12 23.1601 12 21.9 12H14.1C12.8399 12 12.2098 12 11.7285 12.2452C11.3052 12.461 10.961 12.8052 10.7452 13.2285C10.5 13.7098 10.5 14.3399 10.5 15.6V20.4C10.5 21.6601 10.5 22.2902 10.7452 22.7715C10.961 23.1948 11.3052 23.539 11.7285 23.7548C12.2098 24 12.8399 24 14.1 24Z","stroke":"#ECF2C0","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","key":0}),React.createElement("circle",{"cx":"18.5","cy":"18","r":"17.5","stroke":"#ECF2C0","key":1})]);
}

IconMail.defaultProps = {"width":"37","height":"36","viewBox":"0 0 37 36","fill":"none"};

module.exports = IconMail;

IconMail.default = IconMail;


/***/ }),

/***/ 9006:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(5276);

function IconX (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M22.8885 10H25.4953L19.8002 16.7774L26.5 26H21.2541L17.1454 20.4066L12.4441 26H9.8357L15.9271 18.7508L9.5 10H14.879L18.593 15.1126L22.8885 10ZM21.9736 24.3754H23.418L14.0942 11.5393H12.5441L21.9736 24.3754Z","fill":"#ECF2C0","key":0}),React.createElement("circle",{"cx":"18.5","cy":"18","r":"17.5","stroke":"#ECF2C0","key":1})]);
}

IconX.defaultProps = {"width":"37","height":"36","viewBox":"0 0 37 36","fill":"none"};

module.exports = IconX;

IconX.default = IconX;


/***/ }),

/***/ 5820:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(5276);

function LogoBonaparteWhite (props) {
    return React.createElement("svg",props,[React.createElement("title",{"id":"logo_bonaparteTitle","key":0},"Bonaparte | Digital Strategist"),React.createElement("desc",{"id":"logo_bonaparteDesc","key":1},"Logo for Bonaparte. A digital marketing agency"),React.createElement("style",{"type":"text/css","key":2},"\n\t.st0{fill:#EC8602;}\n\t.st1{fill:#FFFFFF;}\n"),React.createElement("g",{"id":"layer3","key":3},React.createElement("g",{"id":"g1"},[React.createElement("path",{"id":"path18","className":"st0","d":"M1210.9,77c0,5.3,4.3,9.6,9.6,9.6c5.3,0,9.6-4.3,9.6-9.6c0-5.3-4.3-9.6-9.6-9.6c0,0,0,0,0,0\n\t\t\tC1215.2,67.4,1210.9,71.7,1210.9,77z","key":0}),React.createElement("path",{"id":"path20","className":"st0","d":"M799.2,91.7c-5.2,0-9.4,4.2-9.4,9.4s4.2,9.4,9.4,9.4c5.2,0,9.4-4.2,9.4-9.4l0,0\n\t\t\tC808.6,95.9,804.4,91.6,799.2,91.7z","key":1}),React.createElement("path",{"id":"path19","className":"st0","d":"M528.8,91.7c-5.2,0-9.4,4.2-9.4,9.4s4.2,9.4,9.4,9.4s9.4-4.2,9.4-9.4S534,91.6,528.8,91.7\n\t\t\tC528.8,91.6,528.8,91.6,528.8,91.7z","key":2}),React.createElement("path",{"id":"path22","className":"st0","d":"M206.9,67.2c-5.4,0-9.7,4.3-9.7,9.7s4.4,9.7,9.7,9.7s9.7-4.3,9.7-9.7l0,0\n\t\t\tC216.6,71.5,212.2,67.2,206.9,67.2z","key":3}),React.createElement("circle",{"id":"circle21","className":"st0","cx":"42.1","cy":"76","r":"9.8","key":4}),React.createElement("polygon",{"id":"polygon18","className":"st1","points":"1184.2,17.4 1269.1,17.4 1269.1,0.1 1164.7,0.1 1164.7,153.8 1269.1,153.8 \n\t\t\t1269.1,136.4 1184.2,136.4 1184.2,92.1 1184.2,62.4 \t\t","key":5}),React.createElement("polygon",{"id":"polygon25","className":"st1","points":"1070.1,153.8 1089.6,153.8 1089.6,17.4 1142.7,17.4 1142.7,0.1 1017.1,0.1 \n\t\t\t1017.1,17.4 1070.1,17.4 \t\t","key":6}),React.createElement("path",{"id":"path25","className":"st1","d":"M988,85.7c4.9-4.5,8.7-10.1,11.2-16.2c2.7-6.4,4-13.2,4-20.1c0-6.1-1.2-12.2-3.5-17.9\n\t\t\tc-2.3-5.8-5.6-11.1-9.7-15.8c-4.2-4.7-9.2-8.5-14.7-11.3c-5.8-2.8-12.2-4.3-18.6-4.2h-65.8v153.7h19.5V98.6h40.7l35.1,55.2h22.1\n\t\t\tL971,94.9C977.3,93.3,983.2,90.1,988,85.7L988,85.7L988,85.7z M956.9,81.3h-46.5v-64h45.2c5,0,9.8,1.5,13.9,4.3\n\t\t\tc4.3,3,7.8,7,10.2,11.6c2.6,4.9,4,10.4,3.9,15.9c0,5.5-1.1,10.9-3.4,15.8c-2,4.7-5.2,8.7-9.3,11.8\n\t\t\tC966.9,79.8,961.9,81.4,956.9,81.3L956.9,81.3z","key":7}),React.createElement("polygon",{"id":"polygon20","className":"st1","points":"799.3,28.6 850.7,153.8 870.3,153.8 807.6,0.1 791.1,0.1 728.1,153.8 747.7,153.8 \t\t\n\t\t\t","key":8}),React.createElement("path",{"id":"path24","className":"st1","d":"M727.7,31.4c-2.3-5.8-5.6-11.1-9.7-15.8c-4.1-4.7-9.1-8.5-14.7-11.3c-5.8-2.8-12.2-4.3-18.6-4.2\n\t\t\th-64.1v153.7H640V98.6h45.9c8.5,0.2,16.8-2.3,23.8-7c6.8-4.7,12.2-11,15.8-18.4c3.7-7.4,5.6-15.7,5.6-24\n\t\t\tC731.1,43.1,730,37,727.7,31.4L727.7,31.4L727.7,31.4z M708.1,65.2c-2,4.6-5.2,8.7-9.3,11.7c-4,2.9-8.9,4.4-13.9,4.3H640V17.4\n\t\t\th43.5c5,0,9.8,1.4,13.9,4.1c4.3,2.9,7.8,6.8,10.2,11.4c2.6,5,4,10.7,3.9,16.3C711.5,54.7,710.4,60.2,708.1,65.2L708.1,65.2\n\t\t\tL708.1,65.2z","key":9}),React.createElement("polygon",{"id":"polygon19","className":"st1","points":"528.9,28.6 580.3,153.8 599.9,153.8 537.2,0.1 520.7,0.1 457.7,153.8 477.3,153.8 \t\t\n\t\t\t","key":10}),React.createElement("polygon",{"id":"polygon23","className":"st1","points":"417.7,120.2 323.8,0.1 307.3,0.1 307.3,153.8 326.8,153.8 326.8,36 419.4,153.8 \n\t\t\t437.2,153.8 437.2,0.3 417.7,0.3 \t\t","key":11}),React.createElement("path",{"id":"path23","className":"st1","d":"M258.6,24.4C252.4,17,244.8,11,236.2,6.6c-9-4.5-19-6.8-29-6.6c-9.8-0.1-19.5,2.1-28.4,6.3\n\t\t\tc-8.6,4.2-16.4,10-22.8,17.1c-6.5,7.2-11.6,15.5-15.1,24.6c-3.6,9.2-5.5,19.1-5.4,29c0,19.5,7,38.3,19.7,53.1\n\t\t\tc6.3,7.3,14,13.2,22.6,17.4c18.2,8.4,39.1,8.5,57.4,0.2c8.6-4.1,16.4-9.9,22.7-17c19.9-22.2,25.8-53.6,15.2-81.5\n\t\t\tC269.8,40.1,264.9,31.7,258.6,24.4z M255.3,98.4c-2.3,6.9-5.7,13.4-10.2,19.1c-4.4,5.7-10,10.3-16.4,13.7\n\t\t\tc-6.7,3.5-14.2,5.3-21.8,5.1c-7.4,0.1-14.7-1.6-21.4-4.9c-6.3-3.2-11.9-7.7-16.4-13.2c-4.6-5.7-8.2-12.2-10.6-19.1\n\t\t\tc-2.5-7.1-3.7-14.6-3.7-22.1c0-7.4,1.2-14.7,3.6-21.7c2.3-6.9,5.8-13.4,10.4-19.1c4.4-5.6,10-10.3,16.3-13.6\n\t\t\tc6.8-3.4,14.2-5.1,21.8-5c7.3-0.1,14.5,1.5,21,4.8c6.4,3.2,11.9,7.7,16.4,13.2c4.7,5.7,8.3,12.2,10.7,19.1\n\t\t\tc2.5,7.1,3.8,14.7,3.7,22.2C258.8,84.3,257.6,91.5,255.3,98.4L255.3,98.4z","key":12}),React.createElement("path",{"id":"path21","className":"st1","d":"M89.3,74.9c6.9-3,12.6-8.1,16.3-14.6c3.8-6.4,5.7-13.7,5.7-21.1c0-6.5-1.4-12.9-4.2-18.7\n\t\t\tc-2.7-5.9-6.9-10.9-12.2-14.7c-5.4-3.9-12-5.9-18.6-5.7H0v153.5h72.9c7.8,0.1,15.6-1.6,22.6-5c6.6-3.1,12.2-7.9,16.3-13.8\n\t\t\tc4.1-6.1,6.2-13.4,6.1-20.8c0.2-8.9-2.5-17.6-7.7-24.8C105,82.3,97.7,77.2,89.3,74.9L89.3,74.9z M94.8,123.4\n\t\t\tc-2.2,3.9-5.3,7.2-9.1,9.6c-3.8,2.5-8.3,3.7-12.9,3.7H19.5V83.9l0,0V68.3l0,0V16.9h50.2c4.1,0,8.2,1.2,11.6,3.5\n\t\t\tc3.4,2.3,6.2,5.5,8,9.2c2,4.1,3,8.5,2.9,13.1c0,4.4-1,8.8-3.1,12.8c-2,3.8-4.9,7-8.4,9.3c-2.9,1.9-6.2,3-9.7,3.3l0,0\n\t\t\tc-3.8,0-7,3.5-7,7.9s3.1,7.9,7,7.9h3.5c4.3-0.1,8.6,1.2,12.2,3.7c3.6,2.5,6.5,5.8,8.4,9.7c2.1,4.1,3.2,8.6,3.1,13.2\n\t\t\tC98.1,115,97,119.5,94.8,123.4z","key":13})]))]);
}

LogoBonaparteWhite.defaultProps = {"version":"1.1","id":"Logo","x":"0px","y":"0px","viewBox":"0 0 1269.1 153.9","style":{"enableBackground":"new 0 0 1269.1 153.9"},"xmlSpace":"preserve"};

module.exports = LogoBonaparteWhite;

LogoBonaparteWhite.default = LogoBonaparteWhite;


/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map