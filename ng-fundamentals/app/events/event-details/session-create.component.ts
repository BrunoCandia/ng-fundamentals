﻿import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
    selector: 'session-create',
    templateUrl: 'app/events/event-details/session-create.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input, .error select, .error textarea { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
    `]
})
export class SessionCreateComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {

        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        //this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords]);
        //this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    //private restrictedWords(control: FormControl): { [key: string]: any } {
    //    return control.value.includes('foo') ? {'restrictedWords': 'foo'} : null;
    //}

    //private restrictedWords(words) {
    //    return (control: FormControl): { [key: string]: any } => {
    //        if (!words) return null;

    //        var invalidWords = words
    //            .map(w => control.value.includes(w) ? w : null)
    //            .filter(w => w != null);

    //        return invalidWords && invalidWords.length > 0
    //            ? { 'restrictedWords': invalidWords.join(', ') }
    //            : null;
    //    }
    //}

    saveSession(formValue) {
        console.log(formValue);

        let session: ISession = {
            id: undefined,
            name: formValue.name,
            presenter: formValue.presenter,
            duration: +formValue.duration,
            level: formValue.level,
            abstract: formValue.abstract,
            voters: []
        }

        console.log(session);

        this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelAddSession.emit();
    }
}