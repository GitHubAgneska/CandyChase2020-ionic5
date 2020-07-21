(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-play-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">My addresses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"addressesPage-container flexColCentered\">\n\n  <div class=\"map-sample\">\n    <img src=\"assets/graphicMat/map_sample.png\" alt=\"map-sample\" />\n  </div>\n\n  <div *ngIf=\"listIsEmpty\" class=\"bubble\">\n    <img [src]=\"noAddressBubble\" alt=\"noAddressesYet\" />\n  </div>\n\n  <div class=\"address-list-container\">\n    <ul *ngFor=\"let address of addressList\" class=\"address-item\">\n      <li class=\"address-item\">\n        <p>Today at : {{ address.timestamp}}</p>\n        {{  address.lat }} : {{ address.long }}\n      </li>\n      <div class=\"btns-container\" (click)=\"removeAddress(address)\">\n        <!-- <img [src]=\"plusBtn\" alt=\"plus-btn\" (click)=\"\" /> -->\n        <img [src]=\"minusBtn\" alt=\"minus-btn\" />\n      </div>\n    </ul>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/backpack/backpack.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/backpack/backpack.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Backpack</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"backpack-elements-container flexColCentered\">\n    <div class=\"bag-illust-container circlesImgBg\">\n      <div class=\"bag-img-container\">\n        <img src=\"assets/graphicMat/candyBag.png\" alt=\"\" />\n      </div>\n\n      <div class=\"total flexColCentered\">\n        <h2>Total candy : {{ totalCandy }}</h2>\n        <h2>Total points : {{ totalPoints }}</h2>\n      </div>\n    </div>\n\n    <!-- <div class=\"cornCandy-container\">\n      <ng-container *ngFor=\"let i of [].constructor(8)\">\n        <img src=\"assets/graphicMat/corn_candy.png\" alt=\"\" />\n      </ng-container>\n    </div> -->\n\n    <!-- TO DO ? : get level (banner) at init --\n      <div class=\"current-level\">\n          <h2>Current level</h2>\n          <h2>{{levelName}}</h2>\n      </div> -->\n    <div *ngIf=\"collectedCandy.length > 0;else noCandyYetBlock\">\n      <div *ngFor=\"let item of collectedCandy\" class=\"myCollectedCandy\">\n        <div class=\"candyItem\">\n          <div class=\"candyThumbnail\">\n            <img src=\"{{item.image_front_url}}\">\n          </div>\n          <div class=\"candyName\">\n            <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n            <h1>{{ item.product_name | shortenString:30 }}</h1>\n            <button (click)=\"seeCandyInfos(item._id)\">see infos</button>\n          </div>\n          <div class=\"amount\">\n            <h1>{{ item.amountInBackpack }}</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #noCandyYetBlock>\n    <div class=\"noCandyYet\">\n      <!-- <h1>No candy yet !</h1> -->\n      <img [src]=\"ghostBubble\" alt=\"no candy bubble\" />\n      <img [src]=\"ghostImg\" alt=\"little ghost\" />\n    </div>\n  </ng-template>\n\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-details/candy-details.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-details/candy-details.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Candy Infos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"candyDetailsPage\" *ngIf=\"candyItem\">\n\n<!-- <div class=\"info\">\n      Due to the reliance on the database, some info might not be totally accurate.<br>\n      'Open food facts' database relies itself on the inputs of users and on the work of its devoted developers, \n      so it is subject to constant changes.<br>\n      We can see for instance, that the english version of ingredients list (in use here) does not contain 'gelatin' for certain candy,\n      although it is definitely part of this list in the french version.\n    </div> -->\n\n    <div class=\"candyItemTitle flexRowCentered\">\n      <div class=\"candyThumbnail\">\n        <img src=\"{{ candyItem.image_front_url }}\">\n      </div>\n      <div>\n        <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n      </div>\n    </div>\n\n    <ion-row class=\"candy-checklist\">\n      <ion-col>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"candyChecklist.organic;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Organic\n        </ion-row>\n\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"candyChecklist.additives;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Additives\n        </ion-row>\n      </ion-col>\n\n      <ion-col>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"candyChecklist.glutenFree;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Gluten free\n        </ion-row>\n\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"candyChecklist.vegan;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegan\n        </ion-row>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"candyChecklist.vegetarian;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegetarian\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"rubriks\">\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleIngredients()\">\n          <h1>Ingredients hierarchy</h1>\n          <img [src]=arrowDownImg />\n        </div>\n        <div class=\"candyIngredients\" *ngIf=\"showIngredients\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.ingredients_tags\">\n              <td>\n                {{ i | removeChars | removeUnderscore }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleNutriscore()\">\n          <h1>Nutriscore</h1>\n          <img [src]=arrowDownImg />\n        </div>\n        <div class=\"candyNutriscore\" *ngIf=\"showNutriscore\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.nutriscore_data | keyvalue\">\n              <td>\n                {{ i.key | removeUnderscore }}\n              </td>\n              <td>\n                {{ i.value }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleAllergens()\">\n          <h1>Allergens</h1>\n          <img [src]=arrowDownImg />\n        </div>\n        <div *ngIf=\"showAllergens\" class=\"candyAllergens\">\n          <table *ngIf=\"allergens;else none\">\n            <tr *ngFor=\"let i of candyItem.allergens_hierarchy\">\n              <td>\n                {{ i | removeChars }}\n              </td>\n            </tr>\n          </table>\n          <ng-template #none>\n            <h1>No listed allergen in the database</h1>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Candy to find</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"candyPageContainer\">\n\n  <div class=\"add-label flexRowCentered \">\n    <ion-searchbar animated class=\"custom-searchbar\"\n    [formControl]=\"searchControl\"\n    (ionChange)=\"onSearchInput()\">\n    </ion-searchbar>\n    <img src=\"assets/graphicMat/bubble_add2.png\" alt=\"\" />\n  </div>\n\n\n  <div *ngIf=\"candyList$ | async as candyList; else loading\">\n    <div *ngFor=\"let candyItem of candyList$ | async\" class=\"candyList\">\n<!--   <div *ngIf=\"candyList; else loading\">\n    <div *ngFor=\"let candyItem of candyList\" class=\"candyList\"> -->\n      <div class=\"candyItem\">\n        <div class=\"candyThumbnail\">\n          <img src=\"{{candyItem.image_front_url}}\">\n        </div>\n        <div class=\"candyName\">\n          <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n          <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n        </div>\n        <div class=\"plus-btn\">\n          <!-- <button (click)=\"sendId(candyItem._id)\"> -->\n          <button (click)=\"addCandyToBackpack(candyItem)\">\n            <img src=\"assets/graphicMat/zoomIn.png\" alt=\"plus-button\"/>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n    <!-- \n      TODO:  find a workaround to make loading anim work with condition \n      <ng-template #loading>\n        <app-loading-animation></app-loading-animation>\n      </ng-template>  \n    -->\n  \n  <ng-template #loading>\n    <img src= \"{{ anim }}\"/>\n    <h1 class=\"loading\">\n      loading...    \n    </h1>\n  </ng-template>  \n\n  <div class=\"newChallenge-btn\" *ngIf=\"newChallenge\">\n    <button (click)=\"goToChallenges()\">New challenge!</button>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges-list/challenges-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges-list/challenges-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Challenges</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"special-bg\">\n\n  <div *ngIf=\"achievedTricksdisplay || achievedTreatsdisplay;else listIsEmpty\" class=\"main-container\">\n    <h2>You have achieved these so far ! </h2>\n    \n    <div *ngFor=\"let treat of achievedTreatsList\" class=\"flexRowCentered\">\n      <div class=\"flexRowCentered\">\n        <img [src]=iconTrue /><h1>treat:{{ treat.challengeDescription }}</h1>\n      </div>  \n    </div>\n\n    <div *ngFor=\"let trick of achievedTricksList\" class=\"flexRowCentered\">\n      <div class=\"flexRowCentered\">\n        <img [src]=iconTrue /><h1>trick:{{ trick.challengeDescription }}</h1>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #listIsEmpty>\n    <img [src]=\"noChallengesYetImg\" alt=\"noChallengesYet\" class=\"bubble\" />\n  </ng-template >\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <!--  <ion-title text-center class=\"toolbarTitle\">Trick or treat</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"special-bg\">\n\n  <div class=\"main-container\" *ngIf=\"dataIsLoaded\">\n\n    <div class=\"upper-row\">\n      <h1>You Chose..<br><span>{{ choice }} !</span></h1>\n    </div>\n  \n    <div class=\"main-row\">\n      <h1>Your challenge:</h1>\n      <div class=\"description-container\">\n        <p>{{ currentChallenge.challengeDescription }}</p>\n        <p>Bonus Points : {{ currentChallenge.bonusPoints }}</p>\n      </div>\n    </div>\n\n    <div class=\"bottom-row\">\n      <p>{{ currentChallenge.challengeType }}</p>\n      <button class=\"classicBtn\" (click)=\"isDone(currentChallenge)\">Done!</button>\n      <button class=\"classicBtn\" (click)=\"isSkipped()\">Skip challenge</button>\n      <img src=\"{{ candleSkullImg }}\" alt=\"candle-skull\" />\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/map/map.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/map/map.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">\n      Your map\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"mapContainer\">\n    <div id=\"map\"></div>\n  </div>\n  <div class=\"options-container\">\n    <!-- <button (click)=\"see()\">pull</button> -->\n    <div class=\"saveLocationBtnContainer\">\n      <button class=\"flexRowCentered\" (click)=\"saveAddress()\">\n        <img [src]=\"heartIcon\" alt=\"heartIcon\" />\n        Save this address to favorites !\n      </button>\n    </div>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/trick-or-treat/trick-or-treat.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/trick-or-treat/trick-or-treat.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Trick or treat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"special-bg\">\n\n  <div class=\"main-container flexColCentered\">\n\n    <div class=\"upper-row flexRowCentered\" (click)=\"choseTreat()\">\n      <h1>Choose<br><span>treat!</span></h1>\n      <img src=\"{{candyImg }}\" alt=\"candy\" />\n    </div>\n  \n    <div class=\"main-row flexRowCentered\">\n      <img src=\"{{ treatOrTrickImg }}\" alt=\"treatOrTrick\" />\n    </div>\n  \n    <div class=\"bottom-row flexRowCentered\" (click)=\"choseTrick()\">\n      <img src=\"{{ witchHatImg }}\" alt=\"witch-hat\" />\n      <h1>Choose<br><span>trick!</span></h1>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/user-stats/user-stats.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/user-stats/user-stats.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">My stats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"stats-container\">\n    <!--   <div *ngFor=\"let stat of userStats\" class=\"stats-container\" style=\"background-image: '{{ currentLevel.levelImg }}'\">\n -->\n    <img src=\"{{ currentLevel.levelImg }}\" />\n\n    <div class=\"item-level\">\n      <h1>Current Level</h1>\n      <h2>{{ currentLevel.levelName }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Total Points</h1>\n      <h2>{{ totalPoints }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Total Candy</h1>\n      <h2>{{ candyCount }}</h2>\n    </div>\n\n    <div class=\"item\" (click)=\"goToAddresses()\">\n      <h1>Saved Addresses</h1>\n      <h2>{{ savedAddressesCount }}</h2>\n    </div>\n\n    <div class=\"item\" (click)=\"goToChallenges()\">\n      <h1>Completed challenges</h1>\n      <h2>{{ completedChallengesCount }}</h2>\n    </div>\n  </div>\n\n\n  <div class=\"bottom-cards-container\">\n\n    <div class=\"cardsList flexRowCentered\">\n      <div *ngFor=\"let level of levels\">\n        <div class=\"card-container flexColCentered\">\n          <div *ngIf=\"level.isNext\" class=\"bubbleNext\">\n            <h2>Next mission:<br>Get the <span>{{ level.levelCardName }} !</span></h2>\n          </div>\n          <div class=\"card-img-container\">\n            <img src=\"{{ level.levelCard }}\" [class] =\"level.isActive ? 'opacity' : 'noOpacity'\"/>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/play/addresses/addresses.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/play/addresses/addresses.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.addressesPage-container .map-sample img {\n  width: 100%; }\n\n.addressesPage-container .address-list-container {\n  height: 30vh;\n  color: #b2caf8; }\n\n.addressesPage-container .address-list-container ul {\n    width: 90%;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n\n.addressesPage-container .address-list-container ul li {\n      min-width: 85%;\n      border: 2px solid #b1c9fb;\n      border-radius: 20px;\n      list-style-image: url('heartAsset_red_mini.png');\n      font-size: 1rem;\n      font-family: TitanOne;\n      color: #ffeedf;\n      padding: 5%;\n      margin: 2%; }\n\n.addressesPage-container .address-list-container ul .btns-container {\n      width: 10%; }\n\n.addressesPage-container .bubble {\n  width: 40%;\n  margin: 10% auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFtRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbkQ4Qzs7QUNmOUM7RUFFYyxXQUFXLEVBQUE7O0FBRnpCO0VBS1EsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFOdEI7SUFRWSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7O0FBWi9CO01BZWdCLGNBQWE7TUFDYix5QkZFSztNRURMLG1CQUFtQjtNQUNuQixnREFBc0U7TUFDdEUsZUFBZTtNQUNmLHFCRjJDSztNRTFDTCxjRkxRO01FTVIsV0FBVztNQUNYLFVBQVUsRUFBQTs7QUF2QjFCO01BMEJnQixVQUFVLEVBQUE7O0FBMUIxQjtFQWdDUSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5L2FkZHJlc3Nlcy9hZGRyZXNzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbi5hZGRyZXNzZXNQYWdlLWNvbnRhaW5lciAubWFwLXNhbXBsZSBpbWcge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uYWRkcmVzc2VzUGFnZS1jb250YWluZXIgLmFkZHJlc3MtbGlzdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDMwdmg7XG4gIGNvbG9yOiAjYjJjYWY4OyB9XG4gIC5hZGRyZXNzZXNQYWdlLWNvbnRhaW5lciAuYWRkcmVzcy1saXN0LWNvbnRhaW5lciB1bCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAuYWRkcmVzc2VzUGFnZS1jb250YWluZXIgLmFkZHJlc3MtbGlzdC1jb250YWluZXIgdWwgbGkge1xuICAgICAgbWluLXdpZHRoOiA4NSU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjYjFjOWZiO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9oZWFydEFzc2V0X3JlZF9taW5pLnBuZ1wiKTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIGNvbG9yOiAjZmZlZWRmO1xuICAgICAgcGFkZGluZzogNSU7XG4gICAgICBtYXJnaW46IDIlOyB9XG4gICAgLmFkZHJlc3Nlc1BhZ2UtY29udGFpbmVyIC5hZGRyZXNzLWxpc3QtY29udGFpbmVyIHVsIC5idG5zLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAlOyB9XG5cbi5hZGRyZXNzZXNQYWdlLWNvbnRhaW5lciAuYnViYmxlIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAxMCUgYXV0bzsgfVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYWRkcmVzc2VzUGFnZS1jb250YWluZXIge1xuICAgIC5tYXAtc2FtcGxlIHsgXG4gICAgICAgIGltZyB7IHdpZHRoOiAxMDAlO31cbiAgICB9XG4gICAgLmFkZHJlc3MtbGlzdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgIGNvbG9yOiAjYjJjYWY4O1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOjg1JTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2hlYXJ0QXNzZXRfcmVkX21pbmkucG5nXCIpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtb3JhbmdlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMiU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRucy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIC5idWJibGUge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBtYXJnaW46IDEwJSBhdXRvO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/play/addresses/addresses.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/play/addresses/addresses.component.ts ***!
  \*******************************************************/
/*! exports provided: AddressesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesComponent", function() { return AddressesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let AddressesComponent = class AddressesComponent {
    constructor(userStatsService, alertController) {
        this.userStatsService = userStatsService;
        this.alertController = alertController;
        this.addressCoords = {};
        this.noAddressBubble = 'assets/graphicMat/noAddressYet_bubble.png';
        this.plusBtn = 'assets/graphicMat/zoomIn.png';
        this.minusBtn = 'assets/graphicMat/zoomOut.png';
        this.addressList = [];
        this.addressCoords = { lat: 0, long: 0 };
        this.listIsEmpty = false;
    }
    ngOnInit() {
        this.userStatsService.getCurrentAddressesList().subscribe((data) => {
            console.log('RAW==', data);
            this.addressList = data;
            console.log('ADDRESS lIST==', this.addressList);
            if (this.addressList.length === 0) {
                this.listIsEmpty = true;
            }
        });
    }
    removeAddress(address) {
        // this.addressList.
        this.presentConfirmDelete();
    }
    presentConfirmDelete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'dialog',
                header: 'Are you sure?',
                subHeader: 'Do you really want to delete this address?',
                // message: 'Do you really want to delete this address?',
                buttons: ['No!', 'Delete', 'Cancel']
            });
            yield alert.present();
        });
    }
};
AddressesComponent.ctorParameters = () => [
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
AddressesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addresses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addresses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addresses.component.scss */ "./src/app/play/addresses/addresses.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], AddressesComponent);



/***/ }),

