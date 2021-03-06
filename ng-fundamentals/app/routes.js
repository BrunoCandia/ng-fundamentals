"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var event_create_component_1 = require("./events/event-create.component");
var _404_component_1 = require("./errors/404.component");
var user_module_1 = require("./user/user.module");
var session_create_component_1 = require("./events/event-details/session-create.component");
var event_resolver_service_1 = require("./events/event-resolver.service");
//export function exportUserModule() {
//    return UserModule;
//}
exports.appRoutes = [
    { path: 'events/new', component: event_create_component_1.EventCreateComponent, canDeactivate: ['canDeactivateEventCreate'] },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, resolve: { event: event_resolver_service_1.EventResolver } },
    //{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: session_create_component_1.SessionCreateComponent },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: function () { return user_module_1.UserModule; } } // Anonymous function syntax
    //{ path: 'user', loadChildren: exportUserModule }                              // Not Anonymous function syntax     
    //{ path: 'user', loadChildren: () => System.import('./user/user.module') }     // Angular 2.0.x syntax    
    //{ path: 'user', loadChildren: 'app/user/user.module#UserModule' }             // Angular 4.0.x syntax
];
//# sourceMappingURL=routes.js.map