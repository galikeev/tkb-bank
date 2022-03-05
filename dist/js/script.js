/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_checkInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/checkInputs */ "./src/js/modules/checkInputs.js");
/* harmony import */ var _modules_addDelRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addDelRow */ "./src/js/modules/addDelRow.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_checkInputs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_addDelRow__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/addDelRow.js":
/*!*************************************!*\
  !*** ./src/js/modules/addDelRow.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const addDelRow = () => {
  const addBtn = document.querySelector('.button__add');
  const table = document.querySelector('.table');
  const delBtn = document.querySelector('.button__del');
  let count = 1;

  const addLineTable = () => {
    addBtn.addEventListener('click', () => {
      count++;
      const row = document.createElement('tr');
      row.classList.add('table__body');
      row.innerHTML = `
            <td>
                <input name="name${count}" type="text" required class="table__name input">
            </td>
            <td>
                <select name="post${count}" id="#" class="input">
                    <option value="1">менеджер</option>
                    <option value="1">аналитик</option>
                    <option value="1">программист</option>
                    <option value="1">юрист</option>
                </select>
            </td>
            <td>
                <input name="age${count}" type="text" required class="table__age input">
            </td>
            <td>
                <input name="text${count}" type="text" class="input">
            </td>
            `;
      table.appendChild(row);

      if (table.childNodes.length >= 3) {
        delBtn.style.display = 'block';
      }
    });
  };

  addLineTable();

  const deleteLineTable = () => {
    delBtn.addEventListener('click', () => {
      table.lastChild.remove();

      if (table.childNodes.length <= 2) {
        delBtn.style.display = 'none';
      }
    });
  };

  deleteLineTable();
};

/* harmony default export */ __webpack_exports__["default"] = (addDelRow);

/***/ }),

/***/ "./src/js/modules/checkInputs.js":
/*!***************************************!*\
  !*** ./src/js/modules/checkInputs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkInputs = () => {
  const table = document.querySelector('.table');
  table.addEventListener('input', event => {
    if (event.target.classList.contains('table__name')) {
      event.target.value = event.target.value.replace(/\d/, '');
    } else if (event.target.classList.contains('table__age')) {
      event.target.value = event.target.value.replace(/\D/, '');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkInputs);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/postData */ "./src/js/services/postData.js");


const forms = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form);
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    Object(_services_postData__WEBPACK_IMPORTED_MODULE_0__["default"])('http://localhost:3000/requests', json).then(data => {
      console.log(data);
    }).catch(() => {
      console.log('error');
    }).finally(() => {
      document.body.style.overflow = '';
      form.reset();
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/services/postData.js":
/*!*************************************!*\
  !*** ./src/js/services/postData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });
  return await res.json();
};

/* harmony default export */ __webpack_exports__["default"] = (postData);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map