import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RoundButtonComponent} from './ui-kit/round-button/round-button.component';
import {HeaderComponent} from './header/header.component';
import {FrontPictureComponent} from './tales/white-snake/front-picture/front-picture.component';
import {TaleNavigationComponent} from './components/tale-navigation/tale-navigation.component';
import {ProgressBarComponent} from './components/tale-navigation/progress-bar/progress-bar.component';
import {ResizeOnNavigateDirective} from './ui-kit/resize-on-hover/resize-on-navigate.directive';
import {PicGalleryComponent} from './components/tale-navigation/pic-galery/pic-gallery.component';
import {WhiteSnakeComponent} from './tales/white-snake/white-snake.component';
import {TwentyFifthComponent} from './tales/twenty-fifth/twenty-fifth.component';
import {NamelessChildComponent} from './tales/nameless-child/nameless-child.component';
import {NoSanitizePipe} from './ui-kit/no-sanitize/no-sanitize.pipe';
import {AppRoutingModule} from './app-routing.module';
import {BrandIconComponent} from './ui-kit/brand-icon/brand-icon.component';
import {RoundSelectComponent} from './ui-kit/round-select/round-select.component';
import {TooltipModule} from './ui-kit/tooltip/tooltip.module';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    TaleNavigationComponent,
    FrontPictureComponent,
    ProgressBarComponent,
    RoundButtonComponent,
    HeaderComponent,
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
    TooltipModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
