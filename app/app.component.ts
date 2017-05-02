import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate/translate.service';

@Component({
    selector: 'app',
    templateUrl: 'templates/main.html'
})

export class AppComponent implements OnInit {
    public translatedText: string;
    public supportedLanguages: any[];

    constructor(private _translate: TranslateService) {
    }

    ngOnInit() {
        this.supportedLanguages = [
            {display: 'Italiano', iso_code:'IT', value: 'it'},
            {display: 'English', iso_code:'EN', value: 'en'}
        ];

        this.selectLang('it');
    }

    isCurrentLang(lang: string) {
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        this._translate.use(lang);
        this.refreshText();
    }

    refreshText() {
        this.translatedText = this._translate.instant('hello world');
    }
}