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
var login_service_1 = require("../../services/login.service");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var app_const_1 = require("../../const/app-const");
var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent(loginService, userService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
        this.serverPath = app_const_1.AppConst.serverPath;
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
        core_1.Component({
            selector: 'app-my-account',
            templateUrl: './my-account.component.html',
            styleUrls: ['./my-account.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, user_service_1.UserService, router_1.Router])
    ], MyAccountComponent);
    return MyAccountComponent;
}());
exports.MyAccountComponent = MyAccountComponent;
//# sourceMappingURL=my-account.component.js.map