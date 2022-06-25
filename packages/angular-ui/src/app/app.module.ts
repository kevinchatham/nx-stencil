import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreComponentsAngularModule } from '@web-components/core-components-angular';
import { defineCustomElements } from '@web-components/core-components/loader';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

defineCustomElements();

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CoreComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
