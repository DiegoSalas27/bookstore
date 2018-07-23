"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var my_account_component_1 = require("./components/my-account/my-account.component");
var my_profile_component_1 = require("./components/my-profile/my-profile.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'myAccount',
        component: my_account_component_1.MyAccountComponent
    },
    {
        path: 'myProfile',
        component: my_profile_component_1.MyProfileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map