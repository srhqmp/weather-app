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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #5552ab;
  --secondary-color: #ecebff;
  --accent-color: #f48bce;
  --text-color: #424242;
  --background-color: #fff9f2;
}

body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  color: var(--text-color);
  height: 100vh;
  width: 100vw;
  background-size: cover;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  transition: background-color 0.5s ease-in-out;
}

h1,
h2,
h3,
h4,
h5,
h6,
a {
  color: var((--accent-color));
  color: var(--primary-color);
  font-family: 'Raleway', sans-serif;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1020px;
  margin: 0 auto;
  height: 100%;
  padding: 0 12px;
  padding-top: 150px;
}

.logo {
  display: flex;
  gap: 6px;
  text-shadow:
    1px 1px 2px rgba(250, 250, 250, 0.6),
    -1px -1px 2px rgba(250, 250, 250, 0.6),
    1px -1px 2px rgba(250, 250, 250, 0.6),
    -1px 1px 2px rgba(250, 250, 250, 0.2);
}

.header {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.form {
  margin: 24px 0;
}

.form label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 6px;
  border-radius: 8px;
  border: 1px solid var(--primary-color);
  background: white;
  gap: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.form input {
  font-size: 18px;
  color: var(--primary-color);
  border: none;
  background: none;
  outline: none;
}

.form button {
  border-radius: 8px;
  background: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  border: 1px solid var(--secondary-color);
}

.form form {
  display: flex;
  gap: 6px;
}

.form img {
  display: block;
}

.weather-card {
  background-color: var(--background-color);
  border-radius: 12px;
  padding: 64px 36px 8px 36px;
  box-sizing: border-box;
  min-height: 250px;
  margin: 32px 0;
  box-shadow:
    rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.weather-card .current-location {
  font-size: 16px;
  margin-bottom: 24px;
}

.weather-card .current-location span {
  font-weight: 600;
  color: var(--primary-color);
}

.info-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
}

.weather-info {
  display: flex;
  gap: 6px;
  align-items: center;
}

.weather-info-data {
  margin-left: 32px;
}

.current-temperature {
  font-size: 94px;
  font-weight: 600;
  position: relative;
}

.current-temperature span {
  font-size: 28px;
  position: absolute;
  top: 0;
}

.weather-card .info-div {
  display: flex;
  gap: 42px;
}

.today-info {
  text-align: right;
}

.weather-h {
  font-size: 20px;
  font-weight: 600;
}

.weather-forecast {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  text-align: center;
  margin: 42px 0;
  gap: 12px;
}

.day-forecast {
  background-image: linear-gradient(to top, #fbc8d4 0%, #9795f0 100%);
  border-radius: 12px;
  padding: 12px 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.day-forecast h3 {
  margin: 0;
  padding: 0;
  margin-bottom: 6px;
  color: var(--background-color);
}

.day-forecast img {
  margin: 12px 0;
}

footer {
  text-align: center;
  font-size: 14px;
  text-shadow: 1px 1px rgba(236, 185, 238, 0.6);
}

.loading-spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left: 8px solid #3498db;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.weather-card h1 {
  text-align: center;
  font-size: 32px;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,uBAAuB;EACvB,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,mEAAmE;EACnE,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,yCAAyC;EACzC,gBAAgB;EAChB,6CAA6C;AAC/C;;AAEA;;;;;;;EAOE,4BAA4B;EAC5B,2BAA2B;EAC3B,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR;;;;yCAIuC;AACzC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,iBAAiB;EACjB,QAAQ;EACR,2CAA2C;AAC7C;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,6BAA6B;EAC7B,YAAY;EACZ,2CAA2C;EAC3C,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;EACnB,2BAA2B;EAC3B,sBAAsB;EACtB,iBAAiB;EACjB,cAAc;EACd;;;0CAGwC;AAC1C;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,mEAAmE;EACnE,mBAAmB;EACnB,iBAAiB;EACjB,2CAA2C;AAC7C;AACA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,6CAA6C;AAC/C;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');\n\n:root {\n  --primary-color: #5552ab;\n  --secondary-color: #ecebff;\n  --accent-color: #f48bce;\n  --text-color: #424242;\n  --background-color: #fff9f2;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);\n  color: var(--text-color);\n  height: 100vh;\n  width: 100vw;\n  background-size: cover;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: hidden;\n  transition: background-color 0.5s ease-in-out;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na {\n  color: var((--accent-color));\n  color: var(--primary-color);\n  font-family: 'Raleway', sans-serif;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1020px;\n  margin: 0 auto;\n  height: 100%;\n  padding: 0 12px;\n  padding-top: 150px;\n}\n\n.logo {\n  display: flex;\n  gap: 6px;\n  text-shadow:\n    1px 1px 2px rgba(250, 250, 250, 0.6),\n    -1px -1px 2px rgba(250, 250, 250, 0.6),\n    1px -1px 2px rgba(250, 250, 250, 0.6),\n    -1px 1px 2px rgba(250, 250, 250, 0.2);\n}\n\n.header {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.form {\n  margin: 24px 0;\n}\n\n.form label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 6px;\n  border-radius: 8px;\n  border: 1px solid var(--primary-color);\n  background: white;\n  gap: 6px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n\n.form input {\n  font-size: 18px;\n  color: var(--primary-color);\n  border: none;\n  background: none;\n  outline: none;\n}\n\n.form button {\n  border-radius: 8px;\n  background: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  cursor: pointer;\n  border: 1px solid var(--secondary-color);\n}\n\n.form form {\n  display: flex;\n  gap: 6px;\n}\n\n.form img {\n  display: block;\n}\n\n.weather-card {\n  background-color: var(--background-color);\n  border-radius: 12px;\n  padding: 64px 36px 8px 36px;\n  box-sizing: border-box;\n  min-height: 250px;\n  margin: 32px 0;\n  box-shadow:\n    rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,\n    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n}\n\n.weather-card .current-location {\n  font-size: 16px;\n  margin-bottom: 24px;\n}\n\n.weather-card .current-location span {\n  font-weight: 600;\n  color: var(--primary-color);\n}\n\n.info-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 22px;\n}\n\n.weather-info {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.weather-info-data {\n  margin-left: 32px;\n}\n\n.current-temperature {\n  font-size: 94px;\n  font-weight: 600;\n  position: relative;\n}\n\n.current-temperature span {\n  font-size: 28px;\n  position: absolute;\n  top: 0;\n}\n\n.weather-card .info-div {\n  display: flex;\n  gap: 42px;\n}\n\n.today-info {\n  text-align: right;\n}\n\n.weather-h {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.weather-forecast {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  text-align: center;\n  margin: 42px 0;\n  gap: 12px;\n}\n\n.day-forecast {\n  background-image: linear-gradient(to top, #fbc8d4 0%, #9795f0 100%);\n  border-radius: 12px;\n  padding: 12px 6px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.day-forecast h3 {\n  margin: 0;\n  padding: 0;\n  margin-bottom: 6px;\n  color: var(--background-color);\n}\n\n.day-forecast img {\n  margin: 12px 0;\n}\n\nfooter {\n  text-align: center;\n  font-size: 14px;\n  text-shadow: 1px 1px rgba(236, 185, 238, 0.6);\n}\n\n.loading-spinner {\n  border: 8px solid rgba(0, 0, 0, 0.1);\n  border-left: 8px solid #3498db;\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  animation: spin 1s linear infinite;\n  margin: 0 auto;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.weather-card h1 {\n  text-align: center;\n  font-size: 32px;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateElement: () => (/* binding */ generateElement),
/* harmony export */   getDayOfWeek: () => (/* binding */ getDayOfWeek),
/* harmony export */   setBackgroundColor: () => (/* binding */ setBackgroundColor),
/* harmony export */   weatherGradients: () => (/* binding */ weatherGradients)
/* harmony export */ });
const generateElement = ({
  type,
  textContent,
  className,
  id,
  src,
  alt,
  innerHTML,
}) => {
  const attributes = { type };
  if (textContent) {
    attributes.textContent = textContent;
  }
  if (className) {
    attributes.className = className;
  }
  if (id) {
    attributes.id = id;
  }
  if (type === 'img') {
    attributes.src = src;
    attributes.alt = alt || '';
  }
  if (innerHTML) {
    attributes.innerHTML = innerHTML;
  }

  const element = Object.assign(document.createElement(type), attributes);
  return element;
};

const getDayOfWeek = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', { weekday: 'long' });
};

