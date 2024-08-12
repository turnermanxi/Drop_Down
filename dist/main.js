"use strict";
(self["webpackChunkdrop_down"] = self["webpackChunkdrop_down"] || []).push([["main"],{

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openMenu: () => (/* binding */ openMenu)
/* harmony export */ });

function openMenu () {
    const arrowBtn = document.querySelector("#arrowBtn");
    const menuItems = document.querySelector('#menuItems');
    
    arrowBtn.addEventListener("click", () => {
        if (menuItems.style.display === 'none') {
            menuItems.style.display = 'block';
        } else {
            menuItems.style.display = 'none';
        }

    })

};


const closeMenu = () => {

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow.js */ "./src/arrow.js");



(0,_arrow_js__WEBPACK_IMPORTED_MODULE_0__.openMenu)();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ25CbUM7OztBQUduQyxtREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3BfZG93bi8uL3NyYy9hcnJvdy5qcyIsIndlYnBhY2s6Ly9kcm9wX2Rvd24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1lbnUgKCkge1xuICAgIGNvbnN0IGFycm93QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcnJvd0J0blwiKTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudUl0ZW1zJyk7XG4gICAgXG4gICAgYXJyb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKG1lbnVJdGVtcy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG59O1xuXG5cbmNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcblxufSIsImltcG9ydCB7b3Blbk1lbnV9IGZyb20gJy4vYXJyb3cuanMnXG5cblxub3Blbk1lbnUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=