import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    AppRoutingModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
