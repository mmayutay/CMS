function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Create Another User</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"signup-logo\">\r\n        <img src=\"assets/img/appicon.svg\" alt=\"Ionic Logo\">\r\n    </div>\r\n\r\n    <form #signupForm=\"ngForm\">\r\n        <ion-list lines=\"none\">\r\n            <ion-item>\r\n                <ion-label position=\"stacked\" color=\"primary\">Name</ion-label>\r\n                <ion-input [(ngModel)]=\"userInfo.Name\" name=\"name\" type=\"text\" #name=\"ngModel\" required></ion-input>\r\n            </ion-item>\r\n            <ion-text color=\"danger\">\r\n                <p [hidden]=\"name.valid || submitted == false\" class=\"ion-padding-start\">\r\n                    Name is required\r\n                </p>\r\n            </ion-text>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\" color=\"primary\">Age</ion-label>\r\n                <ion-input [(ngModel)]=\"userInfo.Age\" name=\"age\" type=\"text\" #age=\"ngModel\" required></ion-input>\r\n            </ion-item>\r\n            <ion-text color=\"danger\">\r\n                <p [hidden]=\"age.valid || submitted == false\" class=\"ion-padding-start\">\r\n                    Age is required\r\n                </p>\r\n            </ion-text>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\" color=\"primary\">Leader</ion-label>\r\n                <ion-input [(ngModel)]=\"userInfo.Leader\" name=\"leader\" type=\"text\" #leader=\"ngModel\" required></ion-input>\r\n            </ion-item>\r\n            <ion-text color=\"danger\">\r\n                <p [hidden]=\"leader.valid || submitted == false\" class=\"ion-padding-start\">\r\n                    Leader is required\r\n                </p>\r\n            </ion-text>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\" color=\"primary\">Member Status</ion-label>\r\n                <ion-input [(ngModel)]=\"userInfo.Member_status\" name=\"member_status\" type=\"text\" #member=\"ngModel\" required></ion-input>\r\n            </ion-item>\r\n            <ion-text color=\"danger\">\r\n                <p [hidden]=\"member.valid || submitted == false\" class=\"ion-padding-start\">\r\n                    Member Status is required\r\n                </p>\r\n            </ion-text>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\" color=\"primary\">Email</ion-label>\r\n                <ion-input [(ngModel)]=\"userInfo.Email\" name=\"email\" type=\"text\" #email=\"ngModel\" required>\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-text color=\"danger\">\r\n                <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n                    Email is required\r\n                </p>\r\n            </ion-text>\r\n\r\n            <ion-item>\r\n                <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\r\n                <ion-input [(ngModel)]=\"userInfo.Password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-text color=\"danger\">\r\n                <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n                    Password is required\r\n                </p>\r\n            </ion-text>\r\n        </ion-list>\r\n\r\n        <div class=\"ion-padding\">\r\n            <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" expand=\"block\">Create User</ion-button>\r\n        </div>\r\n    </form>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup */
    "./src/app/pages/signup/signup.ts");

    var routes = [{
      path: '',
      component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignUpModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpModule", function () {
      return SignUpModule;
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


    var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup */
    "./src/app/pages/signup/signup.ts");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");

    var SignUpModule = function SignUpModule() {
      _classCallCheck(this, SignUpModule);
    };

    SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]],
      declarations: [_signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
    })], SignUpModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.scss":
  /*!******************************************!*\
    !*** ./src/app/pages/signup/signup.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n\nion-button {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-list {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  ion-button,\nion-list {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcMm5keXJHcm91cEFcXERlc2t0b3BcXEdhbWJvYVxcQ01TL3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQTs7SUFFSSxXQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZ251cC1sb2dvIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgICBpb24tYnV0dG9uLFxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiLnNpZ251cC1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbnVwLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICBpb24tYnV0dG9uLFxuaW9uLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/signup/signup.ts ***!
    \****************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _services_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/requests.service */
    "./src/app/services/requests.service.ts");

    var SignupPage =
    /*#__PURE__*/
    function () {
      function SignupPage(request, router, userData, menu) {
        _classCallCheck(this, SignupPage);

        this.request = request;
        this.router = router;
        this.userData = userData;
        this.menu = menu;
        this.userInfo = {
          Name: '',
          Age: null,
          Leader: '',
          Member_status: '',
          Email: '',
          Password: ''
        };
        this.signup = {
          username: '',
          password: ''
        };
        this.submitted = false;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSignup",
        value: function onSignup(form) {
          var _this = this;

          this.request.signUp(this.userInfo).subscribe(function (res) {
            _this.router.navigate(['/app/tabs/schedule']);
          });
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.scss */
      "./src/app/pages/signup/signup.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map