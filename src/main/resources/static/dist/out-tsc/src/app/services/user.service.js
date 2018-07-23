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
var http_1 = require("@angular/http");
var app_const_1 = require("../const/app-const");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverPath = app_const_1.AppConst.serverPath;
    }
    UserService.prototype.newUser = function (username, email) {
        var url = this.serverPath + '/user/newUser';
        var userInfo = {
            "username": username,
            "email": email
        };
        var tokenHeader = new http_1.Headers({
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
        var tokenHeader = new http_1.Headers({
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
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(userInfo), { headers: tokenHeader });
    };
    UserService.prototype.getCurrentUser = function () {
        var url = this.serverPath + '/user/getCurrentUser';
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map