/***/ "./src/app/play/backpack/backpack.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/play/backpack/backpack.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.backpack-elements-container {\n  margin: 5% 10%; }\n\n.backpack-elements-container .bag-illust-container {\n    height: 10rem;\n    width: 100%;\n    background-size: cover;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center; }\n\n.backpack-elements-container .bag-illust-container .bag-img-container {\n      margin: auto 2%; }\n\n.backpack-elements-container .bag-illust-container .bag-img-container img {\n        height: 6rem; }\n\n.backpack-elements-container .total {\n    align-items: flex-start; }\n\n.backpack-elements-container .total h2 {\n      text-align: center;\n      text-transform: uppercase;\n      font-size: 1rem;\n      font-family: TitanOne; }\n\n.backpack-elements-container .total h2:first-child {\n      color: #ffa500; }\n\n.backpack-elements-container .total h2:nth-child(2) {\n      color: #ffc0cb; }\n\n.backpack-elements-container .myCollectedCandy {\n    width: 60vw; }\n\n.backpack-elements-container .myCollectedCandy .candyItem {\n      padding: 3%;\n      margin: 3% 0%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      border: 2px solid #b1c9fb;\n      border-radius: 50px; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyThumbnail {\n        height: 3rem;\n        width: 3rem;\n        min-width: 3rem;\n        background-color: pink;\n        align-content: center;\n        align-items: center;\n        overflow: hidden;\n        border-radius: 50%; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName {\n        max-width: 60%;\n        text-align: center;\n        display: flex;\n        flex-direction: column; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName h1 {\n          font-family: TitanOne;\n          color: #b1c9fb;\n          font-size: 0.7rem;\n          text-transform: uppercase;\n          transform: scale(1, 1.2);\n          -webkit-transform: scale(1, 1.2);\n          /* Safari and Chrome */\n          -moz-transform: scale(1, 1.2);\n          /* Firefox */\n          -ms-transform: scale(1, 1.2);\n          /* IE 9+ */\n          -o-transform: scale(1, 1.2);\n          /* Opera */ }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName button {\n          color: #ffa500;\n          border: 1px solid #ffa500;\n          font-family: TitanOne;\n          background-color: transparent; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .amount {\n        text-align: center; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .amount h1 {\n          width: 40px;\n          height: 1.5rem;\n          font-family: TitanOne;\n          color: #fbb1f1;\n          font-size: 1rem;\n          text-transform: uppercase; }\n\n.noCandyYet {\n  margin-top: 5%;\n  text-align: center;\n  max-width: 20rem;\n  /*          background-image: url(\"src/assets/graphicMat/lightning.png\");\n            background-size: cover;\n            background-position: center; */ }\n\n.noCandyYet img:first-child {\n    max-width: 10rem;\n    float: right; }\n\n.noCandyYet img:nth-child(2) {\n    height: 15rem; }\n\n.noCandyYet h1 {\n    font-family: TitanOne;\n    color: #fbb1f1;\n    font-size: 1rem;\n    text-transform: uppercase; }\n\n@media (min-width: 1440px) {\n  .backpack-elements-container .myCollectedCandy {\n    width: 50vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvYmFja3BhY2svYmFja3BhY2suY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC9wbGF5L2JhY2twYWNrL2JhY2twYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUE7O2tDQ0RrQyxFREdDOztBQW1EakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NuRDhDOztBQ2Y5QztFQUVJLGNBQWMsRUFBQTs7QUFGbEI7SUFLUSxhQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QixFQUFBOztBQVYvQjtNQVlZLGVBQWUsRUFBQTs7QUFaM0I7UUFjZ0IsWUFBWSxFQUFBOztBQWQ1QjtJQW9CUSx1QkFBdUIsRUFBQTs7QUFwQi9CO01Bc0JZLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLHFCRnNDUyxFQUFBOztBRS9EckI7TUE0QlksY0ZkVyxFQUFBOztBRWR2QjtNQStCWSxjRlhTLEVBQUE7O0FFcEJyQjtJQW1DUSxXQUFXLEVBQUE7O0FBbkNuQjtNQXNDWSxXQUFXO01BQ1gsYUFBYTtNQUNiLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsbUJBQW1CLEVBQUE7O0FBN0MvQjtRQWdEZ0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBOztBQXZEbEM7UUEwRGdCLGNBQWM7UUFFZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHNCQUFzQixFQUFBOztBQTlEdEM7VUFnRW9CLHFCRkRDO1VFRUQsY0YvQ0M7VUVnREQsaUJBQWlCO1VBQ2pCLHlCQUF5QjtVQUN6Qix3QkFBd0I7VUFDeEIsZ0NBQWdDO1VBQUUsc0JBQUE7VUFDbEMsNkJBQTZCO1VBQUUsWUFBQTtVQUMvQiw0QkFBNEI7VUFBRSxVQUFBO1VBQzlCLDJCQUEyQjtVQUFFLFVBQUEsRUFBVzs7QUF4RTVEO1VBMkVvQixjRjdERztVRThESCx5QkY5REc7VUUrREgscUJGZEM7VUVlRCw2QkFBNkIsRUFBQTs7QUE5RWpEO1FBa0ZnQixrQkFBa0IsRUFBQTs7QUFsRmxDO1VBb0ZvQixXQUFXO1VBQ1gsY0FBYztVQUNkLHFCRnZCQztVRXdCRCxjRmxFQztVRW1FRCxlQUFlO1VBQ2YseUJBQXlCLEVBQUE7O0FBTXJDO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDNUI7OzBDREMwQyxFQ0NDOztBQU5uQztJQVFRLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBVHBCO0lBWVEsYUFBWSxFQUFBOztBQVpwQjtJQWVRLHFCRi9DSztJRWdETCxjRjFGSztJRTJGTCxlQUFlO0lBQ2YseUJBQXlCLEVBQUE7O0FBS3pDO0VBQ0k7SUFDd0IsV0FBVyxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9wbGF5L2JhY2twYWNrL2JhY2twYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICAkbGlnaHRwdXJwbGUtYmc6IHJnYmEoMTk5LCAzLCAxOTksIDAuMzQyKTtcbiAgXG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiByZ2IoMjIzLCAyMjEsIDIxMyk7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4uYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1JSAxMCU7IH1cbiAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAuYmFnLWlsbHVzdC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLmJhZy1pbGx1c3QtY29udGFpbmVyIC5iYWctaW1nLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IGF1dG8gMiU7IH1cbiAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLmJhZy1pbGx1c3QtY29udGFpbmVyIC5iYWctaW1nLWNvbnRhaW5lciBpbWcge1xuICAgICAgICBoZWlnaHQ6IDZyZW07IH1cbiAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwgaDIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTsgfVxuICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLnRvdGFsIGgyOmZpcnN0LWNoaWxkIHtcbiAgICAgIGNvbG9yOiAjZmZhNTAwOyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwgaDI6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGNvbG9yOiAjZmZjMGNiOyB9XG4gIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkge1xuICAgIHdpZHRoOiA2MHZ3OyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIHtcbiAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgbWFyZ2luOiAzJSAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMWM5ZmI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XG4gICAgICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC5teUNvbGxlY3RlZENhbmR5IC5jYW5keUl0ZW0gLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAgICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIC5jYW5keU5hbWUge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgICAgY29sb3I6ICNiMWM5ZmI7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBGaXJlZm94ICovXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBJRSA5KyAqL1xuICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBPcGVyYSAqLyB9XG4gICAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmE1MDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYTUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuYW1vdW50IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuYW1vdW50IGgxIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgICAgY29sb3I6ICNmYmIxZjE7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm5vQ2FuZHlZZXQge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICAvKiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvbGlnaHRuaW5nLnBuZ1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovIH1cbiAgLm5vQ2FuZHlZZXQgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIGZsb2F0OiByaWdodDsgfVxuICAubm9DYW5keVlldCBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgICBoZWlnaHQ6IDE1cmVtOyB9XG4gIC5ub0NhbmR5WWV0IGgxIHtcbiAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgY29sb3I6ICNmYmIxZjE7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC5teUNvbGxlY3RlZENhbmR5IHtcbiAgICB3aWR0aDogNTB2dzsgfSB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIge1xuXG4gICAgbWFyZ2luOiA1JSAxMCU7XG5cbiAgICAuYmFnLWlsbHVzdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6MTByZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAuYmFnLWltZy1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDIlO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudG90YWwge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgIH1cbiAgICAgICAgaDI6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgfVxuICAgICAgICBoMjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLXBpbms7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm15Q29sbGVjdGVkQ2FuZHkge1xuICAgICAgICB3aWR0aDogNjB2dztcblxuICAgICAgICAuY2FuZHlJdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgICAgICAgbWFyZ2luOiAzJSAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMWM5ZmI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuXG4gICAgICAgICAgICAuY2FuZHlUaHVtYm5haWwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYW5keU5hbWUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JG1haW4tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBGaXJlZm94ICovXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIElFIDkrICovXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogT3BlcmEgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc3ViLXBpbms7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4gICAgICAgIC5ub0NhbmR5WWV0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcbi8qICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9saWdodG5pbmcucG5nXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cbiAgICAgICAgICAgIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHN1Yi1waW5rO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbi8vIGV4Y2VwdGlvbiBibG9jayBjYW5keSBuYW1lID4gMTQ0MHB4XG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciB7XG4gICAgICAgIC5teUNvbGxlY3RlZENhbmR5IHsgd2lkdGg6IDUwdnc7fVxuICAgIH1cbn1cblxuXG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/play/backpack/backpack.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/play/backpack/backpack.component.ts ***!
  \*****************************************************/
/*! exports provided: BackpackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackpackComponent", function() { return BackpackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");




let BackpackComponent = class BackpackComponent {
    constructor(userStatsService, router) {
        this.userStatsService = userStatsService;
        this.router = router;
        // public noCandyYet: boolean;
        this.ghostImg = 'assets/graphicMat/ghost_2.png';
        this.ghostBubble = 'assets/graphicMat/noCandyYet_bubble.png';
        this.totalCandy = 0;
        // this.noCandyYet = false;
    }
    ngOnInit() {
        // retrieve all candy items
        this.setBackpack();
        this.setStats();
    }
    setBackpack() {
        this.userStatsService.getCurrentBackpackContent().subscribe(data => {
            this.collectedCandy = data;
        });
        console.log('COLLECTED CANDY RETRIEVED ON INIT: ', this.collectedCandy);
    }
    setStats() {
        this.userStatsService.getCurrentBackpackCount().subscribe(data => this.totalCandy = data);
        this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);
    }
    seeCandyInfos(id) {
        this.candyId = id;
        console.log('candy id= ', this.candyId);
        this.router.navigate(['play/candyDetails' + '/' + id]);
    }
};
BackpackComponent.ctorParameters = () => [
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BackpackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backpack',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./backpack.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/backpack/backpack.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./backpack.component.scss */ "./src/app/play/backpack/backpack.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BackpackComponent);



/***/ }),

