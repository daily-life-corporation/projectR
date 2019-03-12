(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"] }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Image and text -->\n<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"/view\">\n    <img src=\"https://firebasestorage.googleapis.com/v0/b/armevolution-e60b8.appspot.com/o/_ionicons_svg_ios-home.svg?alt=media&token=5b991844-ef8e-4320-8909-317e51cabb02\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Home\n  </a>\n</nav><br> <br> <br> <br> <br> <br> <br>\n<div class=\"table-responsive-sm container\">\n  <table class=\"table table-sm col-sm-12\">\n<thead class=\"thead-dark\">\n  <tr>\n    <th scope=\"col col-md-auto\">รหัสนักศึกษา</th>\n    <th scope=\"col col-md-auto\">คำนำหน้า</th>\n    <th scope=\"col col-md-auto\">ชื่อ</th>\n    <th scope=\"col col-md-auto\">นามสกุล</th>\n    <th scope=\"col col-md-auto\">ชื่อเล่น</th>\n    <th scope=\"col col-md-auto\">ชื่อ EN</th>\n    <th scope=\"col col-md-auto\">นามสกุลEN</th>\n    <th scope=\"col col-md-auto\">หมายเลขบัตรประชาชน</th>\n    <th scope=\"col col-md-auto\">วันเดือนปีเกิด</th>\n    <th scope=\"col col-md-auto\">กรุ๊ปเลือด</th>\n    <th scope=\"col col-md-auto\">เบอร์โทร</th>\n\n  </tr>\n</thead>\n<tbody>\n    <tr>\n      <td>{{student.ID}}</td>\n      <td>{{student.prefix}}</td>\n      <td>{{student.FirstnameTH}}</td>\n      <td>{{student.LastnameTH}}</td>\n      <td>{{student.Nickname}}</td>\n      <td>{{student.FirstnameEN}}</td>\n      <td>{{student.LastnameEN}}</td>\n      <td>{{student.Idcard}}</td>\n      <td>{{student.Birthday}}</td>\n      <td>{{student.Blood}}</td>\n      <td>{{student.cellphone}}</td>\n\n\n    </tr>\n  </tbody>\n</table>\n</div> <br>\n<div class=\"table-responsive-sm container\">\n  <table class=\"table table-sm col-sm-12\">\n<thead class=\"thead-dark\">\n  <tr>\n    <th scope=\"col col-md-auto\">บ้านเลขที่</th>\n    <th scope=\"col col-md-auto\">หมู่ที่</th>\n    <th scope=\"col col-md-auto\">ถนน</th>\n    <th scope=\"col col-md-auto\">ซอย</th>\n    <th scope=\"col col-md-auto\">ตำบล</th>\n    <th scope=\"col col-md-auto\">รหัสตำบล</th>\n    <th scope=\"col col-md-auto\">อำเภอ</th>\n    <th scope=\"col col-md-auto\">รหัสอำเภอ</th>\n    <th scope=\"col col-md-auto\">จังหวัด</th>\n    <th scope=\"col col-md-auto\">รหัสจังหวัด</th>\n    <th scope=\"col col-md-auto\">รหัสไปรษณีย์</th>\n\n  </tr>\n</thead>\n<tbody>\n    <tr>\n      <td>{{student.Housenumber}}</td>\n      <td>{{student.VillageNo}}</td>\n      <td>{{student.Road}}</td>\n      <td>{{student.Alley}}</td>\n      <td>{{student.Subdistrict}}</td>\n      <td>{{student.Subdistrictcode}}</td>\n      <td>{{student.District}}</td>\n      <td>{{student.Districtcode}}</td>\n      <td>{{student.province}}</td>\n      <td>{{student.Provincecode}}</td>\n      <td>{{student.Zipcode}}</td>\n\n    </tr>\n  </tbody>\n</table>\n</div> <br>\n\n<div class=\"table-responsive-sm container\">\n  <table class=\"table table-sm col-sm-12\">\n<thead class=\"thead-dark\">\n  <tr>\n    <th scope=\"col col-md-auto\">สถานศึกษาเดิม</th>\n    <th scope=\"col col-md-auto\">รหัสสถานศึกษา</th>\n    <th scope=\"col col-md-auto\">สาขาที่จบการศึกษา</th>\n    <th scope=\"col col-md-auto\">เกรดเฉลี่ย</th>\n    <th scope=\"col col-md-auto\">วุฒิการศึกษา</th>\n\n  </tr>\n</thead>\n<tbody>\n    <tr>\n      <td>{{student.Schoolname}}</td>\n      <td>{{student.Schoolcode}}</td>\n      <td>{{student.GraduationBranch}}</td>\n      <td>{{student.GPA}}</td>\n      <td>{{student.Completededucation}}</td>\n\n    </tr>\n  </tbody>\n</table>\n</div> <br>\n<div class=\"table-responsive-sm container\">\n  <table class=\"table table-sm col-sm-12\">\n<thead class=\"thead-dark\">\n  <tr>\n    <th scope=\"col col-md-auto\">ปีการศึกษา</th>\n    <th scope=\"col col-md-auto\">คณะ</th>\n    <th scope=\"col col-md-auto\">รหัสคณะ</th>\n    <th scope=\"col col-md-auto\">สาขา</th>\n    <th scope=\"col col-md-auto\">รหัสสาขา</th>\n    <th scope=\"col col-md-auto\">หลักสูตร</th>\n    <th scope=\"col col-md-auto\">จำนวนหลักสูตร</th>\n    <th scope=\"col col-md-auto\">กลุ่มเรียน</th>\n    <th scope=\"col col-md-auto\">อาจารย์ที่ปรึกษา</th>\n    <th scope=\"col col-md-auto\">รหัสอาจารย์ที่ปรึกษา</th>\n  </tr>\n</thead>\n<tbody>\n    <tr>\n      <td>{{student.AcademicYear}}</td>\n      <td>{{student.faculty}}</td>\n      <td>{{student.FacultyCode}}</td>\n      <td>{{student.Branch}}</td>\n      <td>{{student.Branchcode}}</td>\n      <td>{{student.status}}</td>\n      <td>{{student.Year}}</td>\n      <td>{{student.Studygroup}}</td>\n      <td>{{student.Advisors}}</td>\n      <td>{{student.Teachercode}}</td>\n\n\n    </tr>\n  </tbody>\n</table>\n</div> <br>\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(db, route) {
        var _this = this;
        this.db = db;
        this.route = route;
        this.IDSTUDENT = this.route.params.subscribe(function (params) {
            _this.dbstudent = params['id'];
            console.log(_this.dbstudent); // Print the parameter to the console.
        });
        this.db.list('STUDENT', function (ref) { return ref.orderByChild('ID').equalTo(_this.dbstudent); }).valueChanges().subscribe(function (data) {
            console.log(data);
            _this.student = data[0];
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");





var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map