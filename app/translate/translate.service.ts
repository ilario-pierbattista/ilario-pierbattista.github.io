import {Injectable, Inject, EventEmitter} from '@angular/core';
import {TRANSLATIONS} from './translations';

@Injectable()
export class TranslateService {
    private _currentLang: string;
    public onLangChanged: EventEmitter<string> = new EventEmitter<string>();

    public get currentLang() {
        return this._currentLang;
    }

    constructor(@Inject(TRANSLATIONS) private _translations: any) {
    }

    public use(lang: string): void {
        this._currentLang = lang;
        this.onLangChanged.emit(lang);
    }

    public translate(key: string): string|string[] {
        // private perform translation
        let translation = key;

        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        return translation;
    }

    public instant(key: string) {
        // call translation
        return this.translate(key);
    }
}