/***/ "./src/app/play/candy-details/candy-details.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/play/candy-details/candy-details.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.candyDetailsPage {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 5% auto; }\n\n.candyDetailsPage .info {\n    width: 100%;\n    padding: 5%;\n    border: 3px dashed #ff0000;\n    border-radius: 25px;\n    font-size: 1rem;\n    color: #ff000096;\n    font-family: TitanOne; }\n\n.candyDetailsPage .candyItemTitle {\n    width: 100%;\n    padding: 2%;\n    margin: 10% auto;\n    justify-content: unset;\n    border: 3px solid #ffa500;\n    border-radius: 50px; }\n\n.candyDetailsPage .candyItemTitle .candyThumbnail {\n      height: 3rem;\n      width: 3rem;\n      background-color: #ffc0cb;\n      align-content: center;\n      align-items: center;\n      overflow: hidden;\n      border-radius: 50%;\n      margin-right: 3%; }\n\n.candyDetailsPage .candyItemTitle h1 {\n      font-size: 1rem;\n      font-family: TitanOne;\n      color: #b1c9fb;\n      text-transform: uppercase; }\n\n.candyDetailsPage .candy-checklist {\n    border: 5px solid #ffc0cb;\n    border-radius: 15px; }\n\n.candyDetailsPage .candy-checklist .checklistType {\n      padding: 5%;\n      font-size: 0.8rem;\n      font-family: TitanOne;\n      color: #ffa500;\n      padding: 3% 0%; }\n\n.candyDetailsPage .candy-checklist .checklistType img {\n        min-width: 25px;\n        padding: 3%; }\n\n.candyDetailsPage .rubriks {\n    margin: 3% auto;\n    width: 100%; }\n\n.candyDetailsPage .rubriks .rubrik h1 {\n      font-size: .8rem;\n      color: #ffa500;\n      font-family: TitanOne; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title {\n      justify-content: space-between;\n      border-bottom: 3px solid #b1c9fb; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 {\n        font-size: 1rem;\n        color: #b1c9fb;\n        text-align: center;\n        line-height: 3;\n        font-family: TitanOne;\n        text-transform: uppercase; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 .selected {\n          font-size: 7vw; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 img {\n          width: 25px;\n          height: 25px; }\n\n.candyDetailsPage .candyIngredients table,\n  .candyDetailsPage .candyNutriscore table,\n  .candyDetailsPage .candyAllergens table {\n    margin: auto;\n    width: 100%; }\n\n.candyDetailsPage .candyIngredients table,\n  .candyDetailsPage .candyIngredients td,\n  .candyDetailsPage .candyIngredients tr,\n  .candyDetailsPage .candyNutriscore table,\n  .candyDetailsPage .candyNutriscore td,\n  .candyDetailsPage .candyNutriscore tr,\n  .candyDetailsPage .candyAllergens table,\n  .candyDetailsPage .candyAllergens td,\n  .candyDetailsPage .candyAllergens tr {\n    margin-top: 5%;\n    padding: 2%;\n    border: 2px solid #b1c9fb;\n    font-size: 1rem;\n    color: #ffa500;\n    font-family: TitanOne; }\n\n.plus-btn > button {\n  width: 50px;\n  height: 50px;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2FuZHktZGV0YWlscy9jYW5keS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jYW5keS1kZXRhaWxzL2NhbmR5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBbURqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ25EOEM7O0FDZjlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBSm5CO0lBT1EsV0FBVztJQUNYLFdBQVc7SUFDWCwwQkZNWTtJRUxaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JGSWE7SUVIYixxQkYwQ2EsRUFBQTs7QUV2RHJCO0lBa0JRLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix5QkZoQmU7SUVpQmYsbUJBQW1CLEVBQUE7O0FBdkIzQjtNQTBCWSxZQUFZO01BQ1osV0FBVztNQUNYLHlCRmhCUztNRWlCVCxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZ0JBQWdCLEVBQUE7O0FBakM1QjtNQW9DWSxlQUFlO01BQ2YscUJGa0JTO01FakJULGNGNUJTO01FNkJULHlCQUF5QixFQUFBOztBQXZDckM7SUEyQ1EseUJGL0JhO0lFZ0NiLG1CQUFtQixFQUFBOztBQTVDM0I7TUErQ1ksV0FBVztNQUNYLGlCQUFpQjtNQUNqQixxQkZNUztNRUxULGNGNUNXO01FNkNYLGNBQWMsRUFBQTs7QUFuRDFCO1FBcURnQixlQUFlO1FBQ2YsV0FBVyxFQUFBOztBQXREM0I7SUEyRFEsZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUE1RG5CO01BK0RnQixnQkFBZ0I7TUFDaEIsY0YxRE87TUUyRFAscUJGVkssRUFBQTs7QUV2RHJCO01Bb0VnQiw4QkFBOEI7TUFDOUIsZ0NGM0RLLEVBQUE7O0FFVnJCO1FBdUVvQixlQUFlO1FBQ2YsY0Y5REM7UUUrREQsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxxQkZwQkM7UUVxQkQseUJBQXlCLEVBQUE7O0FBNUU3QztVQThFd0IsY0FBYyxFQUFBOztBQTlFdEM7VUFpRndCLFdBQVc7VUFDWCxZQUFZLEVBQUE7O0FBbEZwQzs7O0lBNkZZLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBOUZ2Qjs7Ozs7Ozs7O0lBbUdZLGNBQWM7SUFDZCxXQUFXO0lBQ1gseUJGM0ZTO0lFNEZULGVBQWU7SUFDZixjRmpHVztJRWtHWCxxQkZqRFMsRUFBQTs7QUVzRHJCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvY2FuZHktZGV0YWlscy9jYW5keS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICAkbGlnaHRwdXJwbGUtYmc6IHJnYmEoMTk5LCAzLCAxOTksIDAuMzQyKTtcbiAgXG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiByZ2IoMjIzLCAyMjEsIDIxMyk7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDA7IH1cblxuLmNhbmR5RGV0YWlsc1BhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDUlIGF1dG87IH1cbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGJvcmRlcjogM3B4IGRhc2hlZCAjZmYwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjZmYwMDAwOTY7XG4gICAgZm9udC1mYW1pbHk6IFRpdGFuT25lOyB9XG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUl0ZW1UaXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgbWFyZ2luOiAxMCUgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmE1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDsgfVxuICAgIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUl0ZW1UaXRsZSAuY2FuZHlUaHVtYm5haWwge1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMGNiO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMlOyB9XG4gICAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5SXRlbVRpdGxlIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIGNvbG9yOiAjYjFjOWZiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHktY2hlY2tsaXN0IHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZjMGNiO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cbiAgICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHktY2hlY2tsaXN0IC5jaGVja2xpc3RUeXBlIHtcbiAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2ZmYTUwMDtcbiAgICAgIHBhZGRpbmc6IDMlIDAlOyB9XG4gICAgICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHktY2hlY2tsaXN0IC5jaGVja2xpc3RUeXBlIGltZyB7XG4gICAgICAgIG1pbi13aWR0aDogMjVweDtcbiAgICAgICAgcGFkZGluZzogMyU7IH1cbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLnJ1YnJpa3Mge1xuICAgIG1hcmdpbjogMyUgYXV0bztcbiAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIC5ydWJyaWsgaDEge1xuICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgIGNvbG9yOiAjZmZhNTAwO1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lOyB9XG4gICAgLmNhbmR5RGV0YWlsc1BhZ2UgLnJ1YnJpa3MgLnJ1YnJpayAucnVicmlrLXRpdGxlIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYjFjOWZiOyB9XG4gICAgICAuY2FuZHlEZXRhaWxzUGFnZSAucnVicmlrcyAucnVicmlrIC5ydWJyaWstdGl0bGUgaDEge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGNvbG9yOiAjYjFjOWZiO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xuICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAgICAgLmNhbmR5RGV0YWlsc1BhZ2UgLnJ1YnJpa3MgLnJ1YnJpayAucnVicmlrLXRpdGxlIGgxIC5zZWxlY3RlZCB7XG4gICAgICAgICAgZm9udC1zaXplOiA3dnc7IH1cbiAgICAgICAgLmNhbmR5RGV0YWlsc1BhZ2UgLnJ1YnJpa3MgLnJ1YnJpayAucnVicmlrLXRpdGxlIGgxIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4OyB9XG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUluZ3JlZGllbnRzIHRhYmxlLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlOdXRyaXNjb3JlIHRhYmxlLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlBbGxlcmdlbnMgdGFibGUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJbmdyZWRpZW50cyB0YWJsZSxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5SW5ncmVkaWVudHMgdGQsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUluZ3JlZGllbnRzIHRyLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlOdXRyaXNjb3JlIHRhYmxlLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlOdXRyaXNjb3JlIHRkLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlOdXRyaXNjb3JlIHRyLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlBbGxlcmdlbnMgdGFibGUsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUFsbGVyZ2VucyB0ZCxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5QWxsZXJnZW5zIHRyIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjFjOWZiO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogI2ZmYTUwMDtcbiAgICBmb250LWZhbWlseTogVGl0YW5PbmU7IH1cblxuLnBsdXMtYnRuID4gYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG4uY2FuZHlEZXRhaWxzUGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiA1JSBhdXRvO1xuXG4gICAgLmluZm8geyBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICBib3JkZXI6IDNweCBkYXNoZWQgJG1haW4tcmVkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGNvbG9yOiAgJHN1Yi1yZWQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgfVxuXG4gICAgLmNhbmR5SXRlbVRpdGxlIHtcbiAgICAgICAgLy8gcG9zaXRpb246IHN0aWNreTsgPT4gY2hlY2sgd2h5IG5vdCB3b3JraW5nXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgbWFyZ2luOiAxMCUgYXV0bztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJG1haW4tb3JhbmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuXG4gICAgICAgIC5jYW5keVRodW1ibmFpbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLXBpbms7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FuZHktY2hlY2tsaXN0IHtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJG1haW4tcGluaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICAgICAgICAuY2hlY2tsaXN0VHlwZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1vcmFuZ2U7XG4gICAgICAgICAgICBwYWRkaW5nOiAzJSAwJTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ydWJyaWtzIHtcbiAgICAgICAgbWFyZ2luOiAzJSBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnJ1YnJpayB7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucnVicmlrLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRtYWluLWJsdWU7XG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRvIGFkZCBvbiBydWJyaWtzIDogIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlOyBcbiAgICAuY2FuZHlJbmdyZWRpZW50cyxcbiAgICAuY2FuZHlOdXRyaXNjb3JlLFxuICAgIC5jYW5keUFsbGVyZ2VucyB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLFxuICAgICAgICB0ZCxcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLWJsdWU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBsdXMtYnRuID4gYnV0dG9uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/play/candy-details/candy-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/play/candy-details/candy-details.component.ts ***!
  \***************************************************************/
/*! exports provided: CandyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandyDetailsComponent", function() { return CandyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/candy-api.service */ "./src/app/play/services/candy-api.service.ts");
/* harmony import */ var _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/keyvalue/keyvalue */ "./src/app/shared/pipes/keyvalue/keyvalue.ts");
/* harmony import */ var _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/shorten-string/shorten-string */ "./src/app/shared/pipes/shorten-string/shorten-string.ts");
/* harmony import */ var _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/remove-underscore/remove-underscore */ "./src/app/shared/pipes/remove-underscore/remove-underscore.ts");
/* harmony import */ var _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/remove-chars/remove-chars */ "./src/app/shared/pipes/remove-chars/remove-chars.ts");
/* harmony import */ var _shared_models_candy_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/candy.model */ "./src/app/shared/models/candy.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let CandyDetailsComponent = class CandyDetailsComponent {
    constructor(activatedRoute, candyApiService, keyvaluepipe, removeUnderscore, removeChars, shortenString) {
        this.activatedRoute = activatedRoute;
        this.candyApiService = candyApiService;
        this.keyvaluepipe = keyvaluepipe;
        this.removeUnderscore = removeUnderscore;
        this.removeChars = removeChars;
        this.shortenString = shortenString;
        this.iconTrue = 'assets/icon/icon_true.png';
        this.iconFalse = 'assets/icon/icon_false.png';
        this.arrowDownImg = 'assets/icon/icon_arrowDown.png';
        this.candy = new _shared_models_candy_model__WEBPACK_IMPORTED_MODULE_7__["Candy"]();
        this.candyItem = Object.assign({}, this.candy);
        this.candyChecklist = new _shared_models_candy_model__WEBPACK_IMPORTED_MODULE_7__["CandyChecklist"]();
        this.candyItem.candyChecklist = Object.assign({}, this.candyChecklist);
        this.allergens = false;
        this.showIngredients = false;
        this.showNutriscore = false;
        this.showAllergens = false;
        this.noKnownAllergen = false;
    }
    ngOnInit() {
        this.displayCandyInfo(this.candyId);
    }
    displayCandyInfo(candyId) {
        this.activatedRoute.paramMap.subscribe(param => {
            this.candyId = param.get('id');
        });
        // console.log('activated route param= ', this.candyId);
        this.candyApiService.getCandyById(this.candyId)
            .subscribe((response) => {
            this.candyItem = Object.assign({}, response);
            // special check for 'gelatin' in the api's fr version of ingredients list
            // (for it is systematically missing in the en version in use)
            const containsGelatin = () => this.candyItem.ingredients_text_fr.includes('gélatine' || false);
            // console.log('containsGelatin==', containsGelatin());
            // glutenFree check ----
            if (this.candyItem.allergens_hierarchy.length > 0) {
                for (const x of this.candyItem.allergens_hierarchy) {
                    if (x === 'gluten' || x === 'cereals' || x === 'wheat') {
                        this.candyChecklist.glutenFree = false;
                    }
                }
            }
            // gelatin check : add to ingredients list en version ---
            if (containsGelatin()) {
                this.candyItem.ingredients_tags.push('gelatin');
            }
            // vegan / vegetarian check ---
            for (const x of this.candyItem.ingredients_tags) {
                const animalProductsTerms = /dairy | milk | butter| eggs | honey/g;
                if (x === 'gelatin' || (containsGelatin())) {
                    if (x.match(animalProductsTerms)) {
                        this.candyChecklist.vegan = false;
                    }
                    this.candyChecklist.vegetarian = false;
                }
                else {
                    this.candyChecklist.vegetarian = true;
                }
            }
            // additives check ---
            if (this.candyItem.additives_tags && this.candyItem.additives_tags.length > 0) {
                this.candyChecklist.additives = true;
            }
            // organic check ---
            if (this.candyItem.labels !== '' || this.candyItem.labels_hierarchy) {
                const terms = /bio | ab | biologique/g;
                if (this.candyItem.labels.match(terms)) {
                    console.log('BIO');
                    this.candyChecklist.organic = true;
                }
            }
            // allergens check ---
            if (this.candyItem.allergens_hierarchy.length > 0) {
                this.allergens = true;
            }
        });
    }
    toggleIngredients() {
        this.showIngredients = !this.showIngredients;
    }
    toggleNutriscore() {
        this.showNutriscore = !this.showNutriscore;
    }
    toggleAllergens() {
        this.showAllergens = !this.showAllergens;
    }
};
CandyDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"] },
    { type: _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"] },
    { type: _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_5__["RemoveUnderscorePipe"] },
    { type: _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__["RemoveCharsPipe"] },
    { type: _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_4__["ShortenStringPipe"] }
];
CandyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-candy-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candy-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-details/candy-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./candy-details.component.scss */ "./src/app/play/candy-details/candy-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"],
        _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"],
        _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_5__["RemoveUnderscorePipe"],
        _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__["RemoveCharsPipe"],
        _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_4__["ShortenStringPipe"]])
], CandyDetailsComponent);



