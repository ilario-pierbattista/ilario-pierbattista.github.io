import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TranslatePipe}   from './translate/translate.pipe';
import {TranslateService}   from './translate/translate.service';
import {TRANSLATION_PROVIDERS}   from './translate/translations';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TranslatePipe],
    bootstrap: [AppComponent],
    providers: [TRANSLATION_PROVIDERS, TranslateService]
})
export class AppModule {
}