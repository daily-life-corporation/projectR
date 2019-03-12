(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <body class=\"text-center\">\n      <form class=\"form-signin\">\n        <img  src=\"https://lh3.googleusercontent.com/c_a31YCBc08hDfJJNckg47aBwDNEpfCjD12CxwJD74xvLWEpP8-pnaxvRrV0PzYJ7osfibACrDCi7Z4brvpT7miDH9bArJkUsPNSGtOhS5-U9m87wQoSC2V4i-qdCPyz04mSn-CeRNZeMITYoNf4MepBpa8ZXNsdp2eQypdYFqG7VaJYDopf7E1sW8Ru6cBC_SwGUKdRfs_v4qK049Q_A0EZFmPaQCJl6BqsMLNjbpaxMJVfslFQqGl3DHUpTJHLd72bQQ2rL_ecFokjb4n-VOWcpmhLSYEZRqOKSA15SBQVwfH6HpDntU5667pYrZY7GcD2yqAsFfVTTtfXyt3qlM-U8qvyfd71VW1fcyp-LCoRjRR8pOydvciFwsO-rh2B79yhb89YHo8S7UALKu33X1hOWrK6FyK3gV3Clz1fzrXDvokEdppgH-vZfdqFKDbFaGD3NYknf_7zJ1mzqThK5PQzzgac_vs_4NT5CrcLPJ284He99omN4GE4r21ve3GXCQFJVetVDmqVmzonxaYSEVtOBn2_goEXHBwnuI2yGsSOLv0kpk2kTw7uIFka0Mr1B40mIOrIPqSAIG382fB3emGNi_E7GSwMF8DqBBBsl1uo3VZ7n9q9HgHf_I4ZqBglHp6VyoQRG8KWj-79yCZtjkJc=s200-no\" alt=\"\" width=\"200\" height=\"200\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n        <div class=\"input-group-prepend\">\n            <input type=\"text\"class=\"form-control\" placeholder=\"Username\"#addmin>\n          </div>\n          <div class=\"input-group-prepend\">\n              <input  type =\"password\"class=\"form-control\" placeholder=\"password\"#supatta>\n            </div> <br> <br>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me <br> <br>\n            <a class=\"btn btn-success\" (click)=\"click(addmin.value,supatta.value)\" >OK</a> <br> <br>\n        <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n\n      </form>\n    </body>\n</p>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5; }\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBUk0gU0FSQVlVVEhcXHByb2plY3RSL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFhO0VBRWIsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsYUFBWSxFQUNiOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osY0FBYTtFQUNiLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.click = function (u, p) {
        if (u === 'addmin' && p === 'supatta') {
            this.router.navigate(['/view']);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map