/***/ }),

/***/ "./src/app/play/candy-list/candy-list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/play/candy-list/candy-list.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.candyPageContainer .add-label {\n  height: 20vh;\n  background-image: url('sparkles.png');\n  background-size: cover;\n  background-position: center; }\n\n.candyPageContainer .add-label img {\n    max-width: 100px;\n    float: right; }\n\n.candyPageContainer .candyList {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: auto;\n  /* margin: -10% 10%; */ }\n\n.candyPageContainer .candyList .candyItem {\n    /*    border: 4px solid yellow;\n            background-color:pink; */\n    height: 7rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-content: center;\n    align-items: center;\n    border-bottom: 3px solid #b1c9fb; }\n\n.candyPageContainer .candyList .candyItem .candyName {\n      max-width: 70%;\n      display: flex;\n      flex-direction: column; }\n\n.candyPageContainer .candyList .candyItem .candyName h1,\n      .candyPageContainer .candyList .candyItem .candyName h2 {\n        font-family: TitanOne;\n        color: #b1c9fb;\n        text-transform: uppercase;\n        text-align: center; }\n\n.candyPageContainer .candyList .candyItem .candyName h1 {\n        font-size: 1rem;\n        transform: scale(1, 1.2);\n        -webkit-transform: scale(1, 1.2);\n        /* Safari and Chrome */\n        -moz-transform: scale(1, 1.2);\n        /* Firefox */\n        -ms-transform: scale(1, 1.2);\n        /* IE 9+ */\n        -o-transform: scale(1, 1.2);\n        /* Opera */ }\n\n.candyPageContainer .candyList .candyItem .candyName h2 {\n        font-size: 0.7rem; }\n\n.candyPageContainer .candyList .candyItem .candyThumbnail {\n      height: 4rem;\n      width: 4rem;\n      min-width: 4rem;\n      border: 3px solid #ff0000;\n      background-color: #ffc0cb;\n      align-content: center;\n      align-items: center;\n      overflow: hidden;\n      border-radius: 50px; }\n\n.candyPageContainer .candyList .candyItem .plus-btn > button {\n      width: 3rem;\n      height: 3rem;\n      background-color: transparent; }\n\n.candyPageContainer .loading {\n  color: #b1c9fb;\n  font-size: 4rem;\n  text-align: center; }\n\n.candyPageContainer .newChallenge-btn {\n  width: 90%;\n  margin-left: 50%;\n  bottom: 2%;\n  position: -webkit-sticky;\n  position: sticky; }\n\n.candyPageContainer .newChallenge-btn button {\n    padding: 1.5%;\n    background-color: yellow;\n    border-radius: 10px;\n    font-family: TitanOne;\n    color: #ffa500; }\n\n/* customize toasts  => global.scss */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2FuZHktbGlzdC9jYW5keS1saXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jYW5keS1saXN0L2NhbmR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBbURqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ25EOEM7O0FDZDlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBR2I7RUFHUSxZQUFZO0VBQ1oscUNBQTJEO0VBQzNELHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFObkM7SUFRWSxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBOztBQVR4QjtFQWFRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBQSxFQUF1Qjs7QUFqQi9CO0lBbUJJO29DRFlnQztJQ1Z4QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQ0ZuQlMsRUFBQTs7QUVSckI7TUE4QmdCLGNBQWM7TUFDZCxhQUFhO01BQ2Isc0JBQXNCLEVBQUE7O0FBaEN0Qzs7UUFtQ29CLHFCRmtCQztRRWpCRCxjRjVCQztRRTZCRCx5QkFBeUI7UUFDekIsa0JBQWtCLEVBQUE7O0FBdEN0QztRQXlDb0IsZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixnQ0FBZ0M7UUFBRSxzQkFBQTtRQUNsQyw2QkFBNkI7UUFBRSxZQUFBO1FBQy9CLDRCQUE0QjtRQUFFLFVBQUE7UUFDOUIsMkJBQTJCO1FBQUUsVUFBQSxFQUFXOztBQTlDNUQ7UUFpRG9CLGlCQUFpQixFQUFBOztBQWpEckM7TUFxRGdCLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLHlCRjNDSTtNRTRDSix5QkYvQ0s7TUVnREwscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7O0FBN0RuQztNQWdFZ0IsV0FBVztNQUNYLFlBQVk7TUFDWiw2QkFBNkIsRUFBQTs7QUFsRTdDO0VBdUVRLGNGL0RhO0VFZ0ViLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUF6RTFCO0VBNkVRLFVBQVU7RUFDVixnQkFBZTtFQUNmLFVBQVU7RUFDVix3QkFBZ0I7RUFBaEIsZ0JBQWdCLEVBQUE7O0FBaEZ4QjtJQW1GUSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixxQkZqQ2E7SUVrQ2IsY0ZuRmUsRUFBQTs7QUV3RnZCLHFDQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS9jYW5keS1saXN0L2NhbmR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIC5hZGQtbGFiZWwge1xuICBoZWlnaHQ6IDIwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGFya2xlcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuY2FuZHlQYWdlQ29udGFpbmVyIC5hZGQtbGFiZWwgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIGZsb2F0OiByaWdodDsgfVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIC8qIG1hcmdpbjogLTEwJSAxMCU7ICovIH1cbiAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0ge1xuICAgIC8qICAgIGJvcmRlcjogNHB4IHNvbGlkIHllbGxvdztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cGluazsgKi9cbiAgICBoZWlnaHQ6IDdyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2IxYzlmYjsgfVxuICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUge1xuICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5TmFtZSBoMSxcbiAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDIge1xuICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgIGNvbG9yOiAjYjFjOWZiO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDEge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAvKiBGaXJlZm94ICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgIC8qIElFIDkrICovXG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgLyogT3BlcmEgKi8gfVxuICAgICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5TmFtZSBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtOyB9XG4gICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgbWluLXdpZHRoOiA0cmVtO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmMDAwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMwY2I7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAuY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3QgLmNhbmR5SXRlbSAucGx1cy1idG4gPiBidXR0b24ge1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIC5sb2FkaW5nIHtcbiAgY29sb3I6ICNiMWM5ZmI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jYW5keVBhZ2VDb250YWluZXIgLm5ld0NoYWxsZW5nZS1idG4ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBib3R0b206IDIlO1xuICBwb3NpdGlvbjogc3RpY2t5OyB9XG4gIC5jYW5keVBhZ2VDb250YWluZXIgLm5ld0NoYWxsZW5nZS1idG4gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxLjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICBjb2xvcjogI2ZmYTUwMDsgfVxuXG4vKiBjdXN0b21pemUgdG9hc3RzICA9PiBnbG9iYWwuc2NzcyAqL1xuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyBuZWNlc3NhcnkgZm9yIGxpc3QgZWxlbWVudHMgdG8gY29tZSBvdXQgcmlnaHRcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIHtcblxuICAgIC5hZGQtbGFiZWwge1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGFya2xlcy5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhbmR5TGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLyogbWFyZ2luOiAtMTAlIDEwJTsgKi9cbiAgICAgICAgLmNhbmR5SXRlbSB7XG4gICAgLyogICAgYm9yZGVyOiA0cHggc29saWQgeWVsbG93O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpwaW5rOyAqL1xuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRtYWluLWJsdWU7XG5cbiAgICAgICAgICAgIC5jYW5keU5hbWUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogRmlyZWZveCAqL1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBJRSA5KyAqL1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIE9wZXJhICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRtYWluLXJlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1waW5rO1xuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wbHVzLWJ0biA+IGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5sb2FkaW5nIHtcbiAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubmV3Q2hhbGxlbmdlLWJ0biB7XG5cbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTAlO1xuICAgICAgICBib3R0b206IDIlO1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEuNSU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogY3VzdG9taXplIHRvYXN0cyAgPT4gZ2xvYmFsLnNjc3MgKi9cblxuXG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/play/candy-list/candy-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/play/candy-list/candy-list.component.ts ***!
  \*********************************************************/
/*! exports provided: CandyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandyListComponent", function() { return CandyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_candy_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/candy-api.service */ "./src/app/play/services/candy-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_models_candy_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/candy.model */ "./src/app/shared/models/candy.model.ts");
/* harmony import */ var _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/shorten-string/shorten-string */ "./src/app/shared/pipes/shorten-string/shorten-string.ts");
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");










let CandyListComponent = class CandyListComponent {
    constructor(candyApiService, localStorageService, userStatsService, shortenString, toastController, router, activatedRoute) {
        this.candyApiService = candyApiService;
        this.localStorageService = localStorageService;
        this.userStatsService = userStatsService;
        this.shortenString = shortenString;
        this.toastController = toastController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searching = false;
        this.anim = 'assets/graphicMat/loading.gif';
        // this.candyList$ =  this.candyApiService.getAllCandyFromApi();
        this.candyList = [];
        this.candyItem = new _shared_models_candy_model__WEBPACK_IMPORTED_MODULE_5__["Candy"]();
        this.candyChecklist = new _shared_models_candy_model__WEBPACK_IMPORTED_MODULE_5__["CandyChecklist"]();
        this.itemsInBackpack = [];
        this.totalCandy = 0;
        this.totalPoints = 0;
        this.newChallenge = false;
        this.searchTerm = '';
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    ngOnInit() {
        this.loadCandyListFromApi();
        /* this.retrievePathOrigin();
        if (!this.pathOrigin) {
          this.loadCandyListFromApi();
        } else if (this.pathOrigin === 'resumePlaying') {
          console.log('localStorage should activate');
          this.loadCandyListFromLocalStorage();
        } */
    }
    // ----- tests for issue : userstats resetting because of play module reloading when going to menu (app module) and back
    // test with localstorage :
    // the api call should happen only once :
    // when user opens the page for the first time ( = very first loading of play module )
    // then candylist data gets cached in localstorage for potential subsequent play module exits
    retrievePathOrigin() {
        this.activatedRoute.paramMap.subscribe(param => {
            this.pathOrigin = param.get('origin'); // = 'startPlaying' || 'resumePlaying'
        });
        return this.pathOrigin;
    }
    loadCandyListFromApi() {
        this.candyList$ = this.candyApiService.getAllCandyFromApi();
        // this.candyApiService.getAllCandyFromApi().subscribe(data => this.candyList = data );
        // this.localStorageService.setDataToStore(this.candyList);
    }
    loadCandyListFromLocalStorage() {
        this.localStorageService.getStoredData();
    }
    // ------------
    // search ..........................................................
    filterItems(searchTerm) {
        const searchbar = document.querySelector('ion-searchbar');
        searchbar.addEventListener('ionInput', this.handleInput);
    }
    handleInput(event) {
        const elementsToFilter = Array.from(document.getElementsByClassName('candyList'));
        const query = event.target.value.toLowerCase();
        requestAnimationFrame(() => {
            elementsToFilter.forEach(item => {
                const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
                item.style.display = shouldShow ? 'block' : 'none';
            });
        });
    }
    onSearchInput() {
        this.searching = true;
        this.filterItems(this.searchTerm);
    }
    // ..........................................................
    addCandyToBackpack(candyItem) {
        this.totalCandy$ = this.userStatsService.getCurrentBackpackCount();
        this.candyItem = candyItem;
        this.candyItem.product_name = candyItem.product_name;
        this.candyItem._id = candyItem._id;
        // tslint:disable-next-line: no-bitwise
        this.candyItem.amountInBackpack = candyItem.amountInBackpack | 0;
        // new candy has not been added yet
        let added = false;
        // look into items of backpack if new candy id already exists
        for (const item of this.itemsInBackpack) {
            // if id exists : only increase amount of this candy
            if (item.product_name === this.candyItem.product_name) {
                item.amountInBackpack += 1;
                added = true;
                break;
            }
        }
        // if id does not exist : add new candy type to backpack (and increase amount)
        if (!added) {
            this.candyItem.amountInBackpack += 1;
            this.itemsInBackpack.push(this.candyItem);
        }
        // console.log('ITEMS : ', this.itemsInBackpack);
        // console.log(this.itemsInBackpack.forEach(item => console.log('AMOUNT==== ', item.amountInBackpack)));
        // save new total of all candy and points
        this.userStatsService.update_totalCandyCount(this.totalCandy += 1);
        this.userStatsService.update_totalPoints(this.totalPoints += 6);
        // save backpack new content
        this.userStatsService.update_backpackContent(this.itemsInBackpack);
        this.presentToastNewPoints();
    }
    presentToastNewPoints() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast1 = yield this.toastController.create({
                message: `+ 6 Points! ${name}`,
                position: 'middle',
                duration: 300,
                cssClass: 'new-points-toast',
            });
            const toast2 = yield this.toastController.create({
                message: `TOTAL POINTS :` + this.totalPoints + `!`,
                position: 'middle',
                duration: 700,
                cssClass: 'new-totalpoints-toast'
            });
            toast1.present();
            setTimeout(() => {
                toast1.dismiss();
                toast2.present();
            }, 500);
            if (this.totalPoints % 30 === 0) {
                const toast3 = yield this.toastController.create({
                    position: 'middle',
                    duration: 800,
                    cssClass: 'levelUp-toast'
                });
                setTimeout(() => {
                    toast2.dismiss();
                    toast3.present();
                }, 500);
                this.newChallenge = true;
            }
        });
    }
    goToChallenges() {
        this.newChallenge = false;
        this.router.navigate(['play/trickOrTreat']);
    }
    ionViewWillLeave() {
    }
};
CandyListComponent.ctorParameters = () => [
    { type: _services_candy_api_service__WEBPACK_IMPORTED_MODULE_3__["CandyApiService"] },
    { type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] },
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_7__["UserStatsService"] },
    { type: _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_6__["ShortenStringPipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CandyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-candy-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candy-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./candy-list.component.scss */ "./src/app/play/candy-list/candy-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_candy_api_service__WEBPACK_IMPORTED_MODULE_3__["CandyApiService"],
        _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"],
        _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_7__["UserStatsService"],
        _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_6__["ShortenStringPipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CandyListComponent);



/***/ }),

/***/ "./src/app/play/challenges-list/challenges-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/play/challenges-list/challenges-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('spiders_bg-half.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: auto;\n    padding-top: 10%; }\n\n.special-bg .main-container h2 {\n      color: #dfddd5; }\n\n.special-bg .main-container h1 {\n      margin: 2%;\n      padding: 3%;\n      border: 2px solid #b1c9fb;\n      border-radius: 15px;\n      font-family: TitanOne;\n      color: #dfddd5;\n      font-size: 1rem; }\n\n.special-bg .main-container h1 span {\n        font-size: 3.5rem; }\n\n.special-bg .bubble {\n    width: 40%;\n    margin: 10% auto;\n    align-self: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy1saXN0L2NoYWxsZW5nZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy1saXN0L2NoYWxsZW5nZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFtRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbkQ4Qzs7QUNkOUM7Ozs7OztFQU1JLFNBQVMsRUFBQTs7QUFHYjtFQUNJLDRDQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBSC9CO0lBT1EsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBVnhCO01BWVksY0Zhb0IsRUFBQTs7QUV6QmhDO01BZVksVUFBUztNQUNULFdBQVc7TUFDWCx5QkZUUztNRVVULG1CQUFtQjtNQUNuQixxQkZrQ1M7TUVqQ1QsY0ZLb0I7TUVKcEIsZUFBZSxFQUFBOztBQXJCM0I7UUFzQm1CLGlCQUFpQixFQUFBOztBQXRCcEM7SUEyQlEsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy1saXN0L2NoYWxsZW5nZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgJGxpZ2h0cHVycGxlLWJnOiByZ2JhKDE5OSwgMywgMTk5LCAwLjM0Mik7XG4gIFxuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogcmdiKDIyMywgMjIxLCAyMTMpO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5zcGVjaWFsLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L3NwaWRlcnNfYmctaGFsZi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgaDIge1xuICAgICAgY29sb3I6ICNkZmRkZDU7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgaDEge1xuICAgICAgbWFyZ2luOiAyJTtcbiAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2IxYzlmYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2RmZGRkNTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIGgxIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTsgfVxuICAuc3BlY2lhbC1iZyAuYnViYmxlIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zcGVjaWFsLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvc3BpZGVyc19iZy1oYWxmLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG5cbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luOjIlO1xuICAgICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICBjb2xvcjogJHN1Yi1saWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIHNwYW4geyBmb250LXNpemU6IDMuNXJlbTsgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5idWJibGUge1xuXG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/play/challenges-list/challenges-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/play/challenges-list/challenges-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChallengesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesListComponent", function() { return ChallengesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");
/* harmony import */ var _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/keyvalue/keyvalue */ "./src/app/shared/pipes/keyvalue/keyvalue.ts");




let ChallengesListComponent = class ChallengesListComponent {
    constructor(userStatsService, keyvaluepipe) {
        this.userStatsService = userStatsService;
        this.keyvaluepipe = keyvaluepipe;
        this.noChallengesYetImg = 'assets/graphicMat/noChallengesYet_bubble.png';
        this.iconTrue = 'assets/icon/icon_true.png';
        /*       this.achievedTricksList = [];
              this.achievedTreatsList = []; */
    }
    ngOnInit() {
        this.userStatsService.getCurrentAchievedTreats().subscribe(treats => {
            this.achievedTreatsList = treats;
            console.log('TREATS LIST=', this.achievedTreatsList);
            if (this.achievedTreatsList.length > 0) {
                this.achievedTreatsdisplay = true;
            }
        });
        this.userStatsService.getCurrentAchievedTricks().subscribe(tricks => {
            this.achievedTricksList = tricks;
            console.log('TRICKS LIST=', this.achievedTricksList);
            if (this.achievedTricksList.length > 0) {
                this.achievedTricksdisplay = true;
            }
        });
    }
};
ChallengesListComponent.ctorParameters = () => [
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"] },
    { type: _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"] }
];
ChallengesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-challenges-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./challenges-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges-list/challenges-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./challenges-list.component.scss */ "./src/app/play/challenges-list/challenges-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"],
        _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"]])
], ChallengesListComponent);



