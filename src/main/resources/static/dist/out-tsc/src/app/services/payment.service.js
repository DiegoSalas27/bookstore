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
var app_const_1 = require("../const/app-const");
var http_1 = require("@angular/http");
var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
        this.serverPath = app_const_1.AppConst.serverPath;
    }
    PaymentService.prototype.newPayment = function (payment) {
        var url = this.serverPath + '/payment/add';
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, JSON.stringify(payment), { headers: tokenHeader });
    };
    PaymentService.prototype.getUserPaymentList = function () {
        var url = this.serverPath + '/payment/getUserPaymentList';
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    PaymentService.prototype.removePayment = function (id) {
        var url = this.serverPath + '/payment/remove';
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    PaymentService.prototype.setDefaultPayment = function (id) {
        var url = this.serverPath + '/payment/setDefault';
        var tokenHeader = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem("xAuthToken")
        });
        return this.http.post(url, id, { headers: tokenHeader });
    };
    PaymentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map