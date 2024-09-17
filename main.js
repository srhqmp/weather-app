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

html,
body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  color: var(--text-color);
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background-size: cover;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

.main-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 150px;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
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
  box-sizing: border-box;
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

  padding-bottom: 100px;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,uBAAuB;EACvB,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,mEAAmE;EACnE,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,yCAAyC;EACzC,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,4BAA4B;EAC5B,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;;;;;;;EAOE,4BAA4B;EAC5B,2BAA2B;EAC3B,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR;;;;yCAIuC;AACzC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,iBAAiB;EACjB,QAAQ;EACR,2CAA2C;AAC7C;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,6BAA6B;EAC7B,YAAY;EACZ,2CAA2C;EAC3C,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;EACnB,2BAA2B;EAC3B,sBAAsB;EACtB,iBAAiB;EACjB,cAAc;EACd;;;0CAGwC;AAC1C;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,mEAAmE;EACnE,mBAAmB;EACnB,iBAAiB;EACjB,2CAA2C;AAC7C;AACA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,6CAA6C;;EAE7C,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');\n\n:root {\n  --primary-color: #5552ab;\n  --secondary-color: #ecebff;\n  --accent-color: #f48bce;\n  --text-color: #424242;\n  --background-color: #fff9f2;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);\n  color: var(--text-color);\n  height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n  background-size: cover;\n  font-family: Arial, Helvetica, sans-serif;\n  box-sizing: border-box;\n}\n\n.main-content {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding-top: 150px;\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na {\n  color: var((--accent-color));\n  color: var(--primary-color);\n  font-family: 'Raleway', sans-serif;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1020px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n\n.logo {\n  display: flex;\n  gap: 6px;\n  text-shadow:\n    1px 1px 2px rgba(250, 250, 250, 0.6),\n    -1px -1px 2px rgba(250, 250, 250, 0.6),\n    1px -1px 2px rgba(250, 250, 250, 0.6),\n    -1px 1px 2px rgba(250, 250, 250, 0.2);\n}\n\n.header {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.form {\n  margin: 24px 0;\n}\n\n.form label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 6px;\n  border-radius: 8px;\n  border: 1px solid var(--primary-color);\n  background: white;\n  gap: 6px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n\n.form input {\n  font-size: 18px;\n  color: var(--primary-color);\n  border: none;\n  background: none;\n  outline: none;\n}\n\n.form button {\n  border-radius: 8px;\n  background: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  cursor: pointer;\n  border: 1px solid var(--secondary-color);\n}\n\n.form form {\n  display: flex;\n  gap: 6px;\n}\n\n.form img {\n  display: block;\n}\n\n.weather-card {\n  background-color: var(--background-color);\n  border-radius: 12px;\n  padding: 64px 36px 8px 36px;\n  box-sizing: border-box;\n  min-height: 250px;\n  margin: 32px 0;\n  box-shadow:\n    rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,\n    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n}\n\n.weather-card .current-location {\n  font-size: 16px;\n  margin-bottom: 24px;\n}\n\n.weather-card .current-location span {\n  font-weight: 600;\n  color: var(--primary-color);\n}\n\n.info-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 22px;\n}\n\n.weather-info {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.weather-info-data {\n  margin-left: 32px;\n}\n\n.current-temperature {\n  font-size: 94px;\n  font-weight: 600;\n  position: relative;\n}\n\n.current-temperature span {\n  font-size: 28px;\n  position: absolute;\n  top: 0;\n}\n\n.weather-card .info-div {\n  display: flex;\n  gap: 42px;\n}\n\n.today-info {\n  text-align: right;\n}\n\n.weather-h {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.weather-forecast {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  text-align: center;\n  margin: 42px 0;\n  gap: 12px;\n}\n\n.day-forecast {\n  background-image: linear-gradient(to top, #fbc8d4 0%, #9795f0 100%);\n  border-radius: 12px;\n  padding: 12px 6px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.day-forecast h3 {\n  margin: 0;\n  padding: 0;\n  margin-bottom: 6px;\n  color: var(--background-color);\n}\n\n.day-forecast img {\n  margin: 12px 0;\n}\n\nfooter {\n  text-align: center;\n  font-size: 14px;\n  text-shadow: 1px 1px rgba(236, 185, 238, 0.6);\n\n  padding-bottom: 100px;\n}\n\n.loading-spinner {\n  border: 8px solid rgba(0, 0, 0, 0.1);\n  border-left: 8px solid #3498db;\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  animation: spin 1s linear infinite;\n  margin: 0 auto;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.weather-card h1 {\n  text-align: center;\n  font-size: 32px;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\n"],"sourceRoot":""}]);
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

  document.querySelector('.main-content').style.backgroundImage = gradient;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDBJQUEwSSx1REFBdUQseUJBQXlCO0FBQzFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSwwSEFBMEgsdURBQXVELDBCQUEwQixXQUFXLDZCQUE2QiwrQkFBK0IsNEJBQTRCLDBCQUEwQixnQ0FBZ0MsR0FBRyxpQkFBaUIsY0FBYyxlQUFlLHdFQUF3RSw2QkFBNkIsa0JBQWtCLGlCQUFpQix1QkFBdUIsMkJBQTJCLDhDQUE4QywyQkFBMkIsR0FBRyxtQkFBbUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsdUJBQXVCLGlDQUFpQywyQkFBMkIsaUNBQWlDLEdBQUcscUNBQXFDLGlDQUFpQyxnQ0FBZ0MsdUNBQXVDLEdBQUcsT0FBTywwQkFBMEIsR0FBRyxnQkFBZ0Isc0JBQXNCLG1CQUFtQiwyQkFBMkIsR0FBRyxXQUFXLGtCQUFrQixhQUFhLGdNQUFnTSxHQUFHLGFBQWEsa0JBQWtCLGNBQWMsd0JBQXdCLG1DQUFtQyxHQUFHLFdBQVcsbUJBQW1CLEdBQUcsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFCQUFxQix1QkFBdUIsMkNBQTJDLHNCQUFzQixhQUFhLGdEQUFnRCxHQUFHLGlCQUFpQixvQkFBb0IsZ0NBQWdDLGlCQUFpQixxQkFBcUIsa0JBQWtCLEdBQUcsa0JBQWtCLHVCQUF1QixxQ0FBcUMsa0NBQWtDLGlCQUFpQixnREFBZ0Qsb0JBQW9CLDZDQUE2QyxHQUFHLGdCQUFnQixrQkFBa0IsYUFBYSxHQUFHLGVBQWUsbUJBQW1CLEdBQUcsbUJBQW1CLDhDQUE4Qyx3QkFBd0IsZ0NBQWdDLDJCQUEyQixzQkFBc0IsbUJBQW1CLG1LQUFtSyxHQUFHLHFDQUFxQyxvQkFBb0Isd0JBQXdCLEdBQUcsMENBQTBDLHFCQUFxQixnQ0FBZ0MsR0FBRyxlQUFlLGtCQUFrQixtQ0FBbUMsd0JBQXdCLG9CQUFvQixHQUFHLG1CQUFtQixrQkFBa0IsYUFBYSx3QkFBd0IsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcsMEJBQTBCLG9CQUFvQixxQkFBcUIsdUJBQXVCLEdBQUcsK0JBQStCLG9CQUFvQix1QkFBdUIsV0FBVyxHQUFHLDZCQUE2QixrQkFBa0IsY0FBYyxHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxnQkFBZ0Isb0JBQW9CLHFCQUFxQixHQUFHLHVCQUF1QixrQkFBa0IsMENBQTBDLDRCQUE0Qix1QkFBdUIsbUJBQW1CLGNBQWMsR0FBRyxtQkFBbUIsd0VBQXdFLHdCQUF3QixzQkFBc0IsZ0RBQWdELEdBQUcsb0JBQW9CLGNBQWMsZUFBZSx1QkFBdUIsbUNBQW1DLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLFlBQVksdUJBQXVCLG9CQUFvQixrREFBa0QsNEJBQTRCLEdBQUcsc0JBQXNCLHlDQUF5QyxtQ0FBbUMsdUJBQXVCLGdCQUFnQixpQkFBaUIsdUNBQXVDLG1CQUFtQixHQUFHLHFCQUFxQixRQUFRLDhCQUE4QixLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyxzQkFBc0IsdUJBQXVCLG9CQUFvQixHQUFHLHdCQUF3QixrQkFBa0IsNEJBQTRCLHdCQUF3QixrQkFBa0IsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0Isa0JBQWtCLEdBQUcscUJBQXFCO0FBQ3QvTTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2pRMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLFFBQVEsR0FBRyxTQUFTLHdCQUF3QixPQUFPO0FBQzFELE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUNoRDtBQUNBOztBQUVBLGlFQUFlLEVBQUUsOEJBQThCLEVBQUM7Ozs7Ozs7VUNyQmhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBc0I7QUFDd0Q7QUFDMUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBYztBQUNwQztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixZQUFZLDBCQUEwQjtBQUN0QyxJQUFJLDREQUFrQjtBQUN0Qix3QkFBd0IseURBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRSxLQUFLOztBQUVMLG9CQUFvQix5REFBZTtBQUNuQztBQUNBO0FBQ0EsdUlBQXVJLHVCQUF1QixhQUFhLHVCQUF1QjtBQUNsTSxLQUFLO0FBQ0wsMkJBQTJCLHlEQUFlO0FBQzFDO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pELEtBQUs7QUFDTCw2QkFBNkIseURBQWU7QUFDNUM7QUFDQSwyREFBMkQsK0JBQStCO0FBQzFGLEtBQUs7QUFDTCx3QkFBd0IseURBQWU7QUFDdkM7QUFDQSxzREFBc0QsMkJBQTJCO0FBQ2pGLEtBQUs7QUFDTCxvQkFBb0IseURBQWU7QUFDbkM7QUFDQSx1REFBdUQsMERBQTBEO0FBQ2pILEtBQUs7O0FBRUwsb0JBQW9CLHlEQUFlO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCLHlEQUFlO0FBQ3ZDO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHNCQUFzQix5REFBZTtBQUNyQztBQUNBO0FBQ0EsNkRBQTZELFlBQVksYUFBYSw2QkFBNkI7QUFDbkgsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsNEJBQTRCLHlEQUFlO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQix5REFBZTtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0RBQVk7QUFDcEM7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyx1QkFBdUIsYUFBYTtBQUNwQyxvSUFBb0ksU0FBUyxhQUFhLFNBQVM7QUFDbksscUJBQXFCLFNBQVM7QUFDOUI7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2VydmljZXMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyOml0YWwsb3Bzeix3Z2h0QDAsNS4uMTIwMCwzMDAuLjkwMDsxLDUuLjEyMDAsMzAwLi45MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNTU1MmFiO1xuICAtLXNlY29uZGFyeS1jb2xvcjogI2VjZWJmZjtcbiAgLS1hY2NlbnQtY29sb3I6ICNmNDhiY2U7XG4gIC0tdGV4dC1jb2xvcjogIzQyNDI0MjtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWYyO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZiYzJlYiAwJSwgI2E2YzFlZSAxMDAlKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmEge1xuICBjb2xvcjogdmFyKCgtLWFjY2VudC1jb2xvcikpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG4gIHRleHQtc2hhZG93OlxuICAgIDFweCAxcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KSxcbiAgICAtMXB4IC0xcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KSxcbiAgICAxcHggLTFweCAycHggcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjYpLFxuICAgIC0xcHggMXB4IDJweCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMik7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW46IDI0cHggMDtcbn1cblxuLmZvcm0gbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGdhcDogNnB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xufVxuXG4uZm9ybSBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmZvcm0gZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xufVxuXG4uZm9ybSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndlYXRoZXItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA2NHB4IDM2cHggOHB4IDM2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW46IDMycHggMDtcbiAgYm94LXNoYWRvdzpcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LFxuICAgIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzMHB4IDYwcHggLTMwcHg7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmN1cnJlbnQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi53ZWF0aGVyLWNhcmQgLmN1cnJlbnQtbG9jYXRpb24gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmluZm8tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi53ZWF0aGVyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItaW5mby1kYXRhIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi5jdXJyZW50LXRlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiA5NHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdXJyZW50LXRlbXBlcmF0dXJlIHNwYW4ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4ud2VhdGhlci1jYXJkIC5pbmZvLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNDJweDtcbn1cblxuLnRvZGF5LWluZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLndlYXRoZXItaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLndlYXRoZXItZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQycHggMDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZGF5LWZvcmVjYXN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZiYzhkNCAwJSwgIzk3OTVmMCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XG59XG4uZGF5LWZvcmVjYXN0IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLmRheS1mb3JlY2FzdCBpbWcge1xuICBtYXJnaW46IDEycHggMDtcbn1cblxuZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMjM2LCAxODUsIDIzOCwgMC42KTtcblxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBib3JkZXI6IDhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzM0OThkYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLndlYXRoZXItY2FyZCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFB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ZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyOml0YWwsb3Bzeix3Z2h0QDAsNS4uMTIwMCwzMDAuLjkwMDsxLDUuLjEyMDAsMzAwLi45MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICM1NTUyYWI7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2VjZWJmZjtcXG4gIC0tYWNjZW50LWNvbG9yOiAjZjQ4YmNlO1xcbiAgLS10ZXh0LWNvbG9yOiAjNDI0MjQyO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWYyO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmYmMyZWIgMCUsICNhNmMxZWUgMTAwJSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nLXRvcDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmEge1xcbiAgY29sb3I6IHZhcigoLS1hY2NlbnQtY29sb3IpKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTAyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxuICB0ZXh0LXNoYWRvdzpcXG4gICAgMXB4IDFweCAycHggcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjYpLFxcbiAgICAtMXB4IC0xcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KSxcXG4gICAgMXB4IC0xcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KSxcXG4gICAgLTFweCAxcHggMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4yKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgbWFyZ2luOiAyNHB4IDA7XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGdhcDogNnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXG59XFxuXFxuLmZvcm0gaW5wdXQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mb3JtIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG4uZm9ybSBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNjRweCAzNnB4IDhweCAzNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgbWFyZ2luOiAzMnB4IDA7XFxuICBib3gtc2hhZG93OlxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LFxcbiAgICByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweDtcXG59XFxuXFxuLndlYXRoZXItY2FyZCAuY3VycmVudC1sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIC5jdXJyZW50LWxvY2F0aW9uIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmluZm8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWluZm8tZGF0YSB7XFxuICBtYXJnaW4tbGVmdDogMzJweDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiA5NHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUgc3BhbiB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcblxcbi53ZWF0aGVyLWNhcmQgLmluZm8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQycHg7XFxufVxcblxcbi50b2RheS1pbmZvIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ud2VhdGhlci1oIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi53ZWF0aGVyLWZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDQycHggMDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLmRheS1mb3JlY2FzdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmJjOGQ0IDAlLCAjOTc5NWYwIDEwMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDEycHggNnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXG59XFxuLmRheS1mb3JlY2FzdCBoMyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uZGF5LWZvcmVjYXN0IGltZyB7XFxuICBtYXJnaW46IDEycHggMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMjM2LCAxODUsIDIzOCwgMC42KTtcXG5cXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICBib3JkZXI6IDhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICMzNDk4ZGI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogNzVweDtcXG4gIGhlaWdodDogNzVweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLndlYXRoZXItY2FyZCBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5sb2FkaW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgZ2VuZXJhdGVFbGVtZW50ID0gKHtcbiAgdHlwZSxcbiAgdGV4dENvbnRlbnQsXG4gIGNsYXNzTmFtZSxcbiAgaWQsXG4gIHNyYyxcbiAgYWx0LFxuICBpbm5lckhUTUwsXG59KSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSB7IHR5cGUgfTtcbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgYXR0cmlidXRlcy50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhdHRyaWJ1dGVzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgfVxuICBpZiAoaWQpIHtcbiAgICBhdHRyaWJ1dGVzLmlkID0gaWQ7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdpbWcnKSB7XG4gICAgYXR0cmlidXRlcy5zcmMgPSBzcmM7XG4gICAgYXR0cmlidXRlcy5hbHQgPSBhbHQgfHwgJyc7XG4gIH1cbiAgaWYgKGlubmVySFRNTCkge1xuICAgIGF0dHJpYnV0ZXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB9XG5cbiAgY29uc3QgZWxlbWVudCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKSwgYXR0cmlidXRlcyk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERheU9mV2VlayA9IChkYXRlU3RyKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2VhdGhlckdyYWRpZW50cyA9IHtcbiAgc25vdzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNFMEY3RkEsICNCM0U1RkMpJywgLy8gTGlnaHQgYmx1ZSB0byB3aGl0ZVxuICAnc25vdy1zaG93ZXJzLWRheSc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQjNFNUZDLCAjODFENEZBKScsIC8vIExpZ2h0IGJsdWUgdG8gbGlnaHRlciBibHVlXG4gICdzbm93LXNob3dlcnMtbmlnaHQnOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzgxRDRGQSwgIzRGQzNGNyknLCAvLyBEYXJrZXIgYmx1ZVxuICAndGh1bmRlci1yYWluJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NEI1RjYsICM5MEE0QUUpJywgLy8gRGFyayBibHVlIHRvIGdyYXlcbiAgJ3RodW5kZXItc2hvd2Vycy1kYXknOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQyQTVGNSwgI0IwQkVDNSknLCAvLyBCcmlnaHQgYmx1ZSB0byBncmF5XG4gICd0aHVuZGVyLXNob3dlcnMtbmlnaHQnOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxOTZGMywgIzkwQTRBRSknLCAvLyBEYXJrIGJsdWUgdG8gZGFya2VyIGdyYXlcbiAgcmFpbjogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCMEJFQzUsICM3ODkwOUMpJywgLy8gTGlnaHQgZ3JheSB0byBkYXJrIGdyYXlcbiAgJ3Nob3dlcnMtZGF5JzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCMEJFQzUsICM4MUQ0RkEpJywgLy8gTGlnaHQgZ3JheSB0byBibHVlXG4gICdzaG93ZXJzLW5pZ2h0JzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3ODkwOUMsICM0QTE0OEMpJywgLy8gRGFyayBncmF5IHRvIGRhcmsgYmx1ZVxuICBmb2c6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQ0ZEOERDLCAjRTBFMEUwKScsIC8vIExpZ2h0IGdyYXkgdG8gd2hpdGVcbiAgd2luZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCM0U1RkMsICNFMEY3RkEpJywgLy8gTGlnaHQgYmx1ZSB0byBsaWdodCBncmF5XG4gIGNsb3VkeTogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNDRkQ4REMsICNCMEJFQzUpJywgLy8gTGlnaHQgZ3JheSB0byBkYXJrZXIgZ3JheVxuICAncGFydGx5LWNsb3VkeS1kYXknOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRUIzQiwgIzgwREVFQSknLCAvLyBMaWdodCB5ZWxsb3cgdG8gbGlnaHQgYmx1ZVxuICAncGFydGx5LWNsb3VkeS1uaWdodCc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQUI0N0JDLCAjNkExQjlBKScsIC8vIERhcmsgcHVycGxlIHRvIGRhcmsgYmx1ZVxuICAnY2xlYXItZGF5JzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkVCM0IsICNGQkMwMkQpJywgLy8gQnJpZ2h0IHllbGxvdyB0byBvcmFuZ2VcbiAgJ2NsZWFyLW5pZ2h0JzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwRDQ3QTEsICMwMDAwMDApJywgLy8gRGFyayBibHVlIHRvIGJsYWNrXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QmFja2dyb3VuZENvbG9yID0gKGNvbmRpdGlvbikgPT4ge1xuICBjb25zdCBncmFkaWVudCA9XG4gICAgd2VhdGhlckdyYWRpZW50c1tjb25kaXRpb25dIHx8XG4gICAgJ2xpbmVhci1ncmFkaWVudCh0byB0b3AsICNmYmMyZWIgMCUsICNhNmMxZWUgMTAwJSknO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBncmFkaWVudDtcbn07XG4iLCJjb25zdCBhcGlLZXkgPSAnVlhMSkxDUVQ5MlZDNUhUOFBFVTZGQ0o1RCc7XG5jb25zdCBiYXNlVXJsID1cbiAgJ2h0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lJztcblxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke2Jhc2VVcmx9LyR7bG9jYXRpb259P3VuaXRHcm91cD1tZXRyaWMma2V5PSR7YXBpS2V5fSZjb250ZW50VHlwZT1qc29uYCxcbiAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBnZXRGb3JtYXR0ZWREYXRlID0gKGRhdGUpID0+IHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0V2VhdGhlciwgZ2V0Rm9ybWF0dGVkRGF0ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2VuZXJhdGVFbGVtZW50LCBnZXREYXlPZldlZWssIHNldEJhY2tncm91bmRDb2xvciB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgd2VhdGhlclNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy93ZWF0aGVyRGF0YSc7XG5cbmNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jYXJkJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nQ29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn07XG5jb25zdCBoaWRlTG9hZGluZyA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9vdGVyJylbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nQ29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBzaG93TG9hZGluZygpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXIobG9jYXRpb24pO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBmaW5hbGx5IHtcbiAgICBoaWRlTG9hZGluZygpO1xuICB9XG59O1xuXG4vLyBJTkZPUk1BVElPTlxuY29uc3QgZGlzcGxheUluZm9ybWF0aW9uID0gKGRhdGEpID0+IHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgIGhvdXIxMjogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jYXJkJyk7XG4gIHdlYXRoZXJDYXJkLmlubmVySFRNTCA9ICcnO1xuICBpZiAoZGF0YSA9PT0gbnVsbCB8fCAhZGF0YSkge1xuICAgIHdlYXRoZXJDYXJkLmlubmVySFRNTCA9IGA8aDE+NDA0OiBOT1QgRk9VTkQ8L2gxPmA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBjdXJyZW50Q29uZGl0aW9ucywgZGF5cyB9ID0gZGF0YTtcbiAgICBzZXRCYWNrZ3JvdW5kQ29sb3IoY3VycmVudENvbmRpdGlvbnMuaWNvbik7XG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBnZW5lcmF0ZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2RpdicsXG4gICAgICBjbGFzc05hbWU6ICdjdXJyZW50LWxvY2F0aW9uJyxcbiAgICAgIHRleHRDb250ZW50OiBkYXRhLnJlc29sdmVkQWRkcmVzcyxcbiAgICAgIGlubmVySFRNTDogYDxkaXY+UmVzdWx0cyBmcm9tIDxzcGFuPiR7ZGF0YS5yZXNvbHZlZEFkZHJlc3N9PC9zcGFuPjwvZGl2PmAsXG4gICAgfSk7XG5cbiAgICBjb25zdCBpY29uRGl2ID0gZ2VuZXJhdGVFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgY2xhc3NOYW1lOiAnY3VycmVudC1pY29uJyxcbiAgICAgIGlubmVySFRNTDogYDxpbWcgd2lkdGg9XCIxNTBcIiBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdmlzdWFsY3Jvc3NpbmcvV2VhdGhlckljb25zL21haW4vU1ZHLzJuZCUyMFNldCUyMC0lMjBDb2xvci8ke2N1cnJlbnRDb25kaXRpb25zLmljb259LnN2Z1wiIGFsdD1cIiR7Y3VycmVudENvbmRpdGlvbnMuaWNvbn1cIiAvPmAsXG4gICAgfSk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVEaXYgPSBnZW5lcmF0ZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2RpdicsXG4gICAgICBjbGFzc05hbWU6ICdjdXJyZW50LXRlbXBlcmF0dXJlJyxcbiAgICAgIGlubmVySFRNTDogYDxkaXY+JHtjdXJyZW50Q29uZGl0aW9ucy50ZW1wfSA8c3Bhbj7CsEM8L3NwYW4+PC9kaXY+YCxcbiAgICB9KTtcbiAgICBjb25zdCBwcmVjaXBpdGF0aW9uRGl2ID0gZ2VuZXJhdGVFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgaW5uZXJIVE1MOiBgPGRpdiBjbGFzcz1cImluZm9cIj5QcmVjaXBpdGF0aW9uOiA8c3Bhbj4ke2N1cnJlbnRDb25kaXRpb25zLnByZWNpcCB8fCAwfSBtbTwvc3Bhbj48L2Rpdj5gLFxuICAgIH0pO1xuICAgIGNvbnN0IGh1bWlkaXR5RGl2ID0gZ2VuZXJhdGVFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgaW5uZXJIVE1MOiBgPGRpdiBjbGFzcz1cImluZm9cIj5IdW1pZGl0eTogPHNwYW4+JHtjdXJyZW50Q29uZGl0aW9ucy5odW1pZGl0eX0lPC9zcGFuPjwvZGl2PmAsXG4gICAgfSk7XG4gICAgY29uc3Qgd2luZERpdiA9IGdlbmVyYXRlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGlubmVySFRNTDogYDxkaXYgY2xhc3M9XCJpbmZvXCI+V2luZHNwZWVkOiA8c3Bhbj4ke3BhcnNlRmxvYXQoY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkICogMy42KS50b0ZpeGVkKDIpfSBrbS9ocjwvc3Bhbj48L2Rpdj5gLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5mb0RpdiA9IGdlbmVyYXRlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGNsYXNzTmFtZTogJ2luZm8tZGl2JyxcbiAgICB9KTtcbiAgICBjb25zdCB3ZWF0aGVySW5mbyA9IGdlbmVyYXRlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnZGl2JyxcbiAgICAgIGNsYXNzTmFtZTogJ3dlYXRoZXItaW5mbycsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2RheUluZm8gPSBnZW5lcmF0ZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2RpdicsXG4gICAgICBjbGFzc05hbWU6ICd0b2RheS1pbmZvJyxcbiAgICAgIGlubmVySFRNTDogYDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWhcIj5XZWF0aGVyPC9kaXY+PGRpdj4ke2N1cnJlbnREYXRlfTwvZGl2PjxkaXY+JHtjdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zfTwvZGl2PmAsXG4gICAgfSk7XG5cbiAgICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChpY29uRGl2KTtcbiAgICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZURpdik7XG4gICAgY29uc3Qgd2VhdGhlckluZm9EYXRhID0gZ2VuZXJhdGVFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgY2xhc3NOYW1lOiAnd2VhdGhlci1pbmZvLWRhdGEnLFxuICAgIH0pO1xuICAgIHdlYXRoZXJJbmZvRGF0YS5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uRGl2KTtcbiAgICB3ZWF0aGVySW5mb0RhdGEuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXYpO1xuICAgIHdlYXRoZXJJbmZvRGF0YS5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcbiAgICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZCh3ZWF0aGVySW5mb0RhdGEpO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh3ZWF0aGVySW5mbyk7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0b2RheUluZm8pO1xuXG4gICAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuICAgIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgY29uc3QgZm9yZWNhc3QgPSBnZW5lcmF0ZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2RpdicsXG4gICAgICBjbGFzc05hbWU6ICd3ZWF0aGVyLWZvcmVjYXN0JyxcbiAgICB9KTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZERheXMgPSBkYXlzXG4gICAgICAuZmlsdGVyKChkYXkpID0+IHtcbiAgICAgICAgY29uc3QgZGF5RGF0ZSA9IG5ldyBEYXRlKGRheS5kYXRldGltZSk7XG4gICAgICAgIHJldHVybiBkYXlEYXRlID49IHRvZGF5O1xuICAgICAgfSlcbiAgICAgIC5zbGljZSgwLCA3KTtcblxuICAgIGZpbHRlcmVkRGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1mb3JlY2FzdCcpO1xuXG4gICAgICBjb25zdCBkYXlPZldlZWsgPSBnZXREYXlPZldlZWsoZGF5LmRhdGV0aW1lKTtcbiAgICAgIGRheURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGgzPiR7ZGF5T2ZXZWVrfTwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdj4ke2RheS5kYXRldGltZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNTBcIiBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdmlzdWFsY3Jvc3NpbmcvV2VhdGhlckljb25zL21haW4vU1ZHLzJuZCUyMFNldCUyMC0lMjBDb2xvci8ke2RheS5pY29ufS5zdmdcIiBhbHQ9XCIke2RheS5pY29ufVwiIC8+XG4gICAgICAgICAgICAgICAgPHA+JHtkYXkudGVtcH3CsEM8L3A+XG4gICAgICAgICAgICBgO1xuXG4gICAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZChkYXlEaXYpO1xuICAgIH0pO1xuXG4gICAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3QpO1xuICB9XG59O1xuXG4vLyBGT1JNXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tbG9jYXRpb24nKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGF0YShpbnB1dC52YWx1ZSk7XG4gIGRpc3BsYXlJbmZvcm1hdGlvbihyZXMpO1xufTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcblxuZ2V0RGF0YSgnbWFuaWxhJykudGhlbigocmVzKSA9PiB7XG4gIGRpc3BsYXlJbmZvcm1hdGlvbihyZXMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=