const weatherGradients = {
  snow: 'linear-gradient(to bottom, #E0F7FA, #B3E5FC)', // Light blue to white
  'snow-showers-day': 'linear-gradient(to bottom, #B3E5FC, #81D4FA)', // Light blue to lighter blue
  'snow-showers-night': 'linear-gradient(to bottom, #81D4FA, #4FC3F7)', // Darker blue
  'thunder-rain': 'linear-gradient(to bottom, #64B5F6, #90A4AE)', // Dark blue to gray
  'thunder-showers-day': 'linear-gradient(to bottom, #42A5F5, #B0BEC5)', // Bright blue to gray
  'thunder-showers-night': 'linear-gradient(to bottom, #2196F3, #90A4AE)', // Dark blue to darker gray
  rain: 'linear-gradient(to bottom, #B0BEC5, #78909C)', // Light gray to dark gray
  'showers-day': 'linear-gradient(to bottom, #B0BEC5, #81D4FA)', // Light gray to blue
  'showers-night': 'linear-gradient(to bottom, #78909C, #4A148C)', // Dark gray to dark blue
  fog: 'linear-gradient(to bottom, #CFD8DC, #E0E0E0)', // Light gray to white
  wind: 'linear-gradient(to bottom, #B3E5FC, #E0F7FA)', // Light blue to light gray
  cloudy: 'linear-gradient(to bottom, #CFD8DC, #B0BEC5)', // Light gray to darker gray
  'partly-cloudy-day': 'linear-gradient(to bottom, #FFEB3B, #80DEEA)', // Light yellow to light blue
  'partly-cloudy-night': 'linear-gradient(to bottom, #AB47BC, #6A1B9A)', // Dark purple to dark blue
  'clear-day': 'linear-gradient(to bottom, #FFEB3B, #FBC02D)', // Bright yellow to orange
  'clear-night': 'linear-gradient(to bottom, #0D47A1, #000000)', // Dark blue to black
};

