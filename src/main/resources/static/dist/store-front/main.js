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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden{\r\n    display:none;\r\n}\r\n.show{\r\n    display:block;\r\n}\r\n#modal-container {\r\n    position:  fixed;\r\n    top: 80px;\r\n    left: 45%;\r\n    width: 500px;\r\n    background: white;\r\n    margin-left: -187.5px;\r\n    text-align: center;\r\n    box-shadow: 0px 0px 2px 1px black;\r\n    z-index: 100;\r\n}\r\n#overlay {\r\n    position: absolute;\r\n    top: 0px;\r\n    left:  0px;\r\n    z-index:  99;\r\n    background:  rgba(0,0,0,0.3);\r\n    width:  100%;\r\n    height: 211%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<div id=\"modal-container\" class=\"hidden\"></div>\n<div id=\"overlay\" (click)=\"removeModal()\" class=\"hidden\"></div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_book_list_data_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/book-list/data.filter.pipe */ "./src/app/components/book-list/data.filter.pipe.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/shipping.service */ "./src/app/services/shipping.service.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/my-account/my-account.component */ "./src/app/components/my-account/my-account.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/book-list/book-list.component */ "./src/app/components/book-list/book-list.component.ts");
/* harmony import */ var _components_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/book-detail/book-detail.component */ "./src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ "./src/app/components/order-summary/order-summary.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/curriculum/curriculum.component */ "./src/app/components/curriculum/curriculum.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_23__["NavBarComponent"],
                _components_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_24__["MyAccountComponent"],
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_25__["LogoComponent"],
                _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_26__["MyProfileComponent"],
                _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_27__["BookListComponent"],
                _components_book_list_data_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["DataFilterPipe"],
                _components_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_28__["BookDetailComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_29__["ShoppingCartComponent"],
                _components_order_order_component__WEBPACK_IMPORTED_MODULE_30__["OrderComponent"],
                _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_31__["OrderSummaryComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_32__["FooterComponent"],
                _components_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_33__["CurriculumComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__["EditorModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"]
            ],
            providers: [
                _services_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"],
                _services_payment_service__WEBPACK_IMPORTED_MODULE_15__["PaymentService"],
                _services_shipping_service__WEBPACK_IMPORTED_MODULE_16__["ShippingService"],
                _services_book_service__WEBPACK_IMPORTED_MODULE_17__["BookService"],
                _services_cart_service__WEBPACK_IMPORTED_MODULE_18__["CartService"],
                _services_order_service__WEBPACK_IMPORTED_MODULE_19__["OrderService"],
                _services_checkout_service__WEBPACK_IMPORTED_MODULE_20__["CheckoutService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/my-account/my-account.component */ "./src/app/components/my-account/my-account.component.ts");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/book-list/book-list.component */ "./src/app/components/book-list/book-list.component.ts");
/* harmony import */ var _components_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/book-detail/book-detail.component */ "./src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ "./src/app/components/order-summary/order-summary.component.ts");
/* harmony import */ var _components_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/curriculum/curriculum.component */ "./src/app/components/curriculum/curriculum.component.ts");










var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'myAccount',
        component: _components_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__["MyAccountComponent"]
    },
    {
        path: 'myProfile',
        component: _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"]
    },
    {
        path: 'bookList',
        component: _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"]
    },
    {
        path: 'bookDetail/:id',
        component: _components_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_5__["BookDetailComponent"]
    },
    {
        path: 'shoppingCart',
        component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"]
    },
    {
        path: 'checkout',
        component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"]
    },
    {
        path: 'orderSummary',
        component: _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_8__["OrderSummaryComponent"]
    },
    {
        path: 'myCV',
        component: _components_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_9__["CurriculumComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/book-detail/book-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/book-detail/book-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/book-detail/book-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/book-detail/book-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-logo spanLabel=\"Book Details\"></app-logo>\n\n  <div class=\"row\">\n        <div class=\"row\" style=\"margin-top: 20px;\">\n            <div class=\"col-6\">\n                <a routerLink=\"/bookList\">Back to book list</a>\n                <br />\n                <img class=\"img-responsive shadow p-8 mb-6\" src=\"{{serverPath}}/image/book/{{book.id}}.png\" style=\"width: 50%; margin: 25px 0px;\"/>\n            </div>\n            <div class=\"col-6\" style=\"margin-top: 40px; margin-left: -120px\">\n                <h3><span *ngIf=\"addBookSuccess\" style=\"color:forestgreen\"><i class=\"fa fa-check\" style=\"color:forestgreen\"></i>Added to cart.</span></h3>\n                <h3><span *ngIf=\"notEnoughStock\" style=\"color:red\">Oops, only <span>{{book.inStockNumber}}</span> In Stock.</span> </h3>\n                <h3>{{book.title}}</h3>\n                <div class=\"row\">\n                    <div class=\"col-5\">\n                        <h5><strong>Author: </strong><span>{{book.author}}</span></h5>\n                        <p><strong>Publisher:</strong><span>{{book.publisher}}</span></p>\n                        <p><strong>Publication Date:</strong><span>{{book.publicationDate}}</span></p>\n                        <p><strong>Language:</strong><span>{{book.language}}</span></p>\n                        <p><strong>Category:</strong><span>{{book.category}}</span></p>\n                        <p><strong><span>{{book.format}}</span>:</strong> <span>{{book.numberOfPages}}</span> pages</p>\n                        <p><strong>ISBN:</strong> <span>{{book.isbn}}</span></p>\n                        <p><strong>Shipping Weight:</strong> <span>{{book.shippingWeight}}</span> ounces</p>\n                    </div>\n                    <div class=\"col-7\">\n                        <div class=\"panel panel-default panel-faq\" style=\"border-width:5px; margin-top:40px;\">\n                            <div class=\"panel-body\" style=\"background-color: #ededed; margin-top:20px; padding: 20px;\">\n                                <div class=\"col-10\">\n                                    <h4>Our Price: <span style=\"color: #db3208;\">$<span>\n                        {{book.ourPrice | number : '1.2-2'}}\n                      </span></span></h4>\n                                    <p>List Price: <span style=\"text-decoration:line-through;\">$<span>{{book.listPrice | number : '1.2-2'}}</span></span>\n                                    </p>\n                                    <p>You Save: $<span>{{book.listPrice-book.ourPrice | number : '1.2-2'}}</span></p>\n                                    <span>Qty: &nbsp;</span>\n                                    <select [(ngModel)]=\"qty\" class=\"browser-default\" style=\"width:50px; display:inline;\">\n                                        <option *ngFor=\"let x of numberList\" [ngValue]=\"x\">{{x}}</option>\n                                    </select>\n                                </div>\n                                <br>\n                                <div class=\"col-6\">\n                                    <h4 *ngIf=\"book.inStockNumber>10\" style=\"color:green;\">In Stock</h4>\n                      <h4 *ngIf=\"book.inStockNumber<10 && book.inStockNumber>0\" style=\"color:green;\">Only <span>{{book.inStockNumber}}</span> In Stock</h4>\n                      <h4 *ngIf=\"book.inStockNumber==0\" style=\"color:darkred;\">Unavailable</h4>\n                      <button mat-raised-button [disabled]=\"book.inStockNumber==0\" (click)=\"onAddToCart()\" class=\"custom\">Add to Cart</button>\n                    </div>\n                  </div>\n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <hr />\n            <p>{{book.description}}</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/book-detail/book-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/book-detail/book-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book */ "./src/app/models/book.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const/app-const */ "./src/app/const/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(bookService, cartService, router, http, route) {
        this.bookService = bookService;
        this.cartService = cartService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.book = new _models_book__WEBPACK_IMPORTED_MODULE_1__["Book"]();
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_6__["AppConst"].serverPath;
        this.numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.addBookSuccess = false;
        this.notEnoughStock = false;
    }
    BookDetailComponent.prototype.onAddToCart = function () {
        var _this = this;
        this.cartService.addItem(this.bookId, this.qty).subscribe(function (res) {
            console.log(res.text());
            _this.addBookSuccess = true;
        }, function (err) {
            console.log(err.text());
            _this.notEnoughStock = true;
        });
    };
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.bookId = Number.parseInt(params['id']);
        });
        this.bookService.getBook(this.bookId).subscribe(function (res) {
            _this.book = res.json();
        }, function (error) {
            console.log(error);
        });
        this.qty = 1;
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/components/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.css */ "./src/app/components/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/book-list/book-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/book-list/book-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topleft {\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 16px;\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/components/book-list/book-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/book-list/book-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <app-logo spanLabel=\"Book Shelf\"></app-logo>\n\n   <div class=\"row\">\n      <div class=\"col-3\"></div>\n      <div class=\"col-12\">\n        <table class=\"table\" [mfData]=\"bookList | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\n          <thead>\n            <tr>\n              <th colspan=\"5\">\n                <div class=\"row\">\n                  <div class=\"col-9\">\n                    Filter by Description:\n                    <input style=\"margin-top: 8px;\"class=\"form-control\" [(ngModel)]=\"filterQuery\" />\n                  </div>\n                  <div class=\"col-3\">\n                    <label class=\"label-control\">Rows on page</label>\n                    <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\n                      <option [ngValue]=\"5\">5</option>\n                      <option [ngValue]=\"10\">10</option>\n                      <option [ngValue]=\"15\">15</option>\n                    </select>\n                  </div>\n                </div>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor = \"let book of mf.data\">\n              <div class=\"row\">\n                <div class=\"col-3\">\n                  <a (click)=\"onSelect(book)\" style=\"cursor:pointer;\">\n                    <img class=\"img-responsive\" src=\"{{serverPath}}/image/book/{{book.id}}.png\" style=\"width: 65%; margin-top: 20px;\" />\n                  </a>\n                </div>\n                <div class=\"col-9\">\n                  <h4 (click)=\"onSelect(book)\" style=\"margin-top:20px; cursor:pointer;\">{{book.title}}\n                  </h4>\n                  <span>{{book.publicationDate}}</span>\n                  <p>{{book.author}}</p>\n                  <a (click)=\"onSelect(book)\" style=\"cursor:pointer;\"><span>{{book.format | uppercase}}</span></a>\n                  <span>  {{book.numberOfPages}}</span><span> pages</span>\n                  <br />\n                  <a (click)=\"onSelect(book)\"><span style=\"font-size: x-large; color:#db3208\">$<span>{{book.ourPrice | number : '1.2-2'}}  </span></span></a>\n                  <span style=\"text-decoration:line-through;\">$<span>{{book.listPrice | number : '1.2-2'}}</span></span>\n                  <!-- use tinyMCE to display every desxription correctly -->\n                  <p>{{book.description | slice:0:500}}</p>\n                </div>\n              </div>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"5\">\n                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/book-list/book-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/book-list/book-list.component.ts ***!
  \*************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const/app-const */ "./src/app/const/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService, router, http, route) {
        this.bookService = bookService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.filterQuery = "";
        this.rowsOnPage = 5;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_4__["AppConst"].serverPath;
    }
    BookListComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail', this.selectedBook.id]);
    };
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['bookList']) {
                console.log("filtered book list");
                _this.bookList = JSON.parse(params['bookList']);
            }
            else {
                _this.bookService.getBookList().subscribe(function (res) {
                    console.log(res.json());
                    _this.bookList = res.json();
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/components/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/components/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/components/book-list/data.filter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/book-list/data.filter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = /** @class */ (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, function (row) { return row.description.indexOf(query) > -1; });
        }
        return array;
    };
    DataFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "dataFilter"
        })
    ], DataFilterPipe);
    return DataFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/curriculum/curriculum.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/curriculum/curriculum.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\narticle,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {\r\ndisplay:block;\r\n}\r\n\r\nhtml, body {background: #181818; font-family: 'Lato', helvetica, arial, sans-serif; font-size: 16px; color: #222;}\r\n\r\n.clear {clear: both;}\r\n\r\np {\r\n  font-size: 1em;\r\n  line-height: 1.4em;\r\n  margin-bottom: 20px;\r\n  color: #444;\r\n}\r\n\r\n#cv {\r\n  width: 100%;\r\n  max-width: 800px;\r\n  background: #f3f3f3;\r\n  margin: 30px auto;\r\n}\r\n\r\n.mainDetails {\r\n  padding: 25px 35px;\r\n  border-bottom: 2px solid #cf8a05;\r\n  background: #ededed;\r\n}\r\n\r\n#name h1 {\r\n  font-size: 2.5em;\r\n  font-weight: 700;\r\n  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;\r\n  margin-bottom: -6px;\r\n}\r\n\r\n#name h2 {\r\n  font-size: 2em;\r\n  margin-left: 2px;\r\n  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n#mainArea {\r\n  padding: 0 40px;\r\n}\r\n\r\n#headshot {\r\n  width: 12.5%;\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n#headshot img {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 50px;\r\n}\r\n\r\n#name {\r\n  float: left;\r\n}\r\n\r\n#contactDetails {\r\n  float: right;\r\n}\r\n\r\n#contactDetails ul {\r\n  list-style-type: none;\r\n  font-size: 0.9em;\r\n  margin-top: 2px;\r\n}\r\n\r\n#contactDetails ul li {\r\n  margin-bottom: 3px;\r\n  color: #444;\r\n}\r\n\r\n#contactDetails ul li a, a[href^=tel] {\r\n  color: #444; \r\n  text-decoration: none;\r\n  transition: all .3s ease-in;\r\n}\r\n\r\n#contactDetails ul li a:hover { \r\n  color: #cf8a05;\r\n}\r\n\r\nsection {\r\n  border-top: 1px solid #dedede;\r\n  padding: 20px 0 0;\r\n}\r\n\r\nsection:first-child {\r\n  border-top: 0;\r\n}\r\n\r\nsection:last-child {\r\n  padding: 20px 0 10px;\r\n}\r\n\r\n.sectionTitle {\r\n  float: left;\r\n  width: 25%;\r\n}\r\n\r\n.sectionContent {\r\n  float: right;\r\n  width: 72.5%;\r\n}\r\n\r\n.sectionTitle h1 {\r\n  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;\r\n  font-style: italic;\r\n  font-size: 1.5em;\r\n  color: #cf8a05;\r\n}\r\n\r\n.sectionContent h2 {\r\n  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;\r\n  font-size: 1.5em;\r\n  margin-bottom: -2px;\r\n}\r\n\r\n.subDetails {\r\n  font-size: 0.8em;\r\n  font-style: italic;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.keySkills {\r\n  list-style-type: none;\r\n  -webkit-column-count:3;\r\n  column-count:3;\r\n  margin-bottom: 20px;\r\n  font-size: 1em;\r\n  color: #444;\r\n}\r\n\r\n.keySkills ul li {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n@media all and (min-width: 602px) and (max-width: 800px) {\r\n  #headshot {\r\n    display: none;\r\n  }\r\n  \r\n  .keySkills {\r\n  -webkit-column-count:2;\r\n  column-count:2;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 601px) {\r\n  #cv {\r\n    width: 95%;\r\n    margin: 10px auto;\r\n    min-width: 280px;\r\n  }\r\n  \r\n  #headshot {\r\n    display: none;\r\n  }\r\n  \r\n  #name, #contactDetails {\r\n    float: none;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .sectionTitle, .sectionContent {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n  \r\n  .sectionTitle {\r\n    margin-left: -2px;\r\n    font-size: 1.25em;\r\n  }\r\n  \r\n  .keySkills {\r\n    -webkit-column-count:2;\r\n    column-count:2;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 480px) {\r\n  .mainDetails {\r\n    padding: 15px 15px;\r\n  }\r\n  \r\n  section {\r\n    padding: 15px 0 0;\r\n  }\r\n  \r\n  #mainArea {\r\n    padding: 0 25px;\r\n  }\r\n\r\n  \r\n  .keySkills {\r\n  -webkit-column-count:1;\r\n  column-count:1;\r\n  }\r\n  \r\n  #name h1 {\r\n    line-height: .8em;\r\n    margin-bottom: 4px;\r\n  }\r\n}\r\n\r\n@media print {\r\n    #cv {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes reset {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes reset {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.instaFade {\r\n    -webkit-animation-name: reset, fade-in;\r\n    -webkit-animation-duration: 1.5s;\r\n    -webkit-animation-timing-function: ease-in;\r\n  \r\n  -moz-animation-name: reset, fade-in;\r\n    -moz-animation-duration: 1.5s;\r\n    -moz-animation-timing-function: ease-in;\r\n  \r\n  animation-name: reset, fade-in;\r\n    animation-duration: 1.5s;\r\n    animation-timing-function: ease-in;\r\n}\r\n\r\n.quickFade {\r\n    -webkit-animation-name: reset, fade-in;\r\n    -webkit-animation-duration: 2.5s;\r\n    -webkit-animation-timing-function: ease-in;\r\n  \r\n  -moz-animation-name: reset, fade-in;\r\n    -moz-animation-duration: 2.5s;\r\n    -moz-animation-timing-function: ease-in;\r\n  \r\n  animation-name: reset, fade-in;\r\n    animation-duration: 2.5s;\r\n    animation-timing-function: ease-in;\r\n}\r\n\r\n.delayOne {\r\n  -webkit-animation-delay: 0, .5s;\r\n  animation-delay: 0, .5s;\r\n}\r\n\r\n.delayTwo {\r\n  -webkit-animation-delay: 0, 1s;\r\n  animation-delay: 0, 1s;\r\n}\r\n\r\n.delayThree {\r\n  -webkit-animation-delay: 0, 1.5s;\r\n  animation-delay: 0, 1.5s;\r\n}\r\n\r\n.delayFour {\r\n  -webkit-animation-delay: 0, 2s;\r\n  animation-delay: 0, 2s;\r\n}\r\n\r\n.delayFive {\r\n  -webkit-animation-delay: 0, 2.5s;\r\n  animation-delay: 0, 2.5s;\r\n}"

/***/ }),

