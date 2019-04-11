(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main-heading{\n    text-align: center;\n    background-color: rgba(11, 11, 100, 0.925);\n    color: white;\n    padding:20px 0px;\n    font-size: 26px;\n    margin-bottom: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW4taGVhZGluZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMTEsIDEwMCwgMC45MjUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOjIwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2 class=\"main-heading\">Welcome to MyBlog Application</h2>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n\n    <!-- Navbar -->\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">About</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Post a blog</a>\n        </li>\n      </ul>\n\n    </div>\n  </nav>\n</div>\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog-view/blog-view.component */ "./src/app/blog-view/blog-view.component.ts");
/* harmony import */ var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog-create/blog-create.component */ "./src/app/blog-create/blog-create.component.ts");
/* harmony import */ var _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog-edit/blog-edit.component */ "./src/app/blog-edit/blog-edit.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog-http.service */ "./src/app/blog-http.service.ts");




//router module used for setting up the application level routing

//for forms

// For toastr












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_11__["BlogViewComponent"],
                _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_12__["BlogCreateComponent"],
                _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_13__["BlogEditComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
                    { path: 'blog/:blogId', component: _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_11__["BlogViewComponent"] },
                    { path: 'create', component: _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_12__["BlogCreateComponent"] },
                    { path: 'edit/:blogId', component: _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_13__["BlogEditComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_16__["BlogService"], _blog_http_service__WEBPACK_IMPORTED_MODULE_17__["BlogHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-create/blog-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required],.ng-valid.required{\n    border-left: 4px solid green;\n}\n\n.ng-invalid:not(form){\n    border-left: 4px solid red;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1jcmVhdGUvYmxvZy1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDBCQUEwQjs7QUFFOUIiLCJmaWxlIjoic3JjL2FwcC9ibG9nLWNyZWF0ZS9ibG9nLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwubmctdmFsaWQucmVxdWlyZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBncmVlbjtcbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pe1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<h3>Create Blog</h3>\n<form #createBlogForm=\"ngForm\" (ngSubmit)=\"createBlog()\">\n\n<div class=\"form-group\">\n  <label>Blog Title</label>\n  <input type=\"text\" class=\"form-control\" name=\"blogTitle\" [(ngModel)]=\"blogTitle\" #title=\"ngModel\" required>\n  <small [hidden]=\"title.valid || title.pristine\" class=\"form-text text-danger\">*Blog Title is required.</small>\n</div>\n\n<div class=\"form-group\">\n  <label>Description</label>\n  <input type=\"text\" class=\"form-control\" name=\"blogDescription\" [(ngModel)]=\"blogDescription\" #description=\"ngModel\" required>\n  <small [hidden]=\"description.valid || description.pristine\" class=\"form-text text-danger\">*Blog Description is required.</small>\n</div>\n\n<div class=\"form-group\">\n  <label>Enter the blog body</label>\n  <textarea class=\"form-control\" name=\"blogBodyHtml\" [(ngModel)]=\"blogBodyHtml\" #bodyHtml=\"ngModel\" rows=\"3\" required></textarea>\n  <small [hidden]=\"bodyHtml.valid || bodyHtml.pristine\" class=\"form-text text-danger\">*Blog Body is required.</small>\n</div>\n<div class=\"form-group\">\n  <label>Category</label>\n  <select [(ngModel)]=\"blogCategory\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n    <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n  </select>\n</div>\n\n<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createBlogForm.form.valid\">Create Blog</button>\n\n\n</form>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.ts ***!
  \******************************************************/
/*! exports provided: BlogCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCreateComponent", function() { return BlogCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var BlogCreateComponent = /** @class */ (function () {
    function BlogCreateComponent(_blogHttpService, _route, _router, toastr) {
        this._blogHttpService = _blogHttpService;
        this._router = _router;
        this.toastr = toastr;
        this.possibleCategories = [
            'Comedy', 'Drama', 'Action', 'Suspense', 'Thriller'
        ];
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
    };
    BlogCreateComponent.prototype.createBlog = function () {
        var _this = this;
        var blogData = {
            title: this.blogTitle,
            description: this.blogDescription,
            blogBody: this.blogBodyHtml,
            category: this.blogCategory
        };
        console.log(blogData);
        var createBlogObservable = this._blogHttpService.createBlog(blogData);
        createBlogObservable.subscribe(function (data) {
            console.log('Blog Created Successfully');
            console.log(data);
            _this.toastr.success('Blog Posted Successfully !', 'Success', {
                timeOut: 1500,
                positionClass: 'toast-top-full-width'
            });
            setTimeout(function () {
                _this._router.navigate(['/blog', data.data.blogId]);
            }, 1000);
        }, function (error) {
            console.log('Some error occurred');
            console.log(error.errorMessage);
        });
    };
    BlogCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-create',
            template: __webpack_require__(/*! ./blog-create.component.html */ "./src/app/blog-create/blog-create.component.html"),
            styles: [__webpack_require__(/*! ./blog-create.component.css */ "./src/app/blog-create/blog-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_2__["BlogHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BlogCreateComponent);
    return BlogCreateComponent;
}());



/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required],.ng-valid.required{\n    border-left: 4px solid green;\n}\n\n.ng-invalid:not(form){\n    border-left: 4px solid red;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1lZGl0L2Jsb2ctZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMEJBQTBCOztBQUU5QiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctZWRpdC9ibG9nLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF0sLm5nLXZhbGlkLnJlcXVpcmVke1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZ3JlZW47XG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKXtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJlZDtcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf=\"currentBlog\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<h3>Edit Blog</h3>\n<form #createBlogForm=\"ngForm\" (ngSubmit)=\"editBlog()\">\n\n<div class=\"form-group\">\n  <label>Blog Title</label>\n  <input type=\"text\" class=\"form-control\" name=\"blogTitle\" [(ngModel)]=\"currentBlog.title\" #title=\"ngModel\" required>\n  <small [hidden]=\"title.valid || title.pristine\" class=\"form-text text-danger\">*Blog Title is required.</small>\n</div>\n\n<div class=\"form-group\">\n  <label>Description</label>\n  <input type=\"text\" class=\"form-control\" name=\"blogDescription\" [(ngModel)]=\"currentBlog.description\" #description=\"ngModel\" required>\n  <small [hidden]=\"description.valid || description.pristine\" class=\"form-text text-danger\">*Blog Description is required.</small>\n</div>\n\n<div class=\"form-group\">\n  <label>Enter the blog body</label>\n  <textarea class=\"form-control\" name=\"blogBodyHtml\" [(ngModel)]=\"currentBlog.bodyHtml\" #bodyHtml=\"ngModel\" rows=\"3\" required></textarea>\n  <small [hidden]=\"bodyHtml.valid || bodyHtml.pristine\" class=\"form-text text-danger\">*Blog Body is required.</small>\n</div>\n<div class=\"form-group\">\n  <label>Category</label>\n  <select [(ngModel)]=\"currentBlog.category\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n    <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n  </select>\n</div>\n\n<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createBlogForm.form.valid\">Create Blog</button>\n\n\n</form>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BlogEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEditComponent", function() { return BlogEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BlogEditComponent = /** @class */ (function () {
    function BlogEditComponent(_route, router, _blogHttpService, toastr) {
        this._route = _route;
        this.router = router;
        this._blogHttpService = _blogHttpService;
        this.toastr = toastr;
        this.possibleCategories = [
            'Comedy', 'Drama', 'Action', 'Suspense', 'Thriller'
        ];
    }
    BlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log("ID '" + myBlogId + "' in edit mode.");
        this._blogHttpService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            _this.currentBlog = data["data"];
        }, function (error) {
            console.log('Some Error Occurrerd');
            console.log(error.errorMessage);
        });
        console.log("Current blog------>");
        console.log(this.currentBlog);
    };
    BlogEditComponent.prototype.editBlog = function () {
        var _this = this;
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        this._blogHttpService.editBlog(myBlogId, this.currentBlog).subscribe(function (data) {
            _this.toastr.success('Blog Edited Successfully !', 'Success', {
                timeOut: 1500,
                positionClass: 'toast-top-full-width'
            });
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 1000);
        }, function (error) {
            console.log('Some Error Occurrerd');
            console.log(error.errorMessage);
        });
    };
    BlogEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-edit',
            template: __webpack_require__(/*! ./blog-edit.component.html */ "./src/app/blog-edit/blog-edit.component.html"),
            styles: [__webpack_require__(/*! ./blog-edit.component.css */ "./src/app/blog-edit/blog-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _blog_http_service__WEBPACK_IMPORTED_MODULE_3__["BlogHttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], BlogEditComponent);
    return BlogEditComponent;
}());



/***/ }),

/***/ "./src/app/blog-http.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog-http.service.ts ***!
  \**************************************/
/*! exports provided: BlogHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHttpService", function() { return BlogHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var BlogHttpService = /** @class */ (function () {
    function BlogHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
        this.authToken = 'ZjVmOTZmODA5MDIzMTU1YzYyMWEwMTM1NTQxNTdhODdhYjYwOWE5OTVhNGM3ZGM4Y2U5MzU0NTJhN2Q5OTZlOTA4NzdhZjVkZGE2NGJkY2UxNTdmYmRlNTBiMTEzZDg5MjUxZDQ4M2QwNjA5ZTRlYjRjNTA2MjFmYjhmZDg1MDE1MQ==';
        this.authParam = '?authToken=' + this.authToken;
        console.log("Blog-Http Service Constructor was called...");
    }
    BlogHttpService.prototype.handleError = function (err) {
        console.log('Handle Error Http calls');
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.message);
    };
    BlogHttpService.prototype.getAllBlogs = function () {
        var myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
        // console.log(this.baseUrl + '/all' + "&authToken=" + this.authToken);
        return myResponse;
    };
    BlogHttpService.prototype.getSingleBlogInformation = function (currentBlogId) {
        // https://blogapp.edwisor.com/api/v1/blogs/view/:blogId
        var myResponse = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=' + this.authToken);
        // console.log(this.baseUrl + '/view/'+currentBlogId+'?authToken=' + this.authToken);
        return myResponse;
    };
    BlogHttpService.prototype.createBlog = function (blogData) {
        // https://blogapp.edwisor.com/api/v1/blogs/create
        var myResponse = this._http.post(this.baseUrl + "/create?authToken=" + this.authToken, blogData);
        return myResponse;
    };
    BlogHttpService.prototype.editBlog = function (blogId, blogData) {
        // https://blogapp.edwisor.com/api/v1/blogs/:blogId/edit
        var myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + this.authParam, blogData);
        return myResponse;
    };
    BlogHttpService.prototype.deleteBlog = function (blogId) {
        //https://blogapp.edwisor.com/api/v1/blogs/:blogId/delete
        var data = {};
        var myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + this.authParam, data);
        console.log(this.baseUrl + '/' + blogId + '/delete' + this.authParam);
        return myResponse;
    };
    BlogHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogHttpService);
    return BlogHttpService;
}());



