"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var tabs_1 = require("@angular/material/tabs");
var animations_1 = require("@angular/platform-browser/animations");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var app_routing_1 = require("./app.routing");
require("hammerjs");
var login_service_1 = require("./services/login.service");
var user_service_1 = require("./services/user.service");
var payment_service_1 = require("./services/payment.service");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var nav_bar_component_1 = require("./components/nav-bar/nav-bar.component");
var my_account_component_1 = require("./components/my-account/my-account.component");
var logo_component_1 = require("./components/logo/logo.component");
var my_profile_component_1 = require("./components/my-profile/my-profile.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                nav_bar_component_1.NavBarComponent,
                my_account_component_1.MyAccountComponent,
                logo_component_1.LogoComponent,
                my_profile_component_1.MyProfileComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                tabs_1.MatTabsModule,
                progress_spinner_1.MatProgressSpinnerModule,
                app_routing_1.routing
            ],
            providers: [
                login_service_1.LoginService,
                user_service_1.UserService,
                payment_service_1.PaymentService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map