import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Compiles the application dynamically in the browser
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app'; // Where the module loader can find the angular2 application module
/**
 * Main.ts - Bootstraps the first Angular2 module.
 * Providing a starting point to kick off the application.
 */
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
