import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RoundButtonComponent} from './ui-kit/components/round-button/round-button.component';
import {FrontComponent} from './tales/white-snake/body/front.component';
import {HeaderComponent} from './header/header.component';
import {FrontPictureComponent} from './tales/white-snake/body/front-picture/front-picture.component';
import {TaleNavCtrlComponent} from './ui-kit/tale-nav-ctrl/tale-nav-ctrl.component';
import {ProgressBarComponent} from './ui-kit/tale-nav-ctrl/progress-bar/progress-bar.component';
import {PicIconComponent} from './ui-kit/tale-nav-ctrl/pic-galery/pic-icon/pic-icon.component';
import {ResizeOnNavigateDirective} from './ui-kit/directives/resize-on-navigate.directive';
import {PicGalleryComponent} from './ui-kit/tale-nav-ctrl/pic-galery/pic-gallery.component';
import {WhiteSnakeComponent} from './tales/white-snake/white-snake.component';
import {TwentyFifthComponent} from './tales/twenty-fifth/twenty-fifth.component';
import {NamelessChildComponent} from './tales/nameless-child/nameless-child.component';
import {NoSanitizePipe} from './ui-kit/pipes/no-sanitize.pipe';
import {AppRoutingModule} from './app-routing.module';
import {BrandIconComponent} from './ui-kit/components/brand-icon/brand-icon.component';
import {RoundSelectComponent} from './ui-kit/components/round-select/round-select.component';
import {TooltipModule} from './ui-kit/tooltip/tooltip.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TaleNavCtrlComponent,
    FrontPictureComponent,
    ProgressBarComponent,
    RoundButtonComponent,
    HeaderComponent,
    PicIconComponent,
    ResizeOnNavigateDirective,
    PicGalleryComponent,
    WhiteSnakeComponent,
    TwentyFifthComponent,
    NamelessChildComponent,
    NoSanitizePipe,
    BrandIconComponent,
    RoundSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
