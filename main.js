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
 
    ___WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(aboutTab);
 }
 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentDiv: () => (/* binding */ contentDiv),
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
menuTabBtn.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
aboutTabBtn.addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

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

    ___WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(menuTab)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsMkdBQWtDO0FBQzlFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sUUFBUSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sVUFB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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JnLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZ3Mva2ZjLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cbmJvZHk6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyBcbiAgICB6LWluZGV4OiAtMTsgXG59XG4uY29udGVudCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7IFxuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZzogMi41ZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIG92ZXJmbG93LXk6IGF1dG87IFxuICAgIHotaW5kZXg6IDE7IFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uY29udGVudDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IFxuICAgIHotaW5kZXg6IDI7IFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbn1cbi5jb250ZW50IHAsXG4uY29udGVudCBzcGFuLFxuLmNvbnRlbnQgaW1nLFxuLmNvbnRlbnQgLmRlc2Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgei1pbmRleDogMzsgIFxuICAgIGNvbG9yOiB3aGl0ZTsgXG59XG5oZWFkZXIgPiBuYXYgPiBidXR0b24ge1xuICAgIHBhZGRpbmc6LjVlbTtcbiAgICBtYXJnaW46LjVlbSAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBmb250LXNpemU6MS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgJjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjpyZWQ7XG4gICAgfVxufVxuI2hvbWUtdGFie1xuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgKntcbiAgICAgICAgbWFyZ2luLXRvcDoxZW07XG4gICAgfSBcbiAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgaGVpZ2h0OjM1ZW07XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxufVxuI2hvbWUtdGFiIHAsICNob21lLXRhYiBzcGFuIHtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjZzIGVhc2UgZm9yd2FyZHM7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG59XG4jbWVudS10YWIgaW1ne1xuICAgIGhlaWdodDoyMDBweDtcbiAgICB3aWR0aDoyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuI21lbnUtdGFie1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOjFlbTtcbn1cbi5tZW51LWl0ZW17XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlIGZvcndhcmRzO1xuICAgIG9wYWNpdHk6MDtcbiAgICB6LWluZGV4OjM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRpb24tb3JkZXIpICogMC4xNXMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNhYm91dC10YWJ7XG4gICAgKntcbiAgICAgICAgbWFyZ2luLXRvcDouOGVtO1xuICAgIH1cbn1cbiNhYm91dC10YWIgaDIsXG4jYWJvdXQtdGFiIGFcbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIHotaW5kZXg6IDM7ICBcbiAgICBjb2xvcjojZmNhNWE1O1xufVxuI2Fib3V0LXRhYiBoMixcbiNhYm91dC10YWIgcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlIGZvcndhcmRzO1xufVxuXG4uaWNvbnMtZGl2e1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBpe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6MWVtO1xuICAgIH1cbiAgICBhe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICB9XG59XG4uaWNvbnMtZGl2IGE6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG4uaWNvbnMtZGl2IGE6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG4uaWNvbnMtZGl2IGE6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG4uaWNvbnMtZGl2IGE6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE1MDBweCkge1xuICAgICNob21lLXRhYiBpbWd7XG4gICAgICAgIHdpZHRoOjcwJTtcbiAgICAgICAgaGVpZ2h0OjM1cmVtO1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICAgcGFkZGluZzoxLjVyZW07XG4gICAgICAgIHdpZHRoOjY1JTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzgwcHgpIHtcbiAgICBib2R5e1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgI21lbnUtdGFie1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OjI1cmVtO1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjbWVudS10YWIsI2Fib3V0LXRhYiwjaG9tZS10YWJ7XG4gICAgICAgIG1hcmdpbi10b3A6M3JlbTtcbiAgICB9XG4gICAgI2hvbWUtdGFiIGltZ3tcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OjM1cmVtO1xuICAgIH1cbiAgICBoZWFkZXIgPiBuYXYgPiBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOi4xcmVtO1xuICAgICAgICBtYXJnaW46LjdyZW0gLjdyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgIH1cbiAgICBoZWFkZXIgPiBuYXYge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUwYTBhO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjUwcHgpIHtcbiAgICNob21lLXRhYiBpbWd7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDozMnJlbTtcbiAgICB9XG4gICAgI21lbnUtdGFie1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OjEycmVtO1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBib2R5e1xuICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5REFBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCx5REFBd0M7SUFDeEMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7QUFDQTs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYO1FBQ0ksZUFBZTtRQUNmLFNBQVM7SUFDYjtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkI7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFNBQVM7SUFDVCxTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLHFEQUFxRDtJQUNyRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7OztJQUdJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBOztJQUVJLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekI7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1Ysb0NBQW9DO0lBQ3hDO0FBQ0o7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsU0FBUztJQUNiO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCO1lBQ0ksWUFBWTtZQUNaLFVBQVU7UUFDZDtJQUNKO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXO1FBQ1gsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCO0FBQ0o7QUFDQTtHQUNHO1FBQ0ssVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQjtZQUNJLFlBQVk7WUFDWixVQUFVO1FBQ2Q7SUFDSjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWdzL2JnLmpwZWcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbn1cXG5ib2R5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IFxcbiAgICB6LWluZGV4OiAtMTsgXFxufVxcbi5jb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7IFxcbiAgICB3aWR0aDogNjAlO1xcbiAgICBwYWRkaW5nOiAyLjVlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZ3Mva2ZjLmpwZWcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBsaW5lLWhlaWdodDogMmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcXG4gICAgei1pbmRleDogMTsgXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxufVxcbi5jb250ZW50OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IFxcbiAgICB6LWluZGV4OiAyOyBcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxcbn1cXG4uY29udGVudCBwLFxcbi5jb250ZW50IHNwYW4sXFxuLmNvbnRlbnQgaW1nLFxcbi5jb250ZW50IC5kZXNjIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgei1pbmRleDogMzsgIFxcbiAgICBjb2xvcjogd2hpdGU7IFxcbn1cXG5oZWFkZXIgPiBuYXYgPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOi41ZW07XFxuICAgIG1hcmdpbjouNWVtIDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGZvbnQtc2l6ZToxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgY29sb3I6cmVkO1xcbiAgICB9XFxufVxcbiNob21lLXRhYntcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgKntcXG4gICAgICAgIG1hcmdpbi10b3A6MWVtO1xcbiAgICB9IFxcbiAgICBpbWd7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgICAgICBoZWlnaHQ6MzVlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG59XFxuI2hvbWUtdGFiIHAsICNob21lLXRhYiBzcGFuIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC42cyBlYXNlIGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxufVxcbiNtZW51LXRhYiBpbWd7XFxuICAgIGhlaWdodDoyMDBweDtcXG4gICAgd2lkdGg6MjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbiNtZW51LXRhYntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDoxZW07XFxufVxcbi5tZW51LWl0ZW17XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZSBmb3J3YXJkcztcXG4gICAgb3BhY2l0eTowO1xcbiAgICB6LWluZGV4OjM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGlvbi1vcmRlcikgKiAwLjE1cyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2Fib3V0LXRhYntcXG4gICAgKntcXG4gICAgICAgIG1hcmdpbi10b3A6LjhlbTtcXG4gICAgfVxcbn1cXG4jYWJvdXQtdGFiIGgyLFxcbiNhYm91dC10YWIgYVxcbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgei1pbmRleDogMzsgIFxcbiAgICBjb2xvcjojZmNhNWE1O1xcbn1cXG4jYWJvdXQtdGFiIGgyLFxcbiNhYm91dC10YWIgcCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlIGZvcndhcmRzO1xcbn1cXG5cXG4uaWNvbnMtZGl2e1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgaXtcXG4gICAgICAgIG1hcmdpbi1yaWdodDoxZW07XFxuICAgIH1cXG4gICAgYXtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UgZm9yd2FyZHM7XFxuICAgIH1cXG59XFxuLmljb25zLWRpdiBhOm50aC1jaGlsZCgxKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmljb25zLWRpdiBhOm50aC1jaGlsZCgyKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcXG59XFxuLmljb25zLWRpdiBhOm50aC1jaGlsZCgzKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcXG59XFxuLmljb25zLWRpdiBhOm50aC1jaGlsZCg0KSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE1MDBweCkge1xcbiAgICAjaG9tZS10YWIgaW1ne1xcbiAgICAgICAgd2lkdGg6NzAlO1xcbiAgICAgICAgaGVpZ2h0OjM1cmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50e1xcbiAgICAgICAgcGFkZGluZzoxLjVyZW07XFxuICAgICAgICB3aWR0aDo2NSU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3ODBweCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG4gICAgI21lbnUtdGFie1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgaGVpZ2h0OjI1cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgI21lbnUtdGFiLCNhYm91dC10YWIsI2hvbWUtdGFie1xcbiAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xcbiAgICB9XFxuICAgICNob21lLXRhYiBpbWd7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjM1cmVtO1xcbiAgICB9XFxuICAgIGhlYWRlciA+IG5hdiA+IGJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOi4xcmVtO1xcbiAgICAgICAgbWFyZ2luOi43cmVtIC43cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjpub25lO1xcbiAgICB9XFxuICAgIGhlYWRlciA+IG5hdiB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTBhMGE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY1MHB4KSB7XFxuICAgI2hvbWUtdGFiIGltZ3tcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBoZWlnaHQ6MzJyZW07XFxuICAgIH1cXG4gICAgI21lbnUtdGFie1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgaGVpZ2h0OjEycmVtO1xcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgYm9keXtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgY29udGVudERpdiB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBYm91dFRhYigpIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiBcbiAgICBjb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0VGFiLmlkID0gJ2Fib3V0LXRhYic7XG4gXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcbiAgICBhYm91dFRhYi5hcHBlbmRDaGlsZChwMSk7XG4gXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIuaW5uZXJIVE1MID0gYFdlIGFyZSBLRkMsIGhvbWUgb2YgdGhlIHdvcmxkLWZhbW91cyBmcmllZCBjaGlja2VuLiBXaXRoIG92ZXIgMzAsMDAwIGxvY2F0aW9ucyBpbiAxNTAgY291bnRyaWVzLCB3ZSdyZSB0aGUgc2Vjb25kLWxhcmdlc3QgZmFzdCBmb29kIGNoYWluIG9uIHRoZSBwbGFuZXQuXG4gICAgICAgICAgICAgICAgICAgIE91ciBzdG9yeSBiZWdhbiBpbiB0aGUgMTkzMHMgd2l0aCBDb2xvbmVsIEhhcmxhbmQgU2FuZGVycy4gSGlzIHNlY3JldCByZWNpcGUgd2FzIHNvIGdvb2QsIGl0IHRvb2sgb3ZlciB0aGUgd29ybGQuIFRoZSBDb2xvbmVsJ3MgZmFjZSBpcyBzdGlsbCBzbWlsaW5nIGRvd24gb24gdXMgZnJvbSBldmVyeSBidWNrZXQuXG4gICAgICAgICAgICAgICAgICAgIE91ciBzbG9nYW5zIHNheSBpdCBhbGw6IFwiSXQncyBGaW5nZXIgTGlja2luJyBHb29kIVwiIGFuZCBcIk5vYm9keSBkb2VzIGNoaWNrZW4gbGlrZSBLRkNcIi5cbiAgICAgICAgICAgICAgICAgICAgQ29tZSBmb3IgdGhlIGNoaWNrZW4sIHN0YXkgZm9yIHRoZSBzbWlsZXMuIEFuZCByZW1lbWJlciwgaXQncyBhbHdheXMgZmluZ2VyLWxpY2tpbicgZ29vZCFgO1xuICAgIGFib3V0VGFiLmFwcGVuZENoaWxkKHAyKTtcbiBcbiAgICBjb25zdCBwMz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwMy50ZXh0Q29udGVudCA9ICdPdXIgTWlzc2lvbic7XG4gICAgYWJvdXRUYWIuYXBwZW5kQ2hpbGQocDMpXG4gXG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDQuaW5uZXJIVE1MID0gYFRvIGRlbGl2ZXIgam95IG9uZSBzZXJ2aW5nIGF0IGEgdGltZSwgd2l0aCBtb3V0aC13YXRlcmluZyBtZWFscyB0aGF0IG1ha2UgZXZlcnkgbW9tZW50IHNwZWNpYWwuYFxuICAgIGFib3V0VGFiLmFwcGVuZENoaWxkKHA0KTtcbiBcbiBcbiAgICBjb25zdCBwNT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwNS50ZXh0Q29udGVudCA9ICdKb2luIHRoZSBLRkMgRmFtaWx5JztcbiAgICBhYm91dFRhYi5hcHBlbmRDaGlsZChwNSlcbiBcbiAgICBjb25zdCBwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwNi5pbm5lckhUTUwgPSBgRGl2ZSBpbnRvIG91ciB3b3JsZCBvZiBmaW5nZXItbGlja2luJyBnb29kbmVzcy4gV2hldGhlciB5b3UncmUgZGluaW5nIGluLCB0YWtpbmcgb3V0LCBvciBvcmRlcmluZyBvbmxpbmUsIHdl4oCZcmUgaGVyZSB0byBtYWtlIHlvdXIgZGF5IGRlbGljaW91cy5gO1xuICAgIGFib3V0VGFiLmFwcGVuZENoaWxkKHA2KTtcbiBcbiAgICBjb25zdCBpY29uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25zRGl2LmNsYXNzTGlzdC5hZGQoJ2ljb25zLWRpdicpO1xuIFxuICAgICAvLyBEZWZpbmUgdGhlIHNvY2lhbCBtZWRpYSBpY29ucyBcbiAgICAgY29uc3Qgc29jaWFsTWVkaWEgPSBbXG4gICAgICAgICB7IGNsYXNzOiAnZmFiIGZhLXR3aXR0ZXInLCB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL0tGQ2luS2VueWEnIH0sXG4gICAgICAgICB7IGNsYXNzOiAnZmFiIGZhLWluc3RhZ3JhbScsIHVybDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20va2Zja2VueWEvJyB9LFxuICAgICAgICAgeyBjbGFzczogJ2ZhYiBmYS15b3V0dWJlJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ2VJdnJYNUJVWjlkMUI1cm14ejV3X1EnIH0sXG4gICAgICAgICB7IGNsYXNzOiAnZmFiIGZhLWZhY2Vib29rJywgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9rZmNrZW55YSd9XG4gICAgIF07XG4gICAgIHNvY2lhbE1lZGlhLmZvckVhY2gobWVkaWEgPT57XG4gICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICBhbmNob3IuaHJlZiA9IG1lZGlhLnVybDtcbiAgICAgICAgIGFuY2hvci50YXJnZXQgPSAnX2JsYW5rJztcbiBcbiAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICBpY29uLmNsYXNzTmFtZSA9IG1lZGlhLmNsYXNzO1xuIFxuICAgICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgaWNvbnNEaXYuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgICAgfSlcbiAgICBhYm91dFRhYi5hcHBlbmRDaGlsZChpY29uc0Rpdik7XG4gXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dFRhYik7XG4gfVxuICIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBCZ0ltZyBmcm9tICcuL2ltZ3MvYmcuanBlZyc7XG5pbXBvcnQgY292ZXJJbWcgZnJvbSAnLi9pbWdzL2tmYy5qcGVnJztcbmltcG9ydCBhZCBmcm9tICcuL2ltZ3MvYWQuanBlZyc7XG5cbmltcG9ydCBsb2FkQWJvdXRUYWIgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgbG9hZE1lbnVUYWIgZnJvbSAnLi9tZW51LmpzJztcblxuY29uc3QgaG9tZVRhYkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XG5jb25zdCBtZW51VGFiQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01lbnUnKTtcbmNvbnN0IGFib3V0VGFiQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fib3V0Jyk7XG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10YWInKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS10YWInKTtcbmNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LXRhYicpXG5cbmV4cG9ydCBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYnV0dG9uc1xuaG9tZVRhYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lVGFiKTtcbm1lbnVUYWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudVRhYik7XG5hYm91dFRhYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBYm91dFRhYik7XG5cbi8vIENsZWFyIGNvbnRlbnQgZGl2XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xufVxuZnVuY3Rpb24gbG9hZEhvbWVUYWIoKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUYWIuaWQgPSAnaG9tZS10YWInO1xuIFxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gS0ZDLCB3aGVyZSBldmVyeSBtZWFsIGlzIGEgY2VsZWJyYXRpb24gb2YgdGFzdGUuIERpdmUgaW50byBvdXIgd29ybGQgb2YgY3Jpc3B5LFxuICAgIGp1aWN5IGNoaWNrZW4gYW5kIGRlbGlnaHRmdWwgc2lkZXMuIE9yZGVyIG5vdyBhbmQgZW5qb3kgdGhlIGxlZ2VuZGFyeSBmbGF2b3JzIGRlbGl2ZXJlZCByaWdodCB0byB5b3VyIGRvb3JzdGVwIWA7XG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChwMSk7XG4gXG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhbjEudGV4dENvbnRlbnQgPSBcIkRlbGl2ZXJ5IGFuZCBQaWNrIFVwIE5vdyBBdmFpbGFibGVcIjtcbiAgICBob21lVGFiLmFwcGVuZENoaWxkKHNwYW4xKTtcbiBcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi50ZXh0Q29udGVudCA9IGBJbmR1bGdlIGluIHRoZSBPcmlnaW5hbCBSZWNpcGVcbiAgICBFeHBlcmllbmNlIHRoZSBhdXRoZW50aWMgdGFzdGUgb2YgS0ZDJ3MgT3JpZ2luYWwgUmVjaXBlIENoaWNrZW4uIEhhbmQtYnJlYWRlZCBhbmQgc2Vhc29uZWRcbiAgICB0byBwZXJmZWN0aW9uIHdpdGggc2VjcmV0IGluZ3JpZGllbnRzIGFuZCBzcGljZXMuIFRhc3RlIHRoZSB0cmFkaXRpb24gdGhhdCBoYXMgYmVlbiBsb3ZlZCBmb3IgZ2VuZXJhdGlvbnMuYDsgXG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChwMik7XG4gXG4gICAgLy9hZGQgbWVudSBpbWFnZVxuICAgIGNvbnN0IGFkSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYWRJbWcuc3JjID0gYWQ7XG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChhZEltZylcbiBcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuIH1cblxuZnVuY3Rpb24gbG9hZFN0eWxlcygpe1xuICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgIHJldHVybiBjb250ZW50RGl2O1xuXG59XG5sb2FkSG9tZVRhYigpO1xubG9hZFN0eWxlcygpO1xuXG5cbiIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLic7XG5pbXBvcnQgeyBjb250ZW50RGl2IH0gZnJvbSAnLic7XG5cbmltcG9ydCBidXJnZXJJbWcgZnJvbSAnLi9pbWdzL2J1cmdlci5qcGcnO1xuaW1wb3J0IGZyaWVzSW1nIGZyb20gJy4vaW1ncy9mcmllcy5qcGVnJztcbmltcG9ydCBidWNrZXRJbWcgZnJvbSAnLi9pbWdzL2J1Y2tldC5qcGVnJztcbmltcG9ydCBjb21ib0ltZyBmcm9tICcuL2ltZ3MvY29tYm8uanBlZyc7XG5pbXBvcnQgZnJpZXNDaGlja2VuSW1nIGZyb20gJy4vaW1ncy9mcmllc2NoaWNrZW4uanBlZyc7XG5pbXBvcnQgc29kYUNoaWNrZW5JbWcgZnJvbSAnLi9pbWdzL3NvZGFjaGlja2VuLmpwZWcnO1xuXG4vLyBEZWZpbmUgbWVudSBkYXRhXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ0J1cmdlcicsXG4gICAgICAgIHByaWNlOiA1MCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWxpY2lvdXMgYnVyZ2VyIHdpdGggZnJlc2ggaW5ncmVkaWVudHMuJyxcbiAgICAgICAgaW1hZ2U6IGJ1cmdlckltZ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0ZyaWVzJyxcbiAgICAgICAgcHJpY2U6IDcwLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NyaXNweSBmcmllcyBzZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBkaXBwaW5nIHNhdWNlLicsXG4gICAgICAgIGltYWdlOiBmcmllc0ltZ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0J1Y2tldCcsXG4gICAgICAgIHByaWNlOiAyNTAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQnVja2V0IGZpbGxlZCB3aXRoIGNyaXNweSBmcmllcyAmIGNoaWNrZW4gcGllY2VzLicsXG4gICAgICAgIGltYWdlOiBidWNrZXRJbWdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb21ibyBNZWFsJyxcbiAgICAgICAgcHJpY2U6IDM1MCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQZXJmZWN0IGNvbWJvIG9mIGNoaWNrZW4sIGZyaWVzIGFuZCBkcmluay4nLFxuICAgICAgICBpbWFnZTogY29tYm9JbWdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdGcmllcyBDaGlja2VuJyxcbiAgICAgICAgcHJpY2U6IDE1MCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUZW5kZXIgY2hpY2tlbiBzdHJpcHMgc2VydmVkIHdpdGggZnJpZXMuJyxcbiAgICAgICAgaW1hZ2U6IGZyaWVzQ2hpY2tlbkltZ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1NvZGEgQ2hpY2tlbicsXG4gICAgICAgIHByaWNlOiAxMjAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ3Jpc3B5IGNoaWNrZW4gYW5kIGZyaWVzIHNlcnZlZCB3aXRoIGEgcmVmcmVzaGluZyBzb2RhLicsXG4gICAgICAgIGltYWdlOiBzb2RhQ2hpY2tlbkltZ1xuICAgIH0sXG5dO1xuXG4vL0NyZWF0ZSBhbmQgcG9wdWxhdGUgdGhlIE1lbnUgdGFiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudVRhYigpIHtcbiAgIGNsZWFyQ29udGVudCgpO1xuXG4gICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBtZW51VGFiLmlkID0gJ21lbnUtdGFiJztcbiAgIFxuICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICBtZW51SXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hbmltYXRpb24tb3JkZXInLCBpbmRleCk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBpdGVtLmltYWdlO1xuICAgICAgICBpbWcuYWx0ID0gaXRlbS50aXRsZTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7aXRlbS50aXRsZX0gfCAkJHtpdGVtLnByaWNlfWA7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2l0ZW0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBtZW51VGFiLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudVRhYilcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==