/***/ "./src/app/components/curriculum/curriculum.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/curriculum/curriculum.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"cv\" class=\"instaFade\">\n  <div class=\"mainDetails\">\n    <div id=\"headshot\" class=\"quickFade\">\n      <img src=\"../../../assets/image/yo.jpg\" alt=\"Diego Salas\" />\n    </div>\n    \n    <div id=\"name\">\n      <h1 class=\"quickFade delayTwo\">Diego Salas</h1>\n      <h2 class=\"quickFade delayThree\">Web Developer</h2>\n    </div>\n    \n    <div id=\"contactDetails\" class=\"quickFade delayFour\">\n      <ul>\n        <li>email: <a href=\"mailto:dominicsc2hs@gmail.com\" target=\"_blank\">dominicsc2hs@gmail.com</a></li>\n        <li>github: <a href=\"https://github.com/DiegoSalas27\">DiegoSalas27</a></li>\n      </ul>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n  \n  <div id=\"mainArea\" class=\"quickFade delayFive\">\n    <section>\n      <article>\n        <div class=\"sectionTitle\">\n          <h1>Personal Profile</h1>\n        </div>\n        \n        <div class=\"sectionContent\">\n          <p>I hold a bachellor degree in culinary arts from Le Cordon Bleu University and I am an English teacher certified by the Asociación Cultural Peruano Británica, but stopped working after 2 years. Currently, I´m studying Software engineering at UPC University and I´m in the sixth semester of my carrer. I´m looking forward to developing my skills as a web and android developer, branches in which I consider to have an intermediate level.</p>\n        </div>\n      </article>\n      <div class=\"clear\"></div>\n    </section>\n    \n    \n    <section>\n      <div class=\"sectionTitle\">\n        <h1>Work Experience</h1>\n      </div>\n      \n      <div class=\"sectionContent\">\n        <article>\n          <h2>Estamos Fritos </h2>\n          <p class=\"subDetails\">2015 – December 2015</p>\n          <p>Chef in charge of Fry Station</p>\n        </article>\n        \n        <article>\n          <h2>Rodrigo restaurant</h2>\n          <p class=\"subDetails\">March 2014 - July 2014</p>\n          <p>Chef trainee in charge of mise en place</p>\n        </article>\n        \n        <article>\n          <h2>Amaz restaurant</h2>\n          <p class=\"subDetails\">enero 2013 - abril 2013</p>\n          <p>Chef trainee under Cold Station</p>\n        </article>\n      </div>\n      <div class=\"clear\"></div>\n    </section>\n    \n    \n    <section>\n      <div class=\"sectionTitle\">\n        <h1>Hard Skills</h1>\n      </div>\n      \n      <div class=\"sectionContent\">\n        <article>\n          <h2>Languages:</h2> <p>JavaScript, Css, Html, Java, C#, C++, Sql</p>\n          <h2>DBMS:</h2> <p>Postgres, MySql, Sql Server</p>\n          <h2>Frontend:</h2> <p>React, Angular</p>\n          <h2>Web frameworks:</h2> <p>ASP.NET, Spring Boot</p>\n        </article>\n      </div>\n      <div class=\"clear\"></div>\n    </section>\n    \n    \n    <section>\n      <div class=\"sectionTitle\">\n        <h1>Education</h1>\n      </div>\n      \n      <div class=\"sectionContent\">\n        <article>\n          <h2>UPC University</h2>\n          <p class=\"subDetails\">April 2016 - Present </p>\n        </article>\n        \n        <article>\n          <h2>Le Cordon Bleu University</h2>\n          <p class=\"subDetails\">April 2011- July 2016 </p>\n          <p>Finished.</p>\n        </article>\n      </div>\n      <div class=\"clear\"></div>\n    </section>\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/curriculum/curriculum.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/curriculum/curriculum.component.ts ***!
  \***************************************************************/
