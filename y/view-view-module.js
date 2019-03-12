(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-view-module"],{

/***/ "./src/app/view/view-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutingModule", function() { return ViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: '', component: _view_component__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"] },
];
var ViewRoutingModule = /** @class */ (function () {
    function ViewRoutingModule() {
    }
    ViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ViewRoutingModule);
    return ViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<script>\n  $('#myList a:first-child').tab('show') // Select first tab\n  </script>\n<div class=\"row\">\n  <div class=\"col-5\">\n    <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n      <b>&nbsp; &nbsp;    หลักสูตรปกติ</b>\n      <a class=\"list-group-item list-group-item-action active\" id=\"list-CPE59-list\" data-toggle=\"list\" href=\"#list-CPE59\" role=\"tab\" >CPE59</a>\n      <a class=\"list-group-item list-group-item-action\" id=\"list-CPE60-list\" data-toggle=\"list\" href=\"#list-CPE60\" role=\"tab\" >CPE60</a>\n      <a class=\"list-group-item list-group-item-action\" id=\"list-CPE61-list\" data-toggle=\"list\" href=\"#list-CPE61\" role=\"tab\" >CPE61</a>\n\n      <b>&nbsp;  &nbsp;   หลักสูตรเทียบโอน</b>\n      <a class=\"list-group-item list-group-item-action\" id=\"list-CPE59TO-list\" data-toggle=\"list\" href=\"#list-CPE59TO\" role=\"tab\" >CPE59</a>\n      <a class=\"list-group-item list-group-item-action\" id=\"list-CPE60TO-list\" data-toggle=\"list\" href=\"#list-CPE60TO\" role=\"tab\" >CPE60</a>\n      <a class=\"list-group-item list-group-item-action\" id=\"list-CPE61TO-list\" data-toggle=\"list\" href=\"#list-CPE61TO\" role=\"tab\" >CPE61</a>\n\n\n      <a class=\"list-group-item list-group-item-action\" id=\"name-name\" data-toggle=\"list\" href=\"#name\" role=\"tab\" >\n      <div class=\"input-group \">\n          <input type=\"text\" class=\"form-control\" #ID placeholder=\"กรอกรหัสนักศึกษา\" aria-label=\"กรอกรหัสนักศึกษา\" aria-describedby=\"button-addon2\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-light\" type=\"button\" (click)=\"click(ID.value)\"  id=\"button-addon2\">Search</button>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"col-md-7\">\n    <div class=\"tab-content show active\" id=\"nav-tabContent\">\n      <div class=\"tab-pane fade\" id=\"list-CPE59\" role=\"tabpanel\" >\n\n      </div>\n      <!-- ปี60 -->\n      <div class=\"tab-pane fade\" id=\"list-CPE60\" role=\"tabpanel\">\n          <div class=\"table-responsive-sm container\">\n              <table class=\"table table-sm col-sm-6\">\n                <!-- หัวตาราง -->\n                <thead>\n                  <tr>\n                    <th scope=\"col col-md-auto\">รหัสนักศึกษา</th>\n                    <th scope=\"col col-md-auto\">ชื่อ</th>\n                    <th scope=\"col col-md-auto\">นามสกุล</th>\n                  </tr>\n                </thead>\n                <tbody *ngFor=\"let item of c60TO | async; let id = index\" >\n                  <tr>\n                   <td><a class=\"btn btn-success\"  (click)=\"cLink(item.ID)\">{{item.ID}}</a></td>\n                    <td>{{item.FirstnameTH}}</td>\n                    <td>{{item.LastnameTH}}</td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n      </div>\n\n\n      <div class=\"tab-pane fade\" id=\"list-CPE61\" role=\"tabpanel\"></div>\n\n\n\n\n\n      <div class=\"tab-pane fade\" id=\"list-CPE59TO\" role=\"tabpanel\" ></div>\n      <div class=\"tab-pane fade\" id=\"list-CPE60TO\" role=\"tabpanel\" >\n      <!-- tabel -->\n        <div class=\"table-responsive-sm container\">\n          <table class=\"table table-sm col-sm-6\">\n            <!-- หัวตาราง -->\n            <thead>\n              <tr>\n                <th scope=\"col col-md-auto\">รหัสนักศึกษา</th>\n                <th scope=\"col col-md-auto\">ชื่อ</th>\n                <th scope=\"col col-md-auto\">นามสกุล</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let item of c60TO | async; let id = index\" >\n              <tr *ngIf=\"item.Course!='ปกติ'\">\n               <td><a class=\"btn btn-success\"  (click)=\"cLink(item.ID)\">{{item.ID}}</a></td>\n                <td>{{item.FirstnameTH}}</td>\n                <td>{{item.LastnameTH}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <!-- สิ้นสุดตาราง -->\n      </div>\n      <div class=\"tab-pane fade\" id=\"list-CPE61TO\" role=\"tabpanel\" >\n\n\n        <!-- tabel -->\n        <div class=\"table-responsive-sm container\">\n          <table class=\"table table-sm col-sm-6\">\n            <!-- หัวตาราง -->\n            <thead>\n              <tr>\n                <th scope=\"col col-md-auto\">รหัสนักศึกษา</th>\n                <th scope=\"col col-md-auto\">ชื่อ</th>\n                <th scope=\"col col-md-auto\">นามสกุล</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of c61TO | async; let id = index\">\n                <td><a class=\"btn btn-success\"  (click)=\"cLink(item.ID)\">{{item.ID}}</a>\n\n                </td>\n                <td>{{item.FirstnameTH}}</td>\n                <td>{{item.LastnameTH}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <!-- สิ้นสุดตาราง -->\n      </div>\n      <div class=\"tab-pane fade\" id=\"name\" role=\"tabpanel\" >\n\n          <!-- tabel -->\n          <div class=\"table-responsive-sm container\">\n            <table class=\"table table-sm col-sm-7\">\n              <!-- หัวตาราง -->\n              <thead>\n                <tr>\n                  <th scope=\"col col-md-auto\">รหัสนักศึกษา</th>\n                  <th scope=\"col col-md-auto\">ชื่อ</th>\n                  <th scope=\"col col-md-auto\">นามสกุล</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of name | async; let id = index\">\n                  <td><a class=\"btn btn-success\"  (click)=\"cLink(item.ID)\">{{item.ID}}</a></td>\n                  <td>{{item.ID}}</td>\n                  <td>{{item.FirstnameTH}}</td>\n                  <td>{{item.LastnameTH}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- สิ้นสุดตาราง -->\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view/view.component.scss":
/*!******************************************!*\
  !*** ./src/app/view/view.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var ViewComponent = /** @class */ (function () {
    function ViewComponent(db, router) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.items = db.list('STUDENT').valueChanges();
        db.list('STUDENT', function (ref) { return ref.orderByChild('AcademicYear').equalTo('2560'); }).valueChanges().subscribe(function (data) {
            console.log(data[1]['AcademicYear']);
            for (var i = 1; i <= data.length; i++) {
                console.log(data[i]['Course']);
                if (data[i]['Course'] === 'ปกติ') {
                    console.log(data[i]['Course']);
                    _this.c60 = data[i];
                }
            }
        });
        this.c60 = db.list('STUDENT', function (ref) { return ref.orderByChild('AcademicYear').equalTo('2560'); }).valueChanges();
        this.c59TO = db.list('STUDENT', function (ref) { return ref.orderByChild('AcademicYear').equalTo('2559'); }).valueChanges();
        this.c60TO = db.list('STUDENT', function (ref) { return ref.orderByChild('AcademicYear').equalTo('2560'); }).valueChanges();
        this.c61TO = db.list('STUDENT', function (ref) { return ref.orderByChild('AcademicYear').equalTo('2561'); }).valueChanges();
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.prototype.click = function (ID) {
        this.name = this.db.list('STUDENT', function (ref) { return ref.orderByChild('ID').equalTo(ID); }).valueChanges();
    };
    ViewComponent.prototype.cLink = function (id) {
        this.router.navigate(['/profile', id]);
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/view/view.module.ts":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/view/view-routing.module.ts");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view.component */ "./src/app/view/view.component.ts");





var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _view_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewRoutingModule"]
            ]
        })
    ], ViewModule);
    return ViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-view-module.js.map