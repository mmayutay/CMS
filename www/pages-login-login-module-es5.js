function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-card>\r\n  <div class=\"card\">\r\n    <div class=\"login-logo\">\r\n      <img src=\"assets/img/loginIconChurch.png\" alt=\"Ionic logo\">\r\n      <p>Blessed Hope of Christian Fellowship</p>\r\n    </div>\r\n    <form #loginForm=\"ngForm\" novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <!-- <ion-icon name=\"mail\"></ion-icon>&nbsp;&nbsp; -->\r\n          <!-- <ion-label position=\"floating\" color=\"primary\">Email</ion-label> -->\r\n          <div class=\"icon\"><ion-icon name=\"mail\"></ion-icon></div>&nbsp;&nbsp;\r\n          <ion-input [(ngModel)]=\"login.username\" name=\"email\" placeholder=\"Email\" type=\"text\" #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\"\r\n            required>\r\n          </ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Email is required\r\n          </p>\r\n        </ion-text>\r\n  \r\n        <ion-item>\r\n          <!-- <ion-label position=\"floating\" color=\"primary\">Password</ion-label> -->\r\n          <div class=\"icon\"><ion-icon name=\"key\"></ion-icon></div>&nbsp;&nbsp;\r\n          <ion-input [(ngModel)]=\"login.password\" name=\"password\" placeholder=\"Password\" type=\"password\" #password=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Password is required\r\n          </p>\r\n        </ion-text>\r\n      </ion-list><br><br>\r\n  \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"onLogin()\" type=\"submit\" expand=\"block\">Login</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n</ion-card>\r\n\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login */
    "./src/app/pages/login/login.ts");

    var routes = [{
      path: '',
      component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login */
    "./src/app/pages/login/login.ts");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]],
      declarations: [_login__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.scss":
  /*!****************************************!*\
    !*** ./src/app/pages/login/login.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n.icon {\n  background-color: rgba(179, 174, 174, 0.1);\n  padding: 5px;\n  font: 30px;\n}\n\nion-card {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-item {\n  margin-top: 5%;\n}\n\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  .card {\n    height: 80%;\n    width: 100%;\n  }\n\n  ion-card {\n    padding-top: 20%;\n    padding-bottom: 20%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxjYXBzdG9uZXN0dWRlbnRcXERlc2t0b3BcXENNUy9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RUNFRjs7RURBQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmljb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTc0LCAxNzQsIDAuMSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQ6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gIC5jYXJkIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iLCIubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc5LCAxNzQsIDE3NCwgMC4xKTtcbiAgcGFkZGluZzogNXB4O1xuICBmb250OiAzMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgLmNhcmQge1xuICAgIGhlaWdodDogODAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDIwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/login/login.ts ***!
    \**************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../logInAndSignupService/requests.service */
    "./src/app/logInAndSignupService/requests.service.ts"); // import { AlertController } from '@ionic/angular';


    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(menu, userData, router, request, alertControl) {
        _classCallCheck(this, LoginPage);

        this.menu = menu;
        this.userData = userData;
        this.router = router;
        this.request = request;
        this.alertControl = alertControl;
        this.login = {
          username: '',
          password: ''
        };
        this.submitted = false;
        this.userAuthenticated = true;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this = this;

          this.request.loginService(this.login).subscribe(function (res) {
            if (res[0] != null) {
              _this.request.storeTheCurrentUserToStorage(res[0].userid);

              _this.router.navigate(['/app/tabs/schedule']);
            } else {
              _this.presentAlert();
            }
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertControl.create({
                      cssClass: 'my-custom-class',
                      header: 'Error',
                      message: 'Email or password is incorrect.',
                      buttons: ['OK']
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

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.scss */
      "./src/app/pages/login/login.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map