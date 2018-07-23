"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_const_1 = require("../../const/app-const");
var user_service_1 = require("../../services/user.service");
var login_service_1 = require("../../services/login.service");
var user_1 = require("../../models/user");
var router_1 = require("@angular/router");
var payment_service_1 = require("../../services/payment.service");
var user_payment_1 = require("../../models/user-payment");
var user_billing_1 = require("../../models/user-billing");
var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(loginService, userService, paymentService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.paymentService = paymentService;
        this.router = router;
        this.serverPath = app_const_1.AppConst.serverPath;
        this.dataFetched = false;
        this.credential = { 'username': '', 'password': '' };
        this.user = new user_1.User();
        this.selectedProfileTab = 0;
        this.selectedBillingTab = 0;
        this.userPayment = new user_payment_1.UserPayment();
        this.userBilling = new user_billing_1.UserBilling();
        this.userPaymentList = [];
        this.stateList = [];
    }
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
    MyProfileComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (res) {
            _this.user = res.json();
            _this.userPaymentList = _this.user.userPaymentList;
            for (var index in _this.user.userPaymentList) {
                if (_this.userPaymentList[index].defaultPayment) {
                    _this.defaultUserPaymentId = _this.userPaymentList[index].id;
                }
            }
            _this.dataFetched = true;
        }, function (error) {
            console.log(error);
        });
    };
    MyProfileComponent.prototype.onNewPayment = function () {
        var _this = this;
        this.paymentService.newPayment(this.userPayment).subscribe(function (res) {
            _this.getCurrentUser();
            _this.selectedBillingTab = 0;
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
        for (var s in app_const_1.AppConst.usStates) {
            this.stateList.push(s);
        }
        this.userBilling.userBillingState = "";
        this.userPayment.type = "";
        this.userPayment.expiryMonth = "";
        this.userPayment.expiryYear = "";
        this.userPayment.userBilling = this.userBilling;
        this.defaultPaymentSet = false;
    };
    MyProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-my-profile',
            templateUrl: './my-profile.component.html',
            styleUrls: ['./my-profile.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, user_service_1.UserService,
            payment_service_1.PaymentService, router_1.Router])
    ], MyProfileComponent);
    return MyProfileComponent;
}());
exports.MyProfileComponent = MyProfileComponent;
//# sourceMappingURL=my-profile.component.js.map