/***/ }),

/***/ "./src/app/play/challenges/challenges.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/play/challenges/challenges.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('spiders_bg-half.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: auto;\n    padding-top: 10%; }\n\n.special-bg .main-container .upper-row,\n    .special-bg .main-container .bottom-row {\n      padding: 3% 0%; }\n\n.special-bg .main-container .upper-row h1,\n      .special-bg .main-container .bottom-row h1 {\n        color: #dfddd5;\n        font-size: 1.5rem;\n        line-height: 0.8; }\n\n.special-bg .main-container .upper-row h1 span,\n        .special-bg .main-container .bottom-row h1 span {\n          font-size: 2.5rem;\n          color: #fbb1f1; }\n\n.special-bg .main-container .upper-row button,\n      .special-bg .main-container .bottom-row button {\n        padding: 3%;\n        margin: 2% 5%; }\n\n.special-bg .main-container .upper-row button:first-child,\n      .special-bg .main-container .bottom-row button:first-child {\n        font-size: 1.3rem; }\n\n.special-bg .main-container .upper-row button:nth-child(2),\n      .special-bg .main-container .bottom-row button:nth-child(2) {\n        color: #ffa500; }\n\n.special-bg .main-container .upper-row img,\n      .special-bg .main-container .bottom-row img {\n        width: 5rem;\n        float: right; }\n\n.special-bg .main-container .main-row h1 {\n      font-size: 1.2rem;\n      color: #ff000096; }\n\n.special-bg .main-container .main-row .description-container {\n      width: 80%;\n      border: 5px dotted #ff000096;\n      background-color: rgba(99, 1, 99, 0.342);\n      border-radius: 15px; }\n\n.special-bg .main-container .main-row .description-container p {\n        padding: 5%;\n        font-size: 1.6rem; }\n\n.special-bg .main-container .main-row .description-container p:first-child {\n        color: #dfddd5; }\n\n.special-bg .main-container .main-row .description-container p:nth-child(2) {\n        color: #ffa500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBbURqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ25EOEM7O0FDZDlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBR2I7RUFDSSw0Q0FBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBOztBQUgvQjtJQU1RLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVR4Qjs7TUFhWSxjQUFjLEVBQUE7O0FBYjFCOztRQWVnQixjRlVnQjtRRVRoQixpQkFBaUI7UUFDakIsZ0JBQWdCLEVBQUE7O0FBakJoQzs7VUFtQm9CLGlCQUFpQjtVQUNqQixjRlRDLEVBQUE7O0FFWHJCOztRQXdCZ0IsV0FBVztRQUNYLGFBQWEsRUFBQTs7QUF6QjdCOztRQTRCZ0IsaUJBQWdCLEVBQUE7O0FBNUJoQzs7UUErQmdCLGNGM0JPLEVBQUE7O0FFSnZCOztRQW1DZ0IsV0FBVztRQUNYLFlBQVksRUFBQTs7QUFwQzVCO01BeUNnQixpQkFBaUI7TUFDakIsZ0JGNUJLLEVBQUE7O0FFZHJCO01BNkNnQixVQUFVO01BQ1YsNEJGaENLO01FaUNMLHdDQUE4QztNQUM5QyxtQkFBbUIsRUFBQTs7QUFoRG5DO1FBbURvQixXQUFXO1FBQ1gsaUJBQWlCLEVBQUE7O0FBcERyQztRQXVEb0IsY0Y5QlksRUFBQTs7QUV6QmhDO1FBMERvQixjRnRERyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uc3BlY2lhbC1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGlkZXJzX2JnLWhhbGYucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cbiAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTAlOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3csXG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IHtcbiAgICAgIHBhZGRpbmc6IDMlIDAlOyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLnVwcGVyLXJvdyBoMSxcbiAgICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAuYm90dG9tLXJvdyBoMSB7XG4gICAgICAgIGNvbG9yOiAjZGZkZGQ1O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuODsgfVxuICAgICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLnVwcGVyLXJvdyBoMSBzcGFuLFxuICAgICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLmJvdHRvbS1yb3cgaDEgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgY29sb3I6ICNmYmIxZjE7IH1cbiAgICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAudXBwZXItcm93IGJ1dHRvbixcbiAgICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAuYm90dG9tLXJvdyBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgbWFyZ2luOiAyJSA1JTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cgYnV0dG9uOmZpcnN0LWNoaWxkLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtOyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLnVwcGVyLXJvdyBidXR0b246bnRoLWNoaWxkKDIpLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICAgICAgICBjb2xvcjogI2ZmYTUwMDsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cgaW1nLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGltZyB7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLm1haW4tcm93IGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgY29sb3I6ICNmZjAwMDA5NjsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAubWFpbi1yb3cgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgYm9yZGVyOiA1cHggZG90dGVkICNmZjAwMDA5NjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTksIDEsIDk5LCAwLjM0Mik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLm1haW4tcm93IC5kZXNjcmlwdGlvbi1jb250YWluZXIgcCB7XG4gICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5tYWluLXJvdyAuZGVzY3JpcHRpb24tY29udGFpbmVyIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICBjb2xvcjogI2RmZGRkNTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5tYWluLXJvdyAuZGVzY3JpcHRpb24tY29udGFpbmVyIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgY29sb3I6ICNmZmE1MDA7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLy8gbmVjZXNzYXJ5IGZvciBsaXN0IGVsZW1lbnRzIHRvIGNvbWUgb3V0IHJpZ2h0XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNwZWNpYWwtYmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGlkZXJzX2JnLWhhbGYucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcblxuICAgICAgICAudXBwZXItcm93LFxuICAgICAgICAuYm90dG9tLXJvdyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzJSAwJTtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHN1Yi1saWdodDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzdWItcGluaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMiUgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b246bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tcm93IHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHN1Yi1yZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IGRvdHRlZCAkc3ViLXJlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0cHVycGxlLWJnLCAyMCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/play/challenges/challenges.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/play/challenges/challenges.component.ts ***!
  \*********************************************************/