/*! exports provided: CurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumComponent", function() { return CurriculumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurriculumComponent = /** @class */ (function () {
    function CurriculumComponent() {
    }
    CurriculumComponent.prototype.ngOnInit = function () {
    };
    CurriculumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-curriculum',
            template: __webpack_require__(/*! ./curriculum.component.html */ "./src/app/components/curriculum/curriculum.component.html"),
            styles: [__webpack_require__(/*! ./curriculum.component.css */ "./src/app/components/curriculum/curriculum.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CurriculumComponent);
    return CurriculumComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n  color: white;\r\n  margin-top: 100px;\r\n}\r\nfooter a{\r\n  color: #DADADA;\r\n}\r\nfooter a:hover{\r\n  color: white;\r\n}\r\n.title{\r\n  color: white;\r\n}\r\n.footer-bottom{\r\n  background: #3D3D3D;\r\n  padding: 0.5em;\r\n}\r\n.footer-top{\r\n  background: #3D3D3D;  \r\n}\r\n.footer-middle{\r\n  background: #727272;\r\n  padding-top: 2em;\r\n  color: #DADADA;\r\n}\r\n/**Sub Navigation**/\r\n.subnavigation-container{\r\n  background: #3d6277;\r\n}\r\n.subnavigation .nav-link{\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.subnavigation-container{\r\n  text-align: center;\r\n}\r\n.subnavigation-container .navbar{\r\n  display: inline-block;\r\n  margin-bottom: -6px; /* Inline-block margin offffset HACK -Gilron */\r\n}\r\n.col-subnav a{\r\n  padding: 1rem 1rem;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.col-subnav .active{\r\n  border-top:5px solid orange;\r\n background: white;\r\n  color: black;\r\n}\r\n.list-unstyled > li > a {\r\n text-decoration: none;\r\n transition: color 0.3s linear;\r\n -webkit-transition: color 0.3s linear;\r\n -moz-transition: color 0.3s linear;\r\n  padding-top: 10px;\r\n  color: #DADADA;\r\n  margin-left:30px;\r\n}\r\n.list-unstyled > li > a:hover,\r\n.list-unstyled > li > a:focus {\r\n    color: white;\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<footer class=\"mainfooter\" role=\"contentinfo\">\n\n  <div class=\"footer-middle\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-6\">\n        <!--Column1-->\n        <div class=\"footer-pad\">\n          <h4 class=\"title\">Address</h4>\n          <address>\n                <ul class=\"list-unstyled\">\n                  <li>\n                    Av. Maximiliano Velarde Pj2<br>\n                    Mz. B Lot 3<br>\n                    Tercer Piso<br>\n                  </li>\n                  <li>\n                    Phone: 959363398\n                  </li>\n                </ul>\n              </address>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-6\">\n        <!--Column1-->\n        <div class=\"footer-pad\">\n          <h4 class=\"title\" style=\"margin-bottom: 15px;\">Services</h4>\n          <ul class=\"list-unstyled\">\n            <li><a class=\"nav-link\" style=\"margin: -15px;\" routerLink=\"/myAccount\">None yet</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-6\">\n        <!--Column1-->\n        <div class=\"footer-pad\">\n          <h4 class=\"title\" style=\"margin-bottom: 15px;\">Website Information</h4>\n          <ul class=\"list-unstyled\">\n            <li><a class=\"nav-link\" style=\"margin: -15px;\" routerLink=\"/myAccount\">FAQs</a></li>\n            <li><a class=\"nav-link\" style=\"margin: -15px;\" routerLink=\"/myAccount\">Webmaster</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-6\">\n        <!--Column1-->\n        <div class=\"footer-pad\">\n          <h4 class=\"title\" style=\"margin-bottom: 15px;\">About me</h4>\n          <ul class=\"list-unstyled\">\n            <li><a class=\"nav-link\" style=\"margin: -15px;\" routerLink=\"/myCV\">CV</a></li>\n            <li><a class=\"nav-link\" style=\"margin: -15px;\" href=\"https://github.com/DiegoSalas27\">Github</a></li>\n            <li><a class=\"nav-link\" style=\"margin: -15px;\" href=\"https://www.facebook.com/diego.salasnoain\">Facebook</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  <div class=\"footer-bottom\" style=\"padding-top: 20px;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <!--Footer Bottom-->\n          <p class=\"text-center\">&copy; Copyright 2018 - Dom's BookStore Inc..  All rights reserved.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <app-logo spanLabel=\"Home\"></app-logo>\n\n  <div style=\"margin-top: 40px\" class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <a class=\"pointer\" routerLink=\"/bookList\">\n            <img src=\"../../../assets/image/bestseller.png\" class=\"img-fluid\"/>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <a class=\"pointer\" routerLink=\"/hours\">\n            <img src=\"../../../assets/image/hours.png\" class=\"img-fluid\"/>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <a class=\"pointer\" routerLink=\"/faq\">\n            <img src=\"../../../assets/image/faq.png\" class=\"img-fluid\"/>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <div style=\"margin-top: 40px\" class=\"home-headline\"><span>Featured Books</span></div>\n    <hr style=\"margin-top: -15px;\" />\n  </div>\n\n  <img class=\"img-fluid\" src=\"../../../assets/image/shelf.png\"  style=\" margin-top: -5px; z-index:-1;\" />\n\n  <div class=\"row\" style=\"margin:auto; margin-top:-190px; margin-bottom:50px; width:90%;\">\n    <div class=\"col-2\">\n      <img class=\"img-fluid\" style=\"width: 65%;\" src=\"../../../assets/image/book1.png\" />\n    </div>\n    <div class=\"col-2\">\n      <img class=\"img-fluid\" style=\"width: 65%;\" src=\"../../../assets/image/book1.png\" />\n    </div>\n    <div class=\"col-2\">\n      <img class=\"img-fluid\" style=\"width: 65%;\" src=\"../../../assets/image/book1.png\" />\n    </div>\n    <div class=\"col-2\">\n      <img class=\"img-fluid\" style=\"width: 65%;\" src=\"../../../assets/image/book1.png\" />\n    </div>\n    <div class=\"col-2\">\n      <img class=\"img-fluid\" style=\"width: 65%;\" src=\"../../../assets/image/book1.png\" />\n    </div>\n    <div class=\"col-2\">\n      <img class=\"img-fluid\" style=\"width: 65%;\" src=\"../../../assets/image/book1.png\" />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/logo/logo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left: 30px\">\n    <div class=\"col-8\">\n      <h2 style=\"margin-top: 10px;\" class=\"section-headline float-left\"><span>{{spanLabel}}</span></h2>\n    </div>\n    <div class=\"col-4\">\n      <img src=\"../../../assets/image/logo.png\" class=\"img-fluid float-center\" style=\"width:250px; z-index:1;\" />\n    </div>\n    <img src=\"../../../assets/image/wood.png\" class=\"img-fluid right rounded\" style=\"position: absolute; margin-top: 10px; z-index: -1;\" />\n</div>"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LogoComponent.prototype, "spanLabel", void 0);
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.css */ "./src/app/components/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/my-account/my-account.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/my-account/my-account.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/my-account/my-account.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-account/my-account.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <app-logo spanLabel=\"My Account\"></app-logo>\n\n  <div class=\"row\" style=\"margin-top:30px;\">\n    <div class=\"col-3\"></div>\n    <div class=\"col-12\">\n      <div class=\"panel-group\">\n        <div class=\"panel panel-default panel-faq\" style=\"border:none;\">\n          <div class=\"panel-body\" style=\"background-color: #ededed; margin-top:20px;\">\n            <mat-tab-group dynamicHeight class=\"shadow p-10 mb-12\">\n              <mat-tab label=\"Login\">\n                <div style=\"margin:20px;\">\n                  <div *ngIf=\"loginError\" style=\"color:red;\">\n                    Incorrect username or password.\n                  </div>\n\n                  <form (ngSubmit)=\"onLogin()\">\n                    <div class=\"form-group\">\n                      <label for =\"username\">Username *</label>\n                      <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"credential.username\" required=\"required\" autofocus=\"autofocus\">\n                      <p style=\"color:#828282;\">Enter your username</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for =\"password\">Password *</label>\n                      <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"credential.password\" required=\"required\" autofocus=\"autofocus\">\n                      <p style=\"color:#828282;\">Enter your password</p>\n                    </div>\n                    <button mat-raised-button type=\"submit\" class=\"custom\">Log In</button>\n                  </form>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"New Account\">\n                <div style=\"margin:20px;\">\n                  <div class=\"alert alert-info\" *ngIf=\"emailSent\">An email has been sent to the email address you have just registered. Please validate your email address and update your password.</div>\n                \n                  <form (ngSubmit)=\"onNewAccount()\">\n                    <div class=\"form-group\">\n                      <label for=\"newUsername\">Username *</label>&nbsp;<!-- space --><span *ngIf=\"usernameExists\" style=\"color: red;\">Username already exists. Please choose different one</span>\n                      <input type=\"text\" class=\"form-control\" id=\"newUsername\" name=\"username\" [(ngModel)]=\"username\" required=\"required\">\n                      <p style=\"color:#828282;\">Enter your username</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email address *</label>&nbsp;<!-- space --><span *ngIf=\"emailExists\" style=\"color: red;\">Email already exists. Please choose different one</span>\n                      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" required=\"required\">\n                      <p style=\"color:#828282;\">A valid e-mail address. All e-mails from this system will be sent to this address.</p>\n                    </div>\n                    <button mat-raised-button type=\"submit\" class=\"custom\">Create account</button>\n                  </form>\n                </div>\n              </mat-tab>\n              <mat-tab label =\"Forget Password\">\n                <div style=\"margin:20px;\">\n                  <div class=\"alert alert-warn\" *ngIf=\"emailNotExists\">Email doesn't exists.</div>\n                  <div class=\"alert alert-success\" *ngIf=\"forgetPasswordEmailSent\">Email sent.</div>\n                  <form (ngSubmit)=\"onForgetPassword()\">\n                    <div class=\"form-group\">\n                      <label for=\"recoverEmail\">Your Email Address *</label>\n                      <input type=\"email\" class=\"form-control\" id=\"recoverEmail\" name=\"recoverEmail\" [(ngModel)]=\"recoverEmail\" required=\"required\">\n                      <p style=\"color:#828282;\">Enter your registered address.</p>\n                    </div>  \n                    <button mat-raised-button type=\"submit\" class=\"custom\">Submit</button>\n                  </form>\n                </div>\n              </mat-tab>\n          </mat-tab-group>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div>\n   \n \n</div>\n"

/***/ }),

/***/ "./src/app/components/my-account/my-account.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-account/my-account.component.ts ***!
  \***************************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/upload-image.service */ "./src/app/services/upload-image.service.ts");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const/app-const */ "./src/app/const/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent(loginService, userService, uploadImageService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.uploadImageService = uploadImageService;
        this.router = router;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].serverPath;
        this.loginError = false;
        this.loggedIn = false;
        this.credential = { 'username': '', 'password': '' };
        this.emailSent = false;
        this.emailNotExists = false;
    }
    MyAccountComponent.prototype.onLogin = function () {
        var _this = this;
        this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(function (res) {
            console.log(res);
            localStorage.setItem("xAuthToken", res.json().token);
            _this.loggedIn = true;
            location.reload();
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.loggedIn = false;
            _this.loginError = true;
        });
    };
    MyAccountComponent.prototype.onNewAccount = function () {
        var _this = this;
        this.usernameExists = false;
        this.emailExists = false;
        this.emailSent = false;
        this.userService.newUser(this.username, this.email).subscribe(function (res) {
            _this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
            console.log(res);
            _this.emailSent = true;
        }, function (error) {
            console.log(error.text());
            var errorMessage = error.text();
            if (errorMessage === "usernameExists")
                _this.usernameExists = true;
            if (errorMessage === "emailExists")
                _this.emailExists = true;
        });
    };
    MyAccountComponent.prototype.onForgetPassword = function () {
        var _this = this;
        this.forgetPasswordEmailSent = false;
        this.emailNotExists = false;
        this.userService.retrievePassword(this.recoverEmail).subscribe(function (res) {
            console.log(res);
            _this.forgetPasswordEmailSent = true;
        }, function (error) {
            console.log(error.text());
            var errorMessage = error.text();
            if (errorMessage === "Email not found")
                _this.emailNotExists = true;
        });
    };
    MyAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
        });
    };
    MyAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-account',
            template: __webpack_require__(/*! ./my-account.component.html */ "./src/app/components/my-account/my-account.component.html"),
            styles: [__webpack_require__(/*! ./my-account.component.css */ "./src/app/components/my-account/my-account.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_upload_image_service__WEBPACK_IMPORTED_MODULE_4__["UploadImageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\r\n  border: 0;\r\n  clear:both;\r\n  display:block;\r\n  width: 96%;               \r\n  background-color:#DBDBDB;\r\n  height: 1px;\r\n}\r\n\r\n#parent {\r\n    text-align:center;\r\n    background-color:blue;\r\n    height:400px;\r\n    width:600px;\r\n}\r\n\r\n.block {\r\n    height:100px;\r\n    width:200px;\r\n    text-align:left;\r\n}\r\n\r\n.center {\r\n    margin:auto;\r\n    background-color:green;\r\n}\r\n\r\n.left {\r\n    margin:auto auto auto 0;\r\n    background-color:red;\r\n}\r\n\r\n.right {\r\n    margin:auto 0 auto auto;\r\n    background-color:yellow;\r\n}"

/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <app-logo spanLabel=\"My Profile\"></app-logo>\n\n <div *ngIf=\"!dataFetched\" style=\"margin-top: 50px;\">\n  <div class=\"row\">\n    <div class=\"col-2 col-offset-5\">\n      <mat-spinner class=\"very-pink\"></mat-spinner>\n    </div>\n  </div>\n </div>\n\n  <div class=\"row\" style=\"margin-top: 30px;\">\n    <div class=\"col-3\"></div>\n      <div *ngIf=\"dataFetched\">\n        <div class=\"col-12\">\n          <div class=\"panel-group\">\n            <div class=\"panel panel-default panel-faq\" style=\"border:none;\">\n              <div class=\"panel-body\" style=\"background-color: #ededed; margin-top:20px;\">\n                <mat-tab-group dynamicHeight [selectedIndex]=\"selectedProfileTab\" class=\"shadow p-10 mb-12\">\n                  <mat-tab label=\"Edit\">\n                    <div style=\"margin: 0px 30px 30px; width: 600px;\">\n                      <div class=\"alert alert-danger\" *ngIf=\"incorrectPassword\">\n                        <strong>Incorrect password!</strong>\n                        Please enter the correct pasword for the current user.\n                      </div>\n                      <div class=\"alert alert-success\" *ngIf=\"updateSuccsess\">\n                        <strong>Update success!</strong>\n                      </div>\n                    <form (ngSubmit)=\"onUpdateUserInfo()\">\n                      <input type=\"hidden\" name=\"id\" [(ngModel)]=\"user.id\"/>\n                      <div class=\"bg-info\" *ngIf=\"updateUserInfo\">User info updated.</div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-6\">\n                            <label for=\"firstName\">First name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"user.firstName\"/>\n                          </div>\n                          <div class=\"col-6\">\n                            <label for=\"lastName\">Last name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"user.lastName\"/>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"username\">Username *</label>&nbsp;<span *ngIf=\"usernameExists\" style=\"color:red;\">Username already exists. Choose a different one.</span>\n                        <input required=\"required\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\"/>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"currentPassword\">Current password *</label>\n                        <input type=\"password\" class=\"form-control\" id=\"currentPassword\" name=\"currentPassword\" [(ngModel)]=\"currentPassword\"/><p style=\"color:#828282;\">Enter your current password to change the E-mail address or password</p>\n                      </div>\n                      <div class=\"form-group\">\n                       <label for=\"email\">Email address *</label>&nbsp;<span *ngIf=\"emailExists\" style=\"color:red;\">Email already exists. Choose a different one.</span>\n                       <input required=\"required\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\"/> <p style=\"color:#828282;\">A valid e-mail address. All e-mails from the system will be sent to this address.</p>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"txtNewPassword\">New password *</label>&nbsp;<span id=\"checkPasswordMatch\" style=\"color:red;\"></span>\n                        <input type=\"password\" class=\"form-control\" id=\"txtNewPassword\" name=\"txtNewPassword\" [(ngModel)]=\"newPassword\"/>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"txtConfirmPassword\">Confirm new password *</label>\n                        <input type=\"password\" class=\"form-control\" id=\"txtConfirmPassword\" name=\"txtConfirmPassword\" [(ngModel)]=\"newPassword\"/>\n                      </div>\n                      <div class=\"form-group\">\n                        Add your photo\n                        <!-- (click)=\"initProfileImageModal()\" -->\n                        <a mat-button ><i class=\"fa fa-file-image-o\"></i></a>\n                      </div>\n                      <button mat-raised-button type=\"submit\" style=\"align-content: center;\" class=\"custom\" id=\"updateuserInfoButton\">Save</button>\n                    </form>\n                    </div>\n                  </mat-tab>\n                  <mat-tab label=\"Orders\">\n                    <div style=\"margin: 0px 30px 30px;\">\n                    <div style=\"width:600px;\">\n                    <div class=\"panel-group\">\n                      <div class=\"panel panel-default panel-faq\" style=\"border: none;\">\n                        <div class=\"panel-body\" style=\"background-color: #ededed; margin-top: 20px;\">\n                          <table class=\"table table-sm table-inverse\">\n                            <thead>\n                                <tr  style=\"text-align: center;\"> \n                                    <th>Order Date</th>\n                                    <th>Order Number</th>\n                                    <th>Total</th>\n                                    <th>Status</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let order of orderList\"  style=\"text-align: center;\">\n                                    <td>\n                                        <a class=\"pointer\" (click)=\"onDisplayOrder(order)\"><span\n                                         >{{order.orderDate}}</span></a>\n                                    </td>\n                                    <td>{{order.id}}</td>\n                                    <td>{{order.orderTotal}}</td>\n                                    <td>{{order.orderStatus}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div *ngIf=\"displayOrderDetail\">\n                            <div class=\"row\">\n                                <div class=\"col-12\" style=\"margin-bottom: 15px;\">\n                                    <div class=\"text-center\">\n                                        <h2>Order Detail for purchase #<span>{{order.id}}</span></h2>\n                                    </div>\n                                    <hr/>\n                                    <div class=\"row\">\n                                        <div class=\"col-3\" style=\"background-color: #FFFFFF; margin: 10px;\">\n                                            <div class=\"panel panel-default panel-faq height\">\n                                                <div class=\"panel-heading\"><strong>Billing Details</strong>\n                                                </div>\n                                                <div class=\"panel-body\">\n                                                    <span>{{order.billingAddress.billingAddressName}}</span>\n                                                    <br/>\n                                                    <span>{{order.billingAddress.billingAddressStreet1}} {{order.billingAddress.billingAddressStreet2}}</span>\n                                                    <br/>\n                                                    <span>{{order.billingAddress.billingAddressCity}}</span>\n                                                    <br/>\n                                                    <span>{{order.billingAddress.billingAddressState}}</span>\n                                                    <br/>\n                                                    <span>{{order.billingAddress.billingAddressZipcode}}</span>\n                                                    <br/>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-3\" style=\"background-color: #FFFFFF; margin: 10px;\">\n                                            <div class=\"panel panel-default panel-faq height\">\n                                                <div class=\"panel-heading\"><strong>Payment Information</strong>\n                                                </div>\n                                                <div class=\"panel-body\">\n                                                    <span>{{order.payment.holderName}}</span>\n                                                    <br/> Visa\n                                                    <br/>\n                                                    <span>{{order.payment.cardNumber}}</span>\n                                                    <br/>\n                                                    <span>Exp Date:</span> <span>{{order.payment.expiryMonth}}</span>/<span>{{order.payment.expiryYear}}</span>\n                                                    <br/>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\" style=\"background-color: #FFFFFF; margin: 10px;\">\n                                            <div class=\"panel panel-default panel-faq height\">\n                                                <div class=\"panel-heading\"><strong>Shipping Address</strong>\n                                                </div>\n                                                <div class=\"panel-body\">\n                                                    <span>{{order.shippingAddress.shippingAddressName}}</span>\n                                                    <br/>\n                                                    <span>{{order.shippingAddress.shippingAddressStreet1}}' '{{order.shippingAddress.shippingAddressStreet2}}</span>\n                                                    <br/>\n                                                    <span>{{order.shippingAddress.shippingAddressCity}}</span>\n                                                    <br/>\n                                                    <span>{{order.shippingAddress.shippingAddressState}}</span>\n                                                    <br/>\n                                                    <span>{{order.shippingAddress.shippingAddressZipcode}}</span>\n                                                    <br/>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-12\" style=\"background-color: #FFFFFF; margin-top: 5px;\">\n                                    <div class=\"panel panel-default panel-faq\">\n                                        <div class=\"panel-heading\">\n                                            <h3 class=\"text-center\"><strong>Order summary</strong></h3>\n                                        </div>\n                                        <div class=\"panel-body\">\n                                            <div class=\"table-responsive\">\n                                                <table class=\"table table-condensed\">\n                                                    <thead>\n                                                        <tr>\n                                                            <td><strong>Item Name</strong></td>\n                                                            <td class=\"text-center\"><strong>Item Price</strong></td>\n                                                            <td class=\"text-center\"><strong>Item Quantity</strong>\n                                                            </td>\n                                                            <td class=\"text-right\"><strong>Total</strong></td>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr *ngFor=\"let cartItem of cartItemList\">\n                                                            <td>{{cartItem.book.title}}\n                                                            </td>\n                                                            <td class=\"text-center\">{{cartItem.book.ourPrice}}\n                                                            </td>\n                                                            <td class=\"text-center\">\n                                                                {{cartItem.qty}}\n                                                            </td>\n                                                            <td class=\"text-right\">{{cartItem.subtotal}}\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td class=\"highrow\"></td>\n                                                            <td class=\"highrow\"></td>\n                                                            <td class=\"highrow text-center\">\n                                                                <strong>Subtotal</strong></td>\n                                                            <td class=\"highrow text-right\">{{order.orderTotal}}\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td class=\"emptyrow\"></td>\n                                                            <td class=\"emptyrow\"></td>\n                                                            <td class=\"emptyrow text-center\"><strong>Tax</strong>\n                                                            </td>\n                                                            <td class=\"emptyrow text-right\">{{order.orderTotal*0.06}}\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td class=\"emptyrow\"><i class=\"fa fa-barcode iconbig\"></i></td>\n                                                            <td class=\"emptyrow\"></td>\n                                                            <td class=\"emptyrow text-center\"><strong>Total</strong>\n                                                            </td>\n                                                            <td class=\"emptyrow text-right\">{{order.orderTotal*1.06}}\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                  </mat-tab>\n                  <mat-tab label=\"Payment\">\n                    <div style=\"margin: 0px 30px 30px;\">\n                        <div style=\"width:600px;\">\n                          <p *ngIf=\"defaultPaymentSet\">Default payment set successfully!</p>\n                          <mat-tab-group dynamicHeight (selectedIndexChange)=\"selectedBillingChange($event)\" [selectedIndex]=\"selectedBillingTab\">\n                            <mat-tab label=\"List of Credit Cards\">\n                              <form (ngSubmit)=\"setDefaultPayment()\" method=\"post\">\n                                <table class=\"table\">\n                                  <thead>\n                                    <tr style=\"text-align: center;\">\n                                      <th>Default</th>\n                                      <th>Credit Card</th>\n                                      <th>Operations</th>\n                                    </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let userPayment of userPaymentList\" style=\"text-align: center;\">\n                                      <td>\n                                        <input type=\"radio\" name=\"defaultUserPaymentId\" [(ngModel)]=\"defaultUserPaymentId\" [value]=\"userPayment.id\"/>\n                                        <span>default</span>\n                                      </td>\n                                      <td>{{userPayment.cardName}}</td>\n                                      <td>\n                                        <a mat-button (click)=\"onUpdatePayment(userPayment)\"><i class=\"fa fa-pencil\"></i></a>\n                                        <a mat-button (click)=\"onRemovePayment(userPayment.id)\"><i class=\"fa fa-times\"></i></a>\n                                      </td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                <button mat-raised-button class=\"custom\" type=\"submit\">Save</button>\n                            </form>\n                          </mat-tab>\n                          <mat-tab label=\"Add(Update) Credit Card\">\n                            <form (ngSubmit)=\"onNewPayment()\" method=\"post\" style=\"margin-top: 40px;\">\n                              <div class=\"bg-info\" *ngIf=\"updateUserPaymentInfo\">User info updated.</div>\n                              <input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"userPayment.id\"/>\n                              <div class=\"form-group\">\n                                <h5>* Give a name for your card:</h5>\n                                <input type=\"text\" class=\"form-control\" id=\"cardName\" placeholder=\"Card name\"\n                                name=\"cardName\" required=\"required\" [(ngModel)]=\"userPayment.cardName\"/>\n                              </div>\n\n                              <!-- Billing Address -->\n                              <hr>\n                              <div class=\"form-group\">\n                                <label for=\"billingName\">* Name</label>\n                                <input type=\"text\" class=\"form-control\" id=\"billingName\" placeholder=\"Receiver name\" name=\"userBillingName\" required=\"required\" [(ngModel)]=\"userBilling.userBillingName\"/>\n                              </div>\n                              <div class=\"form-group\">\n                                <label for=\"billingAddress\">* Street address</label>\n                                <input type=\"text\" class=\"form-control\" id=\"billingAddress\" placeholder=\"Street address 1\" name=\"userBillingStreet1\" required=\"required\" [(ngModel)]=\"userBilling.userBillingStreet1\"/>\n                              </div>\n                              <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Street address 2\" name=\"userBillingStreet2\" [(ngModel)]=\"userBilling.userBillingStreet2\"/>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-4\">\n                                  <div class=\"form-group\">\n                                     <label for=\"billingCity\">* City</label>\n                                     <input type=\"text\" class=\"form-control\" id=\"billingCity\" placeholder=\"Your Billing City\" name=\"userBillingCity\" required=\"required\" [(ngModel)]=\"userBilling.userBillingCity\"/>\n                                  </div>\n                                </div>\n                                <div class=\"col-4\">\n                                  <div class=\"form-group\">\n                                    <label for=\"billingState\">* State</label>\n                                    <select id=\"billingState\" class=\"form-control\" name=\"userBillingState\" [(ngModel)]=\"userBilling.userBillingState\" required=\"=required\">\n                                      <option value=\"\" disabled>-- state --</option>\n                                      <option *ngFor=\"let state of stateList\">{{state}}</option>\n                                    </select>\n                                  </div>\n                                </div>\n                                <div class=\"col-4\">\n                                  <div class=\"form-group\">\n                                     <label for=\"billingZipcode\">* Zipcode</label>\n                                     <input type=\"text\" class=\"form-control\" id=\"billingZipcode\" placeholder=\"Your Billing Zipcode\" name=\"userBillingZipcode\" required=\"required\" [(ngModel)]=\"userBilling.userBillingZipcode\"/>\n                                  </div>\n                                </div>\n                              </div>\n\n                              <!-- User Payment -->\n                              <br>\n                              <div class=\"form-group\">\n                                <h4>Credit Card Information</h4>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-12\">\n                                  <img src=\"../../../assets/image/creditcard.png\" class=\"img-responsive\"/>\n                                  <br>\n                                  <div class=\"form-group\">\n                                    <label for=\"cardType\">* Select Card Type</label>\n                                    <select id=\"cardType\" class=\"form-control\" name=\"cardType\" [(ngModel)]=\"userPayment.type\" required=\"=required\">\n                                      <option value=\"\" disabled>-- Card Type --</option>\n                                      <option value=\"visa\">Visa</option>\n                                      <option value=\"mastercard\">Mastercard</option>\n                                      <option value=\"amex\">Amrican Express</option>\n                                    </select>\n                                  </div>\n                                  <div class=\"form-group\">\n                                     <label for=\"cardHolder\">* Card Holder</label>\n                                     <input type=\"text\" class=\"form-control\" id=\"cardHolder\" placeholder=\"Card holder name\" name=\"cardHolderName\" required=\"required\" [(ngModel)]=\"userPayment.holderName\"/>\n                                  </div>\n                                  <div class=\"form-group\">\n                                    <label for=\"cardNumber\">* Card Number</label>\n                                    <div class=\"input-group\">\n                                      <input style=\"margin-right: 10px;\" required=\"required\" id=\"cardNumber\" type=\"tel\" class=\"form-control\" name=\"cardNumber\" placeholder=\"Valid Card Number\" [(ngModel)]=\"userPayment.cardNumber\"/>\n                                      <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-7\">\n                                  <div class=\"form-group\">\n                                    <label>* Expiration Date</label>\n                                    <div class=\"row\">\n                                      <div class=\"col-6\">\n                                        <select class=\"form-control\" name=\"expiryMonth\" required=\"required\" [(ngModel)]=\"userPayment.expiryMonth\">\n                                          <option value=\"\" disabled=\"disabled\">-- Month --</option>\n                                          <option value=\"1\">Jan (01)</option>\n                                          <option value=\"2\">Feb (02)</option>\n                                          <option value=\"3\">Mar (03)</option>\n                                          <option value=\"4\">Apr (04)</option>\n                                          <option value=\"5\">May (05)</option>\n                                          <option value=\"6\">Jun (06)</option>\n                                          <option value=\"7\">Jul (07)</option>\n                                          <option value=\"8\">Aug (08)</option>\n                                          <option value=\"9\">Sep (09)</option>\n                                          <option value=\"10\">Oct (10)</option>\n                                          <option value=\"11\">Nov (11)</option>\n                                          <option value=\"12\">Dec (12)</option>\n                                        </select>\n                                      </div>\n                                      <div class=\"col-6\">\n                                        <select class=\"form-control\" name=\"expiryYear\" required=\"required\" [(ngModel)]=\"userPayment.expiryYear\">\n                                          <option value=\"\" disabled>-- Year --</option>\n                                          <option value=\"17\">2017</option>\n                                          <option value=\"18\">2018</option>\n                                          <option value=\"19\">2019</option>\n                                          <option value=\"20\">2020</option>\n                                          <option value=\"21\">2021</option>\n                                          <option value=\"22\">2022</option>\n                                          <option value=\"23\">2023</option>\n                                          <option value=\"24\">2024</option>\n                                          <option value=\"25\">2025</option>\n                                        </select>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"col-5 pull-right\">\n                                  <div class=\"form-group\">\n                                    <label for=\"cardCVC\"> CV Code</label>\n                                    <input id=\"cardCVC\" type=\"tel\" class=\"form-control\" name=\"cardCVC\" placeholder=\"CVC\" [(ngModel)]=\"userPayment.cvc\"/>\n                                  </div>\n                                </div>\n                              </div>\n                              <br>\n                              <button mat-raised-button type=\"submit\" class=\"custom\">Save All</button>\n                            </form>\n                          </mat-tab>\n                        </mat-tab-group>\n                      </div>\n                    </div>\n                  </mat-tab>\n                  <mat-tab label=\"Shipping\">\n                    <div style=\"margin: 0px 30px 30px;\">\n                        <div style=\"width:600px;\">\n                          <p *ngIf=\"defaultShippingSet\">Default shipping set successfully!</p>\n                          <mat-tab-group dynamicHeight (selectedIndexChange)=\"selectedShippingChange($event)\" [selectedIndex]=\"selectedShippingTab\">\n                            <mat-tab label=\"List of Shipping Addresses\">\n                              <form (ngSubmit)=\"setDefaultShipping()\" method=\"post\">\n                                <table class=\"table\">\n                                  <thead>\n                                    <tr style=\"text-align: center;\">\n                                      <th>Default</th>\n                                      <th>Shipping Address</th>\n                                      <th>Operations</th>\n                                    </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let userShipping of userShippingList\" style=\"text-align: center;\">\n                                      <td>\n                                        <input type=\"radio\" name=\"defaultUserShippingId\" [(ngModel)]=\"defaultUserShippingId\" [value]=\"userShipping.id\"/>\n                                        <span>default</span>\n                                      </td>\n                                      <td>\n                                        {{userShipping.userShippingStreet1}},\n                                         {{userShipping.userShippingCity}}\n                                        {{userShipping.userShippingState}}\n                                      </td>\n                                      <td >\n                                        <a mat-button (click)=\"onUpdateShipping(userShipping)\"><i class=\"fa fa-pencil\"></i></a>\n                                        <a mat-button (click)=\"onRemoveShipping(userShipping.id)\"><i class=\"fa fa-times\"></i></a>\n                                      </td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                <button mat-raised-button class=\"custom\" type=\"submit\">Save</button>\n                            </form>\n                          </mat-tab>\n                          <mat-tab label=\"Add(Update) Shipping Address\">\n                            <form (ngSubmit)=\"onNewShipping()\" method=\"post\" style=\"margin-top: 40px;\">\n                              <div class=\"bg-info\" *ngIf=\"updateUserShippingInfo\">User info updated.</div>\n                              <input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"userShipping.id\"/>\n                              <div class=\"form-group\">\n                                <label for =\"shippingName\">* Name</label>\n                                <input type=\"text\" class=\"form-control\" id=\"shippingName\" placeholder=\"Reciever name\" name=\"shippingName\" required=\"required\" [(ngModel)]=\"userShipping.userShippingName\"/>\n                              </div>\n                              <div class=\"form-group\">\n                                <label for=\"shippingAddress\">* Street address</label>\n                                <input type=\"text\" class=\"form-control\" id=\"shippingAddress\" placeholder=\"Street address 1\" name=\"userShippingStreet1\" required=\"required\" [(ngModel)]=\"userShipping.userShippingStreet1\"/>\n                              </div>\n                              <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Street address 2\" name=\"userShippingStreet2\" [(ngModel)]=\"userShipping.userShippingStreet2\"/>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-4\">\n                                  <div class=\"form-group\">\n                                     <label for=\"ShippingCity\">* Shipping City</label>\n                                     <input type=\"text\" class=\"form-control\" id=\"ShippingCity\" placeholder=\"Your Billing City\" name=\"ShippingCity\" required=\"required\" [(ngModel)]=\"userShipping.userShippingCity\"/>\n                                  </div>\n                                </div>\n                                <div class=\"col-4\">\n                                  <div class=\"form-group\">\n                                    <label for=\"ShippingState\">* Shipping State</label>\n                                    <select id=\"ShippingState\" class=\"form-control\" name=\"ShippingState\" [(ngModel)]=\"userShipping.userShippingState\" required=\"=required\">\n                                      <option value=\"\" disabled>-- state --</option>\n                                      <option *ngFor=\"let state of stateList\">{{state}}</option>\n                                    </select>\n                                  </div>\n                                </div>\n                                <div class=\"col-4\">\n                                  <div class=\"form-group\">\n                                     <label for=\"ShippingZipcode\">* Zipcode</label>\n                                     <input type=\"text\" class=\"form-control\" id=\"ShippingZipcode\" placeholder=\"Zipcode\" name=\"ShippingZipcode\" required=\"required\" [(ngModel)]=\"userShipping.userShippingZipcode\"/>\n                                  </div>\n                                </div>\n                              </div>\n                             \n                              <br>\n                              <button mat-raised-button type=\"submit\" class=\"custom\">Save All</button>\n                            </form>\n                          </mat-tab>\n                        </mat-tab-group>\n                      </div>\n                    </div>\n                  </mat-tab>\n                </mat-tab-group>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/app-const */ "./src/app/const/app-const.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _models_user_payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/user-payment */ "./src/app/models/user-payment.ts");
/* harmony import */ var _models_user_billing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/user-billing */ "./src/app/models/user-billing.ts");
/* harmony import */ var _models_user_shipping__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/user-shipping */ "./src/app/models/user-shipping.ts");
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/shipping.service */ "./src/app/services/shipping.service.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/order */ "./src/app/models/order.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(loginService, userService, paymentService, shippingService, orderService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.paymentService = paymentService;
        this.shippingService = shippingService;
        this.orderService = orderService;
        this.router = router;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].serverPath;
        this.dataFetched = false;
        this.credential = { 'username': '', 'password': '' };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.selectedProfileTab = 0;
        this.selectedBillingTab = 0;
        this.selectedShippingTab = 0;
        this.userPayment = new _models_user_payment__WEBPACK_IMPORTED_MODULE_7__["UserPayment"]();
        this.userBilling = new _models_user_billing__WEBPACK_IMPORTED_MODULE_8__["UserBilling"]();
        this.userPaymentList = [];
        this.stateList = [];
        this.userShipping = new _models_user_shipping__WEBPACK_IMPORTED_MODULE_9__["UserShipping"]();
        this.userShippingList = [];
        this.orderList = [];
        this.order = new _models_order__WEBPACK_IMPORTED_MODULE_11__["Order"]();
    }
    MyProfileComponent.prototype.selectedShippingChange = function (val) {
        this.selectedShippingTab = val;
    };
    MyProfileComponent.prototype.selectedBillingChange = function (val) {
        this.selectedBillingTab = val;
    };
    MyProfileComponent.prototype.onUpdateUserInfo = function () {
        var _this = this;
        this.userService.updateUserInfo(this.user, this.newPassword, this.currentPassword).subscribe(function (res) {
            console.log(res.text());
            _this.updateSuccsess = true;
        }, function (error) {
            console.log(error.text());
            if (error.text() === "Incorrect current password!")
                _this.incorrectPassword = true;
        });
    };
    MyProfileComponent.prototype.onNewPayment = function () {
        var _this = this;
        this.paymentService.newPayment(this.userPayment).subscribe(function (res) {
            _this.getCurrentUser();
            _this.selectedBillingTab = 0;
            _this.userPayment = new _models_user_payment__WEBPACK_IMPORTED_MODULE_7__["UserPayment"]();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onUpdatePayment = function (payment) {
        this.userPayment = payment;
        this.userBilling = payment.userBilling;
        this.selectedBillingTab = 1;
    };
    MyProfileComponent.prototype.onRemovePayment = function (id) {
        var _this = this;
        this.paymentService.removePayment(id).subscribe(function (res) {
            _this.getCurrentUser();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.setDefaultPayment = function () {
        var _this = this;
        this.defaultPaymentSet = false;
        this.paymentService.setDefaultPayment(this.defaultUserPaymentId).subscribe(function (res) {
            _this.getCurrentUser();
            _this.defaultPaymentSet = true;
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onNewShipping = function () {
        var _this = this;
        this.shippingService.newShipping(this.userShipping).subscribe(function (res) {
            _this.getCurrentUser();
            _this.selectedShippingTab = 0;
            _this.userShipping = new _models_user_shipping__WEBPACK_IMPORTED_MODULE_9__["UserShipping"]();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.onUpdateShipping = function (shipping) {
        this.userShipping = shipping;
        this.selectedShippingTab = 1;
    };
    MyProfileComponent.prototype.onRemoveShipping = function (id) {
        var _this = this;
        this.shippingService.removeShipping(id).subscribe(function (res) {
            _this.getCurrentUser();
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.setDefaultShipping = function () {
        var _this = this;
        this.defaultShippingSet = false;
        this.shippingService.setDefaultShipping(this.defaultUserShippingId).subscribe(function (res) {
            _this.getCurrentUser();
            _this.defaultShippingSet = true;
        }, function (error) {
            console.log(error.text());
        });
    };
    MyProfileComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (res) {
            _this.user = res.json();
            _this.userPaymentList = _this.user.userPaymentList;
            _this.userShippingList = _this.user.userShippingList;
            for (var index in _this.userPaymentList) {
                if (_this.userPaymentList[index].defaultPayment) {
                    _this.defaultUserPaymentId = _this.userPaymentList[index].id;
                    break;
                }
            }
            for (var index in _this.userShippingList) {
                if (_this.userShippingList[index].userShippingDefault) {
                    _this.defaultUserShippingId = _this.userShippingList[index].id;
                    break;
                }
            }
            _this.dataFetched = true;
        }, function (error) {
            console.log(error);
        });
    };
    MyProfileComponent.prototype.onDisplayOrder = function (order) {
        console.log(order);
        this.order = order;
        this.displayOrderDetail = true;
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
            console.log("inactive session");
            _this.router.navigate(['/myAccount']);
        });
        this.getCurrentUser();
        this.orderService.getOrderList().subscribe(function (res) {
            _this.orderList = res.json();
        }, function (error) {
            console.log(error.text());
        });
        for (var s in _const_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].usStates) {
            this.stateList.push(s);
        }
        this.userBilling.userBillingState = "";
        this.userPayment.type = "";
        this.userPayment.expiryMonth = "";
        this.userPayment.expiryYear = "";
        this.userPayment.userBilling = this.userBilling;
        this.defaultPaymentSet = false;
        this.userShipping.userShippingState = "";
        this.defaultShippingSet = false;
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/components/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/components/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"], _services_shipping_service__WEBPACK_IMPORTED_MODULE_10__["ShippingService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*customize navbar*/\r\n\r\n.navbar-default {\r\n    background-color: #EF6C00;\r\n    border-color: #EF6C00;\r\n}\r\n\r\n/* Title */\r\n\r\n.navbar-default .navbar-brand {\r\n   color: white;\r\n   text-decoration: none;\r\n   transition: color 0.3s linear;\r\n   -webkit-transition: color 0.3s linear;\r\n   -moz-transition: color 0.3s linear;\r\n   font-weight: bold;\r\n   color: #DADADA;\r\n}\r\n\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n    color: white;\r\n}\r\n\r\n/* Link */\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n text-decoration: none;\r\n transition: color 0.3s linear;\r\n -webkit-transition: color 0.3s linear;\r\n -moz-transition: color 0.3s linear;\r\n  padding-top: 10px;\r\n  color: #DADADA;\r\n  margin-left:30px;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n    color: white;\r\n\r\n}\r\n\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n    color: #555;\r\n    background-color: #E7E7E7;\r\n}\r\n\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n    color: #555;\r\n    background-color: #D5D5D5;\r\n}\r\n\r\n.form-control{\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n/*styles for the button*/\r\n\r\n.btn:focus, .btn:active:focus, .btn.active:focus {\r\n    outline: 0 none;\r\n}\r\n\r\n.btn-outline-warning {\r\n    background: #f46b42;\r\n    border-color: #f46b42;\r\n    color: #DADADA;\r\n}\r\n\r\n.btn-outline-warning:hover, .btn-outline-warning:focus, .btn-outline-warning:active, .btn-outline-warning.active, .open > .dropdown-toggle.btn-outline-warnin {\r\n    background: #ff805b;\r\n    border-color: #f46b42;\r\n    color: white;\r\n}\r\n\r\n.btn-outline-warning:active, .btn-outline-warning.active {\r\n    background: #007299;\r\n    box-shadow: none;\r\n}"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top\" style=\"width: 100%; height: 10px; background-color: #E65100\"></div>\n\n<nav class=\"shadow p-10 mb-5 navbar navbar-expand-lg navbar-default\">\n  <div class=\"container\">\n    <a class=\"navbar-brand pointer\" routerLink=\"/home\">DOM'S BOOKSTORE</a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"!loggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/myAccount\">MY ACCOUNT</a>\n        </li>\n        <li *ngIf=\"loggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/shoppingCart\">SHOPPING CART</a>\n        </li>\n        <li *ngIf=\"loggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/myProfile\">{{username}}</a>\n        </li>\n        <li *ngIf=\"loggedIn\" class=\"nav-item\">\n          <a class=\"nav-link pointer\" (click)=\"logout()\">LOGOUT</a>\n        </li>\n\n      </ul>\n          \n        <form (ngSubmit)=\"onSearchByTitle()\" class=\"form-inline my-2 my-lg-0\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/bookList\">BOOK</a>\n            </li>\n            \n          </ul>\n          <div class=\"form-group\">\n            <input type=\"text\" name=\"searchByTitle\" [(ngModel)]=\"keyword\" class=\"form-control\" placeholder=\"Book title\">\n          </div>\n          <button class=\"btn btn-outline-warning my-2 my-sm-0\" type=\"submit\">SEARCH</button>\n        </form>\n        \n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(loginService, bookService, userService, router) {
        this.loginService = loginService;
        this.bookService = bookService;
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.bookList = [];
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().subscribe(function (res) {
            _this.loggedIn = false;
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    NavBarComponent.prototype.onSearchByTitle = function () {
        var _this = this;
        this.bookService.searchBook(this.keyword).subscribe(function (res) {
            _this.bookList = res.json();
            var navigationExtras = {
                queryParams: {
                    "bookList": JSON.stringify(_this.bookList)
                }
            };
            _this.router.navigate(['/bookList'], navigationExtras);
        }, function (error) {
            console.log(error);
        });
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            console.log(res);
            _this.loggedIn = true;
            _this.userService.getCurrentUser().subscribe(function (res) {
                _this.user = res.json();
                _this.username = _this.user.username.toUpperCase();
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
            _this.loggedIn = false;
        });
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/order-summary/order-summary.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/order-summary/order-summary.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\r\n  border: 0;\r\n  clear:both;\r\n  display:block;\r\n  width: 96%;               \r\n  background-color:#DBDBDB;\r\n  height: 1px;\r\n}"

/***/ }),

/***/ "./src/app/components/order-summary/order-summary.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/order-summary/order-summary.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <app-logo spanLabel=\"Order Summary\"></app-logo>\n\n <div class=\"row\" style=\"margin-top: 40px;\">\n  <div class=\"col-12\">\n   <div class=\"alert alert-success\">\n     <h3><i class=\"fa fa-check\" style=\"color: limegreen;\"></i> Thank you, your order has been placed.</h3>\n     <h4>The estimated delivery date is <span>{{estimatedDeliveryDate}}</span></h4>\n   </div>\n  </div>\n </div>\n    <br>\n    <h3>List of Items</h3>\n   <div class=\"row\" *ngFor=\"let cartItem of cartItemList\" style=\"margin-bottom: 40px;\">  \n      <hr/>\n      <div class=\"col-2\">\n          <a (click)=\"onSelect(cartItem.book)\"><img class=\"img-responsive pointer\" src=\"{{serverPath}}/image/book/{{cartItem.book.id}}.png\" style=\"width:100px;\" /></a>\n        </div>\n      <div class=\"col-6\">\n        <a class=\"pointer\" (click)=\"onSelect(cartItem.book)\"><h4>{{cartItem.book.title}}</h4></a>\n        <p *ngIf=\"cartItem.book.inStockNumber>10\" style=\"color:green;\">In Stock</p>\n        <p *ngIf=\"cartItem.book.inStockNumber<10\" style=\"color:brown;\">Only <span>{{cartItem.book.inStockNumber}}</span> In Stock</p>\n        <p *ngIf=\"cartItem.book.inStockNumber == 0\" style=\"color:darkred;\">Out of Stock</p>\n        <a class=\"pointer\" (click)=\"onRemoveCartItem(cartItem)\">Delete</a>\n      </div>\n      <div class=\"col-2\">\n        <!-- ngClass attaches a class to this element based on a condition. In this case we attach the text strike to it -->\n        <h5 style=\"color: #db3208; font-size: large;\">$<span [ngClass]=\"{'text-strike': cartItem.book.inStockNumber == 0}\">{{cartItem.book.ourPrice}}</span></h5>\n      </div>\n      <div class=\"col-2 text-center\">\n        <h5 style=\"font-size: large;\">{{cartItem.qty}}</h5>\n      </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/order-summary/order-summary.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-summary/order-summary.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/app-const */ "./src/app/const/app-const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/order */ "./src/app/models/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent(checkoutService, route, router) {
        this.checkoutService = checkoutService;
        this.route = route;
        this.router = router;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].serverPath;
        this.order = new _models_order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.cartItemList = [];
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.order = JSON.parse(params['order']);
            var deliveryDate = new Date();
            if (_this.order.shippingMethod == "groundShipping") {
                deliveryDate.setDate(deliveryDate.getDate() + 5);
            }
            else {
                deliveryDate.setDate(deliveryDate.getDate() + 3);
            }
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            _this.estimatedDeliveryDate = days[deliveryDate.getDay()] + ', '
                + deliveryDate.getFullYear() + '/' + deliveryDate.getMonth() + '/' + deliveryDate.getDate();
            _this.cartItemList = _this.order.cartItemList;
        });
    };
    OrderSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-summary',
            template: __webpack_require__(/*! ./order-summary.component.html */ "./src/app/components/order-summary/order-summary.component.html"),
            styles: [__webpack_require__(/*! ./order-summary.component.css */ "./src/app/components/order-summary/order-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_services_checkout_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/order/order.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\r\n  border: 0;\r\n  clear:both;\r\n  display:block;\r\n  width: 96%;               \r\n  background-color:#DBDBDB;\r\n  height: 1px;\r\n}"

/***/ }),

/***/ "./src/app/components/order/order.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <app-logo spanLabel=\"Checkout\"></app-logo>\n\n <div class=\"row\" style=\"margin-top: 40px;\">\n  <div class=\"col-4\">\n    <form (ngSubmit)=\"onSubmit()\" method=\"post\">\n      <div class=\"panel panel-default panel-faq\"> \n        <div class=\"panel-body shadow p-10 mb-12\" style=\"padding: 20px;\">\n          <button mat-raised-button type=\"submit \" class=\"btn-block custom\">Place your order\n          </button>\n          <p style=\"font-size: smaller; margin-top: 10px;\">By placing your order, you agree to Le's Bookstore <a href=\"#\">privacy</a> notice and\n              <a href=\"#\">conditions</a> of use.</p>\n          <hr/>\n          <h3>Order Summary</h3>\n          <div class=\"row\">\n              <div class=\"col-7 text-left\">\n                  Total before tax:\n              </div>\n              <div class=\"col-5 text-right\">\n                  $\n                  <span>{{shoppingCart.grandTotal}}</span>\n              </div>\n          </div>\n          <div class=\"row \">\n              <div class=\"col-7 text-left \">\n                  Estimated tax:\n              </div>\n              <div class=\"col-5 text-right \">\n                  $<span>{{shoppingCart.grandTotal*0.06 | number : '1.2-2'}}</span>\n              </div>\n          </div>\n          <hr />\n          <div class=\"row \">\n              <div class=\"col-7 text-left \">\n                  <h3 style=\"color:darkred; \"><strong>Order total:</strong></h3>\n              </div>\n              <div class=\"col-5 text-right \">\n                  <h3><strong style=\"color:darkred; \">$<span\n                          >{{shoppingCart.grandTotal*1.06 | number : '1.2-2'}}</span>\n                  </strong></h3>\n              </div>\n          </div>\n          <div class=\"panel-footer\">Shipping and handling haven't applied.</div>\n        </div>\n      </div>\n    </form>\n    </div>\n   <div class=\"col-8\" style=\"margin-top: 15px;\">\n    <form (ngSubmit)=\"onSubmit()\" method=\"post\">\n     <div *ngIf=\"missingRequiredField\">\n       <h5 class=\"alert alert-warning\">There are some fields missing. Field with * is required.</h5>\n     </div>\n     <mat-tab-group dynamicHeight (selectedIndexChange)=\"selectedChange($event)\" [selectedIndex]=\"selectedTab\"\n     class=\"shadow p-10 mb-12\" style=\"padding: 20px;\">\n       <!-- 1. Shipping address -->\n       <mat-tab label=\"1. Shipping Address\">\n         <div class=\"panel panel-default\">\n           <div class=\"panel-heading\">\n             <h4 class=\"panel-title\" style=\"margin-top: 10px;\">\n               1. Shipping Address\n             </h4>\n           </div>\n           <div class=\"panel-body\">\n             <table class=\"table\" *ngIf=\"!emptyShippingList\">\n               <thead>\n                 <tr>\n                   <th>Available Shipping Address</th>\n                   <th>Operation</th>\n                 </tr>\n               </thead>\n               <tbody>\n                 <tr *ngFor=\"let userShipping of userShippingList\">\n                   <td>\n                     {{userShipping.userShippingStreet1}},\n                     {{userShipping.userShippingStreet2}},\n                     {{userShipping.userShippingCity}},\n                     {{userShipping.userShippingState}}\n                   </td>\n                   <td>\n                     <a class=\"pointer\" (click)=\"setShippingAddress(userShipping)\">Use this address</a>\n                   </td>\n                 </tr>\n               </tbody>\n             </table>\n\n             <div class=\"form-group\">\n               <label for =\"shippingAddressName\">* Name</label>\n               <input type=\"text\" class=\"form-control\" id=\"shippingName\" placeholder=\"Reciever name\" name=\"shippingAddressName\" required=\"required\" [(ngModel)]=\"shippingAddress.shippingAddressName\" />\n             </div>\n             <div class=\"form-group\">\n              <label for=\"shippingAddress\">* Street address</label>\n              <input type=\"text\" class=\"form-control\" id=\"shippingAddress\" placeholder=\"Street address 1\" name=\"ShippingAddressStreet1\" required=\"required\" [(ngModel)]=\"shippingAddress.shippingAddressStreet1\"/>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Street address 2\" name=\"ShippingAddressStreet2\" [(ngModel)]=\"shippingAddress.shippingAddressStreet2\"/>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                   <label for=\"ShippingCity\">* Shipping City</label>\n                   <input type=\"text\" class=\"form-control\" id=\"ShippingCity\" placeholder=\"Your Billing City\" name=\"ShippingCity\" required=\"required\" [(ngModel)]=\"shippingAddress.shippingAddressCity\"/>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label for=\"ShippingState\">* Shipping State</label>\n                  <select id=\"ShippingState\" class=\"form-control\" name=\"ShippingState\" [(ngModel)]=\"shippingAddress.shippingAddressState\" required=\"=required\">\n                    <option value=\"\" disabled>-- state --</option>\n                    <option *ngFor=\"let state of stateList\">{{state}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                   <label for=\"ShippingZipcode\">* Zipcode</label>\n                   <input type=\"text\" class=\"form-control\" id=\"ShippingZipcode\" placeholder=\"Zipcode\" name=\"ShippingZipcode\" required=\"required\" [(ngModel)]=\"shippingAddress.shippingAddressZipcode\"/>\n                </div>\n              </div>\n            </div>\n            <a mat-raised-button class=\"custom\" (click)=\"goToPayment()\">Next</a>\n           </div>\n         </div>\n       </mat-tab>\n\n       <!-- 2. Payment Information -->\n       <mat-tab label=\"2. Payment Information\">\n        <div class=\"panel panel-default panel-faq\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\" style=\"margin-top: 10px;\">\n              2. Payment Information\n            </h4>\n          </div>\n\n         <div class=\"panel-body\">\n           <table class=\"table\" *ngIf=\"!emptyPaymentList\">\n             <thead>\n               <tr>\n                 <th>Available Credit Card</th>\n                 <th>Operation</th>\n               </tr>\n             </thead>\n             <tbody>\n               <tr *ngFor=\"let userPayment of userPaymentList\">\n                 <td>\n                   {{userPayment.cardName}}\n                 </td>\n                 <td>\n                   <a class=\"pointer\" (click)=\"setPaymentMethod(userPayment)\">Use this payment method</a>\n                 </td>\n               </tr>\n             </tbody>\n           </table>\n\n           <!-- Credit card Informarion -->\n           <div class=\"row\">\n              <div class=\"col-12\">\n                <img src=\"../../../assets/image/creditcard.png\" class=\"img-fluid\"/>\n                <br>\n                <div class=\"form-group\">\n                  <label for=\"cardType\">* Select card Type</label>\n                  <select id=\"cardType\" class=\"form-control\" name=\"cardType\" [(ngModel)]=\"userPayment.type\" required=\"=required\">\n                    <option value=\"\" disabled>-- card Type --</option>\n                    <option value=\"visa\">Visa</option>\n                    <option value=\"masterpanel\">Masterpanel</option>\n                    <option value=\"amex\">Amrican Express</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                   <label for=\"cardHolder\">* card Holder</label>\n                   <input type=\"text\" class=\"form-control\" id=\"cardHolder\" placeholder=\"card holder name\" name=\"cardHolderName\" required=\"required\" [(ngModel)]=\"payment.holderName\"/>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"cardNumber\">* card Number</label>\n                  <div class=\"input-group\">\n                    <input style=\"margin-right: 10px;\" required=\"required\" id=\"cardNumber\" type=\"tel\" class=\"form-control\" name=\"cardNumber\" placeholder=\"Valid card Number\" [(ngModel)]=\"payment.cardNumber\"/>\n                    <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-7\">\n                <div class=\"form-group\">\n                  <label>* Expiration Date</label>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <select class=\"form-control\" name=\"expiryMonth\" required=\"required\" [(ngModel)]=\"payment.expiryMonth\">\n                        <option value=\"\" disabled=\"disabled\">-- Month --</option>\n                        <option value=\"1\">Jan (01)</option>\n                        <option value=\"2\">Feb (02)</option>\n                        <option value=\"3\">Mar (03)</option>\n                        <option value=\"4\">Apr (04)</option>\n                        <option value=\"5\">May (05)</option>\n                        <option value=\"6\">Jun (06)</option>\n                        <option value=\"7\">Jul (07)</option>\n                        <option value=\"8\">Aug (08)</option>\n                        <option value=\"9\">Sep (09)</option>\n                        <option value=\"10\">Oct (10)</option>\n                        <option value=\"11\">Nov (11)</option>\n                        <option value=\"12\">Dec (12)</option>\n                      </select>\n                    </div>\n                    <div class=\"col-6\">\n                      <select class=\"form-control\" name=\"expiryYear\" required=\"required\" [(ngModel)]=\"payment.expiryYear\">\n                        <option value=\"\" disabled>-- Year --</option>\n                        <option value=\"17\">2017</option>\n                        <option value=\"18\">2018</option>\n                        <option value=\"19\">2019</option>\n                        <option value=\"20\">2020</option>\n                        <option value=\"21\">2021</option>\n                        <option value=\"22\">2022</option>\n                        <option value=\"23\">2023</option>\n                        <option value=\"24\">2024</option>\n                        <option value=\"25\">2025</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-5 pull-right\">\n                <div class=\"form-group\">\n                  <label for=\"panelCVC\"> CVC Code</label>\n                  <input id=\"panelCVC\" type=\"tel\" class=\"form-control\" name=\"panelCVC\" placeholder=\"CVC\" [(ngModel)]=\"payment.cvc\"/>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"checkbox\">\n              <label>\n                <input id=\"theSameAsShippingAddress\" type=\"checkbox\" name=\"billingSameAsShipping\" value=\"true\" (click)=\"setBillingAsShipping($event.target.checked)\"/>The same as shipping address.\n              </label>\n            </div>\n\n            <!-- billing address -->\n\n            <div class=\"form-group\">\n              <label for=\"billingName\">* Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"billingName\" placeholder=\"Receiver name\" name=\"billingAddressName\" required=\"required\" [(ngModel)]=\"billingAddress.billingAddressName\"/>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"billingAddress\">* Street address</label>\n              <input type=\"text\" class=\"form-control\" id=\"billingAddress\" placeholder=\"Street address 1\" name=\"billingAddressStreet1\" required=\"required\" [(ngModel)]=\"billingAddress.billingAddressStreet1\"/>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Street address 2\" name=\"billingAddressStreet2\" [(ngModel)]=\"billingAddress.billingAddressStreet2\"/>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                   <label for=\"billingCity\">* City</label>\n                   <input type=\"text\" class=\"form-control\" id=\"billingCity\" placeholder=\"Your Billing City\" name=\"billingAddressCity\" required=\"required\" [(ngModel)]=\"billingAddress.billingAddressCity\"/>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                  <label for=\"billingState\">* State</label>\n                  <select id=\"billingState\" class=\"form-control\" name=\"billingAddressState\" [(ngModel)]=\"billingAddress.billingAddressState\" required=\"=required\">\n                    <option value=\"\" disabled>-- state --</option>\n                    <option *ngFor=\"let state of stateList\">{{state}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"form-group\">\n                   <label for=\"billingZipcode\">* Zipcode</label>\n                   <input type=\"text\" class=\"form-control\" id=\"billingZipcode\" placeholder=\"Your Billing Zipcode\" name=\"billingAddressZipcode\" required=\"required\" [(ngModel)]=\"billingAddress.billingAddressZipcode\"/>\n                </div>\n              </div>\n            </div>\n            <a mat-raised-button class=\"custom\" (click)=\"goToReview()\">Next</a>\n          </div>\n        </div>\n       </mat-tab>\n\n       <!-- 3. Review Items and Shipping -->\n       <mat-tab label=\"3. Review\">\n         <div class=\"panel panel-default panel-faq\">\n           <div class=\"panel-heading\">\n             <h4 class=\"panel-title\" style=\"margin-top: 10px;\">\n               3. Review Items and Shipping and Choose your shipping method:\n             </h4>\n           </div>\n           <div class=\"panel-body\">\n             <div class=\"radio\">\n               <label>\n                 <input type=\"radio\" name=\"shippingMethod\" value=\"groundShipping\" [(ngModel)]=\"shippingMethod\" />\n                 Ground Shipping\n               </label>\n             </div>\n             <div class=\"radio\">\n               <label>\n                 <input type=\"radio\" name=\"shippingMethod\" value=\"premiumShipping\" [(ngModel)]=\"shippingMethod\" />\n                 Premium Shipping\n               </label>\n             </div>\n\n             <div class=\"row\">\n               <div class=\"col-8\">\n                 <h4>Products</h4>\n               </div>\n               <div class=\"col-2\">\n                 <h4>Price</h4>\n               </div>\n               <div class=\"col-2\">\n                 <h4>Quantity</h4>\n               </div>\n             </div>\n\n             <!-- display products -->\n             <div class=\"row\" *ngFor=\"let cartItem of cartItemList\" style=\"margin-bottom: 10px;\">\n               <hr />\n               <div class=\"col-2\">\n                  <a (click)=\"onSelect(cartItem.book)\"><img class=\"img-responsive pointer\" src=\"{{serverPath}}/image/book/{{cartItem.book.id}}.png\" style=\"width:100px;\" /></a>\n                </div>\n                <div class=\"col-6\">\n                  <a class=\"pointer\" (click)=\"onSelect(cartItem.book)\"><h4>{{cartItem.book.title}}</h4></a>\n                  <p *ngIf=\"cartItem.book.inStockNumber>10\" style=\"color:green;\">In Stock</p>\n                  <p *ngIf=\"cartItem.book.inStockNumber<10\" style=\"color:brown;\">Only <span>{{cartItem.book.inStockNumber}}</span> In Stock</p>\n                  <p *ngIf=\"cartItem.book.inStockNumber == 0\" style=\"color:darkred;\">Out of Stock</p>\n                  <a class=\"pointer\" (click)=\"onRemoveCartItem(cartItem)\">Delete</a>\n                </div>\n                <div class=\"col-2\">\n                  <!-- ngClass attaches a class to this element based on a condition. In this case we attach the text strike to it -->\n                  <h5 style=\"color: #db3208; font-size: large;\">$<span [ngClass]=\"{'text-strike': cartItem.book.inStockNumber == 0}\">{{cartItem.book.ourPrice}}</span></h5>\n                </div>\n                <div class=\"col-2 text-center\">\n                  <h5 style=\"font-size: large;\">{{cartItem.qty}}</h5>\n                </div>\n              </div>\n              <div class=\"row\">\n                <h4 class=\"col-12 text-right\"><strong style=\"font-size: large\">Total Price (<span>{{cartItemNumber}}</span> items):</strong><span style=\"color: #db3208; font-size: large\">$<span>{{shoppingCart.grandTotal}}</span></span></h4>\n                <br/><br/>\n                <button mat-raised-button type=\"submit\" class=\"btn-block custom\">Place your order</button>\n              </div>\n             </div>\n           </div>\n       </mat-tab>\n     </mat-tab-group>\n   </form>\n   </div>\n </div>\n</div>"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/app-const */ "./src/app/const/app-const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/shopping-cart */ "./src/app/models/shopping-cart.ts");
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shipping.service */ "./src/app/services/shipping.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _models_shipping_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/shipping-address */ "./src/app/models/shipping-address.ts");
/* harmony import */ var _models_billing_address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/billing-address */ "./src/app/models/billing-address.ts");
/* harmony import */ var _models_user_payment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/user-payment */ "./src/app/models/user-payment.ts");
/* harmony import */ var _models_user_billing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/user-billing */ "./src/app/models/user-billing.ts");
/* harmony import */ var _models_user_shipping__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/user-shipping */ "./src/app/models/user-shipping.ts");
/* harmony import */ var _models_payment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models/payment */ "./src/app/models/payment.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../models/order */ "./src/app/models/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var OrderComponent = /** @class */ (function () {
    function OrderComponent(router, cartService, shippingService, paymentService, checkoutService) {
        this.router = router;
        this.cartService = cartService;
        this.shippingService = shippingService;
        this.paymentService = paymentService;
        this.checkoutService = checkoutService;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].serverPath;
        this.cartItemList = [];
        this.shoppingCart = new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"]();
        this.shippingAddress = new _models_shipping_address__WEBPACK_IMPORTED_MODULE_8__["ShippingAddress"]();
        this.billingAddress = new _models_billing_address__WEBPACK_IMPORTED_MODULE_9__["BillingAddress"]();
        this.userPayment = new _models_user_payment__WEBPACK_IMPORTED_MODULE_10__["UserPayment"]();
        this.userShipping = new _models_user_shipping__WEBPACK_IMPORTED_MODULE_12__["UserShipping"]();
        this.userBilling = new _models_user_billing__WEBPACK_IMPORTED_MODULE_11__["UserBilling"]();
        this.userShippingList = [];
        this.userPaymentList = [];
        this.payment = new _models_payment__WEBPACK_IMPORTED_MODULE_13__["Payment"]();
        this.emptyShippingList = true;
        this.emptyPaymentList = true;
        this.stateList = [];
        this.order = new _models_order__WEBPACK_IMPORTED_MODULE_14__["Order"]();
    }
    OrderComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail', this.selectedBook.id]);
    };
    OrderComponent.prototype.selectedChange = function (val) {
        this.selectedTab = val;
    };
    OrderComponent.prototype.goToPayment = function () {
        this.selectedTab = 1;
    };
    OrderComponent.prototype.goToReview = function () {
        this.selectedTab = 2;
    };
    OrderComponent.prototype.getCartItemList = function () {
        var _this = this;
        this.cartService.getCartItemList().subscribe(function (res) {
            _this.cartItemList = res.json();
            _this.cartItemNumber = _this.cartItemList.length;
        }, function (error) {
            console.log(error.text());
        });
    };
    OrderComponent.prototype.setShippingAddress = function (userShipping) {
        this.shippingAddress.shippingAddressName = userShipping.userShippingName;
        this.shippingAddress.shippingAddressStreet1 = userShipping.userShippingStreet1;
        this.shippingAddress.shippingAddressStreet2 = userShipping.userShippingStreet2;
        this.shippingAddress.shippingAddressCity = userShipping.userShippingCity;
        this.shippingAddress.shippingAddressState = userShipping.userShippingState;
        this.shippingAddress.shippingAddressCountry = userShipping.userShippingCountry;
        this.shippingAddress.shippingAddressZipcode = userShipping.userShippingZipcode;
    };
    OrderComponent.prototype.setPaymentMethod = function (userPayment) {
        this.payment.type = userPayment.type;
        this.payment.cardNumber = userPayment.cardNumber;
        this.payment.expiryMonth = userPayment.expiryMonth;
        this.payment.expiryYear = userPayment.expiryYear;
        this.payment.cvc = userPayment.cvc;
        this.payment.holderName = userPayment.holderName;
        this.payment.defaultPayment = userPayment.defaultPayment;
        this.billingAddress.billingAddressName = this.userBilling.userBillingName;
        this.billingAddress.billingAddressStreet1 = this.userBilling.userBillingStreet1;
        this.billingAddress.billingAddressStreet2 = this.userBilling.userBillingStreet2;
        this.billingAddress.billingAddressCity = this.userBilling.userBillingCity;
        this.billingAddress.billingAddressState = this.userBilling.userBillingState;
        this.billingAddress.billingAddressCountry = this.userBilling.userBillingCountry;
        this.billingAddress.billingAddressZipcode = this.userBilling.userBillingZipcode;
    };
    OrderComponent.prototype.setBillingAsShipping = function (checked) {
        console.log("same as shipping");
        if (checked) {
            this.billingAddress.billingAddressName = this.shippingAddress.shippingAddressName;
            this.billingAddress.billingAddressStreet1 = this.shippingAddress.shippingAddressStreet1;
            this.billingAddress.billingAddressStreet2 = this.shippingAddress.shippingAddressStreet2;
            this.billingAddress.billingAddressCity = this.shippingAddress.shippingAddressCity;
            this.billingAddress.billingAddressState = this.shippingAddress.shippingAddressState;
            this.billingAddress.billingAddressCountry = this.shippingAddress.shippingAddressCountry;
            this.billingAddress.billingAddressZipcode = this.shippingAddress.shippingAddressZipcode;
        }
    };
    OrderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.checkoutService.checkout(this.shippingAddress, this.billingAddress, this.payment, this.shippingMethod).subscribe(function (res) {
            _this.order = res.json();
            console.log(_this.order);
            var navigationExtras = {
                queryParams: {
                    "order": JSON.stringify(_this.order)
                }
            };
            _this.router.navigate(['/orderSummary'], navigationExtras);
        }, function (error) {
            console.log(error.text());
        });
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCartItemList();
        this.cartService.getShoppingCart().subscribe(function (res) {
            _this.shoppingCart = res.json();
        }, function (error) {
            console.log(error.text());
        });
        this.shippingService.getUserShippingList().subscribe(function (res) {
            _this.userShippingList = res.json();
            if (_this.userShippingList.length) {
                _this.emptyShippingList = false;
                for (var _i = 0, _a = _this.userShippingList; _i < _a.length; _i++) {
                    var userShipping = _a[_i];
                    if (userShipping.userShippingDefault) {
                        _this.setShippingAddress(userShipping);
                        return;
                    }
                }
            }
        }, function (error) {
            console.log(error.text());
        });
        this.paymentService.getUserPaymentList().subscribe(function (res) {
            _this.userPaymentList = res.json();
            if (_this.userPaymentList.length) {
                _this.emptyPaymentList = false;
                for (var _i = 0, _a = _this.userPaymentList; _i < _a.length; _i++) {
                    var userPayment = _a[_i];
                    if (userPayment.defaultPayment) {
                        _this.setPaymentMethod(userPayment);
                        return;
                    }
                }
            }
        }, function (error) {
            console.log(error.text());
        });
        for (var s in _const_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].usStates) {
            this.stateList.push(s);
        }
        this.payment.type = "";
        this.payment.expiryMonth = "";
        this.payment.expiryYear;
        this.billingAddress.billingAddressState = "";
        this.shippingAddress.shippingAddressState = "";
        this.shippingMethod = "groundShipping";
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/components/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _services_shipping_service__WEBPACK_IMPORTED_MODULE_5__["ShippingService"], _services_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"],
            _services_checkout_service__WEBPACK_IMPORTED_MODULE_7__["CheckoutService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\r\n  border: 0;\r\n  clear:both;\r\n  display:block;\r\n  width: 96%;               \r\n  background-color:#DBDBDB;\r\n  height: 1px;\r\n}"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <app-logo spanLabel=\"Shopping Cart\"></app-logo>\n\n <div class=\"row\" style=\"margin-top: 40px;\">\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div class=\"col-6 text-left\">\n          <button mat-raised-button class=\"custom\" routerLink=\"/bookList\">Continue shopping</button>\n        </div>\n        <div class=\"col-6 text-right\">\n          <button mat-raised-button class=\"custom\" routerLink=\"/checkout\">Check out</button>\n        </div>\n      </div>\n      <br/>\n      <div *ngIf=\"cartItemUpdated\" class=\"alert alert-success\">\n        Cart Item Update Successfully!\n      </div>\n      <div *ngIf=\"notEnoughStock\" class=\"alert alert-warning\">\n        Some of the products don't have enought stock. Please update product quantity.\n      </div>\n      <div *ngIf=\"emptyCart\" class=\"alert alert-warning\">\n        Your cart is empty. See if you can find what you link the bookshelf and add them to cart.\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <h4>Products</h4>\n        </div>\n        <div class=\"col-2\">\n          <h4>Price</h4>\n        </div>\n        <div class=\"col-2\">\n          <h4>Qty</h4>\n        </div>\n      </div>\n      <div class=\"row\" *ngFor=\"let cartItem of cartItemList\" style=\"margin-bottom: 40px;\">  \n        <hr/>\n        <div class=\"col-2\">\n          <a (click)=\"onSelect(cartItem.book)\"><img class=\"img-responsive pointer\" src=\"{{serverPath}}/image/book/{{cartItem.book.id}}.png\" style=\"width:100px;\" /></a>\n        </div>\n        <div class=\"col-6\">\n          <a class=\"pointer\" (click)=\"onSelect(cartItem.book)\"><h4>{{cartItem.book.title}}</h4></a>\n          <p *ngIf=\"cartItem.book.inStockNumber>10\" style=\"color:green;\">In Stock</p>\n          <p *ngIf=\"cartItem.book.inStockNumber<10\" style=\"color:brown;\">Only <span>{{cartItem.book.inStockNumber}}</span> In Stock</p>\n          <p *ngIf=\"cartItem.book.inStockNumber == 0\" style=\"color:darkred;\">Out of Stock</p>\n          <a class=\"pointer\" (click)=\"onRemoveCartItem(cartItem)\">Delete</a>\n        </div>\n        <div class=\"col-2\">\n          <!-- ngClass attaches a class to this element based on a condition. In this case we attach the text strike to it -->\n          <h5 style=\"color: #db3208; font-size: large;\">$<span [ngClass]=\"{'text-strike': cartItem.book.inStockNumber == 0}\">{{cartItem.book.ourPrice}}</span></h5>\n        </div>\n        <div class=\"col-2\">\n          <input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"cartItem.id\"/>\n          <input id=\"cartItem.id\" name=\"qty\" [disabled]=\"cartItem.book.inStockNumber == 0\" class=\"form-control cartItemQty\" [(ngModel)]=\"cartItem.qty\" (ngModelChange)=\"cartItem.toUpdate=true\"/>\n          <a style=\"margin-top: 20px;\" mat-button *ngIf=\"cartItem.toUpdate\" class=\"pointer mat-warn\" (click)=\"onUpdateCartItem(cartItem)\">Update</a>  \n        </div>\n\n      </div>\n      <div class=\"row\">\n        <h4 class=\"col-12 text-right\"><strong style=\"font-size: large\">Total Price (<span>{{cartItemNumber}}</span> items): </strong><span style=\"color:#db3208;font-size: large\">$ <span>{{shoppingCart.grandTotal}}</span></span></h4>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/app-const */ "./src/app/const/app-const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/shopping-cart */ "./src/app/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].serverPath;
        this.cartItemList = [];
        this.shoppingCart = new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"]();
    }
    ShoppingCartComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/bookDetail', this.selectedBook.id]);
    };
    ShoppingCartComponent.prototype.onRemoveCartItem = function (cartItem) {
        var _this = this;
        this.cartService.removeCartItem(cartItem.id).subscribe(function (res) {
            console.log(res.text());
            _this.getCartItemList();
            _this.getShoppingCart();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.onUpdateCartItem = function (cartItem) {
        var _this = this;
        this.cartService.updateCartItem(cartItem.id, cartItem.qty).subscribe(function (res) {
            console.log(res.text());
            _this.cartItemUpdated = true;
            cartItem.toUpdate = false;
            _this.getShoppingCart();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.getCartItemList = function () {
        var _this = this;
        this.cartService.getCartItemList().subscribe(function (res) {
            _this.cartItemList = res.json();
            _this.cartItemNumber = _this.cartItemList.length;
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.getShoppingCart = function () {
        var _this = this;
        this.cartService.getShoppingCart().subscribe(function (res) {
            console.log(res.json());
            _this.shoppingCart = res.json();
        }, function (error) {
            console.log(error.text());
        });
    };
    ShoppingCartComponent.prototype.onCheckout = function () {
        if (this.cartItemNumber == 0) {
            this.emptyCart = true;
        }
        else {
            for (var _i = 0, _a = this.cartItemList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.qty > item.book.inStockNumber) {
                    console.log("not enough stock in some item");
                    this.notEnoughStock = true;
                    return;
                }
            }
            // this.router.navigate('['/order']');
        }
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.getCartItemList();
        this.getShoppingCart();
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/const/app-const.ts":
/*!************************************!*\
  !*** ./src/app/const/app-const.ts ***!
  \************************************/
/*! exports provided: AppConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConst", function() { return AppConst; });
var AppConst = /** @class */ (function () {
    function AppConst() {
    }
    AppConst.serverPath = 'http://127.0.0.1:8181';
    AppConst.usStates = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "Dist of Columbia",
        "FL": "Florida",
        "GA": "Georgia",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PA": "Pennsylvania",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    };
    return AppConst;
}());



/***/ }),

/***/ "./src/app/models/billing-address.ts":
/*!*******************************************!*\
  !*** ./src/app/models/billing-address.ts ***!
  \*******************************************/
/*! exports provided: BillingAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddress", function() { return BillingAddress; });
var BillingAddress = /** @class */ (function () {
    function BillingAddress() {
    }
    return BillingAddress;
}());



/***/ }),

/***/ "./src/app/models/book.ts":
/*!********************************!*\
  !*** ./src/app/models/book.ts ***!
  \********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/models/payment.ts":
/*!***********************************!*\
  !*** ./src/app/models/payment.ts ***!
  \***********************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
var Payment = /** @class */ (function () {
    function Payment() {
    }
    return Payment;
}());



/***/ }),

/***/ "./src/app/models/shipping-address.ts":
/*!********************************************!*\
  !*** ./src/app/models/shipping-address.ts ***!
  \********************************************/
/*! exports provided: ShippingAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingAddress", function() { return ShippingAddress; });
var ShippingAddress = /** @class */ (function () {
    function ShippingAddress() {
    }
    return ShippingAddress;
}());



/***/ }),

/***/ "./src/app/models/shopping-cart.ts":
/*!*****************************************!*\
  !*** ./src/app/models/shopping-cart.ts ***!
  \*****************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/models/user-billing.ts":
/*!****************************************!*\
  !*** ./src/app/models/user-billing.ts ***!
  \****************************************/
/*! exports provided: UserBilling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBilling", function() { return UserBilling; });
var UserBilling = /** @class */ (function () {
    function UserBilling() {
    }
    return UserBilling;
}());



/***/ }),

/***/ "./src/app/models/user-payment.ts":
/*!****************************************!*\
  !*** ./src/app/models/user-payment.ts ***!
  \****************************************/
/*! exports provided: UserPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPayment", function() { return UserPayment; });
var UserPayment = /** @class */ (function () {
    function UserPayment() {
    }
    return UserPayment;
}());



/***/ }),