/***/ }),

/***/ "./src/app/blog-view/blog-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctdmlldy9ibG9nLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\" *ngIf=\"currentBlog\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>{{currentBlog.title}}</h2>\n      <p>posted by {{currentBlog.author}} on {{currentBlog.created}}</p>\n      <p *ngIf=\"currentBlog.tags?.length>0\">tags: \n        <span *ngFor=\"let tag of currentBlog.tags;let first=first;let last=last\">{{tag}}{{last?\"\":','}}</span>\n        </p>\n      <hr>\n      <div [innerHtml]=\"currentBlog.bodyHtml\"></div>\n      <hr>\n      <h5>category = {{currentBlog.category}}</h5>\n    </div>\n  </div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <a  [routerLink]=\"['/edit',currentBlog.blogId]\" class=\"btn btn-primary\" role=\"button\">Edit</a>\n  </div>\n  <div class=\"col-md-4\">\n    <a class=\"btn btn-danger\" role=\"button\" (click)=\"deleteThisBlog()\">Delete</a>\n  </div>\n  <div class=\"col-md-4\">\n      <a class=\"btn btn-warning\" role=\"button\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n    </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.ts ***!
  \**************************************************/
/*! exports provided: BlogViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogViewComponent", function() { return BlogViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


// importing route related code



// for going back

var BlogViewComponent = /** @class */ (function () {
    function BlogViewComponent(_route, router, _blogHttpService, toastr, location) {
        this._route = _route;
        this.router = router;
        this._blogHttpService = _blogHttpService;
        this.toastr = toastr;
        this.location = location;
        console.log('BlogviewComponent Constructor is called');
        console.log(this.currentBlog);
    }
    BlogViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('BlogviewComponent ngOnInit is called');
        //getting blog id from route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        this.currentBlog = this._blogHttpService.getSingleBlogInformation(myBlogId);
        this.currentBlog.subscribe(function (data) {
            // console.log(data);
            _this.currentBlog = data["data"];
        }, function (error) {
            console.log('Some Error Occurrerd');
            console.log(error.errorMessage);
        });
        // console.log(this.currentBlog);
    };
    BlogViewComponent.prototype.ngOnDestroy = function () {
        console.log('BlogviewComponent ngOnDestroy is called');
    };
    BlogViewComponent.prototype.deleteThisBlog = function () {
        var _this = this;
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        var blogDeleteObservable = this._blogHttpService.deleteBlog(this.currentBlog.blogId);
        blogDeleteObservable.subscribe(function (data) {
            console.log(data['message']);
            _this.toastr.success('Blog Deleted Successfully !', 'Success', {
                timeOut: 1000,
                positionClass: 'toast-top-full-width'
            });
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 1000);
        }, function (error) {
            console.log('Some Error Occurrerd');
            console.log(error.errorMessage);
        });
    };
    BlogViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    BlogViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-view',
            template: __webpack_require__(/*! ./blog-view.component.html */ "./src/app/blog-view/blog-view.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]],
            styles: [__webpack_require__(/*! ./blog-view.component.css */ "./src/app/blog-view/blog-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _blog_http_service__WEBPACK_IMPORTED_MODULE_3__["BlogHttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], BlogViewComponent);
    return BlogViewComponent;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogService = /** @class */ (function () {
    function BlogService() {
        this.allBlogs = [
            {
                "blogId": "1",
                "lastModified": "Monday, April 11, 3008 2:45:07 PM",
                "created": "Saturday, April 2, 1932 3:09:01 AM",
                "author": "Bethany",
                "category": "Comedy",
                "isPublished": true,
                "views": "0",
                "bodyHtml": "This is blog1 body",
                "description": "AGtZlPhhOONleivx0v2J",
                "title": "Titanic",
                "tags": []
            },
            {
                "blogId": "2",
                "lastModified": "Monday, January 3, 2631 7:27:18 AM",
                "created": "Wednesday, July 9, 1175 5:16:47 PM",
                "author": "Ember",
                "category": "Action",
                "isPublished": true,
                "views": "0",
                "bodyHtml": "This is blog2 body",
                "description": "qScTg84fhM1w0Z6RHvQa",
                "title": "Shutter Island",
                "tags": []
            },
            {
                "blogId": "3",
                "lastModified": "Monday, April 23, 4001 4:56:06 AM",
                "created": "Sunday, January 13, 4047 1:13:56 AM",
                "author": "Mason",
                "category": "Drama",
                "isPublished": true,
                "views": "0",
                "bodyHtml": "<h1>This is blog3 body</h1>",
                "description": "Zyy80PxsGMQ73PWZj0Rj",
                "title": "Friends With Kids",
                "tags": []
            },
            {
                "blogId": "4",
                "lastModified": "Friday, June 9, 2102 1:46:45 AM",
                "created": "Thursday, March 14, 4391 7:30:56 AM",
                "author": "Michael",
                "category": "Suspense",
                "isPublished": true,
                "views": "0",
                "bodyHtml": "This is blog4 body",
                "description": "hoRlaztCOXcVlvMEycMJ",
                "title": "Terminator I",
                "tags": []
            },
            {
                "blogId": "5",
                "lastModified": "Thursday, April 21, 2107 11:26:13 AM",
                "created": "Monday, April 17, 1234 3:36:17 AM",
                "author": "Luke",
                "category": "Thriller",
                "isPublished": true,
                "views": "0",
                "bodyHtml": "This is blog5 body",
                "description": "6bhgNJLruhs7bwIMskb5",
                "title": "The Martian",
                "tags": []
            }
        ];
        console.log("Service Constructor is called...");
    }
    BlogService.prototype.getAllBlogs = function () {
        return this.allBlogs;
    };
    BlogService.prototype.getSingleBlogInformation = function (currentBlogId) {
        //https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
        for (var _i = 0, _a = this.allBlogs; _i < _a.length; _i++) {
            var blog = _a[_i];
            if (blog.blogId == currentBlogId) {
                return blog;
            }
        }
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{allBlogs.length>0}} -->\n<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:22px\">All Blogs</div>\n    <br><br><br><br>\n  </div>\n  <div class=\"row\" style=\"text-align:center\" *ngIf='allBlogs?.length>0'>\n    <div *ngFor=\"let blog of allBlogs\" class=\"col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">{{blog.title | uppercase}}</h4>\n        </div>\n\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{blog.description}}</p>\n        </div>\n\n        <div class=\"card-footer\">{{blog.created | date}}\n          <br><br> by {{blog.author}} <br><br>\n          <a [routerLink]=\"['/blog',blog.blogId]\" class=\"btn btn-primary\" role=\"button\">Read</a>\n        </div>\n\n      </div>\n      <br><br><br>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_blogHttpService) {
        this._blogHttpService = _blogHttpService;
        console.log("Home Component Constructor called....");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Home Component ngOnInit called....");
        var allBlogsObservable = this._blogHttpService.getAllBlogs();
        allBlogsObservable.subscribe(function (data) {
            // console.log(data);
            _this.allBlogs = data["data"];
        }, function (error) {
            console.log("Some Error Occurrerd");
            console.log(error.errorMessage);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home Component Destroyed....");
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_2__["BlogHttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/raj/Raj/Personal/Study/practice/edwisor/Angular7/blog-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map