const setBackgroundColor = (condition) => {
  const gradient =
    weatherGradients[condition] ||
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)';

  document.body.style.backgroundImage = gradient;
};


/***/ }),

/***/ "./src/services/weatherData.js":
/*!*************************************!*\
  !*** ./src/services/weatherData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiKey = 'VXLJLCQT92VC5HT8PEU6FCJ5D';
const baseUrl =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

const getWeather = async (location) => {
  const response = await fetch(
    `${baseUrl}/${location}?unitGroup=metric&key=${apiKey}&contentType=json`,
    { mode: 'cors' }
  );
  return response.json();
};

const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getWeather, getFormattedDate });


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _services_weatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/weatherData */ "./src/services/weatherData.js");




const showLoading = () => {
  document.querySelector('.weather-card').style.display = 'none';
  document.getElementsByTagName('footer')[0].style.display = 'none';
  document.getElementById('loadingContainer').style.display = 'flex';
};
const hideLoading = () => {
  document.querySelector('.weather-card').style.display = 'block';
  document.getElementsByTagName('footer')[0].style.display = 'block';
  document.getElementById('loadingContainer').style.display = 'none';
};

const getData = async (location) => {
  try {
    showLoading();
    const res = await _services_weatherData__WEBPACK_IMPORTED_MODULE_2__["default"].getWeather(location);
    return res;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  } finally {
    hideLoading();
  }
};

