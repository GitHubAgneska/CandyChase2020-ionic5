(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-pages-static-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/about/about.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/about/about.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"static circlesImgBg\">\n  <div class=\"main\">\n    <div class=\"logo-container\">\n      <img src=\"{{logoImg}}\" alt=\"app logo\" />\n    </div>\n    <div class=\"text-container\">\n      <h1>is Powered by OPEN FOOD FACTS under open api licence</h1>\n      <h1>Vectors: VECTEEZY.COM</h1>\n    </div>\n  </div>\n  <div class=\"bottom-container\">\n    <p>©CandyChase2020</p>\n    <ion-button (click)=\"goBack()\">back</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/legal/legal.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/legal/legal.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Legal</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"static\">\n  <div class=\"main\">\n    <h1>Terms and Conditions</h1>\n    <p>\n      \"At vero eos et accusamus et iusto odio dignissimos ducimus\n      qui blanditiis praesentium voluptatum deleniti atque corrupti\n      quos dolores et quas molestias excepturi sint occaecati\n      cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,\n      id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod\n      maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.\n      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet\n      ut et voluptates repudiandae sint et molestiae non recusandae.\n      Itaque earum rerum hic tenetur a sapiente delectus,\n      ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n    </p>\n  </div>\n  <div class=\"bottom-container\">\n    <ion-button (click)=\"goBack()\">back</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/rules/rules.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/rules/rules.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Rules</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"static\">\n\n  <div class=\"main\">\n    <h2>\n      Halloween night is finally here...\n      And it's time for some serious hunting !!\n    </h2>\n    <ul>\n      <li>\n        1. Select your age to get your map\n      </li>\n      <li>\n        2. Start your quest in your neighborhood\n      </li>\n      <li>\n        3.Find the candy of the list and put it in your backpack:<br>\n        The points will get you through LEVELS with TRICK or TREAT challenges, \n        And CARDS to get !<br>\n        You can also save your favorite addresses !\n      </li>\n      <li>\n        4. After the hunt, you can check in the candy details if the candy you found are a good fit for you<br>\n        ( in case you have allergies or a special diet for example )<br>\n        If this is not the case, you can trade this/these candy for some other ones with your friends!\n      </li>\n    </ul>\n\n    <h2> Good luck and let the hunt begin !!!</h2>\n  </div>\n  <div class=\"bottom-container\">\n    <ion-button (click)=\"goBack()\">back</ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/static-pages/about/about.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/static-pages/about/about.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.static .main .logo-container {\n  width: 40%;\n  margin: auto; }\n\n.static .main .text-container {\n  height: 30vh;\n  background-image: url('menu_shape1.png');\n  background-size: contain;\n  background-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3N0YXRpYy1wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3N0YXRpYy1wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFrRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbEQ4Qzs7QUNmOUM7RUFHWSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUp4QjtFQU9ZLFlBQVk7RUFDWix3Q0FBOEQ7RUFDOUQsd0JBQXdCO0VBQ3hCLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljLXBhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6ICNGRkZERUY7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4uc3RhdGljIC5tYWluIC5sb2dvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4uc3RhdGljIC5tYWluIC50ZXh0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMzB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L21lbnVfc2hhcGUxLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLnN0YXRpYyB7XG4gICAgLm1haW4ge1xuICAgICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2dyYXBoaWNNYXQvbWVudV9zaGFwZTEucG5nJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/static-pages/about/about.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/static-pages/about/about.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let AboutComponent = class AboutComponent {
    constructor(location) {
        this.location = location;
        this.logoImg = 'assets/graphicMat/app_logo.png';
        this.pumpkinShape = 'assets/graphicMat/menu_shape1.png';
    }
    ngOnInit() { }
    goBack() {
        this.location.back();
    }
};
AboutComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/static-pages/about/about.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], AboutComponent);



/***/ }),

