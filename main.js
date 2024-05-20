/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/bg.jpeg */ "./src/imgs/bg.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/kfc.jpeg */ "./src/imgs/kfc.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body {
    font-size: 20px;
    font-family:'Courier New', Courier, monospace;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative; 
}
body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.4); 
    z-index: -1; 
}
.content {
    min-height: 100vh; 
    width: 60%;
    padding: 2.5em;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    line-height: 2em;
    position: relative; 
    overflow-y: auto; 
    z-index: 1; 
    font-weight:bold;
}
.content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.4); 
    z-index: 2; 
    pointer-events: none; 
}
.content p,
.content span,
.content img,
.content .desc {
    position: relative; 
    z-index: 3;  
    color: white; 
}
header > nav > button {
    padding:.5em;
    margin:.5em 2em;
    background-color:transparent;
    border:none;
    font-size:1.5em;
    font-weight: bold;
    color:white;
    &:hover{
        cursor: pointer;
        color:red;
    }
}
#home-tab{
    min-height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    *{
        margin-top:1em;
    } 
    img{
        border-radius: 1em;
        height:35em;
        width: 90%;
    }
}
#home-tab p, #home-tab span {
    animation: fadeIn 0.6s ease forwards;
    opacity: 0;
    transform: translateY(20px);
}
#menu-tab img{
    height:200px;
    width:200px;
    border-radius: 20px;
}
#menu-tab{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:1em;
}
.menu-item{
    animation: fadeIn 0.5s ease forwards;
    opacity:0;
    z-index:3;
    transform: translateY(20px);
    animation-delay: calc(var(--animation-order) * 0.15s);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
#about-tab{
    *{
        margin-top:.8em;
    }
}
#about-tab h2,
#about-tab a
{
    position: relative; 
    z-index: 3;  
    color:#fca5a5;
}
#about-tab h2,
#about-tab p {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.5s ease forwards;
}

.icons-div{
    font-size: 2em;
    display: flex;
    justify-content: flex-end;
    i{
        margin-right:1em;
    }
    a{
        margin-right: 10px;
        opacity: 0;
        animation: fadeIn 0.5s ease forwards;
    }
}
.icons-div a:nth-child(1) {
    animation-delay: 0.2s;
}
.icons-div a:nth-child(2) {
    animation-delay: 0.4s;
}
.icons-div a:nth-child(3) {
    animation-delay: 0.6s;
}
.icons-div a:nth-child(4) {
    animation-delay: 0.8s;
}
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width:1500px) {
    #home-tab img{
        width:70%;
        height:35rem;
    }
    .content{
        padding:1.5rem;
        width:65%;
    }
}

