(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-card>\r\n    <div class=\"card\">\r\n      <div class=\"login-logo\">\r\n        <img src=\"assets/img/BHCFLogo.png\" alt=\"Ionic logo\">\r\n        <p>Blessed Hope of Christian Fellowship</p>\r\n      </div>\r\n      <form #loginForm=\"ngForm\" novalidate>\r\n        <ion-list>\r\n          <ion-item>\r\n            <!-- <ion-icon name=\"mail\"></ion-icon>&nbsp;&nbsp; -->\r\n            <!-- <ion-label position=\"floating\" color=\"primary\">Email</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"mail\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"login.username\" name=\"email\" class=\"input\" placeholder=\"Email\" type=\"text\" #email=\"ngModel\"\r\n              spellcheck=\"false\" autocapitalize=\"off\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!email.valid && email.touched && email.errors?.required\">\r\n              <ion-text color=\"danger\">Email is required</ion-text>\r\n          </ion-label><br>\r\n\r\n          <!-- <ion-text color=\"danger\">\r\n            <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n              Email is required\r\n            </p>\r\n          </ion-text> -->\r\n\r\n          <ion-item>\r\n            <!-- <ion-label position=\"floating\" color=\"primary\">Password</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"key\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"login.password\" class=\"input\" name=\"password\" placeholder=\"Password\" type=\"password\" #password=\"ngModel\"\r\n              required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!password.valid && password.touched && password.errors?.required\">\r\n              <ion-text color=\"danger\">Password is required</ion-text>\r\n          </ion-label><br>\r\n\r\n          <!-- <ion-text color=\"danger\">\r\n            <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n              Password is required\r\n            </p>\r\n          </ion-text> -->\r\n        </ion-list><br><br>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button class=\"btnLogin\" (click)=\"onLogin()\" type=\"submit\" expand=\"block\">Login</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button class=\"btnLogin\" color=\"secondary\" type=\"submit\" expand=\"block\">Forgot Password</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </div>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-button.btnLogin {\n  background-color: #23c962;\n  border-radius: 100%;\n}\n\n.login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n.iconLogin {\n  font: 50px;\n  color: #23c962;\n}\n\n.input {\n  cursor: pointer;\n  border: none;\n  width: 50px;\n  height: 35px;\n  padding: 20px;\n}\n\nion-input.input:hover {\n  border: 1px solid orange;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 0 8px #23c962;\n}\n\nion-item {\n  margin-top: 5%;\n}\n\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  .card {\n    height: 80%;\n    padding-bottom: 9%;\n  }\n\n  ion-card {\n    padding-top: 10%;\n    padding: 10%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFwybmR5cmdyb3VwY1xcRGVza3RvcFxcVGhlc2lzX0dlbmV2YVxcQ01TL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFHRSxVQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRG1CQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDakJKOztBRG1CRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBR0EsMkJBQUE7QUNoQko7O0FEbUJBO0VBQ0ksY0FBQTtBQ2hCSjs7QURvQkE7RUFDRSx1QkFBQTtFQUNBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VDakJGOztFRG9CQTtJQUVFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLDRFQUFBO0VDbEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbi5idG5Mb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2M5NjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pY29uTG9naW57XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTc0LCAxNzQsIC44KTtcclxuLy8gICBwYWRkaW5nOiA1cHg7IFxyXG4gIGZvbnQ6IDUwcHg7XHJcbiAgY29sb3I6IzIzYzk2MjtcclxufVxyXG5cclxuLy8gaW9uLWNhcmQge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwJTtcclxuLy8gICAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4vLyB9XHJcblxyXG4vLyAuY2FyZCB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4vLyB9XHJcblxyXG4uaW5wdXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgaW9uLWlucHV0LmlucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCA4cHggIzIzYzk2MjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAjMjNjOTYyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjMjNjOTYyO1xyXG4gIH1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gIC5jYXJkIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDklO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1jYXJke1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gIH1cclxufSIsImlvbi1idXR0b24uYnRuTG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNjOTYyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaWNvbkxvZ2luIHtcbiAgZm9udDogNTBweDtcbiAgY29sb3I6ICMyM2M5NjI7XG59XG5cbi5pbnB1dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5pb24taW5wdXQuaW5wdXQ6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgOHB4ICMyM2M5NjI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAjMjNjOTYyO1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICMyM2M5NjI7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOSU7XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logInAndSignupService/requests.service */ "./src/app/logInAndSignupService/requests.service.ts");




// import { AlertController } from '@ionic/angular';



let LoginPage = class LoginPage {
    constructor(menu, userData, router, request, alertControl) {
        this.menu = menu;
        this.userData = userData;
        this.router = router;
        this.request = request;
        this.alertControl = alertControl;
        this.login = { username: '', password: '' };
        this.submitted = false;
        this.userAuthenticated = true;
    }
    ngOnInit() {
        this.menu.enable(false);
    }
    onLogin() {
        this.request.loginService(this.login).subscribe(res => {
            if (res[0] != null) {
                this.request.storeTheCurrentUserToStorage(res[0].userid);
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
    { type: _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"] },
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
        _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], LoginPage);



/***/ })

}]);