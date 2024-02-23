exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 2729:
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 5511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ bio)
});

// EXTERNAL MODULE: external "/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/node_modules/react/index.js"
var index_js_ = __webpack_require__(5276);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./node_modules/camelcase/index.js
var camelcase = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=800,c=800,h=(/* unused pure expression or super */ null && (4/3)),g=function(e){return console.warn(e);},p=function(e,t){return e-t;},m=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}},f=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function v(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function w(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,g=void 0===d?["auto","webp"]:d;return g=g.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:g,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||h))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/h):c),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:g}));}function y(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=w(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function b(e){var t,a=(e=w(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,d=e.options,h=e.width,p=e.height,y=e.filename,b=e.reporter,S=void 0===b?{warn:g}:b,N=e.backgroundColor,x=e.placeholderURL;if(a||S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=v(y)):i={width:h,height:p,format:(null==(t=i)?void 0:t.format)||v(y)||"auto"};var I=new Set(e.formats);(0===I.size||I.has("auto")||I.has(""))&&(I.delete("auto"),I.delete(""),I.add(i.format)),I.has("jpg")&&I.has("png")&&(S.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),I.delete("jpg"===i.format?"png":"jpg"));var W=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:g}:o,d=e.breakpoints,h=void 0===d?l:d,p=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(p.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+p.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,d=void 0===u?{warn:g}:u,h=a.width/a.height,p=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):c;var f=i;if(a.width<i||a.height<r){var v=a.width<i?"width":"height";d.warn("\nThe requested "+v+' "'+("width"===v?i:r)+'px" for the image '+t+" was larger than the actual image "+v+" of "+a[v]+"px. If possible, replace the current image with a larger one."),"width"===v?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:p.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}(e):"constrained"===i?E(e):"fullWidth"===i?E(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),j={sources:[]},R=e.sizes;R||(R=m(W.presentationWidth,o)),I.forEach(function(e){var t=W.sizes.map(function(t){var i=r(y,t,Math.round(t/W.aspectRatio),e,u,d);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;S.warn("["+a+"] The resolver for image "+y+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===W.unscaledWidth;})||t[0];i&&(j.fallback={src:i.src,srcSet:f(t),sizes:R});}else{var n;null==(n=j.sources)||n.push({srcSet:f(t),sizes:R,type:"image/"+e});}});var _={images:j,layout:o,backgroundColor:N};switch(x&&(_.placeholder={fallback:x}),o){case"fixed":_.width=W.presentationWidth,_.height=W.presentationHeight;break;case"fullWidth":_.width=1,_.height=1/W.aspectRatio;break;case"constrained":_.width=e.width||W.presentationWidth||1,_.height=(_.width||1)/W.aspectRatio;}return _;}var k=function(e){return Array.from(new Set([1].concat(e))).sort(p);};function E(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,c=e.layout,h=a.width/a.height,g=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(d,a.width))/h),i||(i=r*h);var f=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==c||t.includes(i)||t.push(i),{sizes:t=t.sort(p),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}function M(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var S=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),N=(/* unused pure expression or super */ null && (["images","placeholder"]));function x(){return true&&true;}var I=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},W=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},j=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function R(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,S);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),b(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function _(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,N),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var A,O=["src","srcSet","loading","alt","shouldLoad"],T=["fallback","sources","shouldLoad"],z=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,O);return/*#__PURE__*/index_js_default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},L=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,T),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/index_js_default().createElement(z,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/index_js_default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/index_js_default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};z.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},L.displayName="Picture",L.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var q=["fallback"],C=function(t){var a=t.fallback,i=o(t,q);return a?/*#__PURE__*/index_js_default().createElement(L,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/index_js_default().createElement("div",n({},i));};C.displayName="Placeholder",C.propTypes={fallback:prop_types.string,sources:null==(A=L.propTypes)?void 0:A.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var D=function(t){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(L,n({},t)),/*#__PURE__*/index_js_default().createElement("noscript",null,/*#__PURE__*/index_js_default().createElement(L,n({},t,{shouldLoad:!0}))));};D.displayName="MainImage",D.propTypes=L.propTypes;var P=["children"],H=function(){return/*#__PURE__*/index_js_default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},F=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/index_js_default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/index_js_default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/index_js_default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+i+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},B=function(a){var i=a.children,r=o(a,P);return/*#__PURE__*/index_js_default().createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_default().createElement(F,n({},r)),i,/*#__PURE__*/index_js_default().createElement(H,null));},G=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],V=["style","className"],U=function(e){return e.replace(/\n/g,"");},X=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,G);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,E=u.placeholder,M=u.backgroundColor,S=function(e,t,a){var i={},r="gatsby-image-wrapper";return x()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(x()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),N=S.style,I=S.className,W=o(S,V),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?U(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:U(e.srcSet)});})),/*#__PURE__*/index_js_default().createElement(i,n({},W,{style:n({},N,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/index_js_default().createElement(B,{layout:b,width:w,height:y},/*#__PURE__*/index_js_default().createElement(C,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return x()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(E,0,b,w,y,M,m,f))),/*#__PURE__*/index_js_default().createElement(D,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),x()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},Y=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],Z=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,Y);return s&&console.warn(s),r?/*#__PURE__*/index_js_default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(X),J=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},K=new Set(["fixed","fullWidth","constrained"]),Q={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:J,height:J,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!K.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};Z.displayName="StaticImage",Z.propTypes=Q;
;// CONCATENATED MODULE: ./src/components/bio.js
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */const Bio=()=>{var _data$site$siteMetada,_data$site$siteMetada2;const data=(0,gatsby_browser_entry.useStaticQuery)("3257411868");// Set these values by editing "siteMetadata" in gatsby-config.js
const author=(_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.author;const social=(_data$site$siteMetada2=data.site.siteMetadata)===null||_data$site$siteMetada2===void 0?void 0:_data$site$siteMetada2.social;return/*#__PURE__*/index_js_.createElement("div",{className:"bio"},/*#__PURE__*/index_js_.createElement(Z,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:__webpack_require__(3203)}),(author===null||author===void 0?void 0:author.name)&&/*#__PURE__*/index_js_.createElement("p",null,"Written by ",/*#__PURE__*/index_js_.createElement("strong",null,author.name)," ",(author===null||author===void 0?void 0:author.summary)||null,` `,/*#__PURE__*/index_js_.createElement("a",{href:`https://twitter.com/${(social===null||social===void 0?void 0:social.twitter)||``}`},"You should follow them on Twitter")));};/* harmony default export */ const bio = (Bio);

