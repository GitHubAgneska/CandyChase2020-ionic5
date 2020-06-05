function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-play-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayAddressesAddressesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center>Your addresses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"addressesPage-container\">\n\n  <div class=\"map-sample\">\n    <img src=\"assets/graphicMat/map_sample.png\" alt=\"\" />\n  </div>\n\n  <div class=\"address-list-container\">\n    <h5></h5>\n    <div class=\"address-item\">\n      <h6></h6>\n    </div>\n    <img src=\"assets/graphicMat/haunted_house.png\" alt=\"\" />\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/backpack/backpack.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/backpack/backpack.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayBackpackBackpackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Backpack</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"backpack-elements-container flexColCentered\">\n    <div class=\"bag-illust circlesImgBg\">\n      <img src=\"assets/graphicMat/candyBag.png\" alt=\"\" />\n\n      <div class=\"total flexColCentered\">\n        <h2>Total candy : {{ totalCandy }}</h2>\n        <h2>Total points : {{ totalPoints }}</h2>\n      </div>\n    </div>\n\n    <!-- <div class=\"cornCandy-container\">\n      <ng-container *ngFor=\"let i of [].constructor(8)\">\n        <img src=\"assets/graphicMat/corn_candy.png\" alt=\"\" />\n      </ng-container>\n    </div> -->\n\n    <!-- TO DO ? : get level (banner) at init --\n      <div class=\"current-level\">\n          <h2>Current level</h2>\n          <h2>{{levelName}}</h2>\n      </div> -->\n    <div *ngIf=\"collectedCandy.length > 0;else noCandyYetBlock\">\n      <div *ngFor=\"let item of collectedCandy\" class=\"myCollectedCandy\">\n        <div class=\"candyItem\">\n          <div class=\"candyThumbnail\">\n            <img src=\"{{item.image_front_url}}\">\n          </div>\n          <div class=\"candyName\">\n            <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n            <h1>{{ item.product_name | shortenString:30 }}</h1>\n            <button (click)=\"seeCandyInfos(item._id)\">see infos</button>\n          </div>\n          <div class=\"amount\">\n            <h1>{{ item.amountInBackpack }}</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #noCandyYetBlock>\n    <div class=\"noCandyYet\">\n      <!-- <h1>No candy yet !</h1> -->\n      <img [src]=\"ghostBubble\" alt=\"no candy bubble\" />\n      <img [src]=\"ghostImg\" alt=\"little ghost\" />\n    </div>\n  </ng-template>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-details/candy-details.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-details/candy-details.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayCandyDetailsCandyDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Candy Infos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"candyDetailsPage\" *ngIf=\"candyItem\">\n\n    <div class=\"candyItemTitle flexRowCentered\">\n      <div class=\"candyThumbnail\">\n        <img src=\"{{ candyItem.image_front_url }}\">\n      </div>\n      <div>\n        <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n      </div>\n    </div>\n\n    <ion-row class=\"candy-checklist\">\n      <ion-col>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"organic;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Organic\n        </ion-row>\n\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"additives;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Additives\n        </ion-row>\n      </ion-col>\n\n      <ion-col>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"glutenFree;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Gluten free\n        </ion-row>\n\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"vegan;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegan\n        </ion-row>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"vegetarian;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegetarian\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"rubriks\">\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleIngredients()\">\n          <h1>Ingredients hierarchy</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div class=\"candyIngredients\" *ngIf=\"showIngredients\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.ingredients_tags\">\n              <td>\n                {{ i | removeChars | removeUnderscore }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleNutriscore()\">\n          <h1>Nutriscore</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div class=\"candyNutriscore\" *ngIf=\"showNutriscore\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.nutriscore_data | keyvalue\">\n              <td>\n                {{ i.key | removeUnderscore }}\n              </td>\n              <td>\n                {{ i.value }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleAllergens()\">\n          <h1>Allergens</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div class=\"candyAllergens\" *ngIf=\"showAllergens\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.allergens_hierarchy\">\n              <td>\n                {{ i | removeChars }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayCandyListCandyListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Candy to find</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"candyPageContainer\">\n  <div class=\"add-label flexRowCentered \">\n    <ion-searchbar animated class=\"custom-searchbar\"></ion-searchbar>\n    <img src=\"assets/graphicMat/bubble_add2.png\" alt=\"\" />\n  </div>\n  <!-- TODO:  create reusable loading block (shared module) + 'else block' -->\n  <div *ngIf=\"loading\" class=\"loading\">loading...</div> \n\n  <div *ngFor=\"let candyItem of candyList\" class=\"candyList\">\n    <div class=\"candyItem\">\n      <div class=\"candyThumbnail\">\n        <img src=\"{{candyItem.image_front_url}}\">\n      </div>\n      <div class=\"candyName\">\n        <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n        <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n      </div>\n      <div class=\"plus-btn\">\n        <!-- <button (click)=\"sendId(candyItem._id)\"> -->\n        <button (click)=\"addCandyToBackpack(candyItem)\">\n          <img src=\"assets/graphicMat/zoomIn.png\" alt=\"plus-button\"/>\n        </button>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayChallengesChallengesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <!--  <ion-title text-center class=\"toolbarTitle\">Trick or treat</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"special-bg\">\n\n  <div class=\"main-container\">\n\n    <div class=\"upper-row\">\n      <h1>You Chose<br><span>{{ choice }}</span></h1>\n    </div>\n  \n    <div class=\"main-row\">\n      <h1>Your challenge:</h1>\n      <p>{{ challengeDescription }}</p>\n    </div>\n  \n    <div class=\"bottom-row\">\n      <img src=\"{{ candleSkullImg }}\" alt=\"candle-skull\" />\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/map/map.component.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/map/map.component.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">\n      Your map\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"mapContainer\">\n    <div id=\"map\"></div>\n  </div>\n  <div class=\"options-container\">\n    <!-- <button (click)=\"see()\">pull</button> -->\n    <div class=\"saveLocationBtnContainer\">\n      <button class=\"flexRowCentered\" (click)=\"saveAddress()\">\n        <img [src]=\"heartIcon\" alt=\"heartIcon\" />\n        Save this address to favorites !\n      </button>\n    </div>\n  </div>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/trick-or-treat/trick-or-treat.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/trick-or-treat/trick-or-treat.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayTrickOrTreatTrickOrTreatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Trick or treat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"special-bg\">\n\n  <div class=\"main-container flexColCentered\">\n\n    <div class=\"upper-row flexRowCentered\" (click)=\"choseTreat()\">\n      <h1>Choose<br><span>treat!</span></h1>\n      <img src=\"{{candyImg }}\" alt=\"candy\" />\n    </div>\n  \n    <div class=\"main-row flexRowCentered\">\n      <img src=\"{{ treatOrTrickImg }}\" alt=\"treatOrTrick\" />\n    </div>\n  \n    <div class=\"bottom-row flexRowCentered\" (click)=\"choseTrick()\">\n      <img src=\"{{ witchHatImg }}\" alt=\"witch-hat\" />\n      <h1>Choose<br><span>trick!</span></h1>\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/user-stats/user-stats.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/user-stats/user-stats.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayUserStatsUserStatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">My stats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"stats-container\" style=\"background-image: '{{ currentLevel.levelImg }}'\">\n<!--   <div *ngFor=\"let stat of userStats\" class=\"stats-container\" style=\"background-image: '{{ currentLevel.levelImg }}'\">\n -->\n    <div class=\"item-level\">\n      <h1>Current Level</h1>\n      <h2>{{ currentLevel.levelName }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Total Points</h1>\n      <h2>{{ totalPoints }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Total Candy</h1>\n      <h2>{{ candyCount }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Saved Addresses</h1>\n      <!-- <h2>{{ savedAddresses }}</h2> -->\n    </div>\n\n    <div class=\"item\">\n      <h1>Challenges</h1>\n      <!-- <h2>{{ challenges }}</h2> -->\n    </div>\n  </div>\n\n\n  <div class=\"bottom-cards-container\">\n    <div class=\"cardsList flexRowCentered\">\n      <div *ngFor=\"let item of collectedCards\">\n        <div class=\"card-container flexColCentered\">\n          <div *ngIf=\"cardIsNext\" class=\"bubbleNext\">\n<!--        <h2>Next mission:<br>Get the <span>{{ nextLevel.levelCardName }} !</span></h2> -->          </div>\n          <div class=\"card-img-container container-fluid\">\n            <img src=\"{{ item }}\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/play/addresses/addresses.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/play/addresses/addresses.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayAddressesAddressesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".addressesPage-container .map-sample {\n  height: 5vh; }\n\n.addressesPage-container .address-list-container {\n  height: 15vh;\n  background-color: #22222b;\n  color: #b2caf8; }\n\n.addressesPage-container .address-list-container .address-item {\n    background-color: #b2caf8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFdBQVcsRUFBQTs7QUFGbkI7RUFLUSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFQdEI7SUFTWSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzZXNQYWdlLWNvbnRhaW5lciB7XG4gICAgLm1hcC1zYW1wbGUge1xuICAgICAgICBoZWlnaHQ6IDV2aDtcbiAgICB9XG4gICAgLmFkZHJlc3MtbGlzdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMmI7XG4gICAgICAgIGNvbG9yOiAjYjJjYWY4O1xuICAgICAgICAuYWRkcmVzcy1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmNhZjg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/play/addresses/addresses.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/play/addresses/addresses.component.ts ***!
    \*******************************************************/

  /*! exports provided: AddressesComponent */

  /***/
  function srcAppPlayAddressesAddressesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressesComponent", function () {
      return AddressesComponent;
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


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");

    var AddressesComponent = /*#__PURE__*/function () {
      function AddressesComponent(userStatsService) {
        _classCallCheck(this, AddressesComponent);

        this.userStatsService = userStatsService;
      }

      _createClass(AddressesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initAddressList();
        }
      }, {
        key: "initAddressList",
        value: function initAddressList() {// this.addressList$ = this.userStatsService.getCurrentAddressesList();
        }
      }]);

      return AddressesComponent;
    }();

    AddressesComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"]
      }];
    };

    AddressesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addresses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addresses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addresses.component.scss */
      "./src/app/play/addresses/addresses.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"]])], AddressesComponent);
    /***/
  },

  /***/
  "./src/app/play/backpack/backpack.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/play/backpack/backpack.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayBackpackBackpackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.backpack-elements-container {\n  margin: 5% 10%; }\n\n.backpack-elements-container .bag-illust {\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap; }\n\n.backpack-elements-container .bag-illust img {\n      width: 40%; }\n\n.backpack-elements-container .total {\n    align-items: flex-start; }\n\n.backpack-elements-container .total h2 {\n      text-align: center;\n      text-transform: uppercase;\n      font-size: 1rem;\n      font-family: TitanOne; }\n\n.backpack-elements-container .total h2:first-child {\n      color: #ffa500; }\n\n.backpack-elements-container .total h2:nth-child(2) {\n      color: #ffc0cb; }\n\n.backpack-elements-container .myCollectedCandy {\n    width: 100%; }\n\n.backpack-elements-container .myCollectedCandy .candyItem {\n      padding: 3%;\n      margin: 3%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      border: 2px solid #b1c9fb;\n      border-radius: 50px; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyThumbnail {\n        height: 3rem;\n        width: 3rem;\n        min-width: 3rem;\n        background-color: pink;\n        align-content: center;\n        align-items: center;\n        overflow: hidden;\n        border-radius: 50%; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName {\n        max-width: 60%;\n        text-align: center;\n        display: flex;\n        flex-direction: column; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName h1 {\n          font-family: TitanOne;\n          color: #b1c9fb;\n          font-size: 0.7rem;\n          text-transform: uppercase;\n          transform: scale(1, 1.2);\n          -webkit-transform: scale(1, 1.2);\n          /* Safari and Chrome */\n          -moz-transform: scale(1, 1.2);\n          /* Firefox */\n          -ms-transform: scale(1, 1.2);\n          /* IE 9+ */\n          -o-transform: scale(1, 1.2);\n          /* Opera */ }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName button {\n          color: #ffa500;\n          border: 1px solid #ffa500;\n          font-family: TitanOne;\n          background-color: transparent; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .amount > h1 {\n        width: 50px;\n        height: 1.5rem;\n        font-family: TitanOne;\n        color: #fbb1f1;\n        font-size: 1rem;\n        text-transform: uppercase; }\n\n.noCandyYet {\n  margin-top: 5%;\n  text-align: center;\n  /*          background-image: url(\"src/assets/graphicMat/lightning.png\");\n            background-size: cover;\n            background-position: center; */ }\n\n.noCandyYet img:first-child {\n    max-width: 10rem;\n    float: right; }\n\n.noCandyYet img:nth-child(2) {\n    height: 15rem; }\n\n.noCandyYet h1 {\n    font-family: TitanOne;\n    color: #fbb1f1;\n    font-size: 1rem;\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvYmFja3BhY2svYmFja3BhY2suY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC9wbGF5L2JhY2twYWNrL2JhY2twYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUE7O2tDQ0ZrQyxFRElDOztBQW9EakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NyRDhDOztBQ2Y5QztFQUVJLGNBQWMsRUFBQTs7QUFGbEI7SUFLUSxXQUFXO0lBRVgsYUFBYTtJQUNiLHFCQUFxQixFQUFBOztBQVI3QjtNQVVZLFVBQVUsRUFBQTs7QUFWdEI7SUFjUSx1QkFBdUIsRUFBQTs7QUFkL0I7TUFnQlksa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YscUJGOENTLEVBQUE7O0FFakVyQjtNQXNCWSxjRkpXLEVBQUE7O0FFbEJ2QjtNQXlCWSxjRkRTLEVBQUE7O0FFeEJyQjtJQTZCUSxXQUFXLEVBQUE7O0FBN0JuQjtNQWdDWSxXQUFXO01BQ1gsVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsbUJBQW1CLEVBQUE7O0FBdkMvQjtRQTBDZ0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBOztBQWpEbEM7UUFvRGdCLGNBQWM7UUFFZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHNCQUFzQixFQUFBOztBQXhEdEM7VUEwRG9CLHFCRk9DO1VFTkQsY0ZyQ0M7VUVzQ0QsaUJBQWlCO1VBQ2pCLHlCQUF5QjtVQUN6Qix3QkFBd0I7VUFDeEIsZ0NBQWdDO1VBQUUsc0JBQUE7VUFDbEMsNkJBQTZCO1VBQUUsWUFBQTtVQUMvQiw0QkFBNEI7VUFBRSxVQUFBO1VBQzlCLDJCQUEyQjtVQUFFLFVBQUEsRUFBVzs7QUFsRTVEO1VBcUVvQixjRm5ERztVRW9ESCx5QkZwREc7VUVxREgscUJGTkM7VUVPRCw2QkFBNkIsRUFBQTs7QUF4RWpEO1FBNEVnQixXQUFXO1FBQ1gsY0FBYztRQUNkLHFCRmJLO1FFY0wsY0Z0REs7UUV1REwsZUFBZTtRQUNmLHlCQUF5QixFQUFBOztBQUtqQztFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDOUI7OzBDREcwQyxFQ0RDOztBQUxuQztJQU9RLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBUnBCO0lBV1EsYUFBWSxFQUFBOztBQVhwQjtJQWNRLHFCRm5DSztJRW9DTCxjRjVFSztJRTZFTCxlQUFlO0lBQ2YseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5L2JhY2twYWNrL2JhY2twYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuXG5cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNSUgMTAlOyB9XG4gIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLmJhZy1pbGx1c3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwOyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAuYmFnLWlsbHVzdCBpbWcge1xuICAgICAgd2lkdGg6IDQwJTsgfVxuICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC50b3RhbCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cbiAgICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC50b3RhbCBoMiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lOyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwgaDI6Zmlyc3QtY2hpbGQge1xuICAgICAgY29sb3I6ICNmZmE1MDA7IH1cbiAgICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC50b3RhbCBoMjpudGgtY2hpbGQoMikge1xuICAgICAgY29sb3I6ICNmZmMwY2I7IH1cbiAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSB7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC5teUNvbGxlY3RlZENhbmR5IC5jYW5keUl0ZW0ge1xuICAgICAgcGFkZGluZzogMyU7XG4gICAgICBtYXJnaW46IDMlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2IxYzlmYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuY2FuZHlUaHVtYm5haWwge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4gICAgICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC5teUNvbGxlY3RlZENhbmR5IC5jYW5keUl0ZW0gLmNhbmR5TmFtZSB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAgICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgIC8qIEZpcmVmb3ggKi9cbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgIC8qIElFIDkrICovXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgIC8qIE9wZXJhICovIH1cbiAgICAgICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIC5jYW5keU5hbWUgYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogI2ZmYTUwMDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZhNTAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIC5hbW91bnQgPiBoMSB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgICBjb2xvcjogI2ZiYjFmMTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5ub0NhbmR5WWV0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2xpZ2h0bmluZy5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqLyB9XG4gIC5ub0NhbmR5WWV0IGltZzpmaXJzdC1jaGlsZCB7XG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgICBmbG9hdDogcmlnaHQ7IH1cbiAgLm5vQ2FuZHlZZXQgaW1nOm50aC1jaGlsZCgyKSB7XG4gICAgaGVpZ2h0OiAxNXJlbTsgfVxuICAubm9DYW5keVlldCBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgIGNvbG9yOiAjZmJiMWYxO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIge1xuXG4gICAgbWFyZ2luOiA1JSAxMCU7XG5cbiAgICAuYmFnLWlsbHVzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBwb3NpdGlvbjogc3RpY2t5OyA9PiBub3Qgd29ya2luZyA6IHRvIGNoZWNrXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRvdGFsIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICB9XG4gICAgICAgIGgyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1vcmFuZ2U7XG4gICAgICAgIH1cbiAgICAgICAgaDI6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1waW5rO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5teUNvbGxlY3RlZENhbmR5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmNhbmR5SXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgIG1hcmdpbjogMyU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYjFjOWZiO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAgICAgICAgICAgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FuZHlOYW1lIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRtYWluLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogRmlyZWZveCAqL1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBJRSA5KyAqL1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIE9wZXJhICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtYWluLW9yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFtb3VudCA+IGgxIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkc3ViLXBpbms7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4gICAgICAgIC5ub0NhbmR5WWV0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLyogICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2xpZ2h0bmluZy5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xuICAgICAgICAgICAgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZzpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGhlaWdodDoxNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkc3ViLXBpbms7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/play/backpack/backpack.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/play/backpack/backpack.component.ts ***!
    \*****************************************************/

  /*! exports provided: BackpackComponent */

  /***/
  function srcAppPlayBackpackBackpackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackpackComponent", function () {
      return BackpackComponent;
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
    /*! ../../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");

    var BackpackComponent = /*#__PURE__*/function () {
      function BackpackComponent(userStatsService, router) {
        _classCallCheck(this, BackpackComponent);

        this.userStatsService = userStatsService;
        this.router = router; // public noCandyYet: boolean;

        this.ghostImg = 'assets/graphicMat/ghost_2.png';
        this.ghostBubble = 'assets/graphicMat/noCandyYet_bubble.png';
        this.totalCandy = 0; // this.noCandyYet = false;
      }

      _createClass(BackpackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // retrieve all candy items
          this.setBackpack();
          this.setStats();
        }
      }, {
        key: "setBackpack",
        value: function setBackpack() {
          var _this = this;

          this.userStatsService.getCurrentBackpackContent().subscribe(function (data) {
            _this.collectedCandy = data;
          });
          console.log('COLLECTED CANDY RETRIEVED ON INIT: ', this.collectedCandy);
        }
      }, {
        key: "setStats",
        value: function setStats() {
          var _this2 = this;

          this.userStatsService.getCurrentBackpackCount().subscribe(function (data) {
            return _this2.totalCandy = data;
          });
          this.userStatsService.getCurrentTotalPoints().subscribe(function (data) {
            return _this2.totalPoints = data;
          });
        }
      }, {
        key: "seeCandyInfos",
        value: function seeCandyInfos(id) {
          this.candyId = id;
          console.log('candy id= ', this.candyId);
          this.router.navigate(['play/candyDetails' + '/' + id]);
        }
      }]);

      return BackpackComponent;
    }();

    BackpackComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BackpackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-backpack',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./backpack.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/backpack/backpack.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./backpack.component.scss */
      "./src/app/play/backpack/backpack.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], BackpackComponent);
    /***/
  },

  /***/
  "./src/app/play/candy-details/candy-details.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/play/candy-details/candy-details.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayCandyDetailsCandyDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.candyDetailsPage {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 5% auto; }\n\n.candyDetailsPage .candyItemTitle {\n    width: 100%;\n    padding: 2%;\n    margin: 10% auto;\n    justify-content: unset;\n    border: 3px solid #ffa500;\n    border-radius: 50px; }\n\n.candyDetailsPage .candyItemTitle .candyThumbnail {\n      height: 3rem;\n      width: 3rem;\n      background-color: #ffc0cb;\n      align-content: center;\n      align-items: center;\n      overflow: hidden;\n      border-radius: 50%;\n      margin-right: 3%; }\n\n.candyDetailsPage .candyItemTitle h1 {\n      font-size: 1rem;\n      font-family: TitanOne;\n      color: #b1c9fb;\n      text-transform: uppercase; }\n\n.candyDetailsPage .candy-checklist {\n    border: 5px solid #ffc0cb;\n    border-radius: 15px; }\n\n.candyDetailsPage .candy-checklist .checklistType {\n      padding: 5%;\n      font-size: 0.8rem;\n      font-family: TitanOne;\n      color: #ffa500;\n      padding: 3% 0%; }\n\n.candyDetailsPage .candy-checklist .checklistType img {\n        max-width: 25px;\n        padding: 3%; }\n\n.candyDetailsPage .rubriks {\n    margin: 3% auto;\n    width: 100%; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title {\n      justify-content: space-between;\n      border-bottom: 3px solid #b1c9fb; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 {\n        font-size: 1rem;\n        color: #b1c9fb;\n        text-align: center;\n        line-height: 3;\n        font-family: TitanOne;\n        text-transform: uppercase; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 .selected {\n          font-size: 7vw; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 img {\n          width: 25px;\n          height: 25px; }\n\n.candyDetailsPage .candyIngredients table,\n  .candyDetailsPage .candyNutriscore table,\n  .candyDetailsPage .candyAllergens table {\n    margin: auto;\n    width: 100%; }\n\n.candyDetailsPage .candyIngredients table,\n  .candyDetailsPage .candyIngredients td,\n  .candyDetailsPage .candyIngredients tr,\n  .candyDetailsPage .candyNutriscore table,\n  .candyDetailsPage .candyNutriscore td,\n  .candyDetailsPage .candyNutriscore tr,\n  .candyDetailsPage .candyAllergens table,\n  .candyDetailsPage .candyAllergens td,\n  .candyDetailsPage .candyAllergens tr {\n    margin-top: 5%;\n    padding: 2%;\n    border: 2px solid #b1c9fb;\n    font-size: 1rem;\n    color: #ffa500;\n    font-family: TitanOne; }\n\n.plus-btn > button {\n  width: 50px;\n  height: 50px;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2FuZHktZGV0YWlscy9jYW5keS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jYW5keS1kZXRhaWxzL2NhbmR5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEM7O0FDZjlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBSm5CO0lBUVEsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCRkZlO0lFR2YsbUJBQW1CLEVBQUE7O0FBYjNCO01BZ0JZLFlBQVk7TUFDWixXQUFXO01BQ1gseUJGRlM7TUVHVCxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZ0JBQWdCLEVBQUE7O0FBdkI1QjtNQTBCWSxlQUFlO01BQ2YscUJGOEJTO01FN0JULGNGZFM7TUVlVCx5QkFBeUIsRUFBQTs7QUE3QnJDO0lBaUNRLHlCRmpCYTtJRWtCYixtQkFBbUIsRUFBQTs7QUFsQzNCO01BcUNZLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIscUJGa0JTO01FakJULGNGOUJXO01FK0JYLGNBQWMsRUFBQTs7QUF6QzFCO1FBMkNnQixlQUFlO1FBQ2YsV0FBVyxFQUFBOztBQTVDM0I7SUFrRFEsZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUFuRG5CO01Bc0RnQiw4QkFBOEI7TUFDOUIsZ0NGekNLLEVBQUE7O0FFZHJCO1FBMERvQixlQUFlO1FBQ2YsY0Y3Q0M7UUU4Q0Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxxQkZMQztRRU1ELHlCQUF5QixFQUFBOztBQS9EN0M7VUFpRXdCLGNBQWMsRUFBQTs7QUFqRXRDO1VBb0V3QixXQUFXO1VBQ1gsWUFBWSxFQUFBOztBQXJFcEM7OztJQWdGWSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQWpGdkI7Ozs7Ozs7OztJQXNGWSxjQUFjO0lBQ2QsV0FBVztJQUNYLHlCRjFFUztJRTJFVCxlQUFlO0lBQ2YsY0ZoRlc7SUVpRlgscUJGbENTLEVBQUE7O0FFdUNyQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5L2NhbmR5LWRldGFpbHMvY2FuZHktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cblxuXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogI0ZGRkRFRjtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uY2FuZHlEZXRhaWxzUGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNSUgYXV0bzsgfVxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJdGVtVGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZhNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJdGVtVGl0bGUgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzBjYjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzJTsgfVxuICAgIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUl0ZW1UaXRsZSBoMSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmYzBjYjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XG4gICAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCAuY2hlY2tsaXN0VHlwZSB7XG4gICAgICBwYWRkaW5nOiA1JTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgY29sb3I6ICNmZmE1MDA7XG4gICAgICBwYWRkaW5nOiAzJSAwJTsgfVxuICAgICAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCAuY2hlY2tsaXN0VHlwZSBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDMlOyB9XG4gIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIHtcbiAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuY2FuZHlEZXRhaWxzUGFnZSAucnVicmlrcyAucnVicmlrIC5ydWJyaWstdGl0bGUge1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNiMWM5ZmI7IH1cbiAgICAgIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIC5ydWJyaWsgLnJ1YnJpay10aXRsZSBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6ICNiMWM5ZmI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgICAgICAuY2FuZHlEZXRhaWxzUGFnZSAucnVicmlrcyAucnVicmlrIC5ydWJyaWstdGl0bGUgaDEgLnNlbGVjdGVkIHtcbiAgICAgICAgICBmb250LXNpemU6IDd2dzsgfVxuICAgICAgICAuY2FuZHlEZXRhaWxzUGFnZSAucnVicmlrcyAucnVicmlrIC5ydWJyaWstdGl0bGUgaDEgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7IH1cbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5SW5ncmVkaWVudHMgdGFibGUsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keU51dHJpc2NvcmUgdGFibGUsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUFsbGVyZ2VucyB0YWJsZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUluZ3JlZGllbnRzIHRhYmxlLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJbmdyZWRpZW50cyB0ZCxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5SW5ncmVkaWVudHMgdHIsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keU51dHJpc2NvcmUgdGFibGUsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keU51dHJpc2NvcmUgdGQsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keU51dHJpc2NvcmUgdHIsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUFsbGVyZ2VucyB0YWJsZSxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5QWxsZXJnZW5zIHRkLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlBbGxlcmdlbnMgdHIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMWM5ZmI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjZmZhNTAwO1xuICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTsgfVxuXG4ucGx1cy1idG4gPiBidXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuLy8gbmVjZXNzYXJ5IGZvciBsaXN0IGVsZW1lbnRzIHRvIGNvbWUgb3V0IHJpZ2h0XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogMDtcbn1cbi5jYW5keURldGFpbHNQYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDUlIGF1dG87XG5cbiAgICAuY2FuZHlJdGVtVGl0bGUge1xuICAgICAgICAvLyBwb3NpdGlvbjogc3RpY2t5OyA9PiBjaGVjayB3aHkgbm90IHdvcmtpbmdcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBtYXJnaW46IDEwJSBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkbWFpbi1vcmFuZ2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbiAgICAgICAgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tcGluaztcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYW5keS1jaGVja2xpc3Qge1xuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkbWFpbi1waW5rO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gICAgICAgIC5jaGVja2xpc3RUeXBlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMlIDAlO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJ1YnJpa3Mge1xuXG4gICAgICAgIG1hcmdpbjogMyUgYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5ydWJyaWsge1xuICAgICAgICAgICAgLnJ1YnJpay10aXRsZSB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0byBhZGQgb24gcnVicmlrcyA6ICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTsgXG4gICAgLmNhbmR5SW5ncmVkaWVudHMsXG4gICAgLmNhbmR5TnV0cmlzY29yZSxcbiAgICAuY2FuZHlBbGxlcmdlbnMge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSxcbiAgICAgICAgdGQsXG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wbHVzLWJ0biA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/play/candy-details/candy-details.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/play/candy-details/candy-details.component.ts ***!
    \***************************************************************/

  /*! exports provided: CandyDetailsComponent */

  /***/
  function srcAppPlayCandyDetailsCandyDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandyDetailsComponent", function () {
      return CandyDetailsComponent;
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


    var _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/candy-api.service */
    "./src/app/play/services/candy-api.service.ts");
    /* harmony import */


    var _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/pipes/keyvalue/keyvalue */
    "./src/app/shared/pipes/keyvalue/keyvalue.ts");
    /* harmony import */


    var _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/pipes/shorten-string/shorten-string */
    "./src/app/shared/pipes/shorten-string/shorten-string.ts");
    /* harmony import */


    var _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/pipes/remove-underscore/remove-underscore */
    "./src/app/shared/pipes/remove-underscore/remove-underscore.ts");
    /* harmony import */


    var _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/pipes/remove-chars/remove-chars */
    "./src/app/shared/pipes/remove-chars/remove-chars.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CandyDetailsComponent = /*#__PURE__*/function () {
      function CandyDetailsComponent(activatedRoute, candyApiService, keyvaluepipe, removeUnderscore, removeChars, shortenString) {
        _classCallCheck(this, CandyDetailsComponent);

        this.activatedRoute = activatedRoute;
        this.candyApiService = candyApiService;
        this.keyvaluepipe = keyvaluepipe;
        this.removeUnderscore = removeUnderscore;
        this.removeChars = removeChars;
        this.shortenString = shortenString;
        this.iconTrue = 'assets/icon/icon_true.png';
        this.iconFalse = 'assets/icon/icon_false.png';
        this.candyItem = {
          _id: '',
          product_name: '',
          generic_name_fr: '',
          image_front_url: '',
          brands_tags: [],
          ingredients_tags: [],
          nutriscore_data: [],
          additives_tags: [],
          allergens_hierarchy: [],
          labels: ''
        };
        this.candyChecklist = {
          additives: false,
          preservatives: false,
          organic: false,
          glutenFree: false,
          vegan: false,
          vegetarian: false
        };
        this.showIngredients = false;
        this.showAllergens = false;
        this.showNutriscore = false;
      }

      _createClass(CandyDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayCandyInfo(this.candyId);
        }
      }, {
        key: "displayCandyInfo",
        value: function displayCandyInfo(candyId) {
          var _this3 = this;

          this.activatedRoute.paramMap.subscribe(function (param) {
            _this3.candyId = param.get('id');
          });
          console.log('activated route param= ', this.candyId);
          this.candyApiService.getCandyById(this.candyId).subscribe(function (response) {
            _this3.candyItem = response;
            _this3.candyItem.product_name = response.product_name;
            _this3.candyItem.image_front_url = response.image_front_url;
            _this3.candyItem.ingredients_tags = response.ingredients_tags;
            _this3.candyItem.nutriscore_data = response.nutriscore_data;
            _this3.candyItem.allergens_hierarchy = response.allergens_hierarchy;
            _this3.candyItem.additives_tags = response.additives_tags;
            _this3.candyItem.labels = response.labels;
            console.log('candy response: ', response);

            var _iterator = _createForOfIteratorHelper(_this3.candyItem.allergens_hierarchy),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var x = _step.value;

                if (x === 'gluten') {
                  _this3.candyChecklist.glutenFree = false;
                  _this3.glutenFree = false;
                }
              }
              /*  ( x === 'milk' ||  x === 'butter' ||  x === 'eggs') */

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(_this3.candyItem.ingredients_tags),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _x = _step2.value;

                if (_x === 'milk') {
                  _this3.vegan = false;
                }

                if (_x === 'gelatin') {
                  _this3.vegetarian = false;
                  _this3.vegan = false;
                } else {
                  _this3.vegetarian = true;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (_this3.candyItem.additives_tags && _this3.candyItem.additives_tags.length > 0) {
              _this3.additives = true;
            }

            if (_this3.candyItem.labels && _this3.candyItem.labels.length > 0) {
              _this3.candyItem.labels.split(',').forEach(function (x) {
                if (x === 'bio' || x === 'ab') {
                  _this3.organic = true;
                }
              });
            }
          });
        }
      }, {
        key: "toggleIngredients",
        value: function toggleIngredients() {
          this.showIngredients = !this.showIngredients;
          this.selected = !this.selected;
        }
      }, {
        key: "toggleAllergens",
        value: function toggleAllergens() {
          this.showAllergens = !this.showAllergens;
        }
      }, {
        key: "toggleNutriscore",
        value: function toggleNutriscore() {
          this.showNutriscore = !this.showNutriscore;
        }
      }]);

      return CandyDetailsComponent;
    }();

    CandyDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"]
      }, {
        type: _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"]
      }, {
        type: _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_5__["RemoveUnderscorePipe"]
      }, {
        type: _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__["RemoveCharsPipe"]
      }, {
        type: _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_4__["ShortenStringPipe"]
      }];
    };

    CandyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-candy-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./candy-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-details/candy-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./candy-details.component.scss */
      "./src/app/play/candy-details/candy-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"], _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"], _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_5__["RemoveUnderscorePipe"], _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__["RemoveCharsPipe"], _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_4__["ShortenStringPipe"]])], CandyDetailsComponent);
    /***/
  },

  /***/
  "./src/app/play/candy-list/candy-list.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/play/candy-list/candy-list.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayCandyListCandyListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.candyPageContainer {\n  /* margin-top: 0 !important; */ }\n\n.candyPageContainer .add-label {\n    height: 20vh;\n    background-image: url('sparkles.png');\n    background-size: cover;\n    background-position: center; }\n\n.candyPageContainer .add-label img {\n      max-width: 100px;\n      float: right; }\n\n.candyPageContainer .loading {\n    color: #b1c9fb;\n    font-size: 2rem;\n    text-align: center; }\n\n.candyPageContainer .candyList {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    margin: auto;\n    /* margin: -10% 10%; */ }\n\n.candyPageContainer .candyList .candyItem {\n      /*    border: 4px solid yellow;\n            background-color:pink; */\n      height: 7rem;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-content: center;\n      align-items: center;\n      border-bottom: 3px solid #b1c9fb; }\n\n.candyPageContainer .candyList .candyItem .candyName {\n        max-width: 70%;\n        display: flex;\n        flex-direction: column; }\n\n.candyPageContainer .candyList .candyItem .candyName h1,\n        .candyPageContainer .candyList .candyItem .candyName h2 {\n          font-family: TitanOne;\n          color: #b1c9fb;\n          text-transform: uppercase;\n          text-align: center; }\n\n.candyPageContainer .candyList .candyItem .candyName h1 {\n          font-size: 1rem;\n          transform: scale(1, 1.2);\n          -webkit-transform: scale(1, 1.2);\n          /* Safari and Chrome */\n          -moz-transform: scale(1, 1.2);\n          /* Firefox */\n          -ms-transform: scale(1, 1.2);\n          /* IE 9+ */\n          -o-transform: scale(1, 1.2);\n          /* Opera */ }\n\n.candyPageContainer .candyList .candyItem .candyName h2 {\n          font-size: 0.7rem; }\n\n.candyPageContainer .candyList .candyItem .candyThumbnail {\n        height: 4rem;\n        width: 4rem;\n        min-width: 4rem;\n        border: 3px solid #ff0000;\n        background-color: #ffc0cb;\n        align-content: center;\n        align-items: center;\n        overflow: hidden;\n        border-radius: 50px; }\n\n.candyPageContainer .candyList .candyItem .plus-btn > button {\n        width: 3rem;\n        height: 3rem;\n        background-color: transparent; }\n\n/* customize toasts  => global.scss */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2FuZHktbGlzdC9jYW5keS1saXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jYW5keS1saXN0L2NhbmR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEM7O0FDZDlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBR2I7RUFFSSw4QkFBQSxFQUErQjs7QUFGbkM7SUFJUSxZQUFZO0lBQ1oscUNBQTJEO0lBQzNELHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBQTs7QUFQbkM7TUFTWSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBOztBQVZ4QjtJQWNRLGNGRmE7SUVHYixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBaEIxQjtJQW1CUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQUEsRUFBdUI7O0FBdkIvQjtNQXlCSTtvQ0RXZ0M7TUNUeEIsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsZ0NGckJTLEVBQUE7O0FFWnJCO1FBb0NnQixjQUFjO1FBQ2QsYUFBYTtRQUNiLHNCQUFzQixFQUFBOztBQXRDdEM7O1VBeUNvQixxQkZjQztVRWJELGNGOUJDO1VFK0JELHlCQUF5QjtVQUN6QixrQkFBa0IsRUFBQTs7QUE1Q3RDO1VBK0NvQixlQUFlO1VBQ2Ysd0JBQXdCO1VBQ3hCLGdDQUFnQztVQUFFLHNCQUFBO1VBQ2xDLDZCQUE2QjtVQUFFLFlBQUE7VUFDL0IsNEJBQTRCO1VBQUUsVUFBQTtVQUM5QiwyQkFBMkI7VUFBRSxVQUFBLEVBQVc7O0FBcEQ1RDtVQXVEb0IsaUJBQWlCLEVBQUE7O0FBdkRyQztRQTJEZ0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YseUJGN0NJO1FFOENKLHlCRmpESztRRWtETCxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUIsRUFBQTs7QUFuRW5DO1FBc0VnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLDZCQUE2QixFQUFBOztBQU83QyxxQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvY2FuZHktbGlzdC9jYW5keS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuXG5cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5jYW5keVBhZ2VDb250YWluZXIge1xuICAvKiBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7ICovIH1cbiAgLmNhbmR5UGFnZUNvbnRhaW5lciAuYWRkLWxhYmVsIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L3NwYXJrbGVzLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmFkZC1sYWJlbCBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgIGZsb2F0OiByaWdodDsgfVxuICAuY2FuZHlQYWdlQ29udGFpbmVyIC5sb2FkaW5nIHtcbiAgICBjb2xvcjogI2IxYzlmYjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qIG1hcmdpbjogLTEwJSAxMCU7ICovIH1cbiAgICAuY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3QgLmNhbmR5SXRlbSB7XG4gICAgICAvKiAgICBib3JkZXI6IDRweCBzb2xpZCB5ZWxsb3c7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnBpbms7ICovXG4gICAgICBoZWlnaHQ6IDdyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2IxYzlmYjsgfVxuICAgICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5TmFtZSB7XG4gICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDEsXG4gICAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAuY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3QgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogSUUgOSsgKi9cbiAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogT3BlcmEgKi8gfVxuICAgICAgICAuY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3QgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTsgfVxuICAgICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgbWluLXdpZHRoOiA0cmVtO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmYwMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMGNiO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5wbHVzLWJ0biA+IGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi8qIGN1c3RvbWl6ZSB0b2FzdHMgID0+IGdsb2JhbC5zY3NzICovXG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jYW5keVBhZ2VDb250YWluZXIge1xuXG4gICAgLyogbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyAqL1xuICAgIC5hZGQtbGFiZWwge1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGFya2xlcy5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvYWRpbmcge1xuICAgICAgICBjb2xvcjogJG1haW4tYmx1ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jYW5keUxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIC8qIG1hcmdpbjogLTEwJSAxMCU7ICovXG4gICAgICAgIC5jYW5keUl0ZW0ge1xuICAgIC8qICAgIGJvcmRlcjogNHB4IHNvbGlkIHllbGxvdztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cGluazsgKi9cbiAgICAgICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkbWFpbi1ibHVlO1xuXG4gICAgICAgICAgICAuY2FuZHlOYW1lIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTokdGl0YW5PbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgJG1haW4tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogSUUgOSsgKi9cbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBPcGVyYSAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYW5keVRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNHJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkbWFpbi1yZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tcGluaztcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGx1cy1idG4gPiBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuLyogY3VzdG9taXplIHRvYXN0cyAgPT4gZ2xvYmFsLnNjc3MgKi9cblxuXG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/play/candy-list/candy-list.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/play/candy-list/candy-list.component.ts ***!
    \*********************************************************/

  /*! exports provided: CandyListComponent */

  /***/
  function srcAppPlayCandyListCandyListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandyListComponent", function () {
      return CandyListComponent;
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


    var _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/candy-api.service */
    "./src/app/play/services/candy-api.service.ts");
    /* harmony import */


    var _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/pipes/shorten-string/shorten-string */
    "./src/app/shared/pipes/shorten-string/shorten-string.ts");
    /* harmony import */


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CandyListComponent = /*#__PURE__*/function () {
      function CandyListComponent(candyApiService, userStatsService, shortenString, toastController) {
        _classCallCheck(this, CandyListComponent);

        this.candyApiService = candyApiService;
        this.userStatsService = userStatsService;
        this.shortenString = shortenString;
        this.toastController = toastController;
        this.candyList = [];
        this.candyItem = {
          _id: '',
          product_name: '',
          amountInBackpack: 0,
          image_front_url: '',
          brands_tags: [],
          ingredients_tags: [],
          nutriscore_data: [],
          additives_tags: [],
          allergens_hierarchy: []
        };
        this.candyChecklist = {
          additives: false,
          preservatives: false,
          organic: false,
          glutenFree: false,
          vegan: false,
          vegetarian: false
        };
        this.itemsInBackpack = [];
        this.totalCandy = 0;
        this.totalPoints = 0;
        this.loading = true;
      }
      /* public plusBtnImg = './assets/graphicmat/zoomIn.png'; */


      _createClass(CandyListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCandyList();
          this.loadSearchBar();
        }
      }, {
        key: "loadCandyList",
        value: function loadCandyList() {
          var _this4 = this;

          this.candyApiService.getAllCandyFromApi().subscribe(function (response) {
            _this4.candyList = response;
            console.log(_this4.candyList);
            _this4.loading = false;
          });
        }
      }, {
        key: "loadSearchBar",
        value: function loadSearchBar() {
          var searchbar = document.querySelector('ion-searchbar');
          /*  const searchItems = Array.from(document.querySelector('candyName').children);
                   searchbar.addEventListener('ionInput', handleInput);
                   function handleInput(event: any) {
              const query = event.target.value.toLowerCase();
              requestAnimationFrame(() => {
                searchItems.forEach(item => {
                  const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
                  this.item.style.display = shouldShow ? 'block' : 'none';
                });
              });
            } */
        }
      }, {
        key: "addCandyToBackpack",
        value: function addCandyToBackpack(candyItem) {
          this.totalCandy$ = this.userStatsService.getCurrentBackpackCount();
          this.candyItem = candyItem;
          this.candyItem.product_name = candyItem.product_name;
          this.candyItem._id = candyItem._id; // tslint:disable-next-line: no-bitwise

          this.candyItem.amountInBackpack = candyItem.amountInBackpack | 0; // new candy has not been added yet

          var added = false; // look into items of backpack if new candy id already exists

          var _iterator3 = _createForOfIteratorHelper(this.itemsInBackpack),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;

              // if id exists : only increase amount of this candy
              if (item.product_name === this.candyItem.product_name) {
                item.amountInBackpack += 1;
                added = true;
                break;
              }
            } // if id does not exist : add new candy type to backpack (and increase amount)

          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          if (!added) {
            this.candyItem.amountInBackpack += 1;
            this.itemsInBackpack.push(this.candyItem);
          }

          console.log('ITEMS : ', this.itemsInBackpack);
          console.log(this.itemsInBackpack.forEach(function (item) {
            return console.log('AMOUNT==== ', item.amountInBackpack);
          })); // save new total of all candy and points

          this.userStatsService.update_totalCandyCount(this.totalCandy += 1);
          this.userStatsService.update_totalPoints(this.totalPoints += 6); // save backpack new content

          this.userStatsService.update_backpackContent(this.itemsInBackpack);
          this.presentToastNewPoints();
        }
      }, {
        key: "presentToastNewPoints",
        value: function presentToastNewPoints() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast1, toast2, toast3;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: "+ 6 Points! ".concat(name),
                      position: 'middle',
                      duration: 300,
                      cssClass: 'new-points-toast'
                    });

                  case 2:
                    toast1 = _context.sent;
                    _context.next = 5;
                    return this.toastController.create({
                      message: "TOTAL POINTS :" + this.totalPoints + "!",
                      position: 'middle',
                      duration: 700,
                      cssClass: 'new-totalpoints-toast'
                    });

                  case 5:
                    toast2 = _context.sent;
                    toast1.present();
                    setTimeout(function () {
                      toast1.dismiss();
                      toast2.present();
                    }, 500);

                    if (!(this.totalPoints % 30 === 0)) {
                      _context.next = 13;
                      break;
                    }

                    _context.next = 11;
                    return this.toastController.create({
                      position: 'middle',
                      duration: 800,
                      cssClass: 'levelUp-toast'
                    });

                  case 11:
                    toast3 = _context.sent;
                    setTimeout(function () {
                      toast2.dismiss();
                      toast3.present();
                    }, 500);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CandyListComponent;
    }();

    CandyListComponent.ctorParameters = function () {
      return [{
        type: _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"]
      }, {
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"]
      }, {
        type: _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_3__["ShortenStringPipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    CandyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-candy-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./candy-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./candy-list.component.scss */
      "./src/app/play/candy-list/candy-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"], _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"], _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_3__["ShortenStringPipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], CandyListComponent);
    /***/
  },

  /***/
  "./src/app/play/challenges/challenges.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/play/challenges/challenges.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayChallengesChallengesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('spiders_bg-half.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: auto;\n    padding-top: 10%; }\n\n.special-bg .main-container h1 {\n      color: #FFFDEF;\n      font-size: 2.5rem;\n      line-height: 0.8; }\n\n.special-bg .main-container h1 span {\n        font-size: 3.5rem; }\n\n.special-bg .main-container .upper-row,\n    .special-bg .main-container .bottom-row {\n      height: 5rem;\n      padding: 8% 0%; }\n\n.special-bg .main-container .upper-row img,\n      .special-bg .main-container .bottom-row img {\n        width: 5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEM7O0FDZDlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBR2I7RUFDSSw0Q0FBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBOztBQUgvQjtJQU9RLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVZ4QjtNQWFZLGNGY1M7TUViVCxpQkFBaUI7TUFDakIsZ0JBQWdCLEVBQUE7O0FBZjVCO1FBZ0JtQixpQkFBaUIsRUFBQTs7QUFoQnBDOztNQXFCWSxZQUFZO01BQ1osY0FBYyxFQUFBOztBQXRCMUI7O1FBd0JnQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5L2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cblxuXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogI0ZGRkRFRjtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uc3BlY2lhbC1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGlkZXJzX2JnLWhhbGYucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cbiAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTAlOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIGgxIHtcbiAgICAgIGNvbG9yOiAjRkZGREVGO1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMC44OyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgaDEgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3csXG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IHtcbiAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgIHBhZGRpbmc6IDglIDAlOyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLnVwcGVyLXJvdyBpbWcsXG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLmJvdHRvbS1yb3cgaW1nIHtcbiAgICAgICAgd2lkdGg6IDVyZW07IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLy8gbmVjZXNzYXJ5IGZvciBsaXN0IGVsZW1lbnRzIHRvIGNvbWUgb3V0IHJpZ2h0XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNwZWNpYWwtYmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGlkZXJzX2JnLWhhbGYucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgLm1haW4tY29udGFpbmVyIHtcblxuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgICAgICBcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gICAgICAgICAgICBzcGFuIHsgZm9udC1zaXplOiAzLjVyZW07IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC51cHBlci1yb3csXG4gICAgICAgIC5ib3R0b20tcm93IHtcbiAgICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDglIDAlO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/play/challenges/challenges.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/play/challenges/challenges.component.ts ***!
    \*********************************************************/

  /*! exports provided: ChallengesComponent */

  /***/
  function srcAppPlayChallengesChallengesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function () {
      return ChallengesComponent;
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

    var ChallengesComponent = /*#__PURE__*/function () {
      function ChallengesComponent(activatedRoute) {
        _classCallCheck(this, ChallengesComponent);

        this.activatedRoute = activatedRoute;
        this.purpleBubbleImg = 'assets/graphicMat/purple_bubble.png';
        this.candleSkullImg = 'assets/graphicMat/candle_skull.png';
      }

      _createClass(ChallengesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.activatedRoute.paramMap.subscribe(function (param) {
            _this5.choice = param.get('choice');
          });
          console.log('activated route param= ', this.choice);
          this.getRandomChallenge(this.choice);
        }
      }, {
        key: "getRandomChallenge",
        value: function getRandomChallenge(choice) {}
      }]);

      return ChallengesComponent;
    }();

    ChallengesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ChallengesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-challenges',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./challenges.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./challenges.component.scss */
      "./src/app/play/challenges/challenges.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ChallengesComponent);
    /***/
  },

  /***/
  "./src/app/play/map/map.component.scss":
  /*!*********************************************!*\
    !*** ./src/app/play/map/map.component.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.mapContainer {\n  z-index: 1;\n  height: 80%;\n  border: 8px solid black; }\n\n.mapContainer #map {\n    z-index: 1;\n    height: 100vh;\n    width: 100%; }\n\n.mapContainer .leaflet-bar {\n    margin-top: 50vh; }\n\n.mapContainer .scroll-content {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n\n.options-container {\n  z-index: 2;\n  position: absolute;\n  height: 5rem;\n  bottom: 0;\n  background-color: #3e173b;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.options-container:active {\n    transform: translateY(-30%);\n    transition: transform 300ms linear;\n    will-change: transform; }\n\n.options-container .saveLocationBtnContainer {\n    width: 90%;\n    margin: auto; }\n\n.options-container .saveLocationBtnContainer button {\n      background-color: transparent;\n      font-family: TitanOne;\n      color: #b1c9fb;\n      text-transform: uppercase;\n      justify-content: space-between; }\n\n.options-container .saveLocationBtnContainer button img {\n        border: 2px solid #b1c9fb;\n        border-radius: 5px;\n        padding: 3%;\n        width: 2rem; }\n\n.options-container .saveLocationBtnContainer button:hover img {\n        padding: 0%; }\n\n/* \n.seeOptions-open .seeOptions {\n\t-webkit-transform: none;\n\t\t\ttransform: none;\n\ttransition: transform 300ms linear;\n} */\n\n@media (min-width: 567px) and (max-width: 767px) {\n  ion-content {\n    width: 100%; }\n    ion-content .mapContainer {\n      height: 100%;\n      margin: 0; } }\n\n@media (min-width: 768px) and (max-width: 1023px) {\n  /*   ion-content {\n        width: 80%;\n        .mapContainer {\n            width: 100vw;\n            height: 90%;\n            margin: auto;\n        }\n    } */ }\n\n@media (min-width: 1024px) {\n  /*   ion-content {\n        width: 80% !important;\n\n        .mapContainer {\n            width: 100%;\n            height: 100%;\n            margin: 0;\n        }\n    } */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVBOztrQ0NGa0MsRURJQzs7QUFvRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDckQ4Qzs7QUNmOUM7RUFDSSxVQUFVO0VBRVYsV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUozQjtJQVFRLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVyxFQUFBOztBQVZuQjtJQWNRLGdCQUFnQixFQUFBOztBQWR4QjtJQWlCUSx3QkFBd0I7SUFDeEIsMkJBQTJCLEVBQUE7O0FBSW5DO0VBQ0ksVUFBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUTtFQUNSLHlCRkdtQjtFRUZuQiwyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7O0FBUGhDO0lBV2dCLDJCQUEyQjtJQUNuQyxrQ0FBa0M7SUFDbEMsc0JBQXNCLEVBQUE7O0FBYjlCO0lBaUJRLFVBQVU7SUFDVixZQUFZLEVBQUE7O0FBbEJwQjtNQW9CWSw2QkFBNkI7TUFDN0IscUJGc0JTO01FckJULGNGdEJTO01FdUJULHlCQUF5QjtNQUN6Qiw4QkFBOEIsRUFBQTs7QUF4QjFDO1FBMkJnQix5QkYzQks7UUU0Qkwsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXLEVBQUE7O0FBOUIzQjtRQW1Db0IsV0FBVyxFQUFBOztBQU8vQjs7Ozs7R0RDRzs7QUNRSDtFQUNJO0lBQ0ksV0FBVyxFQUFBO0lBRGY7TUFJUSxZQUFZO01BQ1osU0FBUyxFQUFBLEVBQ1o7O0FBSVQ7RUFDRTs7Ozs7OztPREpLLEVDV0M7O0FBSVI7RUFFRTs7Ozs7Ozs7T0ROSyxFQ2NDIiwiZmlsZSI6InNyYy9hcHAvcGxheS9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuXG5cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLm1hcENvbnRhaW5lciB7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXI6IDhweCBzb2xpZCBibGFjazsgfVxuICAubWFwQ29udGFpbmVyICNtYXAge1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAubWFwQ29udGFpbmVyIC5sZWFmbGV0LWJhciB7XG4gICAgbWFyZ2luLXRvcDogNTB2aDsgfVxuICAubWFwQ29udGFpbmVyIC5zY3JvbGwtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuXG4ub3B0aW9ucy1jb250YWluZXIge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNXJlbTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UxNzNiO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgLm9wdGlvbnMtY29udGFpbmVyOmFjdGl2ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBsaW5lYXI7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsgfVxuICAub3B0aW9ucy1jb250YWluZXIgLnNhdmVMb2NhdGlvbkJ0bkNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgICAub3B0aW9ucy1jb250YWluZXIgLnNhdmVMb2NhdGlvbkJ0bkNvbnRhaW5lciBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgICAgIC5vcHRpb25zLWNvbnRhaW5lciAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIGJ1dHRvbiBpbWcge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYjFjOWZiO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgICB3aWR0aDogMnJlbTsgfVxuICAgICAgLm9wdGlvbnMtY29udGFpbmVyIC5zYXZlTG9jYXRpb25CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIGltZyB7XG4gICAgICAgIHBhZGRpbmc6IDAlOyB9XG5cbi8qIFxuLnNlZU9wdGlvbnMtb3BlbiAuc2VlT3B0aW9ucyB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuXHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgbGluZWFyO1xufSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgaW9uLWNvbnRlbnQgLm1hcENvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLyogICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9ICovIH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAvKiAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9ICovIH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1hcENvbnRhaW5lciB7XG4gICAgei1pbmRleDogMTtcbiAgICAvLyBtb2JpbGUgcG9ydHJhaXRcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXI6IDhweCBzb2xpZCBibGFjaztcbiAgICAvLyBtYXJnaW46IDUlIGF1dG87XG5cbiAgICAjbWFwIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC8vIGN1c3RvbWl6ZSBtYXAgem9vbSBjb250cm9sc1xuICAgIC5sZWFmbGV0LWJhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwdmg7XG4gICAgfVxuICAgIC5zY3JvbGwtY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm9wdGlvbnMtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OjI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBib3R0b206MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1wdXJwbGU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLy8gd2lkdGg6IDEycmVtO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbiB0byBpbXBsZW1lbnRcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4vKiBcbi5zZWVPcHRpb25zLW9wZW4gLnNlZU9wdGlvbnMge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcblx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbn0gKi9cblxuLy8gYnJlYWtwb2ludHMgZXhjZXB0aW9ucyAoIOKJoCBnbG9iYWwuc2NzcyA6IGlvbi1jb250ZW50IHdvbid0IHNocmluayBhcyBtdWNoIGFzIG90aGVyIHBhZ2VzIGFmdGVyIDU2N3B4KVxuLy8gbW9iaWxlIGxhbmRzY2FwZVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gdGFibGV0IHBvcnRyYWl0XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLyogICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9ICovXG59XG5cbi8vIHRhYmxldCBsYW5kc2NhcGUgYW5kICtcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAvLyBleGNlcHRpb24gZnJvbSBnbG9iYWwuc2Nzc1xuICAvKiAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9ICovXG59XG5cbi8vIHRvIGF2b2lkIGNvbnNvbGUgd2FybmluZyAnd2lsbC1jaGFuZ2UgbWVtb3J5IGlzIHRvbyBoaWdoLi4nXG4vLyAubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtdGlsZSwubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7IHdpbGwtY2hhbmdlOmF1dG8gIWltcG9ydGFudDsgfVxuLy8gIGNvbW1lbnRlZCBvdXQgPT4gZidzIHVwIHBhZ2UgZGlzcGxheSA6KFxuIl19 */";
    /***/
  },

  /***/
  "./src/app/play/map/map.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/play/map/map.component.ts ***!
    \*******************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppPlayMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
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


    var _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/geoloc.service */
    "./src/app/shared/services/geoloc.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(geolocService, toastController, userStatsService) {
        _classCallCheck(this, MapComponent);

        this.geolocService = geolocService;
        this.toastController = toastController;
        this.userStatsService = userStatsService;
        this.heartIcon = 'assets/graphicMat/heartAsset_red.png';
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.geolocService.getCurrentLocation();
          this.initMapWithParams();
        }
      }, {
        key: "initMapWithParams",
        value: function initMapWithParams() {
          // this.geolocService.getCurrentLocation();
          this.age = this.geolocService.getAgeRange();
          console.log('user age= ', this.age);
          this.allowedDistance = this.geolocService.findAllowedDistance(this.age);
          console.log('dist= ', this.allowedDistance);
          this.mapBounds = this.geolocService.calculateMapBounds(this.allowedDistance);
          console.log('mapBounds= ', this.mapBounds);
          this.geolocService.loadMapWithBounds();
        }
      }, {
        key: "saveAddress",
        value: function saveAddress() {
          this.newAddress = this.geolocService.getCoords();
          this.userStatsService.updateCurrentAddressesList(this.newAddress);
        }
      }, {
        key: "presentToastWithOptions",
        value: function presentToastWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: "Address saved to favorites !",
                      position: 'middle',
                      duration: 500,
                      cssClass: 'custom-toast'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_2__["GeolocService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapComponent.prototype, "mapContainer", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/map/map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/play/map/map.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_2__["GeolocService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"]])], MapComponent);
    /***/
  },

  /***/
  "./src/app/play/play-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/play/play-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: PlayRoutingModule */

  /***/
  function srcAppPlayPlayRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayRoutingModule", function () {
      return PlayRoutingModule;
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


    var _play_candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../play/candy-list/candy-list.component */
    "./src/app/play/candy-list/candy-list.component.ts");
    /* harmony import */


    var _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./candy-details/candy-details.component */
    "./src/app/play/candy-details/candy-details.component.ts");
    /* harmony import */


    var _play_backpack_backpack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../play/backpack/backpack.component */
    "./src/app/play/backpack/backpack.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/play/map/map.component.ts");
    /* harmony import */


    var _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./addresses/addresses.component */
    "./src/app/play/addresses/addresses.component.ts");
    /* harmony import */


    var _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-stats/user-stats.component */
    "./src/app/play/user-stats/user-stats.component.ts");
    /* harmony import */


    var _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./trick-or-treat/trick-or-treat.component */
    "./src/app/play/trick-or-treat/trick-or-treat.component.ts");
    /* harmony import */


    var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./challenges/challenges.component */
    "./src/app/play/challenges/challenges.component.ts");

    var playModuleRoutes = [{
      path: '',
      redirectTo: 'candyList'
    }, {
      path: 'candyList',
      component: _play_candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_3__["CandyListComponent"]
    }, {
      path: 'user-stats',
      component: _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_8__["UserStatsComponent"]
    }, {
      path: 'map',
      component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
    }, {
      path: 'addresses',
      component: _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_7__["AddressesComponent"]
    }, {
      path: 'candyDetails/:id',
      component: _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_4__["CandyDetailsComponent"]
    }, {
      path: 'backpack',
      component: _play_backpack_backpack_component__WEBPACK_IMPORTED_MODULE_5__["BackpackComponent"]
    }, {
      path: 'trickOrTreat',
      component: _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_9__["TrickOrTreatComponent"]
    }, {
      path: 'challenges',
      component: _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_10__["ChallengesComponent"]
    }, //  {path: '404', component: NotFoundComponent},
    // { path: '**', redirectTo: '404' },
    {
      path: '**',
      redirectTo: ''
    }];

    var PlayRoutingModule = function PlayRoutingModule() {
      _classCallCheck(this, PlayRoutingModule);
    };

    PlayRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(playModuleRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlayRoutingModule);
    /***/
  },

  /***/
  "./src/app/play/play.module.ts":
  /*!*************************************!*\
    !*** ./src/app/play/play.module.ts ***!
    \*************************************/

  /*! exports provided: PlayModule */

  /***/
  function srcAppPlayPlayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayModule", function () {
      return PlayModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/pipes/pipes.module */
    "./src/app/shared/pipes/pipes.module.ts");
    /* harmony import */


    var _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/pipes/keyvalue/keyvalue */
    "./src/app/shared/pipes/keyvalue/keyvalue.ts");
    /* harmony import */


    var _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/pipes/remove-underscore/remove-underscore */
    "./src/app/shared/pipes/remove-underscore/remove-underscore.ts");
    /* harmony import */


    var _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/pipes/shorten-string/shorten-string */
    "./src/app/shared/pipes/shorten-string/shorten-string.ts");
    /* harmony import */


    var _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/pipes/remove-chars/remove-chars */
    "./src/app/shared/pipes/remove-chars/remove-chars.ts");
    /* harmony import */


    var _play_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./play-routing.module */
    "./src/app/play/play-routing.module.ts");
    /* harmony import */


    var _candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./candy-list/candy-list.component */
    "./src/app/play/candy-list/candy-list.component.ts");
    /* harmony import */


    var _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./candy-details/candy-details.component */
    "./src/app/play/candy-details/candy-details.component.ts");
    /* harmony import */


    var _backpack_backpack_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./backpack/backpack.component */
    "./src/app/play/backpack/backpack.component.ts");
    /* harmony import */


    var _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./addresses/addresses.component */
    "./src/app/play/addresses/addresses.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/play/map/map.component.ts");
    /* harmony import */


    var _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user-stats/user-stats.component */
    "./src/app/play/user-stats/user-stats.component.ts");
    /* harmony import */


    var _services_level_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/level-api.service */
    "./src/app/play/services/level-api.service.ts");
    /* harmony import */


    var _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./trick-or-treat/trick-or-treat.component */
    "./src/app/play/trick-or-treat/trick-or-treat.component.ts");
    /* harmony import */


    var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./challenges/challenges.component */
    "./src/app/play/challenges/challenges.component.ts");

    var PlayModule = function PlayModule() {
      _classCallCheck(this, PlayModule);
    };

    PlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [// AgeSelectComponent,
      _candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_12__["CandyListComponent"], _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_13__["CandyDetailsComponent"], _backpack_backpack_component__WEBPACK_IMPORTED_MODULE_14__["BackpackComponent"], _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_15__["AddressesComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"], _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_17__["UserStatsComponent"], _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_19__["TrickOrTreatComponent"], _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_20__["ChallengesComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _play_routing_module__WEBPACK_IMPORTED_MODULE_11__["PlayRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
      providers: [_shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_7__["KeyvaluePipe"], _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_8__["RemoveUnderscorePipe"], _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_9__["ShortenStringPipe"], _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_10__["RemoveCharsPipe"], _services_level_api_service__WEBPACK_IMPORTED_MODULE_18__["LevelApiService"]]
    })], PlayModule);
    /***/
  },

  /***/
  "./src/app/play/services/candy-api.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/play/services/candy-api.service.ts ***!
    \****************************************************/

  /*! exports provided: CandyApiService */

  /***/
  function srcAppPlayServicesCandyApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandyApiService", function () {
      return CandyApiService;
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

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        observe: 'response',
        responseType: 'json' // 'Authorization': 'my-auth-token'

      })
    };

    var CandyApiService = /*#__PURE__*/function () {
      function CandyApiService(httpService, httpErrorHandler) {
        _classCallCheck(this, CandyApiService);

        this.httpService = httpService;
        this.candyListApiUrl = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50';
        this.candyByIdApiUrl = 'https://world.openfoodfacts.org/api/v0/product/';
        this.candyItem = {
          _id: '',
          product_name: '',
          amountInBackpack: null
        };
        this.handleError = httpErrorHandler.createHandleError('CandyApiService');
      } // GET all candy list from api, max 50 results
      // | => TO DO : clean up doublons in response list with a pipe


      _createClass(CandyApiService, [{
        key: "getAllCandyFromApi",
        value: function getAllCandyFromApi() {
          return this.httpService.get(this.candyListApiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // console.log(response);
            var rawApiResponseObject = response;
            var candyListFromApi = rawApiResponseObject.products; // '.products' => for object from api contains 2 other main fields!
            //  ( -- why is this syntax not working anymore? :
            // const candyListFromApi: Array<any> = rawApiResponse.json().products as CandyI[];
            // console.log(candyListFromApi);

            return candyListFromApi;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), // retry a failed request up to 3 times
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAllCandyFromApi', [])) // then handle the error
          );
        } // get candy by id from api

      }, {
        key: "getCandyById",
        value: function getCandyById(candyId) {
          return this.httpService.get(this.candyByIdApiUrl + candyId + '.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var RawApiResponseCandyItem = response;
            var candyItemFromApi = RawApiResponseCandyItem.product;
            console.log(candyItemFromApi);
            return candyItemFromApi;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }]);

      return CandyApiService;
    }();

    CandyApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]
      }];
    };

    CandyApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])], CandyApiService); // TO DO (search candy in list by name)

    /*   filterById(id: string): Observable<Product> {
        return this.getProducts()
                  .filter(products => products.find(product => id === product.id));
      }
      */
    //   search candy by name  => TODO replace method search api with search amongst list results

    /* GET candy whose name contains search term */

    /*  searchCandy(term: string): Observable<CandyI[]> {
        term = term.trim();
    
        // Add safe, URL encoded search parameter if there is a search term
        const options = term ?
          { params: new HttpParams().set('name', term) } : {};
    
        return this.httpService.get<CandyI[]>(this.candyListApiUrl, options)
          .pipe(
            catchError(this.handleError<CandyI[]>('searchCandy', []))
          );
      } */

    /***/
  },

  /***/
  "./src/app/play/trick-or-treat/trick-or-treat.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/play/trick-or-treat/trick-or-treat.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayTrickOrTreatTrickOrTreatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('bg_spiders-1920.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: auto;\n    padding-top: 10%; }\n\n.special-bg .main-container h1 {\n      color: #FFFDEF;\n      font-size: 2.5rem;\n      line-height: 0.8; }\n\n.special-bg .main-container h1 span {\n        font-size: 3.5rem; }\n\n.special-bg .main-container img {\n      width: 15rem; }\n\n.special-bg .main-container .upper-row,\n    .special-bg .main-container .bottom-row {\n      height: 5rem; }\n\n.special-bg .main-container .upper-row img,\n      .special-bg .main-container .bottom-row img {\n        width: 5rem; }\n\n.special-bg .main-container .upper-row {\n      align-content: flex-end; }\n\n.special-bg .main-container .bottom-row {\n      align-content: flex-start; }\n\n.special-bg .main-container .flexRowCentered {\n      padding: 8% 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvdHJpY2stb3ItdHJlYXQvdHJpY2stb3ItdHJlYXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC9wbGF5L3RyaWNrLW9yLXRyZWF0L3RyaWNrLW9yLXRyZWF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUE7O2tDQ0ZrQyxFRElDOztBQW9EakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NyRDhDOztBQ2Q5Qzs7Ozs7O0VBTUksU0FBUyxFQUFBOztBQUdiO0VBQ0ksNENBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFIL0I7SUFPUSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFWeEI7TUFhWSxjRmNTO01FYlQsaUJBQWlCO01BQ2pCLGdCQUFnQixFQUFBOztBQWY1QjtRQWdCbUIsaUJBQWlCLEVBQUE7O0FBaEJwQztNQWtCYyxZQUFZLEVBQUE7O0FBbEIxQjs7TUFzQlksWUFBWSxFQUFBOztBQXRCeEI7O1FBd0JnQixXQUFXLEVBQUE7O0FBeEIzQjtNQTRCWSx1QkFBdUIsRUFBQTs7QUE1Qm5DO01BK0JZLHlCQUF5QixFQUFBOztBQS9CckM7TUFpQzJCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvdHJpY2stb3ItdHJlYXQvdHJpY2stb3ItdHJlYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG5cblxuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6ICNGRkZERUY7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDA7IH1cblxuLnNwZWNpYWwtYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvYmdfc3BpZGVycy0xOTIwLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XG4gIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDEwJTsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciBoMSB7XG4gICAgICBjb2xvcjogI0ZGRkRFRjtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIGgxIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciBpbWcge1xuICAgICAgd2lkdGg6IDE1cmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3csXG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IHtcbiAgICAgIGhlaWdodDogNXJlbTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cgaW1nLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGltZyB7XG4gICAgICAgIHdpZHRoOiA1cmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLmJvdHRvbS1yb3cge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAuZmxleFJvd0NlbnRlcmVkIHtcbiAgICAgIHBhZGRpbmc6IDglIDAlOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zcGVjaWFsLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvYmdfc3BpZGVycy0xOTIwLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG5cbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgICAgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAkc3ViLWxpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICAgICAgc3BhbiB7IGZvbnQtc2l6ZTogMy41cmVtOyB9XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHsgd2lkdGg6IDE1cmVtOyB9XG5cbiAgICAgICAgLnVwcGVyLXJvdyxcbiAgICAgICAgLmJvdHRvbS1yb3cge1xuICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudXBwZXItcm93IHtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20tcm93IHtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXhSb3dDZW50ZXJlZCB7IHBhZGRpbmc6IDglIDAlOyB9XG4gICAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/play/trick-or-treat/trick-or-treat.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/play/trick-or-treat/trick-or-treat.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TrickOrTreatComponent */

  /***/
  function srcAppPlayTrickOrTreatTrickOrTreatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrickOrTreatComponent", function () {
      return TrickOrTreatComponent;
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

    var TrickOrTreatComponent = /*#__PURE__*/function () {
      function TrickOrTreatComponent(router, activatedRoute) {
        _classCallCheck(this, TrickOrTreatComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.candyImg = 'assets/graphicMat/candy.png';
        this.treatOrTrickImg = 'assets/graphicMat/trickOrTreat.png';
        this.witchHatImg = 'assets/graphicMat/hat.png';
      }

      _createClass(TrickOrTreatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "choseTreat",
        value: function choseTreat() {
          this.router.navigate(['/challenges' + '/' + 'treat']);
        }
      }, {
        key: "choseTrick",
        value: function choseTrick() {
          this.router.navigate(['/challenges' + '/' + 'trick']);
        }
      }]);

      return TrickOrTreatComponent;
    }();

    TrickOrTreatComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    TrickOrTreatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trick-or-treat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./trick-or-treat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/trick-or-treat/trick-or-treat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./trick-or-treat.component.scss */
      "./src/app/play/trick-or-treat/trick-or-treat.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], TrickOrTreatComponent);
    /***/
  },

  /***/
  "./src/app/play/user-stats/user-stats.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/play/user-stats/user-stats.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayUserStatsUserStatsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.stats-container {\n  width: 80%;\n  margin: 10% auto;\n  background-size: cover;\n  background-position: center; }\n\n.stats-container h1,\n  .stats-container h2 {\n    font-family: flyingleather; }\n\n.stats-container h1 {\n    color: #FFFDEF;\n    font-size: 1.5rem; }\n\n.stats-container h2 {\n    color: #ffa500;\n    font-size: 1.8rem; }\n\n.stats-container .item,\n  .stats-container .item-level {\n    align-items: unset;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n\n.stats-container .item {\n    border: 2px solid #6178F5;\n    border-radius: 15px;\n    padding: 3% 3%; }\n\n.stats-container .item-level {\n    text-align: center;\n    border-bottom: 3px solid orange;\n    line-height: 0.1em;\n    margin: 10px 0 20px; }\n\n.bottom-cards-container {\n  bottom: 2%;\n  position: absolute;\n  width: 100%;\n  margin: auto;\n  border: 3px solid red;\n  height: 20vh; }\n\n.bottom-cards-container .cardsList {\n    justify-content: space-evenly; }\n\n.bottom-cards-container .cardsList .card-container {\n      height: 10rem;\n      background-color: pink; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext {\n        margin-bottom: 15%;\n        width: 5rem;\n        height: 5rem;\n        background-color: #ff9e29;\n        border: 1px solid #ff0000;\n        border-radius: 5px; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext h2 {\n          padding: 7%;\n          font-size: 0.8rem;\n          text-align: center;\n          color: black; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext h2 span {\n            color: #ff0000; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container {\n        width: 4rem; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container img {\n          width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvdXNlci1zdGF0cy91c2VyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEM7O0FDZjlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxVQUFVO0VBRVYsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFML0I7O0lBU1EsMEJGMkN1QixFQUFBOztBRXBEL0I7SUFZUSxjRmlCYTtJRWhCYixpQkYwQmUsRUFBQTs7QUV2Q3ZCO0lBZ0JRLGNGTmU7SUVPZixpQkZ1QmMsRUFBQTs7QUV4Q3RCOztJQXFCUSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTs7QUF4QnRDO0lBMkJRLHlCRkpjO0lFS2QsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTs7QUE3QnRCO0lBZ0NRLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBOztBQUczQjtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQU5oQjtJQVNRLDZCQUE2QixFQUFBOztBQVRyQztNQVdZLGFBQWE7TUFDYixzQkFBc0IsRUFBQTs7QUFabEM7UUFlZ0Isa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1oseUJGN0NNO1FFOENOLHlCRnRDSTtRRXVDSixrQkFBa0IsRUFBQTs7QUFwQmxDO1VBc0JvQixXQUFXO1VBQ1gsaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixZQUFZLEVBQUE7O0FBekJoQztZQTJCd0IsY0Y5Q0osRUFBQTs7QUVtQnBCO1FBZ0NnQixXQUFXLEVBQUE7O0FBaEMzQjtVQWtDb0IsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG5cblxuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6ICNGRkZERUY7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDA7IH1cblxuLnN0YXRzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgxLFxuICAuc3RhdHMtY29udGFpbmVyIGgyIHtcbiAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgxIHtcbiAgICBjb2xvcjogI0ZGRkRFRjtcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgyIHtcbiAgICBjb2xvcjogI2ZmYTUwMDtcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfVxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtLFxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtLWxldmVsIHtcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjE3OEY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMyUgMyU7IH1cbiAgLnN0YXRzLWNvbnRhaW5lciAuaXRlbS1sZXZlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7IH1cblxuLmJvdHRvbS1jYXJkcy1jb250YWluZXIge1xuICBib3R0b206IDIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiAyMHZoOyB9XG4gIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3Qge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XG4gICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cbiAgICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIC5idWJibGVOZXh0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTI5O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cbiAgICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmJ1YmJsZU5leHQgaDIge1xuICAgICAgICAgIHBhZGRpbmc6IDclO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7IH1cbiAgICAgICAgICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IC5jYXJkLWNvbnRhaW5lciAuYnViYmxlTmV4dCBoMiBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwOyB9XG4gICAgICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IC5jYXJkLWNvbnRhaW5lciAuY2FyZC1pbWctY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDRyZW07IH1cbiAgICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmNhcmQtaW1nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG4vLyBuZWNlc3NhcnkgZm9yIGxpc3QgZWxlbWVudHMgdG8gY29tZSBvdXQgcmlnaHRcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgbWFyZ2luOiAwO1xufVxuLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAvLyBoZWlnaHQ6ODAlO1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICBoMSxcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmx5aW5nbGVhdGhlcjtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBjb2xvcjogJHN1Yi1saWdodDtcbiAgICAgICAgZm9udC1zaXplOiAkeHhzLWZvbnRTaXplO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAkbWFpbi1vcmFuZ2U7XG4gICAgICAgIGZvbnQtc2l6ZTogJHhzLWZvbnRTaXplO1xuICAgIH1cbiAgICAuaXRlbSxcbiAgICAuaXRlbS1sZXZlbCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzdWItcHVycGxlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiAzJSAzJTtcbiAgICB9XG4gICAgLml0ZW0tbGV2ZWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2U7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweDtcbiAgICB9XG59XG4uYm90dG9tLWNhcmRzLWNvbnRhaW5lciB7XG4gICAgYm90dG9tOiAyJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgICBoZWlnaHQ6IDIwdmg7XG5cbiAgICAuY2FyZHNMaXN0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcblxuICAgICAgICAgICAgLmJ1YmJsZU5leHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Yi1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tcmVkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDclO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLXJlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLWltZy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/play/user-stats/user-stats.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/play/user-stats/user-stats.component.ts ***!
    \*********************************************************/

  /*! exports provided: UserStatsComponent */

  /***/
  function srcAppPlayUserStatsUserStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStatsComponent", function () {
      return UserStatsComponent;
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


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");
    /* harmony import */


    var _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/geoloc.service */
    "./src/app/shared/services/geoloc.service.ts");

    var UserStatsComponent = /*#__PURE__*/function () {
      function UserStatsComponent(userStatsService, geolocService) {
        _classCallCheck(this, UserStatsComponent);

        this.userStatsService = userStatsService;
        this.geolocService = geolocService;
        this.cardIsNext = true;
      }

      _createClass(UserStatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setStats();
        }
      }, {
        key: "setStats",
        value: function setStats() {
          var _this6 = this;

          // totalPoints
          this.userStatsService.getCurrentTotalPoints().subscribe(function (data) {
            return _this6.totalPoints = data;
          });
          console.log('totalPoints------', this.totalPoints); // totalCandy

          this.userStatsService.getCurrentBackpackCount().subscribe(function (data) {
            return _this6.candyCount = data;
          });
          console.log('candy count------', this.candyCount); // currentLevel

          this.currentLevel = this.userStatsService.setCurrentLevel(this.totalPoints);
          console.log('levelName-------', this.currentLevel.levelName, this.currentLevel.levelCardName); // nextLevel
          // this.nextLevel = this.currentLevel + 1;
          // all cards

          this.collectedCards = this.userStatsService.getAllCards();
          console.log('collected cards----', this.collectedCards); // savedAddresses
        }
      }]);

      return UserStatsComponent;
    }();

    UserStatsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"]
      }, {
        type: _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__["GeolocService"]
      }];
    };

    UserStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-stats',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-stats.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/user-stats/user-stats.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-stats.component.scss */
      "./src/app/play/user-stats/user-stats.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"], _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__["GeolocService"]])], UserStatsComponent);
    /***/
  },

  /***/
  "./src/app/shared/pipes/keys/keys.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/pipes/keys/keys.ts ***!
    \*******************************************/

  /*! exports provided: KeysPipe */

  /***/
  function srcAppSharedPipesKeysKeysTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeysPipe", function () {
      return KeysPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KeysPipe = /*#__PURE__*/function () {
      function KeysPipe() {
        _classCallCheck(this, KeysPipe);
      }

      _createClass(KeysPipe, [{
        key: "transform",
        // Takes a value and makes it lowercase
        value: function transform(value) {
          return value.toLowerCase();
        }
      }]);

      return KeysPipe;
    }();

    KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'keys'
    })], KeysPipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/keyvalue/keyvalue.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/pipes/keyvalue/keyvalue.ts ***!
    \***************************************************/

  /*! exports provided: KeyvaluePipe */

  /***/
  function srcAppSharedPipesKeyvalueKeyvalueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyvaluePipe", function () {
      return KeyvaluePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KeyvaluePipe = /*#__PURE__*/function () {
      function KeyvaluePipe() {
        _classCallCheck(this, KeyvaluePipe);
      }

      _createClass(KeyvaluePipe, [{
        key: "transform",
        value: function transform(object) {
          var a = [];

          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              a.push({
                key: key,
                value: object[key]
              });
            }
          } // console.log('je suis keyvalue pipe object: ', a);


          return a;
        }
      }]);

      return KeyvaluePipe;
    }();

    KeyvaluePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'keyvalue',
      pure: true // https://www.bennadel.com/blog/3325-understanding-pipe-instantiation-life-cycles-in-angular-4-2-3.htm

    })], KeyvaluePipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/pipes.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/pipes/pipes.module.ts ***!
    \**********************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppSharedPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _keys_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./keys/keys */
    "./src/app/shared/pipes/keys/keys.ts");
    /* harmony import */


    var _keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keyvalue/keyvalue */
    "./src/app/shared/pipes/keyvalue/keyvalue.ts");
    /* harmony import */


    var _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./remove-underscore/remove-underscore */
    "./src/app/shared/pipes/remove-underscore/remove-underscore.ts");
    /* harmony import */


    var _shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shorten-string/shorten-string */
    "./src/app/shared/pipes/shorten-string/shorten-string.ts");
    /* harmony import */


    var _remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./remove-chars/remove-chars */
    "./src/app/shared/pipes/remove-chars/remove-chars.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_keys_keys__WEBPACK_IMPORTED_MODULE_2__["KeysPipe"], _keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"], _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__["RemoveUnderscorePipe"], _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__["RemoveUnderscorePipe"], _shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_5__["ShortenStringPipe"], _remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__["RemoveCharsPipe"]],
      imports: [],
      exports: [_keys_keys__WEBPACK_IMPORTED_MODULE_2__["KeysPipe"], _keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"], _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__["RemoveUnderscorePipe"], _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__["RemoveUnderscorePipe"], _shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_5__["ShortenStringPipe"], _remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__["RemoveCharsPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/shared/pipes/remove-chars/remove-chars.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/pipes/remove-chars/remove-chars.ts ***!
    \***********************************************************/

  /*! exports provided: RemoveCharsPipe */

  /***/
  function srcAppSharedPipesRemoveCharsRemoveCharsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveCharsPipe", function () {
      return RemoveCharsPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RemoveCharsPipe = /*#__PURE__*/function () {
      function RemoveCharsPipe() {
        _classCallCheck(this, RemoveCharsPipe);
      }

      _createClass(RemoveCharsPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value.charAt(2) === ':') {
            return value.substring(3, value.length); // or return value.slice(3, value.length);
          }

          return value;
        }
      }]);

      return RemoveCharsPipe;
    }();

    RemoveCharsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'removeChars'
    })], RemoveCharsPipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/remove-underscore/remove-underscore.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/pipes/remove-underscore/remove-underscore.ts ***!
    \*********************************************************************/

  /*! exports provided: RemoveUnderscorePipe */

  /***/
  function srcAppSharedPipesRemoveUnderscoreRemoveUnderscoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveUnderscorePipe", function () {
      return RemoveUnderscorePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RemoveUnderscorePipe = /*#__PURE__*/function () {
      function RemoveUnderscorePipe() {
        _classCallCheck(this, RemoveUnderscorePipe);
      }

      _createClass(RemoveUnderscorePipe, [{
        key: "transform",
        value: function transform(value) {
          var toReplace = /[-_]/gm;

          if (value) {
            return value = value.toString().replace(toReplace, ' ');
          }
        }
      }]);

      return RemoveUnderscorePipe;
    }();

    RemoveUnderscorePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'removeUnderscore',
      pure: true
    })], RemoveUnderscorePipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/shorten-string/shorten-string.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/pipes/shorten-string/shorten-string.ts ***!
    \***************************************************************/

  /*! exports provided: ShortenStringPipe */

  /***/
  function srcAppSharedPipesShortenStringShortenStringTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShortenStringPipe", function () {
      return ShortenStringPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShortenStringPipe = /*#__PURE__*/function () {
      function ShortenStringPipe() {
        _classCallCheck(this, ShortenStringPipe);
      }

      _createClass(ShortenStringPipe, [{
        key: "transform",
        value: function transform(value, maxChars) {
          var lastEmptyIndex = null;

          if (value.length > maxChars) {
            if (value.charAt(maxChars - 1) !== ' ') {
              for (var i = maxChars - 1; i >= 0; i--) {
                if (value[i] === ' ') {
                  lastEmptyIndex = i;
                  break;
                } else {
                  lastEmptyIndex = lastEmptyIndex;
                }
              }
            } else {
              lastEmptyIndex = value[maxChars];
            }

            return value.substring(0, lastEmptyIndex);
          } else {
            return value;
          }
        }
      }]);

      return ShortenStringPipe;
    }();

    ShortenStringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'shortenString'
    })], ShortenStringPipe);
    /***/
  }
}]);
//# sourceMappingURL=play-play-module-es5.js.map