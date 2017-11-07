﻿import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    template: `
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,
    //template: `
    //<div id="{{elementId}}" class="modal fade" tabindex="-1">
    //    <div class="modal-dialog">
    //        <div class="modal-content">
    //            <div class="modal-header">
    //                <button type="button" class="close" data-dismiss="modal">
    //                    <span>&times;</span>
    //                </button>
    //                <h4 class="modal-title">{{title}}</h4>
    //            </div>
    //            <div class="modal.body">
    //                <ng-content></ng-content>
    //            </div>
    //        </div>
    //    </div>
    //</div>
    //`,
    //template: `
    //<div id="simple-modal" class="modal fade" tabindex="-1">
    //    <div class="modal-dialog">
    //        <div class="modal-content">
    //            <div class="modal-header">
    //                <button type="button" class="close" data-dismiss="modal">
    //                    <span>&times;</span>
    //                </button>
    //                <h4 class="modal-title">{{title}}</h4>
    //            </div>
    //            <div class="modal.body">
    //                <ng-content></ng-content>
    //            </div>
    //        </div>
    //    </div>
    //</div>
    //`,
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll; }
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalcontainer') containerElement: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) {
    }

    closeModal() {
        this.$(this.containerElement.nativeElement).modal('hide');
    }
}