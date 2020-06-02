(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-play-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center>Your addresses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"addressesPage-container\">\n\n  <div class=\"map-sample\">\n    <img src=\"assets/graphicMat/map_sample.png\" alt=\"\" />\n  </div>\n\n  <div class=\"address-list-container\">\n    <h5></h5>\n    <div class=\"address-item\">\n      <h6></h6>\n    </div>\n    <img src=\"assets/graphicMat/haunted_house.png\" alt=\"\" />\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/backpack/backpack.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/backpack/backpack.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Backpack</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"backpack-elements-container flexColCentered\" *ngIf=\"collectedCandy\">\n    <div class=\"bag-illust circlesImgBg\">\n      <img src=\"assets/graphicMat/candyBag.png\" alt=\"\" />\n\n      <div class=\"total flexColCentered\">\n        <h2>Total candy : {{ totalCandy }}</h2>\n        <h2>Total points : {{ totalCandy }}</h2>\n      </div>\n    </div>\n\n    <!-- <div class=\"cornCandy-container\">\n      <ng-container *ngFor=\"let i of [].constructor(8)\">\n        <img src=\"assets/graphicMat/corn_candy.png\" alt=\"\" />\n      </ng-container>\n    </div> -->\n\n    <!-- TO DO ? : get level (banner) at init --\n      <div class=\"current-level\">\n          <h2>Current level</h2>\n          <h2>{{levelName}}</h2>\n      </div> -->\n    <div *ngIf=\"collectedCandy;else noCandyYetBlock\">\n      <div class=\"myCollectedCandy\" *ngFor=\"let item of collectedCandy\">\n        <div class=\"candyItem\">\n          <div class=\"candyThumbnail\">\n            <img src=\"{{item.image_front_url}}\">\n          </div>\n          <div class=\"candyName\">\n            <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n            <h1>{{ item.product_name | shortenString:30 }}</h1>\n            <button (click)=\"seeCandyInfos(item._id)\">see infos</button>\n          </div>\n          <div class=\"amount\">\n            <h1>{{ item.amountInBackpack }}</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ng-template #noCandyYetBlock>\n      <h1>No candy yet !</h1>\n    </ng-template>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-details/candy-details.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-details/candy-details.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Candy Infos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"candyDetailsPage\" *ngIf=\"candyItem\">\n\n    <div class=\"candyItemTitle flexRowCentered\">\n      <div class=\"candyThumbnail\">\n        <img src=\"{{ candyItem.image_front_url }}\">\n      </div>\n      <div>\n        <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n      </div>\n    </div>\n\n    <ion-row class=\"candy-checklist\">\n      <ion-col>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"organic;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Organic\n        </ion-row>\n\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"additives;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Additives\n        </ion-row>\n      </ion-col>\n\n      <ion-col>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"glutenFree;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Gluten free\n        </ion-row>\n\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"vegan;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegan\n        </ion-row>\n        <ion-row class=\"checklistType\">\n          <div *ngIf=\"vegetarian;else elseblock\"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegetarian\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"rubriks\">\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleIngredients()\">\n          <h1>Ingredients hierarchy</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div class=\"candyIngredients\" *ngIf=\"showIngredients\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.ingredients_tags\">\n              <td>\n                {{ i | removeChars | removeUnderscore }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleNutriscore()\">\n          <h1>Nutriscore</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div class=\"candyNutriscore\" *ngIf=\"showNutriscore\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.nutriscore_data | keyvalue\">\n              <td>\n                {{ i.key | removeUnderscore }}\n              </td>\n              <td>\n                {{ i.value }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"rubrik\">\n        <div class=\"rubrik-title flexRowCentered\" (click)=\"toggleAllergens()\">\n          <h1>Allergens</h1>\n          <img src=\"assets/icon/icon_arrowDown.png\" />\n        </div>\n        <div class=\"candyAllergens\" *ngIf=\"showAllergens\">\n          <table>\n            <tr *ngFor=\"let i of candyItem.allergens_hierarchy\">\n              <td>\n                {{ i | removeChars }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">Candy to find</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"candyPageContainer\">\n  <div class=\"add-label flexRowCentered \">\n    <ion-searchbar animated class=\"custom-searchbar\"></ion-searchbar>\n    <img src=\"assets/graphicMat/bubble_add2.png\" alt=\"\" />\n  </div>\n  <!-- TODO:  create reusable loading block (shared module) + 'else block' -->\n  <div *ngIf=\"loading\" class=\"loading\">loading...</div> \n\n  <div *ngFor=\"let candyItem of candyList\" class=\"candyList\">\n    <div class=\"candyItem\">\n      <div class=\"candyThumbnail\">\n        <img src=\"{{candyItem.image_front_url}}\">\n      </div>\n      <div class=\"candyName\">\n        <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n        <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n      </div>\n      <div class=\"plus-btn\">\n        <!-- <button (click)=\"sendId(candyItem._id)\"> -->\n        <button (click)=\"addCandyToBackpack(candyItem)\">\n          <img src=\"assets/graphicMat/zoomIn.png\" alt=\"plus-button\"/>\n        </button>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <!--  <ion-title text-center class=\"toolbarTitle\">Trick or treat</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"special-bg\">\n\n  <div class=\"main-container\">\n\n    <div class=\"upper-row\">\n      <h1>You Chose<br><span>trick !</span></h1>\n    </div>\n  \n    <div class=\"main-row\">\n      <h1>Your challenge:</h1>\n      <p>\n        Next house you will visit,\n        tell the hosts a horror story involving a <span>werewolf</span> !\n      </p>\n    </div>\n  \n    <div class=\"bottom-row\">\n      <img src=\"{{ candleSkullImg }}\" alt=\"candle-skull\" />\n    </div>\n\n  </div>\n\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"customColor\">\n    <ion-title text-center class=\"toolbarTitle\">My stats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor=\"let stat of userStats\" class=\"stats-container\" style=\"background-image: '{{ currentLevel.levelImg }}'\">\n\n    <div class=\"item-level\">\n      <h1>Current Level</h1>\n      <h2>{{ stat.currentLevel }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Total Points</h1>\n      <h2>{{ stat.totalPoints }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Total Candy</h1>\n      <h2>{{ stat.totalCandy }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Saved Addresses</h1>\n      <h2>{{ stat.savedAddresses }}</h2>\n    </div>\n\n    <div class=\"item\">\n      <h1>Challenges</h1>\n      <h2>{{ stat.challenges }}</h2>\n    </div>\n  </div>\n\n\n  <div class=\"bottom-cards-container\">\n    <div class=\"cardsList flexRowCentered\">\n      <div *ngFor=\"let card of cards\">\n        <div class=\"card-container flexColCentered\">\n          <div *ngIf=\"cardIsNext\" class=\"bubbleNext\">\n            <h2>Next mission:<br>Get the <span>{{ nextLevel.levelCardName }} !</span></h2>\n          </div>\n          <div class=\"card-img-container container-fluid\">\n            <img src=\"{{ card }}\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/play/addresses/addresses.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/play/addresses/addresses.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addressesPage-container .map-sample {\n  height: 5vh; }\n\n.addressesPage-container .address-list-container {\n  height: 15vh;\n  background-color: #22222b;\n  color: #b2caf8; }\n\n.addressesPage-container .address-list-container .address-item {\n    background-color: #b2caf8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFdBQVcsRUFBQTs7QUFGbkI7RUFLUSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFQdEI7SUFTWSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvYWRkcmVzc2VzL2FkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzZXNQYWdlLWNvbnRhaW5lciB7XG4gICAgLm1hcC1zYW1wbGUge1xuICAgICAgICBoZWlnaHQ6IDV2aDtcbiAgICB9XG4gICAgLmFkZHJlc3MtbGlzdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMmI7XG4gICAgICAgIGNvbG9yOiAjYjJjYWY4O1xuICAgICAgICAuYWRkcmVzcy1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmNhZjg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

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


let AddressesComponent = class AddressesComponent {
    constructor() { }
    ngOnInit() { }
};
AddressesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addresses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addresses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/addresses/addresses.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addresses.component.scss */ "./src/app/play/addresses/addresses.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.backpack-elements-container {\n  margin: 5% 10%; }\n\n.backpack-elements-container .bag-illust {\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap; }\n\n.backpack-elements-container .bag-illust img {\n      width: 40%; }\n\n.backpack-elements-container .total {\n    align-items: flex-start; }\n\n.backpack-elements-container .total h2 {\n      text-align: center;\n      text-transform: uppercase;\n      font-size: 1rem;\n      font-family: TitanOne; }\n\n.backpack-elements-container .total h2:first-child {\n      color: #ffa500; }\n\n.backpack-elements-container .total h2:nth-child(2) {\n      color: #ffc0cb; }\n\n.backpack-elements-container .myCollectedCandy {\n    width: 100%; }\n\n.backpack-elements-container .myCollectedCandy .candyItem {\n      padding: 3%;\n      margin: 3%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      border: 2px solid #b1c9fb;\n      border-radius: 50px; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyThumbnail {\n        height: 3rem;\n        width: 3rem;\n        min-width: 3rem;\n        background-color: pink;\n        align-content: center;\n        align-items: center;\n        overflow: hidden;\n        border-radius: 50%; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName {\n        max-width: 60%;\n        text-align: center;\n        display: flex;\n        flex-direction: column; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName h1 {\n          font-family: TitanOne;\n          color: #b1c9fb;\n          font-size: 0.7rem;\n          text-transform: uppercase;\n          transform: scale(1, 1.2);\n          -webkit-transform: scale(1, 1.2);\n          /* Safari and Chrome */\n          -moz-transform: scale(1, 1.2);\n          /* Firefox */\n          -ms-transform: scale(1, 1.2);\n          /* IE 9+ */\n          -o-transform: scale(1, 1.2);\n          /* Opera */ }\n\n.backpack-elements-container .myCollectedCandy .candyItem .candyName button {\n          color: #ffa500;\n          border: 1px solid #ffa500;\n          font-family: TitanOne;\n          background-color: transparent; }\n\n.backpack-elements-container .myCollectedCandy .candyItem .amount > h1 {\n        width: 50px;\n        height: 1.5rem;\n        font-family: TitanOne;\n        color: #fbb1f1;\n        font-size: 1rem;\n        text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvYmFja3BhY2svYmFja3BhY2suY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC9wbGF5L2JhY2twYWNrL2JhY2twYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUE7O2tDQ0ZrQyxFRElDOztBQW9EakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NyRDhDOztBQ2Y5QztFQUVJLGNBQWMsRUFBQTs7QUFGbEI7SUFLUSxXQUFXO0lBRVgsYUFBYTtJQUNiLHFCQUFxQixFQUFBOztBQVI3QjtNQVVZLFVBQVUsRUFBQTs7QUFWdEI7SUFjUSx1QkFBdUIsRUFBQTs7QUFkL0I7TUFnQlksa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YscUJGOENTLEVBQUE7O0FFakVyQjtNQXNCWSxjRkpXLEVBQUE7O0FFbEJ2QjtNQXlCWSxjRkRTLEVBQUE7O0FFeEJyQjtJQThCUSxXQUFXLEVBQUE7O0FBOUJuQjtNQWlDWSxXQUFXO01BQ1gsVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsbUJBQW1CLEVBQUE7O0FBeEMvQjtRQTJDZ0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBOztBQWxEbEM7UUFxRGdCLGNBQWM7UUFFZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHNCQUFzQixFQUFBOztBQXpEdEM7VUEyRG9CLHFCRk1DO1VFTEQsY0Z0Q0M7VUV1Q0QsaUJBQWlCO1VBQ2pCLHlCQUF5QjtVQUN6Qix3QkFBd0I7VUFDeEIsZ0NBQWdDO1VBQUUsc0JBQUE7VUFDbEMsNkJBQTZCO1VBQUUsWUFBQTtVQUMvQiw0QkFBNEI7VUFBRSxVQUFBO1VBQzlCLDJCQUEyQjtVQUFFLFVBQUEsRUFBVzs7QUFuRTVEO1VBc0VvQixjRnBERztVRXFESCx5QkZyREc7VUVzREgscUJGUEM7VUVRRCw2QkFBNkIsRUFBQTs7QUF6RWpEO1FBNkVnQixXQUFXO1FBQ1gsY0FBYztRQUNkLHFCRmRLO1FFZUwsY0Z2REs7UUV3REwsZUFBZTtRQUNmLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS9iYWNrcGFjay9iYWNrcGFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cblxuXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogI0ZGRkRFRjtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbi5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIge1xuICBtYXJnaW46IDUlIDEwJTsgfVxuICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC5iYWctaWxsdXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDsgfVxuICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLmJhZy1pbGx1c3QgaW1nIHtcbiAgICAgIHdpZHRoOiA0MCU7IH1cbiAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwgaDIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTsgfVxuICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLnRvdGFsIGgyOmZpcnN0LWNoaWxkIHtcbiAgICAgIGNvbG9yOiAjZmZhNTAwOyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAudG90YWwgaDI6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGNvbG9yOiAjZmZjMGNiOyB9XG4gIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIHtcbiAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgbWFyZ2luOiAzJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMWM5ZmI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XG4gICAgICAuYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIC5teUNvbGxlY3RlZENhbmR5IC5jYW5keUl0ZW0gLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAgICAgLmJhY2twYWNrLWVsZW1lbnRzLWNvbnRhaW5lciAubXlDb2xsZWN0ZWRDYW5keSAuY2FuZHlJdGVtIC5jYW5keU5hbWUge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgICAgY29sb3I6ICNiMWM5ZmI7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBGaXJlZm94ICovXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBJRSA5KyAqL1xuICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAvKiBPcGVyYSAqLyB9XG4gICAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmE1MDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYTUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgICAgIC5iYWNrcGFjay1lbGVtZW50cy1jb250YWluZXIgLm15Q29sbGVjdGVkQ2FuZHkgLmNhbmR5SXRlbSAuYW1vdW50ID4gaDEge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgICAgY29sb3I6ICNmYmIxZjE7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYmFja3BhY2stZWxlbWVudHMtY29udGFpbmVyIHtcblxuICAgIG1hcmdpbjogNSUgMTAlO1xuXG4gICAgLmJhZy1pbGx1c3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gcG9zaXRpb246IHN0aWNreTsgPT4gbm90IHdvcmtpbmcgOiB0byBjaGVja1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC50b3RhbCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgfVxuICAgICAgICBoMjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICB9XG4gICAgICAgIGgyOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBjb2xvcjogJG1haW4tcGluaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5teUNvbGxlY3RlZENhbmR5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmNhbmR5SXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgIG1hcmdpbjogMyU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYjFjOWZiO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAgICAgICAgICAgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FuZHlOYW1lIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRtYWluLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogRmlyZWZveCAqL1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBJRSA5KyAqL1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIE9wZXJhICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtYWluLW9yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFtb3VudCA+IGgxIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkc3ViLXBpbms7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

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
        this.totalCandy = 0;
    }
    ngOnInit() {
        // retrieve all candy items
        this.setBackpack();
    }
    setBackpack() {
        this.userStatsService.getCurrentBackpackContent().subscribe(data => this.collectedCandy = data);
        console.log('COLLECTED CANDY RETRIEVED ON INIT: ', this.collectedCandy);
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
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.candyDetailsPage {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 5% auto; }\n\n.candyDetailsPage .candyItemTitle {\n    width: 100%;\n    padding: 2%;\n    margin: 10% auto;\n    justify-content: unset;\n    border: 3px solid #ffa500;\n    border-radius: 50px; }\n\n.candyDetailsPage .candyItemTitle .candyThumbnail {\n      height: 3rem;\n      width: 3rem;\n      background-color: #ffc0cb;\n      align-content: center;\n      align-items: center;\n      overflow: hidden;\n      border-radius: 50%;\n      margin-right: 3%; }\n\n.candyDetailsPage .candyItemTitle h1 {\n      font-size: 1rem;\n      font-family: TitanOne;\n      color: #b1c9fb;\n      text-transform: uppercase; }\n\n.candyDetailsPage .candy-checklist {\n    border: 5px solid #ffc0cb;\n    border-radius: 15px; }\n\n.candyDetailsPage .candy-checklist .checklistType {\n      padding: 5%;\n      font-size: 0.8rem;\n      font-family: TitanOne;\n      color: #ffa500;\n      padding: 3% 0%; }\n\n.candyDetailsPage .candy-checklist .checklistType img {\n        max-width: 25px;\n        padding: 3%; }\n\n.candyDetailsPage .rubriks {\n    margin: 3% auto;\n    width: 100%; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title {\n      justify-content: space-between;\n      border-bottom: 3px solid #b1c9fb; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 {\n        font-size: 1rem;\n        color: #b1c9fb;\n        text-align: center;\n        line-height: 3;\n        font-family: TitanOne;\n        text-transform: uppercase; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 .selected {\n          font-size: 7vw; }\n\n.candyDetailsPage .rubriks .rubrik .rubrik-title h1 img {\n          width: 25px;\n          height: 25px; }\n\n.candyDetailsPage .candyIngredients table,\n  .candyDetailsPage .candyNutriscore table,\n  .candyDetailsPage .candyAllergens table {\n    margin: auto;\n    width: 100%; }\n\n.candyDetailsPage .candyIngredients table,\n  .candyDetailsPage .candyIngredients td,\n  .candyDetailsPage .candyIngredients tr,\n  .candyDetailsPage .candyNutriscore table,\n  .candyDetailsPage .candyNutriscore td,\n  .candyDetailsPage .candyNutriscore tr,\n  .candyDetailsPage .candyAllergens table,\n  .candyDetailsPage .candyAllergens td,\n  .candyDetailsPage .candyAllergens tr {\n    margin-top: 5%;\n    padding: 2%;\n    border: 2px solid #b1c9fb;\n    font-size: 1rem;\n    color: #ffa500;\n    font-family: TitanOne; }\n\n.plus-btn > button {\n  width: 50px;\n  height: 50px;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2FuZHktZGV0YWlscy9jYW5keS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jYW5keS1kZXRhaWxzL2NhbmR5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEM7O0FDZjlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBSm5CO0lBUVEsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCRkZlO0lFR2YsbUJBQW1CLEVBQUE7O0FBYjNCO01BZ0JZLFlBQVk7TUFDWixXQUFXO01BQ1gseUJGRlM7TUVHVCxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZ0JBQWdCLEVBQUE7O0FBdkI1QjtNQTBCWSxlQUFlO01BQ2YscUJGOEJTO01FN0JULGNGZFM7TUVlVCx5QkFBeUIsRUFBQTs7QUE3QnJDO0lBaUNRLHlCRmpCYTtJRWtCYixtQkFBbUIsRUFBQTs7QUFsQzNCO01BcUNZLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIscUJGa0JTO01FakJULGNGOUJXO01FK0JYLGNBQWMsRUFBQTs7QUF6QzFCO1FBMkNnQixlQUFlO1FBQ2YsV0FBVyxFQUFBOztBQTVDM0I7SUFrRFEsZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUFuRG5CO01Bc0RnQiw4QkFBOEI7TUFDOUIsZ0NGekNLLEVBQUE7O0FFZHJCO1FBMERvQixlQUFlO1FBQ2YsY0Y3Q0M7UUU4Q0Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxxQkZMQztRRU1ELHlCQUF5QixFQUFBOztBQS9EN0M7VUFpRXdCLGNBQWMsRUFBQTs7QUFqRXRDO1VBb0V3QixXQUFXO1VBQ1gsWUFBWSxFQUFBOztBQXJFcEM7OztJQWdGWSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQWpGdkI7Ozs7Ozs7OztJQXNGWSxjQUFjO0lBQ2QsV0FBVztJQUNYLHlCRjFFUztJRTJFVCxlQUFlO0lBQ2YsY0ZoRlc7SUVpRlgscUJGbENTLEVBQUE7O0FFdUNyQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5L2NhbmR5LWRldGFpbHMvY2FuZHktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cblxuXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogI0ZGRkRFRjtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uY2FuZHlEZXRhaWxzUGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNSUgYXV0bzsgfVxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJdGVtVGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZhNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJdGVtVGl0bGUgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzBjYjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzJTsgfVxuICAgIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUl0ZW1UaXRsZSBoMSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmYzBjYjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XG4gICAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCAuY2hlY2tsaXN0VHlwZSB7XG4gICAgICBwYWRkaW5nOiA1JTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgY29sb3I6ICNmZmE1MDA7XG4gICAgICBwYWRkaW5nOiAzJSAwJTsgfVxuICAgICAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5LWNoZWNrbGlzdCAuY2hlY2tsaXN0VHlwZSBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDMlOyB9XG4gIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIHtcbiAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuY2FuZHlEZXRhaWxzUGFnZSAucnVicmlrcyAucnVicmlrIC5ydWJyaWstdGl0bGUge1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNiMWM5ZmI7IH1cbiAgICAgIC5jYW5keURldGFpbHNQYWdlIC5ydWJyaWtzIC5ydWJyaWsgLnJ1YnJpay10aXRsZSBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6ICNiMWM5ZmI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgICAgICAuY2FuZHlEZXRhaWxzUGFnZSAucnVicmlrcyAucnVicmlrIC5ydWJyaWstdGl0bGUgaDEgLnNlbGVjdGVkIHtcbiAgICAgICAgICBmb250LXNpemU6IDd2dzsgfVxuICAgICAgICAuY2FuZHlEZXRhaWxzUGFnZSAucnVicmlrcyAucnVicmlrIC5ydWJyaWstdGl0bGUgaDEgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7IH1cbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5SW5ncmVkaWVudHMgdGFibGUsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keU51dHJpc2NvcmUgdGFibGUsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUFsbGVyZ2VucyB0YWJsZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUluZ3JlZGllbnRzIHRhYmxlLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlJbmdyZWRpZW50cyB0ZCxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5SW5ncmVkaWVudHMgdHIsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keU51dHJpc2NvcmUgdGFibGUsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keU51dHJpc2NvcmUgdGQsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keU51dHJpc2NvcmUgdHIsXG4gIC5jYW5keURldGFpbHNQYWdlIC5jYW5keUFsbGVyZ2VucyB0YWJsZSxcbiAgLmNhbmR5RGV0YWlsc1BhZ2UgLmNhbmR5QWxsZXJnZW5zIHRkLFxuICAuY2FuZHlEZXRhaWxzUGFnZSAuY2FuZHlBbGxlcmdlbnMgdHIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMWM5ZmI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjZmZhNTAwO1xuICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTsgfVxuXG4ucGx1cy1idG4gPiBidXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuLy8gbmVjZXNzYXJ5IGZvciBsaXN0IGVsZW1lbnRzIHRvIGNvbWUgb3V0IHJpZ2h0XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogMDtcbn1cbi5jYW5keURldGFpbHNQYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDUlIGF1dG87XG5cbiAgICAuY2FuZHlJdGVtVGl0bGUge1xuICAgICAgICAvLyBwb3NpdGlvbjogc3RpY2t5OyA9PiBjaGVjayB3aHkgbm90IHdvcmtpbmdcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBtYXJnaW46IDEwJSBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkbWFpbi1vcmFuZ2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbiAgICAgICAgLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tcGluaztcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYW5keS1jaGVja2xpc3Qge1xuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkbWFpbi1waW5rO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gICAgICAgIC5jaGVja2xpc3RUeXBlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMlIDAlO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJ1YnJpa3Mge1xuXG4gICAgICAgIG1hcmdpbjogMyUgYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5ydWJyaWsge1xuICAgICAgICAgICAgLnJ1YnJpay10aXRsZSB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRhbk9uZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0byBhZGQgb24gcnVicmlrcyA6ICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTsgXG4gICAgLmNhbmR5SW5ncmVkaWVudHMsXG4gICAgLmNhbmR5TnV0cmlzY29yZSxcbiAgICAuY2FuZHlBbGxlcmdlbnMge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSxcbiAgICAgICAgdGQsXG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wbHVzLWJ0biA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








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
        this.candyItem = {
            _id: '', product_name: '', generic_name_fr: '',
            image_front_url: '', brands_tags: [], ingredients_tags: [],
            nutriscore_data: [], additives_tags: [], allergens_hierarchy: [], labels: ''
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
    ngOnInit() {
        this.displayCandyInfo(this.candyId);
    }
    displayCandyInfo(candyId) {
        this.activatedRoute.paramMap.subscribe(param => {
            this.candyId = param.get('id');
        });
        console.log('activated route param= ', this.candyId);
        this.candyApiService.getCandyById(this.candyId)
            .subscribe((response) => {
            this.candyItem = response;
            this.candyItem.product_name = response.product_name;
            this.candyItem.image_front_url = response.image_front_url;
            this.candyItem.ingredients_tags = response.ingredients_tags;
            this.candyItem.nutriscore_data = response.nutriscore_data;
            this.candyItem.allergens_hierarchy = response.allergens_hierarchy;
            this.candyItem.additives_tags = response.additives_tags;
            this.candyItem.labels = response.labels;
            console.log('candy response: ', response);
            for (const x of this.candyItem.allergens_hierarchy) {
                if (x === 'gluten') {
                    this.candyChecklist.glutenFree = false;
                    this.glutenFree = false;
                }
            }
            /*  ( x === 'milk' ||  x === 'butter' ||  x === 'eggs') */
            for (const x of this.candyItem.ingredients_tags) {
                if (x === 'milk') {
                    this.vegan = false;
                }
                if (x === 'gelatin') {
                    this.vegetarian = false;
                    this.vegan = false;
                }
                else {
                    this.vegetarian = true;
                }
            }
            if (this.candyItem.additives_tags && this.candyItem.additives_tags.length > 0) {
                this.additives = true;
            }
            if (this.candyItem.labels && this.candyItem.labels.length > 0) {
                this.candyItem.labels.split(',').forEach(x => {
                    if (x === 'bio' || x === 'ab') {
                        this.organic = true;
                    }
                });
            }
        });
    }
    toggleIngredients() {
        this.showIngredients = !this.showIngredients;
        this.selected = !this.selected;
    }
    toggleAllergens() {
        this.showAllergens = !this.showAllergens;
    }
    toggleNutriscore() {
        this.showNutriscore = !this.showNutriscore;
    }
};
CandyDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
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
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.candyPageContainer {\n  /* margin-top: 0 !important; */ }\n\n.candyPageContainer .add-label {\n    height: 20vh;\n    background-image: url('sparkles.png');\n    background-size: cover;\n    background-position: center; }\n\n.candyPageContainer .add-label img {\n      max-width: 100px;\n      float: right; }\n\n.candyPageContainer .loading {\n    color: #b1c9fb;\n    font-size: 2rem;\n    text-align: center; }\n\n.candyPageContainer .candyList {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    margin: auto;\n    /* margin: -10% 10%; */ }\n\n.candyPageContainer .candyList .candyItem {\n      /*    border: 4px solid yellow;\n            background-color:pink; */\n      height: 7rem;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-content: center;\n      align-items: center;\n      border-bottom: 3px solid #b1c9fb; }\n\n.candyPageContainer .candyList .candyItem .candyName {\n        max-width: 70%;\n        display: flex;\n        flex-direction: column; }\n\n.candyPageContainer .candyList .candyItem .candyName h1,\n        .candyPageContainer .candyList .candyItem .candyName h2 {\n          font-family: TitanOne;\n          color: #b1c9fb;\n          text-transform: uppercase;\n          text-align: center; }\n\n.candyPageContainer .candyList .candyItem .candyName h1 {\n          font-size: 1rem;\n          transform: scale(1, 1.2);\n          -webkit-transform: scale(1, 1.2);\n          /* Safari and Chrome */\n          -moz-transform: scale(1, 1.2);\n          /* Firefox */\n          -ms-transform: scale(1, 1.2);\n          /* IE 9+ */\n          -o-transform: scale(1, 1.2);\n          /* Opera */ }\n\n.candyPageContainer .candyList .candyItem .candyName h2 {\n          font-size: 0.7rem; }\n\n.candyPageContainer .candyList .candyItem .candyThumbnail {\n        height: 4rem;\n        width: 4rem;\n        min-width: 4rem;\n        border: 3px solid #ff0000;\n        background-color: #ffc0cb;\n        align-content: center;\n        align-items: center;\n        overflow: hidden;\n        border-radius: 50px; }\n\n.candyPageContainer .candyList .candyItem .plus-btn > button {\n        width: 3rem;\n        height: 3rem;\n        background-color: transparent; }\n\n/* customize toast message points/total */\n\n--ion-toast--background {\n  background-color: #ff000096 !important; }\n\n--ion-toast.custom-toast {\n  height: 10vh !important;\n  background-color: #ff000096 !important;\n  color: orange !important;\n  font-family: \"flyingleather\" !important;\n  font-size: 5rem !important;\n  text-align: center; }\n\n/* customize toast message levelUp */\n\n.levelUp {\n  z-index: 3;\n  background: #ffa600b3 url('levelUp.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.newCard {\n  z-index: 3;\n  background: rgba(255, 166, 0, 0.7) url('levelUp.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2FuZHktbGlzdC9jYW5keS1saXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jYW5keS1saXN0L2NhbmR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEM7O0FDZDlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBR2I7RUFFSSw4QkFBQSxFQUErQjs7QUFGbkM7SUFJUSxZQUFZO0lBQ1oscUNBQTJEO0lBQzNELHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBQTs7QUFQbkM7TUFTWSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBOztBQVZ4QjtJQWNRLGNGRmE7SUVHYixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBaEIxQjtJQW1CUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQUEsRUFBdUI7O0FBdkIvQjtNQXlCSTtvQ0RXZ0M7TUNUeEIsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsZ0NGckJTLEVBQUE7O0FFWnJCO1FBb0NnQixjQUFjO1FBQ2QsYUFBYTtRQUNiLHNCQUFzQixFQUFBOztBQXRDdEM7O1VBeUNvQixxQkZjQztVRWJELGNGOUJDO1VFK0JELHlCQUF5QjtVQUN6QixrQkFBa0IsRUFBQTs7QUE1Q3RDO1VBK0NvQixlQUFlO1VBQ2Ysd0JBQXdCO1VBQ3hCLGdDQUFnQztVQUFFLHNCQUFBO1VBQ2xDLDZCQUE2QjtVQUFFLFlBQUE7VUFDL0IsNEJBQTRCO1VBQUUsVUFBQTtVQUM5QiwyQkFBMkI7VUFBRSxVQUFBLEVBQVc7O0FBcEQ1RDtVQXVEb0IsaUJBQWlCLEVBQUE7O0FBdkRyQztRQTJEZ0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YseUJGN0NJO1FFOENKLHlCRmpESztRRWtETCxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUIsRUFBQTs7QUFuRW5DO1FBc0VnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLDZCQUE2QixFQUFBOztBQVE3Qyx5Q0FBQTs7QUFDQTtFQUNJLHNDQUFzQyxFQUFBOztBQUcxQztFQUNJLHVCQUF1QjtFQUN2QixzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7O0FBRXRCLG9DQUFBOztBQUNBO0VBQ0ksVUFBVTtFQUNWLHdDQUE4RDtFQUM5RCx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQUVoQztFQUNJLFVBQVU7RUFDVixxREFBMkU7RUFDM0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvY2FuZHktbGlzdC9jYW5keS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuXG5cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5jYW5keVBhZ2VDb250YWluZXIge1xuICAvKiBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7ICovIH1cbiAgLmNhbmR5UGFnZUNvbnRhaW5lciAuYWRkLWxhYmVsIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L3NwYXJrbGVzLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmFkZC1sYWJlbCBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgIGZsb2F0OiByaWdodDsgfVxuICAuY2FuZHlQYWdlQ29udGFpbmVyIC5sb2FkaW5nIHtcbiAgICBjb2xvcjogI2IxYzlmYjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qIG1hcmdpbjogLTEwJSAxMCU7ICovIH1cbiAgICAuY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3QgLmNhbmR5SXRlbSB7XG4gICAgICAvKiAgICBib3JkZXI6IDRweCBzb2xpZCB5ZWxsb3c7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnBpbms7ICovXG4gICAgICBoZWlnaHQ6IDdyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2IxYzlmYjsgfVxuICAgICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5TmFtZSB7XG4gICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDEsXG4gICAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5jYW5keU5hbWUgaDIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAuY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3QgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpO1xuICAgICAgICAgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogSUUgOSsgKi9cbiAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7XG4gICAgICAgICAgLyogT3BlcmEgKi8gfVxuICAgICAgICAuY2FuZHlQYWdlQ29udGFpbmVyIC5jYW5keUxpc3QgLmNhbmR5SXRlbSAuY2FuZHlOYW1lIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTsgfVxuICAgICAgLmNhbmR5UGFnZUNvbnRhaW5lciAuY2FuZHlMaXN0IC5jYW5keUl0ZW0gLmNhbmR5VGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgbWluLXdpZHRoOiA0cmVtO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmYwMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMGNiO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAgIC5jYW5keVBhZ2VDb250YWluZXIgLmNhbmR5TGlzdCAuY2FuZHlJdGVtIC5wbHVzLWJ0biA+IGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi8qIGN1c3RvbWl6ZSB0b2FzdCBtZXNzYWdlIHBvaW50cy90b3RhbCAqL1xuLS1pb24tdG9hc3QtLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwOTYgIWltcG9ydGFudDsgfVxuXG4tLWlvbi10b2FzdC5jdXN0b20tdG9hc3Qge1xuICBoZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDk2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiZmx5aW5nbGVhdGhlclwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogNXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLyogY3VzdG9taXplIHRvYXN0IG1lc3NhZ2UgbGV2ZWxVcCAqL1xuLmxldmVsVXAge1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiAjZmZhNjAwYjMgdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2xldmVsVXAucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxuXG4ubmV3Q2FyZCB7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNykgdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2xldmVsVXAucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyBuZWNlc3NhcnkgZm9yIGxpc3QgZWxlbWVudHMgdG8gY29tZSBvdXQgcmlnaHRcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY2FuZHlQYWdlQ29udGFpbmVyIHtcblxuICAgIC8qIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgKi9cbiAgICAuYWRkLWxhYmVsIHtcbiAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvc3BhcmtsZXMucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sb2FkaW5nIHtcbiAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY2FuZHlMaXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAvKiBtYXJnaW46IC0xMCUgMTAlOyAqL1xuICAgICAgICAuY2FuZHlJdGVtIHtcbiAgICAvKiAgICBib3JkZXI6IDRweCBzb2xpZCB5ZWxsb3c7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnBpbms7ICovXG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJG1haW4tYmx1ZTtcblxuICAgICAgICAgICAgLmNhbmR5TmFtZSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6JHRpdGFuT25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogICRtYWluLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjIpOyAvKiBGaXJlZm94ICovXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEuMik7IC8qIElFIDkrICovXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMS4yKTsgLyogT3BlcmEgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FuZHlUaHVtYm5haWwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDRyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJG1haW4tcmVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLXBpbms7XG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBsdXMtYnRuID4gYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cblxuLyogY3VzdG9taXplIHRvYXN0IG1lc3NhZ2UgcG9pbnRzL3RvdGFsICovXG4tLWlvbi10b2FzdC0tYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDk2ICFpbXBvcnRhbnQ7XG59XG5cbi0taW9uLXRvYXN0LmN1c3RvbS10b2FzdCAge1xuICAgIGhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA5NiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogXCJmbHlpbmdsZWF0aGVyXCIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDVyZW0gIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiBjdXN0b21pemUgdG9hc3QgbWVzc2FnZSBsZXZlbFVwICovXG4ubGV2ZWxVcCB7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kOiAjZmZhNjAwYjMgdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2xldmVsVXAucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5uZXdDYXJkIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNykgdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2xldmVsVXAucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuXG5cbiJdfQ== */");

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
/* harmony import */ var _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/candy-api.service */ "./src/app/play/services/candy-api.service.ts");
/* harmony import */ var _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/shorten-string/shorten-string */ "./src/app/shared/pipes/shorten-string/shorten-string.ts");
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let CandyListComponent = class CandyListComponent {
    constructor(candyApiService, userStatsService, shortenString, toastController) {
        this.candyApiService = candyApiService;
        this.userStatsService = userStatsService;
        this.shortenString = shortenString;
        this.toastController = toastController;
        this.candyList = [];
        this.candyItem = {
            _id: '', product_name: '', amountInBackpack: 0,
            image_front_url: '', brands_tags: [], ingredients_tags: [],
            nutriscore_data: [], additives_tags: [], allergens_hierarchy: []
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
        this.loading = true;
    }
    /* public plusBtnImg = './assets/graphicmat/zoomIn.png'; */
    ngOnInit() {
        this.loadCandyList();
    }
    loadCandyList() {
        this.candyApiService.getAllCandyFromApi()
            .subscribe((response) => {
            this.candyList = response;
            console.log(this.candyList);
            this.loading = false;
            this.loadSearchBar();
        });
    }
    loadSearchBar() {
        const searchbar = document.querySelector('ion-searchbar');
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
    addCandyToBackpack(candyItem) {
        this.totalCandy$ = this.userStatsService.getCurrentBackpackCount();
        this.candyItem = candyItem;
        this.candyItem.product_name = candyItem.product_name;
        this.candyItem._id = candyItem._id;
        this.candyItem.amountInBackpack = candyItem.amountInBackpack;
        // this.candyItem.amountInBackpack = candyItem.amountInBackpack | 0;
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
        // if id does not exist : add new candy to backpack (and increase amount)
        if (!added) {
            this.candyItem.amountInBackpack += 1;
            this.itemsInBackpack.push(this.candyItem);
        }
        // console.log("ITEMS : ", this.itemsInBackpack);
        // console.log(this.itemsInBackpack.forEach(item => console.log(item.amountInBackpack)));
        // save new total of all candy
        this.userStatsService.update_totalCandyCount(this.totalCandy += 1);
        // save backpack new content
        this.userStatsService.update_backpackContent(this.itemsInBackpack);
        this.presentToastWithOptions();
    }
    presentToastWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast1 = yield this.toastController.create({
                message: `+2 Points! ${name}`,
                position: 'middle',
                duration: 500,
                cssClass: 'custom-toast'
            });
            toast1.present();
            const toast2 = yield this.toastController.create({
                message: `TOTAL POINTS :` + this.totalCandy + `!`,
                position: 'middle',
                duration: 400,
                cssClass: 'custom-toast'
            });
            // setTimeout();
            toast2.present();
            if (this.totalCandy % 5 === 0) {
                const toast3 = yield this.toastController.create({
                    position: 'middle',
                    duration: 800,
                    cssClass: 'levelUp'
                });
                toast3.present();
            }
        });
    }
};
CandyListComponent.ctorParameters = () => [
    { type: _services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"] },
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"] },
    { type: _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_3__["ShortenStringPipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
CandyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-candy-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candy-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/candy-list/candy-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./candy-list.component.scss */ "./src/app/play/candy-list/candy-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_candy_api_service__WEBPACK_IMPORTED_MODULE_2__["CandyApiService"],
        _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["UserStatsService"],
        _shared_pipes_shorten_string_shorten_string__WEBPACK_IMPORTED_MODULE_3__["ShortenStringPipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], CandyListComponent);



/***/ }),

/***/ "./src/app/play/challenges/challenges.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/play/challenges/challenges.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('spiders_bg-half.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: auto;\n    padding-top: 10%; }\n\n.special-bg .main-container h1 {\n      color: #FFFDEF;\n      font-size: 2.5rem;\n      line-height: 0.8; }\n\n.special-bg .main-container h1 span {\n        font-size: 3.5rem; }\n\n.special-bg .main-container .upper-row,\n    .special-bg .main-container .bottom-row {\n      height: 5rem;\n      padding: 8% 0%; }\n\n.special-bg .main-container .upper-row img,\n      .special-bg .main-container .bottom-row img {\n        width: 5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEM7O0FDZDlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBR2I7RUFDSSw0Q0FBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBOztBQUgvQjtJQU9RLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVZ4QjtNQWFZLGNGY1M7TUViVCxpQkFBaUI7TUFDakIsZ0JBQWdCLEVBQUE7O0FBZjVCO1FBZ0JtQixpQkFBaUIsRUFBQTs7QUFoQnBDOztNQXFCWSxZQUFZO01BQ1osY0FBYyxFQUFBOztBQXRCMUI7O1FBd0JnQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5L2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cblxuXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogI0ZGRkRFRjtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uc3BlY2lhbC1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGlkZXJzX2JnLWhhbGYucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cbiAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTAlOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIGgxIHtcbiAgICAgIGNvbG9yOiAjRkZGREVGO1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMC44OyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgaDEgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3csXG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IHtcbiAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgIHBhZGRpbmc6IDglIDAlOyB9XG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLnVwcGVyLXJvdyBpbWcsXG4gICAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLmJvdHRvbS1yb3cgaW1nIHtcbiAgICAgICAgd2lkdGg6IDVyZW07IH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLy8gbmVjZXNzYXJ5IGZvciBsaXN0IGVsZW1lbnRzIHRvIGNvbWUgb3V0IHJpZ2h0XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNwZWNpYWwtYmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9zcGlkZXJzX2JnLWhhbGYucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgLm1haW4tY29udGFpbmVyIHtcblxuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgICAgICBcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gICAgICAgICAgICBzcGFuIHsgZm9udC1zaXplOiAzLjVyZW07IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC51cHBlci1yb3csXG4gICAgICAgIC5ib3R0b20tcm93IHtcbiAgICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDglIDAlO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */");

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


let ChallengesComponent = class ChallengesComponent {
    constructor() {
        this.purpleBubbleImg = 'assets/graphicMat/purple_bubble.png';
        this.candleSkullImg = 'assets/graphicMat/candle_skull.png';
    }
    ngOnInit() { }
};
ChallengesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-challenges',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./challenges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/challenges/challenges.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./challenges.component.scss */ "./src/app/play/challenges/challenges.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n.mapContainer {\n  z-index: 1;\n  height: 80%;\n  border: 8px solid black; }\n\n.mapContainer #map {\n    z-index: 1;\n    height: 100vh;\n    width: 100%; }\n\n.mapContainer .leaflet-bar {\n    margin-top: 50vh; }\n\n.mapContainer .scroll-content {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n\n.options-container {\n  z-index: 2;\n  position: absolute;\n  height: 5rem;\n  bottom: 0;\n  background-color: #3e173b;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.options-container:active {\n    transform: translateY(-30%);\n    transition: transform 300ms linear;\n    will-change: transform; }\n\n.options-container .saveLocationBtnContainer {\n    width: 90%;\n    margin: auto; }\n\n.options-container .saveLocationBtnContainer button {\n      background-color: transparent;\n      font-family: TitanOne;\n      color: #b1c9fb;\n      text-transform: uppercase;\n      justify-content: space-between; }\n\n.options-container .saveLocationBtnContainer button img {\n        border: 2px solid #b1c9fb;\n        border-radius: 5px;\n        padding: 3%;\n        width: 2rem; }\n\n.options-container .saveLocationBtnContainer button:hover img {\n        padding: 0%; }\n\n/* \n.seeOptions-open .seeOptions {\n\t-webkit-transform: none;\n\t\t\ttransform: none;\n\ttransition: transform 300ms linear;\n} */\n\n@media (min-width: 567px) and (max-width: 767px) {\n  ion-content {\n    width: 100%; }\n    ion-content .mapContainer {\n      height: 100%;\n      margin: 0; } }\n\n@media (min-width: 768px) and (max-width: 1023px) {\n  /*   ion-content {\n        width: 80%;\n        .mapContainer {\n            width: 100vw;\n            height: 90%;\n            margin: auto;\n        }\n    } */ }\n\n@media (min-width: 1024px) {\n  /*   ion-content {\n        width: 80% !important;\n\n        .mapContainer {\n            width: 100%;\n            height: 100%;\n            margin: 0;\n        }\n    } */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvYXBwL3BsYXkvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVBOztrQ0NGa0MsRURJQzs7QUFvRGpDO0VBQ0ksMEJBQTBCO0VBQzFCLGdEQUErRCxFQUFBOztBQUduRTtFQUNJLHFCQUFxQjtFQUNyQixtREFBa0UsRUFBQTs7QUFJeEU7Ozs7OENDckQ4Qzs7QUNmOUM7RUFDSSxVQUFVO0VBRVYsV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUozQjtJQVFRLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVyxFQUFBOztBQVZuQjtJQWNRLGdCQUFnQixFQUFBOztBQWR4QjtJQWlCUSx3QkFBd0I7SUFDeEIsMkJBQTJCLEVBQUE7O0FBSW5DO0VBQ0ksVUFBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUTtFQUNSLHlCRkdtQjtFRUZuQiwyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7O0FBUGhDO0lBV2dCLDJCQUEyQjtJQUNuQyxrQ0FBa0M7SUFDbEMsc0JBQXNCLEVBQUE7O0FBYjlCO0lBaUJRLFVBQVU7SUFDVixZQUFZLEVBQUE7O0FBbEJwQjtNQW9CWSw2QkFBNkI7TUFDN0IscUJGc0JTO01FckJULGNGdEJTO01FdUJULHlCQUF5QjtNQUN6Qiw4QkFBOEIsRUFBQTs7QUF4QjFDO1FBMkJnQix5QkYzQks7UUU0Qkwsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXLEVBQUE7O0FBOUIzQjtRQW1Db0IsV0FBVyxFQUFBOztBQU8vQjs7Ozs7R0RDRzs7QUNRSDtFQUNJO0lBQ0ksV0FBVyxFQUFBO0lBRGY7TUFJUSxZQUFZO01BQ1osU0FBUyxFQUFBLEVBQ1o7O0FBSVQ7RUFDRTs7Ozs7OztPREpLLEVDV0M7O0FBSVI7RUFFRTs7Ozs7Ozs7T0ROSyxFQ2NDIiwiZmlsZSI6InNyYy9hcHAvcGxheS9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuXG5cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLm1hcENvbnRhaW5lciB7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXI6IDhweCBzb2xpZCBibGFjazsgfVxuICAubWFwQ29udGFpbmVyICNtYXAge1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAubWFwQ29udGFpbmVyIC5sZWFmbGV0LWJhciB7XG4gICAgbWFyZ2luLXRvcDogNTB2aDsgfVxuICAubWFwQ29udGFpbmVyIC5zY3JvbGwtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuXG4ub3B0aW9ucy1jb250YWluZXIge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNXJlbTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UxNzNiO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgLm9wdGlvbnMtY29udGFpbmVyOmFjdGl2ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBsaW5lYXI7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsgfVxuICAub3B0aW9ucy1jb250YWluZXIgLnNhdmVMb2NhdGlvbkJ0bkNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgICAub3B0aW9ucy1jb250YWluZXIgLnNhdmVMb2NhdGlvbkJ0bkNvbnRhaW5lciBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBjb2xvcjogI2IxYzlmYjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgICAgIC5vcHRpb25zLWNvbnRhaW5lciAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIGJ1dHRvbiBpbWcge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYjFjOWZiO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgICB3aWR0aDogMnJlbTsgfVxuICAgICAgLm9wdGlvbnMtY29udGFpbmVyIC5zYXZlTG9jYXRpb25CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIGltZyB7XG4gICAgICAgIHBhZGRpbmc6IDAlOyB9XG5cbi8qIFxuLnNlZU9wdGlvbnMtb3BlbiAuc2VlT3B0aW9ucyB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuXHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgbGluZWFyO1xufSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgaW9uLWNvbnRlbnQgLm1hcENvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLyogICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9ICovIH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAvKiAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9ICovIH1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1hcENvbnRhaW5lciB7XG4gICAgei1pbmRleDogMTtcbiAgICAvLyBtb2JpbGUgcG9ydHJhaXRcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXI6IDhweCBzb2xpZCBibGFjaztcbiAgICAvLyBtYXJnaW46IDUlIGF1dG87XG5cbiAgICAjbWFwIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC8vIGN1c3RvbWl6ZSBtYXAgem9vbSBjb250cm9sc1xuICAgIC5sZWFmbGV0LWJhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwdmg7XG4gICAgfVxuICAgIC5zY3JvbGwtY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm9wdGlvbnMtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OjI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBib3R0b206MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1wdXJwbGU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICAuc2F2ZUxvY2F0aW9uQnRuQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGFuT25lO1xuICAgICAgICAgICAgY29sb3I6ICRtYWluLWJsdWU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLy8gd2lkdGg6IDEycmVtO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1ibHVlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbiB0byBpbXBsZW1lbnRcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4vKiBcbi5zZWVPcHRpb25zLW9wZW4gLnNlZU9wdGlvbnMge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcblx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbn0gKi9cblxuLy8gYnJlYWtwb2ludHMgZXhjZXB0aW9ucyAoIOKJoCBnbG9iYWwuc2NzcyA6IGlvbi1jb250ZW50IHdvbid0IHNocmluayBhcyBtdWNoIGFzIG90aGVyIHBhZ2VzIGFmdGVyIDU2N3B4KVxuLy8gbW9iaWxlIGxhbmRzY2FwZVxuQG1lZGlhIChtaW4td2lkdGg6IDU2N3B4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gdGFibGV0IHBvcnRyYWl0XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLyogICBpb24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9ICovXG59XG5cbi8vIHRhYmxldCBsYW5kc2NhcGUgYW5kICtcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAvLyBleGNlcHRpb24gZnJvbSBnbG9iYWwuc2Nzc1xuICAvKiAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5tYXBDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9ICovXG59XG5cbi8vIHRvIGF2b2lkIGNvbnNvbGUgd2FybmluZyAnd2lsbC1jaGFuZ2UgbWVtb3J5IGlzIHRvbyBoaWdoLi4nXG4vLyAubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtdGlsZSwubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7IHdpbGwtY2hhbmdlOmF1dG8gIWltcG9ydGFudDsgfVxuLy8gIGNvbW1lbnRlZCBvdXQgPT4gZidzIHVwIHBhZ2UgZGlzcGxheSA6KFxuIl19 */");

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



let MapComponent = class MapComponent {
    constructor(geolocService) {
        this.geolocService = geolocService;
        this.heartIcon = 'assets/graphicMat/heartAsset_red.png';
    }
    ngOnInit() {
        // this.geolocService.getCurrentLocation();
        this.initMapWithParams();
    }
    initMapWithParams() {
        // this.geolocService.getCurrentLocation();
        this.age = this.geolocService.getAgeRange();
        console.log('user age= ', this.age);
        this.allowedDistance = this.geolocService.findAllowedDistance(this.age);
        console.log('dist= ', this.allowedDistance);
        this.mapBounds = this.geolocService.calculateMapBounds(this.allowedDistance);
        console.log('mapBounds= ', this.mapBounds);
        this.geolocService.loadMapWithBounds();
    }
    saveAddress() {
        alert('address saved to favorites!');
    }
    see() {
    }
    addCircle() { }
    myAddresses() { }
};
MapComponent.ctorParameters = () => [
    { type: _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_2__["GeolocService"] }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_2__["GeolocService"]])
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
            _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_20__["ChallengesComponent"]
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
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
        this.candyListApiUrl = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50';
        this.candyByIdApiUrl = 'https://world.openfoodfacts.org/api/v0/product/';
        this.candyItem = { _id: '', product_name: '', amountInBackpack: null };
        this.handleError = httpErrorHandler.createHandleError('CandyApiService');
    }
    // GET all candy list from api, max 50 results
    // | => TO DO : clean up doublons in response list with a pipe
    getAllCandyFromApi() {
        return this.httpService
            .get(this.candyListApiUrl)
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
            .get(this.candyByIdApiUrl + candyId + '.json')
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
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.special-bg {\n  background-image: url('bg_spiders-1920.png');\n  background-size: cover;\n  background-position: center; }\n\n.special-bg .main-container {\n    width: 90%;\n    height: 80%;\n    margin: auto;\n    padding-top: 10%; }\n\n.special-bg .main-container h1 {\n      color: #FFFDEF;\n      font-size: 2.5rem;\n      line-height: 0.8; }\n\n.special-bg .main-container h1 span {\n        font-size: 3.5rem; }\n\n.special-bg .main-container img {\n      width: 15rem; }\n\n.special-bg .main-container .upper-row,\n    .special-bg .main-container .bottom-row {\n      height: 5rem; }\n\n.special-bg .main-container .upper-row img,\n      .special-bg .main-container .bottom-row img {\n        width: 5rem; }\n\n.special-bg .main-container .upper-row {\n      align-content: flex-end; }\n\n.special-bg .main-container .bottom-row {\n      align-content: flex-start; }\n\n.special-bg .main-container .flexRowCentered {\n      padding: 8% 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvdHJpY2stb3ItdHJlYXQvdHJpY2stb3ItdHJlYXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaGlsZGVnYXJkYWduZXNnZW5heS9Eb2N1bWVudHMvQW5kQkVZT05EL0NBTkRZX0NIQVNFXzIwMjBfaW9uaWMvY2FuZHlDaGFzZTIwMjBJb25pYzUvc3JjL2FwcC9wbGF5L3RyaWNrLW9yLXRyZWF0L3RyaWNrLW9yLXRyZWF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUE7O2tDQ0ZrQyxFRElDOztBQW9EakM7RUFDSSwwQkFBMEI7RUFDMUIsZ0RBQStELEVBQUE7O0FBR25FO0VBQ0kscUJBQXFCO0VBQ3JCLG1EQUFrRSxFQUFBOztBQUl4RTs7Ozs4Q0NyRDhDOztBQ2Q5Qzs7Ozs7O0VBTUksU0FBUyxFQUFBOztBQUdiO0VBQ0ksNENBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFIL0I7SUFPUSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFWeEI7TUFhWSxjRmNTO01FYlQsaUJBQWlCO01BQ2pCLGdCQUFnQixFQUFBOztBQWY1QjtRQWdCbUIsaUJBQWlCLEVBQUE7O0FBaEJwQztNQWtCYyxZQUFZLEVBQUE7O0FBbEIxQjs7TUFzQlksWUFBWSxFQUFBOztBQXRCeEI7O1FBd0JnQixXQUFXLEVBQUE7O0FBeEIzQjtNQTRCWSx1QkFBdUIsRUFBQTs7QUE1Qm5DO01BK0JZLHlCQUF5QixFQUFBOztBQS9CckM7TUFpQzJCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXkvdHJpY2stb3ItdHJlYXQvdHJpY2stb3ItdHJlYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuXG46cm9vdCB7XG5cbi8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqL1xuXG5cblxuXG4gICAgJGNvbG9yczogKFxuICAgICAgZGFuZ2VyOiAgICAgI2Y1M2QzZCxcbiAgICAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsXG4gICAgICBjdXN0b21Db2xvcjogdHJhbnNwYXJlbnRcbiAgICApO1xuXG4gIH1cblxuICAkbWFpbi1vcmFuZ2U6ICNmZmE1MDA7XG4gICRzdWItb3JhbmdlIDojZmY5ZTI5OztcbiAgJGxpZ2h0LW9yYW5nZTogI2ZmZWVkZjtcbiAgXG4gICRtYWluLWJsdWU6ICNiMWM5ZmI7XG5cbiAgJG1haW4tcGluazogI2ZmYzBjYjtcbiAgJHN1Yi1waW5rOiAgI2ZiYjFmMTtcblxuICAkbWFpbi1yZWQ6ICNmZjAwMDA7XG4gICRzdWItcmVkOiAjZmYwMDAwOTY7XG5cbiAgJG1haW4tcHVycGxlOiAjM2UxNzNiO1xuICAkc3ViLXB1cnBsZTogIzYxNzhGNTtcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6ICNGRkZERUY7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDA7IH1cblxuLnNwZWNpYWwtYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvYmdfc3BpZGVycy0xOTIwLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XG4gIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDEwJTsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciBoMSB7XG4gICAgICBjb2xvcjogI0ZGRkRFRjtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIGgxIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciBpbWcge1xuICAgICAgd2lkdGg6IDE1cmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3csXG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IHtcbiAgICAgIGhlaWdodDogNXJlbTsgfVxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cgaW1nLFxuICAgICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC5ib3R0b20tcm93IGltZyB7XG4gICAgICAgIHdpZHRoOiA1cmVtOyB9XG4gICAgLnNwZWNpYWwtYmcgLm1haW4tY29udGFpbmVyIC51cHBlci1yb3cge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7IH1cbiAgICAuc3BlY2lhbC1iZyAubWFpbi1jb250YWluZXIgLmJvdHRvbS1yb3cge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgfVxuICAgIC5zcGVjaWFsLWJnIC5tYWluLWNvbnRhaW5lciAuZmxleFJvd0NlbnRlcmVkIHtcbiAgICAgIHBhZGRpbmc6IDglIDAlOyB9XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIG5lY2Vzc2FyeSBmb3IgbGlzdCBlbGVtZW50cyB0byBjb21lIG91dCByaWdodFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zcGVjaWFsLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvYmdfc3BpZGVycy0xOTIwLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG5cbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgICAgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAkc3ViLWxpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICAgICAgc3BhbiB7IGZvbnQtc2l6ZTogMy41cmVtOyB9XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHsgd2lkdGg6IDE1cmVtOyB9XG5cbiAgICAgICAgLnVwcGVyLXJvdyxcbiAgICAgICAgLmJvdHRvbS1yb3cge1xuICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudXBwZXItcm93IHtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20tcm93IHtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXhSb3dDZW50ZXJlZCB7IHBhZGRpbmc6IDglIDAlOyB9XG4gICAgfVxufVxuIl19 */");

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
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.candyImg = 'assets/graphicMat/candy.png';
        this.treatOrTrickImg = 'assets/graphicMat/trickOrTreat.png';
        this.witchHatImg = 'assets/graphicMat/hat.png';
    }
    ngOnInit() { }
    choseTreat() {
        this.router.navigate(['/challenges']);
    }
    choseTrick() {
        this.router.navigate(['/challenges']);
    }
};
TrickOrTreatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
TrickOrTreatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trick-or-treat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trick-or-treat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/trick-or-treat/trick-or-treat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trick-or-treat.component.scss */ "./src/app/play/trick-or-treat/trick-or-treat.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\n.stats-container {\n  width: 80%;\n  height: 80%;\n  margin: 10% auto;\n  background-size: cover;\n  background-position: center; }\n\n.stats-container h1,\n  .stats-container h2 {\n    font-family: flyingleather; }\n\n.stats-container h1 {\n    color: #FFFDEF;\n    font-size: 1.5rem; }\n\n.stats-container h2 {\n    color: #ffa500;\n    font-size: 1.8rem; }\n\n.stats-container .item,\n  .stats-container .item-level {\n    align-items: unset;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n\n.stats-container .item {\n    border: 2px solid #6178F5;\n    border-radius: 20px;\n    padding: 3% 0%; }\n\n.stats-container .item-level {\n    text-align: center;\n    border-bottom: 3px solid orange;\n    line-height: 0.1em;\n    margin: 10px 0 20px; }\n\n.bottom-cards-container {\n  bottom: 2%;\n  position: absolute;\n  width: 100%;\n  margin: auto; }\n\n.bottom-cards-container .cardsList {\n    justify-content: space-evenly; }\n\n.bottom-cards-container .cardsList .card-container {\n      height: 10rem; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext {\n        margin-bottom: 15%;\n        width: 5rem;\n        height: 5rem;\n        background-color: #ff9e29;\n        border: 1px solid #ff0000;\n        border-radius: 5px; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext h2 {\n          padding: 7%;\n          font-size: 0.8rem;\n          text-align: center;\n          color: black; }\n\n.bottom-cards-container .cardsList .card-container .bubbleNext h2 span {\n            color: #ff0000; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container {\n        width: 4rem; }\n\n.bottom-cards-container .cardsList .card-container .card-img-container img {\n          width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BsYXkvdXNlci1zdGF0cy91c2VyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy9hcHAvcGxheS91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEM7O0FDZjlDOzs7Ozs7RUFNSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxVQUFVO0VBQ1YsV0FBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBTC9COztJQVNRLDBCRjJDdUIsRUFBQTs7QUVwRC9CO0lBWVEsY0ZpQmE7SUVoQmIsaUJGMEJlLEVBQUE7O0FFdkN2QjtJQWdCUSxjRk5lO0lFT2YsaUJGdUJjLEVBQUE7O0FFeEN0Qjs7SUFxQlEsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7O0FBeEJ0QztJQTJCUSx5QkZKYztJRUtkLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7O0FBN0J0QjtJQWdDUSxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTs7QUFHM0I7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSmhCO0lBT1EsNkJBQTZCLEVBQUE7O0FBUHJDO01BU1ksYUFBYSxFQUFBOztBQVR6QjtRQWFnQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFlBQVk7UUFDWix5QkYzQ007UUU0Q04seUJGcENJO1FFcUNKLGtCQUFrQixFQUFBOztBQWxCbEM7VUFvQm9CLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLFlBQVksRUFBQTs7QUF2QmhDO1lBeUJ3QixjRjVDSixFQUFBOztBRW1CcEI7UUE4QmdCLFdBQVcsRUFBQTs7QUE5QjNCO1VBZ0NvQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5L3VzZXItc3RhdHMvdXNlci1zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cblxuXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogI0ZGRkRFRjtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIjpyb290IHtcbiAgLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMDsgfVxuXG4uc3RhdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgxLFxuICAuc3RhdHMtY29udGFpbmVyIGgyIHtcbiAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgxIHtcbiAgICBjb2xvcjogI0ZGRkRFRjtcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxuICAuc3RhdHMtY29udGFpbmVyIGgyIHtcbiAgICBjb2xvcjogI2ZmYTUwMDtcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfVxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtLFxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtLWxldmVsIHtcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAuc3RhdHMtY29udGFpbmVyIC5pdGVtIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjE3OEY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMyUgMCU7IH1cbiAgLnN0YXRzLWNvbnRhaW5lciAuaXRlbS1sZXZlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7IH1cblxuLmJvdHRvbS1jYXJkcy1jb250YWluZXIge1xuICBib3R0b206IDIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87IH1cbiAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cbiAgICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwcmVtOyB9XG4gICAgICAuYm90dG9tLWNhcmRzLWNvbnRhaW5lciAuY2FyZHNMaXN0IC5jYXJkLWNvbnRhaW5lciAuYnViYmxlTmV4dCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWUyOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gICAgICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIC5idWJibGVOZXh0IGgyIHtcbiAgICAgICAgICBwYWRkaW5nOiA3JTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IGJsYWNrOyB9XG4gICAgICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmJ1YmJsZU5leHQgaDIgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDsgfVxuICAgICAgLmJvdHRvbS1jYXJkcy1jb250YWluZXIgLmNhcmRzTGlzdCAuY2FyZC1jb250YWluZXIgLmNhcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA0cmVtOyB9XG4gICAgICAgIC5ib3R0b20tY2FyZHMtY29udGFpbmVyIC5jYXJkc0xpc3QgLmNhcmQtY29udGFpbmVyIC5jYXJkLWltZy1jb250YWluZXIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuLy8gbmVjZXNzYXJ5IGZvciBsaXN0IGVsZW1lbnRzIHRvIGNvbWUgb3V0IHJpZ2h0XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgIG1hcmdpbjogMDtcbn1cbi5zdGF0cy1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OjgwJTtcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgaDEsXG4gICAgaDIge1xuICAgICAgICBmb250LWZhbWlseTogJGZseWluZ2xlYXRoZXI7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICRzdWItbGlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogJHh4cy1mb250U2l6ZTtcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBjb2xvcjogJG1haW4tb3JhbmdlO1xuICAgICAgICBmb250LXNpemU6ICR4cy1mb250U2l6ZTtcbiAgICB9XG4gICAgLml0ZW0sXG4gICAgLml0ZW0tbGV2ZWwge1xuICAgICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLml0ZW0ge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc3ViLXB1cnBsZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogMyUgMCU7XG4gICAgfVxuICAgIC5pdGVtLWxldmVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgb3JhbmdlO1xuICAgICAgICBsaW5lLWhlaWdodDogMC4xZW07XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XG4gICAgfVxufVxuLmJvdHRvbS1jYXJkcy1jb250YWluZXIge1xuICAgIGJvdHRvbTogMiU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC5jYXJkc0xpc3Qge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuXG4gICAgICAgICAgICAuYnViYmxlTmV4dCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3ViLW9yYW5nZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbWFpbi1yZWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNyU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

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
/* harmony import */ var _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user-stats.service */ "./src/app/shared/services/user-stats.service.ts");
/* harmony import */ var _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/geoloc.service */ "./src/app/shared/services/geoloc.service.ts");