@media screen and (max-width:780px) {
    body{
        font-size: 1.2rem;
    }
    #menu-tab{
        grid-template-columns: 1fr;
        img{
            height:25rem;
            width:100%;
        }
    }
    #menu-tab,#about-tab,#home-tab{
        margin-top:3rem;
    }
    #home-tab img{
        width:100%;
        height:35rem;
    }
    header > nav > button {
        padding:.1rem;
        margin:.7rem .7rem;
        background-color:transparent;
        border:none;
    }
    header > nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%; 
        z-index: 1000;
        background-color: #450a0a;
        text-align: center;
        border-radius: .2rem;
    }
}
@media screen and (max-width:650px) {
   #home-tab img{
        width:100%;
        height:32rem;
    }
    #menu-tab{
        grid-template-columns: 1fr;
        img{
            height:12rem;
            width:100%;
        }
    }
    body{
        font-size: .7rem;
    }
    .content{
        width:100%;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,6CAA6C;IAC7C,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yDAAuC;IACvC,4BAA4B;IAC5B,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,UAAU;IACV,cAAc;IACd,yDAAwC;IACxC,4BAA4B;IAC5B,2BAA2B;IAC3B,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,UAAU;IACV,oBAAoB;AACxB;AACA;;;;IAII,kBAAkB;IAClB,UAAU;IACV,YAAY;AAChB;AACA;IACI,YAAY;IACZ,eAAe;IACf,4BAA4B;IAC5B,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,WAAW;IACX;QACI,eAAe;QACf,SAAS;IACb;AACJ;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB;QACI,cAAc;IAClB;IACA;QACI,kBAAkB;QAClB,WAAW;QACX,UAAU;IACd;AACJ;AACA;IACI,oCAAoC;IACpC,UAAU;IACV,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;AACA;IACI,oCAAoC;IACpC,SAAS;IACT,SAAS;IACT,2BAA2B;IAC3B,qDAAqD;IACrD,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI;QACI,eAAe;IACnB;AACJ;AACA;;;IAGI,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;;IAEI,UAAU;IACV,2BAA2B;IAC3B,oCAAoC;AACxC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,yBAAyB;IACzB;QACI,gBAAgB;IACpB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,oCAAoC;IACxC;AACJ;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;AACA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,SAAS;QACT,YAAY;IAChB;IACA;QACI,cAAc;QACd,SAAS;IACb;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;IACA;QACI,0BAA0B;QAC1B;YACI,YAAY;YACZ,UAAU;QACd;IACJ;IACA;QACI,eAAe;IACnB;IACA;QACI,UAAU;QACV,YAAY;IAChB;IACA;QACI,aAAa;QACb,kBAAkB;QAClB,4BAA4B;QAC5B,WAAW;IACf;IACA;QACI,eAAe;QACf,MAAM;QACN,OAAO;QACP,WAAW;QACX,aAAa;QACb,yBAAyB;QACzB,kBAAkB;QAClB,oBAAoB;IACxB;AACJ;AACA;GACG;QACK,UAAU;QACV,YAAY;IAChB;IACA;QACI,0BAA0B;QAC1B;YACI,YAAY;YACZ,UAAU;QACd;IACJ;IACA;QACI,gBAAgB;IACpB;IACA;QACI,UAAU;IACd;AACJ","sourcesContent":["*{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n}\nbody {\n    font-size: 20px;\n    font-family:'Courier New', Courier, monospace;\n    min-height: 100vh;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url('./imgs/bg.jpeg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    position: relative; \n}\nbody::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; \n    background-color: rgba(0, 0, 0, 0.4); \n    z-index: -1; \n}\n.content {\n    min-height: 100vh; \n    width: 60%;\n    padding: 2.5em;\n    background-image: url('./imgs/kfc.jpeg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    line-height: 2em;\n    position: relative; \n    overflow-y: auto; \n    z-index: 1; \n    font-weight:bold;\n}\n.content::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; \n    background-color: rgba(0, 0, 0, 0.4); \n    z-index: 2; \n    pointer-events: none; \n}\n.content p,\n.content span,\n.content img,\n.content .desc {\n    position: relative; \n    z-index: 3;  \n    color: white; \n}\nheader > nav > button {\n    padding:.5em;\n    margin:.5em 2em;\n    background-color:transparent;\n    border:none;\n    font-size:1.5em;\n    font-weight: bold;\n    color:white;\n    &:hover{\n        cursor: pointer;\n        color:red;\n    }\n}\n#home-tab{\n    min-height:100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    *{\n        margin-top:1em;\n    } \n    img{\n        border-radius: 1em;\n        height:35em;\n        width: 90%;\n    }\n}\n#home-tab p, #home-tab span {\n    animation: fadeIn 0.6s ease forwards;\n    opacity: 0;\n    transform: translateY(20px);\n}\n#menu-tab img{\n    height:200px;\n    width:200px;\n    border-radius: 20px;\n}\n#menu-tab{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap:1em;\n}\n.menu-item{\n    animation: fadeIn 0.5s ease forwards;\n    opacity:0;\n    z-index:3;\n    transform: translateY(20px);\n    animation-delay: calc(var(--animation-order) * 0.15s);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n#about-tab{\n    *{\n        margin-top:.8em;\n    }\n}\n#about-tab h2,\n#about-tab a\n{\n    position: relative; \n    z-index: 3;  \n    color:#fca5a5;\n}\n#about-tab h2,\n#about-tab p {\n    opacity: 0;\n    transform: translateY(20px);\n    animation: fadeIn 0.5s ease forwards;\n}\n\n.icons-div{\n    font-size: 2em;\n    display: flex;\n    justify-content: flex-end;\n    i{\n        margin-right:1em;\n    }\n    a{\n        margin-right: 10px;\n        opacity: 0;\n        animation: fadeIn 0.5s ease forwards;\n    }\n}\n.icons-div a:nth-child(1) {\n    animation-delay: 0.2s;\n}\n.icons-div a:nth-child(2) {\n    animation-delay: 0.4s;\n}\n.icons-div a:nth-child(3) {\n    animation-delay: 0.6s;\n}\n.icons-div a:nth-child(4) {\n    animation-delay: 0.8s;\n}\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n        transform: translateY(20px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@media screen and (max-width:1500px) {\n    #home-tab img{\n        width:70%;\n        height:35rem;\n    }\n    .content{\n        padding:1.5rem;\n        width:65%;\n    }\n}\n\n@media screen and (max-width:780px) {\n    body{\n        font-size: 1.2rem;\n    }\n    #menu-tab{\n        grid-template-columns: 1fr;\n        img{\n            height:25rem;\n            width:100%;\n        }\n    }\n    #menu-tab,#about-tab,#home-tab{\n        margin-top:3rem;\n    }\n    #home-tab img{\n        width:100%;\n        height:35rem;\n    }\n    header > nav > button {\n        padding:.1rem;\n        margin:.7rem .7rem;\n        background-color:transparent;\n        border:none;\n    }\n    header > nav {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%; \n        z-index: 1000;\n        background-color: #450a0a;\n        text-align: center;\n        border-radius: .2rem;\n    }\n}\n@media screen and (max-width:650px) {\n   #home-tab img{\n        width:100%;\n        height:32rem;\n    }\n    #menu-tab{\n        grid-template-columns: 1fr;\n        img{\n            height:12rem;\n            width:100%;\n        }\n    }\n    body{\n        font-size: .7rem;\n    }\n    .content{\n        width:100%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAboutTab)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");



function loadAboutTab() {
    (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
 
    const aboutTab = document.createElement('div');
    aboutTab.id = 'about-tab';
 
    const p1 = document.createElement('h2');
    p1.textContent = 'About Us';
    aboutTab.appendChild(p1);
 
    const p2 = document.createElement('p');
    p2.innerHTML = `We are KFC, home of the world-famous fried chicken. With over 30,000 locations in 150 countries, we're the second-largest fast food chain on the planet.
                    Our story began in the 1930s with Colonel Harland Sanders. His secret recipe was so good, it took over the world. The Colonel's face is still smiling down on us from every bucket.
                    Our slogans say it all: "It's Finger Lickin' Good!" and "Nobody does chicken like KFC".
                    Come for the chicken, stay for the smiles. And remember, it's always finger-lickin' good!`;
    aboutTab.appendChild(p2);
 
    const p3= document.createElement('h2');
    p3.textContent = 'Our Mission';
    aboutTab.appendChild(p3)
 
    const p4 = document.createElement('p');
    p4.innerHTML = `To deliver joy one serving at a time, with mouth-watering meals that make every moment special.`
    aboutTab.appendChild(p4);
 
 
    const p5= document.createElement('h2');
    p5.textContent = 'Join the KFC Family';
    aboutTab.appendChild(p5)
 
    const p6 = document.createElement('p');
    p6.innerHTML = `Dive into our world of finger-lickin' goodness. Whether you're dining in, taking out, or ordering online, we’re here to make your day delicious.`;
    aboutTab.appendChild(p6);
 
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons-div');
 
     // Define the social media icons 
     const socialMedia = [
         { class: 'fab fa-twitter', url: 'https://twitter.com/KFCinKenya' },
         { class: 'fab fa-instagram', url: 'https://www.instagram.com/kfckenya/' },
         { class: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UCeIvrX5BUZ9d1B5rmxz5w_Q' },
         { class: 'fab fa-facebook',  url: 'https://www.facebook.com/kfckenya'}
     ];
     socialMedia.forEach(media =>{
         const anchor = document.createElement('a');
         anchor.href = media.url;
         anchor.target = '_blank';
 
         const icon = document.createElement('i');
         icon.className = media.class;
 
         anchor.appendChild(icon);
         iconsDiv.appendChild(anchor);
     })
    aboutTab.appendChild(iconsDiv);
 
    contentDiv.appendChild(aboutTab);
 }
 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearContent)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _imgs_bg_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/bg.jpeg */ "./src/imgs/bg.jpeg");
/* harmony import */ var _imgs_kfc_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/kfc.jpeg */ "./src/imgs/kfc.jpeg");
/* harmony import */ var _imgs_ad_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/ad.jpeg */ "./src/imgs/ad.jpeg");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");








