﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>[Create Event will go here]</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-default" (click)="cancelClick()">Cancel</button>
        </div>
    `
})
export class EventCreateComponent {
    isDirty: boolean = true;
    constructor(private router: Router) {

    }

    cancelClick() {
        this.router.navigate(['/events']);
    }
}