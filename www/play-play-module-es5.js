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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">My addresses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"addressesPage-container flexColCentered\">\n\n  <div class=\"map-sample\">\n    <img src=\"assets/graphicMat/map_sample.png\" alt=\"map-sample\" />\n  </div>\n\n  <div *ngIf=\"listIsEmpty\" class=\"bubble\">\n    <img [src]=\"noAddressBubble\" alt=\"noAddressesYet\" />\n  </div>\n\n  <div class=\"address-list-container\">\n    <ul *ngFor=\"let address of addressList\" class=\"address-item\">\n      <li class=\"address-item\">\n        {{  address.lat }} : {{ address.long }}\n      </li>\n      <div class=\"btns-container\" (click)=\"removeAddress(address)\">\n        <!-- <img [src]=\"plusBtn\" alt=\"plus-btn\" (click)=\"\" /> -->\n        <img [src]=\"minusBtn\" alt=\"minus-btn\" />\n      </div>\n    </ul>\n  </div>\n\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Backpack</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"backpack-elements-container flexColCentered\">\n    <div class=\"bag-illust-container circlesImgBg\">\n      <div class=\"bag-img-container\">\n        <img src=\"assets/graphicMat/candyBag.png\" alt=\"\" />\n      </div>\n\n      <div class=\"total flexColCentered\">\n        <h2>Total candy : {{ totalCandy }}</h2>\n        <h2>Total points : {{ totalPoints }}</h2>\n      </div>\n    </div>\n\n    <!-- <div class=\"cornCandy-container\">\n      <ng-container *ngFor=\"let i of [].constructor(8)\">\n        <img src=\"assets/graphicMat/corn_candy.png\" alt=\"\" />\n      </ng-container>\n    </div> -->\n\n    <!-- TO DO ? : get level (banner) at init --\n      <div class=\"current-level\">\n          <h2>Current level</h2>\n          <h2>{{levelName}}</h2>\n      </div> -->\n    <div *ngIf=\"collectedCandy.length > 0;else noCandyYetBlock\">\n      <div *ngFor=\"let item of collectedCandy\" class=\"myCollectedCandy\">\n        <div class=\"candyItem\">\n          <div class=\"candyThumbnail\">\n            <img src=\"{{item.image_front_url}}\">\n          </div>\n          <div class=\"candyName\">\n            <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n            <h1>{{ item.product_name | shortenString:30 }}</h1>\n            <button (click)=\"seeCandyInfos(item._id)\">see infos</button>\n          </div>\n          <div class=\"amount\">\n            <h1>{{ item.amountInBackpack }}</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #noCandyYetBlock>\n    <div class=\"noCandyYet\">\n      <!-- <h1>No candy yet !</h1> -->\n      <img [src]=\"ghostBubble\" alt=\"no candy bubble\" />\n      <img [src]=\"ghostImg\" alt=\"little ghost\" />\n    </div>\n  </ng-template>\n\n\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Candy Infos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"candyDetailsPage\" *ngIf=\"candyItem\">\n\n    <div class=\"candyItemTitle flexRowCentered\">\n      <div class=\"candyThumbnail\">\n        <img src=\"{{ candyItem.image_front_url }}\">\n      </div>\n      <div>\n        <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n      </div>\n    </div>\n\n    <ion-row class=\"candy-checklist\">\n      <ion-col>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"organic;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Organic\n        </ion-row>\n\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"additives;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Additives\n        </ion-row>\n      </ion-col>\n\n      <ion-col>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"glutenFree;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Gluten free\n        </ion-row>\n\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"vegan;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegan\n        </ion-row>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"vegetarian;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegetarian\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"rubriks\">\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleIngredients()\">\n          <h1>Ingredients hierarchy</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div class=\"candyIngredients\" *ngIf=\"showIngredients\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.ingredients_tags\">\n              <td>\n                {{ i | removeChars | removeUnderscore }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleNutriscore()\">\n          <h1>Nutriscore</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div class=\"candyNutriscore\" *ngIf=\"showNutriscore\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.nutriscore_data | keyvalue\">\n              <td>\n                {{ i.key | removeUnderscore }}\n              </td>\n              <td>\n                {{ i.value }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleAllergens()\">\n          <h1>Allergens</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div *ngIf=\"candyItem.allergens_hierarchy.length > 0;else none\" class=\"candyAllergens\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.allergens_hierarchy\">\n              <td>\n                {{ i | removeChars }}\n              </td>\n            </tr>\n          </table>\n        </div>\n        <ng-template #none>\n          <h1>No listed allergen in the database</h1>\n        </ng-template >\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>";
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


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Candy to find</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"candyPageContainer\">\n\n  <div class=\"add-label flexRowCentered \">\n    <ion-searchbar animated class=\"custom-searchbar\"\n    [formControl]=\"searchControl\"\n    (ionChange)=\"onSearchInput()\">\n    </ion-searchbar>\n    <img src=\"assets/graphicMat/bubble_add2.png\" alt=\"\" />\n  </div>\n\n  <div *ngIf=\"candyList$ | async as candyList; else loading\">\n    <div *ngFor=\"let candyItem of candyList$ | async\" class=\"candyList\">\n      <div class=\"candyItem\">\n        <div class=\"candyThumbnail\">\n          <img src=\"{{candyItem.image_front_url}}\">\n        </div>\n        <div class=\"candyName\">\n          <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n          <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n        </div>\n        <div class=\"plus-btn\">\n          <!-- <button (click)=\"sendId(candyItem._id)\"> -->\n          <button (click)=\"addCandyToBackpack(candyItem)\">\n            <img src=\"assets/graphicMat/zoomIn.png\" alt=\"plus-button\"/>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n    <!-- \n      TODO:  find a workaround to make loading anim work with condition \n      <ng-template #loading>\n        <app-loading-animation></app-loading-animation>\n      </ng-template>  \n    -->\n  \n  <ng-template #loading>\n    <h1 class=\"loading\">\n      loading...    \n    </h1>\n  </ng-template>  \n\n  <div class=\"newChallenge-btn\" *ngIf=\"newChallenge\">\n    <button (click)=\"goToChallenges()\">New challenge!</button>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges-list/challenges-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges-list/challenges-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayChallengesListChallengesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Challenges</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"special-bg\">\n\n  <div *ngIf=\"displayList;else listIsEmpty\" class=\"main-container\">\n    <h2>You have achieved these so far ! </h2>\n    \n    <div *ngFor=\"let treat of achievedTreatsList\">\n      <!-- <h2>{{ treat.challengeType}}:</h2> -->\n      <div class=\"flexRowCentered\">\n        <img [src]=iconTrue /><h1>{{ treat.challengeDescription }}</h1>\n      </div>  \n    </div>\n\n    <div *ngFor=\"let trick of achievedTricksList\" class=\"flexRowCentered\">\n      <!-- <h2>{{ treat.challengeType}}:</h2> -->\n      <div class=\"flexRowCentered\">\n        <img [src]=iconTrue /><h1>{{ trick.challengeDescription }}</h1>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #listIsEmpty>\n    <img [src]=\"noChallengesYetImg\" alt=\"noChallengesYet\" class=\"bubble\" />\n  </ng-template >\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <!--  <ion-title text-center class=\"toolbarTitle\">Trick or treat</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"special-bg\">\n\n  <div class=\"main-container\" *ngIf=\"dataIsLoaded\">\n\n    <div class=\"upper-row\">\n      <h1>You Chose..<br><span>{{ choice }} !</span></h1>\n    </div>\n  \n    <div class=\"main-row\">\n      <h1>Your challenge:</h1>\n      <div class=\"description-container\">\n        <p>{{ currentChallenge.challengeDescription }}</p>\n        <p>Bonus Points : {{ currentChallenge.bonusPoints }}</p>\n      </div>\n    </div>\n\n  \n    <div class=\"bottom-row\">\n      <p>{{ currentChallenge.challengeType }}</p>\n      <button class=\"classicBtn\" (click)=\"isDone()\">Done!</button>\n      <button class=\"classicBtn\" (click)=\"isSkipped()\">Skip challenge</button>\n      <img src=\"{{ candleSkullImg }}\" alt=\"candle-skull\" />\n    </div>\n\n  </div>\n\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">My stats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"stats-container\">\n    <!--   <div *ngFor=\"let stat of userStats\" class=\"stats-container\" style=\"background-image: '{{ currentLevel.levelImg }}'\">\n -->\n    <img src=\"{{ currentLevel.levelImg }}\" />\n\n    <div class=\"item-level\">\n      <h1>Current Level</h1>\n      <h2>{{ currentLevel.levelName }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Total Points</h1>\n      <h2>{{ totalPoints }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Total Candy</h1>\n      <h2>{{ candyCount }}</h2>\n    </div>\n\n    <div class=\"item\" (click)=\"goToAddresses()\">\n      <h1>Saved Addresses</h1>\n      <h2>{{ savedAddressesCount }}</h2>\n    </div>\n\n    <div class=\"item\" (click)=\"goToChallenges()\">\n      <h1>Challenges</h1>\n      <h2>{{ completedChallengesCount }}</h2>\n    </div>\n  </div>\n\n\n  <div class=\"bottom-cards-container\">\n\n    <div class=\"cardsList flexRowCentered\">\n      <div *ngFor=\"let level of levels\">\n        <div class=\"card-container flexColCentered\">\n          <div *ngIf=\"level.isNext\" class=\"bubbleNext\">\n            <h2>Next mission:<br>Get the <span>{{ level.levelCardName }} !</span></h2>\n          </div>\n          <div class=\"card-img-container\">\n            <img src=\"{{ level.levelCard }}\" [class] =\"level.isActive ? 'opacity' : 'noOpacity'\"/>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>";
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


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.addressesPage-container .address-list-container {\n  height: 30vh;\n  color: #b2caf8; }\n\n.addressesPage-container .address-list-container ul {\n    width: 90%;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n\n.addressesPage-container .address-list-container ul li {\n      min-width: 85%;\n      border: 2px solid #b1c9fb;\n      border-radius: 20px;\n      list-style-image: url('mini_skull.png');\n      font-size: .7rem;\n      font-family: TitanOne;\n      color: #ffeedf;\n      padding: 5%;\n      margin: 2%; }\n\n.addressesPage-container .address-list-container ul .btns-container {\n      width: 10%; }\n\n.addressesPage-container .bubble {\n  width: 40%;\n  margin: 10% auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFtRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbkQ4Qzs7QUNmOUM7RUFFUSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUh0QjtJQUtZLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTs7QUFUL0I7TUFZZ0IsY0FBYTtNQUNiLHlCRktLO01FSkwsbUJBQW1CO01BQ25CLHVDQUE2RDtNQUM3RCxnQkFBZ0I7TUFDaEIscUJGOENLO01FN0NMLGNGRlE7TUVHUixXQUFXO01BQ1gsVUFBVSxFQUFBOztBQXBCMUI7TUF1QmdCLFVBQVUsRUFBQTs7QUF2QjFCO0VBNkJRLFVBQVU7RUFDVixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgJGxpZ2h0cHVycGxlLWJnOiByZ2JhKDE5OSwgMywgMTk5LCAwLjM0Mik7XG4gIFxuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogcmdiKDIyMywgMjIxLCAyMTMpO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLmFkZHJlc3Nlc1BhZ2UtY29udGFpbmVyIC5hZGRyZXNzLWxpc3QtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICBjb2xvcjogI2IyY2FmODsgfVxuICAuYWRkcmVzc2VzUGFnZS1jb250YWluZXIgLmFkZHJlc3MtbGlzdC1jb250YWluZXIgdWwge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLmFkZHJlc3Nlc1BhZ2UtY29udGFpbmVyIC5hZGRyZXNzLWxpc3QtY29udGFpbmVyIHVsIGxpIHtcbiAgICAgIG1pbi13aWR0aDogODUlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2IxYzlmYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvbWluaV9za3VsbC5wbmdcIik7XG4gICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgY29sb3I6ICNmZmVlZGY7XG4gICAgICBwYWRkaW5nOiA1JTtcbiAgICAgIG1hcmdpbjogMiU7IH1cbiAgICAuYWRkcmVzc2VzUGFnZS1jb250YWluZXIgLmFkZHJlc3MtbGlzdC1jb250YWluZXIgdWwgLmJ0bnMtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMCU7IH1cblxuLmFkZHJlc3Nlc1BhZ2UtY29udGFpbmVyIC5idWJibGUge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDEwJSBhdXRvOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5hZGRyZXNzZXNQYWdlLWNvbnRhaW5lciB7XG4gICAgLmFkZHJlc3MtbGlzdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgIGNvbG9yOiAjYjJjYWY4O1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOjg1JTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L21pbmlfc2t1bGwucG5nXCIpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LW9yYW5nZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnViYmxlIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luOiAxMCUgYXV0bztcbiAgICB9XG59XG4iXX0= */";
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AddressesComponent = /*#__PURE__*/function () {
      function AddressesComponent(userStatsService, alertController) {
        _classCallCheck(this, AddressesComponent);

        this.userStatsService = userStatsService;
        this.alertController = alertController;
        this.addressCoords = {};
        this.noAddressBubble = 'assets/graphicMat/noAddressYet_bubble.png';
        this.plusBtn = 'assets/graphicMat/zoomIn.png';
        this.minusBtn = 'assets/graphicMat/zoomOut.png';
        this.addressList = [];
        this.addressCoords = {
          lat: 0,
          "long": 0
        };
        this.listIsEmpty = false;
      }

      _createClass(AddressesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userStatsService.getCurrentAddressesList().subscribe(function (data) {
            console.log('RAW==', data);
            _this.addressList = data;
            console.log('ADDRESS lIST==', _this.addressList);

            if (_this.addressList.length === 0) {
              _this.listIsEmpty = true;
            }
          });
        }
      }, {
        key: "removeAddress",
        value: function removeAddress(address) {
          // this.addressList.
          this.presentConfirmDelete();
        }
      }, {
        key: "presentConfirmDelete",
        value: function presentConfirmDelete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'dialog',
                      header: 'Are you sure?',
                      subHeader: 'Do you really want to delete this address?',
                      // message: 'Do you really want to delete this address?',
                      buttons: ['No!', 'Delete', 'Cancel']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AddressesComponent;
    }();

    AddressesComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], AddressesComponent);
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


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.backpack-elements-container {\n  margin: 5% 10%; }\n\n.backpack-elements-container .bag-illust-container {\n    height: 10rem;\n    width: 100%;\n    background-size: cover;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center; }\n\n.backpack-elements-container .bag-illust-container .bag-img-container {\n      margin: auto 2%; }\n\n.backpack-elements-container .bag-illust-container .bag-img-container img {\n        height: 6rem; }\n\n.backpack-elements-container .total {\n    align-items: flex-start; }\n\n.backpack-elements-container .total h2 {\n      text-align: center;\n      text-transform: uppercase;\n      font-size: 1rem;\n      font-family: TitanOne; }\n\n.backpack-elements-container .total h2:first-child {\n      color: #ffa500; }\n\n.backpack-elements-container .total h2:nth-child(2) {\n      color: #ffc0cb; }\n\n.backpack-elements-container .myCollectedCandy {\n    width: 65vw; }\n\n.backpack-elements-container .myCollectedCandy .candyItem {\n      padding: 3%;\n      margin: 3% 0%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      border: 2px solid #b1c9fb;\n      border-radius: 50px; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyThumbnail {\n        height: 3rem;\n        width: 3rem;\n        min-width: 3rem;\n        background-color: pink;\n        align-content: center;\n        align-items: center;\n        overflow: hidden;\n        border-radius: 50%; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName {\n        max-width: 60%;\n        text-align: center;\n        display: flex;\n        flex-direction: column; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName h1 {\n          font-family: TitanOne;\n          color: #b1c9fb;\n          font-size: 0.7rem;\n          text-transform: uppercase;\n          transform: scale(1, 1.2);\n          -webkit-transform: scale(1, 1.2);\n          /* Safari and Chrome */\n          -moz-transform: scale(1, 1.2);\n          /* Firefox */\n          -ms-transform: scale(1, 1.2);\n          /* IE 9+ */\n          -o-transform: scale(1, 1.2);\n          /* Opera */ }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName button {\n          color: #ffa500;\n          border: 1px solid #ffa500;\n          font-family: TitanOne;\n          background-color: transparent; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .amount {\n        text-align: center; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .amount h1 {\n          width: 40px;\n          height: 1.5rem;\n          font-family: TitanOne;\n          color: #fbb1f1;\n          font-size: 1rem;\n          text-transform: uppercase; }\n\n.noCandyYet {\n  margin-top: 5%;\n  text-align: center;\n  max-width: 20rem;\n  /*          background-image: url(\"src/assets/graphicMat/lightning.png\");\n            background-size: cover;\n            background-position: center; */ }\n\n.noCandyYet img:first-child {\n    max-width: 10rem;\n    float: right; }\n\n.noCandyYet img:nth-child(2) {\n    height: 15rem; }\n\n.noCandyYet h1 {\n    font-family: TitanOne;\n    color: #fbb1f1;\n    font-size: 1rem;\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvYmFja3BhY2svYmFja3BhY2suY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC9wbGF5L2JhY2twYWNrL2JhY2twYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUE7O2tDQ0RrQyxFREdDOztBQW1EakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NuRDhDOztBQ2Y5QztFQUVJLGNBQWMsRUFBQTs7QUFGbEI7SUFLUSxhQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QixFQUFBOztBQVYvQjtNQVlZLGVBQWUsRUFBQTs7QUFaM0I7UUFjZ0IsWUFBWSxFQUFBOztBQWQ1QjtJQW9CUSx1QkFBdUIsRUFBQTs7QUFwQi9CO01Bc0JZLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLHFCRnNDUyxFQUFBOztBRS9EckI7TUE0QlksY0ZkVyxFQUFBOztBRWR2QjtNQStCWSxjRlhTLEVBQUE7O0FFcEJyQjtJQW1DUSxXQUFXLEVBQUE7O0FBbkNuQjtNQXNDWSxXQUFXO01BQ1gsYUFBYTtNQUNiLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsbUJBQW1CLEVBQUE7O0FBN0MvQjtRQWdEZ0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBOztBQXZEbEM7UUEwRGdCLGNBQWM7UUFFZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHNCQUFzQixFQUFBOztBQTlEdEM7VUFnRW9CLHFCRkRDO1VFRUQsY0YvQ0M7VUVnREQsaUJBQWlCO1VBQ2pCLHlCQUF5QjtVQUN6Qix3QkFBd0I7VUFDeEIsZ0NBQWdDO1VBQUUsc0JBQUE7VUFDbEMsNkJBQTZCO1VBQUUsWUFBQTtVQUMvQiw0QkFBNEI7VUFBRSxVQUFBO1VBQzlCLDJCQUEyQjtVQUFFLFVBQUEsRUFBVzs7QUF4RTVEO1VBMkVvQixjRjdERztVRThESCx5QkY5REc7VUUrREgscUJGZEM7VUVlRCw2QkFBNkIsRUFBQTs7QUE5RWpEO1FBa0ZnQixrQkFBa0IsRUFBQTs7QUFsRmxDO1VBb0ZvQixXQUFXO1VBQ1gsY0FBYztVQUNkLHFCRnZCQztVRXdCRCxjRmxFQztVRW1FRCxlQUFlO1VBQ2YseUJBQXlCLEVBQUE7O0FBTXJDO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDNUI7OzBDREMwQyxFQ0NDOztBQU5uQztJQVFRLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBVHBCO0lBWVEsYUFBWSxFQUFBOztBQVpwQjtJQWVRLHFCRi9DSztJRWdETCxjRjFGSztJRTJGTCxlQUFlO0lBQ2YseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5L2JhY2twYWNrL2JhY2twYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICAkbGlnaHRwdXJwbGUtYmc6IHJnYmEoMTk5LCAzLCAxOTksIDAuMzQyKTtcbiAgXG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiByZ2IoMjIzLCAyMjEsIDIxMyk7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4uYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1JSAxMCU7IH1cbiAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAuYmFnLWlsbHVzdC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLmJhZy1pbGx1c3QtY29udGFpbmVyIC5iYWctaW1nLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IGF1dG8gMiU7IH1cbiAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLmJhZy1pbGx1c3QtY29udGFpbmVyIC5iYWctaW1nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICBoZWlnaHQ6IDZyZW07IH1cbiAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwgaDIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTsgfVxuICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLnRvdGFsIGgyOmZpcnN0LWNoaWxkIHtcbiAgICAgIGNvbG9yOiAjZmZhNTAwOyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwgaDI6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGNvbG9yOiAjZmZjMGNiOyB9XG4gIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkge1xuICAgIHdpZHRoOiA2NXZ3OyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIHtcbiAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgbWFyZ2luOiAzJSAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMWM5ZmI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XG4gICAgICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC5teUNvbGxlY3RlZENhbmR5IC5jYW5keUl0ZW0gLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAgICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIC5jYW5keU5hbWUge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgICAgY29sb3I6ICNiMWM5ZmI7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBGaXJlZm94ICovXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBJRSA5KyAqL1xuICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBPcGVyYSAqLyB9XG4gICAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmE1MDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYTUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuYW1vdW50IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuYW1vdW50IGgxIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgICAgY29sb3I6ICNmYmIxZjE7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm5vQ2FuZHlZZXQge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICAvKiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvbGlnaHRuaW5nLnBuZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovIH1cbiAgLm5vQ2FuZHlZZXQgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIGZsb2F0OiByaWdodDsgfVxuICAubm9DYW5keVlldCBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgICBoZWlnaHQ6IDE1cmVtOyB9XG4gIC5ub0NhbmR5WWV0IGgxIHtcbiAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgY29sb3I6ICNmYmIxZjE7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciB7XG5cbiAgICBtYXJnaW46IDUlIDEwJTtcblxuICAgIC5iYWctaWxsdXN0LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDoxMHJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC5iYWctaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMiU7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50b3RhbCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgfVxuICAgICAgICBoMjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICB9XG4gICAgICAgIGgyOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tcGluaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAubXlDb2xsZWN0ZWRDYW5keSB7XG4gICAgICAgIHdpZHRoOiA2NXZ3O1xuXG4gICAgICAgIC5jYW5keUl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgICBtYXJnaW46IDMlIDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2IxYzlmYjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbiAgICAgICAgICAgIC5jYW5keVRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhbmR5TmFtZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjokbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogSUUgOSsgKi9cbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBPcGVyYSAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWFpbi1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbW91bnQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzdWItcGluaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiAgICAgICAgLm5vQ2FuZHlZZXQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwcmVtO1xuLyogICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2xpZ2h0bmluZy5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xuICAgICAgICAgICAgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZzpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGhlaWdodDoxNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkc3ViLXBpbms7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuIl19 */";
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
          var _this2 = this;

          this.userStatsService.getCurrentBackpackContent().subscribe(function (data) {
            _this2.collectedCandy = data;
          });
          console.log('COLLECTED CANDY RETRIEVED ON INIT: ', this.collectedCandy);
        }
      }, {
        key: "setStats",
        value: function setStats() {
          var _this3 = this;

          this.userStatsService.getCurrentBackpackCount().subscribe(function (data) {
            return _this3.totalCandy = data;
          });
          this.userStatsService.getCurrentTotalPoints().subscribe(function (data) {
            return _this3.totalPoints = data;
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


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.candyDetailsPage {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 5% auto; }\n\n.candyDetailsPage .candyItemTitle {\n    width: 100%;\n    padding: 2%;\n    margin: 10% auto;\n    justify-content: unset;\n    border: 3px solid #ffa500;\n    border-radius: 50px; }\n\n.candyDetailsPage .candyItemTitle .candyThumbnail {\n      height: 3rem;\n      width: 3rem;\n      background-color: #ffc0cb;\n      align-content: center;\n      align-items: center;\n      overflow: hidden;\n      border-radius: 50%;\n      margin-right: 3%; }\n\n.candyDetailsPage .candyItemTitle h1 {\n      font-size: 1rem;\n      font-family: TitanOne;\n      color: #b1c9fb;\n      text-transform: uppercase; }\n\n.candyDetailsPage .candy-checklist {\n    border: 5px solid #ffc0cb;\n    border-radius: 15px; }\n\n.candyDetailsPage .candy-checklist .checklistType {\n      padding: 5%;\n      font-size: 0.8rem;\n      font-family: TitanOne;\n      color: #ffa500;\n      padding: 3% 0%; }\n\n.candyDetailsPage .candy-checklist .checklistType img {\n        max-width: 25px;\n        padding: 3%; }\n\n.candyDetailsPage .rubriks {\n    margin: 3% auto;\n    width: 100%; }\n\n.candyDetailsPage .rubriks .rubrik h1 {\n      font-size: .8rem;\n      color: #ffa500;\n      font-family: TitanOne; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title {\n      justify-content: space-between;\n      border-bottom: 3px solid #b1c9fb; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 {\n        font-size: 1rem;\n        color: #b1c9fb;\n        text-align: center;\n        line-height: 3;\n        font-family: TitanOne;\n        text-transform: uppercase; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 .selected {\n          font-size: 7vw; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 img {\n          width: 25px;\n          height: 25px; }\n\n.candyDetailsPage .candyIngredients table,\n  .candyDetailsPage .candyNutriscore table,\n  .candyDetailsPage .candyAllergens table {\n    margin: auto;\n    width: 100%; }\n\n.candyDetailsPage .candyIngredients table,\n  .candyDetailsPage .candyIngredients td,\n  .candyDetailsPage .candyIngredients tr,\n  .candyDetailsPage .candyNutriscore table,\n  .candyDetailsPage .candyNutriscore td,\n  .candyDetailsPage .candyNutriscore tr,\n  .candyDetailsPage .candyAllergens table,\n  .candyDetailsPage .candyAllergens td,\n  .candyDetailsPage .candyAllergens tr {\n    margin-top: 5%;\n    padding: 2%;\n    border: 2px solid #b1c9fb;\n    font-size: 1rem;\n    color: #ffa500;\n    font-family: TitanOne; }\n\n.plus-btn > button {\n  width: 50px;\n  height: 50px;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2FuZHktZGV0YWlscy9jYW5keS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jYW5keS1kZXRhaWxzL2NhbmR5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBbURqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ25EOEM7O0FDZjlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBSm5CO0lBUVEsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCRk5lO0lFT2YsbUJBQW1CLEVBQUE7O0FBYjNCO01BZ0JZLFlBQVk7TUFDWixXQUFXO01BQ1gseUJGTlM7TUVPVCxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZ0JBQWdCLEVBQUE7O0FBdkI1QjtNQTBCWSxlQUFlO01BQ2YscUJGNEJTO01FM0JULGNGbEJTO01FbUJULHlCQUF5QixFQUFBOztBQTdCckM7SUFpQ1EseUJGckJhO0lFc0JiLG1CQUFtQixFQUFBOztBQWxDM0I7TUFxQ1ksV0FBVztNQUNYLGlCQUFpQjtNQUNqQixxQkZnQlM7TUVmVCxjRmxDVztNRW1DWCxjQUFjLEVBQUE7O0FBekMxQjtRQTJDZ0IsZUFBZTtRQUNmLFdBQVcsRUFBQTs7QUE1QzNCO0lBa0RRLGVBQWU7SUFDZixXQUFXLEVBQUE7O0FBbkRuQjtNQXNEZ0IsZ0JBQWdCO01BQ2hCLGNGakRPO01Fa0RQLHFCRkRLLEVBQUE7O0FFdkRyQjtNQTJEZ0IsOEJBQThCO01BQzlCLGdDRmxESyxFQUFBOztBRVZyQjtRQStEb0IsZUFBZTtRQUNmLGNGdERDO1FFdURELGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QscUJGWkM7UUVhRCx5QkFBeUIsRUFBQTs7QUFwRTdDO1VBc0V3QixjQUFjLEVBQUE7O0FBdEV0QztVQXlFd0IsV0FBVztVQUNYLFlBQVksRUFBQTs7QUExRXBDOzs7SUFxRlksWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUF0RnZCOzs7Ozs7Ozs7SUEyRlksY0FBYztJQUNkLFdBQVc7SUFDWCx5QkZuRlM7SUVvRlQsZUFBZTtJQUNmLGNGekZXO0lFMEZYLHFCRnpDUyxFQUFBOztBRThDckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS9jYW5keS1kZXRhaWxzL2NhbmR5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uY2FuZHlEZXRhaWxzUGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNSUgYXV0bzsgfVxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJdGVtVGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZhNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJdGVtVGl0bGUgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzBjYjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzJTsgfVxuICAgIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUl0ZW1UaXRsZSBoMSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmYzBjYjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XG4gICAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCAuY2hlY2tsaXN0VHlwZSB7XG4gICAgICBwYWRkaW5nOiA1JTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgY29sb3I6ICNmZmE1MDA7XG4gICAgICBwYWRkaW5nOiAzJSAwJTsgfVxuICAgICAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCAuY2hlY2tsaXN0VHlwZSBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDMlOyB9XG4gIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIHtcbiAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuY2FuZHlEZXRhaWxzUGFnZSAucnVicmlrcyAucnVicmlrIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICBjb2xvcjogI2ZmYTUwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTsgfVxuICAgIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIC5ydWJyaWsgLnJ1YnJpay10aXRsZSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2IxYzlmYjsgfVxuICAgICAgLmNhbmR5RGV0YWlsc1BhZ2UgLnJ1YnJpa3MgLnJ1YnJpayAucnVicmlrLXRpdGxlIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMztcbiAgICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgICAgIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIC5ydWJyaWsgLnJ1YnJpay10aXRsZSBoMSAuc2VsZWN0ZWQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3OyB9XG4gICAgICAgIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIC5ydWJyaWsgLnJ1YnJpay10aXRsZSBoMSBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDsgfVxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJbmdyZWRpZW50cyB0YWJsZSxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5TnV0cmlzY29yZSB0YWJsZSxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5QWxsZXJnZW5zIHRhYmxlIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5SW5ncmVkaWVudHMgdGFibGUsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUluZ3JlZGllbnRzIHRkLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJbmdyZWRpZW50cyB0cixcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5TnV0cmlzY29yZSB0YWJsZSxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5TnV0cmlzY29yZSB0ZCxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5TnV0cmlzY29yZSB0cixcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5QWxsZXJnZW5zIHRhYmxlLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlBbGxlcmdlbnMgdGQsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUFsbGVyZ2VucyB0ciB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2IxYzlmYjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICNmZmE1MDA7XG4gICAgZm9udC1mYW1pbHk6IFRpdGFuT25lOyB9XG5cbi5wbHVzLWJ0biA+IGJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG4vLyBuZWNlc3NhcnkgZm9yIGxpc3QgZWxlbWVudHMgdG8gY29tZSBvdXQgcmlnaHRcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgbWFyZ2luOiAwO1xufVxuLmNhbmR5RGV0YWlsc1BhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogNSUgYXV0bztcblxuICAgIC5jYW5keUl0ZW1UaXRsZSB7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBzdGlja3k7ID0+IGNoZWNrIHdoeSBub3Qgd29ya2luZ1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogdW5zZXQ7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRtYWluLW9yYW5nZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAgICAgICAuY2FuZHlUaHVtYm5haWwge1xuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1waW5rO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tYmx1ZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhbmR5LWNoZWNrbGlzdCB7XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRtYWluLXBpbms7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICAgICAgLmNoZWNrbGlzdFR5cGUge1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgcGFkZGluZzogMyUgMCU7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucnVicmlrcyB7XG5cbiAgICAgICAgbWFyZ2luOiAzJSBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnJ1YnJpayB7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucnVicmlrLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRtYWluLWJsdWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRvIGFkZCBvbiBydWJyaWtzIDogIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlOyBcbiAgICAuY2FuZHlJbmdyZWRpZW50cyxcbiAgICAuY2FuZHlOdXRyaXNjb3JlLFxuICAgIC5jYW5keUFsbGVyZ2VucyB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLFxuICAgICAgICB0ZCxcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLWJsdWU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBsdXMtYnRuID4gYnV0dG9uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */";
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
        this.showNutriscore = false;
        this.showAllergens = false;
        this.noKnownAllergen = false;
      }

      _createClass(CandyDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayCandyInfo(this.candyId);
        }
      }, {
        key: "displayCandyInfo",
        value: function displayCandyInfo(candyId) {
          var _this4 = this;

          this.activatedRoute.paramMap.subscribe(function (param) {
            _this4.candyId = param.get('id');
          });
          console.log('activated route param= ', this.candyId);
          this.candyApiService.getCandyById(this.candyId).subscribe(function (response) {
            _this4.candyItem = response;
            _this4.candyItem.product_name = response.product_name;
            _this4.candyItem.image_front_url = response.image_front_url;
            _this4.candyItem.ingredients_tags = response.ingredients_tags;
            _this4.candyItem.nutriscore_data = response.nutriscore_data;
            _this4.candyItem.allergens_hierarchy = response.allergens_hierarchy;
            _this4.candyItem.additives_tags = response.additives_tags;
            _this4.candyItem.labels = response.labels;
            console.log('candy response: ', response);

            var _iterator = _createForOfIteratorHelper(_this4.candyItem.allergens_hierarchy),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var x = _step.value;

                if (x === 'gluten') {
                  _this4.candyChecklist.glutenFree = false;
                  _this4.glutenFree = false;
                }
              }
              /*  ( x === 'milk' ||  x === 'butter' ||  x === 'eggs') */

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(_this4.candyItem.ingredients_tags),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _x = _step2.value;

                if (_x === 'milk') {
                  _this4.vegan = false;
                }

                if (_x === 'gelatin') {
                  _this4.vegetarian = false;
                  _this4.vegan = false;
                } else {
                  _this4.vegetarian = true;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (_this4.candyItem.additives_tags && _this4.candyItem.additives_tags.length > 0) {
              _this4.additives = true;
            }

            if (_this4.candyItem.labels && _this4.candyItem.labels.length > 0) {
              _this4.candyItem.labels.split(',').forEach(function (x) {
                if (x === 'bio' || x === 'ab') {
                  _this4.organic = true;
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
        key: "toggleNutriscore",
        value: function toggleNutriscore() {
          this.showNutriscore = !this.showNutriscore;
        }
      }, {
        key: "toggleAllergens",
        value: function toggleAllergens() {
          this.showAllergens = !this.showAllergens;
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


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.candyPageContainer .add-label {\n  height: 20vh;\n  background-image: url('sparkles.png');\n  background-size: cover;\n  background-position: center; }\n\n.candyPageContainer .add-label img {\n    max-width: 100px;\n    float: right; }\n\n.candyPageContainer .candyList {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: auto;\n  /* margin: -10% 10%; */ }\n\n.candyPageContainer .candyList .candyItem {\n    /*    border: 4px solid yellow;\n            background-color:pink; */\n    height: 7rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-content: center;\n    align-items: center;\n    border-bottom: 3px solid #b1c9fb; }\n\n.candyPageContainer .candyList .candyItem .candyName {\n      max-width: 70%;\n      display: flex;\n      flex-direction: column; }\n\n.candyPageContainer .candyList .candyItem .candyName h1,\n      .candyPageContainer .candyList .candyItem .candyName h2 {\n        font-family: TitanOne;\n        color: #b1c9fb;\n        text-transform: uppercase;\n        text-align: center; }\n\n.candyPageContainer .candyList .candyItem .candyName h1 {\n        font-size: 1rem;\n        transform: scale(1, 1.2);\n        -webkit-transform: scale(1, 1.2);\n        /* Safari and Chrome */\n        -moz-transform: scale(1, 1.2);\n        /* Firefox */\n        -ms-transform: scale(1, 1.2);\n        /* IE 9+ */\n        -o-transform: scale(1, 1.2);\n        /* Opera */ }\n\n.candyPageContainer .candyList .candyItem .candyName h2 {\n        font-size: 0.7rem; }\n\n.candyPageContainer .candyList .candyItem .candyThumbnail {\n      height: 4rem;\n      width: 4rem;\n      min-width: 4rem;\n      border: 3px solid #ff0000;\n      background-color: #ffc0cb;\n      align-content: center;\n      align-items: center;\n      overflow: hidden;\n      border-radius: 50px; }\n\n.candyPageContainer .candyList .candyItem .plus-btn > button {\n      width: 3rem;\n      height: 3rem;\n      background-color: transparent; }\n\n.candyPageContainer .loading {\n  color: #b1c9fb;\n  font-size: 4rem;\n  text-align: center; }\n\n.candyPageContainer .newChallenge-btn {\n  width: 90%;\n  margin-left: 50%;\n  bottom: 2%;\n  position: -webkit-sticky;\n  position: sticky; }\n\n.candyPageContainer .newChallenge-btn button {\n    padding: 1.5%;\n    background-color: yellow;\n    border-radius: 10px;\n    font-family: TitanOne;\n    color: #ffa500; }\n\n/* customize toasts  => global.scss */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2FuZHktbGlzdC9jYW5keS1saXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jYW5keS1saXN0L2NhbmR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBbURqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ25EOEM7O0FDZDlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBR2I7RUFHUSxZQUFZO0VBQ1oscUNBQTJEO0VBQzNELHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFObkM7SUFRWSxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBOztBQVR4QjtFQWFRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBQSxFQUF1Qjs7QUFqQi9CO0lBbUJJO29DRFlnQztJQ1Z4QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQ0ZuQlMsRUFBQTs7QUVSckI7TUE4QmdCLGNBQWM7TUFDZCxhQUFhO01BQ2Isc0JBQXNCLEVBQUE7O0FBaEN0Qzs7UUFtQ29CLHFCRmtCQztRRWpCRCxjRjVCQztRRTZCRCx5QkFBeUI7UUFDekIsa0JBQWtCLEVBQUE7O0FBdEN0QztRQXlDb0IsZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixnQ0FBZ0M7UUFBRSxzQkFBQTtRQUNsQyw2QkFBNkI7UUFBRSxZQUFBO1FBQy9CLDRCQUE0QjtRQUFFLFVBQUE7UUFDOUIsMkJBQTJCO1FBQUUsVUFBQSxFQUFXOztBQTlDNUQ7UUFpRG9CLGlCQUFpQixFQUFBOztBQWpEckM7TUFxRGdCLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLHlCRjNDSTtNRTRDSix5QkYvQ0s7TUVnREwscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7O0FBN0RuQztNQWdFZ0IsV0FBVztNQUNYLFlBQVk7TUFDWiw2QkFBNkIsRUFBQTs7QUFsRTdDO0VBdUVRLGNGL0RhO0VFZ0ViLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUF6RTFCO0VBNkVRLFVBQVU7RUFDVixnQkFBZTtFQUNmLFVBQVU7RUFDVix3QkFBZ0I7RUFBaEIsZ0JBQWdCLEVBQUE7O0FBaEZ4QjtJQW1GUSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixxQkZqQ2E7SUVrQ2IsY0ZuRmUsRUFBQTs7QUV3RnZCLHFDQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS9jYW5keS1saXN0L2NhbmR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIC5hZGQtbGFiZWwge1xuICBoZWlnaHQ6IDIwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGFya2xlcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuY2FuZHlQYWdlQ29udGFpbmVyIC5hZGQtbGFiZWwgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIGZsb2F0OiByaWdodDsgfVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIC8qIG1hcmdpbjogLTEwJSAxMCU7ICovIH1cbiAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0ge1xuICAgIC8qICAgIGJvcmRlcjogNHB4IHNvbGlkIHllbGxvdztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cGluazsgKi9cbiAgICBoZWlnaHQ6IDdyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2IxYzlmYjsgfVxuICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUge1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5TmFtZSBoMSxcbiAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDIge1xuICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgIGNvbG9yOiAjYjFjOWZiO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDEge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAvKiBGaXJlZm94ICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgIC8qIElFIDkrICovXG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgLyogT3BlcmEgKi8gfVxuICAgICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5TmFtZSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtOyB9XG4gICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgbWluLXdpZHRoOiA0cmVtO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmMDAwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMwY2I7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAuY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3QgLmNhbmR5SXRlbSAucGx1cy1idG4gPiBidXR0b24ge1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIC5sb2FkaW5nIHtcbiAgY29sb3I6ICNiMWM5ZmI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jYW5keVBhZ2VDb250YWluZXIgLm5ld0NoYWxsZW5nZS1idG4ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBib3R0b206IDIlO1xuICBwb3NpdGlvbjogc3RpY2t5OyB9XG4gIC5jYW5keVBhZ2VDb250YWluZXIgLm5ld0NoYWxsZW5nZS1idG4gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxLjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICBjb2xvcjogI2ZmYTUwMDsgfVxuXG4vKiBjdXN0b21pemUgdG9hc3RzICA9PiBnbG9iYWwuc2NzcyAqL1xuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyBuZWNlc3NhcnkgZm9yIGxpc3QgZWxlbWVudHMgdG8gY29tZSBvdXQgcmlnaHRcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIHtcblxuICAgIC5hZGQtbGFiZWwge1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGFya2xlcy5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhbmR5TGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLyogbWFyZ2luOiAtMTAlIDEwJTsgKi9cbiAgICAgICAgLmNhbmR5SXRlbSB7XG4gICAgLyogICAgYm9yZGVyOiA0cHggc29saWQgeWVsbG93O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpwaW5rOyAqL1xuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRtYWluLWJsdWU7XG5cbiAgICAgICAgICAgIC5jYW5keU5hbWUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogRmlyZWZveCAqL1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBJRSA5KyAqL1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIE9wZXJhICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRtYWluLXJlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1waW5rO1xuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wbHVzLWJ0biA+IGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5sb2FkaW5nIHtcbiAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubmV3Q2hhbGxlbmdlLWJ0biB7XG5cbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTAlO1xuICAgICAgICBib3R0b206IDIlO1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEuNSU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogY3VzdG9taXplIHRvYXN0cyAgPT4gZ2xvYmFsLnNjc3MgKi9cblxuXG5cblxuXG4iXX0= */";
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CandyListComponent = /*#__PURE__*/function () {
      function CandyListComponent(candyApiService, userStatsService, shortenString, toastController, router, activatedRoute) {
        _classCallCheck(this, CandyListComponent);

        this.candyApiService = candyApiService;
        this.userStatsService = userStatsService;
        this.shortenString = shortenString;
        this.toastController = toastController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searching = false;
        this.candyList$ = this.candyApiService.getAllCandyFromApi();
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
        this.totalPoints = 0; // this.loading = true;

        this.newChallenge = false;
        this.searchTerm = '';
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
      }

      _createClass(CandyListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.retrieveChallengeState();
        }
      }, {
        key: "retrieveChallengeState",
        value: function retrieveChallengeState() {
          var _this5 = this;

          this.paramSubscription = this.activatedRoute.paramMap.subscribe(function (param) {
            _this5.challengeState = param.get('hasBeenOpened');
          });

          if (this.challengeState === 'true') {
            this.newChallenge = false;
          }
        } // search ..........................................................

      }, {
        key: "filterItems",
        value: function filterItems(searchTerm) {
          var searchbar = document.querySelector('ion-searchbar');
          searchbar.addEventListener('ionInput', this.handleInput);
        }
      }, {
        key: "handleInput",
        value: function handleInput(event) {
          var elementsToFilter = Array.from(document.getElementsByClassName('candyList'));
          var query = event.target.value.toLowerCase();
          requestAnimationFrame(function () {
            elementsToFilter.forEach(function (item) {
              var shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
              item.style.display = shouldShow ? 'block' : 'none';
            });
          });
        }
      }, {
        key: "onSearchInput",
        value: function onSearchInput() {
          this.searching = true;
          this.filterItems(this.searchTerm);
        } // ..........................................................

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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast1, toast2, toast3;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: "+ 6 Points! ".concat(name),
                      position: 'middle',
                      duration: 300,
                      cssClass: 'new-points-toast'
                    });

                  case 2:
                    toast1 = _context2.sent;
                    _context2.next = 5;
                    return this.toastController.create({
                      message: "TOTAL POINTS :" + this.totalPoints + "!",
                      position: 'middle',
                      duration: 700,
                      cssClass: 'new-totalpoints-toast'
                    });

                  case 5:
                    toast2 = _context2.sent;
                    toast1.present();
                    setTimeout(function () {
                      toast1.dismiss();
                      toast2.present();
                    }, 500);

                    if (!(this.totalPoints % 30 === 0)) {
                      _context2.next = 14;
                      break;
                    }

                    _context2.next = 11;
                    return this.toastController.create({
                      position: 'middle',
                      duration: 800,
                      cssClass: 'levelUp-toast'
                    });

                  case 11:
                    toast3 = _context2.sent;
                    setTimeout(function () {
                      toast2.dismiss();
                      toast3.present();
                    }, 500);
                    this.newChallenge = true;

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goToChallenges",
        value: function goToChallenges() {
          this.router.navigate(['play/trickOrTreat']);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.paramSubscription.unsubscribe();
        }
      }]);

      return CandyListComponent;
    }();

    CandyListComponent.ctorParameters = function () {
      return [{
        type: _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"]
      }, {
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_5__["UserStatsService"]
      }, {
        type: _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_3__["ShortenStringPipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"], _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_5__["UserStatsService"], _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_3__["ShortenStringPipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], CandyListComponent);
    /***/
  },

  /***/
  "./src/app/play/challenges-list/challenges-list.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/play/challenges-list/challenges-list.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayChallengesListChallengesListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('spiders_bg-half.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: auto;\n    padding-top: 10%; }\n\n.special-bg .main-container h2 {\n      color: #dfddd5; }\n\n.special-bg .main-container h1 {\n      margin: 2%;\n      padding: 3%;\n      border: 2px solid #b1c9fb;\n      border-radius: 15px;\n      font-family: TitanOne;\n      color: #dfddd5;\n      font-size: 1rem; }\n\n.special-bg .main-container h1 span {\n        font-size: 3.5rem; }\n\n.special-bg .bubble {\n    width: 40%;\n    margin: 10% auto;\n    align-self: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy1saXN0L2NoYWxsZW5nZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy1saXN0L2NoYWxsZW5nZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFtRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbkQ4Qzs7QUNkOUM7Ozs7OztFQU1JLFNBQVMsRUFBQTs7QUFHYjtFQUNJLDRDQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBSC9CO0lBT1EsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBVnhCO01BWVksY0Zhb0IsRUFBQTs7QUV6QmhDO01BZVksVUFBUztNQUNULFdBQVc7TUFDWCx5QkZUUztNRVVULG1CQUFtQjtNQUNuQixxQkZrQ1M7TUVqQ1QsY0ZLb0I7TUVKcEIsZUFBZSxFQUFBOztBQXJCM0I7UUFzQm1CLGlCQUFpQixFQUFBOztBQXRCcEM7SUEyQlEsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy1saXN0L2NoYWxsZW5nZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgJGxpZ2h0cHVycGxlLWJnOiByZ2JhKDE5OSwgMywgMTk5LCAwLjM0Mik7XG4gIFxuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogcmdiKDIyMywgMjIxLCAyMTMpO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5zcGVjaWFsLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L3NwaWRlcnNfYmctaGFsZi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgaDIge1xuICAgICAgY29sb3I6ICNkZmRkZDU7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgaDEge1xuICAgICAgbWFyZ2luOiAyJTtcbiAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2IxYzlmYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2RmZGRkNTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIGgxIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTsgfVxuICAuc3BlY2lhbC1iZyAuYnViYmxlIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zcGVjaWFsLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvc3BpZGVyc19iZy1oYWxmLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG5cbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luOjIlO1xuICAgICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICBjb2xvcjogJHN1Yi1saWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIHNwYW4geyBmb250LXNpemU6IDMuNXJlbTsgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5idWJibGUge1xuXG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/play/challenges-list/challenges-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/play/challenges-list/challenges-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ChallengesListComponent */

  /***/
  function srcAppPlayChallengesListChallengesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChallengesListComponent", function () {
      return ChallengesListComponent;
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


    var _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/pipes/keyvalue/keyvalue */
    "./src/app/shared/pipes/keyvalue/keyvalue.ts");

    var ChallengesListComponent = /*#__PURE__*/function () {
      function ChallengesListComponent(userStatsService, keyvaluepipe) {
        _classCallCheck(this, ChallengesListComponent);

        this.userStatsService = userStatsService;
        this.keyvaluepipe = keyvaluepipe;
        this.noChallengesYetImg = 'assets/graphicMat/noChallengesYet_bubble.png';
        this.iconTrue = 'assets/icon/icon_true.png';
        this.achievedTricksList = [];
        this.achievedTreatsList = [];
      }

      _createClass(ChallengesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.userStatsService.getCurrentAchievedTreats().subscribe(function (data) {
            _this6.achievedTreatsList = data;

            if (data.length > 0) {
              _this6.displayList = true;
            }
          });
          this.userStatsService.getCurrentAchievedTricks().subscribe(function (data) {
            _this6.achievedTricksList = data;

            if (data.length > 0) {
              _this6.displayList = true;
            }
          });
        }
      }]);

      return ChallengesListComponent;
    }();

    ChallengesListComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"]
      }, {
        type: _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"]
      }];
    };

    ChallengesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-challenges-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./challenges-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges-list/challenges-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./challenges-list.component.scss */
      "./src/app/play/challenges-list/challenges-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"], _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"]])], ChallengesListComponent);
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


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('spiders_bg-half.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: auto;\n    padding-top: 10%; }\n\n.special-bg .main-container .upper-row,\n    .special-bg .main-container .bottom-row {\n      padding: 3% 0%; }\n\n.special-bg .main-container .upper-row h1,\n      .special-bg .main-container .bottom-row h1 {\n        color: #dfddd5;\n        font-size: 1.5rem;\n        line-height: 0.8; }\n\n.special-bg .main-container .upper-row h1 span,\n        .special-bg .main-container .bottom-row h1 span {\n          font-size: 2.5rem;\n          color: #fbb1f1; }\n\n.special-bg .main-container .upper-row button,\n      .special-bg .main-container .bottom-row button {\n        padding: 3%;\n        margin: 2% 5%; }\n\n.special-bg .main-container .upper-row button:first-child,\n      .special-bg .main-container .bottom-row button:first-child {\n        font-size: 1.3rem; }\n\n.special-bg .main-container .upper-row button:nth-child(2),\n      .special-bg .main-container .bottom-row button:nth-child(2) {\n        color: #ffa500; }\n\n.special-bg .main-container .upper-row img,\n      .special-bg .main-container .bottom-row img {\n        width: 5rem;\n        float: right; }\n\n.special-bg .main-container .main-row h1 {\n      font-size: 1.2rem;\n      color: #ff000096; }\n\n.special-bg .main-container .main-row .description-container {\n      width: 80%;\n      border: 5px dotted #ff000096;\n      background-color: rgba(99, 1, 99, 0.342);\n      border-radius: 15px; }\n\n.special-bg .main-container .main-row .description-container p {\n        padding: 5%;\n        font-size: 1.6rem; }\n\n.special-bg .main-container .main-row .description-container p:first-child {\n        color: #dfddd5; }\n\n.special-bg .main-container .main-row .description-container p:nth-child(2) {\n        color: #ffa500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBbURqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ25EOEM7O0FDZDlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBR2I7RUFDSSw0Q0FBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBOztBQUgvQjtJQU1RLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVR4Qjs7TUFhWSxjQUFjLEVBQUE7O0FBYjFCOztRQWVnQixjRlVnQjtRRVRoQixpQkFBaUI7UUFDakIsZ0JBQWdCLEVBQUE7O0FBakJoQzs7VUFtQm9CLGlCQUFpQjtVQUNqQixjRlRDLEVBQUE7O0FFWHJCOztRQXdCZ0IsV0FBVztRQUNYLGFBQWEsRUFBQTs7QUF6QjdCOztRQTRCZ0IsaUJBQWdCLEVBQUE7O0FBNUJoQzs7UUErQmdCLGNGM0JPLEVBQUE7O0FFSnZCOztRQW1DZ0IsV0FBVztRQUNYLFlBQVksRUFBQTs7QUFwQzVCO01BeUNnQixpQkFBaUI7TUFDakIsZ0JGNUJLLEVBQUE7O0FFZHJCO01BNkNnQixVQUFVO01BQ1YsNEJGaENLO01FaUNMLHdDQUE4QztNQUM5QyxtQkFBbUIsRUFBQTs7QUFoRG5DO1FBbURvQixXQUFXO1FBQ1gsaUJBQWlCLEVBQUE7O0FBcERyQztRQXVEb0IsY0Y5QlksRUFBQTs7QUV6QmhDO1FBMERvQixjRnRERyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uc3BlY2lhbC1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGlkZXJzX2JnLWhhbGYucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cbiAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTAlOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3csXG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IHtcbiAgICAgIHBhZGRpbmc6IDMlIDAlOyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLnVwcGVyLXJvdyBoMSxcbiAgICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAuYm90dG9tLXJvdyBoMSB7XG4gICAgICAgIGNvbG9yOiAjZGZkZGQ1O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuODsgfVxuICAgICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLnVwcGVyLXJvdyBoMSBzcGFuLFxuICAgICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLmJvdHRvbS1yb3cgaDEgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgY29sb3I6ICNmYmIxZjE7IH1cbiAgICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAudXBwZXItcm93IGJ1dHRvbixcbiAgICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAuYm90dG9tLXJvdyBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgbWFyZ2luOiAyJSA1JTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cgYnV0dG9uOmZpcnN0LWNoaWxkLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtOyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLnVwcGVyLXJvdyBidXR0b246bnRoLWNoaWxkKDIpLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICAgICAgICBjb2xvcjogI2ZmYTUwMDsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cgaW1nLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGltZyB7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLm1haW4tcm93IGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgY29sb3I6ICNmZjAwMDA5NjsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAubWFpbi1yb3cgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgYm9yZGVyOiA1cHggZG90dGVkICNmZjAwMDA5NjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTksIDEsIDk5LCAwLjM0Mik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLm1haW4tcm93IC5kZXNjcmlwdGlvbi1jb250YWluZXIgcCB7XG4gICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5tYWluLXJvdyAuZGVzY3JpcHRpb24tY29udGFpbmVyIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICBjb2xvcjogI2RmZGRkNTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5tYWluLXJvdyAuZGVzY3JpcHRpb24tY29udGFpbmVyIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgY29sb3I6ICNmZmE1MDA7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLy8gbmVjZXNzYXJ5IGZvciBsaXN0IGVsZW1lbnRzIHRvIGNvbWUgb3V0IHJpZ2h0XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNwZWNpYWwtYmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGlkZXJzX2JnLWhhbGYucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcblxuICAgICAgICAudXBwZXItcm93LFxuICAgICAgICAuYm90dG9tLXJvdyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzJSAwJTtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHN1Yi1saWdodDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzdWItcGluaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMiUgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b246bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tcm93IHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHN1Yi1yZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IGRvdHRlZCAkc3ViLXJlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0cHVycGxlLWJnLCAyMCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
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
    /* harmony import */


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");
    /* harmony import */


    var _services_challenges_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/challenges-api.service */
    "./src/app/play/services/challenges-api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ChallengesComponent = /*#__PURE__*/function () {
      function ChallengesComponent(activatedRoute, userStatsService, challengesApiService, toastController, location, router) {
        var _this7 = this;

        _classCallCheck(this, ChallengesComponent);

        this.activatedRoute = activatedRoute;
        this.userStatsService = userStatsService;
        this.challengesApiService = challengesApiService;
        this.toastController = toastController;
        this.location = location;
        this.router = router;
        this.purpleBubbleImg = 'assets/graphicMat/purple_bubble.png';
        this.candleSkullImg = 'assets/graphicMat/candle_skull.png';
        this.dataIsLoaded = false;
        this.treats = [];
        this.tricks = [];
        this.userStatsService.getCurrentTriggeredTreats().subscribe(function (data) {
          return _this7.triggeredTreatsList = data;
        });
        this.userStatsService.getCurrentTriggeredTricks().subscribe(function (data) {
          return _this7.triggeredTricksList = data;
        });
        this.userStatsService.getCurrentAchievedTreats().subscribe(function (data) {
          return _this7.achievedTreatsList = data;
        });
        this.userStatsService.getCurrentAchievedTricks().subscribe(function (data) {
          return _this7.achievedTricksList = data;
        });
        this.totalPoints = 0;
        this.newTotalPoints = 0;
        this.currentChallenge = {
          challengeId: 0,
          challengeType: '',
          challengeDescription: '',
          hasBeenCompleted: false,
          bonusPoints: 0
        };
      }

      _createClass(ChallengesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.getChoice();
          this.getRandomChallenge(this.choice);
          this.userStatsService.getCurrentTotalPoints().subscribe(function (data) {
            return _this8.totalPoints = data;
          });
          console.log('TOTAL POINTS before bonus==', this.totalPoints);
        }
      }, {
        key: "getChoice",
        value: function getChoice() {
          var _this9 = this;

          this.activatedRoute.paramMap.subscribe(function (param) {
            _this9.choice = param.get('choice');
          });
        }
      }, {
        key: "getRandomChallenge",
        value: function getRandomChallenge(choice) {
          var _this10 = this;

          this.choice = choice;

          if (this.choice === 'treat') {
            this.challengesApiService.getTreatsList().subscribe(function (data) {
              // tslint:disable-next-line: prefer-for-of
              for (var i = 0; i < data.length; i++) {
                _this10.treats.push(data[i]);

                var randomTreat = _this10.treats[Math.floor(Math.random() * _this10.treats.length)];

                _this10.currentChallenge = randomTreat;
                _this10.currentChallenge.challengeDescription = randomTreat.challengeDescription;
                _this10.currentChallenge.bonusPoints = randomTreat.bonusPoints;
                _this10.currentChallenge.challengeId = randomTreat.challengeId;
                _this10.currentChallenge.challengeType = randomTreat.challengeType;

                _this10.triggeredTreatsList.push(_this10.currentChallenge);

                _this10.userStatsService.updateCurrentTriggeredTreats(_this10.triggeredTreatsList);
              }

              console.log('TREATSLIST==', _this10.treats); // (3) [{…}, {…}, {…}]
            });
          } else {
            this.challengesApiService.getTricksList().subscribe(function (data) {
              // tslint:disable-next-line: prefer-for-of
              for (var i = 0; i < data.length; i++) {
                _this10.tricks.push(data[i]);

                var randomTrick = _this10.tricks[Math.floor(Math.random() * _this10.tricks.length)];

                _this10.currentChallenge = randomTrick;
                _this10.currentChallenge.challengeDescription = randomTrick.challengeDescription;
                _this10.currentChallenge.bonusPoints = randomTrick.bonusPoints;
                _this10.currentChallenge.challengeId = randomTrick.challengeId;
                _this10.currentChallenge.challengeType = randomTrick.challengeType;

                _this10.triggeredTricksList.push(_this10.currentChallenge);

                _this10.userStatsService.updateCurrentTriggeredTricks(_this10.triggeredTricksList);
              }
            });
          }

          this.dataIsLoaded = true;
        }
      }, {
        key: "isDone",
        value: function isDone() {
          this.newTotalPoints = this.totalPoints + this.currentChallenge.bonusPoints;
          this.userStatsService.update_totalPoints(this.newTotalPoints);
          this.presentToastBonusPoints(this.currentChallenge.bonusPoints, this.newTotalPoints);
          this.currentChallenge.hasBeenCompleted = true;
          console.log('TYPE==', this.currentChallenge.challengeType);

          if (this.currentChallenge.challengeType === 'trick') {
            this.achievedTricksList.push(this.currentChallenge);
            this.userStatsService.updateCurrentAchievedTricks(this.achievedTricksList);
          } else {
            if (this.currentChallenge.challengeType === 'treat') {
              this.achievedTreatsList.push(this.currentChallenge);
              this.userStatsService.updateCurrentAchievedTreats(this.achievedTreatsList);
            }
          }

          this.router.navigate(['play/candyList', {
            hasBeenOpened: 'true '
          }]);
        }
      }, {
        key: "isSkipped",
        value: function isSkipped() {
          this.router.navigate(['play/candyList', {
            hasBeenOpened: 'true '
          }]);
        }
      }, {
        key: "presentToastBonusPoints",
        value: function presentToastBonusPoints(bonusPoints, newTotalPoints) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast1, toast2, toast3;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: "BONUS:" + this.currentChallenge.bonusPoints + "Points!",
                      position: 'middle',
                      duration: 300,
                      cssClass: 'new-points-toast'
                    });

                  case 2:
                    toast1 = _context3.sent;
                    _context3.next = 5;
                    return this.toastController.create({
                      message: "TOTAL POINTS :" + this.totalPoints + "!",
                      position: 'middle',
                      duration: 700,
                      cssClass: 'new-totalpoints-toast'
                    });

                  case 5:
                    toast2 = _context3.sent;
                    toast1.present();
                    setTimeout(function () {
                      toast1.dismiss();
                      toast2.present();
                    }, 500);

                    if (!(this.totalPoints % 30 === 0)) {
                      _context3.next = 13;
                      break;
                    }

                    _context3.next = 11;
                    return this.toastController.create({
                      position: 'middle',
                      duration: 800,
                      cssClass: 'levelUp-toast'
                    });

                  case 11:
                    toast3 = _context3.sent;
                    setTimeout(function () {
                      toast2.dismiss();
                      toast3.present();
                    }, 500); // this.newChallenge = true;

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ChallengesComponent;
    }();

    ChallengesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"]
      }, {
        type: _services_challenges_api_service__WEBPACK_IMPORTED_MODULE_4__["ChallengesApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"], _services_challenges_api_service__WEBPACK_IMPORTED_MODULE_4__["ChallengesApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ChallengesComponent); // whole list

    /* public retrieveChallengeList() {
      this.challengesApiService.getChallengesList().subscribe(data => {
        console.log(data);
        this.challengesList = data;
        console.log('CHALLENGE LIST=== ', this.challengesList);
    
        this.challengesList.forEach(item => {
          if (item.challengeType === 'treat') {
            this.treats.push(item);
            return this.treats;
          } else {
            if (item.challengeType === 'trick') {
              this.tricks.push(item);
              return this.tricks;
            }
          }
        });
        console.log(this.treats);
      });
    } */

    /*  const randomElement = array[Math.floor(Math.random() * array.length)];
        const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
          this.challengeDescription = randomTrick.challengeDescription;
          this.bonusPoints = randomTrick.bonusPoints;  */

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


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.mapContainer {\n  z-index: 1;\n  height: 80%;\n  border: 8px solid black; }\n\n.mapContainer #map {\n    z-index: 1;\n    height: 100vh;\n    width: 100%; }\n\n.mapContainer .leaflet-bar {\n    margin-top: 50vh; }\n\n.mapContainer .scroll-content {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n\n.options-container {\n  z-index: 2;\n  position: absolute;\n  bottom: 0;\n  background-color: #3e173b;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.options-container:active {\n    transform: translateY(-30%);\n    transition: transform 300ms linear;\n    will-change: transform; }\n\n.options-container .saveLocationBtnContainer {\n    width: 90%;\n    margin: auto; }\n\n.options-container .saveLocationBtnContainer button {\n      background-color: transparent;\n      font-family: TitanOne;\n      color: #b1c9fb;\n      text-transform: uppercase;\n      justify-content: space-between; }\n\n.options-container .saveLocationBtnContainer button img {\n        border: 2px solid #b1c9fb;\n        border-radius: 5px;\n        padding: 3%;\n        width: 2rem; }\n\n.options-container .saveLocationBtnContainer button:hover img {\n        padding: 0%; }\n\n@media (min-width: 567px) and (max-width: 767px) {\n  ion-content {\n    width: 100%; }\n    ion-content .mapContainer {\n      height: 100%;\n      margin: 0; } }\n\n@media (min-width: 768px) and (max-width: 1023px) {\n  /*   ion-content {\n        width: 80%;\n        .mapContainer {\n            width: 100vw;\n            height: 90%;\n            margin: auto;\n        }\n    } */ }\n\n@media (min-width: 1024px) {\n  /*   ion-content {\n        width: 80% !important;\n\n        .mapContainer {\n            width: 100%;\n            height: 100%;\n            margin: 0;\n        }\n    } */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFtRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbkQ4Qzs7QUNmOUM7RUFDSSxVQUFVO0VBR1YsV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUwzQjtJQVFRLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVyxFQUFBOztBQVZuQjtJQWNRLGdCQUFnQixFQUFBOztBQWR4QjtJQWlCUSx3QkFBd0I7SUFDeEIsMkJBQTJCLEVBQUE7O0FBSW5DO0VBQ0ksVUFBUztFQUNULGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IseUJGQW1CO0VFQ25CLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBQTs7QUFOaEM7SUFVZ0IsMkJBQTJCO0lBQ25DLGtDQUFrQztJQUNsQyxzQkFBc0IsRUFBQTs7QUFaOUI7SUFnQlEsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFqQnBCO01BbUJZLDZCQUE2QjtNQUM3QixxQkZxQlM7TUVwQlQsY0Z6QlM7TUUwQlQseUJBQXlCO01BQ3pCLDhCQUE4QixFQUFBOztBQXZCMUM7UUF5QmdCLHlCRjdCSztRRThCTCxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFdBQVcsRUFBQTs7QUE1QjNCO1FBaUNvQixXQUFXLEVBQUE7O0FBVS9CO0VBQ0k7SUFDSSxXQUFXLEVBQUE7SUFEZjtNQUlRLFlBQVk7TUFDWixTQUFTLEVBQUEsRUFDWjs7QUFJVDtFQUNFOzs7Ozs7O09ESEssRUNVQzs7QUFJUjtFQUVFOzs7Ozs7OztPRExLLEVDYUMiLCJmaWxlIjoic3JjL2FwcC9wbGF5L21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbi5tYXBDb250YWluZXIge1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7IH1cbiAgLm1hcENvbnRhaW5lciAjbWFwIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLm1hcENvbnRhaW5lciAubGVhZmxldC1iYXIge1xuICAgIG1hcmdpbi10b3A6IDUwdmg7IH1cbiAgLm1hcENvbnRhaW5lciAuc2Nyb2xsLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cblxuLm9wdGlvbnMtY29udGFpbmVyIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTE3M2I7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAub3B0aW9ucy1jb250YWluZXI6YWN0aXZlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyB9XG4gIC5vcHRpb25zLWNvbnRhaW5lciAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bzsgfVxuICAgIC5vcHRpb25zLWNvbnRhaW5lciAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIGNvbG9yOiAjYjFjOWZiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgICAgLm9wdGlvbnMtY29udGFpbmVyIC5zYXZlTG9jYXRpb25CdG5Db250YWluZXIgYnV0dG9uIGltZyB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMWM5ZmI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgIHdpZHRoOiAycmVtOyB9XG4gICAgICAub3B0aW9ucy1jb250YWluZXIgLnNhdmVMb2NhdGlvbkJ0bkNvbnRhaW5lciBidXR0b246aG92ZXIgaW1nIHtcbiAgICAgICAgcGFkZGluZzogMCU7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgaW9uLWNvbnRlbnQgLm1hcENvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLyogICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9ICovIH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAvKiAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9ICovIH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1hcENvbnRhaW5lciB7XG4gICAgei1pbmRleDogMTtcblxuICAgIC8vIG1vYmlsZSBwb3J0cmFpdFxuICAgIGhlaWdodDogODAlO1xuICAgIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xuXG4gICAgI21hcCB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAvLyBjdXN0b21pemUgbWFwIHpvb20gY29udHJvbHNcbiAgICAubGVhZmxldC1iYXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHZoO1xuICAgIH1cbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5vcHRpb25zLWNvbnRhaW5lciB7XG4gICAgei1pbmRleDoyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1wdXJwbGU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbiB0byBpbXBsZW1lbnRcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbi8vIGJyZWFrcG9pbnRzIGV4Y2VwdGlvbnMgKCDiiaAgZ2xvYmFsLnNjc3MgOiBpb24tY29udGVudCB3b24ndCBzaHJpbmsgYXMgbXVjaCBhcyBvdGhlciBwYWdlcyBhZnRlciA1NjdweClcbi8vIG1vYmlsZSBsYW5kc2NhcGVcbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAubWFwQ29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHRhYmxldCBwb3J0cmFpdFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC8qICAgaW9uLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAubWFwQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgfSAqL1xufVxuXG4vLyB0YWJsZXQgbGFuZHNjYXBlIGFuZCArXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLy8gZXhjZXB0aW9uIGZyb20gZ2xvYmFsLnNjc3NcbiAgLyogICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcblxuICAgICAgICAubWFwQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfSAqL1xufVxuXG4vLyB0byBhdm9pZCBjb25zb2xlIHdhcm5pbmcgJ3dpbGwtY2hhbmdlIG1lbW9yeSBpcyB0b28gaGlnaC4uJ1xuLy8gLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LXRpbGUsLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20tYW5pbWF0ZWQgeyB3aWxsLWNoYW5nZTphdXRvICFpbXBvcnRhbnQ7IH1cbi8vICBjb21tZW50ZWQgb3V0ID0+IGYncyB1cCBwYWdlIGRpc3BsYXkgOihcbiJdfQ== */";
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
        this.coords = {};
        this.newAddress = {};
        this.heartIcon = 'assets/graphicMat/heartAsset_red.png';
        this.coords = this.geolocService.getGeo();
        this.addressList = []; // this.newAddress = { lat:  this.coords.latitude, long: this.coords.longitude };
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initMapWithParams();
        }
      }, {
        key: "initMapWithParams",
        value: function initMapWithParams() {
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
          console.log('COORDS==', this.coords); // raw object coords =
          // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1592131995493}
          // coords: GeolocationCoordinates {latitude: 43.6404224, longitude: 7.0418432, altitude:  …}
          // timestamp: 1592131995493__proto__: GeolocationPosition

          this.newAddress = {
            lat: this.coords.coords.latitude,
            "long": this.coords.coords.longitude
          };
          console.log('NEW ADDRESS==', this.newAddress);
          this.addressList.push(this.newAddress);
          this.userStatsService.updateCurrentAddressesList(this.addressList);
          this.presentToastWithOptions();
        }
      }, {
        key: "presentToastWithOptions",
        value: function presentToastWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastController.create({
                      message: "Address saved to favorites !",
                      position: 'middle',
                      duration: 500,
                      cssClass: 'savedAddress-toast'
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
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
    /* harmony import */


    var _challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./challenges-list/challenges-list.component */
    "./src/app/play/challenges-list/challenges-list.component.ts");

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
    }, {
      path: 'challenges-list',
      component: _challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_11__["ChallengesListComponent"]
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
    /* harmony import */


    var _challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./challenges-list/challenges-list.component */
    "./src/app/play/challenges-list/challenges-list.component.ts");

    var PlayModule = function PlayModule() {
      _classCallCheck(this, PlayModule);
    };

    PlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [// AgeSelectComponent,
      _candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_12__["CandyListComponent"], _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_13__["CandyDetailsComponent"], _backpack_backpack_component__WEBPACK_IMPORTED_MODULE_14__["BackpackComponent"], _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_15__["AddressesComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"], _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_17__["UserStatsComponent"], _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_19__["TrickOrTreatComponent"], _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_20__["ChallengesComponent"], _challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_21__["ChallengesListComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _play_routing_module__WEBPACK_IMPORTED_MODULE_11__["PlayRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]],
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


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('bg_spiders-1920.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: 12% auto; }\n\n.special-bg .main-container h1 {\n      color: #dfddd5;\n      font-size: 2.5rem;\n      line-height: 0.8; }\n\n.special-bg .main-container h1 span {\n        font-size: 3.5rem; }\n\n.special-bg .main-container img {\n      width: 12rem; }\n\n.special-bg .main-container .upper-row,\n    .special-bg .main-container .bottom-row {\n      height: 5rem; }\n\n.special-bg .main-container .upper-row img,\n      .special-bg .main-container .bottom-row img {\n        width: 5rem; }\n\n.special-bg .main-container .upper-row {\n      align-content: flex-end; }\n\n.special-bg .main-container .bottom-row {\n      align-content: flex-start; }\n\n.special-bg .main-container .flexRowCentered {\n      padding: 8% 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvdHJpY2stb3ItdHJlYXQvdHJpY2stb3ItdHJlYXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC9wbGF5L3RyaWNrLW9yLXRyZWF0L3RyaWNrLW9yLXRyZWF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUE7O2tDQ0RrQyxFREdDOztBQW1EakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NuRDhDOztBQ2Q5Qzs7Ozs7O0VBTUksU0FBUyxFQUFBOztBQUdiO0VBQ0ksNENBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFIL0I7SUFPUSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQVR4QjtNQVlZLGNGYW9CO01FWnBCLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBQTs7QUFkNUI7UUFlbUIsaUJBQWlCLEVBQUE7O0FBZnBDO01BaUJjLFlBQVksRUFBQTs7QUFqQjFCOztNQXFCWSxZQUFZLEVBQUE7O0FBckJ4Qjs7UUF1QmdCLFdBQVcsRUFBQTs7QUF2QjNCO01BMkJZLHVCQUF1QixFQUFBOztBQTNCbkM7TUE4QlkseUJBQXlCLEVBQUE7O0FBOUJyQztNQWdDMkIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS90cmljay1vci10cmVhdC90cmljay1vci10cmVhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgJGxpZ2h0cHVycGxlLWJnOiByZ2JhKDE5OSwgMywgMTk5LCAwLjM0Mik7XG4gIFxuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogcmdiKDIyMywgMjIxLCAyMTMpO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5zcGVjaWFsLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2JnX3NwaWRlcnMtMTkyMC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luOiAxMiUgYXV0bzsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciBoMSB7XG4gICAgICBjb2xvcjogI2RmZGRkNTtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIGgxIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciBpbWcge1xuICAgICAgd2lkdGg6IDEycmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3csXG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IHtcbiAgICAgIGhlaWdodDogNXJlbTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cgaW1nLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGltZyB7XG4gICAgICAgIHdpZHRoOiA1cmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLmJvdHRvbS1yb3cge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAuZmxleFJvd0NlbnRlcmVkIHtcbiAgICAgIHBhZGRpbmc6IDglIDAlOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zcGVjaWFsLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvYmdfc3BpZGVycy0xOTIwLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG5cbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogMTIlIGF1dG87XG4gICAgICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogJHN1Yi1saWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICAgICAgICAgIHNwYW4geyBmb250LXNpemU6IDMuNXJlbTsgfVxuICAgICAgICB9XG4gICAgICAgIGltZyB7IHdpZHRoOiAxMnJlbTsgfVxuXG4gICAgICAgIC51cHBlci1yb3csXG4gICAgICAgIC5ib3R0b20tcm93IHtcbiAgICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnVwcGVyLXJvdyB7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICAuYm90dG9tLXJvdyB7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIC5mbGV4Um93Q2VudGVyZWQgeyBwYWRkaW5nOiA4JSAwJTsgfVxuICAgIH1cbn1cbiJdfQ== */";
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
      function TrickOrTreatComponent(router) {
        _classCallCheck(this, TrickOrTreatComponent);

        this.router = router;
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
          this.router.navigate(['play/challenges', {
            choice: 'treat'
          }]);
        }
      }, {
        key: "choseTrick",
        value: function choseTrick() {
          this.router.navigate(['play/challenges', {
            choice: 'trick'
          }]);
        }
      }]);

      return TrickOrTreatComponent;
    }();

    TrickOrTreatComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], TrickOrTreatComponent);
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


    __webpack_exports__["default"] = ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.stats-container {\n  width: 80%;\n  height: 80%;\n  margin: 10% auto;\n  background-size: cover;\n  background-position: center; }\n\n.stats-container img:first-child {\n    z-index: -1;\n    position: absolute;\n    opacity: 0.7; }\n\n.stats-container h1,\n  .stats-container h2 {\n    font-family: flyingleather; }\n\n.stats-container h1 {\n    color: #dfddd5;\n    font-size: 1.5rem; }\n\n.stats-container h2 {\n    color: #ffa500;\n    font-size: 1.8rem; }\n\n.stats-container .item,\n  .stats-container .item-level {\n    align-items: unset;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n\n.stats-container .item {\n    border: 3px solid #6178F5;\n    border-radius: 50px;\n    background-color: rgba(199, 3, 199, 0.342);\n    padding: 1% 3%;\n    margin: 5%; }\n\n.stats-container .item-level {\n    text-align: center;\n    border-bottom: 3px solid orange;\n    line-height: 0.1em;\n    margin: 10px 0 20px; }\n\n.bottom-cards-container {\n  width: 100%;\n  bottom: 2%;\n  position: absolute;\n  margin: auto;\n  text-align: center; }\n\n.bottom-cards-container .cardsList {\n    justify-content: space-evenly; }\n\n.bottom-cards-container .cardsList .card-container {\n      height: 10rem;\n      justify-content: flex-end; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext {\n        width: 5rem;\n        margin-bottom: 15%;\n        height: 5rem;\n        background-color: rgba(199, 3, 199, 0.342);\n        border: 2px solid #ff000096;\n        border-radius: 5px; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext h2 {\n          padding: 3%;\n          font-size: 0.8rem;\n          text-align: center;\n          color: #dfddd5; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext h2 span {\n            font-size: 1rem;\n            color: #ff9e29; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container {\n        width: 4rem; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container img {\n          width: 85%; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container .opacity {\n          opacity: 1; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container .noOpacity {\n          opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvdXNlci1zdGF0cy91c2VyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBbURqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ25EOEM7O0FDZjlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxVQUFVO0VBQ1YsV0FBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBTC9CO0lBT1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBVHBCOztJQWFRLDBCRnFDdUIsRUFBQTs7QUVsRC9CO0lBZ0JRLGNGV3dCO0lFVnhCLGlCRm9CZSxFQUFBOztBRXJDdkI7SUFvQlEsY0ZkZTtJRWVmLGlCRmlCYyxFQUFBOztBRXRDdEI7O0lBeUJRLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBOztBQTVCdEM7SUErQlEseUJGWmM7SUVhZCxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxVQUFVLEVBQUE7O0FBbkNsQjtJQXNDUSxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFVO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBTHRCO0lBU1EsNkJBQTZCLEVBQUE7O0FBVHJDO01BV1ksYUFBYTtNQUNiLHlCQUF5QixFQUFBOztBQVpyQztRQWVnQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWiwwQ0FBMEM7UUFDMUMsMkJGL0NLO1FFZ0RMLGtCQUFrQixFQUFBOztBQXBCbEM7VUFzQm9CLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLGNGMUNZLEVBQUE7O0FFaUJoQztZQTJCd0IsZUFBZTtZQUNmLGNGakVGLEVBQUE7O0FFcUN0QjtRQWlDZ0IsV0FBVyxFQUFBOztBQWpDM0I7VUFtQ29CLFVBQVUsRUFBQTs7QUFuQzlCO1VBc0NvQixVQUFVLEVBQUE7O0FBdEM5QjtVQXlDb0IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uc3RhdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc3RhdHMtY29udGFpbmVyIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgei1pbmRleDogLTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDAuNzsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgxLFxuICAuc3RhdHMtY29udGFpbmVyIGgyIHtcbiAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgxIHtcbiAgICBjb2xvcjogI2RmZGRkNTtcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgyIHtcbiAgICBjb2xvcjogI2ZmYTUwMDtcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfVxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtLFxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtLWxldmVsIHtcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNjE3OEY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICAgIHBhZGRpbmc6IDElIDMlO1xuICAgIG1hcmdpbjogNSU7IH1cbiAgLnN0YXRzLWNvbnRhaW5lciAuaXRlbS1sZXZlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7IH1cblxuLmJvdHRvbS1jYXJkcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTByZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gICAgICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IC5jYXJkLWNvbnRhaW5lciAuYnViYmxlTmV4dCB7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmYwMDAwOTY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgICAgICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IC5jYXJkLWNvbnRhaW5lciAuYnViYmxlTmV4dCBoMiB7XG4gICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjZGZkZGQ1OyB9XG4gICAgICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmJ1YmJsZU5leHQgaDIgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogI2ZmOWUyOTsgfVxuICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmNhcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA0cmVtOyB9XG4gICAgICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIC5jYXJkLWltZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogODUlOyB9XG4gICAgICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIC5jYXJkLWltZy1jb250YWluZXIgLm9wYWNpdHkge1xuICAgICAgICAgIG9wYWNpdHk6IDE7IH1cbiAgICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmNhcmQtaW1nLWNvbnRhaW5lciAubm9PcGFjaXR5IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG4uc3RhdHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDo4MCU7XG4gICAgbWFyZ2luOiAxMCUgYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBpbWc6Zmlyc3QtY2hpbGQge1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICAgIGgxLFxuICAgIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmbHlpbmdsZWF0aGVyO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAkc3ViLWxpZ2h0O1xuICAgICAgICBmb250LXNpemU6ICR4eHMtZm9udFNpemU7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgZm9udC1zaXplOiAkeHMtZm9udFNpemU7XG4gICAgfVxuICAgIC5pdGVtLFxuICAgIC5pdGVtLWxldmVsIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC5pdGVtIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJHN1Yi1wdXJwbGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAzLCAxOTksIDAuMzQyKTtcbiAgICAgICAgcGFkZGluZzogMSUgMyU7XG4gICAgICAgIG1hcmdpbjogNSU7XG4gICAgfVxuICAgIC5pdGVtLWxldmVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgb3JhbmdlO1xuICAgICAgICBsaW5lLWhlaWdodDogMC4xZW07XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XG4gICAgfVxufVxuLmJvdHRvbS1jYXJkcy1jb250YWluZXIge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm90dG9tOiAyJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgLy8gaGVpZ2h0OiAyMHZoO1xuICAgIC5jYXJkc0xpc3Qge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICAgIC5idWJibGVOZXh0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAzLCAxOTksIDAuMzQyKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc3ViLXJlZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiRzdWItb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm9wYWNpdHkge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubm9PcGFjaXR5IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/user-stats.service */
    "./src/app/shared/services/user-stats.service.ts");
    /* harmony import */


    var _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/pipes/keyvalue/keyvalue */
    "./src/app/shared/pipes/keyvalue/keyvalue.ts");

    var UserStatsComponent = /*#__PURE__*/function () {
      function UserStatsComponent(userStatsService, keyvaluepipe, router) {
        _classCallCheck(this, UserStatsComponent);

        this.userStatsService = userStatsService;
        this.keyvaluepipe = keyvaluepipe;
        this.router = router;
        this.currentLevel = {
          idLevel: 0,
          levelName: '',
          levelImg: '',
          levelCard: '',
          isActive: false,
          isNext: false
        };
        this.levels = this.userStatsService.retrieveLevelList();
        this.completedChallengesCount = 0;
        this.completedChallengesTest = [];
      }

      _createClass(UserStatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setStats();
        }
      }, {
        key: "setStats",
        value: function setStats() {
          var _this11 = this;

          // totalPoints
          this.userStatsService.getCurrentTotalPoints().subscribe(function (data) {
            return _this11.totalPoints = data;
          });
          console.log('totalPoints------', this.totalPoints); // totalCandy

          this.userStatsService.getCurrentBackpackCount().subscribe(function (data) {
            return _this11.candyCount = data;
          });
          console.log('candy count------', this.candyCount); // level

          this.userStatsService.getCurrentLevel().subscribe(function (data) {
            _this11.currentLevel.idLevel = data.idLevel, _this11.currentLevel.levelName = data.levelName, _this11.currentLevel.levelImg = data.levelImg;
            _this11.currentLevel.levelCard = data.levelCard;
            _this11.currentLevel.isActive = data.isActive;
            _this11.currentLevel.isNext = data.isNext;
          });
          console.log('currentlevel levelcard-----', this.currentLevel.levelCard); // bottom cards

          console.log('levels---', this.levels);

          for (var i = 0; i < this.levels.length; i++) {
            if (this.levels[i].idLevel === this.currentLevel.idLevel) {
              this.levels[i].isActive = true;
              this.levels[i + 1].isNext = true;
            }
          } // current done challenges


          this.userStatsService.getCompletedChallengesCount().subscribe(function (data) {
            return _this11.completedChallengesTest = data;
          });
          console.log('RESULT OF ZIP==', this.completedChallengesTest);
          this.completedChallengesTest.map(function (item) {
            console.log(item.length);
            return _this11.completedChallengesCount += item.length;
          }); // current saved addresses count

          this.userStatsService.getCurrentAddressesList().subscribe(function (data) {
            return _this11.savedAddresses = data;
          });
          this.savedAddressesCount = this.savedAddresses.length;
        }
      }, {
        key: "goToAddresses",
        value: function goToAddresses() {
          this.router.navigate(['play/addresses']);
        }
      }, {
        key: "goToChallenges",
        value: function goToChallenges() {
          this.router.navigate(['play/challenges-list']);
        }
      }]);

      return UserStatsComponent;
    }();

    UserStatsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"]
      }, {
        type: _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_4__["KeyvaluePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"], _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_4__["KeyvaluePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], UserStatsComponent);
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