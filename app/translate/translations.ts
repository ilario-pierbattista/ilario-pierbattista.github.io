import {InjectionToken} from "@angular/core";

import {LANG_EN_NAME, LANG_EN_TRANS} from './lang-en';
import {LANG_IT_NAME, LANG_IT_TRANS} from './lang-it';

export const TRANSLATIONS = new InjectionToken('translations');

const dictionary = {
    [LANG_IT_NAME]: LANG_IT_TRANS,
    [LANG_EN_NAME]: LANG_EN_TRANS,
};

export const TRANSLATION_PROVIDERS = [
    {provide: TRANSLATIONS, useValue: dictionary},
];

