///<reference path="../node_modules/@angular/platform-browser/src/browser.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule);