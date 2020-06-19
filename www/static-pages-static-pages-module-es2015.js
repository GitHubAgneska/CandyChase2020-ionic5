(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-pages-static-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/about/about.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/static-pages/about/about.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"static circlesImgBg flexColCentered\">\n  <div class=\"main\">\n    <div class=\"logo-container\">\n      <img src=\"{{logoImg}}\" alt=\"app logo\" />\n    </div>\n    <div class=\"text-container\">\n      <h4>is</h4>\n      <h1>Powered by <br><span>open food facts</span> <br>under open api licence</h1>\n      <h1>Vectors<br><span>vecteezy.com<br>& homemade!</span></h1>\n    </div>\n    <div class=\"text-container\">\n      <h1>Contact<br><span>candychase.2020@gmail.com</span></h1>\n    </div>\n  </div>\n  <div class=\"bottom-container\">\n    <ion-button (click)=\"goBack()\">back</ion-button>\n    <p>©CandyChase2020</p>\n  </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.static .main .logo-container {\n  width: 40%;\n  margin: auto;\n  text-align: center; }\n\n.static .main .logo-container img {\n    height: 5rem; }\n\n.static .main .text-container {\n  text-align: center; }\n\n.static .main .text-container h1 {\n    width: 80%;\n    margin: auto;\n    padding: 2%;\n    font-size: 1.3rem;\n    color: #ff9e29;\n    border-bottom: 3px solid #ff9e29; }\n\n.static .main .text-container h1 span {\n      font-family: TitanOne;\n      color: #b1c9fb;\n      font-size: 1.2rem; }\n\n.static .bottom-container {\n  width: 100%;\n  margin: 12% auto; }\n\n.static .bottom-container p {\n    color: #ff9e29;\n    font-size: 0.7rem;\n    font-family: TitanOne; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3N0YXRpYy1wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3N0YXRpYy1wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFtRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbkQ4Qzs7QUNmOUM7Ozs7OztFQU1JLFNBQVMsRUFBQTs7QUFHYjtFQUlZLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBTjlCO0lBUWdCLFlBQVksRUFBQTs7QUFSNUI7RUFZWSxrQkFBa0IsRUFBQTs7QUFaOUI7SUFjZ0IsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNGWk07SUVhTixnQ0ZiTSxFQUFBOztBRU50QjtNQXFCb0IscUJGaUNDO01FaENELGNGYkM7TUVjRCxpQkFBaUIsRUFBQTs7QUF2QnJDO0VBOEJRLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUEvQnhCO0lBa0NZLGNGNUJVO0lFNkJWLGlCQUFpQjtJQUNqQixxQkZrQlMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy1wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgJGxpZ2h0cHVycGxlLWJnOiByZ2JhKDE5OSwgMywgMTk5LCAwLjM0Mik7XG4gIFxuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogcmdiKDIyMywgMjIxLCAyMTMpO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5zdGF0aWMgLm1haW4gLmxvZ28tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLnN0YXRpYyAubWFpbiAubG9nby1jb250YWluZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDVyZW07IH1cblxuLnN0YXRpYyAubWFpbiAudGV4dC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLnN0YXRpYyAubWFpbiAudGV4dC1jb250YWluZXIgaDEge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiAjZmY5ZTI5O1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmY5ZTI5OyB9XG4gICAgLnN0YXRpYyAubWFpbiAudGV4dC1jb250YWluZXIgaDEgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyB9XG5cbi5zdGF0aWMgLmJvdHRvbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMiUgYXV0bzsgfVxuICAuc3RhdGljIC5ib3R0b20tY29udGFpbmVyIHAge1xuICAgIGNvbG9yOiAjZmY5ZTI5O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTsgfVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuLy8gbmVjZXNzYXJ5IGZvciBsaXN0IGVsZW1lbnRzIHRvIGNvbWUgb3V0IHJpZ2h0XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnN0YXRpYyB7XG5cbiAgICAubWFpbiB7XG4gICAgICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRzdWItb3JhbmdlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkc3ViLW9yYW5nZTtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAxMiUgYXV0bztcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAkc3ViLW9yYW5nZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.main {\n  background-image: url('rules_shape.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.main h2 {\n    text-align: center; }\n\n.main ul li {\n    border: 2px solid #ff9e29;\n    border-radius: 20px;\n    list-style-image: url('mini_skull.png');\n    font-size: 1.5rem;\n    color: #ffeedf;\n    padding: 5%;\n    margin: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3N0YXRpYy1wYWdlcy9ydWxlcy9ydWxlcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3N0YXRpYy1wYWdlcy9ydWxlcy9ydWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFtRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbkQ4Qzs7QUNmOUM7RUFJSSx3Q0FBOEQ7RUFDOUQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkIsRUFBQTs7QUFQL0I7SUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7SUFXWSx5QkZJVTtJRUhWLG1CQUFtQjtJQUNuQix1Q0FBNkQ7SUFDN0QsaUJBQWlCO0lBRWpCLGNGQVk7SUVDWixXQUFXO0lBQ1gsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljLXBhZ2VzL3J1bGVzL3J1bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICAkbGlnaHRwdXJwbGUtYmc6IHJnYmEoMTk5LCAzLCAxOTksIDAuMzQyKTtcbiAgXG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiByZ2IoMjIzLCAyMjEsIDIxMyk7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9ydWxlc19zaGFwZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAubWFpbiBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5tYWluIHVsIGxpIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY5ZTI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L21pbmlfc2t1bGwucG5nXCIpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiAjZmZlZWRmO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIG1hcmdpbjogMiU7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1haW4ge1xuICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvZ3JhcGhpY01hdC9ydWxlc19zaGFwZS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgdWwgeyBcbiAgICAgICAgbGl7IFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHN1Yi1vcmFuZ2U7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2dyYXBoaWNNYXQvbWluaV9za3VsbC5wbmcnKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgLy8gZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtb3JhbmdlO1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19 */");

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