/***/ "./src/app/static-pages/legal/legal.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/static-pages/legal/legal.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy1wYWdlcy9sZWdhbC9sZWdhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/static-pages/legal/legal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/static-pages/legal/legal.component.ts ***!
  \*******************************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let LegalComponent = class LegalComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    goBack() {
        this.location.back();
    }
};
LegalComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
LegalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./legal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/legal/legal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./legal.component.scss */ "./src/app/static-pages/legal/legal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], LegalComponent);



/***/ }),

/***/ "./src/app/static-pages/rules/rules.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/static-pages/rules/rules.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.main {\n  background-image: url('rules_shape.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.main h2 {\n    text-align: center; }\n\n.main ul li {\n    border: 2px solid #ff9e29;\n    border-radius: 20px;\n    list-style-image: url('mini_skull.png');\n    font-size: 1.5rem;\n    color: #ffeedf;\n    padding: 5%;\n    margin: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3N0YXRpYy1wYWdlcy9ydWxlcy9ydWxlcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3N0YXRpYy1wYWdlcy9ydWxlcy9ydWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFrRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbEQ4Qzs7QUNmOUM7RUFJSSx3Q0FBOEQ7RUFDOUQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkIsRUFBQTs7QUFQL0I7SUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7SUFXWSx5QkZJVTtJRUhWLG1CQUFtQjtJQUNuQix1Q0FBNkQ7SUFDN0QsaUJBQWlCO0lBRWpCLGNGQVk7SUVDWixXQUFXO0lBQ1gsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljLXBhZ2VzL3J1bGVzL3J1bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6ICNGRkZERUY7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9ydWxlc19zaGFwZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAubWFpbiBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5tYWluIHVsIGxpIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY5ZTI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L21pbmlfc2t1bGwucG5nXCIpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiAjZmZlZWRmO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIG1hcmdpbjogMiU7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1haW4ge1xuICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvZ3JhcGhpY01hdC9ydWxlc19zaGFwZS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgdWwgeyBcbiAgICAgICAgbGl7IFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHN1Yi1vcmFuZ2U7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2dyYXBoaWNNYXQvbWluaV9za3VsbC5wbmcnKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgLy8gZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtb3JhbmdlO1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19 */");

/***/ }),

/***/ "./src/app/static-pages/rules/rules.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/static-pages/rules/rules.component.ts ***!
  \*******************************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let RulesComponent = class RulesComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    goBack() {
        this.location.back();
    }
};
RulesComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
RulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rules',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/rules/rules.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rules.component.scss */ "./src/app/static-pages/rules/rules.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], RulesComponent);



/***/ }),

/***/ "./src/app/static-pages/static-pages-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/static-pages/static-pages-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StaticPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPagesRoutingModule", function() { return StaticPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static-pages/about/about.component.ts");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/static-pages/legal/legal.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/static-pages/rules/rules.component.ts");






const staticPagesRoutes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'legal', component: _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__["LegalComponent"] },
    { path: 'rules', component: _rules_rules_component__WEBPACK_IMPORTED_MODULE_5__["RulesComponent"] },
];
let StaticPagesRoutingModule = class StaticPagesRoutingModule {
};
StaticPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(staticPagesRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StaticPagesRoutingModule);



/***/ }),

/***/ "./src/app/static-pages/static-pages.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/static-pages/static-pages.module.ts ***!
  \*****************************************************/
/*! exports provided: StaticPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPagesModule", function() { return StaticPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _static_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-pages-routing.module */ "./src/app/static-pages/static-pages-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static-pages/about/about.component.ts");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/static-pages/legal/legal.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/static-pages/rules/rules.component.ts");








let StaticPagesModule = class StaticPagesModule {
};
StaticPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            // HomeComponent,
            _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
            _legal_legal_component__WEBPACK_IMPORTED_MODULE_6__["LegalComponent"],
            _rules_rules_component__WEBPACK_IMPORTED_MODULE_7__["RulesComponent"]
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _static_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaticPagesRoutingModule"]
        ]
    })
], StaticPagesModule);



/***/ })

}]);
//# sourceMappingURL=static-pages-static-pages-module-es2015.js.map