/*! exports provided: ChallengesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return ChallengesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");
/* harmony import */ var _shared_models_challenges_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/challenges.model */ "./src/app/shared/models/challenges.model.ts");
/* harmony import */ var _services_challenges_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/challenges-api.service */ "./src/app/play/services/challenges-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let ChallengesComponent = class ChallengesComponent {
    constructor(activatedRoute, userStatsService, challengesApiService, toastController, router) {
        this.activatedRoute = activatedRoute;
        this.userStatsService = userStatsService;
        this.challengesApiService = challengesApiService;
        this.toastController = toastController;
        this.router = router;
        this.purpleBubbleImg = 'assets/graphicMat/purple_bubble.png';
        this.candleSkullImg = 'assets/graphicMat/candle_skull.png';
        this.dataIsLoaded = false;
        this.treats = [];
        this.tricks = [];
        this.totalPoints = 0;
        this.newTotalPoints = 0;
    }
    ngOnInit() {
        this.userStatsService.getCurrentTriggeredTreats().subscribe(data => this.triggeredTreatsList = data);
        this.userStatsService.getCurrentTriggeredTricks().subscribe(data => this.triggeredTricksList = data);
        this.userStatsService.getCurrentAchievedTreats().subscribe(data => this.achievedTreatsList = data);
        this.userStatsService.getCurrentAchievedTricks().subscribe(data => this.achievedTricksList = data);
        this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);
        this.getChoice();
        this.getRandomChallenge(this.choice);
        console.log('TOTAL POINTS before bonus==', this.totalPoints);
    }
    getChoice() {
        this.activatedRoute.paramMap.subscribe(param => {
            this.choice = param.get('choice');
        });
    }
    getRandomChallenge(choice) {
        this.choice = choice;
        if (this.choice === 'treat') {
            this.currentChallenge = new _shared_models_challenges_model__WEBPACK_IMPORTED_MODULE_4__["Treat"]();
            this.challengesApiService.getTreatsList()
                .subscribe((data) => {
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < data.length; i++) {
                    this.treats.push(data[i]);
                    const randomTreat = this.treats[Math.floor(Math.random() * this.treats.length)];
                    this.currentChallenge = randomTreat;
                    this.currentChallenge.challengeDescription = randomTreat.treatDescription;
                    this.currentChallenge.bonusPoints = randomTreat.bonusPoints;
                    this.currentChallenge.challengeId = randomTreat.treatId;
                    this.currentChallenge.challengeType = 'treat';
                }
                console.log('triggeredTreatsList before update==', this.triggeredTreatsList);
                this.triggeredTreatsList.push(Object.assign({}, this.currentChallenge));
                console.log('triggeredTreatsList after update==', this.triggeredTreatsList);
                this.userStatsService.updateCurrentTriggeredTreats(this.triggeredTreatsList);
                console.log('TREATSLIST==', this.treats); // (3) [{…}, {…}, {…}]
                console.log('CURRENT CHALLENGE==', Object.assign({}, this.currentChallenge));
                return Object.assign({}, this.currentChallenge);
            });
        }
        else {
            this.currentChallenge = new _shared_models_challenges_model__WEBPACK_IMPORTED_MODULE_4__["Trick"]();
            this.challengesApiService.getTricksList()
                .subscribe((data) => {
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < data.length; i++) {
                    this.tricks.push(data[i]);
                    const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
                    this.currentChallenge = randomTrick;
                    this.currentChallenge.challengeDescription = randomTrick.trickDescription;
                    this.currentChallenge.bonusPoints = randomTrick.bonusPoints;
                    this.currentChallenge.challengeId = randomTrick.trickId;
                    this.currentChallenge.challengeType = 'trick';
                }
                this.triggeredTricksList.push(Object.assign({}, this.currentChallenge));
                this.userStatsService.updateCurrentTriggeredTricks(this.triggeredTricksList);
                console.log('CURRENT CHALLENGE==', Object.assign({}, this.currentChallenge));
                return Object.assign({}, this.currentChallenge);
            });
        }
        this.dataIsLoaded = true;
    }
    isDone(currentChallenge) {
        this.currentChallenge = currentChallenge;
        console.log('CURRENT IS DONE== ', this.currentChallenge);
        this.currentChallenge.challengeType = currentChallenge.challengeType;
        console.log('CURRENT IS DONE TYPE==', this.currentChallenge.challengeType);
        this.newTotalPoints = this.totalPoints + this.currentChallenge.bonusPoints;
        this.userStatsService.update_totalPoints(this.newTotalPoints);
        this.presentToastBonusPoints(this.currentChallenge.bonusPoints, this.newTotalPoints);
        console.log('CURRENT TRICKS LIST==', this.achievedTricksList);
        console.log('CURRENT TREATS LIST==', this.achievedTreatsList);
        if (this.currentChallenge.challengeType === 'trick') {
            this.currentChallenge.hasBeenCompleted = true;
            this.achievedTricksList.push(Object.assign({}, this.currentChallenge));
            this.userStatsService.updateCurrentAchievedTricks(this.achievedTricksList);
        }
        else {
            if (this.currentChallenge.challengeType === 'treat') {
                this.currentChallenge.hasBeenCompleted = true;
                this.achievedTreatsList.push(Object.assign({}, this.currentChallenge));
                this.userStatsService.updateCurrentAchievedTreats(this.achievedTreatsList);
            }
        }
        this.router.navigate(['play/user-stats']);
    }
    isSkipped() {
        this.router.navigate(['play/user-stats']);
    }
    presentToastBonusPoints(bonusPoints, newTotalPoints) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast1 = yield this.toastController.create({
                message: `BONUS:` + this.currentChallenge.bonusPoints + `Points!`,
                position: 'middle',
                duration: 300,
                cssClass: 'new-points-toast',
            });
            const toast2 = yield this.toastController.create({
                message: `TOTAL POINTS :` + this.totalPoints + `!`,
                position: 'middle',
                duration: 700,
                cssClass: 'new-totalpoints-toast'
            });
            toast1.present();
            setTimeout(() => {
                toast1.dismiss();
                toast2.present();
            }, 500);
            if (this.totalPoints % 30 === 0) {
                const toast3 = yield this.toastController.create({
                    position: 'middle',
                    duration: 800,
                    cssClass: 'levelUp-toast'
                });
                setTimeout(() => {
                    toast2.dismiss();
                    toast3.present();
                }, 500);
            }
        });
    }
};
ChallengesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"] },
    { type: _services_challenges_api_service__WEBPACK_IMPORTED_MODULE_5__["ChallengesApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChallengesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-challenges',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./challenges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./challenges.component.scss */ "./src/app/play/challenges/challenges.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"],
        _services_challenges_api_service__WEBPACK_IMPORTED_MODULE_5__["ChallengesApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ChallengesComponent);



/***/ }),

/***/ "./src/app/play/map/map.component.scss":
/*!*********************************************!*\
  !*** ./src/app/play/map/map.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.mapContainer {\n  z-index: 1;\n  height: 80%;\n  border: 8px solid black; }\n\n.mapContainer #map {\n    z-index: 1;\n    height: 100vh;\n    width: 100%; }\n\n.mapContainer .leaflet-bar {\n    margin-top: 50vh; }\n\n.mapContainer .scroll-content {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n\n.options-container {\n  z-index: 2;\n  position: absolute;\n  bottom: 0;\n  background-color: #3e173b;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.options-container:active {\n    transform: translateY(-30%);\n    transition: transform 300ms linear;\n    will-change: transform; }\n\n.options-container .saveLocationBtnContainer {\n    width: 90%;\n    margin: auto; }\n\n.options-container .saveLocationBtnContainer button {\n      background-color: transparent;\n      font-family: TitanOne;\n      color: #b1c9fb;\n      text-transform: uppercase;\n      justify-content: space-between; }\n\n.options-container .saveLocationBtnContainer button img {\n        border: 2px solid #b1c9fb;\n        border-radius: 5px;\n        padding: 3%;\n        width: 2rem; }\n\n.options-container .saveLocationBtnContainer button:hover img {\n        padding: 0%; }\n\n@media (min-width: 567px) and (max-width: 767px) {\n  ion-content {\n    width: 100%; }\n    ion-content .mapContainer {\n      height: 100%;\n      margin: 0; } }\n\n@media (min-width: 768px) and (max-width: 1023px) {\n  /*   ion-content {\n        width: 80%;\n        .mapContainer {\n            width: 100vw;\n            height: 90%;\n            margin: auto;\n        }\n    } */ }\n\n@media (min-width: 1024px) {\n  /*   ion-content {\n        width: 80% !important;\n\n        .mapContainer {\n            width: 100%;\n            height: 100%;\n            margin: 0;\n        }\n    } */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVBOztrQ0NEa0MsRURHQzs7QUFtRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDbkQ4Qzs7QUNmOUM7RUFDSSxVQUFVO0VBR1YsV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUwzQjtJQVFRLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVyxFQUFBOztBQVZuQjtJQWNRLGdCQUFnQixFQUFBOztBQWR4QjtJQWlCUSx3QkFBd0I7SUFDeEIsMkJBQTJCLEVBQUE7O0FBSW5DO0VBQ0ksVUFBUztFQUNULGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IseUJGQW1CO0VFQ25CLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBQTs7QUFOaEM7SUFVZ0IsMkJBQTJCO0lBQ25DLGtDQUFrQztJQUNsQyxzQkFBc0IsRUFBQTs7QUFaOUI7SUFnQlEsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFqQnBCO01BbUJZLDZCQUE2QjtNQUM3QixxQkZxQlM7TUVwQlQsY0Z6QlM7TUUwQlQseUJBQXlCO01BQ3pCLDhCQUE4QixFQUFBOztBQXZCMUM7UUF5QmdCLHlCRjdCSztRRThCTCxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFdBQVcsRUFBQTs7QUE1QjNCO1FBaUNvQixXQUFXLEVBQUE7O0FBVS9CO0VBQ0k7SUFDSSxXQUFXLEVBQUE7SUFEZjtNQUlRLFlBQVk7TUFDWixTQUFTLEVBQUEsRUFDWjs7QUFJVDtFQUNFOzs7Ozs7O09ESEssRUNVQzs7QUFJUjtFQUVFOzs7Ozs7OztPRExLLEVDYUMiLCJmaWxlIjoic3JjL2FwcC9wbGF5L21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbi5tYXBDb250YWluZXIge1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7IH1cbiAgLm1hcENvbnRhaW5lciAjbWFwIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLm1hcENvbnRhaW5lciAubGVhZmxldC1iYXIge1xuICAgIG1hcmdpbi10b3A6IDUwdmg7IH1cbiAgLm1hcENvbnRhaW5lciAuc2Nyb2xsLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cblxuLm9wdGlvbnMtY29udGFpbmVyIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTE3M2I7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAub3B0aW9ucy1jb250YWluZXI6YWN0aXZlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyB9XG4gIC5vcHRpb25zLWNvbnRhaW5lciAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bzsgfVxuICAgIC5vcHRpb25zLWNvbnRhaW5lciAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIGNvbG9yOiAjYjFjOWZiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgICAgLm9wdGlvbnMtY29udGFpbmVyIC5zYXZlTG9jYXRpb25CdG5Db250YWluZXIgYnV0dG9uIGltZyB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMWM5ZmI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgIHdpZHRoOiAycmVtOyB9XG4gICAgICAub3B0aW9ucy1jb250YWluZXIgLnNhdmVMb2NhdGlvbkJ0bkNvbnRhaW5lciBidXR0b246aG92ZXIgaW1nIHtcbiAgICAgICAgcGFkZGluZzogMCU7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgaW9uLWNvbnRlbnQgLm1hcENvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLyogICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9ICovIH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAvKiAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9ICovIH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1hcENvbnRhaW5lciB7XG4gICAgei1pbmRleDogMTtcblxuICAgIC8vIG1vYmlsZSBwb3J0cmFpdFxuICAgIGhlaWdodDogODAlO1xuICAgIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xuXG4gICAgI21hcCB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAvLyBjdXN0b21pemUgbWFwIHpvb20gY29udHJvbHNcbiAgICAubGVhZmxldC1iYXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHZoO1xuICAgIH1cbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5vcHRpb25zLWNvbnRhaW5lciB7XG4gICAgei1pbmRleDoyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1wdXJwbGU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbiB0byBpbXBsZW1lbnRcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbi8vIGJyZWFrcG9pbnRzIGV4Y2VwdGlvbnMgKCDiiaAgZ2xvYmFsLnNjc3MgOiBpb24tY29udGVudCB3b24ndCBzaHJpbmsgYXMgbXVjaCBhcyBvdGhlciBwYWdlcyBhZnRlciA1NjdweClcbi8vIG1vYmlsZSBsYW5kc2NhcGVcbkBtZWRpYSAobWluLXdpZHRoOiA1NjdweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAubWFwQ29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHRhYmxldCBwb3J0cmFpdFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC8qICAgaW9uLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAubWFwQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgfSAqL1xufVxuXG4vLyB0YWJsZXQgbGFuZHNjYXBlIGFuZCArXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLy8gZXhjZXB0aW9uIGZyb20gZ2xvYmFsLnNjc3NcbiAgLyogICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcblxuICAgICAgICAubWFwQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfSAqL1xufVxuXG4vLyB0byBhdm9pZCBjb25zb2xlIHdhcm5pbmcgJ3dpbGwtY2hhbmdlIG1lbW9yeSBpcyB0b28gaGlnaC4uJ1xuLy8gLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LXRpbGUsLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20tYW5pbWF0ZWQgeyB3aWxsLWNoYW5nZTphdXRvICFpbXBvcnRhbnQ7IH1cbi8vICBjb21tZW50ZWQgb3V0ID0+IGYncyB1cCBwYWdlIGRpc3BsYXkgOihcbiJdfQ== */");

/***/ }),

/***/ "./src/app/play/map/map.component.ts":
/*!*******************************************!*\
  !*** ./src/app/play/map/map.component.ts ***!
  \*******************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/geoloc.service */ "./src/app/shared/services/geoloc.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");






let MapComponent = class MapComponent {
    constructor(geolocService, geolocation, toastController, userStatsService) {
        this.geolocService = geolocService;
        this.geolocation = geolocation;
        this.toastController = toastController;
        this.userStatsService = userStatsService;
        this.coords = {};
        this.newAddress = {};
        this.heartIcon = 'assets/graphicMat/heartAsset_red.png';
        // this.newAddress = { lat:  this.coords.latitude, long: this.coords.longitude };
        // this.geolocService.getCurrentLocation();
        this.coords = this.geolocService.getGeo();
        this.userStatsService.getCurrentAddressesList().subscribe(data => this.addressList = data);
        this.age = this.geolocService.getAgeRange();
        // console.log('user age= ', this.age);
        if (this.age === undefined) {
            this.age = 3;
        }
        this.allowedDistance = this.geolocService.findAllowedDistance(this.age);
        // console.log('dist= ', this.allowedDistance);
    }
    ngOnInit() {
        if (!this.coords) {
            this.geolocService.getCurrentLocation();
            this.geolocService.loadMapWithoutBounds();
        }
        else {
            this.initMapWithParams();
        }
    }
    ionViewDidLoad() {
    }
    initMapWithParams() {
        this.mapBounds = this.geolocService.calculateMapBounds(this.allowedDistance);
        console.log('mapBounds= ', this.mapBounds);
        this.geolocService.loadMapWithBounds();
        // this.geolocService.loadMapWithoutBounds();
    }
    saveAddress() {
        console.log('COORDS==', this.coords);
        if (!this.coords) {
            this.geolocation.getCurrentPosition().then((data) => {
                this.coords.lat = data.coords.latitude;
                this.coords.long = data.coords.longitude;
                console.log('COORDS==', this.coords);
            });
        }
        this.newAddress = { lat: this.coords.coords.latitude, long: this.coords.coords.longitude };
        console.log('NEW ADDRESS==', this.newAddress);
        console.log('ADDRESSLIST=', this.addressList, 'LENGHT=', this.addressList.length);
        this.geolocService.reverseGeocode(this.coords.coords.latitude, this.coords.coords.longitude);
        if (this.addressList.length > 0) {
            // tslint:disable-next-line: prefer-for-of
            this.addressList.forEach((element) => {
                console.log('ELEMENT==', element);
                if (element.lat === this.newAddress.lat && element.long === this.newAddress.long) {
                    this.presentToastWithOptions('Address already saved!');
                    return;
                }
                else {
                    this.newAddress.timestamp = Date.now();
                    this.addressList.push(this.newAddress);
                    this.userStatsService.updateCurrentAddressesList(this.addressList);
                    this.presentToastWithOptions('Address saved to favorites ');
                }
            });
        }
        else {
            this.newAddress.timestamp = Date.now();
            this.addressList.push(this.newAddress);
            this.userStatsService.updateCurrentAddressesList(this.addressList);
            this.presentToastWithOptions('Address saved to favorites ');
        }
    }
    presentToastWithOptions(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `${message}`,
                position: 'middle',
                duration: 500,
                cssClass: 'savedAddress-toast'
            });
            toast.present();
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_2__["GeolocService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapComponent.prototype, "mapContainer", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/play/map/map.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_2__["GeolocService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"]])
], MapComponent);



/***/ }),