/***/ "./src/app/models/user-shipping.ts":
/*!*****************************************!*\
  !*** ./src/app/models/user-shipping.ts ***!
  \*****************************************/
/*! exports provided: UserShipping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShipping", function() { return UserShipping; });
var UserShipping = /** @class */ (function () {
    function UserShipping() {
    }
    return UserShipping;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/app-const */ "./src/app/const/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_2__["AppConst"].serverPath;
    }
    BookService.prototype.getBookList = function () {
        var url = this.serverPath + '/book/bookList';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    BookService.prototype.getBook = function (id) {
        var url = _const_app_const__WEBPACK_IMPORTED_MODULE_2__["AppConst"].serverPath + "/book/" + id;
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    BookService.prototype.searchBook = function (keyword) {
        var url = this.serverPath + '/book/searchBook';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, keyword, { headers: tokenHeader });
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/app-const */ "./src/app/const/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_2__["AppConst"].serverPath;
    }
    CartService.prototype.addItem = function (id, qty) {
        var url = this.serverPath + '/cart/add';
        var cartItemInfo = {
            "bookId": id,
            "qty": qty
        };
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, cartItemInfo, { headers: tokenHeader });
    };
    CartService.prototype.getCartItemList = function () {
        var url = this.serverPath + '/cart/getCartItemList';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    CartService.prototype.getShoppingCart = function () {
        var url = this.serverPath + '/cart/getShoppingCart';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    CartService.prototype.updateCartItem = function (cartItemId, qty) {
        var url = this.serverPath + '/cart/updateCartItem';
        var cartItemInfo = {
            "cartItemId": cartItemId,
            "qty": qty
        };
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, cartItemInfo, { headers: tokenHeader });
    };
    CartService.prototype.removeCartItem = function (id) {
        var url = this.serverPath + '/cart/removeItem';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/app-const */ "./src/app/const/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutService = /** @class */ (function () {
    function CheckoutService(http) {
        this.http = http;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_2__["AppConst"].serverPath;
    }
    CheckoutService.prototype.checkout = function (shippingAddress, billingAddress, payment, shippingMethod) {
        var url = this.serverPath + '/checkout/checkout';
        var order = {
            "shippingAddress": shippingAddress,
            "billingAddress": billingAddress,
            "payment": payment,
            "shippingMethod": shippingMethod
        };
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, order, { headers: tokenHeader });
    };
    CheckoutService.prototype.getUserOrder = function () {
        var url = this.serverPath + '/checkout/getUserOrder';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    CheckoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/app-const */ "./src/app/const/app-const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_2__["AppConst"].serverPath;
    }
    LoginService.prototype.sendCredential = function (username, password) {
        var url = this.serverPath + '/token';
        var encodedCredentials = btoa(username + ":" + password);
        var basicHeader = "Basic " + encodedCredentials;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.checkSession = function () {
        var url = this.serverPath + '/checkSession';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'x-auth-token': localStorage.getItem('xAuthToken'),
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.logout = function () {
        var url = this.serverPath + '/user/logout';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'x-auth-token': localStorage.getItem('xAuthToken'),
        });
        return this.http.post(url, '', { headers: headers });
    };
    LoginService.prototype.getCurrentUserName = function () {
        var url = this.serverPath + '/user/getCurrentUser';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/app-const */ "./src/app/const/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_2__["AppConst"].serverPath;
    }
    OrderService.prototype.getOrderList = function () {
        var url = this.serverPath + '/order/getOrderList';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/app-const */ "./src/app/const/app-const.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].serverPath;
    }
    PaymentService.prototype.newPayment = function (payment) {
        var url = this.serverPath + '/payment/add';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(payment), { headers: tokenHeader });
    };
    PaymentService.prototype.getUserPaymentList = function () {
        var url = this.serverPath + '/payment/getUserPaymentList';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    PaymentService.prototype.removePayment = function (id) {
        var url = this.serverPath + '/payment/remove';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    PaymentService.prototype.setDefaultPayment = function (id) {
        var url = this.serverPath + '/payment/setDefault';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/services/shipping.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/shipping.service.ts ***!
  \**********************************************/
/*! exports provided: ShippingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingService", function() { return ShippingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/app-const */ "./src/app/const/app-const.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShippingService = /** @class */ (function () {
    function ShippingService(http) {
        this.http = http;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].serverPath;
    }
    ShippingService.prototype.newShipping = function (Shipping) {
        var url = this.serverPath + '/shipping/add';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(Shipping), { headers: tokenHeader });
    };
    ShippingService.prototype.getUserShippingList = function () {
        var url = this.serverPath + '/shipping/getUserShippingList';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    ShippingService.prototype.removeShipping = function (id) {
        var url = this.serverPath + '/shipping/remove';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    ShippingService.prototype.setDefaultShipping = function (id) {
        var url = this.serverPath + '/shipping/setDefault';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    ShippingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ShippingService);
    return ShippingService;
}());



/***/ }),