// INFORMATION
const displayInformation = (data) => {
  const currentDate = new Date().toLocaleString('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const weatherCard = document.querySelector('.weather-card');
  weatherCard.innerHTML = '';
  if (data === null || !data) {
    weatherCard.innerHTML = `<h1>404: NOT FOUND</h1>`;
  } else {
    const { currentConditions, days } = data;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.setBackgroundColor)(currentConditions.icon);
    const locationDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      className: 'current-location',
      textContent: data.resolvedAddress,
      innerHTML: `<div>Results from <span>${data.resolvedAddress}</span></div>`,
    });

    const iconDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      className: 'current-icon',
      innerHTML: `<img width="150" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${currentConditions.icon}.svg" alt="${currentConditions.icon}" />`,
    });
    const temperatureDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      className: 'current-temperature',
      innerHTML: `<div>${currentConditions.temp} <span>°C</span></div>`,
    });
    const precipitationDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      innerHTML: `<div class="info">Precipitation: <span>${currentConditions.precip || 0} mm</span></div>`,
    });
    const humidityDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      innerHTML: `<div class="info">Humidity: <span>${currentConditions.humidity}%</span></div>`,
    });
    const windDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      innerHTML: `<div class="info">Windspeed: <span>${parseFloat(currentConditions.windspeed * 3.6).toFixed(2)} km/hr</span></div>`,
    });

    const infoDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      className: 'info-div',
    });
    const weatherInfo = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      className: 'weather-info',
    });

    const todayInfo = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      className: 'today-info',
      innerHTML: `<div class="weather-h">Weather</div><div>${currentDate}</div><div>${currentConditions.conditions}</div>`,
    });

    weatherInfo.appendChild(iconDiv);
    weatherInfo.appendChild(temperatureDiv);
    const weatherInfoData = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      className: 'weather-info-data',
    });
    weatherInfoData.appendChild(precipitationDiv);
    weatherInfoData.appendChild(humidityDiv);
    weatherInfoData.appendChild(windDiv);
    weatherInfo.appendChild(weatherInfoData);

    infoDiv.appendChild(weatherInfo);
    infoDiv.appendChild(todayInfo);

    weatherCard.appendChild(locationDiv);
    weatherCard.appendChild(infoDiv);

    const forecast = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateElement)({
      type: 'div',
      className: 'weather-forecast',
    });
    const today = new Date();

    const filteredDays = days
      .filter((day) => {
        const dayDate = new Date(day.datetime);
        return dayDate >= today;
      })
      .slice(0, 7);

    filteredDays.forEach((day) => {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day-forecast');

      const dayOfWeek = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDayOfWeek)(day.datetime);
      dayDiv.innerHTML = `
                <h3>${dayOfWeek}</h3>
                <div>${day.datetime}</div>
                <img width="50" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${day.icon}.svg" alt="${day.icon}" />
                <p>${day.temp}°C</p>
            `;

      forecast.appendChild(dayDiv);
    });

    weatherCard.appendChild(forecast);
  }
};

// FORM
const form = document.querySelector('.form');
const handleSubmit = async (event) => {
  event.preventDefault();
  const input = form.querySelector('.form-location');
  const res = await getData(input.value);
  displayInformation(res);
};
form.addEventListener('submit', handleSubmit);