const homeTabBtn = document.getElementById('Home');
const menuTabBtn = document.getElementById('Menu');
const aboutTabBtn = document.getElementById('About');

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const aboutTab = document.getElementById('about-tab')

const contentDiv = document.getElementById('content');

// Add event listeners to the buttons
homeTabBtn.addEventListener('click', loadHomeTab);
menuTabBtn.addEventListener('click', menu.loadMenuTab);
aboutTabBtn.addEventListener('click', about.loadAboutTab);

// Clear content div
function clearContent() {
   contentDiv.innerHTML = '';
}
function loadHomeTab() {
    clearContent();
    const homeTab = document.createElement('div');
    homeTab.id = 'home-tab';
 
    const p1 = document.createElement('p');
    p1.textContent = `Welcome to KFC, where every meal is a celebration of taste. Dive into our world of crispy,
    juicy chicken and delightful sides. Order now and enjoy the legendary flavors delivered right to your doorstep!`;
    homeTab.appendChild(p1);
 
    const span1 = document.createElement('span');
    span1.textContent = "Delivery and Pick Up Now Available";
    homeTab.appendChild(span1);
 
    const p2 = document.createElement('p');
    p2.textContent = `Indulge in the Original Recipe
    Experience the authentic taste of KFC's Original Recipe Chicken. Hand-breaded and seasoned
    to perfection with secret ingridients and spices. Taste the tradition that has been loved for generations.`; 
    homeTab.appendChild(p2);
 
    //add menu image
    const adImg = new Image();
    adImg.src = _imgs_ad_jpeg__WEBPACK_IMPORTED_MODULE_3__;
    homeTab.appendChild(adImg)
 
    contentDiv.appendChild(homeTab);
 }

function loadStyles(){
   const body = document.querySelector('body');

   contentDiv.classList.add('content');

   return contentDiv;

}
loadHomeTab();
loadStyles();




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuTab)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _imgs_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/burger.jpg */ "./src/imgs/burger.jpg");
/* harmony import */ var _imgs_fries_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/fries.jpeg */ "./src/imgs/fries.jpeg");
/* harmony import */ var _imgs_bucket_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/bucket.jpeg */ "./src/imgs/bucket.jpeg");
/* harmony import */ var _imgs_combo_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/combo.jpeg */ "./src/imgs/combo.jpeg");
/* harmony import */ var _imgs_frieschicken_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/frieschicken.jpeg */ "./src/imgs/frieschicken.jpeg");
/* harmony import */ var _imgs_sodachicken_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/sodachicken.jpeg */ "./src/imgs/sodachicken.jpeg");









