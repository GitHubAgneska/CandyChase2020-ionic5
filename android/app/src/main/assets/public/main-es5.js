function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/age-select/age-select.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/age-select/age-select.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAgeSelectAgeSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"selectAge flexColCentered\">\n\n    <p>Select your age!</p>\n    <div *ngFor=\"let b of buttons\" (click)=\"selectAge(b.ageRange)\" class=\"btn-container\">\n      <button class=\"roundedOrangeButton\"> {{ b.age }} </button>\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"menu-container circlesImgBg flexRowCentered\">\n    <div class=\"menu-image-container\">\n      <img src=\"assets/graphicMat/menu_rules.png\" alt=\"menu-rules\" (click)=\"goToRules()\" />\n    </div>\n\n    <div class=\"menu-image-container\">\n      <div *ngIf=\"isPlaying;else newGame\">\n        <img src=\"assets/graphicMat/menu_resume.png\" alt=\"menu-play\"\n          (click)=\"continue()\" />\n      </div>\n      <ng-template #newGame>\n        <img src=\"assets/graphicMat/menu_play.png\" alt=\"menu-resume\" (click)=\"start()\" />\n      </ng-template>\n\n    </div>\n\n    <div class=\"menu-image-container\">\n      <img src=\"assets/graphicMat/menu_login.png\" alt=\"menu-login\" (click)=\"goToLogin()\" />\n    </div>\n\n    <div class=\"menu-image-container\">\n      <img src=\"assets/graphicMat/menu_about.png\" alt=\"menu-about\" (click)=\"goToAbout()\" />\n    </div>\n    <div class=\"menu-image-container\">\n      <img src=\"assets/graphicMat/menu_legal.png\" alt=\"menu-legal\" (click)=\"goToLegal()\" />\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/elements/modal-page/modal-page.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/elements/modal-page/modal-page.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedElementsModalPageModalPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  modal-page works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-page/welcome-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-page/welcome-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomePageWelcomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"elements-container\">\n    <div class=\"titles-container flexColCentered circlesImgBg\">\n      <img [src]=\"imgCandyTitle\" class=\"candyTitle\" alt=\"candy title\" />\n      <p>chase !</p>\n    </div>\n\n    <div class=\"startButton flexRowCentered roundedOrangeButton\" (click)=\"start()\">\n      <p>start!</p>\n    </div>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/age-select/age-select.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/age-select/age-select.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAgeSelectAgeSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.selectAge {\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.selectAge p {\n    color: #ffa500;\n    font-size: 2rem;\n    font-family: TitanOne; }\n\n.selectAge .btn-container {\n    width: 80%;\n    text-align: center; }\n\n.selectAge .btn-container button {\n      width: 80%;\n      height: 50px;\n      margin-top: 3%;\n      font-size: 2.5rem; }\n\n.selectAge .btn-container button:hover,\n      .selectAge .btn-container button :active {\n        color: #b1c9fb;\n        border: 3px solid #b1c9fb; }\n\n.scroll-content {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FnZS1zZWxlY3QvYWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL2FnZS1zZWxlY3QvYWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFrRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbEQ4Qzs7QUNmOUM7RUFDSSxhQUFhO0VBQ2Isb0NBQW9DLEVBQUE7O0FBRnhDO0lBS1EsY0ZTZTtJRVJmLGVGd0NXO0lFdkNYLHFCRnVEYSxFQUFBOztBRTlEckI7SUFVUSxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7O0FBWDFCO01BYVksVUFBVTtNQUNWLFlBQVk7TUFDWixjQUFjO01BQ2QsaUJBQWlCLEVBQUE7O0FBaEI3Qjs7UUFtQmdCLGNGREs7UUVFTCx5QkZGSyxFQUFBOztBRU9yQjtFQUNJLHdCQUF3QjtFQUN4QiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FnZS1zZWxlY3QvYWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgXG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLnNlbGVjdEFnZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxuICAuc2VsZWN0QWdlIHAge1xuICAgIGNvbG9yOiAjZmZhNTAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LWZhbWlseTogVGl0YW5PbmU7IH1cbiAgLnNlbGVjdEFnZSAuYnRuLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAuc2VsZWN0QWdlIC5idG4tY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTsgfVxuICAgICAgLnNlbGVjdEFnZSAuYnRuLWNvbnRhaW5lciBidXR0b246aG92ZXIsXG4gICAgICAuc2VsZWN0QWdlIC5idG4tY29udGFpbmVyIGJ1dHRvbiA6YWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNiMWM5ZmI7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNiMWM5ZmI7IH1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLnNlbGVjdEFnZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgZm9udC1zaXplOiAkcy1mb250U2l6ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICB9XG4gICAgLmJ0bi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICA6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tYmx1ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnNjcm9sbC1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/age-select/age-select.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/age-select/age-select.component.ts ***!
    \****************************************************/

  /*! exports provided: Button, AgeSelectComponent */

  /***/
  function srcAppAgeSelectAgeSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Button", function () {
      return Button;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgeSelectComponent", function () {
      return AgeSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/geoloc.service */
    "./src/app/shared/services/geoloc.service.ts");
    /* harmony import */


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");

    var Button = function Button() {
      _classCallCheck(this, Button);
    };

    var AgeSelectComponent = /*#__PURE__*/function () {
      function AgeSelectComponent(router, geolocService, userStatsService) {
        _classCallCheck(this, AgeSelectComponent);

        this.router = router;
        this.geolocService = geolocService;
        this.userStatsService = userStatsService;
        this.buttons = [{
          ageRange: 1,
          age: '3 - 6'
        }, {
          ageRange: 2,
          age: '7 - 9'
        }, {
          ageRange: 3,
          age: '10+'
        }];
      }

      _createClass(AgeSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectAge",
        value: function selectAge(ageRange) {
          this.userAgeRange = ageRange;
          console.log('user age= ', this.userAgeRange);
          this.userStatsService.setCurrentAgeRange(this.userAgeRange);
          this.geolocService.setAgeRange(this.userAgeRange); // this.geolocService.findAllowedDistance(this.userAgeRange);

          this.router.navigate(['/play']);
        }
      }]);

      return AgeSelectComponent;
    }();

    AgeSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__["GeolocService"]
      }, {
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"]
      }];
    };

    AgeSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-age-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./age-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/age-select/age-select.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./age-select.component.scss */
      "./src/app/age-select/age-select.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__["GeolocService"], _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"]])], AgeSelectComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome-page/welcome-page.component */
    "./src/app/welcome-page/welcome-page.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _age_select_age_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./age-select/age-select.component */
    "./src/app/age-select/age-select.component.ts");

    var routes = [{
      path: '',
      component: _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_3__["WelcomePageComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'start',
      component: _age_select_age_select_component__WEBPACK_IMPORTED_MODULE_5__["AgeSelectComponent"]
    }, {
      path: 'static',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | static-pages-static-pages-module */
        "static-pages-static-pages-module").then(__webpack_require__.bind(null,
        /*! ./static-pages/static-pages.module */
        "./src/app/static-pages/static-pages.module.ts")).then(function (m) {
          return m.StaticPagesModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js"); // import * as firebase from 'firebase/app';
    // import { firebaseConfig } from 'credentials';


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp(); // firebase.initializeApp(firebaseConfig);
        // firebase.analytics();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
            /*  Geolocation.getCurrentPosition().then((data) => {
                console.log('My latitude : ', data.coords.latitude);
                console.log('My longitude: ', data.coords.longitude);
              },
                err => {
                  alert('Error message : ' + err.message);
                }); */

          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _play_services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./play/services/http-error-handler.service */
    "./src/app/play/services/http-error-handler.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./welcome-page/welcome-page.component */
    "./src/app/welcome-page/welcome-page.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _age_select_age_select_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./age-select/age-select.component */
    "./src/app/age-select/age-select.component.ts");
    /* harmony import */


    var _play_services_message_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./play/services/message.service */
    "./src/app/play/services/message.service.ts"); // import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
    // import { CoreModule } from './core/core.module';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_17__["WelcomePageComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _age_select_age_select_component__WEBPACK_IMPORTED_MODULE_19__["AgeSelectComponent"]],
      entryComponents: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(), // AngularFireModule.initializeApp(environment.firebaseConfig),
      _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"]],
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _play_services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"], _play_services_message_service__WEBPACK_IMPORTED_MODULE_20__["MessageService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"]
      }, // Geolocation
      _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeGeocoder"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.menu-container {\n  margin-top: 4vh;\n  flex-wrap: wrap;\n  width: 90%;\n  /*     display: flex;\n    justify-content: center; */ }\n\n.menu-container .menu-image-container {\n    width: 120px; }\n\n.menu-container .menu-image-container img {\n      max-width: 100%; }\n\n.menu-container .menu-image-container img:active {\n        border: 3px solid #ffa500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFrRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbEQ4Qzs7QUNmOUM7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVM7RUFFYjs4QkRnQjhCLEVDZkM7O0FBTi9CO0lBU1EsWUFBWSxFQUFBOztBQVRwQjtNQVVjLGVBQWUsRUFBQTs7QUFWN0I7UUFZZ0IseUJGRU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgXG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLm1lbnUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNHZoO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiA5MCU7XG4gIC8qICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqLyB9XG4gIC5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMjBweDsgfVxuICAgIC5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTsgfVxuICAgICAgLm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLWNvbnRhaW5lciBpbWc6YWN0aXZlIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmYTUwMDsgfVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ubWVudS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6OTAlO1xuXG4vKiAgICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICAubWVudS1pbWFnZS1jb250YWluZXIge1xuXG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaW1nIHsgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRtYWluLW9yYW5nZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, userStatsService) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.userStatsService = userStatsService;
        this.userAgeRange = this.userStatsService.getCurrentAgeRange();
        this.isPlaying = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkIfOngoingGame();
        }
      }, {
        key: "checkIfOngoingGame",
        value: function checkIfOngoingGame() {
          console.log(this.userAgeRange);

          if (this.userAgeRange > 0) {
            this.isPlaying = true;
          }
        }
      }, {
        key: "start",
        value: function start() {
          this.router.navigate(['start']);
        }
      }, {
        key: "continue",
        value: function _continue() {
          this.router.navigate(['/play/backpack']);
        }
      }, {
        key: "goToRules",
        value: function goToRules() {
          this.router.navigate(['static/rules']);
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "goToLegal",
        value: function goToLegal() {
          this.router.navigate(['static/legal']);
        }
      }, {
        key: "goToAbout",
        value: function goToAbout() {
          this.router.navigate(['static/about']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/play/services/challenges-api.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/play/services/challenges-api.service.ts ***!
    \*********************************************************/

  /*! exports provided: ChallengesApiService */

  /***/
  function srcAppPlayServicesChallengesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengesApiService", function () {
      return ChallengesApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-error-handler.service */
    "./src/app/play/services/http-error-handler.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ChallengesApiService = /*#__PURE__*/function () {
      function ChallengesApiService(httpClient, httpErrorHandler) {
        _classCallCheck(this, ChallengesApiService);

        this.httpClient = httpClient;
        this.challengesListUrl = 'assets/challengesData.json';
        this.tricksListUrl = 'assets/tricksData.json';
        this.treatsListUrl = 'assets/treatsData.json';
        this.handleError = httpErrorHandler.createHandleError('ChallengesApiService');
      }

      _createClass(ChallengesApiService, [{
        key: "getTricksList",
        value: function getTricksList() {
          return this.httpClient.get(this.tricksListUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var rawApiResponseObject = data;
            var TricksListFromApi = rawApiResponseObject.tricks; // console.log('TricksListFromApi ==', TricksListFromApi); // (3) [{…}, {…}, {…}]

            return TricksListFromApi;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getChallengesList', [])) // then handle the error
          );
        }
      }, {
        key: "getTreatsList",
        value: function getTreatsList() {
          return this.httpClient.get(this.treatsListUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var rawApiResponseObject = data;
            var TreatsListFromApi = rawApiResponseObject.treats; // console.log('TreatsListFromApi ==', TreatsListFromApi); // (3) [{…}, {…}, {…}]

            return TreatsListFromApi;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getChallengesList', [])) // then handle the error
          );
        }
      }, {
        key: "getChallengesList",
        value: function getChallengesList() {
          return this.httpClient.get(this.challengesListUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var rawApiResponseObject = data;
            var challengesListFromApi = rawApiResponseObject;
            console.log('CHALLENGES LIST [0]==', challengesListFromApi[0]);
            return challengesListFromApi;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getChallengesList', [])) // then handle the error
          );
        }
      }]);

      return ChallengesApiService;
    }();

    ChallengesApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandler"]
      }];
    };

    ChallengesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _http_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandler"]])], ChallengesApiService);
    /***/
  },

  /***/
  "./src/app/play/services/http-error-handler.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/play/services/http-error-handler.service.ts ***!
    \*************************************************************/

  /*! exports provided: HttpErrorHandler */

  /***/
  function srcAppPlayServicesHttpErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function () {
      return HttpErrorHandler;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./message.service */
    "./src/app/play/services/message.service.ts");
    /** Handles HttpClient errors */


    var HttpErrorHandler = /*#__PURE__*/function () {
      function HttpErrorHandler(messageService) {
        var _this2 = this;

        _classCallCheck(this, HttpErrorHandler);

        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */

        this.createHandleError = function () {
          var serviceName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return function () {
            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return _this2.handleError(serviceName, operation, result);
          };
        };
      }
      /**
       * Returns a function that handles Http operation failures.
       * This error handler lets the app continue to run as if no error occurred.
       * @param serviceName = name of the data service that attempted the operation
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */


      _createClass(HttpErrorHandler, [{
        key: "handleError",
        value: function handleError() {
          var _this3 = this;

          var serviceName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'operation';
          var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            var message = error.error instanceof ErrorEvent ? error.error.message : "server returned code ".concat(error.status, " with body \"").concat(error.error, "\""); // TODO: better job of transforming error for user consumption

            _this3.messageService.add("".concat(serviceName, ": ").concat(operation, " failed: ").concat(message)); // Let the app keep running by returning a safe result.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }]);

      return HttpErrorHandler;
    }();

    HttpErrorHandler.ctorParameters = function () {
      return [{
        type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    HttpErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], HttpErrorHandler);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */
    // source: https://stackblitz.com/angular/jrlxnmobgoe?file=src%2Fapp%2Fmessage.service.ts

    /***/
  },

  /***/
  "./src/app/play/services/level-api.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/play/services/level-api.service.ts ***!
    \****************************************************/

  /*! exports provided: LevelApiService */

  /***/
  function srcAppPlayServicesLevelApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LevelApiService", function () {
      return LevelApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./http-error-handler.service */
    "./src/app/play/services/http-error-handler.service.ts");

    var LevelApiService = /*#__PURE__*/function () {
      function LevelApiService(httpClient, httpErrorHandler) {
        _classCallCheck(this, LevelApiService);

        this.httpClient = httpClient;
        this.levelListUrl = 'assets/levelsData.json';
        this.levelList = [];
        this.handleError = httpErrorHandler.createHandleError('LevelApiService');
      }

      _createClass(LevelApiService, [{
        key: "getLevelList",
        value: function getLevelList() {
          return this.httpClient.get(this.levelListUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var rawApiResponseObject = response;
            var levelsListFromApi = rawApiResponseObject;
            console.log('levellist 0==', levelsListFromApi[0]);
            return levelsListFromApi;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), // retry a failed request up to 3 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getLevelList', [])) // then handle the error
          );
        }
      }]);

      return LevelApiService;
    }();

    LevelApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]
      }];
    };

    LevelApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])], LevelApiService);
    /***/
  },

  /***/
  "./src/app/play/services/message.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/play/services/message.service.ts ***!
    \**************************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppPlayServicesMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MessageService = /*#__PURE__*/function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.messages = [];
      }

      _createClass(MessageService, [{
        key: "add",
        value: function add(message) {
          this.messages.push(message);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.messages = [];
        }
      }]);

      return MessageService;
    }();

    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MessageService);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */
    // source: https://stackblitz.com/angular/jrlxnmobgoe?file=src%2Fapp%2Fmessage.service.ts

    /***/
  },

  /***/
  "./src/app/shared/elements/modal-page/modal-page.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/elements/modal-page/modal-page.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedElementsModalPageModalPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lbGVtZW50cy9tb2RhbC1wYWdlL21vZGFsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/elements/modal-page/modal-page.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/elements/modal-page/modal-page.component.ts ***!
    \********************************************************************/

  /*! exports provided: ModalPageComponent */

  /***/
  function srcAppSharedElementsModalPageModalPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPageComponent", function () {
      return ModalPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalPageComponent = /*#__PURE__*/function () {
      function ModalPageComponent() {
        _classCallCheck(this, ModalPageComponent);
      }

      _createClass(ModalPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModalPageComponent;
    }();

    ModalPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/elements/modal-page/modal-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-page.component.scss */
      "./src/app/shared/elements/modal-page/modal-page.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ModalPageComponent);
    /***/
  },

  /***/
  "./src/app/shared/services/geoloc.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/geoloc.service.ts ***!
    \***************************************************/

  /*! exports provided: GeolocService */

  /***/
  function srcAppSharedServicesGeolocServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocService", function () {
      return GeolocService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");

    var GeolocService = /*#__PURE__*/function () {
      // ----------------
      function GeolocService(geolocation, nativeGeocoder) {
        _classCallCheck(this, GeolocService);

        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.coords = {}; // Geocoder configuration

        this.geoencoderOptions = {
          useLocale: true,
          maxResults: 5
        };
        this.currentLat = 0;
        this.currentLong = 0;
        this.coords = {
          lat: 0,
          "long": 0
        };
        this.allowedDistance = 0;
        this.mapBounds = [];
      }

      _createClass(GeolocService, [{
        key: "setGeo",
        value: function setGeo(geoloc) {
          this.geo = geoloc;
        }
      }, {
        key: "getGeo",
        value: function getGeo() {
          return this.geo;
        } // access /modify current user's age

      }, {
        key: "setAgeRange",
        value: function setAgeRange(age) {
          this.userAgeRange = age;
        }
      }, {
        key: "getAgeRange",
        value: function getAgeRange() {
          return this.userAgeRange;
        }
      }, {
        key: "findAllowedDistance",
        value: function findAllowedDistance(ageRange) {
          this.userAgeRange = ageRange;
          console.log('Age: ', this.userAgeRange);

          if (this.userAgeRange === 1) {
            this.allowedDistance = 300;
          } else {
            if (this.userAgeRange === 2) {
              this.allowedDistance = 500;
            } else {
              this.allowedDistance = 800;
            }
          }

          return this.allowedDistance;
        }
      }, {
        key: "getCurrentLocation",
        value: function getCurrentLocation() {
          var _this4 = this;

          this.geolocation.getCurrentPosition().then(function (data) {
            console.log('RAW DATA= ', data);

            _this4.setGeo(data);

            _this4.currentLat = data.coords.latitude;
            _this4.currentLong = data.coords.longitude; // this.coords = { lat: data.coords.latitude, long: data.coords.longitude };

            console.log('lat= ', _this4.currentLat, 'Long= ', _this4.currentLong);
            console.log('COORDS===', _this4.coords);
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
        } // calculate new coords for map age filter, using current coords and distance 'dist'
        // we need 4 points to delimit a perimeter of x meters around current position :
        // current pos(lat + distance , long + distance), pos(lat - distance, long - distance)

      }, {
        key: "calculateMapBounds",
        value: function calculateMapBounds(allowedDistance) {
          var earthRadius = 6378;
          this.allowedDistance = allowedDistance;
          console.log('CURRENT: ', this.currentLong, this.currentLat);
          var m = 1 / (2 * Math.PI / 360 * earthRadius) / 1000; // 1 meter in degree

          var newLatitude1 = this.currentLat + this.allowedDistance * m;
          var newLongitude1 = this.currentLong + this.allowedDistance * m / Math.cos(this.currentLat * (Math.PI / 180));
          console.log('new point 1 : ', newLatitude1, newLongitude1);
          var newLatitude2 = this.currentLat - this.allowedDistance * m;
          var newLongitude2 = this.currentLong - this.allowedDistance * m / Math.cos(this.currentLat * (Math.PI / 180));
          console.log('new point 1 : ', newLatitude2, newLongitude2);
          this.mapBounds = [newLatitude1, newLongitude1, newLatitude2, newLongitude2];
          console.log('BOUNDS= ', this.mapBounds);
          return this.mapBounds;
        }
      }, {
        key: "loadMapWithBounds",
        value: function loadMapWithBounds() {
          var _this5 = this;

          console.log('BOUNDS AT LOAD MAP = ', this.mapBounds);
          var corner1 = leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"](this.mapBounds[0], this.mapBounds[1]),
              corner2 = leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"](this.mapBounds[2], this.mapBounds[3]),
              bounds = leaflet__WEBPACK_IMPORTED_MODULE_3__["latLngBounds"](corner1, corner2); // initialize Leaflet

          this.map = leaflet__WEBPACK_IMPORTED_MODULE_3__["map"]('map');
          leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
          }).addTo(this.map);
          this.map.locate({
            setView: true,
            maxZoom: 16
          }).on('locationfound', function (e) {
            /* const radius = e.accuracy; */
            leaflet__WEBPACK_IMPORTED_MODULE_3__["marker"](e.latlng).addTo(_this5.map).bindPopup('You are here!').openPopup();
          }).on('locationerror', function (err) {
            alert(err.message);
          });
          this.addBounds(bounds);
        } // add bounds around current position on map

      }, {
        key: "addBounds",
        value: function addBounds(bounds) {
          var _this6 = this;

          this.geolocation.getCurrentPosition().then(function (res) {
            leaflet__WEBPACK_IMPORTED_MODULE_3__["rectangle"](bounds, {
              color: '#00000',
              weight: 1
            }).addTo(_this6.map);

            _this6.map.fitBounds(bounds);
          })["catch"](function (error) {
            console.log('Error getting bounds', error);
          });
        } // ------------------------------
        // for tests - issue map browser

      }, {
        key: "loadMapWithoutBounds",
        value: function loadMapWithoutBounds() {
          var _this7 = this;

          // this.coords = this.getCoords();
          this.map = leaflet__WEBPACK_IMPORTED_MODULE_3__["map"]('map');
          leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
          }).addTo(this.map);
          this.map.locate({
            setView: true,
            maxZoom: 18
          }).on('locationfound', function (e) {
            leaflet__WEBPACK_IMPORTED_MODULE_3__["marker"](e.latlng).addTo(_this7.map).bindPopup('You are here!').openPopup();
          }).on('locationerror', function (err) {
            alert(err.message);
          });
        }
      }]);

      return GeolocService;
    }();

    GeolocService.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]
      }];
    };

    GeolocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]])], GeolocService); // ------ GEOCODER -------
    // geocoder method to fetch address from coordinates passed as arguments

    /*   public getGeoencoder(latitude: number, longitude: number) {
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
          .then((result: NativeGeocoderResult[]) => {
            console.log(JSON.stringify(result[0]));
            this.address = this.generateAddress(result[0]);
            console.log(this.address);
          })
          .catch((error: any) => {
            alert('Error getting location' + JSON.stringify(error));
          });
      }
    
      // Return Comma separated address
      public generateAddress(addressObj: any) {
        const obj = [];
        let address = '';
        for (const key in addressObj) {
          if (addressObj) {
            obj.push(addressObj[key]);
          }
        }
        obj.reverse();
        for (const val in obj) {
          if (obj[val].length) {
            address += obj[val] + ', ';
          }
        }
        return address.slice(0, -2);
      } */
    // ---------

    /***/
  },

  /***/
  "./src/app/shared/services/user-stats.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/user-stats.service.ts ***!
    \*******************************************************/

  /*! exports provided: UserStatsService */

  /***/
  function srcAppSharedServicesUserStatsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStatsService", function () {
      return UserStatsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _play_services_level_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../play/services/level-api.service */
    "./src/app/play/services/level-api.service.ts");
    /* harmony import */


    var _play_services_challenges_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../play/services/challenges-api.service */
    "./src/app/play/services/challenges-api.service.ts"); // this service exists to :
    // keep track and update / calculate ALL USER STATS :
    // *current backpack content*
    // *current total points*
    // *current level*
    // *current set of cards*
    // *current set of challenges*
    // *current set of saved addresses*
    // => these infos will be available accross all components of the play module
    // ( maybe as a badge displayed on pages in a future feature)
    // ( + will determine a *level color theme* in a future feature )


    var UserStatsService = /*#__PURE__*/function () {
      function UserStatsService(levelApiService, challengesApiService) {
        var _this8 = this;

        _classCallCheck(this, UserStatsService);

        this.levelApiService = levelApiService;
        this.challengesApiService = challengesApiService;
        this.card = {
          cardName: '',
          cardImg: ''
        };
        this.allCards = []; // keep track of candy list in backpack --

        this.backpackContent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]); // keep track of candy total --

        this.totalCandyInBackpack$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0); // keep track of total points --

        this.totalPoints$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0); // keep track of current level --  whole object

        this.currentLevel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.currentLevel);
        this.currentLevelName$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('1');
        this.userStatsBehavior$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({}); // keep track of saved addresses list

        this.savedAddressesBehavior$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.userAgeRange = 0;
        this.itemsInBackpack = [];
        this.totalCandy = 0;
        this.totalPoints = 0;
        this.candyItem = {
          _id: '',
          product_name: '',
          amountInBackpack: 0
        };
        this.levelApiService.getLevelList().subscribe(function (data) {
          _this8.levels = data;
          _this8.currentLevel = _this8.levels[0];
          _this8.nextLevel = _this8.levels[1];
          _this8.currentLevel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_this8.currentLevel);
          _this8.currentLevelName$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('1');
        });
      } // ageRange ---------------------------------------------------


      _createClass(UserStatsService, [{
        key: "setCurrentAgeRange",
        value: function setCurrentAgeRange(age) {
          this.userAgeRange = age;
        }
      }, {
        key: "getCurrentAgeRange",
        value: function getCurrentAgeRange() {
          return this.userAgeRange;
        } // backpack content -------------------------------------------
        // get current list of candy in backpack

      }, {
        key: "getCurrentBackpackContent",
        value: function getCurrentBackpackContent() {
          return this.backpackContent$.asObservable();
        } // update backpack

      }, {
        key: "update_backpackContent",
        value: function update_backpackContent(itemsInBackpack) {
          this.backpackContent$.next(itemsInBackpack);
        } // get current amount of candy in backpack

      }, {
        key: "getCurrentBackpackCount",
        value: function getCurrentBackpackCount() {
          return this.totalCandyInBackpack$.asObservable();
        } // update total candy

      }, {
        key: "update_totalCandyCount",
        value: function update_totalCandyCount(totalCandy) {
          this.totalCandyInBackpack$.next(totalCandy);
        } // total points -------------------------------------------------
        // get current total points

      }, {
        key: "getCurrentTotalPoints",
        value: function getCurrentTotalPoints() {
          return this.totalPoints$.asObservable();
        } // update total points

      }, {
        key: "update_totalPoints",
        value: function update_totalPoints(totalPoints) {
          this.totalPoints$.next(totalPoints);
          this.setCurrentLevel(totalPoints);
        } // level ---------------------------------------------------------
        // get level list from api (json atm)

      }, {
        key: "retrieveLevelList",
        value: function retrieveLevelList() {
          return this.levels;
        }
      }, {
        key: "setCurrentLevel",
        value: function setCurrentLevel(totalPoints) {
          this.levels = this.retrieveLevelList();

          if (totalPoints > 30 && totalPoints < 60) {
            this.currentLevel = this.levels[1];
            this.currentLevel.isActive = true;
            this.levels[2].isNext = true;
          } else if (totalPoints >= 60 && totalPoints < 120) {
            this.currentLevel = this.levels[2];
            this.currentLevel.isActive = true;
            this.nextLevel = this.levels[3];
          } else if (totalPoints >= 120 && totalPoints < 180) {
            this.currentLevel = this.levels[3];
            this.currentLevel.isActive = true;
            this.nextLevel = this.levels[4];
          } else if (totalPoints >= 180 && totalPoints < 240) {
            this.currentLevel = this.levels[4];
            this.currentLevel.isActive = true;
            this.nextLevel = this.levels[5];
          } else if (totalPoints > 240) {
            this.currentLevel = this.levels[5];
            this.currentLevel.isActive = true;
            this.nextLevel = this.levels[6];
          } else {
            this.currentLevel = this.levels[0];
            this.currentLevel.isActive = true;
            this.nextLevel = this.levels[1];
          }

          this.update_level(this.currentLevel);
          this.update_levelName(this.currentLevel.levelName);
          return this.currentLevel;
        } // update current level

      }, {
        key: "update_level",
        value: function update_level(level) {
          // this.currentLevel$.next({idLevel: 0, levelName: '', levelImg: '', levelCard: '', isActive: true});
          console.log('update_level triggered');
          this.currentLevel$.next(level);
        } // get current level

      }, {
        key: "getCurrentLevel",
        value: function getCurrentLevel() {
          return this.currentLevel$.asObservable();
        }
      }, {
        key: "update_levelName",
        value: function update_levelName(name) {
          console.log('update levelname triggered');
          this.currentLevelName$.next(name);
        }
      }, {
        key: "getCurrentLevelName",
        value: function getCurrentLevelName() {
          return this.currentLevelName$.asObservable();
        } // cards ---------------------------------------------------------

      }, {
        key: "displayAllCardsWithState",
        value: function displayAllCardsWithState(currentLevel) {
          var _this9 = this;

          // this.levels = this.retrieveLevelList();
          this.levels.map(function (item) {
            if (item === currentLevel || item === _this9.nextLevel) {
              item.isActive = true;
            } else {
              item.isActive = false;
            }
          });
          return this.levels;
          /*  this.levels.forEach(item => {
              return (this.allCards.push( { key: item.levelCard, value: item.isActive }));
            });
            return this.allCards; */
        } // challenges ---------------------------------------------------------
        // saved addresses ---------------------------------------------------------

      }, {
        key: "getCurrentAddressesList",
        value: function getCurrentAddressesList() {
          return this.savedAddressesBehavior$.asObservable;
        }
      }, {
        key: "updateCurrentAddressesList",
        value: function updateCurrentAddressesList(address) {
          this.savedAddressesBehavior$.next(address);
        }
      }]);

      return UserStatsService;
    }();

    UserStatsService.ctorParameters = function () {
      return [{
        type: _play_services_level_api_service__WEBPACK_IMPORTED_MODULE_3__["LevelApiService"]
      }, {
        type: _play_services_challenges_api_service__WEBPACK_IMPORTED_MODULE_4__["ChallengesApiService"]
      }];
    };

    UserStatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_play_services_level_api_service__WEBPACK_IMPORTED_MODULE_3__["LevelApiService"], _play_services_challenges_api_service__WEBPACK_IMPORTED_MODULE_4__["ChallengesApiService"]])], UserStatsService);
    /* ------------------------------------------------------------------------------
      Method to count points depending on specific criteria, e.g candy item weight
        public setTotalPoints() {
          this.itemsInBackpack$ = this.getCurrentBackpackContent();
          this.itemsInBackpack$.forEach( item => {
            if ( item.serving_size ) { ... })
    } => not implementable atm for api data = not consistent enough */
    // => For now total points will be count as 6 points per candy item
    //  ------------------------------------------------------------------------------

    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _elements_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./elements/modal-page/modal-page.component */
    "./src/app/shared/elements/modal-page/modal-page.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_elements_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_5__["ModalPageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/welcome-page/welcome-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/welcome-page/welcome-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomePageWelcomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.elements-container {\n  display: flex;\n  flex-direction: column; }\n\n.elements-container .titles-container {\n    width: 75%;\n    /* height: 50vh; */\n    margin: 3rem auto; }\n\n.elements-container .titles-container .candyTitle {\n      margin-top: 20%; }\n\n.elements-container .titles-container p {\n      margin-top: 0px;\n      font-family: flyingleather;\n      font-size: 5rem;\n      color: #ffa500;\n      opacity: 0.8;\n      transform: scale(1, 1.2);\n      -webkit-transform: scale(1, 1.2);\n      /* Safari and Chrome */\n      -moz-transform: scale(1, 1.2);\n      /* Firefox */\n      -ms-transform: scale(1, 1.2);\n      /* IE 9+ */\n      -o-transform: scale(1, 1.2);\n      /* Opera */ }\n\n.elements-container .startButton {\n    width: 80%;\n    margin: auto;\n    font-size: 2rem;\n    text-transform: uppercase;\n    letter-spacing: 1rem; }\n\n.elements-container .startButton p {\n      padding: 5%;\n      margin: 0; }\n\n@media (min-width: 568px) and (max-width: 767px) {\n    .elements-container .titles-container {\n      width: 50%;\n      margin: 1rem auto; }\n      .elements-container .titles-container p {\n        font-size: 3rem; }\n    .elements-container .startButton {\n      width: 55%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUtcGFnZS93ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC93ZWxjb21lLXBhZ2Uvd2VsY29tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUE7O2tDQ0RrQyxFREdDOztBQWtEakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NsRDhDOztBQ2Y5QztFQUNJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFGMUI7SUFLUSxVQUFVO0lBQ1Ysa0JBQUE7SUFDQSxpQkFBaUIsRUFBQTs7QUFQekI7TUFVWSxlQUFlLEVBQUE7O0FBVjNCO01BZVksZUFBZTtNQUNmLDBCRnlDbUI7TUV4Q25CLGVGZ0NRO01FL0JSLGNGSlc7TUVNWCxZQUFZO01BRVosd0JBQXdCO01BQ3hCLGdDQUFnQztNQUFFLHNCQUFBO01BQ2xDLDZCQUE2QjtNQUFFLFlBQUE7TUFDL0IsNEJBQTRCO01BQUUsVUFBQTtNQUM5QiwyQkFBMkI7TUFBRSxVQUFBLEVBQVc7O0FBMUJwRDtJQThCUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsb0JBQW9CLEVBQUE7O0FBbEM1QjtNQW9DWSxXQUFXO01BQ1gsU0FBUyxFQUFBOztBQUlqQjtJQXpDSjtNQTRDWSxVQUFVO01BQ1YsaUJBQWlCLEVBQUE7TUE3QzdCO1FBK0NnQixlRkNHLEVBQUE7SUVoRG5CO01BbURZLFVBQVUsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS1wYWdlL3dlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgXG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLmVsZW1lbnRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLmVsZW1lbnRzLWNvbnRhaW5lciAudGl0bGVzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICAvKiBoZWlnaHQ6IDUwdmg7ICovXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87IH1cbiAgICAuZWxlbWVudHMtY29udGFpbmVyIC50aXRsZXMtY29udGFpbmVyIC5jYW5keVRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwJTsgfVxuICAgIC5lbGVtZW50cy1jb250YWluZXIgLnRpdGxlcy1jb250YWluZXIgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgIGNvbG9yOiAjZmZhNTAwO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAvKiBGaXJlZm94ICovXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgLyogSUUgOSsgKi9cbiAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgIC8qIE9wZXJhICovIH1cbiAgLmVsZW1lbnRzLWNvbnRhaW5lciAuc3RhcnRCdXR0b24ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcmVtOyB9XG4gICAgLmVsZW1lbnRzLWNvbnRhaW5lciAuc3RhcnRCdXR0b24gcCB7XG4gICAgICBwYWRkaW5nOiA1JTtcbiAgICAgIG1hcmdpbjogMDsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5lbGVtZW50cy1jb250YWluZXIgLnRpdGxlcy1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvOyB9XG4gICAgICAuZWxlbWVudHMtY29udGFpbmVyIC50aXRsZXMtY29udGFpbmVyIHAge1xuICAgICAgICBmb250LXNpemU6IDNyZW07IH1cbiAgICAuZWxlbWVudHMtY29udGFpbmVyIC5zdGFydEJ1dHRvbiB7XG4gICAgICB3aWR0aDogNTUlOyB9IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLmVsZW1lbnRzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnRpdGxlcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAvKiBoZWlnaHQ6IDUwdmg7ICovXG4gICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xuXG4gICAgICAgIC5jYW5keVRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICdjaGFzZScgdGl0bGVcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZseWluZ2xlYXRoZXI7XG4gICAgICAgICAgICBmb250LXNpemU6ICR4bC1mb250U2l6ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1vcmFuZ2U7XG4gICAgICAgICAgICAvLyB0ZXh0LXNoYWRvdzogMCA1cHggMTBweCAjMDAwMDAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgLy8gc2xpZ2h0IGZvbnQgdHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIElFIDkrICovXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIE9wZXJhICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN0YXJ0QnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcmVtO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGV4Y2VwdGlvbiBsYW5kc2NhcGUgbW9iaWxlXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgICAgICAudGl0bGVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRsLWZvbnRTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdGFydEJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/welcome-page/welcome-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/welcome-page/welcome-page.component.ts ***!
    \********************************************************/

  /*! exports provided: WelcomePageComponent */

  /***/
  function srcAppWelcomePageWelcomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function () {
      return WelcomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WelcomePageComponent = /*#__PURE__*/function () {
      function WelcomePageComponent(router) {
        _classCallCheck(this, WelcomePageComponent);

        this.router = router;
        this.imgCandyTitle = 'assets/graphicMat/title_candy.png';
      }

      _createClass(WelcomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "start",
        value: function start() {
          this.router.navigate(['/home']);
        }
      }]);

      return WelcomePageComponent;
    }();

    WelcomePageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WelcomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-page/welcome-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome-page.component.scss */
      "./src/app/welcome-page/welcome-page.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WelcomePageComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyBsz0Xdf7cJffF-WfK-r2SIgN4GE04MPNU',
        authDomain: 'candychase2020-ionic5.firebaseapp.com',
        databaseURL: 'https://candychase2020-ionic5.firebaseio.com',
        projectId: 'candychase2020-ionic5',
        storageBucket: 'candychase2020-ionic5.appspot.com',
        messagingSenderId: '743398085439'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020Ionic5/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map