/***/ "./src/app/play/play-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/play/play-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PlayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayRoutingModule", function() { return PlayRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _play_candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../play/candy-list/candy-list.component */ "./src/app/play/candy-list/candy-list.component.ts");
/* harmony import */ var _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candy-details/candy-details.component */ "./src/app/play/candy-details/candy-details.component.ts");
/* harmony import */ var _play_backpack_backpack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../play/backpack/backpack.component */ "./src/app/play/backpack/backpack.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/play/map/map.component.ts");
/* harmony import */ var _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addresses/addresses.component */ "./src/app/play/addresses/addresses.component.ts");
/* harmony import */ var _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-stats/user-stats.component */ "./src/app/play/user-stats/user-stats.component.ts");
/* harmony import */ var _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trick-or-treat/trick-or-treat.component */ "./src/app/play/trick-or-treat/trick-or-treat.component.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/play/challenges/challenges.component.ts");
/* harmony import */ var _challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./challenges-list/challenges-list.component */ "./src/app/play/challenges-list/challenges-list.component.ts");












const playModuleRoutes = [
    { path: '', redirectTo: 'candyList' },
    { path: 'candyList', component: _play_candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_3__["CandyListComponent"] },
    { path: 'user-stats', component: _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_8__["UserStatsComponent"] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"] },
    { path: 'addresses', component: _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_7__["AddressesComponent"] },
    { path: 'candyDetails/:id', component: _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_4__["CandyDetailsComponent"] },
    { path: 'backpack', component: _play_backpack_backpack_component__WEBPACK_IMPORTED_MODULE_5__["BackpackComponent"] },
    { path: 'trickOrTreat', component: _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_9__["TrickOrTreatComponent"] },
    { path: 'challenges', component: _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_10__["ChallengesComponent"] },
    { path: 'challenges-list', component: _challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_11__["ChallengesListComponent"] },
    //  {path: '404', component: NotFoundComponent},
    // { path: '**', redirectTo: '404' },
    { path: '**', redirectTo: '' }
];
let PlayRoutingModule = class PlayRoutingModule {
};
PlayRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(playModuleRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PlayRoutingModule);



/***/ }),

/***/ "./src/app/play/play.module.ts":
/*!*************************************!*\
  !*** ./src/app/play/play.module.ts ***!
  \*************************************/
/*! exports provided: PlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayModule", function() { return PlayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pipes/pipes.module */ "./src/app/shared/pipes/pipes.module.ts");
/* harmony import */ var _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/keyvalue/keyvalue */ "./src/app/shared/pipes/keyvalue/keyvalue.ts");
/* harmony import */ var _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pipes/remove-underscore/remove-underscore */ "./src/app/shared/pipes/remove-underscore/remove-underscore.ts");
/* harmony import */ var _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/pipes/shorten-string/shorten-string */ "./src/app/shared/pipes/shorten-string/shorten-string.ts");
/* harmony import */ var _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes/remove-chars/remove-chars */ "./src/app/shared/pipes/remove-chars/remove-chars.ts");
/* harmony import */ var _play_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./play-routing.module */ "./src/app/play/play-routing.module.ts");
/* harmony import */ var _candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./candy-list/candy-list.component */ "./src/app/play/candy-list/candy-list.component.ts");
/* harmony import */ var _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./candy-details/candy-details.component */ "./src/app/play/candy-details/candy-details.component.ts");
/* harmony import */ var _backpack_backpack_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./backpack/backpack.component */ "./src/app/play/backpack/backpack.component.ts");
/* harmony import */ var _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addresses/addresses.component */ "./src/app/play/addresses/addresses.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map/map.component */ "./src/app/play/map/map.component.ts");
/* harmony import */ var _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-stats/user-stats.component */ "./src/app/play/user-stats/user-stats.component.ts");
/* harmony import */ var _services_level_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/level-api.service */ "./src/app/play/services/level-api.service.ts");
/* harmony import */ var _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trick-or-treat/trick-or-treat.component */ "./src/app/play/trick-or-treat/trick-or-treat.component.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/play/challenges/challenges.component.ts");
/* harmony import */ var _challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./challenges-list/challenges-list.component */ "./src/app/play/challenges-list/challenges-list.component.ts");























let PlayModule = class PlayModule {
};
PlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // AgeSelectComponent,
            _candy_list_candy_list_component__WEBPACK_IMPORTED_MODULE_12__["CandyListComponent"],
            _candy_details_candy_details_component__WEBPACK_IMPORTED_MODULE_13__["CandyDetailsComponent"],
            _backpack_backpack_component__WEBPACK_IMPORTED_MODULE_14__["BackpackComponent"],
            _addresses_addresses_component__WEBPACK_IMPORTED_MODULE_15__["AddressesComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"],
            _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_17__["UserStatsComponent"],
            _trick_or_treat_trick_or_treat_component__WEBPACK_IMPORTED_MODULE_19__["TrickOrTreatComponent"],
            _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_20__["ChallengesComponent"],
            _challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_21__["ChallengesListComponent"]
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _play_routing_module__WEBPACK_IMPORTED_MODULE_11__["PlayRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ],
        providers: [
            _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_7__["KeyvaluePipe"],
            _shared_pipes_remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_8__["RemoveUnderscorePipe"],
            _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_9__["ShortenStringPipe"],
            _shared_pipes_remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_10__["RemoveCharsPipe"],
            _services_level_api_service__WEBPACK_IMPORTED_MODULE_18__["LevelApiService"]
        ]
    })
], PlayModule);



/***/ }),

/***/ "./src/app/play/services/candy-api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/play/services/candy-api.service.ts ***!
  \****************************************************/
/*! exports provided: CandyApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandyApiService", function() { return CandyApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/play/services/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        observe: 'response',
        responseType: 'json'
        // 'Authorization': 'my-auth-token'
    })
};
let CandyApiService = class CandyApiService {
    constructor(httpService, httpErrorHandler) {
        this.httpService = httpService;
        this.candyItem = { _id: '', product_name: '', amountInBackpack: null };
        this.handleError = httpErrorHandler.createHandleError('CandyApiService');
        this.resultPageSize = 100;
    }
    // GET all candy list from api (results per page can vary)
    // | => TO DO : clean up doublons in response list with a pipe
    getAllCandyFromApi() {
        return this.httpService
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].candyListApi + this.resultPageSize}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            // console.log(response);
            const rawApiResponseObject = response;
            const candyListFromApi = rawApiResponseObject.products;
            // '.products' => for object from api contains 2 other main fields!
            //  ( -- why is this syntax not working anymore? :
            // const candyListFromApi: Array<any> = rawApiResponse.json().products as CandyI[];
            // console.log(candyListFromApi);
            return candyListFromApi;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAllCandyFromApi', [])) // then handle the error
        );
    }
    // get candy by id from api
    getCandyById(candyId) {
        return this.httpService
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].candyByIdApiUrl}` + candyId + '.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const RawApiResponseCandyItem = response;
            const candyItemFromApi = RawApiResponseCandyItem.product;
            console.log(candyItemFromApi);
            return candyItemFromApi;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
};
CandyApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"] }
];
CandyApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
], CandyApiService);

// TO DO (search candy in list by name)
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


/***/ }),

/***/ "./src/app/play/trick-or-treat/trick-or-treat.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/play/trick-or-treat/trick-or-treat.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('bg_spiders-1920.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: 12% auto; }\n\n.special-bg .main-container h1 {\n      color: #dfddd5;\n      font-size: 2.5rem;\n      line-height: 0.8; }\n\n.special-bg .main-container h1 span {\n        font-size: 3.5rem; }\n\n.special-bg .main-container img {\n      width: 12rem; }\n\n.special-bg .main-container .upper-row,\n    .special-bg .main-container .bottom-row {\n      height: 5rem; }\n\n.special-bg .main-container .upper-row img,\n      .special-bg .main-container .bottom-row img {\n        width: 5rem; }\n\n.special-bg .main-container .upper-row {\n      align-content: flex-end; }\n\n.special-bg .main-container .bottom-row {\n      align-content: flex-start; }\n\n.special-bg .main-container .flexRowCentered {\n      padding: 8% 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvdHJpY2stb3ItdHJlYXQvdHJpY2stb3ItdHJlYXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC9wbGF5L3RyaWNrLW9yLXRyZWF0L3RyaWNrLW9yLXRyZWF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUE7O2tDQ0RrQyxFREdDOztBQW1EakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NuRDhDOztBQ2Q5Qzs7Ozs7O0VBTUksU0FBUyxFQUFBOztBQUdiO0VBQ0ksNENBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFIL0I7SUFPUSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQVR4QjtNQVlZLGNGYW9CO01FWnBCLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBQTs7QUFkNUI7UUFlbUIsaUJBQWlCLEVBQUE7O0FBZnBDO01BaUJjLFlBQVksRUFBQTs7QUFqQjFCOztNQXFCWSxZQUFZLEVBQUE7O0FBckJ4Qjs7UUF1QmdCLFdBQVcsRUFBQTs7QUF2QjNCO01BMkJZLHVCQUF1QixFQUFBOztBQTNCbkM7TUE4QlkseUJBQXlCLEVBQUE7O0FBOUJyQztNQWdDMkIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS90cmljay1vci10cmVhdC90cmljay1vci10cmVhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgJGxpZ2h0cHVycGxlLWJnOiByZ2JhKDE5OSwgMywgMTk5LCAwLjM0Mik7XG4gIFxuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogcmdiKDIyMywgMjIxLCAyMTMpO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5zcGVjaWFsLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2JnX3NwaWRlcnMtMTkyMC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luOiAxMiUgYXV0bzsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciBoMSB7XG4gICAgICBjb2xvcjogI2RmZGRkNTtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIGgxIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciBpbWcge1xuICAgICAgd2lkdGg6IDEycmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3csXG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IHtcbiAgICAgIGhlaWdodDogNXJlbTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cgaW1nLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGltZyB7XG4gICAgICAgIHdpZHRoOiA1cmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLmJvdHRvbS1yb3cge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAuZmxleFJvd0NlbnRlcmVkIHtcbiAgICAgIHBhZGRpbmc6IDglIDAlOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zcGVjaWFsLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvYmdfc3BpZGVycy0xOTIwLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG5cbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogMTIlIGF1dG87XG4gICAgICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogJHN1Yi1saWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICAgICAgICAgIHNwYW4geyBmb250LXNpemU6IDMuNXJlbTsgfVxuICAgICAgICB9XG4gICAgICAgIGltZyB7IHdpZHRoOiAxMnJlbTsgfVxuXG4gICAgICAgIC51cHBlci1yb3csXG4gICAgICAgIC5ib3R0b20tcm93IHtcbiAgICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnVwcGVyLXJvdyB7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgICAuYm90dG9tLXJvdyB7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIC5mbGV4Um93Q2VudGVyZWQgeyBwYWRkaW5nOiA4JSAwJTsgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/play/trick-or-treat/trick-or-treat.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/play/trick-or-treat/trick-or-treat.component.ts ***!
  \*****************************************************************/
/*! exports provided: TrickOrTreatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrickOrTreatComponent", function() { return TrickOrTreatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TrickOrTreatComponent = class TrickOrTreatComponent {
    constructor(router) {
        this.router = router;
        this.candyImg = 'assets/graphicMat/candy.png';
        this.treatOrTrickImg = 'assets/graphicMat/trickOrTreat.png';
        this.witchHatImg = 'assets/graphicMat/hat.png';
    }
    ngOnInit() { }
    choseTreat() {
        this.router.navigate(['play/challenges', { choice: 'treat' }]);
    }
    choseTrick() {
        this.router.navigate(['play/challenges', { choice: 'trick' }]);
    }
};
TrickOrTreatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TrickOrTreatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trick-or-treat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trick-or-treat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/trick-or-treat/trick-or-treat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trick-or-treat.component.scss */ "./src/app/play/trick-or-treat/trick-or-treat.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TrickOrTreatComponent);



/***/ }),

