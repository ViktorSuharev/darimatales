import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuButtonComponent } from './menu-header/menu-button/menu-button.component';
import { FrontComponent } from './front/front.component';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {FrontPictureComponent} from './front/front-picture/front-picture.component';
import {FrontWidgetComponent} from './front/front-widget/front-widget.component';
import {ProgressBarComponent} from './front/front-widget/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    FrontWidgetComponent,
    FrontPictureComponent,
    ProgressBarComponent,
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