getData('manila').then((res) => {
  displayInformation(res);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDBJQUEwSSx1REFBdUQseUJBQXlCO0FBQzFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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Q0EsdURBQXVELDBEQUEwRDtBQUNqSCxLQUFLOztBQUVMLG9CQUFvQix5REFBZTtBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMLHdCQUF3Qix5REFBZTtBQUN2QztBQUNBO0FBQ0EsS0FBSzs7QUFFTCxzQkFBc0IseURBQWU7QUFDckM7QUFDQTtBQUNBLDZEQUE2RCxZQUFZLGFBQWEsNkJBQTZCO0FBQ25ILEtBQUs7O0FBRUw7QUFDQTtBQUNBLDRCQUE0Qix5REFBZTtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIseURBQWU7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHNEQUFZO0FBQ3BDO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEMsdUJBQXVCLGFBQWE7QUFDcEMsb0lBQW9JLFNBQVMsYUFBYSxTQUFTO0FBQ25LLHFCQUFxQixTQUFTO0FBQzlCOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NlcnZpY2VzL3dlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcjppdGFsLG9wc3osd2dodEAwLDUuLjEyMDAsMzAwLi45MDA7MSw1Li4xMjAwLDMwMC4uOTAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzU1NTJhYjtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNlY2ViZmY7XG4gIC0tYWNjZW50LWNvbG9yOiAjZjQ4YmNlO1xuICAtLXRleHQtY29sb3I6ICM0MjQyNDI7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjlmMjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZiYzJlYiAwJSwgI2E2YzFlZSAxMDAlKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmEge1xuICBjb2xvcjogdmFyKCgtLWFjY2VudC1jb2xvcikpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG4gIHRleHQtc2hhZG93OlxuICAgIDFweCAxcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KSxcbiAgICAtMXB4IC0xcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KSxcbiAgICAxcHggLTFweCAycHggcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjYpLFxuICAgIC0xcHggMXB4IDJweCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMik7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW46IDI0cHggMDtcbn1cblxuLmZvcm0gbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGdhcDogNnB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xufVxuXG4uZm9ybSBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmZvcm0gZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xufVxuXG4uZm9ybSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndlYXRoZXItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA2NHB4IDM2cHggOHB4IDM2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW46IDMycHggMDtcbiAgYm94LXNoYWRvdzpcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LFxuICAgIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzMHB4IDYwcHggLTMwcHg7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmN1cnJlbnQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmN1cnJlbnQtbG9jYXRpb24gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmluZm8tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi53ZWF0aGVyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItaW5mby1kYXRhIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi5jdXJyZW50LXRlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiA5NHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdXJyZW50LXRlbXBlcmF0dXJlIHNwYW4ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4ud2VhdGhlci1jYXJkIC5pbmZvLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNDJweDtcbn1cblxuLnRvZGF5LWluZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLndlYXRoZXItaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLndlYXRoZXItZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQycHggMDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZGF5LWZvcmVjYXN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZiYzhkNCAwJSwgIzk3OTVmMCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XG59XG4uZGF5LWZvcmVjYXN0IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLmRheS1mb3JlY2FzdCBpbWcge1xuICBtYXJnaW46IDEycHggMDtcbn1cblxuZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMjM2LCAxODUsIDIzOCwgMC42KTtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIGJvcmRlcjogOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjMzQ5OGRiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4ud2VhdGhlci1jYXJkIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUVBQW1FO0VBQ25FLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLDZDQUE2QztBQUMvQzs7QUFFQTs7Ozs7OztFQU9FLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1I7Ozs7eUNBSXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0MsZUFBZTtFQUNmLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Q7OzswQ0FHd0M7QUFDMUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcjppdGFsLG9wc3osd2dodEAwLDUuLjEyMDAsMzAwLi45MDA7MSw1Li4xMjAwLDMwMC4uOTAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNTU1MmFiO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNlY2ViZmY7XFxuICAtLWFjY2VudC1jb2xvcjogI2Y0OGJjZTtcXG4gIC0tdGV4dC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjlmMjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZiYzJlYiAwJSwgI2E2YzFlZSAxMDAlKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5hIHtcXG4gIGNvbG9yOiB2YXIoKC0tYWNjZW50LWNvbG9yKSk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEwMjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxuICB0ZXh0LXNoYWRvdzpcXG4gICAgMXB4IDFweCAycHggcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjYpLFxcbiAgICAtMXB4IC0xcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KSxcXG4gICAgMXB4IC0xcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KSxcXG4gICAgLTFweCAxcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4yKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgbWFyZ2luOiAyNHB4IDA7XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGdhcDogNnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXG59XFxuXFxuLmZvcm0gaW5wdXQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mb3JtIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG4uZm9ybSBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNjRweCAzNnB4IDhweCAzNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgbWFyZ2luOiAzMnB4IDA7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LFxcbiAgICByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweDtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAuY3VycmVudC1sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC5jdXJyZW50LWxvY2F0aW9uIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmluZm8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWluZm8tZGF0YSB7XFxuICBtYXJnaW4tbGVmdDogMzJweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiA5NHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUgc3BhbiB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLmluZm8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQycHg7XFxufVxcblxcbi50b2RheS1pbmZvIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ud2VhdGhlci1oIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi53ZWF0aGVyLWZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDQycHggMDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLmRheS1mb3JlY2FzdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmJjOGQ0IDAlLCAjOTc5NWYwIDEwMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDEycHggNnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXG59XFxuLmRheS1mb3JlY2FzdCBoMyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uZGF5LWZvcmVjYXN0IGltZyB7XFxuICBtYXJnaW46IDEycHggMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMjM2LCAxODUsIDIzOCwgMC42KTtcXG59XFxuXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICBib3JkZXI6IDhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICMzNDk4ZGI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogNzVweDtcXG4gIGhlaWdodDogNzVweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLndlYXRoZXItY2FyZCBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5sb2FkaW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgZ2VuZXJhdGVFbGVtZW50ID0gKHtcbiAgdHlwZSxcbiAgdGV4dENvbnRlbnQsXG4gIGNsYXNzTmFtZSxcbiAgaWQsXG4gIHNyYyxcbiAgYWx0LFxuICBpbm5lckhUTUwsXG59KSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSB7IHR5cGUgfTtcbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgYXR0cmlidXRlcy50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhdHRyaWJ1dGVzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgfVxuICBpZiAoaWQpIHtcbiAgICBhdHRyaWJ1dGVzLmlkID0gaWQ7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdpbWcnKSB7XG4gICAgYXR0cmlidXRlcy5zcmMgPSBzcmM7XG4gICAgYXR0cmlidXRlcy5hbHQgPSBhbHQgfHwgJyc7XG4gIH1cbiAgaWYgKGlubmVySFRNTCkge1xuICAgIGF0dHJpYnV0ZXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB9XG5cbiAgY29uc3QgZWxlbWVudCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKSwgYXR0cmlidXRlcyk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERheU9mV2VlayA9IChkYXRlU3RyKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2VhdGhlckdyYWRpZW50cyA9IHtcbiAgc25vdzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNFMEY3RkEsICNCM0U1RkMpJywgLy8gTGlnaHQgYmx1ZSB0byB3aGl0ZVxuICAnc25vdy1zaG93ZXJzLWRheSc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQjNFNUZDLCAjODFENEZBKScsIC8vIExpZ2h0IGJsdWUgdG8gbGlnaHRlciBibHVlXG4gICdzbm93LXNob3dlcnMtbmlnaHQnOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzgxRDRGQSwgIzRGQzNGNyknLCAvLyBEYXJrZXIgYmx1ZVxuICAndGh1bmRlci1yYWluJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NEI1RjYsICM5MEE0QUUpJywgLy8gRGFyayBibHVlIHRvIGdyYXlcbiAgJ3RodW5kZXItc2hvd2Vycy1kYXknOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQyQTVGNSwgI0IwQkVDNSknLCAvLyBCcmlnaHQgYmx1ZSB0byBncmF5XG4gICd0aHVuZGVyLXNob3dlcnMtbmlnaHQnOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxOTZGMywgIzkwQTRBRSknLCAvLyBEYXJrIGJsdWUgdG8gZGFya2VyIGdyYXlcbiAgcmFpbjogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCMEJFQzUsICM3ODkwOUMpJywgLy8gTGlnaHQgZ3JheSB0byBkYXJrIGdyYXlcbiAgJ3Nob3dlcnMtZGF5JzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCMEJFQzUsICM4MUQ0RkEpJywgLy8gTGlnaHQgZ3JheSB0byBibHVlXG4gICdzaG93ZXJzLW5pZ2h0JzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3ODkwOUMsICM0QTE0OEMpJywgLy8gRGFyayBncmF5IHRvIGRhcmsgYmx1ZVxuICBmb2c6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQ0ZEOERDLCAjRTBFMEUwKScsIC8vIExpZ2h0IGdyYXkgdG8gd2hpdGVcbiAgd2luZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCM0U1RkMsICNFMEY3RkEpJywgLy8gTGlnaHQgYmx1ZSB0byBsaWdodCBncmF5XG4gIGNsb3VkeTogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNDRkQ4REMsICNCMEJFQzUpJywgLy8gTGlnaHQgZ3JheSB0byBkYXJrZXIgZ3JheVxuICAncGFydGx5LWNsb3VkeS1kYXknOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRUIzQiwgIzgwREVFQSknLCAvLyBMaWdodCB5ZWxsb3cgdG8gbGlnaHQgYmx1ZVxuICAncGFydGx5LWNsb3VkeS1uaWdodCc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQUI0N0JDLCAjNkExQjlBKScsIC8vIERhcmsgcHVycGxlIHRvIGRhcmsgYmx1ZVxuICAnY2xlYXItZGF5JzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkVCM0IsICNGQkMwMkQpJywgLy8gQnJpZ2h0IHllbGxvdyB0byBvcmFuZ2VcbiAgJ2NsZWFyLW5pZ2h0JzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwRDQ3QTEsICMwMDAwMDApJywgLy8gRGFyayBibHVlIHRvIGJsYWNrXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QmFja2dyb3VuZENvbG9yID0gKGNvbmRpdGlvbikgPT4ge1xuICBjb25zdCBncmFkaWVudCA9XG4gICAgd2VhdGhlckdyYWRpZW50c1tjb25kaXRpb25dIHx8XG4gICAgJ2xpbmVhci1ncmFkaWVudCh0byB0b3AsICNmYmMyZWIgMCUsICNhNmMxZWUgMTAwJSknO1xuXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ3JhZGllbnQ7XG59O1xuIiwiY29uc3QgYXBpS2V5ID0gJ1ZYTEpMQ1FUOTJWQzVIVDhQRVU2RkNKNUQnO1xuY29uc3QgYmFzZVVybCA9XG4gICdodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZSc7XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtiYXNlVXJsfS8ke2xvY2F0aW9ufT91bml0R3JvdXA9bWV0cmljJmtleT0ke2FwaUtleX0mY29udGVudFR5cGU9anNvbmAsXG4gICAgeyBtb2RlOiAnY29ycycgfVxuICApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgZ2V0Rm9ybWF0dGVkRGF0ZSA9IChkYXRlKSA9PiB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcblxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGdldFdlYXRoZXIsIGdldEZvcm1hdHRlZERhdGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGdlbmVyYXRlRWxlbWVudCwgZ2V0RGF5T2ZXZWVrLCBzZXRCYWNrZ3JvdW5kQ29sb3IgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHdlYXRoZXJTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvd2VhdGhlckRhdGEnO1xuXG5jb25zdCBzaG93TG9hZGluZyA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb290ZXInKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZ0NvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59O1xuY29uc3QgaGlkZUxvYWRpbmcgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZ0NvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgc2hvd0xvYWRpbmcoKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVyKGxvY2F0aW9uKTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZmluYWxseSB7XG4gICAgaGlkZUxvYWRpbmcoKTtcbiAgfVxufTtcblxuLy8gSU5GT1JNQVRJT05cbmNvbnN0IGRpc3BsYXlJbmZvcm1hdGlvbiA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICBob3VyMTI6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpO1xuICB3ZWF0aGVyQ2FyZC5pbm5lckhUTUwgPSAnJztcbiAgaWYgKGRhdGEgPT09IG51bGwgfHwgIWRhdGEpIHtcbiAgICB3ZWF0aGVyQ2FyZC5pbm5lckhUTUwgPSBgPGgxPjQwNDogTk9UIEZPVU5EPC9oMT5gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgY3VycmVudENvbmRpdGlvbnMsIGRheXMgfSA9IGRhdGE7XG4gICAgc2V0QmFja2dyb3VuZENvbG9yKGN1cnJlbnRDb25kaXRpb25zLmljb24pO1xuICAgIGNvbnN0IGxvY2F0aW9uRGl2ID0gZ2VuZXJhdGVFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgY2xhc3NOYW1lOiAnY3VycmVudC1sb2NhdGlvbicsXG4gICAgICB0ZXh0Q29udGVudDogZGF0YS5yZXNvbHZlZEFkZHJlc3MsXG4gICAgICBpbm5lckhUTUw6IGA8ZGl2PlJlc3VsdHMgZnJvbSA8c3Bhbj4ke2RhdGEucmVzb2x2ZWRBZGRyZXNzfTwvc3Bhbj48L2Rpdj5gLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaWNvbkRpdiA9IGdlbmVyYXRlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGNsYXNzTmFtZTogJ2N1cnJlbnQtaWNvbicsXG4gICAgICBpbm5lckhUTUw6IGA8aW1nIHdpZHRoPVwiMTUwXCIgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Zpc3VhbGNyb3NzaW5nL1dlYXRoZXJJY29ucy9tYWluL1NWRy8ybmQlMjBTZXQlMjAtJTIwQ29sb3IvJHtjdXJyZW50Q29uZGl0aW9ucy5pY29ufS5zdmdcIiBhbHQ9XCIke2N1cnJlbnRDb25kaXRpb25zLmljb259XCIgLz5gLFxuICAgIH0pO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlRGl2ID0gZ2VuZXJhdGVFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgY2xhc3NOYW1lOiAnY3VycmVudC10ZW1wZXJhdHVyZScsXG4gICAgICBpbm5lckhUTUw6IGA8ZGl2PiR7Y3VycmVudENvbmRpdGlvbnMudGVtcH0gPHNwYW4+wrBDPC9zcGFuPjwvZGl2PmAsXG4gICAgfSk7XG4gICAgY29uc3QgcHJlY2lwaXRhdGlvbkRpdiA9IGdlbmVyYXRlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGlubmVySFRNTDogYDxkaXYgY2xhc3M9XCJpbmZvXCI+UHJlY2lwaXRhdGlvbjogPHNwYW4+JHtjdXJyZW50Q29uZGl0aW9ucy5wcmVjaXAgfHwgMH0gbW08L3NwYW4+PC9kaXY+YCxcbiAgICB9KTtcbiAgICBjb25zdCBodW1pZGl0eURpdiA9IGdlbmVyYXRlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGlubmVySFRNTDogYDxkaXYgY2xhc3M9XCJpbmZvXCI+SHVtaWRpdHk6IDxzcGFuPiR7Y3VycmVudENvbmRpdGlvbnMuaHVtaWRpdHl9JTwvc3Bhbj48L2Rpdj5gLFxuICAgIH0pO1xuICAgIGNvbnN0IHdpbmREaXYgPSBnZW5lcmF0ZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2RpdicsXG4gICAgICBpbm5lckhUTUw6IGA8ZGl2IGNsYXNzPVwiaW5mb1wiPldpbmRzcGVlZDogPHNwYW4+JHtwYXJzZUZsb2F0KGN1cnJlbnRDb25kaXRpb25zLndpbmRzcGVlZCAqIDMuNikudG9GaXhlZCgyKX0ga20vaHI8L3NwYW4+PC9kaXY+YCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGluZm9EaXYgPSBnZW5lcmF0ZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2RpdicsXG4gICAgICBjbGFzc05hbWU6ICdpbmZvLWRpdicsXG4gICAgfSk7XG4gICAgY29uc3Qgd2VhdGhlckluZm8gPSBnZW5lcmF0ZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2RpdicsXG4gICAgICBjbGFzc05hbWU6ICd3ZWF0aGVyLWluZm8nLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kYXlJbmZvID0gZ2VuZXJhdGVFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgY2xhc3NOYW1lOiAndG9kYXktaW5mbycsXG4gICAgICBpbm5lckhUTUw6IGA8ZGl2IGNsYXNzPVwid2VhdGhlci1oXCI+V2VhdGhlcjwvZGl2PjxkaXY+JHtjdXJyZW50RGF0ZX08L2Rpdj48ZGl2PiR7Y3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9uc308L2Rpdj5gLFxuICAgIH0pO1xuXG4gICAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG4gICAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVEaXYpO1xuICAgIGNvbnN0IHdlYXRoZXJJbmZvRGF0YSA9IGdlbmVyYXRlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGNsYXNzTmFtZTogJ3dlYXRoZXItaW5mby1kYXRhJyxcbiAgICB9KTtcbiAgICB3ZWF0aGVySW5mb0RhdGEuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkRpdik7XG4gICAgd2VhdGhlckluZm9EYXRhLmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcbiAgICB3ZWF0aGVySW5mb0RhdGEuYXBwZW5kQ2hpbGQod2luZERpdik7XG4gICAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckluZm9EYXRhKTtcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQod2VhdGhlckluZm8pO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodG9kYXlJbmZvKTtcblxuICAgIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcbiAgICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIGNvbnN0IGZvcmVjYXN0ID0gZ2VuZXJhdGVFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgY2xhc3NOYW1lOiAnd2VhdGhlci1mb3JlY2FzdCcsXG4gICAgfSk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyZWREYXlzID0gZGF5c1xuICAgICAgLmZpbHRlcigoZGF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRheURhdGUgPSBuZXcgRGF0ZShkYXkuZGF0ZXRpbWUpO1xuICAgICAgICByZXR1cm4gZGF5RGF0ZSA+PSB0b2RheTtcbiAgICAgIH0pXG4gICAgICAuc2xpY2UoMCwgNyk7XG5cbiAgICBmaWx0ZXJlZERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRheURpdi5jbGFzc0xpc3QuYWRkKCdkYXktZm9yZWNhc3QnKTtcblxuICAgICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKGRheS5kYXRldGltZSk7XG4gICAgICBkYXlEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxoMz4ke2RheU9mV2Vla308L2gzPlxuICAgICAgICAgICAgICAgIDxkaXY+JHtkYXkuZGF0ZXRpbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjUwXCIgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Zpc3VhbGNyb3NzaW5nL1dlYXRoZXJJY29ucy9tYWluL1NWRy8ybmQlMjBTZXQlMjAtJTIwQ29sb3IvJHtkYXkuaWNvbn0uc3ZnXCIgYWx0PVwiJHtkYXkuaWNvbn1cIiAvPlxuICAgICAgICAgICAgICAgIDxwPiR7ZGF5LnRlbXB9wrBDPC9wPlxuICAgICAgICAgICAgYDtcblxuICAgICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGF5RGl2KTtcbiAgICB9KTtcblxuICAgIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0KTtcbiAgfVxufTtcblxuLy8gRk9STVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWxvY2F0aW9uJyk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldERhdGEoaW5wdXQudmFsdWUpO1xuICBkaXNwbGF5SW5mb3JtYXRpb24ocmVzKTtcbn07XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XG5cbmdldERhdGEoJ21hbmlsYScpLnRoZW4oKHJlcykgPT4ge1xuICBkaXNwbGF5SW5mb3JtYXRpb24ocmVzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9