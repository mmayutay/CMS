(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n        <ion-icon name=\"arrow-back\" [routerLink]=\"['/account']\"></ion-icon>\r\n        <ion-title>Create Another User</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-content>\r\n            <form #signupForm=\"ngForm\" novalidate>\r\n                <ion-list lines=\"none\">\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Lastname</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Lastname\" name=\"Lastname\" type=\"text\" #lastname=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Firstname</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Firstname\" name=\"Firstname\" type=\"text\" #firstname=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Birthday</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Birthday\" name=\"Birthday\" type=\"text\" #birthday=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Age</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Age\" name=\"Age\" type=\"number\" #age=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Address</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Address\" name=\"Address\" type=\"text\" #address=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Marital Status</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Marital_status\" name=\"Marital_status\" type=\"text\" #maritalstatus=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Email</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Email\" name=\"Email\" type=\"text\" #email=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Contact Number</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Contact_number\" name=\"Contact_number\" type=\"text\" #contactnumber=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Facebook</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Facebook\" name=\"Facebook\" type=\"text\" #facebook=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Instagram</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Instagram\" name=\"Instagram\" type=\"text\" #instagram=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Twitter</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Twitter\" name=\"Twitter\" type=\"text\" #twitter=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"primary\">Category</ion-label>\r\n                        <ion-input [(ngModel)]=\"signup.newUser.Category\" name=\"Category\" type=\"text\" #category=\"ngModel\" required>\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </ion-list>\r\n\r\n                <div class=\"ion-padding\">\r\n                    <ion-button (click)=\"onSignup(signupForm)\" [disabled]=\"signupForm.invalid\" type=\"submit\" expand=\"block\">Create</ion-button>\r\n                </div>\r\n            </form>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");




const routes = [
    {
        path: '',
        component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");







let SignUpModule = class SignUpModule {
};
SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]
        ],
        declarations: [
            _signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"],
        ]
    })
], SignUpModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.scss":
/*!******************************************!*\
  !*** ./src/app/pages/signup/signup.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n\nion-button {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-list {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  ion-button, ion-list {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcY2Fwc3RvbmVzdHVkZW50XFxEZXNrdG9wXFxDTVMvc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXBcXHNpZ251cC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQ0FBQTtBQ0VKOztBRENBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBO0lBQ0UsV0FBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLWxvZ28ge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWdudXAtbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gIGlvbi1idXR0b24sIGlvbi1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIuc2lnbnVwLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWdudXAtbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pb24tbGlzdCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gIGlvbi1idXR0b24sIGlvbi1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/signup/signup.ts":
/*!****************************************!*\
  !*** ./src/app/pages/signup/signup.ts ***!
  \****************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logInAndSignupService/requests.service */ "./src/app/logInAndSignupService/requests.service.ts");





let SignupPage = class SignupPage {
    constructor(router, userData, request) {
        this.router = router;
        this.userData = userData;
        this.request = request;
        this.signup = {
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
                Category: '',
            }, groupBelong: {
                Leader: ''
            }, role: {
                code: 'Member'
            }
        };
        this.submitted = false;
    }
    ngOnInit() {
        this.request.getTheCurrentUserIdInStorage().then(res => {
            this.signup.groupBelong.Leader = res;
        });
    }
    onSignup(form) {
        this.request.signUp(this.signup).subscribe(res => {
            console.log(res);
            this.router.navigate(['/app/tabs/schedule']);
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] },
    { type: _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.scss */ "./src/app/pages/signup/signup.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"],
        _logInAndSignupService_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map