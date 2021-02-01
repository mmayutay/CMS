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
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
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


    __webpack_exports__["default"] = "<ion-app [class.dark-theme]=\"dark\">\r\n    <ion-split-pane contentId=\"main-content\">\r\n\r\n        <ion-menu contentId=\"main-content\">\r\n            <ion-content>\r\n                <ion-list lines=\"none\">\r\n                    <ion-list-header>\r\n                        Conference\r\n                    </ion-list-header>\r\n                    <ion-menu-toggle autoHide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n                        <ion-item [routerLink]=\"p.url\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" [name]=\"p.icon + '-outline'\"></ion-icon>\r\n                            <ion-label>\r\n                                {{p.title}}\r\n                            </ion-label>\r\n                        </ion-item>\r\n\r\n                    </ion-menu-toggle>\r\n                </ion-list>\r\n\r\n                <ion-item>\r\n                    <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\r\n                    <ion-label>\r\n                        Dark Mode\r\n                    </ion-label>\r\n                    <ion-toggle [(ngModel)]=\"dark\"></ion-toggle>\r\n                </ion-item>\r\n\r\n                <ion-list lines=\"none\">\r\n                    <ion-list-header>\r\n                        Account\r\n                    </ion-list-header>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item routerLink=\"/account\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n                            <ion-label>\r\n                                Account\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item routerLink=\"/support\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"help\"></ion-icon>\r\n                            <ion-label>\r\n                                Support\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item button (click)=\"logout()\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\r\n                            <ion-label>\r\n                                Logout\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n                </ion-list>\r\n\r\n                <ion-list lines=\"none\">\r\n                    <ion-list-header>\r\n                        Tutorial\r\n                    </ion-list-header>\r\n                    <ion-menu-toggle autoHide=\"false\">\r\n                        <ion-item button (click)=\"openTutorial()\" detail=\"false\">\r\n                            <ion-icon slot=\"start\" name=\"hammer\"></ion-icon>\r\n                            <ion-label>Show Tutorial</ion-label>\r\n                        </ion-item>\r\n                    </ion-menu-toggle>\r\n                </ion-list>\r\n            </ion-content>\r\n        </ion-menu>\r\n\r\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n\r\n    </ion-split-pane>\r\n\r\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAccountHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!-- *ngIf=\"username\"  -->\r\n<ion-content>\r\n    <ion-card class=\"card\">\r\n        <div class=\"ion-padding-bottom ion-text-center\">\r\n            <img src=\"../../../assets/img/avatar.png\" alt=\"avatar\">\r\n            <!-- <h2>{{ username }}</h2> -->\r\n        </div>\r\n        <div>\r\n            <ion-tabs>\r\n                <ion-tab-bar slot=\"bottom\">\r\n\r\n                    <ion-tab-button>\r\n                        <ion-icon name=\"person\"></ion-icon>\r\n                        <ion-label>AUXILIARY</ion-label>\r\n                        <ion-select placeholder=\"View Auxiliary\" [(ngModel)]=\"auxliary\" (ionChange)=\"optAuxiliary()\">\r\n                            <ion-select-option value=\"Kids\">Blessed Kids</ion-select-option>\r\n                            <ion-select-option value=\"Youth\">Blessed Youth(13-21)</ion-select-option>\r\n                            <ion-select-option value=\"Single\">Blessed Singles(Singles 22 up)</ion-select-option>\r\n                            <ion-select-option value=\"Married Men\">Blessed Men(Married men)</ion-select-option>\r\n                            <ion-select-option value=\"Married Women\">Blessed Women(Married women)</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-tab-button>\r\n\r\n                    <ion-tab-button>\r\n                        <ion-icon name=\"person\"></ion-icon>\r\n                        <ion-label>MINISTRIES</ion-label>\r\n                        <ion-select [(ngModel)]=\"ministries\" (ionChange)=\"optMinistry()\" placeholder=\"View Ministry\">\r\n                            <ion-select-option value=\"Praise And Worship\">Praise & Worship</ion-select-option>\r\n                            <ion-select-option value=\"Multimedia\">Multimedia</ion-select-option>\r\n                            <ion-select-option value=\"Hospitality\">Hospitality</ion-select-option>\r\n                            <ion-select-option value=\"Blessedkids\">Blessed Kidz</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-tab-button>\r\n\r\n                    <ion-tab-button routerLink=\"/create-new-user\">\r\n                        <ion-icon name=\"person-add\"></ion-icon>\r\n                        <ion-label>ADD NEW USER</ion-label>\r\n                    </ion-tab-button>\r\n                </ion-tab-bar>\r\n            </ion-tabs>\r\n        </div>\r\n    </ion-card>\r\n    <ion-card class=\"ionCard\">\r\n        <div class=\"container\">\r\n            <div class=\"column\">\r\n                <h1>PERSONAL INFORMATION</h1>\r\n                <hr class=\"solid\">\r\n                <p>Fullname: {{holder.firstname}} {{holder.lastname}}</p>\r\n                <p>Birthday: {{holder.birthday}}</p>\r\n                <p>Age: {{holder.age}}</p>\r\n                <p>Address: {{holder.address}}</p>\r\n                <p>Marital Status: {{holder.marital_status}}</p>\r\n                <p>Email: {{holder.email}}</p>\r\n                <p>Contact Number: {{holder.contact_number}}</p>\r\n                <p>Facebook: {{holder.facebook}}</p>\r\n                <p>Instagram: {{holder.instagram}}</p>\r\n                <p>Twitter: {{holder.twitter}}</p>\r\n                <p>Leader: {{holder.leader}}</p>\r\n            <button [routerLink]=\"['/modal-page']\">UPDATE INFORMATION</button>\r\n            </div>\r\n        </div>\r\n    </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auxiliary/auxiliary.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auxiliary/auxiliary.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuxiliaryAuxiliaryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-icon name=\"arrow-back\" [routerLink]=\"['/account']\"></ion-icon>\r\n        <ion-title>{{ type }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div style=\"overflow-x:auto;\">\r\n        <table>\r\n          <tr>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Age</th>\r\n          </tr>\r\n          <tr>\r\n            <td>Jill</td>\r\n            <td>Smith</td>\r\n            <td>50</td>\r\n          </tr>\r\n        </table>\r\n    </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ministries/ministries.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ministries/ministries.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMinistriesMinistriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-icon name=\"arrow-back\" [routerLink]=\"['/account']\"></ion-icon>\r\n        <ion-title>{{ type }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div style=\"overflow-x:auto;\">\r\n        <table>\r\n          <tr>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Age</th>\r\n          </tr>\r\n          <tr>\r\n            <td>Jill</td>\r\n            <td>Smith</td>\r\n            <td>50</td>\r\n          </tr>\r\n        </table>\r\n    </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-page/modal-page.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-page/modal-page.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalPageModalPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <!-- <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons> -->\n      <ion-icon name=\"arrow-back\" [routerLink]=\"['/account']\"></ion-icon>\n      <ion-title>Update Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <ion-card-content>\n          <form #updateForm=\"ngForm\" novalidate>\n              <ion-list lines=\"none\">\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Lastname</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Lastname\" name=\"Lastname\" type=\"text\" #lastname=\"ngModel\" required>\n                      {{ update.newUser.lastname}}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Firstname</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Firstname\" name=\"Firstname\" type=\"text\" #firstname=\"ngModel\" required>\n                      {{ update.newUser.firstname }}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Birthday</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Birthday\" name=\"Birthday\" type=\"text\" #birthday=\"ngModel\" required>\n                      {{ update.newUser.birthday }}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Age</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Age\" name=\"Age\" type=\"number\" #age=\"ngModel\" required>\n                      {{ update.newUser.age}}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Address</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Address\" name=\"Address\" type=\"text\" #address=\"ngModel\" required>\n                      {{ update.newUser.address }}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Marital Status</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Marital_status\" name=\"Marital_status\" type=\"text\" #maritalstatus=\"ngModel\" required>\n                      {{ update.newUser.marital_status }}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Email</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Email\" name=\"Email\" type=\"text\" #email=\"ngModel\" required>\n                      {{ update.newUser.email }}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Contact Number</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Contact_number\" name=\"Contact_number\" type=\"text\" #contactnumber=\"ngModel\" required>\n                        {{ update.newUser.contact_number }}</ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Facebook</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Facebook\" name=\"Facebook\" type=\"text\" #facebook=\"ngModel\" required>\n                      {{ update.newUser.facebook }}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Instagram</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Instagram\" name=\"Instagram\" type=\"text\" #instagram=\"ngModel\" required>\n                      {{ update.newUser.instagram }}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Twitter</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Twitter\" name=\"Twitter\" type=\"text\" #twitter=\"ngModel\" required>\n                      {{ update.newUser.twitter }}\n                      </ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label position=\"stacked\" color=\"primary\">Category</ion-label>\n                      <ion-input [(ngModel)]=\"update.newUser.Category\" name=\"Category\" type=\"text\" #category=\"ngModel\" required>\n                      {{ update.newUser.category }}\n                      </ion-input>\n                  </ion-item>\n              </ion-list>\n\n              <div class=\"ion-padding\">\n                  <ion-button (click)=\"onUpdate(updateForm)\" [disabled]=\"updateForm.invalid\" type=\"submit\" expand=\"block\">Update</ion-button>\n              </div>\n          </form>\n      </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
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

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-account-account-module */
        "pages-account-account-module").then(__webpack_require__.bind(null,
        /*! ./pages/account/account.module */
        "./src/app/pages/account/account.module.ts")).then(function (m) {
          return m.AccountModule;
        });
      }
    }, {
      path: 'support',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-support-support-module */
        "pages-support-support-module").then(__webpack_require__.bind(null,
        /*! ./pages/support/support.module */
        "./src/app/pages/support/support.module.ts")).then(function (m) {
          return m.SupportModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'create-new-user',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-signup-signup-module */
        "pages-signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./pages/signup/signup.module */
        "./src/app/pages/signup/signup.module.ts")).then(function (m) {
          return m.SignUpModule;
        });
      }
    }, {
      path: 'app',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-page-tabs-page-module */
        "pages-tabs-page-tabs-page-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs-page/tabs-page.module */
        "./src/app/pages/tabs-page/tabs-page.module.ts")).then(function (m) {
          return m.TabsModule;
        });
      }
    }, {
      path: 'tutorial',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tutorial-tutorial-module */
        "pages-tutorial-tutorial-module").then(__webpack_require__.bind(null,
        /*! ./pages/tutorial/tutorial.module */
        "./src/app/pages/tutorial/tutorial.module.ts")).then(function (m) {
          return m.TutorialModule;
        });
      }
    }, {
      path: 'auxiliary/:type',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-auxiliary-auxiliary-module */
        "pages-auxiliary-auxiliary-module").then(__webpack_require__.bind(null,
        /*! ./pages/auxiliary/auxiliary.module */
        "./src/app/pages/auxiliary/auxiliary.module.ts")).then(function (m) {
          return m.AuxiliaryPageModule;
        });
      }
    }, {
      path: 'ministries/:type',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-ministries-ministries-module */
        "pages-ministries-ministries-module").then(__webpack_require__.bind(null,
        /*! ./pages/ministries/ministries.module */
        "./src/app/pages/ministries/ministries.module.ts")).then(function (m) {
          return m.MinistriesPageModule;
        });
      }
    }, {
      path: 'modal-page',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-modal-page-modal-page-module */
        "pages-modal-page-modal-page-module").then(__webpack_require__.bind(null,
        /*! ./pages/modal-page/modal-page.module */
        "./src/app/pages/modal-page/modal-page.module.ts")).then(function (m) {
          return m.ModalPagePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n/* Remove background transitions for switching themes */\n\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-left: 18px;\n  padding-right: 18px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 450;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\n/*\n * iOS Menu\n*/\n\nion-menu.ios ion-list-header {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxjYXBzdG9uZXN0dWRlbnRcXERlc2t0b3BcXENNUy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsMkVBQUE7QUNBRjs7QURHQSx1REFBQTs7QUFDQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxpQ0FBQTtBQ0FGOztBREdBOztDQUFBOztBQUdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7RUFFQSxrQkFBQTtFQUVBLDRCQUFBO0VBRUEsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLHNEQUFBO0FDSkY7O0FET0E7RUFDRSwrQkFBQTtBQ0pGOztBRE9BOztFQUVFLHlDQUFBO0FDSkY7O0FET0E7RUFDRSwyREFBQTtBQ0pGOztBRFFBOztDQUFBOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FDTkY7O0FEU0E7RUFDRSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLCtCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBiYWNrZ3JvdW5kIHRyYW5zaXRpb25zIGZvciBzd2l0Y2hpbmcgdGhlbWVzICovXHJcbmlvbi1tZW51IGlvbi1pdGVtIHtcclxuICAtLXRyYW5zaXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIE1hdGVyaWFsIERlc2lnbiBNZW51XHJcbiovXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcblxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xyXG5cclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgIzVmNjM2OCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0Om5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBpT1MgTWVudVxyXG4qL1xyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjNzM4NDlhO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuIiwiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbi8qIFJlbW92ZSBiYWNrZ3JvdW5kIHRyYW5zaXRpb25zIGZvciBzd2l0Y2hpbmcgdGhlbWVzICovXG5pb24tbWVudSBpb24taXRlbSB7XG4gIC0tdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gTWVudVxuKi9cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjUwLCAjNWY2MzY4KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Q6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbi8qXG4gKiBpT1MgTWVudVxuKi9cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./logInAndSignupService/requests.service */
    "./src/app/logInAndSignupService/requests.service.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./providers/user-data */
    "./src/app/providers/user-data.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(request, menu, platform, router, splashScreen, statusBar, storage, userData, swUpdate, toastCtrl) {
        _classCallCheck(this, AppComponent);

        this.request = request;
        this.menu = menu;
        this.platform = platform;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.userData = userData;
        this.swUpdate = swUpdate;
        this.toastCtrl = toastCtrl;
        this.appPages = [{
          title: 'Schedule',
          url: '/app/tabs/schedule',
          icon: 'calendar'
        }, {
          title: 'Speakers',
          url: '/app/tabs/speakers',
          icon: 'people'
        }, {
          title: 'Map',
          url: '/app/tabs/map',
          icon: 'map'
        }, {
          title: 'About',
          url: '/app/tabs/about',
          icon: 'information-circle'
        }];
        this.loggedIn = false;
        this.dark = false;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.checkLoginStatus();
                    this.listenForLoginEvents();
                    this.swUpdate.available.subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var toast;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.toastCtrl.create({
                                  message: 'Update available!',
                                  position: 'bottom',
                                  buttons: [{
                                    role: 'cancel',
                                    text: 'Reload'
                                  }]
                                });

                              case 2:
                                toast = _context.sent;
                                _context.next = 5;
                                return toast.present();

                              case 5:
                                toast.onDidDismiss().then(function () {
                                  return _this2.swUpdate.activateUpdate();
                                }).then(function () {
                                  return window.location.reload();
                                });

                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this3 = this;

          this.platform.ready().then(function () {
            _this3.statusBar.styleDefault();

            _this3.splashScreen.hide();
          });
        }
      }, {
        key: "checkLoginStatus",
        value: function checkLoginStatus() {
          var _this4 = this;

          this.request.getCurrentUserInStorage().then(function (res) {
            if (res != null) {
              _this4.updateLoggedInStatus(true);
            } else {
              _this4.updateLoggedInStatus(false);
            }
          });
        }
      }, {
        key: "updateLoggedInStatus",
        value: function updateLoggedInStatus(loggedIn) {
          var _this5 = this;

          setTimeout(function () {
            _this5.loggedIn = loggedIn;
          }, 300);
        }
      }, {
        key: "listenForLoginEvents",
        value: function listenForLoginEvents() {
          var _this6 = this;

          window.addEventListener('user:login', function () {
            _this6.updateLoggedInStatus(true);
          });
          window.addEventListener('user:signup', function () {
            _this6.updateLoggedInStatus(true);
          });
          window.addEventListener('user:logout', function () {
            _this6.updateLoggedInStatus(false);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.request.logoutService().then(function (res) {
            location.reload();
            console.log(res);
          });
          return this.router.navigate(['/login']);
        }
      }, {
        key: "openTutorial",
        value: function openTutorial() {
          this.menu.enable(false);
          this.storage.set('ion_did_tutorial', false);
          this.router.navigateByUrl('/tutorial');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_8__["RequestsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_9__["UserData"]
      }, {
        type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_8__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _providers_user_data__WEBPACK_IMPORTED_MODULE_9__["UserData"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], AppComponent);
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_ministries_ministries_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/ministries/ministries.page */
    "./src/app/pages/ministries/ministries.page.ts");
    /* harmony import */


    var _pages_account_account__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/account/account */
    "./src/app/pages/account/account.ts");
    /* harmony import */


    var _pages_auxiliary_auxiliary_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/auxiliary/auxiliary.page */
    "./src/app/pages/auxiliary/auxiliary.page.ts");
    /* harmony import */


    var _pages_modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/modal-page/modal-page.page */
    "./src/app/pages/modal-page/modal-page.page.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
      })],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _pages_ministries_ministries_page__WEBPACK_IMPORTED_MODULE_14__["MinistriesPage"], _pages_auxiliary_auxiliary_page__WEBPACK_IMPORTED_MODULE_16__["AuxiliaryPage"], _pages_account_account__WEBPACK_IMPORTED_MODULE_15__["AccountPage"], _pages_modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_17__["ModalPagePage"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/logInAndSignupService/requests.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/logInAndSignupService/requests.service.ts ***!
    \***********************************************************/

  /*! exports provided: RequestsService */

  /***/
  function srcAppLogInAndSignupServiceRequestsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsService", function () {
      return RequestsService;
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


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../providers/user-data */
    "./src/app/providers/user-data.ts");

    var RequestsService = /*#__PURE__*/function () {
      function RequestsService(http, userdata) {
        _classCallCheck(this, RequestsService);

        this.http = http;
        this.userdata = userdata;
        this.storageKey = 'current-logged';
        this.storageKeyUserId = 'user-id';
        this["boolean"] = true;
        this.url = "http://localhost:8000/api/";
      }

      _createClass(RequestsService, [{
        key: "loginService",
        value: function loginService(userData) {
          return this.http.post(this.url + 'login', userData);
        }
      }, {
        key: "logoutService",
        value: function logoutService() {
          return this.userdata.storage.clear();
        }
      }, {
        key: "getCurrentUserInStorage",
        value: function getCurrentUserInStorage() {
          return this.userdata.storage.get(this.storageKey);
        }
      }, {
        key: "getTheCurrentUserIdInStorage",
        value: function getTheCurrentUserIdInStorage() {
          return this.userdata.storage.get(this.storageKeyUserId);
        }
      }, {
        key: "signUp",
        value: function signUp(userInfo) {
          return this.http.post(this.url + 'sign-up', userInfo);
        }
      }, {
        key: "updateInfo",
        value: function updateInfo() {
          console.log(this.storageKey);
        }
      }, {
        key: "storeTheCurrentUserToStorage",
        value: function storeTheCurrentUserToStorage(loggedID) {
          this.userdata.storage.set(this.storageKeyUserId, loggedID);
        }
      }]);

      return RequestsService;
    }();

    RequestsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
      }];
    };

    RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]])], RequestsService); // $user->age = $request->input('Age');
    // $user->leader = $request->input('Leader');
    // $user->member_status = $request->input('Member_status');
    // $user->email = $request->input('Email');
    // $user->name = $request->input('Name');
    // $user->password = $request->input('Password');
    //[ {id: 1, name: 'rj', email: 'rj@gmail.com' }]

    /***/
  },

  /***/
  "./src/app/pages/account/account.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/account/account.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountAccountScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  max-width: 140px;\n  border-radius: 50%;\n}\n\n.card {\n  background-color: #36B92A;\n}\n\nion-select:hover {\n  color: white;\n  background-color: #36B92A;\n}\n\n.ion-padding-bottom {\n  margin-top: 20px;\n  margin-bottom: 50px;\n}\n\nbutton {\n  padding: 14px 40px;\n  background-color: yellowgreen;\n}\n\nh1 {\n  margin-left: 3%;\n  font-size: 20px;\n}\n\nhr.solid {\n  border-top: 1px solid black;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.container {\n  margin-left: 10%;\n}\n\nion-tab-button {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #E9FDD8;\n}\n\n@media only screen and (min-width: 600px) {\n  button {\n    margin-top: 5%;\n    margin-left: 2%;\n    margin-right: 2%;\n    border: 1px solid black;\n  }\n\n  .column {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    height: 300px;\n  }\n\n  li {\n    float: left;\n    text-align: center;\n  }\n\n  li a {\n    display: block;\n    color: black;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n\n  ion-label {\n    font-size: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9DOlxcVXNlcnNcXGNhcHN0b25lc3R1ZGVudFxcRGVza3RvcFxcQ01TL3NyY1xcYXBwXFxwYWdlc1xcYWNjb3VudFxcYWNjb3VudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURFSTtFQUNJLHlCQUFBO0FDQ1I7O0FERUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNDUjs7QURLSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7QUNGUjs7QURPSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDSlI7O0FET0k7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7QUNKUjs7QURPSTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDSlI7O0FET0k7RUFDSTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQ0pWOztFRE1NO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtFQ0hWOztFREtNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VDRlY7O0VESU07SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQ0RWOztFREdNO0lBQ0ksZUFBQTtFQ0FWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2QjkyQTtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3Q6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZCOTJBO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyAuaW9uQ2FyZCB7XHJcbiAgICAvLyAgICAgYm9yZGVyOiAtNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLy8gfVxyXG4gICAgLmlvbi1wYWRkaW5nLWJvdHRvbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcblxyXG4gICAgICAgIC8vIGJvcmRlcjpibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhyLnNvbGlkIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGREQ4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaSBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH0iLCJpbWcge1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2QjkyQTtcbn1cblxuaW9uLXNlbGVjdDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2QjkyQTtcbn1cblxuLmlvbi1wYWRkaW5nLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE0cHggNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbmgxIHtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmhyLnNvbGlkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGREQ4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuICAuY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4gIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/account/account.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/account/account.ts ***!
    \******************************************/

  /*! exports provided: AccountPage */

  /***/
  function srcAppPagesAccountAccountTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../logInAndSignupService/requests.service */
    "./src/app/logInAndSignupService/requests.service.ts");
    /* harmony import */


    var _request_to_BE_data_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../request-to-BE/data-requests.service */
    "./src/app/request-to-BE/data-requests.service.ts");
    /* harmony import */


    var _modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modal-page/modal-page.page */
    "./src/app/pages/modal-page/modal-page.page.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var AccountPage = /*#__PURE__*/function () {
      function AccountPage(alertCtrl, modalController, router, userData, request, modal, datasRequest) {
        _classCallCheck(this, AccountPage);

        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.router = router;
        this.userData = userData;
        this.request = request;
        this.modal = modal;
        this.datasRequest = datasRequest; // username;

        this.userDetails = "any";
        this.partialData = "";
        this.auxliary = "any";
        this.ministries = "any";
        this.holder = [];
      }

      _createClass(AccountPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.request.getTheCurrentUserIdInStorage().then(function (res) {
            _this7.datasRequest.getTheCurrentUser({
              userID: res
            }).subscribe(function (data) {
              _this7.holder = data[0];
              console.log(_this7.holder);
            });
          });
        }
      }, {
        key: "updatePicture",
        value: function updatePicture() {
          console.log('Clicked to update picture');
        } // Present an alert with the current username populated
        // clicking OK will update the username and display it
        // clicking Cancel will close the alert and do nothing

      }, {
        key: "changeUsername",
        value: function changeUsername() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Change Username',
                      buttons: ['Cancel', {
                        text: 'Ok',
                        handler: function handler(data) {
                          _this8.userData.setUsername(data.username);

                          _this8.getUsername();
                        }
                      }],
                      inputs: [{
                        type: 'text',
                        name: 'username',
                        value: this.username,
                        placeholder: 'username'
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          var _this9 = this;

          this.userData.getUsername().then(function (username) {
            _this9.username = username;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userData.logout();
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "support",
        value: function support() {
          this.router.navigateByUrl('/support');
        }
      }, {
        key: "addNewUser",
        value: function addNewUser() {
          this.router.navigateByUrl('/create-new-user');
        }
      }, {
        key: "updateInformation",
        value: function updateInformation() {}
      }, {
        key: "optAuxiliary",
        value: function optAuxiliary() {
          this.router.navigateByUrl('/auxiliary/' + this.auxliary);
        }
      }, {
        key: "optMinistry",
        value: function optMinistry() {
          this.router.navigateByUrl('/ministries/' + this.ministries);
          console.log();
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
      }, {
        type: _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"]
      }, {
        type: _modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_6__["ModalPagePage"]
      }, {
        type: _request_to_BE_data_requests_service__WEBPACK_IMPORTED_MODULE_5__["DataRequestsService"]
      }];
    };

    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.scss */
      "./src/app/pages/account/account.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"], _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], _modal_page_modal_page_page__WEBPACK_IMPORTED_MODULE_6__["ModalPagePage"], _request_to_BE_data_requests_service__WEBPACK_IMPORTED_MODULE_5__["DataRequestsService"]])], AccountPage);
    /***/
  },

  /***/
  "./src/app/pages/auxiliary/auxiliary.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/auxiliary/auxiliary.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuxiliaryAuxiliaryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  margin-top: 10%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid black;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  border: 1px solid black;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV4aWxpYXJ5L0M6XFxVc2Vyc1xcY2Fwc3RvbmVzdHVkZW50XFxEZXNrdG9wXFxDTVMvc3JjXFxhcHBcXHBhZ2VzXFxhdXhpbGlhcnlcXGF1eGlsaWFyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1eGlsaWFyeS9hdXhpbGlhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFBbUIseUJBQUE7QUNFckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXhpbGlhcnkvYXV4aWxpYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTsgICAgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICBcclxuICB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn0iLCJ0YWJsZSB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/auxiliary/auxiliary.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/auxiliary/auxiliary.page.ts ***!
    \***************************************************/

  /*! exports provided: AuxiliaryPage */

  /***/
  function srcAppPagesAuxiliaryAuxiliaryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuxiliaryPage", function () {
      return AuxiliaryPage;
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

    var AuxiliaryPage = /*#__PURE__*/function () {
      function AuxiliaryPage(activatedRoute) {
        _classCallCheck(this, AuxiliaryPage);

        this.activatedRoute = activatedRoute;
        this.type = '';
      }

      _createClass(AuxiliaryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.type = this.activatedRoute.snapshot.paramMap.get('type');
        }
      }]);

      return AuxiliaryPage;
    }();

    AuxiliaryPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    AuxiliaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'pages-auxiliary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auxiliary.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auxiliary/auxiliary.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auxiliary.page.scss */
      "./src/app/pages/auxiliary/auxiliary.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], AuxiliaryPage);
    /***/
  },

  /***/
  "./src/app/pages/ministries/ministries.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/ministries/ministries.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMinistriesMinistriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  margin-top: 10%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid black;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  border: 1px solid black;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWluaXN0cmllcy9DOlxcVXNlcnNcXGNhcHN0b25lc3R1ZGVudFxcRGVza3RvcFxcQ01TL3NyY1xcYXBwXFxwYWdlc1xcbWluaXN0cmllc1xcbWluaXN0cmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21pbmlzdHJpZXMvbWluaXN0cmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUFtQix5QkFBQTtBQ0VyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmlzdHJpZXMvbWluaXN0cmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7ICAgIFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9IiwidGFibGUge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/ministries/ministries.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/ministries/ministries.page.ts ***!
    \*****************************************************/

  /*! exports provided: MinistriesPage */

  /***/
  function srcAppPagesMinistriesMinistriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinistriesPage", function () {
      return MinistriesPage;
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

    var MinistriesPage = /*#__PURE__*/function () {
      function MinistriesPage(router, activeRoute) {
        _classCallCheck(this, MinistriesPage);

        this.router = router;
        this.activeRoute = activeRoute;
        this.type = '';
      }

      _createClass(MinistriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.type = this.activeRoute.snapshot.paramMap.get('type');
        }
      }]);

      return MinistriesPage;
    }();

    MinistriesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MinistriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ministries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ministries.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ministries/ministries.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ministries.page.scss */
      "./src/app/pages/ministries/ministries.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], MinistriesPage);
    /***/
  },

  /***/
  "./src/app/pages/modal-page/modal-page.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/modal-page/modal-page.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalPageModalPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLXBhZ2UvbW9kYWwtcGFnZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/modal-page/modal-page.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/modal-page/modal-page.page.ts ***!
    \*****************************************************/

  /*! exports provided: ModalPagePage */

  /***/
  function srcAppPagesModalPageModalPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPagePage", function () {
      return ModalPagePage;
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


    var _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../logInAndSignupService/requests.service */
    "./src/app/logInAndSignupService/requests.service.ts");
    /* harmony import */


    var _request_to_BE_data_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../request-to-BE/data-requests.service */
    "./src/app/request-to-BE/data-requests.service.ts"); // import { userInfo } from 'os';
    // import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';


    var ModalPagePage = /*#__PURE__*/function () {
      function ModalPagePage(request, datasRequest) {
        _classCallCheck(this, ModalPagePage);

        this.request = request;
        this.datasRequest = datasRequest;
        this.update = {
          newUser: {
            Lastname: '',
            Firstname: '',
            Birthday: '',
            Age: null,
            Address: '',
            Marital_status: '',
            Email: '',
            Contact_number: null,
            Facebook: '',
            Instagram: '',
            Twitter: '',
            Category: ''
          },
          groupBelong: {
            Leader: ''
          },
          role: {
            code: 'Member'
          }
        };
      }

      _createClass(ModalPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.request.getTheCurrentUserIdInStorage().then(function (res) {
            _this10.datasRequest.getTheCurrentUser({
              userID: res
            }).subscribe(function (data) {
              _this10.update.newUser = data[0];
              console.log(_this10.update.newUser);
            });
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(form) {
          this.request.signUp(this.update.newUser).subscribe(function (res) {// console.log(res)
            // this.router.navigate(['/app/tabs/cshedule'])
          });
        }
      }]);

      return ModalPagePage;
    }();

    ModalPagePage.ctorParameters = function () {
      return [{
        type: _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]
      }, {
        type: _request_to_BE_data_requests_service__WEBPACK_IMPORTED_MODULE_3__["DataRequestsService"]
      }];
    };

    ModalPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-page/modal-page.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-page.page.scss */
      "./src/app/pages/modal-page/modal-page.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _request_to_BE_data_requests_service__WEBPACK_IMPORTED_MODULE_3__["DataRequestsService"]])], ModalPagePage);
    /***/
  },

  /***/
  "./src/app/providers/user-data.ts":
  /*!****************************************!*\
    !*** ./src/app/providers/user-data.ts ***!
    \****************************************/

  /*! exports provided: UserData */

  /***/
  function srcAppProvidersUserDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserData", function () {
      return UserData;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var UserData = /*#__PURE__*/function () {
      function UserData(storage) {
        _classCallCheck(this, UserData);

        this.storage = storage;
        this.favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
      }

      _createClass(UserData, [{
        key: "hasFavorite",
        value: function hasFavorite(sessionName) {
          return this.favorites.indexOf(sessionName) > -1;
        }
      }, {
        key: "addFavorite",
        value: function addFavorite(sessionName) {
          this.favorites.push(sessionName);
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(sessionName) {
          var index = this.favorites.indexOf(sessionName);

          if (index > -1) {
            this.favorites.splice(index, 1);
          }
        }
      }, {
        key: "login",
        value: function login(username) {
          var _this11 = this;

          return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
            _this11.setUsername(username);

            return window.dispatchEvent(new CustomEvent('user:login'));
          });
        }
      }, {
        key: "signup",
        value: function signup(username) {
          var _this12 = this;

          return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
            _this12.setUsername(username);

            return window.dispatchEvent(new CustomEvent('user:signup'));
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this13 = this;

          return this.storage.remove(this.HAS_LOGGED_IN).then(function () {
            return _this13.storage.remove('username');
          }).then(function () {
            window.dispatchEvent(new CustomEvent('user:logout'));
          });
        }
      }, {
        key: "setUsername",
        value: function setUsername(username) {
          return this.storage.set('username', username);
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return this.storage.get('username').then(function (value) {
            return value;
          });
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
          });
        }
      }, {
        key: "checkHasSeenTutorial",
        value: function checkHasSeenTutorial() {
          return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
          });
        }
      }]);

      return UserData;
    }();

    UserData.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    UserData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], UserData);
    /***/
  },

  /***/
  "./src/app/request-to-BE/data-requests.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/request-to-BE/data-requests.service.ts ***!
    \********************************************************/

  /*! exports provided: DataRequestsService */

  /***/
  function srcAppRequestToBEDataRequestsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataRequestsService", function () {
      return DataRequestsService;
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

    var DataRequestsService = /*#__PURE__*/function () {
      function DataRequestsService(request) {
        _classCallCheck(this, DataRequestsService);

        this.request = request;
        this.url = "http://localhost:8000/api/";
      }

      _createClass(DataRequestsService, [{
        key: "getTheCurrentUser",
        value: function getTheCurrentUser(userId) {
          return this.request.post(this.url + "info", userId);
        }
      }]);

      return DataRequestsService;
    }();

    DataRequestsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataRequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DataRequestsService);
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
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
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
    /*! C:\Users\capstonestudent\Desktop\CMS\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map