/***/ }),

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
const Footer=()=>{return/*#__PURE__*/index_js_default().createElement("footer",{className:"bg-green text-olive-light p-5"},/*#__PURE__*/index_js_default().createElement("div",{id:"footer_content_mobile",className:"md:hidden flex flex-col"},/*#__PURE__*/index_js_default().createElement("div",{className:"mx-auto mt-4"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement((logo_bonaparte_white_default()),{className:"h-5",alt:"Bonaparte"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"my-8 border-t border-olive"})," ",/*#__PURE__*/index_js_default().createElement("div",{id:"socialmedia_icons_mobile",className:"flex justify-center space-x-6 mb-8"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"https://x.com/bonapartedigital"}),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"https://www.linkedin.com/bonapartedigital"}),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"mailto:hello@bonapartedigital.com"})),/*#__PURE__*/index_js_default().createElement("div",{id:"copyright",className:"text-center"},/*#__PURE__*/index_js_default().createElement("p",null,"\xA9 ",new Date().getFullYear()," BONAPARTE | All Rights Reserved | ",/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/privacy-policy"},"Privacy Policy")))),/*#__PURE__*/index_js_default().createElement("div",{id:"footer_content_desktop",className:"hidden md:flex md:flex-col mx-auto px-4"},/*#__PURE__*/index_js_default().createElement("div",{id:"upper-footer",className:"flex container max-w-screen-xl px-10 md:mt-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/3"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement((logo_bonaparte_white_default()),{className:"h-5",alt:"Bonaparte"})),/*#__PURE__*/index_js_default().createElement("p",null,"We're not just a digital marketing agency; we're your strategic partners in world-class branding and digital domination.")),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/3 text-center"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-xl"},"Talk To Us"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://calendly.com/hellobonaparte/meet-greet",className:"md:inline-block text-md font-bold bg-olive text-green px-6 py-2 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5"},"Book a RDV")),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/3 pl-8"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-xl mb-2"},"Subscribe to our debriefs"),/*#__PURE__*/index_js_default().createElement(subscribe,null))),/*#__PURE__*/index_js_default().createElement("div",{className:"my-8 border-t border-olive"})," ",/*#__PURE__*/index_js_default().createElement("div",{id:"lower-footer",className:"flex container max-w-screen-xl justify-between px-10"},/*#__PURE__*/index_js_default().createElement("div",{id:"copyright",className:"text-center"},/*#__PURE__*/index_js_default().createElement("p",null,"\xA9 ",new Date().getFullYear()," BONAPARTE | All Rights Reserved | ",/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/privacy-policy",className:"hover:text-olive"},"Privacy Policy"))),/*#__PURE__*/index_js_default().createElement("div",{className:""},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"#strategies",className:"px-4 hover:text-olive"},"Strategies"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"#testimonies",className:"px-4 hover:text-olive"},"Testimonies")),/*#__PURE__*/index_js_default().createElement("div",{id:"socialmedia_icons",className:"flex space-x-6"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"https://x.com/bonapartedigital"}),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"https://www.linkedin.com/bonapartedigital"}),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"mailto:hello@bonapartedigital.com"})))));};/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({title,children})=>{return/*#__PURE__*/index_js_.createElement("div",{className:"global-wrapper"},/*#__PURE__*/index_js_.createElement("header",{className:"global-header"}),/*#__PURE__*/index_js_.createElement("main",null,children),/*#__PURE__*/index_js_.createElement(footer,null));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 7528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5276);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */const Seo=({description,title,children})=>{var _site$siteMetadata,_site$siteMetadata2,_site$siteMetadata2$s;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("2841359383");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,defaultTitle?`${title} | ${defaultTitle}`:title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:(_site$siteMetadata2$s=_site$siteMetadata2.social)===null||_site$siteMetadata2$s===void 0?void 0:_site$siteMetadata2$s.twitter)||``}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

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


/***/ }),

/***/ 3203:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}');

/***/ })

};
;
//# sourceMappingURL=75.js.map