import {Directive, ElementRef, Input} from '@angular/core';
import {TranslateService} from '../translate/translate.service'

declare const Typed: TypedGlobalType;

@Directive({
    selector: '[appTyped]',
    providers: [TranslateService]
})

export class TypedDirective {
    @Input() text_key: string;
    private _config: any;

    constructor(private el: ElementRef, private _translate: TranslateService) {
        this.subscribeToLangChanged();
    }

    ngAfterViewInit() {
        this._config = {
            strings: this._translate.translate(this.text_key),
            typeSpeed: 0,
            loop: true
        };
        window.Typed.new('#' + this.el.nativeElement.id, this._config);
    }

    subscribeToLangChanged() {
        return this._translate.onLangChanged.subscribe((x: any) => this.refreshText());
    }

    refreshText() {
        console.log('lang changed');
        this._config.strings = this._translate.translate(this.text_key);
    }
}
