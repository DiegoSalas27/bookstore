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
var router_1 = require("@angular/router");
var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.serverPath = app_const_1.AppConst.serverPath;
    }
    LoginService.prototype.sendCredential = function (username, password) {
        var url = this.serverPath + '/token';
        var encodedCredentials = btoa(username + ":" + password);
        var basicHeader = "Basic " + encodedCredentials;
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.checkSession = function () {
        var url = this.serverPath + '/checkSession';
        var headers = new http_1.Headers({
            'x-auth-token': localStorage.getItem('xAuthToken'),
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.logout = function () {
        var url = this.serverPath + '/user/logout';
        var headers = new http_1.Headers({
            'x-auth-token': localStorage.getItem('xAuthToken'),
        });
        return this.http.post(url, '', { headers: headers });
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map