// Define menu data
const menuItems = [
    {
        title: 'Burger',
        price: 50,
        description: 'Delicious burger with fresh ingredients.',
        image: _imgs_burger_jpg__WEBPACK_IMPORTED_MODULE_1__
    },
    {
        title: 'Fries',
        price: 70,
        description: 'Crispy fries served with your choice of dipping sauce.',
        image: _imgs_fries_jpeg__WEBPACK_IMPORTED_MODULE_2__
    },
    {
        title: 'Bucket',
        price: 250,
        description: 'Bucket filled with crispy fries & chicken pieces.',
        image: _imgs_bucket_jpeg__WEBPACK_IMPORTED_MODULE_3__
    },
    {
        title: 'Combo Meal',
        price: 350,
        description: 'Perfect combo of chicken, fries and drink.',
        image: _imgs_combo_jpeg__WEBPACK_IMPORTED_MODULE_4__
    },
    {
        title: 'Fries Chicken',
        price: 150,
        description: 'Tender chicken strips served with fries.',
        image: _imgs_frieschicken_jpeg__WEBPACK_IMPORTED_MODULE_5__
    },
    {
        title: 'Soda Chicken',
        price: 120,
        description: 'Crispy chicken and fries served with a refreshing soda.',
        image: _imgs_sodachicken_jpeg__WEBPACK_IMPORTED_MODULE_6__
    },
];

//Create and populate the Menu tab
function loadMenuTab() {
   (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();

   const menuTab = document.createElement('div');
   menuTab.id = 'menu-tab';
   
   menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.style.setProperty('--animation-order', index);

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const title = document.createElement('span');
        title.classList.add('item-name');
        title.textContent = `${item.title} | $${item.price}`;

        const description = document.createElement('div');
        description.classList.add('desc');
        description.textContent = `${item.description}`;

        menuItem.appendChild(img);
        menuItem.appendChild(title);
        menuItem.appendChild(description);

        menuTab.appendChild(menuItem);
    });

    contentDiv.appendChild(menuTab)
}


/***/ }),

/***/ "./src/imgs/ad.jpeg":
/*!**************************!*\
  !*** ./src/imgs/ad.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/56205c463233907426f6.jpeg";

/***/ }),

/***/ "./src/imgs/bg.jpeg":
/*!**************************!*\
  !*** ./src/imgs/bg.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e7c292d1d6ee53af301f.jpeg";

/***/ }),

/***/ "./src/imgs/bucket.jpeg":
/*!******************************!*\
  !*** ./src/imgs/bucket.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/05ebd024361756488760.jpeg";

/***/ }),

/***/ "./src/imgs/burger.jpg":
/*!*****************************!*\
  !*** ./src/imgs/burger.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7b702e228af38739831b.jpg";

/***/ }),

/***/ "./src/imgs/combo.jpeg":
/*!*****************************!*\
  !*** ./src/imgs/combo.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7059d5c4c0728e465f51.jpeg";

/***/ }),

/***/ "./src/imgs/fries.jpeg":
/*!*****************************!*\
  !*** ./src/imgs/fries.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b0802b57a155e371a809.jpeg";

/***/ }),

/***/ "./src/imgs/frieschicken.jpeg":
/*!************************************!*\
  !*** ./src/imgs/frieschicken.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/97e617e7638c70eab152.jpeg";

/***/ }),

/***/ "./src/imgs/kfc.jpeg":
/*!***************************!*\
  !*** ./src/imgs/kfc.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cca78196587f7d625555.jpeg";

/***/ }),

