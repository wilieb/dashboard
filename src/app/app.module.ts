import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { NavComponent } from './dash/nav/nav.component';
import { SideNavComponent } from './dash/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