let UserStatsComponent = class UserStatsComponent {
    constructor(userStatsService, geolocService) {
        this.userStatsService = userStatsService;
        this.geolocService = geolocService;
        this.cards = [];
        // this.userStats = this.userStatsService.getCurrentUserStats();
        this.totalPoints = 0;
        this.currentLevel = this.userStatsService.retrieveDefaultLevel();
        this.levels = this.userStatsService.retrieveLevelList();
        this.cardIsNext = true;
    }
    ngOnInit() {
        console.log('this.userStatsService.getCurrentUserStats = ', this.userStatsService.getCurrentUserStats());
        // this.setLevel();
        // this.geolocService.getCurrentLocation();
        /*  this.userStatsService.getCurrentTotalPoints();
            console.log('total point: ', this.totalPoints);
        
            this.userStatsService.getCurrentLevel();
            console.log('current level: ', this.currentLevel); */
    }
};
UserStatsComponent.ctorParameters = () => [
    { type: _shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"] },
    { type: _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__["GeolocService"] }
];
UserStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/user-stats/user-stats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-stats.component.scss */ "./src/app/play/user-stats/user-stats.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_stats_service__WEBPACK_IMPORTED_MODULE_2__["UserStatsService"], _shared_services_geoloc_service__WEBPACK_IMPORTED_MODULE_3__["GeolocService"]])
], UserStatsComponent);



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



/***/ })

}]);
//# sourceMappingURL=play-play-module-es2015.js.map