(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\nhtml.ios ion-modal.modal-card .ion-page {\n  border-radius: inherit;\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 576px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 992px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1200px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n:root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n/* Core CSS required for Ionic components to work properly */\n/* Basic CSS for apps built with Ionic */\n/* Optional CSS utils that can be commented out */\n/* @import \"~@ionic/angular/css/padding.css\";\n@import \"~@ionic/angular/css/float-elements.css\";\n@import \"~@ionic/angular/css/text-alignment.css\";\n@import \"~@ionic/angular/css/text-transformation.css\";\n@import \"~@ionic/angular/css/flex-utils.css\"; */\n/* Set variables for all MODES --------------------------------- */\n:root {\n  --ion-background-color: transparent;\n  --ion-font-family: \"flyingleather\", \"Helvetica Neue\", \"Roboto\", sans-serif;\n  /* customize toast message points/total */ }\n:root ion-header {\n    box-shadow: -1px 27px 35px 5px rgba(0, 0, 0, 0.82);\n    -webkit-box-shadow: -1px 27px 35px 5px rgba(0, 0, 0, 0.82);\n    -moz-box-shadow: -1px 27px 35px 5px rgba(0, 0, 0, 0.82); }\n:root .toolbarTitle {\n    color: orange;\n    font-size: 1.5rem;\n    text-align: center; }\n:root .ion-page {\n    background-image: url('gradient_bats_1920.png');\n    background-size: cover;\n    background-position: center; }\n:root ion-tab-bar {\n    background-color: #ffa500; }\n:root ion-button {\n    color: #ffa500; }\n@media (min-width: 568px) and (max-width: 767px) {\n    :root ion-content {\n      width: 70%;\n      align-self: center; }\n    :root ion-tab-bar {\n      height: 8%;\n      background-color: orange; } }\n@media (min-width: 1024px) {\n    :root ion-content {\n      width: 50%;\n      align-self: center; } }\n:root .flexColCentered {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    align-items: center;\n    justify-content: center; }\n:root .flexRowCentered {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: center; }\n:root .roundedOrangeButton {\n    border: 2px solid #ffa500;\n    background-color: transparent;\n    border-radius: 50px;\n    font-family: TitanOne;\n    color: #ffa500; }\n:root .circlesImgBg {\n    background-image: url('circles.png');\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n:root .thumbnail {\n    height: 3rem;\n    width: 3rem;\n    align-content: center;\n    align-items: center;\n    overflow: hidden;\n    border-radius: 50%; }\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder,\n  :root .searchbar-input .sc-ion-searchbar-md-h::-webkit-input-placeholder {\n    color: black !important;\n    font-size: 1.5rem !important;\n    opacity: 1 !important; }\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-ios::-moz-placeholder,\n  :root .searchbar-input .sc-ion-searchbar-md-h::-moz-placeholder {\n    color: black !important;\n    font-size: 1.5rem !important;\n    opacity: 1 !important; }\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder,\n  :root .searchbar-input .sc-ion-searchbar-md-h::-ms-input-placeholder {\n    color: black !important;\n    font-size: 1.5rem !important;\n    opacity: 1 !important; }\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-ios::placeholder,\n  :root .searchbar-input .sc-ion-searchbar-md-h::placeholder {\n    color: black !important;\n    font-size: 1.5rem !important;\n    opacity: 1 !important; }\n:root .searchbar-input.sc-ion-searchbar-ios,\n  :root .searchbar-input.sc-ion-searchbar-md-h {\n    border: 3px solid orange;\n    background-color: rgba(255, 192, 203, 0.6); }\n:root .static {\n    width: 90%;\n    align-self: center;\n    padding-top: 4vh;\n    border: 2px solid orange;\n    border-radius: 5px; }\n:root .static .main {\n      padding: 3%;\n      color: orange;\n      font-size: 1rem; }\n:root .static .bottom-container {\n      text-align: center; }\n:root .new-points-toast,\n  :root .new-totalpoints-toast {\n    --height: 10vh !important;\n    --background: #ff000096 !important;\n    --color: orange !important;\n    --opacity: 1 !important;\n    --font-family: \"flyingleather\" !important;\n    text-align: center; }\n:root .new-points-toast {\n    font-size: 3rem; }\n:root .new-totalpoints-toast {\n    font-size: 2rem; }\n:root .levelUp-toast {\n    --height: 0vh !important;\n    z-index: 3;\n    background: #ffa600b3 url('levelUp.png');\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvZ2xvYmFsLnNjc3MiLCJzcmMvZ2xvYmFsLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9jb3JlLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5nbG9iYWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51Lmlvcy52YXJzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51Lm1kLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvc3RydWN0dXJlLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90eXBvZ3JhcGh5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZGlzcGxheS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyIsIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztFQ1NFO0FDREY7RUFDRSw2RkFBQTtBQ1BGO0FEU0E7RUFDRSwwREFBQTtBQ05GO0FEU0E7RUFDRSwwQ0FBQTtBQ05GO0FEU0E7RUFDRSx1Q0FBQTtBQ05GO0FEU0E7RUFDRSxnQkFBQTtBQ05GO0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7QUR1QkE7RUFDRSxzQkFBQTtBQ3BCRjtBRDZDRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ2hDRjtBRG9DRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ3ZCRjtBRDJCRTtFQVRBLCtEQUFBO0VBQ0EsMkVBQUE7RUFDQSx5RUFBQTtFQUNBLDBGQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtBQ2RGO0FEa0JFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDTEY7QURTRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLG1GQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ0lGO0FEQUU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUNhRjtBRFRFO0VBVEEsNERBQUE7RUFDQSwwRUFBQTtFQUNBLHNFQUFBO0VBQ0EsaUZBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FDc0JGO0FEbEJFO0VBVEEsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7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RVEseUJnQnZGZTtJaEJ3RmYsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixxQmdCM0NhO0loQjRDYixjZ0IzRmUsRUFBQTtBaEJjdkI7SUFpRlEsb0NBQTBEO0lBQzFELHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsNEJBQTRCLEVBQUE7QUFwRnBDO0lBd0ZRLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7QUE3RjFCOzs7SUFvR1EsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixxQkFBcUIsRUFBQTtBQXRHN0I7OztJQW9HUSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLHFCQUFxQixFQUFBO0FBdEc3Qjs7O0lBb0dRLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIscUJBQXFCLEVBQUE7QUF0RzdCOzs7SUFvR1EsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixxQkFBcUIsRUFBQTtBQXRHN0I7O0lBMEdRLHdCQUF3QjtJQUN4QiwwQ0FBMEMsRUFBQTtBQTNHbEQ7SUFnSFEsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFBO0FBcEgxQjtNQXVIWSxXQUFXO01BQ1gsYUFBYTtNQUNiLGVBQWUsRUFBQTtBQXpIM0I7TUE0SFksa0JBQWtCLEVBQUE7QUE1SDlCOztJQW1JUSx5QkFBUztJQUNULGtDQUFhO0lBQ2IsMEJBQVE7SUFDUix1QkFBVTtJQUNWLHlDQUFjO0lBRWQsa0JBQWtCLEVBQUE7QUF6STFCO0lBNElRLGVBQWUsRUFBQTtBQTVJdkI7SUErSVEsZUFBZSxFQUFBO0FBL0l2QjtJQW1KUSx3QkFBUztJQUNULFVBQVU7SUFDVix3Q0FBOEQ7SUFDOUQsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvZ2xvYmFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwIEdsb2JhbCBDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlIHN0eWxlcyBhcmUgZm9yXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXG4gKiB1c2VkIGFzIGFuIGVudHJ5IHBvaW50IHRvIGltcG9ydCBvdGhlciBDU1MvU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dCBDU1MuXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ2xvYmFsLXN0eWxlc2hlZXRzXG4gKi9cbkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLyogQ29yZSBDU1MgcmVxdWlyZWQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gd29yayBwcm9wZXJseSAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3NcIjtcblxuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzc1wiO1xuXG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xuLyogQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3NcIjsgKi9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEBpbXBvcnQgXCJpb25pYy5nbG9iYWxzXCI7XG5cbi8vICdsZWZ0LXRvLXJpZ2gnIC0ncmlnaHQtdG8tbGVmdCctICdtdWx0aScgLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG5cbi8qIFNldCB2YXJpYWJsZXMgZm9yIGFsbCBNT0RFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjpyb290IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1mb250LWZhbWlseTogXCJmbHlpbmdsZWF0aGVyXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcblxuICAgIGlvbi1oZWFkZXIge1xuICAgICAgICBib3gtc2hhZG93OiAtMXB4IDI3cHggMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDI3cHggMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDI3cHggMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgICB9XG5cbiAgICAudG9vbGJhclRpdGxlIHtcbiAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW9uLXBhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2dyYXBoaWNNYXQvZ3JhZGllbnRfYmF0c18xOTIwLnBuZyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBpb24tdGFiLWJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICRtYWluLW9yYW5nZTtcbiAgICB9XG5cbiAgICAvLyBCUkVBS1BPSU5UUyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vIG1vYmlsZSBsYW5kc2NhcGUgLSBleGNlcHRpb24gOiBpcGhvbmVYIGxhbmRzY2FwZSA9IDgxMnB4ICFcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICBpb24tY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgICAgIGhlaWdodDogOCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0YWJsZXQgcG9ydHJhaXRcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICB9XG5cbiAgICAvLyB0YWJsZXQgbGFuZHNjYXBlIGFuZCArXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICBpb24tY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC5mbGV4Q29sQ2VudGVyZWQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuZmxleFJvd0NlbnRlcmVkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucm91bmRlZE9yYW5nZUJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLW9yYW5nZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0YW5PbmU7XG4gICAgICAgIGNvbG9yOiAkbWFpbi1vcmFuZ2U7XG4gICAgfVxuXG4gICAgLmNpcmNsZXNJbWdCZyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9jaXJjbGVzLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLnRodW1ibmFpbCB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgIC8vIGNhbmR5bGlzdCBpb24tc2VhcmNoYmFyICoqKioqKioqKioqKioqKioqKioqKioqKioqID0+IFRPRE86IGNoZWNrIG1vZGVzIC0gc2VsZWN0b3JzXG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyxcbiAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjpwbGFjZWhvbGRlcixcbiAgICAuc2VhcmNoYmFyLWlucHV0IC5zYy1pb24tc2VhcmNoYmFyLW1kLWg6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyxcbiAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5MiwgMjAzLCAwLjYpO1xuICAgIH1cblxuICAgIC8vIHN0YXRpYyBwYWdlcyBzdHlsZSAodGVtcG9yYXJ5KSAqKioqKioqKioqKioqKioqKioqXG4gICAgLnN0YXRpYyB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDR2aDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBjdXN0b21pemUgdG9hc3QgbWVzc2FnZSBwb2ludHMvdG90YWwgKi9cblxuICAgIC5uZXctcG9pbnRzLXRvYXN0LFxuICAgIC5uZXctdG90YWxwb2ludHMtdG9hc3Qge1xuICAgICAgICAtLWhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZjAwMDA5NiAhaW1wb3J0YW50O1xuICAgICAgICAtLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbiAgICAgICAgLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tZm9udC1mYW1pbHk6IFwiZmx5aW5nbGVhdGhlclwiICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubmV3LXBvaW50cy10b2FzdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gICAgLm5ldy10b3RhbHBvaW50cy10b2FzdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAubGV2ZWxVcC10b2FzdCB7XG4gICAgICAgIC0taGVpZ2h0OiAwdmggIWltcG9ydGFudDsgLy8gb3ZlcnJpZGUgbmF0aXZlIGNvbnRhaW5lclxuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZhNjAwYjMgdXJsKFwic3JjL2Fzc2V0cy9ncmFwaGljTWF0L2xldmVsVXAucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG59XG4iLCIvKlxuICogQXBwIEdsb2JhbCBDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlIHN0eWxlcyBhcmUgZm9yXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXG4gKiB1c2VkIGFzIGFuIGVudHJ5IHBvaW50IHRvIGltcG9ydCBvdGhlciBDU1MvU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dCBDU1MuXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ2xvYmFsLXN0eWxlc2hlZXRzXG4gKi9cbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MpO1xuQGltcG9ydCB1cmwofkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyk7XG5AaW1wb3J0IHVybCh+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzKTtcbkBpbXBvcnQgdXJsKH5AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MpO1xuOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuLyogQ29yZSBDU1MgcmVxdWlyZWQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gd29yayBwcm9wZXJseSAqL1xuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG4vKiBAaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiOyAqL1xuLyogU2V0IHZhcmlhYmxlcyBmb3IgYWxsIE1PREVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuOnJvb3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiZmx5aW5nbGVhdGhlclwiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIC8qIGN1c3RvbWl6ZSB0b2FzdCBtZXNzYWdlIHBvaW50cy90b3RhbCAqLyB9XG4gIDpyb290IGlvbi1oZWFkZXIge1xuICAgIGJveC1zaGFkb3c6IC0xcHggMjdweCAzNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuODIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAyN3B4IDM1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC44Mik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDI3cHggMzVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgyKTsgfVxuICA6cm9vdCAudG9vbGJhclRpdGxlIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICA6cm9vdCAuaW9uLXBhZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvZ3JhcGhpY01hdC9ncmFkaWVudF9iYXRzXzE5MjAucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICA6cm9vdCBpb24tdGFiLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDsgfVxuICA6cm9vdCBpb24tYnV0dG9uIHtcbiAgICBjb2xvcjogI2ZmYTUwMDsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIDpyb290IGlvbi1jb250ZW50IHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cbiAgICA6cm9vdCBpb24tdGFiLWJhciB7XG4gICAgICBoZWlnaHQ6IDglO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIDpyb290IGlvbi1jb250ZW50IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH0gfVxuICA6cm9vdCAuZmxleENvbENlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgOnJvb3QgLmZsZXhSb3dDZW50ZXJlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIDpyb290IC5yb3VuZGVkT3JhbmdlQnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZhNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgIGNvbG9yOiAjZmZhNTAwOyB9XG4gIDpyb290IC5jaXJjbGVzSW1nQmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvZ3JhcGhpY01hdC9jaXJjbGVzLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cbiAgOnJvb3QgLnRodW1ibmFpbCB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4gIDpyb290IC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3MsXG4gIDpyb290IC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6OnBsYWNlaG9sZGVyLFxuICA6cm9vdCAuc2VhcmNoYmFyLWlucHV0IC5zYy1pb24tc2VhcmNoYmFyLW1kLWg6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDsgfVxuICA6cm9vdCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zLFxuICA6cm9vdCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTIsIDIwMywgMC42KTsgfVxuICA6cm9vdCAuc3RhdGljIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNHZoO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cbiAgICA6cm9vdCAuc3RhdGljIC5tYWluIHtcbiAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgIDpyb290IC5zdGF0aWMgLmJvdHRvbS1jb250YWluZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIDpyb290IC5uZXctcG9pbnRzLXRvYXN0LFxuICA6cm9vdCAubmV3LXRvdGFscG9pbnRzLXRvYXN0IHtcbiAgICAtLWhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogI2ZmMDAwMDk2ICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG4gICAgLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgLS1mb250LWZhbWlseTogXCJmbHlpbmdsZWF0aGVyXCIgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgOnJvb3QgLm5ldy1wb2ludHMtdG9hc3Qge1xuICAgIGZvbnQtc2l6ZTogM3JlbTsgfVxuICA6cm9vdCAubmV3LXRvdGFscG9pbnRzLXRvYXN0IHtcbiAgICBmb250LXNpemU6IDJyZW07IH1cbiAgOnJvb3QgLmxldmVsVXAtdG9hc3Qge1xuICAgIC0taGVpZ2h0OiAwdmggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGJhY2tncm91bmQ6ICNmZmE2MDBiMyB1cmwoXCJzcmMvYXNzZXRzL2dyYXBoaWNNYXQvbGV2ZWxVcC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XG4iLG51bGwsImh0bWwuaW9zIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbC5tZCB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXNlY29uZGFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMzZGMyZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiwgNjEsIDE5NCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUsICMzNmFiZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCwgIzUwYzhmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci10ZXJ0aWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSwgIzUyNjBmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IsIDgyLCA5NiwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUsICM0ODU0ZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50LCAjNjM3MGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXN1Y2Nlc3Mge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzJkZDM2ZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiwgNDUsIDIxMSwgMTExKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUsICMyOGJhNjIpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQsICM0MmQ3N2QpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itd2FybmluZyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjNDA5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctcmdiLCAyNTUsIDE5NiwgOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjZTBhYzA4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy10aW50LCAjZmZjYTIyKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWRhbmdlciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNlYjQ0NWEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiwgMjM1LCA2OCwgOTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSwgI2NmM2M0ZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50LCAjZWQ1NzZiKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWxpZ2h0IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1tZWRpdW0ge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTI5NDljKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IsIDE0NiwgMTQ4LCAxNTYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzgwODI4OSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjOWQ5ZmE2KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWRhcmsge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzIyMjQyOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiwgMzQsIDM2LCA0MCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlLCAjMWUyMDIzKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50LCAjMzgzYTNlKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZ2Uge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMDtcbn1cblxuLnNwbGl0LXBhbmUtdmlzaWJsZSA+IC5pb24tcGFnZS5zcGxpdC1wYW5lLW1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1yb3V0ZSxcbmlvbi1yb3V0ZS1yZWRpcmVjdCxcbmlvbi1yb3V0ZXIsXG5pb24tc2VsZWN0LW9wdGlvbixcbmlvbi1uYXYtY29udHJvbGxlcixcbmlvbi1tZW51LWNvbnRyb2xsZXIsXG5pb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsXG5pb24tYWxlcnQtY29udHJvbGxlcixcbmlvbi1sb2FkaW5nLWNvbnRyb2xsZXIsXG5pb24tbW9kYWwtY29udHJvbGxlcixcbmlvbi1waWNrZXItY29udHJvbGxlcixcbmlvbi1wb3BvdmVyLWNvbnRyb2xsZXIsXG5pb24tdG9hc3QtY29udHJvbGxlcixcbi5pb24tcGFnZS1oaWRkZW4sXG5baGlkZGVuXSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZ2UtaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhbi1nby1iYWNrID4gaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHRtbC5wbHQtaW9zLnBsdC1oeWJyaWQsIGh0bWwucGx0LWlvcy5wbHQtcHdhIHtcbiAgLS1pb24tc3RhdHVzYmFyLXBhZGRpbmc6IDIwcHg7XG59XG5cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKTtcbiAgfVxufVxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cbmlvbi1jYXJkLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3IsXG5pb24tY2FyZC1oZWFkZXIuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvciB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAgMCwgIDApO1xufVxuXG4ubWVudS1jb250ZW50LW9wZW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IC04cHggMCA0MnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbltkaXI9cnRsXS5pb3MgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiA4cHggMCA0MnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi5tZCAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1wdXNoIHtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY3NzLm1hcCAqL1xuIixudWxsLG51bGwsbnVsbCxudWxsLG51bGwsImF1ZGlvLFxuY2FudmFzLFxucHJvZ3Jlc3MsXG52aWRlbyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnByZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmxhYmVsLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuZm9ybSxcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3Qge1xuICBtYXJnaW46IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9cmVzZXRdLFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuYSxcbmEgZGl2LFxuYSBzcGFuLFxuYSBpb24taWNvbixcbmEgaW9uLWxhYmVsLFxuYnV0dG9uLFxuYnV0dG9uIGRpdixcbmJ1dHRvbiBzcGFuLFxuYnV0dG9uIGlvbi1pY29uLFxuYnV0dG9uIGlvbi1sYWJlbCxcbi5pb24tdGFwcGFibGUsXG5bdGFwcGFibGVdLFxuW3RhcHBhYmxlXSBkaXYsXG5bdGFwcGFibGVdIHNwYW4sXG5bdGFwcGFibGVdIGlvbi1pY29uLFxuW3RhcHBhYmxlXSBpb24tbGFiZWwsXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbmEgaW9uLWxhYmVsLFxuYnV0dG9uIGlvbi1sYWJlbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuW3RhcHBhYmxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYVtkaXNhYmxlZF0sXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUuY3NzLm1hcCAqL1xuIixudWxsLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG59XG5cbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuXG5odG1sOm5vdCguaHlkcmF0ZWQpIGJvZHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLnBsdC1wd2Ege1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAtbXMtY29udGVudC16b29taW5nOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteTogbm9uZTtcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3RydWN0dXJlLmNzcy5tYXAgKi9cbiIsbnVsbCwiaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuaDMge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXR5cG9ncmFwaHkuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLWhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS11cCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1oaWRlLWRvd24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWhpZGUtc20tdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5pb24taGlkZS1zbS1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWhpZGUtbWQtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pb24taGlkZS1tZC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWhpZGUtbGctdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pb24taGlkZS1sZy1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1oaWRlLXhsLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1oaWRlLXhsLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kaXNwbGF5LmNzcy5tYXAgKi9cbiIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZ1xuXG5cbjpyb290IHtcblxuLyotLWlvbi1jb2xvci1wcmltYXJ5OiAgI2ZmYTUwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAgI0I0Q0RGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNmZmMwY2I7ICovXG5cblxuXG5cbiAgICAkY29sb3JzOiAoXG4gICAgICBkYW5nZXI6ICAgICAjZjUzZDNkLFxuICAgICAgbGlnaHQ6ICAgICAgI2Y0ZjRmNCxcbiAgICAgIGN1c3RvbUNvbG9yOiB0cmFuc3BhcmVudFxuICAgICk7XG5cbiAgfVxuXG4gICRtYWluLW9yYW5nZTogI2ZmYTUwMDtcbiAgJHN1Yi1vcmFuZ2UgOiNmZjllMjk7O1xuICAkbGlnaHQtb3JhbmdlOiAjZmZlZWRmO1xuICBcbiAgJG1haW4tYmx1ZTogI2IxYzlmYjtcblxuICAkbWFpbi1waW5rOiAjZmZjMGNiO1xuICAkc3ViLXBpbms6ICAjZmJiMWYxO1xuXG4gICRtYWluLXJlZDogI2ZmMDAwMDtcbiAgJHN1Yi1yZWQ6ICNmZjAwMDA5NjtcblxuICAkbWFpbi1wdXJwbGU6ICMzZTE3M2I7XG4gICRzdWItcHVycGxlOiAjNjE3OEY1O1xuICBcbiAgJGxldmVsLXVwLWJnOiAjZmZhNjAwYjM7XG4gIFxuICAkbWFpbi1kYXJrOiAjMjIyMjIyO1xuICAkbWFpbi1saWdodDogI2Y0ZjRmNDtcbiAgJHN1Yi1saWdodDogI0ZGRkRFRjtcblxuXG4gIC8vIEZPTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgJGgxLWZvbnRzaXplOiAycmVtO1xuICAkaDItZm9udHNpemU6IDEuNXJlbTtcbiAgJGgzLWZvbnRzaXplOiAxLjJyZW07XG4gIFxuICAkYmFzaWMtZm9udFNpemU6IDFyZW07XG4gICR4eHMtZm9udFNpemU6IDEuNXJlbTtcbiAgJHhzLWZvbnRTaXplOiAxLjhyZW07XG4gICRzLWZvbnRTaXplOiAycmVtO1xuICAkbS1mb250U2l6ZTogMi43cmVtO1xuICAkbC1mb250U2l6ZTogM3JlbTtcbiAgJHhsLWZvbnRTaXplOiA1cmVtO1xuICAkeHhsLWZvbnRTaXplOiA3cmVtO1xuXG4gICRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogZmx5aW5nbGVhdGhlcjtcbiAgICAgIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XG4gICRmbHlpbmdsZWF0aGVyOiBmbHlpbmdsZWF0aGVyO1xuXG4gIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFRpdGFuT25lO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9UaXRhbk9uZS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJHRpdGFuT25lOiBUaXRhbk9uZTtcblxuXG4vKiAgJGZvbnQtZmFtaWx5LWJhc2U6IFwiZmx5aW5nX2xlYXRoZXJuZWNrXCI7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS1pb3MtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LW1kLWJhc2U6ICRmb250LWZhbWlseS1iYXNlO1xuICAgICRmb250LWZhbWlseS13cC1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTsgKi9cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ":root {\n  /*--ion-color-primary:  #ffa500;\n  --ion-color-secondary:  #B4CDFF;\n  --ion-color-tertiary: #ffc0cb; */ }\n\n@font-face {\n  font-family: flyingleather;\n  src: url('flyingleather.ttf') format(\"truetype\"); }\n\n@font-face {\n  font-family: TitanOne;\n  src: url('TitanOne-Regular.ttf') format(\"truetype\"); }\n\n/*  $font-family-base: \"flying_leatherneck\";\n    $font-family-md-base: $font-family-base;\n    $font-family-ios-base: $font-family-base;\n    $font-family-md-base: $font-family-base;\n    $font-family-wp-base: $font-family-base; */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWxkZWdhcmRhZ25lc2dlbmF5L0RvY3VtZW50cy9BbmRCRVlPTkQvQ0FORFlfQ0hBU0VfMjAyMF9pb25pYy9jYW5keUNoYXNlMjAyMElvbmljNS9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFQTs7a0NDRmtDLEVESUM7O0FBb0RqQztFQUNJLDBCQUEwQjtFQUMxQixnREFBK0QsRUFBQTs7QUFHbkU7RUFDSSxxQkFBcUI7RUFDckIsbURBQWtFLEVBQUE7O0FBSXhFOzs7OzhDQ3JEOEMiLCJmaWxlIjoic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nXG5cblxuOnJvb3Qge1xuXG4vKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi9cblxuXG5cblxuICAgICRjb2xvcnM6IChcbiAgICAgIGRhbmdlcjogICAgICNmNTNkM2QsXG4gICAgICBsaWdodDogICAgICAjZjRmNGY0LFxuICAgICAgY3VzdG9tQ29sb3I6IHRyYW5zcGFyZW50XG4gICAgKTtcblxuICB9XG5cbiAgJG1haW4tb3JhbmdlOiAjZmZhNTAwO1xuICAkc3ViLW9yYW5nZSA6I2ZmOWUyOTs7XG4gICRsaWdodC1vcmFuZ2U6ICNmZmVlZGY7XG4gIFxuICAkbWFpbi1ibHVlOiAjYjFjOWZiO1xuXG4gICRtYWluLXBpbms6ICNmZmMwY2I7XG4gICRzdWItcGluazogICNmYmIxZjE7XG5cbiAgJG1haW4tcmVkOiAjZmYwMDAwO1xuICAkc3ViLXJlZDogI2ZmMDAwMDk2O1xuXG4gICRtYWluLXB1cnBsZTogIzNlMTczYjtcbiAgJHN1Yi1wdXJwbGU6ICM2MTc4RjU7XG4gIFxuICAkbGV2ZWwtdXAtYmc6ICNmZmE2MDBiMztcbiAgXG4gICRtYWluLWRhcms6ICMyMjIyMjI7XG4gICRtYWluLWxpZ2h0OiAjZjRmNGY0O1xuICAkc3ViLWxpZ2h0OiAjRkZGREVGO1xuXG5cbiAgLy8gRk9OVFMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAkaDEtZm9udHNpemU6IDJyZW07XG4gICRoMi1mb250c2l6ZTogMS41cmVtO1xuICAkaDMtZm9udHNpemU6IDEuMnJlbTtcbiAgXG4gICRiYXNpYy1mb250U2l6ZTogMXJlbTtcbiAgJHh4cy1mb250U2l6ZTogMS41cmVtO1xuICAkeHMtZm9udFNpemU6IDEuOHJlbTtcbiAgJHMtZm9udFNpemU6IDJyZW07XG4gICRtLWZvbnRTaXplOiAyLjdyZW07XG4gICRsLWZvbnRTaXplOiAzcmVtO1xuICAkeGwtZm9udFNpemU6IDVyZW07XG4gICR4eGwtZm9udFNpemU6IDdyZW07XG5cbiAgJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmbHlpbmdsZWF0aGVyO1xuICAgICAgc3JjOiB1cmwoc3JjL2Fzc2V0cy9mb250cy9mbHlpbmdsZWF0aGVyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO31cbiAgJGZseWluZ2xlYXRoZXI6IGZseWluZ2xlYXRoZXI7XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gICAgICBzcmM6IHVybChzcmMvYXNzZXRzL2ZvbnRzL1RpdGFuT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7fVxuICAkdGl0YW5PbmU6IFRpdGFuT25lO1xuXG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIiwiOnJvb3Qge1xuICAvKi0taW9uLWNvbG9yLXByaW1hcnk6ICAjZmZhNTAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICAjQjRDREZGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI2ZmYzBjYjsgKi8gfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGZseWluZ2xlYXRoZXI7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvZmx5aW5nbGVhdGhlci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0YW5PbmU7XG4gIHNyYzogdXJsKHNyYy9hc3NldHMvZm9udHMvVGl0YW5PbmUtUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qICAkZm9udC1mYW1pbHktYmFzZTogXCJmbHlpbmdfbGVhdGhlcm5lY2tcIjtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiAkZm9udC1mYW1pbHktYmFzZTtcbiAgICAkZm9udC1mYW1pbHktbWQtYmFzZTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gICAgJGZvbnQtZmFtaWx5LXdwLWJhc2U6ICRmb250LWZhbWlseS1iYXNlOyAqL1xuIl19 */", '', '']]

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