(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\n\nhtml.ios ion-modal.modal-card .ion-page {\n  border-radius: inherit;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\n\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n.ion-hide {\n  display: none !important;\n}\n\n.ion-hide-up {\n  display: none !important;\n}\n\n.ion-hide-down {\n  display: none !important;\n}\n\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 576px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 992px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1200px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n\n:root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n/* Core CSS required for Ionic components to work properly */\n\n/* Basic CSS for apps built with Ionic */\n\n/* Optional CSS utils that can be commented out */\n\n/* @import \"~@ionic/angular/css/padding.css\";\n@import \"~@ionic/angular/css/float-elements.css\";\n@import \"~@ionic/angular/css/text-alignment.css\";\n@import \"~@ionic/angular/css/text-transformation.css\";\n@import \"~@ionic/angular/css/flex-utils.css\"; */\n\n/* Set variables for all MODES --------------------------------- */\n\n:root {\n  --ion-background-color: transparent;\n  --ion-font-family: \"flyingleather\", \"Helvetica Neue\", \"Roboto\", sans-serif; }\n\n:root ion-header {\n    box-shadow: -1px 27px 35px 5px rgba(0, 0, 0, 0.82);\n    -webkit-box-shadow: -1px 27px 35px 5px rgba(0, 0, 0, 0.82);\n    -moz-box-shadow: -1px 27px 35px 5px rgba(0, 0, 0, 0.82); }\n\n:root .toolbarTitle {\n    color: orange;\n    font-size: 1.5rem;\n    text-align: center; }\n\n:root .ion-page {\n    background-image: url('gradient_bats_1920.png');\n    background-size: cover;\n    background-position: center; }\n\n:root ion-tab-bar {\n    background-color: #ffa500; }\n\n:root ion-button {\n    color: #ffa500; }\n\n@media (min-width: 568px) and (max-width: 767px) {\n    :root ion-content {\n      width: 70%;\n      align-self: center; }\n    :root ion-tab-bar {\n      height: 8%;\n      background-color: orange; } }\n\n@media (min-width: 1024px) {\n    :root ion-content {\n      width: 50%;\n      align-self: center; } }\n\n:root .flexColCentered {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    align-items: center;\n    justify-content: center; }\n\n:root .flexRowCentered {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: center; }\n\n:root .roundedOrangeButton {\n    border: 2px solid #ffa500;\n    background-color: transparent;\n    border-radius: 50px;\n    font-family: TitanOne;\n    color: #ffa500; }\n\n:root .circlesImgBg {\n    background-image: url('circles.png');\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n\n:root .thumbnail {\n    height: 3rem;\n    width: 3rem;\n    align-content: center;\n    align-items: center;\n    overflow: hidden;\n    border-radius: 50%; }\n\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder,\n  :root .searchbar-input .sc-ion-searchbar-md-h::-webkit-input-placeholder {\n    color: red !important;\n    font-size: 1.5rem !important;\n    opacity: 1 !important; }\n\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-ios::-moz-placeholder,\n  :root .searchbar-input .sc-ion-searchbar-md-h::-moz-placeholder {\n    color: red !important;\n    font-size: 1.5rem !important;\n    opacity: 1 !important; }\n\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder,\n  :root .searchbar-input .sc-ion-searchbar-md-h::-ms-input-placeholder {\n    color: red !important;\n    font-size: 1.5rem !important;\n    opacity: 1 !important; }\n\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-ios::placeholder,\n  :root .searchbar-input .sc-ion-searchbar-md-h::placeholder {\n    color: red !important;\n    font-size: 1.5rem !important;\n    opacity: 1 !important; }\n\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-md-h {\n    border: 3px solid orange;\n    background-color: rgba(255, 192, 203, 0.6); }\n\n:root .static {\n    width: 90%;\n    align-self: center;\n    padding-top: 4vh;\n    border: 2px solid orange;\n    border-radius: 5px; }\n\n:root .static .main {\n      padding: 3%;\n      color: orange;\n      font-size: 1rem; }\n\n:root .static .bottom-container {\n      text-align: center; }\n\n:root .new-points-toast,\n  :root .new-totalpoints-toast {\n    --height: 10vh !important;\n    --background: #ff000096 !important;\n    --color: orange !important;\n    --opacity: 1 !important;\n    --font-family: \"flyingleather\" !important;\n    text-align: center; }\n\n:root .new-points-toast {\n    font-size: 3rem; }\n\n:root .new-totalpoints-toast {\n    font-size: 2rem; }\n\n:root .levelUp-toast {\n    --height: 0vh !important;\n    z-index: 3;\n    background: #ffa600b3 url('levelUp.png');\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9zdHJ1Y3R1cmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9kaXNwbGF5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzIiwiL1VzZXJzL2hpbGRlZ2FyZGFnbmVzZ2VuYXkvRG9jdW1lbnRzL0FuZEJFWU9ORC9DQU5EWV9DSEFTRV8yMDIwX2lvbmljL2NhbmR5Q2hhc2UyMDIwSW9uaWM1L3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsInNyYy9nbG9iYWwuc2NzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSw2RkFBQTtBQ1BGOztBRFNBO0VBQ0UsMERBQUE7QUNORjs7QURTQTtFQUNFLDBDQUFBO0FDTkY7O0FEU0E7RUFDRSx1Q0FBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7QUNORjs7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjs7QUR1QkE7RUFDRSxzQkFBQTtBQ3BCRjs7QUQ2Q0U7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNoQ0Y7O0FEb0NFO0VBVEEsZ0VBQUE7RUFDQSw2RUFBQTtFQUNBLDBFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RUFBQTtFQUNBLHFFQUFBO0FDdkJGOztBRDJCRTtFQVRBLCtEQUFBO0VBQ0EsMkVBQUE7RUFDQSx5RUFBQTtFQUNBLDBGQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtBQ2RGOztBRGtCRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ0xGOztBRFNFO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDSUY7O0FEQUU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUNhRjs7QURURTtFQVRBLDREQUFBO0VBQ0EsMEVBQUE7RUFDQSxzRUFBQTtFQUNBLGlGQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRUFBQTtBQ3NCRjs7QURsQkU7RUFUQSw2REFBQTtFQUNBLDJFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNB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QUEiLCJmaWxlIjoic3JjL2dsb2JhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJodG1sLmlvcyB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIC5pb24tcGFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjM2RjMmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDYxLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMzZhYmUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItdGVydGlhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM1MjYwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCA4MiwgOTYsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNDg1NGUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCwgIzYzNzBmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zdWNjZXNzIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQzNmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmYzQwOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LCAxOTYsIDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYWMwOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmY2EyMikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYW5nZXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDIzNSwgNjgsIDkwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNjZjNjNGYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2VkNTc2YikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbWVkaXVtIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzkyOTQ5YykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNDYsIDE0OCwgMTU2KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4MDgyODkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgIzlkOWZhNikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYXJrIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi5zcGxpdC1wYW5lLXZpc2libGUgPiAuaW9uLXBhZ2Uuc3BsaXQtcGFuZS1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tcm91dGUsXG5pb24tcm91dGUtcmVkaXJlY3QsXG5pb24tcm91dGVyLFxuaW9uLXNlbGVjdC1vcHRpb24sXG5pb24tbmF2LWNvbnRyb2xsZXIsXG5pb24tbWVudS1jb250cm9sbGVyLFxuaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLFxuaW9uLWFsZXJ0LWNvbnRyb2xsZXIsXG5pb24tbG9hZGluZy1jb250cm9sbGVyLFxuaW9uLW1vZGFsLWNvbnRyb2xsZXIsXG5pb24tcGlja2VyLWNvbnRyb2xsZXIsXG5pb24tcG9wb3Zlci1jb250cm9sbGVyLFxuaW9uLXRvYXN0LWNvbnRyb2xsZXIsXG4uaW9uLXBhZ2UtaGlkZGVuLFxuW2hpZGRlbl0ge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYW4tZ28tYmFjayA+IGlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyk7XG4gIH1cbn1cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5pb24tY2FyZC5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yLFxuaW9uLWNhcmQtaGVhZGVyLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3Ige1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgIDAsICAwKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiAtOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNzcy5tYXAgKi9cbiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCJhdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5sYWJlbCxcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmZvcm0sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbmEsXG5hIGRpdixcbmEgc3BhbixcbmEgaW9uLWljb24sXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbixcbmJ1dHRvbiBkaXYsXG5idXR0b24gc3BhbixcbmJ1dHRvbiBpb24taWNvbixcbmJ1dHRvbiBpb24tbGFiZWwsXG4uaW9uLXRhcHBhYmxlLFxuW3RhcHBhYmxlXSxcblt0YXBwYWJsZV0gZGl2LFxuW3RhcHBhYmxlXSBzcGFuLFxuW3RhcHBhYmxlXSBpb24taWNvbixcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbiBpb24tbGFiZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0YXBwYWJsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFbZGlzYWJsZWRdLFxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmNzcy5tYXAgKi9cbiIsbnVsbCwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuaHRtbDpub3QoLmh5ZHJhdGVkKSBib2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbC5wbHQtcHdhIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnVjdHVyZS5jc3MubWFwICovXG4iLG51bGwsImh0bWwge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5oMiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuXG5zdWIsXG5zdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10eXBvZ3JhcGh5LmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWhpZGUtdXAge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS1kb3duIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi1oaWRlLXNtLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWhpZGUtc20tZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1oaWRlLW1kLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWhpZGUtbWQtZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi1oaWRlLWxnLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWhpZGUtbGctZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24taGlkZS14bC11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24taGlkZS14bC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGlzcGxheS5jc3MubWFwICovXG4iLCIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmdcblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gIFxuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogI0ZGRkRFRjtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiIsIkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MpO1xuQGltcG9ydCB1cmwofkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyk7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MpO1xuOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLyogQ29yZSBDU1MgcmVxdWlyZWQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gd29yayBwcm9wZXJseSAqL1xuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG4vKiBAaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiOyAqL1xuLyogU2V0IHZhcmlhYmxlcyBmb3IgYWxsIE1PREVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOnJvb3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiZmx5aW5nbGVhdGhlclwiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7IH1cbiAgOnJvb3QgaW9uLWhlYWRlciB7XG4gICAgYm94LXNoYWRvdzogLTFweCAyN3B4IDM1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC44Mik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDI3cHggMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggMjdweCAzNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuODIpOyB9XG4gIDpyb290IC50b29sYmFyVGl0bGUge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIDpyb290IC5pb24tcGFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9ncmFwaGljTWF0L2dyYWRpZW50X2JhdHNfMTkyMC5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XG4gIDpyb290IGlvbi10YWItYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwOyB9XG4gIDpyb290IGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiAjZmZhNTAwOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgOnJvb3QgaW9uLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxuICAgIDpyb290IGlvbi10YWItYmFyIHtcbiAgICAgIGhlaWdodDogOCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgOnJvb3QgaW9uLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfSB9XG4gIDpyb290IC5mbGV4Q29sQ2VudGVyZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICA6cm9vdCAuZmxleFJvd0NlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgOnJvb3QgLnJvdW5kZWRPcmFuZ2VCdXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmE1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgY29sb3I6ICNmZmE1MDA7IH1cbiAgOnJvb3QgLmNpcmNsZXNJbWdCZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2NpcmNsZXMucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxuICA6cm9vdCAudGh1bWJuYWlsIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDNyZW07XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgOnJvb3QgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyxcbiAgOnJvb3QgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczo6cGxhY2Vob2xkZXIsXG4gIDpyb290IC5zZWFyY2hiYXItaW5wdXQgLnNjLWlvbi1zZWFyY2hiYXItbWQtaDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDsgfVxuICA6cm9vdCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zLFxuICA6cm9vdCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTIsIDIwMywgMC42KTsgfVxuICA6cm9vdCAuc3RhdGljIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNHZoO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cbiAgICA6cm9vdCAuc3RhdGljIC5tYWluIHtcbiAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgIDpyb290IC5zdGF0aWMgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIDpyb290IC5uZXctcG9pbnRzLXRvYXN0LFxuICA6cm9vdCAubmV3LXRvdGFscG9pbnRzLXRvYXN0IHtcbiAgICAtLWhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogI2ZmMDAwMDk2ICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG4gICAgLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgLS1mb250LWZhbWlseTogXCJmbHlpbmdsZWF0aGVyXCIgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgOnJvb3QgLm5ldy1wb2ludHMtdG9hc3Qge1xuICAgIGZvbnQtc2l6ZTogM3JlbTsgfVxuICA6cm9vdCAubmV3LXRvdGFscG9pbnRzLXRvYXN0IHtcbiAgICBmb250LXNpemU6IDJyZW07IH1cbiAgOnJvb3QgLmxldmVsVXAtdG9hc3Qge1xuICAgIC0taGVpZ2h0OiAwdmggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGJhY2tncm91bmQ6ICNmZmE2MDBiMyB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvbGV2ZWxVcC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XG4iLCJcbkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLyogQ29yZSBDU1MgcmVxdWlyZWQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gd29yayBwcm9wZXJseSAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3NcIjtcblxuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzc1wiO1xuXG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xuLyogQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3NcIjsgKi9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEBpbXBvcnQgXCJpb25pYy5nbG9iYWxzXCI7XG5cbi8vICdsZWZ0LXRvLXJpZ2gnIC0ncmlnaHQtdG8tbGVmdCctICdtdWx0aScgLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG5cbi8qIFNldCB2YXJpYWJsZXMgZm9yIGFsbCBNT0RFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjpyb290IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1mb250LWZhbWlseTogXCJmbHlpbmdsZWF0aGVyXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcblxuICAgIGlvbi1oZWFkZXIge1xuICAgICAgICBib3gtc2hhZG93OiAtMXB4IDI3cHggMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDI3cHggMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDI3cHggMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgICB9XG5cbiAgICAudG9vbGJhclRpdGxlIHtcbiAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW9uLXBhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2dyYXBoaWNNYXQvZ3JhZGllbnRfYmF0c18xOTIwLnBuZyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBpb24tdGFiLWJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICB9XG5cbiAgICAvLyBCUkVBS1BPSU5UUyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vIG1vYmlsZSBsYW5kc2NhcGUgLSBleGNlcHRpb24gOiBpcGhvbmVYIGxhbmRzY2FwZSA9IDgxMnB4ICFcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICBpb24tY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgICAgIGhlaWdodDogOCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0YWJsZXQgcG9ydHJhaXRcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICB9XG5cbiAgICAvLyB0YWJsZXQgbGFuZHNjYXBlIGFuZCArXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICBpb24tY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vICAqKioqIENPTU1PTiBTUEVDUyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC5mbGV4Q29sQ2VudGVyZWQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuZmxleFJvd0NlbnRlcmVkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucm91bmRlZE9yYW5nZUJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLW9yYW5nZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgIGNvbG9yOiAkbWFpbi1vcmFuZ2U7XG4gICAgfVxuXG4gICAgLmNpcmNsZXNJbWdCZyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9jaXJjbGVzLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbCB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgIC8vIGNhbmR5bGlzdCBpb24tc2VhcmNoYmFyICoqKioqKioqKioqKioqKioqKioqKioqKioqID0+IFRPRE86IGNoZWNrIG1vZGVzIC0gc2VsZWN0b3JzXG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyxcbiAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjpwbGFjZWhvbGRlcixcbiAgICAuc2VhcmNoYmFyLWlucHV0IC5zYy1pb24tc2VhcmNoYmFyLW1kLWg6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyxcbiAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5MiwgMjAzLCAwLjYpO1xuICAgIH1cblxuICAgIC8vICoqKioqIHN0YXRpYyBwYWdlcyBzdHlsZSAodGVtcG9yYXJ5KSAqKioqKioqKioqKioqKioqKioqXG4gICAgLnN0YXRpYyB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDR2aDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gICoqKiBUT0FTVCBNRVNTQUdFUyAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICAubmV3LXBvaW50cy10b2FzdCxcbiAgICAubmV3LXRvdGFscG9pbnRzLXRvYXN0IHtcbiAgICAgICAgLS1oZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmYwMDAwOTYgIWltcG9ydGFudDtcbiAgICAgICAgLS1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgICAgICAtLWZvbnQtZmFtaWx5OiBcImZseWluZ2xlYXRoZXJcIiAhaW1wb3J0YW50O1xuXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm5ldy1wb2ludHMtdG9hc3Qge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC5uZXctdG90YWxwb2ludHMtdG9hc3Qge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuXG4gICAgLmxldmVsVXAtdG9hc3Qge1xuICAgICAgICAtLWhlaWdodDogMHZoICFpbXBvcnRhbnQ7IC8vIG92ZXJyaWRlIG5hdGl2ZSBjb250YWluZXJcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYTYwMGIzIHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9sZXZlbFVwLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTs7a0NDRGtDLEVER0M7O0FBa0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ2xEOEMiLCJmaWxlIjoic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgXG4gICRsZXZlbC11cC1iZzogI2ZmYTYwMGIzO1xuICBcbiAgJG1haW4tZGFyazogIzIyMjIyMjtcbiAgJG1haW4tbGlnaHQ6ICNmNGY0ZjQ7XG4gICRzdWItbGlnaHQ6ICNGRkZERUY7XG5cblxuICAvLyBGT05UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICRoMS1mb250c2l6ZTogMnJlbTtcbiAgJGgyLWZvbnRzaXplOiAxLjVyZW07XG4gICRoMy1mb250c2l6ZTogMS4ycmVtO1xuICBcbiAgJGJhc2ljLWZvbnRTaXplOiAxcmVtO1xuICAkeHhzLWZvbnRTaXplOiAxLjVyZW07XG4gICR4cy1mb250U2l6ZTogMS44cmVtO1xuICAkcy1mb250U2l6ZTogMnJlbTtcbiAgJG0tZm9udFNpemU6IDIuN3JlbTtcbiAgJGwtZm9udFNpemU6IDNyZW07XG4gICR4bC1mb250U2l6ZTogNXJlbTtcbiAgJHh4bC1mb250U2l6ZTogN3JlbTtcblxuICAkZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL2ZseWluZ2xlYXRoZXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkZmx5aW5nbGVhdGhlcjogZmx5aW5nbGVhdGhlcjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICR0aXRhbk9uZTogVGl0YW5PbmU7XG5cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iLCI6cm9vdCB7XG4gIC8qLS1pb24tY29sb3ItcHJpbWFyeTogICNmZmE1MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogICNCNENERkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjZmZjMGNiOyAqLyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRhbk9uZTtcbiAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuLyogICRmb250LWZhbWlseS1iYXNlOiBcImZseWluZ19sZWF0aGVybmVja1wiO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktaW9zLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1tZC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktd3AtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7ICovXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--15-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020Ionic5/src/theme/variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! /Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020Ionic5/src/global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map