import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { FrontComponent } from './front/front.component';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {FrontPictureComponent} from './front-picture/front-picture.component';
import {FrontWidgetComponent} from './front-widget/front-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    FrontWidgetComponent,
    FrontPictureComponent,
    MenuButtonComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
