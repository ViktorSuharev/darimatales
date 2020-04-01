import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuButtonComponent } from './menu-header/menu-button/menu-button.component';
import { FrontComponent } from './body/front.component';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {FrontPictureComponent} from './body/front-picture/front-picture.component';
import {FrontWidgetComponent} from './body/front-widget/front-widget.component';
import {ProgressBarComponent} from './body/front-widget/progress-bar/progress-bar.component';

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