/***/ "./src/app/services/upload-image.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/upload-image.service.ts ***!
  \**************************************************/
/*! exports provided: UploadImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageService", function() { return UploadImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadImageService = /** @class */ (function () {
    function UploadImageService() {
        this.filesToUpload = [];
    }
    UploadImageService.prototype.upload = function (userId) {
        this.makeFileRequest("http://localhost:8181/user/add/image?id=" + userId, [], this.filesToUpload).
            then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    UploadImageService.prototype.modify = function (userId) {
        console.log(this.filesToUpload);
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest("http://localhost:8181/user/update/image?id=" + userId, [], this.filesToUpload).
                then(function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }
    };
    UploadImageService.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UploadImageService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log("image uploaded successfully!");
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
            xhr.send(formData);
        });
    };
    UploadImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UploadImageService);
    return UploadImageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _const_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/app-const */ "./src/app/const/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverPath = _const_app_const__WEBPACK_IMPORTED_MODULE_2__["AppConst"].serverPath;
    }
    UserService.prototype.addUserImage = function (user) {
        var url = this.serverPath + '/user/add';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, user, { headers: tokenHeader });
    };
    UserService.prototype.newUser = function (username, email) {
        var url = this.serverPath + '/user/newUser';
        var userInfo = {
            "username": username,
            "email": email
        };
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.retrievePassword = function (email) {
        var url = this.serverPath + '/user/forgetPassword';
        var userInfo = {
            "email": email
        };
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.updateUserInfo = function (user, newPassword, currentPassword) {
        var url = this.serverPath + "/user/updateUserInfo";
        var userInfo = {
            "id": user.id,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "username": user.username,
            "currentPassword": currentPassword,
            "email": user.email,
            "newPassword": newPassword
        };
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.getCurrentUser = function () {
        var url = this.serverPath + '/user/getCurrentUser';
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DOMINIC\Desktop\E-commerce Web App\BookstoreAPP\store-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map