/***/ "./src/app/play/user-stats/user-stats.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/play/user-stats/user-stats.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.stats-container {\n  width: 80%;\n  height: 80%;\n  margin: 10% auto;\n  background-size: cover;\n  background-position: center; }\n\n.stats-container img:first-child {\n    z-index: -1;\n    position: absolute;\n    opacity: 0.7; }\n\n.stats-container h1,\n  .stats-container h2 {\n    font-family: flyingleather; }\n\n.stats-container h1 {\n    color: #dfddd5;\n    font-size: 1.5rem; }\n\n.stats-container h2 {\n    color: #ffa500;\n    font-size: 1.8rem; }\n\n.stats-container .item,\n  .stats-container .item-level {\n    align-items: unset;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n\n.stats-container .item {\n    border: 3px solid #6178F5;\n    border-radius: 50px;\n    background-color: rgba(199, 3, 199, 0.342);\n    padding: 1% 3%;\n    margin: 5%; }\n\n.stats-container .item-level {\n    text-align: center;\n    border-bottom: 3px solid orange;\n    line-height: 0.1em;\n    margin: 10px 0 20px; }\n\n.bottom-cards-container {\n  width: 100%;\n  bottom: 2%;\n  position: absolute;\n  margin: auto;\n  text-align: center; }\n\n.bottom-cards-container .cardsList {\n    justify-content: space-evenly; }\n\n.bottom-cards-container .cardsList .card-container {\n      height: 10rem;\n      justify-content: flex-end; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext {\n        width: 5rem;\n        margin-bottom: 15%;\n        height: 5rem;\n        background-color: rgba(199, 3, 199, 0.342);\n        border: 2px solid #ff000096;\n        border-radius: 5px; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext h2 {\n          padding: 3%;\n          font-size: 0.8rem;\n          text-align: center;\n          color: #dfddd5; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext h2 span {\n            font-size: 1rem;\n            color: #ff9e29; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container {\n        width: 4rem; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container img {\n          width: 85%; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container .opacity {\n          opacity: 1; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container .noOpacity {\n          opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvdXNlci1zdGF0cy91c2VyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBbURqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ25EOEM7O0FDZjlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxVQUFVO0VBQ1YsV0FBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBTC9CO0lBT1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBVHBCOztJQWFRLDBCRnFDdUIsRUFBQTs7QUVsRC9CO0lBZ0JRLGNGV3dCO0lFVnhCLGlCRm9CZSxFQUFBOztBRXJDdkI7SUFvQlEsY0ZkZTtJRWVmLGlCRmlCYyxFQUFBOztBRXRDdEI7O0lBeUJRLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBOztBQTVCdEM7SUErQlEseUJGWmM7SUVhZCxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxVQUFVLEVBQUE7O0FBbkNsQjtJQXNDUSxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFVO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBTHRCO0lBU1EsNkJBQTZCLEVBQUE7O0FBVHJDO01BV1ksYUFBYTtNQUNiLHlCQUF5QixFQUFBOztBQVpyQztRQWVnQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWiwwQ0FBMEM7UUFDMUMsMkJGL0NLO1FFZ0RMLGtCQUFrQixFQUFBOztBQXBCbEM7VUFzQm9CLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLGNGMUNZLEVBQUE7O0FFaUJoQztZQTJCd0IsZUFBZTtZQUNmLGNGakVGLEVBQUE7O0FFcUN0QjtRQWlDZ0IsV0FBVyxFQUFBOztBQWpDM0I7VUFtQ29CLFVBQVUsRUFBQTs7QUFuQzlCO1VBc0NvQixVQUFVLEVBQUE7O0FBdEM5QjtVQXlDb0IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gICRsaWdodHB1cnBsZS1iZzogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6IHJnYigyMjMsIDIyMSwgMjEzKTtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uc3RhdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc3RhdHMtY29udGFpbmVyIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgei1pbmRleDogLTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDAuNzsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgxLFxuICAuc3RhdHMtY29udGFpbmVyIGgyIHtcbiAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgxIHtcbiAgICBjb2xvcjogI2RmZGRkNTtcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgyIHtcbiAgICBjb2xvcjogI2ZmYTUwMDtcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfVxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtLFxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtLWxldmVsIHtcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNjE3OEY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICAgIHBhZGRpbmc6IDElIDMlO1xuICAgIG1hcmdpbjogNSU7IH1cbiAgLnN0YXRzLWNvbnRhaW5lciAuaXRlbS1sZXZlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7IH1cblxuLmJvdHRvbS1jYXJkcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTByZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gICAgICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IC5jYXJkLWNvbnRhaW5lciAuYnViYmxlTmV4dCB7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDMsIDE5OSwgMC4zNDIpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmYwMDAwOTY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgICAgICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IC5jYXJkLWNvbnRhaW5lciAuYnViYmxlTmV4dCBoMiB7XG4gICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjZGZkZGQ1OyB9XG4gICAgICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmJ1YmJsZU5leHQgaDIgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogI2ZmOWUyOTsgfVxuICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmNhcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA0cmVtOyB9XG4gICAgICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIC5jYXJkLWltZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogODUlOyB9XG4gICAgICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIC5jYXJkLWltZy1jb250YWluZXIgLm9wYWNpdHkge1xuICAgICAgICAgIG9wYWNpdHk6IDE7IH1cbiAgICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmNhcmQtaW1nLWNvbnRhaW5lciAubm9PcGFjaXR5IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG4uc3RhdHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDo4MCU7XG4gICAgbWFyZ2luOiAxMCUgYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBpbWc6Zmlyc3QtY2hpbGQge1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICAgIGgxLFxuICAgIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmbHlpbmdsZWF0aGVyO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAkc3ViLWxpZ2h0O1xuICAgICAgICBmb250LXNpemU6ICR4eHMtZm9udFNpemU7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgZm9udC1zaXplOiAkeHMtZm9udFNpemU7XG4gICAgfVxuICAgIC5pdGVtLFxuICAgIC5pdGVtLWxldmVsIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC5pdGVtIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJHN1Yi1wdXJwbGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAzLCAxOTksIDAuMzQyKTtcbiAgICAgICAgcGFkZGluZzogMSUgMyU7XG4gICAgICAgIG1hcmdpbjogNSU7XG4gICAgfVxuICAgIC5pdGVtLWxldmVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgb3JhbmdlO1xuICAgICAgICBsaW5lLWhlaWdodDogMC4xZW07XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XG4gICAgfVxufVxuLmJvdHRvbS1jYXJkcy1jb250YWluZXIge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm90dG9tOiAyJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgLy8gaGVpZ2h0OiAyMHZoO1xuICAgIC5jYXJkc0xpc3Qge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICAgIC5idWJibGVOZXh0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAzLCAxOTksIDAuMzQyKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc3ViLXJlZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiRzdWItb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm9wYWNpdHkge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubm9PcGFjaXR5IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/play/user-stats/user-stats.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/play/user-stats/user-stats.component.ts ***!
  \*********************************************************/
/*! exports provided: UserStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatsComponent", function() { return UserStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");
/* harmony import */ var _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/keyvalue/keyvalue */ "./src/app/shared/pipes/keyvalue/keyvalue.ts");





let UserStatsComponent = class UserStatsComponent {
    constructor(userStatsService, keyvaluepipe, router) {
        this.userStatsService = userStatsService;
        this.keyvaluepipe = keyvaluepipe;
        this.router = router;
        this.currentLevel = { idLevel: 0, levelName: '', levelImg: '', levelCard: '', isActive: false, isNext: false };
        this.levels = this.userStatsService.retrieveLevelList();
        this.completedChallengesCount = 0;
        this.completedChallengesTest = [];
    }
    ngOnInit() {
        this.setStats();
    }
    setStats() {
        // totalPoints
        this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);
        console.log('totalPoints------', this.totalPoints);
        // totalCandy
        this.userStatsService.getCurrentBackpackCount().subscribe(data => this.candyCount = data);
        console.log('candy count------', this.candyCount);
        // level
        this.userStatsService.getCurrentLevel().subscribe(data => {
            this.currentLevel.idLevel = data.idLevel,
                this.currentLevel.levelName = data.levelName,
                this.currentLevel.levelImg = data.levelImg;
            this.currentLevel.levelCard = data.levelCard;
            this.currentLevel.isActive = data.isActive;
            this.currentLevel.isNext = data.isNext;
        });
        console.log('currentlevel levelcard-----', this.currentLevel.levelCard);
        // bottom cards
        console.log('levels---', this.levels);
        for (let i = 0; i < this.levels.length; i++) {
            if (this.levels[i].idLevel === this.currentLevel.idLevel) {
                this.levels[i].isActive = true;
                this.levels[i + 1].isNext = true;
            }
        }
        // current done challenges count
        this.userStatsService.getCompletedChallengesCount().subscribe(data => this.completedChallengesTest = data);
        console.log('RESULT OF ZIP==', this.completedChallengesTest);
        this.completedChallengesTest.map(item => {
            console.log(item.length);
            return this.completedChallengesCount += item.length;
        });
        // current saved addresses count
        this.userStatsService.getCurrentAddressesList().subscribe(data => this.savedAddresses = data);
        this.savedAddressesCount = this.savedAddresses.length;
    }
    goToAddresses() {
        this.router.navigate(['play/addresses']);
    }
    goToChallenges() {
        this.router.navigate(['play/challenges-list']);
    }
};
UserStatsComponent.ctorParameters = () => [
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"] },
    { type: _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_4__["KeyvaluePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/user-stats/user-stats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-stats.component.scss */ "./src/app/play/user-stats/user-stats.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["UserStatsService"],
        _shared_pipes_keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_4__["KeyvaluePipe"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserStatsComponent);



/***/ }),

/***/ "./src/app/shared/models/candy.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/candy.model.ts ***!
  \**********************************************/
/*! exports provided: Candy, CandyChecklist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Candy", function() { return Candy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandyChecklist", function() { return CandyChecklist; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* tslint:disable */
class Candy {
    constructor(fields) {
        this._id = '';
        this.product_name = 'no_name';
        this.generic_name_fr = 'no_img_url';
        this.image_front_url = 'no_url';
        this.amountInBackpack = 0;
        this.brands_tags = [];
        this.ingredients_tags = [];
        this.ingredients_text_fr = '';
        this.nutriscore_data = {};
        this.additives_tags = [];
        this.allergens_hierarchy = [];
        this.labels = '';
        this.labels_hierarchy = [];
        this.candyChecklist = CandyChecklist;
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
class CandyChecklist {
    constructor() {
        this.additives = false;
        this.preservatives = false;
        this.organic = false;
        this.glutenFree = false;
        this.vegan = false;
        this.vegetarian = false;
    }
}


/***/ }),

/***/ "./src/app/shared/models/challenges.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/challenges.model.ts ***!
  \***************************************************/
/*! exports provided: TrickAndTreat, Trick, Treat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrickAndTreat", function() { return TrickAndTreat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trick", function() { return Trick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Treat", function() { return Treat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TrickAndTreat {
    constructor() {
        this.challengeId = 0;
        this.challengeType = '';
        this.challengeDescription = '';
        this.bonusPoints = 0;
        this.hasBeenTriggered = false;
        this.hasBeenCompleted = false;
    }
}
class Trick {
    constructor() {
        this.trickId = 0;
        this.trickDescription = '';
        this.bonusPoints = 0;
        this.hasBeenTriggered = false;
        this.hasBeenCompleted = false;
    }
}
class Treat {
    constructor() {
        this.treatId = 0;
        this.treatDescription = '';
        this.bonusPoints = 0;
        this.hasBeenTriggered = false;
        this.hasBeenCompleted = false;
    }
}


/***/ }),

/***/ "./src/app/shared/pipes/keys/keys.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/keys/keys.ts ***!
  \*******************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KeysPipe = class KeysPipe {
    // Takes a value and makes it lowercase
    transform(value, ...args) {
        return value.toLowerCase();
    }
};
KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'keys',
    })
], KeysPipe);



/***/ }),

/***/ "./src/app/shared/pipes/keyvalue/keyvalue.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/keyvalue/keyvalue.ts ***!
  \***************************************************/
/*! exports provided: KeyvaluePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyvaluePipe", function() { return KeyvaluePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KeyvaluePipe = class KeyvaluePipe {
    transform(object) {
        const a = [];
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                a.push({ key, value: object[key] });
            }
        }
        // console.log('je suis keyvalue pipe object: ', a);
        return a;
    }
};
KeyvaluePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'keyvalue',
        pure: true
        // https://www.bennadel.com/blog/3325-understanding-pipe-instantiation-life-cycles-in-angular-4-2-3.htm
    })
], KeyvaluePipe);



/***/ }),

/***/ "./src/app/shared/pipes/pipes.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _keys_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys/keys */ "./src/app/shared/pipes/keys/keys.ts");
/* harmony import */ var _keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyvalue/keyvalue */ "./src/app/shared/pipes/keyvalue/keyvalue.ts");
/* harmony import */ var _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove-underscore/remove-underscore */ "./src/app/shared/pipes/remove-underscore/remove-underscore.ts");
/* harmony import */ var _shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shorten-string/shorten-string */ "./src/app/shared/pipes/shorten-string/shorten-string.ts");
/* harmony import */ var _remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remove-chars/remove-chars */ "./src/app/shared/pipes/remove-chars/remove-chars.ts");







let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _keys_keys__WEBPACK_IMPORTED_MODULE_2__["KeysPipe"],
            _keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"],
            _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__["RemoveUnderscorePipe"],
            _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__["RemoveUnderscorePipe"],
            _shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_5__["ShortenStringPipe"],
            _remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__["RemoveCharsPipe"]
        ],
        imports: [],
        exports: [_keys_keys__WEBPACK_IMPORTED_MODULE_2__["KeysPipe"],
            _keyvalue_keyvalue__WEBPACK_IMPORTED_MODULE_3__["KeyvaluePipe"],
            _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__["RemoveUnderscorePipe"],
            _remove_underscore_remove_underscore__WEBPACK_IMPORTED_MODULE_4__["RemoveUnderscorePipe"],
            _shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_5__["ShortenStringPipe"],
            _remove_chars_remove_chars__WEBPACK_IMPORTED_MODULE_6__["RemoveCharsPipe"]]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/shared/pipes/remove-chars/remove-chars.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/remove-chars/remove-chars.ts ***!
  \***********************************************************/
/*! exports provided: RemoveCharsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCharsPipe", function() { return RemoveCharsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RemoveCharsPipe = class RemoveCharsPipe {
    transform(value) {
        if (value.charAt(2) === ':') {
            return value.substring(3, value.length);
            // or return value.slice(3, value.length);
        }
        return value;
    }
};
RemoveCharsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'removeChars',
    })
], RemoveCharsPipe);



/***/ }),

/***/ "./src/app/shared/pipes/remove-underscore/remove-underscore.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/pipes/remove-underscore/remove-underscore.ts ***!
  \*********************************************************************/
/*! exports provided: RemoveUnderscorePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveUnderscorePipe", function() { return RemoveUnderscorePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RemoveUnderscorePipe = class RemoveUnderscorePipe {
    transform(value) {
        const toReplace = /[-_]/gm;
        if (value) {
            return value = value.toString().replace(toReplace, ' ');
        }
    }
};
RemoveUnderscorePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'removeUnderscore',
        pure: true
    })
], RemoveUnderscorePipe);



/***/ }),

/***/ "./src/app/shared/pipes/shorten-string/shorten-string.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/pipes/shorten-string/shorten-string.ts ***!
  \***************************************************************/
/*! exports provided: ShortenStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenStringPipe", function() { return ShortenStringPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShortenStringPipe = class ShortenStringPipe {
    transform(value, maxChars) {
        let lastEmptyIndex = null;
        if (value.length > maxChars) {
            if (value.charAt(maxChars - 1) !== ' ') {
                for (let i = maxChars - 1; i >= 0; i--) {
                    if (value[i] === ' ') {
                        lastEmptyIndex = i;
                        break;
                    }
                    else {
                        lastEmptyIndex = lastEmptyIndex;
                    }
                }
            }
            else {
                lastEmptyIndex = value[maxChars];
            }
            return value.substring(0, lastEmptyIndex);
        }
        else {
            return value;
        }
    }
};
ShortenStringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'shortenString',
    })
], ShortenStringPipe);



/***/ }),

/***/ "./src/app/shared/services/local-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalStorageService = class LocalStorageService {
    constructor() {
        this.storageName = 'candyList';
    }
    setDataToStore(data) {
        localStorage.setItem(this.storageName, JSON.stringify(data));
    }
    getStoredData() {
        const storedData = localStorage.getItem(this.storageName);
        console.log('JSON.parse(storedData)==', JSON.parse(storedData));
        return JSON.parse(storedData);
    }
    clearStoredData() {
        localStorage.removeItem(this.storageName);
    }
    cleanAll() {
        localStorage.clear();
    }
};
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LocalStorageService);



/***/ })

}]);
//# sourceMappingURL=play-play-module-es2015.js.map