/***/ "./src/imgs/sodachicken.jpeg":
/*!***********************************!*\
  !*** ./src/imgs/sodachicken.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0be135515f6d149aa845.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsMkdBQWtDO0FBQzlFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sUUFBUSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sVUFB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Q05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvYmcuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1ncy9rZmMuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxufVxuYm9keTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IFxuICAgIHotaW5kZXg6IC0xOyBcbn1cbi5jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgXG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nOiAyLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgXG4gICAgei1pbmRleDogMTsgXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5jb250ZW50OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgXG4gICAgei1pbmRleDogMjsgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxufVxuLmNvbnRlbnQgcCxcbi5jb250ZW50IHNwYW4sXG4uY29udGVudCBpbWcsXG4uY29udGVudCAuZGVzYyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICB6LWluZGV4OiAzOyAgXG4gICAgY29sb3I6IHdoaXRlOyBcbn1cbmhlYWRlciA+IG5hdiA+IGJ1dHRvbiB7XG4gICAgcGFkZGluZzouNWVtO1xuICAgIG1hcmdpbjouNWVtIDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjpub25lO1xuICAgIGZvbnQtc2l6ZToxLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOnJlZDtcbiAgICB9XG59XG4jaG9tZS10YWJ7XG4gICAgbWluLWhlaWdodDoxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAqe1xuICAgICAgICBtYXJnaW4tdG9wOjFlbTtcbiAgICB9IFxuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICBoZWlnaHQ6MzVlbTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG59XG4jaG9tZS10YWIgcCwgI2hvbWUtdGFiIHNwYW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZSBmb3J3YXJkcztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbn1cbiNtZW51LXRhYiBpbWd7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4jbWVudS10YWJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6MWVtO1xufVxuLm1lbnUtaXRlbXtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgb3BhY2l0eTowO1xuICAgIHotaW5kZXg6MztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGlvbi1vcmRlcikgKiAwLjE1cyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2Fib3V0LXRhYntcbiAgICAqe1xuICAgICAgICBtYXJnaW4tdG9wOi44ZW07XG4gICAgfVxufVxuI2Fib3V0LXRhYiBoMixcbiNhYm91dC10YWIgYVxue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgei1pbmRleDogMzsgIFxuICAgIGNvbG9yOiNmY2E1YTU7XG59XG4jYWJvdXQtdGFiIGgyLFxuI2Fib3V0LXRhYiBwIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UgZm9yd2FyZHM7XG59XG5cbi5pY29ucy1kaXZ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGl7XG4gICAgICAgIG1hcmdpbi1yaWdodDoxZW07XG4gICAgfVxuICAgIGF7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlIGZvcndhcmRzO1xuICAgIH1cbn1cbi5pY29ucy1kaXYgYTpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cbi5pY29ucy1kaXYgYTpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cbi5pY29ucy1kaXYgYTpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cbi5pY29ucy1kaXYgYTpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTUwMHB4KSB7XG4gICAgI2hvbWUtdGFiIGltZ3tcbiAgICAgICAgd2lkdGg6NzAlO1xuICAgICAgICBoZWlnaHQ6MzVyZW07XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nOjEuNXJlbTtcbiAgICAgICAgd2lkdGg6NjUlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3ODBweCkge1xuICAgIGJvZHl7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICAjbWVudS10YWJ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6MjVyZW07XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgICNtZW51LXRhYiwjYWJvdXQtdGFiLCNob21lLXRhYntcbiAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgIH1cbiAgICAjaG9tZS10YWIgaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MzVyZW07XG4gICAgfVxuICAgIGhlYWRlciA+IG5hdiA+IGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6LjFyZW07XG4gICAgICAgIG1hcmdpbjouN3JlbSAuN3JlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgfVxuICAgIGhlYWRlciA+IG5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTBhMGE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NTBweCkge1xuICAgI2hvbWUtdGFiIGltZ3tcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OjMycmVtO1xuICAgIH1cbiAgICAjbWVudS10YWJ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6MTJyZW07XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJvZHl7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDZDQUE2QztJQUM3QyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlEQUF1QztJQUN2Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsY0FBYztJQUNkLHlEQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLG9CQUFvQjtBQUN4QjtBQUNBOzs7O0lBSUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1g7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiO0FBQ0o7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IscURBQXFEO0lBQ3JELGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFDQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QjtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixvQ0FBb0M7SUFDeEM7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNULFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxTQUFTO0lBQ2I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUI7WUFDSSxZQUFZO1lBQ1osVUFBVTtRQUNkO0lBQ0o7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLDRCQUE0QjtRQUM1QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZixNQUFNO1FBQ04sT0FBTztRQUNQLFdBQVc7UUFDWCxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7QUFDSjtBQUNBO0dBQ0c7UUFDSyxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCO1lBQ0ksWUFBWTtZQUNaLFVBQVU7UUFDZDtJQUNKO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZ3MvYmcuanBlZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxufVxcbmJvZHk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgXFxuICAgIHotaW5kZXg6IC0xOyBcXG59XFxuLmNvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgXFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmc6IDIuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1ncy9rZmMuanBlZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIG92ZXJmbG93LXk6IGF1dG87IFxcbiAgICB6LWluZGV4OiAxOyBcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG59XFxuLmNvbnRlbnQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgXFxuICAgIHotaW5kZXg6IDI7IFxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXFxufVxcbi5jb250ZW50IHAsXFxuLmNvbnRlbnQgc3BhbixcXG4uY29udGVudCBpbWcsXFxuLmNvbnRlbnQgLmRlc2Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB6LWluZGV4OiAzOyAgXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxufVxcbmhlYWRlciA+IG5hdiA+IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6LjVlbTtcXG4gICAgbWFyZ2luOi41ZW0gMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgZm9udC1zaXplOjEuNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBjb2xvcjpyZWQ7XFxuICAgIH1cXG59XFxuI2hvbWUtdGFie1xcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAqe1xcbiAgICAgICAgbWFyZ2luLXRvcDoxZW07XFxuICAgIH0gXFxuICAgIGltZ3tcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgICAgIGhlaWdodDozNWVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbn1cXG4jaG9tZS10YWIgcCwgI2hvbWUtdGFiIHNwYW4ge1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjZzIGVhc2UgZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG59XFxuI21lbnUtdGFiIGltZ3tcXG4gICAgaGVpZ2h0OjIwMHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuI21lbnUtdGFie1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOjFlbTtcXG59XFxuLm1lbnUtaXRlbXtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlIGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OjA7XFxuICAgIHotaW5kZXg6MztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tYW5pbWF0aW9uLW9yZGVyKSAqIDAuMTVzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYWJvdXQtdGFie1xcbiAgICAqe1xcbiAgICAgICAgbWFyZ2luLXRvcDouOGVtO1xcbiAgICB9XFxufVxcbiNhYm91dC10YWIgaDIsXFxuI2Fib3V0LXRhYiBhXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB6LWluZGV4OiAzOyAgXFxuICAgIGNvbG9yOiNmY2E1YTU7XFxufVxcbiNhYm91dC10YWIgaDIsXFxuI2Fib3V0LXRhYiBwIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UgZm9yd2FyZHM7XFxufVxcblxcbi5pY29ucy1kaXZ7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBpe1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjFlbTtcXG4gICAgfVxcbiAgICBhe1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZSBmb3J3YXJkcztcXG4gICAgfVxcbn1cXG4uaWNvbnMtZGl2IGE6bnRoLWNoaWxkKDEpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG4uaWNvbnMtZGl2IGE6bnRoLWNoaWxkKDIpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xcbn1cXG4uaWNvbnMtZGl2IGE6bnRoLWNoaWxkKDMpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcbn1cXG4uaWNvbnMtZGl2IGE6bnRoLWNoaWxkKDQpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTUwMHB4KSB7XFxuICAgICNob21lLXRhYiBpbWd7XFxuICAgICAgICB3aWR0aDo3MCU7XFxuICAgICAgICBoZWlnaHQ6MzVyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICBwYWRkaW5nOjEuNXJlbTtcXG4gICAgICAgIHdpZHRoOjY1JTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KSB7XFxuICAgIGJvZHl7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgICAjbWVudS10YWJ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6MjVyZW07XFxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAjbWVudS10YWIsI2Fib3V0LXRhYiwjaG9tZS10YWJ7XFxuICAgICAgICBtYXJnaW4tdG9wOjNyZW07XFxuICAgIH1cXG4gICAgI2hvbWUtdGFiIGltZ3tcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBoZWlnaHQ6MzVyZW07XFxuICAgIH1cXG4gICAgaGVhZGVyID4gbmF2ID4gYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6LjFyZW07XFxuICAgICAgICBtYXJnaW46LjdyZW0gLjdyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOm5vbmU7XFxuICAgIH1cXG4gICAgaGVhZGVyID4gbmF2IHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTsgXFxuICAgICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1MGEwYTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjUwcHgpIHtcXG4gICAjaG9tZS10YWIgaW1ne1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIGhlaWdodDozMnJlbTtcXG4gICAgfVxcbiAgICAjbWVudS10YWJ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6MTJyZW07XFxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBib2R5e1xcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgfVxcbiAgICAuY29udGVudHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gXCIuXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFib3V0VGFiKCkge1xuICAgIGNsZWFyQ29udGVudCgpO1xuIFxuICAgIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRUYWIuaWQgPSAnYWJvdXQtdGFiJztcbiBcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIGFib3V0VGFiLmFwcGVuZENoaWxkKHAxKTtcbiBcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi5pbm5lckhUTUwgPSBgV2UgYXJlIEtGQywgaG9tZSBvZiB0aGUgd29ybGQtZmFtb3VzIGZyaWVkIGNoaWNrZW4uIFdpdGggb3ZlciAzMCwwMDAgbG9jYXRpb25zIGluIDE1MCBjb3VudHJpZXMsIHdlJ3JlIHRoZSBzZWNvbmQtbGFyZ2VzdCBmYXN0IGZvb2QgY2hhaW4gb24gdGhlIHBsYW5ldC5cbiAgICAgICAgICAgICAgICAgICAgT3VyIHN0b3J5IGJlZ2FuIGluIHRoZSAxOTMwcyB3aXRoIENvbG9uZWwgSGFybGFuZCBTYW5kZXJzLiBIaXMgc2VjcmV0IHJlY2lwZSB3YXMgc28gZ29vZCwgaXQgdG9vayBvdmVyIHRoZSB3b3JsZC4gVGhlIENvbG9uZWwncyBmYWNlIGlzIHN0aWxsIHNtaWxpbmcgZG93biBvbiB1cyBmcm9tIGV2ZXJ5IGJ1Y2tldC5cbiAgICAgICAgICAgICAgICAgICAgT3VyIHNsb2dhbnMgc2F5IGl0IGFsbDogXCJJdCdzIEZpbmdlciBMaWNraW4nIEdvb2QhXCIgYW5kIFwiTm9ib2R5IGRvZXMgY2hpY2tlbiBsaWtlIEtGQ1wiLlxuICAgICAgICAgICAgICAgICAgICBDb21lIGZvciB0aGUgY2hpY2tlbiwgc3RheSBmb3IgdGhlIHNtaWxlcy4gQW5kIHJlbWVtYmVyLCBpdCdzIGFsd2F5cyBmaW5nZXItbGlja2luJyBnb29kIWA7XG4gICAgYWJvdXRUYWIuYXBwZW5kQ2hpbGQocDIpO1xuIFxuICAgIGNvbnN0IHAzPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHAzLnRleHRDb250ZW50ID0gJ091ciBNaXNzaW9uJztcbiAgICBhYm91dFRhYi5hcHBlbmRDaGlsZChwMylcbiBcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwNC5pbm5lckhUTUwgPSBgVG8gZGVsaXZlciBqb3kgb25lIHNlcnZpbmcgYXQgYSB0aW1lLCB3aXRoIG1vdXRoLXdhdGVyaW5nIG1lYWxzIHRoYXQgbWFrZSBldmVyeSBtb21lbnQgc3BlY2lhbC5gXG4gICAgYWJvdXRUYWIuYXBwZW5kQ2hpbGQocDQpO1xuIFxuIFxuICAgIGNvbnN0IHA1PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHA1LnRleHRDb250ZW50ID0gJ0pvaW4gdGhlIEtGQyBGYW1pbHknO1xuICAgIGFib3V0VGFiLmFwcGVuZENoaWxkKHA1KVxuIFxuICAgIGNvbnN0IHA2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHA2LmlubmVySFRNTCA9IGBEaXZlIGludG8gb3VyIHdvcmxkIG9mIGZpbmdlci1saWNraW4nIGdvb2RuZXNzLiBXaGV0aGVyIHlvdSdyZSBkaW5pbmcgaW4sIHRha2luZyBvdXQsIG9yIG9yZGVyaW5nIG9ubGluZSwgd2XigJlyZSBoZXJlIHRvIG1ha2UgeW91ciBkYXkgZGVsaWNpb3VzLmA7XG4gICAgYWJvdXRUYWIuYXBwZW5kQ2hpbGQocDYpO1xuIFxuICAgIGNvbnN0IGljb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWNvbnNEaXYuY2xhc3NMaXN0LmFkZCgnaWNvbnMtZGl2Jyk7XG4gXG4gICAgIC8vIERlZmluZSB0aGUgc29jaWFsIG1lZGlhIGljb25zIFxuICAgICBjb25zdCBzb2NpYWxNZWRpYSA9IFtcbiAgICAgICAgIHsgY2xhc3M6ICdmYWIgZmEtdHdpdHRlcicsIHVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vS0ZDaW5LZW55YScgfSxcbiAgICAgICAgIHsgY2xhc3M6ICdmYWIgZmEtaW5zdGFncmFtJywgdXJsOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9rZmNrZW55YS8nIH0sXG4gICAgICAgICB7IGNsYXNzOiAnZmFiIGZhLXlvdXR1YmUnLCB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDZUl2clg1QlVaOWQxQjVybXh6NXdfUScgfSxcbiAgICAgICAgIHsgY2xhc3M6ICdmYWIgZmEtZmFjZWJvb2snLCAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2tmY2tlbnlhJ31cbiAgICAgXTtcbiAgICAgc29jaWFsTWVkaWEuZm9yRWFjaChtZWRpYSA9PntcbiAgICAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgIGFuY2hvci5ocmVmID0gbWVkaWEudXJsO1xuICAgICAgICAgYW5jaG9yLnRhcmdldCA9ICdfYmxhbmsnO1xuIFxuICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgIGljb24uY2xhc3NOYW1lID0gbWVkaWEuY2xhc3M7XG4gXG4gICAgICAgICBhbmNob3IuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICBpY29uc0Rpdi5hcHBlbmRDaGlsZChhbmNob3IpO1xuICAgICB9KVxuICAgIGFib3V0VGFiLmFwcGVuZENoaWxkKGljb25zRGl2KTtcbiBcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0VGFiKTtcbiB9XG4gIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IEJnSW1nIGZyb20gJy4vaW1ncy9iZy5qcGVnJztcbmltcG9ydCBjb3ZlckltZyBmcm9tICcuL2ltZ3Mva2ZjLmpwZWcnO1xuaW1wb3J0IGFkIGZyb20gJy4vaW1ncy9hZC5qcGVnJztcblxuaW1wb3J0IGxvYWRBYm91dFRhYiBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCBsb2FkTWVudVRhYiBmcm9tICcuL21lbnUuanMnO1xuXG5jb25zdCBob21lVGFiQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hvbWUnKTtcbmNvbnN0IG1lbnVUYWJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWVudScpO1xuY29uc3QgYWJvdXRUYWJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQWJvdXQnKTtcblxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRhYicpO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRhYicpO1xuY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtdGFiJylcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbnNcbmhvbWVUYWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZVRhYik7XG5tZW51VGFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudS5sb2FkTWVudVRhYik7XG5hYm91dFRhYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFib3V0LmxvYWRBYm91dFRhYik7XG5cbi8vIENsZWFyIGNvbnRlbnQgZGl2XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xufVxuZnVuY3Rpb24gbG9hZEhvbWVUYWIoKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUYWIuaWQgPSAnaG9tZS10YWInO1xuIFxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gS0ZDLCB3aGVyZSBldmVyeSBtZWFsIGlzIGEgY2VsZWJyYXRpb24gb2YgdGFzdGUuIERpdmUgaW50byBvdXIgd29ybGQgb2YgY3Jpc3B5LFxuICAgIGp1aWN5IGNoaWNrZW4gYW5kIGRlbGlnaHRmdWwgc2lkZXMuIE9yZGVyIG5vdyBhbmQgZW5qb3kgdGhlIGxlZ2VuZGFyeSBmbGF2b3JzIGRlbGl2ZXJlZCByaWdodCB0byB5b3VyIGRvb3JzdGVwIWA7XG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChwMSk7XG4gXG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhbjEudGV4dENvbnRlbnQgPSBcIkRlbGl2ZXJ5IGFuZCBQaWNrIFVwIE5vdyBBdmFpbGFibGVcIjtcbiAgICBob21lVGFiLmFwcGVuZENoaWxkKHNwYW4xKTtcbiBcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi50ZXh0Q29udGVudCA9IGBJbmR1bGdlIGluIHRoZSBPcmlnaW5hbCBSZWNpcGVcbiAgICBFeHBlcmllbmNlIHRoZSBhdXRoZW50aWMgdGFzdGUgb2YgS0ZDJ3MgT3JpZ2luYWwgUmVjaXBlIENoaWNrZW4uIEhhbmQtYnJlYWRlZCBhbmQgc2Vhc29uZWRcbiAgICB0byBwZXJmZWN0aW9uIHdpdGggc2VjcmV0IGluZ3JpZGllbnRzIGFuZCBzcGljZXMuIFRhc3RlIHRoZSB0cmFkaXRpb24gdGhhdCBoYXMgYmVlbiBsb3ZlZCBmb3IgZ2VuZXJhdGlvbnMuYDsgXG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChwMik7XG4gXG4gICAgLy9hZGQgbWVudSBpbWFnZVxuICAgIGNvbnN0IGFkSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYWRJbWcuc3JjID0gYWQ7XG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChhZEltZylcbiBcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuIH1cblxuZnVuY3Rpb24gbG9hZFN0eWxlcygpe1xuICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgIHJldHVybiBjb250ZW50RGl2O1xuXG59XG5sb2FkSG9tZVRhYigpO1xubG9hZFN0eWxlcygpO1xuXG5cbiIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLic7XG5cbmltcG9ydCBidXJnZXJJbWcgZnJvbSAnLi9pbWdzL2J1cmdlci5qcGcnO1xuaW1wb3J0IGZyaWVzSW1nIGZyb20gJy4vaW1ncy9mcmllcy5qcGVnJztcbmltcG9ydCBidWNrZXRJbWcgZnJvbSAnLi9pbWdzL2J1Y2tldC5qcGVnJztcbmltcG9ydCBjb21ib0ltZyBmcm9tICcuL2ltZ3MvY29tYm8uanBlZyc7XG5pbXBvcnQgZnJpZXNDaGlja2VuSW1nIGZyb20gJy4vaW1ncy9mcmllc2NoaWNrZW4uanBlZyc7XG5pbXBvcnQgc29kYUNoaWNrZW5JbWcgZnJvbSAnLi9pbWdzL3NvZGFjaGlja2VuLmpwZWcnO1xuXG4vLyBEZWZpbmUgbWVudSBkYXRhXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ0J1cmdlcicsXG4gICAgICAgIHByaWNlOiA1MCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWxpY2lvdXMgYnVyZ2VyIHdpdGggZnJlc2ggaW5ncmVkaWVudHMuJyxcbiAgICAgICAgaW1hZ2U6IGJ1cmdlckltZ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0ZyaWVzJyxcbiAgICAgICAgcHJpY2U6IDcwLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NyaXNweSBmcmllcyBzZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBkaXBwaW5nIHNhdWNlLicsXG4gICAgICAgIGltYWdlOiBmcmllc0ltZ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0J1Y2tldCcsXG4gICAgICAgIHByaWNlOiAyNTAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQnVja2V0IGZpbGxlZCB3aXRoIGNyaXNweSBmcmllcyAmIGNoaWNrZW4gcGllY2VzLicsXG4gICAgICAgIGltYWdlOiBidWNrZXRJbWdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb21ibyBNZWFsJyxcbiAgICAgICAgcHJpY2U6IDM1MCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQZXJmZWN0IGNvbWJvIG9mIGNoaWNrZW4sIGZyaWVzIGFuZCBkcmluay4nLFxuICAgICAgICBpbWFnZTogY29tYm9JbWdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdGcmllcyBDaGlja2VuJyxcbiAgICAgICAgcHJpY2U6IDE1MCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUZW5kZXIgY2hpY2tlbiBzdHJpcHMgc2VydmVkIHdpdGggZnJpZXMuJyxcbiAgICAgICAgaW1hZ2U6IGZyaWVzQ2hpY2tlbkltZ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1NvZGEgQ2hpY2tlbicsXG4gICAgICAgIHByaWNlOiAxMjAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ3Jpc3B5IGNoaWNrZW4gYW5kIGZyaWVzIHNlcnZlZCB3aXRoIGEgcmVmcmVzaGluZyBzb2RhLicsXG4gICAgICAgIGltYWdlOiBzb2RhQ2hpY2tlbkltZ1xuICAgIH0sXG5dO1xuXG4vL0NyZWF0ZSBhbmQgcG9wdWxhdGUgdGhlIE1lbnUgdGFiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudVRhYigpIHtcbiAgIGNsZWFyQ29udGVudCgpO1xuXG4gICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBtZW51VGFiLmlkID0gJ21lbnUtdGFiJztcbiAgIFxuICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICBtZW51SXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hbmltYXRpb24tb3JkZXInLCBpbmRleCk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBpdGVtLmltYWdlO1xuICAgICAgICBpbWcuYWx0ID0gaXRlbS50aXRsZTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7aXRlbS50aXRsZX0gfCAkJHtpdGVtLnByaWNlfWA7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2l0ZW0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBtZW51VGFiLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudVRhYilcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==