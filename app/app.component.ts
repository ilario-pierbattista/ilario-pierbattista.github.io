import {Component, OnInit} from '@angular/core';
import {TranslateService} from './translate/translate.service';

@Component({
    selector: 'app',
    templateUrl: 'templates/main.html'
})

export class AppComponent implements OnInit {
    public supportedLanguages: any[];

    constructor(public translateService: TranslateService) {
    }

    ngOnInit() {
        this.supportedLanguages = [
            {display: 'Italiano', iso_code: 'IT', value: 'it'},
            {display: 'English', iso_code: 'EN', value: 'en'}
        ];

        this.selectLang('it');
    }

    isCurrentLang(lang: string) {
        return lang === this.translateService.currentLang;
    }

    selectLang(lang: string) {
        this.translateService.use(lang);
    }
}