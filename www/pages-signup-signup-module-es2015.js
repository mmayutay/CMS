(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n        <ion-icon name=\"arrow-back\" [routerLink]=\"['/account']\"></ion-icon>\r\n        <ion-title>Create Another User</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card\">\r\n    <ion-card-content>\r\n      <form #signupForm=\"ngForm\" novalidate>\r\n        <ion-list lines=\"none\">\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Lastname</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"person\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Lastname\" class=\"input\" placeholder=\"Lastname\" name=\"Lastname\" type=\"text\" #lastname=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!lastname.valid && lastname.touched && lastname.errors?.required\">\r\n              <ion-text color=\"danger\">Lastname is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Firstname</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"person\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Firstname\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Firstname\" name=\"Firstname\" type=\"text\" #firstname=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!firstname.valid && firstname.touched && firstname.errors?.required\">\r\n              <ion-text color=\"danger\">Firstname is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Birthday</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"calendar\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Birthday\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Birthday\" name=\"Birthday\" type=\"date\" #birthday=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!birthday.valid && birthday.touched && birthday.errors?.required\">\r\n              <ion-text color=\"danger\">Birthday is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Age</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"mail\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Age\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Age\" name=\"Age\" type=\"number\" #age=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!age.valid && age.touched && age.errors?.required\">\r\n              <ion-text color=\"danger\">Age is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Address</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"location\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Address\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Address\" name=\"Address\" type=\"text\" #address=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!address.valid && address.touched && address.errors?.required\">\r\n              <ion-text color=\"danger\">Address is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Marital Status</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"male-female-sharp\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Marital_status\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Marital Status\" name=\"Marital_status\" type=\"text\" #maritalstatus=\"ngModel\"\r\n              required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!maritalstatus.valid && maritalstatus.touched && maritalstatus.errors?.required\">\r\n              <ion-text color=\"danger\">Marital Status is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Email</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"mail\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Email\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Email\" name=\"Email\" type=\"text\" #email=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!email.valid && email.touched && email.errors?.required\">\r\n              <ion-text color=\"danger\">Email is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Contact Number</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"call-sharp\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Contact_number\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Contact Number\" name=\"Contact_number\" type=\"number\" #contactnumber=\"ngModel\"\r\n              required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!contactnumber.valid && contactnumber.touched && contactnumber.errors?.required\">\r\n              <ion-text color=\"danger\">Contact Number is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Facebook</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"logo-facebook\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Facebook\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Facebook\" name=\"Facebook\" type=\"text\" #facebook=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!facebook.valid && facebook.touched && facebook.errors?.required\">\r\n              <ion-text color=\"danger\">Facebook is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Instagram</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"logo-instagram\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Instagram\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Instagram\" name=\"Instagram\" type=\"text\" #instagram=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!instagram.valid && instagram.touched && instagram.errors?.required\">\r\n              <ion-text color=\"danger\">Instagram is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Twitter</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"logo-twitter\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Twitter\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Twitter\" name=\"Twitter\" type=\"text\" #twitter=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!twitter.valid && twitter.touched && twitter.errors?.required\">\r\n              <ion-text color=\"danger\">Twitter is required</ion-text>\r\n          </ion-label><br>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"stacked\" color=\"primary\">Category</ion-label> -->\r\n            <div class=\"iconLogin\">\r\n              <ion-icon name=\"list-circle-sharp\"></ion-icon>\r\n            </div>&nbsp;&nbsp;\r\n            <ion-input [(ngModel)]=\"signup.newUser.Category\" class=\"input\" #nameCtrl=\"ngModel\" placeholder=\"Category\" name=\"Category\" type=\"text\" #category=\"ngModel\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-label *ngIf=\"!category.valid && category.touched && category.errors?.required\">\r\n              <ion-text color=\"danger\">Category is required</ion-text>\r\n          </ion-label><br>\r\n        </ion-list>\r\n\r\n                <div class=\"ion-padding\">\r\n                    <ion-button (click)=\"onSignup(signupForm)\" [disabled]=\"signupForm.invalid\" type=\"submit\" expand=\"block\">Create</ion-button>\r\n                </div>\r\n            </form>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\nion-card {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5%;\n  padding: 20px;\n}\n\n.card {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.input {\n  cursor: pointer;\n  border: none;\n  width: 50px;\n  height: 35px;\n  padding-left: 5px;\n}\n\nion-input.input:hover {\n  border: 1px solid orange;\n  border-radius: 8px;\n  padding: 10px;\n  box-shadow: 0 0 8px #23c962;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-input {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.iconLogin {\n  font: 70px;\n  color: #23c962;\n}\n\nion-button {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-list {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  ion-button, ion-list {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcMm5keXJncm91cGNcXERlc2t0b3BcXFRoZXNpc19HZW5ldmFcXENNUy9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRFQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURHRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBR0EsMkJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksMkNBQUE7QUNDSjs7QURFQTtFQUdJLFVBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNFLHVCQUFBO0VBQ0E7SUFDRSxXQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG5cclxuLmlucHV0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8vIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dC5pbnB1dDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCA4cHggIzIzYzk2MjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAjMjNjOTYyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjMjNjOTYyO1xyXG4gIH1cclxuXHJcbi5zaWdudXAtbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmljb25Mb2dpbntcclxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTc0LCAxNzQsIC44KTtcclxuICAgIC8vICAgcGFkZGluZzogNXB4OyBcclxuICAgIGZvbnQ6IDcwcHg7XHJcbiAgICBjb2xvcjojMjNjOTYyO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgaW9uLWJ1dHRvbiwgaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5zaWdudXAtbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbmlvbi1pbnB1dC5pbnB1dDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCA4cHggIzIzYzk2MjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4ICMyM2M5NjI7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggIzIzYzk2Mjtcbn1cblxuLnNpZ251cC1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmljb25Mb2dpbiB7XG4gIGZvbnQ6IDcwcHg7XG4gIGNvbG9yOiAjMjNjOTYyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICBpb24tYnV0dG9uLCBpb24tbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");

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