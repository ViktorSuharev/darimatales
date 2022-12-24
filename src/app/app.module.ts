import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MenuButtonComponent} from './menu-header/menu-button/menu-button.component';
import {FrontComponent} from './tales/white-snake/body/front.component';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {FrontPictureComponent} from './tales/white-snake/body/front-picture/front-picture.component';
import {TaleNavCtrlComponent} from './tale-nav-ctrl/tale-nav-ctrl.component';
import {ProgressBarComponent} from './tale-nav-ctrl/progress-bar/progress-bar.component';
import {PicIconComponent} from './tale-nav-ctrl/pic-galery/pic-icon/pic-icon.component';
import {ResizeOnNavigateDirective} from './directives/resize-on-navigate.directive';
import {PicGalleryComponent} from './tale-nav-ctrl/pic-galery/pic-gallery.component';
import {WhiteSnakeComponent} from './tales/white-snake/white-snake.component';
import {TwentyFifthComponent} from './tales/twenty-fifth/twenty-fifth.component';
import {AppRoutingModule} from './app.routing.module';
import {NamelessChildComponent} from './tales/nameless-child/nameless-child.component';
import {NoSanitizePipe} from './tales/twenty-fifth/no-sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TaleNavCtrlComponent,
    FrontPictureComponent,
    ProgressBarComponent,
    MenuButtonComponent,
    MenuHeaderComponent,
    PicIconComponent,
    ResizeOnNavigateDirective,
    PicGalleryComponent,
    WhiteSnakeComponent,
    TwentyFifthComponent,
    NamelessChildComponent,
    NoSanitizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
