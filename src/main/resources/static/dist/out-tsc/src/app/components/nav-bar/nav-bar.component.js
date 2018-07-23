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
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(loginService) {
        this.loginService = loginService;
        this.loggedIn = false;
    }
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().subscribe(function (res) {
            location.reload();
            _this.loggedIn = false;
        }, function (error) {
            console.log(error);
        });
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            console.log(res);
            _this.loggedIn = true;
        }, function (error) {
            console.log(error);
            _this.loggedIn = false;
        });
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map