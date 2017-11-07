﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create.component';
import { Error404Component } from './errors/404.component';
import { SessionCreateComponent } from './events/event-details/session-create.component';
import { SessionListComponent } from './events/event-details/session-list.component';

import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventService } from './events/shared/event.service';
//import { ToastrService } from './common/toastr.service';
//import { TOASTR_TOKEN } from './common/toastr.service';
//import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent } from './common/index';
import { AuthService } from './user/auth.service';
//import { CollapsibleWellComponent } from './common/collapsible-well.component';

import { appRoutes } from './routes';

//declare let toastr: any;
declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        EventCreateComponent,
        Error404Component,
        SessionCreateComponent,
        SessionListComponent,
        CollapsibleWellComponent
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        //ToastrService,
        EventRouteActivator, // Shorthand
        //{
        //    provide: EventRouteActivator,
        //    useClass: EventRouteActivator
        //},
        {
            provide: 'canDeactivateEventCreate',
            useValue: checkDirtyState
        },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: EventCreateComponent) {
    //return false;

    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel ?');
    }
    else {
        return true;
    }
}