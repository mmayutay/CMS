(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <ion-card>\r\n        <div class=\"card\">\r\n            <div class=\"login-logo\">\r\n                <img src=\"assets/img/loginIconChurch.png\" alt=\"Ionic logo\">\r\n                <p>Blessed Hope of Christian Fellowship</p>\r\n            </div>\r\n            <form #loginForm=\"ngForm\" novalidate>\r\n                <ion-list>\r\n                    <ion-item>\r\n                        <!-- <ion-icon name=\"mail\"></ion-icon>&nbsp;&nbsp; -->\r\n                        <!-- <ion-label position=\"floating\" color=\"primary\">Email</ion-label> -->\r\n                        <div class=\"icon\">\r\n                            <ion-icon name=\"mail\"></ion-icon>\r\n                        </div>&nbsp;&nbsp;\r\n                        <ion-input [(ngModel)]=\"login.email\" name=\"email\" placeholder=\"Email\" type=\"text\" #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-text color=\"danger\">\r\n                        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n                            Email is required\r\n                        </p>\r\n                    </ion-text>\r\n\r\n                    <ion-item>\r\n                        <!-- <ion-label position=\"floating\" color=\"primary\">Password</ion-label> -->\r\n                        <div class=\"icon\">\r\n                            <ion-icon name=\"key\"></ion-icon>\r\n                        </div>&nbsp;&nbsp;\r\n                        <ion-input [(ngModel)]=\"login.password\" name=\"password\" placeholder=\"Password\" type=\"password\" #password=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-text color=\"danger\">\r\n                        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n                            Password is required\r\n                        </p>\r\n                    </ion-text>\r\n                    <!-- </ion-list> -->\r\n                </ion-list><br><br>\r\n\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">Login</ion-button>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-button (click)=\"onSignup()\" color=\"light\" expand=\"block\">Signup</ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n            </form>\r\n        </div>\r\n    </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");




const routes = [
    {
        path: '',
        component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]
        ],
        declarations: [
            _login__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/pages/login/login.scss":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n.icon {\n  background-color: #b3aeae;\n  padding: 5px;\n  font: 30px;\n}\n\nion-card {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-item {\n  margin-top: 5%;\n}\n\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  .card {\n    width: 100%;\n  }\n\n  ion-card {\n    padding-top: 25%;\n    padding-bottom: 27%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFwybmR5ckdyb3VwQVxcRGVza3RvcFxcR2FtYm9hXFxDTVMvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4uc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQTtJQUNJLFdBQUE7RUNDTjs7RURDRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDE3NCwgMTc0KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQ6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI1JTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjclO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNhZWFlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQ6IDMwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgcGFkZGluZy10b3A6IDI1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjclO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/requests.service */ "./src/app/services/requests.service.ts");




// import { AlertController } from '@ionic/angular';



let LoginPage = class LoginPage {
    constructor(menu, userData, router, request, alertControl) {
        this.menu = menu;
        this.userData = userData;
        this.router = router;
        this.request = request;
        this.alertControl = alertControl;
        this.login = { email: '', password: '' };
        this.submitted = false;
        this.userAuthenticated = true;
    }
    ngOnInit() {
        this.menu.enable(false);
    }
    onLogin() {
        this.request.loginService(this.login).subscribe(res => {
            if (res) {
                this.userData.storage.set(this.request.storageKey, this.login.email);
                this.router.navigate(['/app/tabs/schedule']);
            }
            else {
                this.presentAlert();
            }
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertControl.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: 'Email or password is incorrect.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.scss */ "./src/app/pages/login/login.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map