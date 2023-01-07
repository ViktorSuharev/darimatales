import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RoundButtonComponent} from './ui-kit/round-button/round-button.component';
import {HeaderComponent} from './common/header/header.component';
import {FrontPictureComponent} from './tales/white-snake/front-picture/front-picture.component';
import {TaleNavigationComponent} from './common/tale-navigation/tale-navigation.component';
import {ProgressBarComponent} from './common/tale-navigation/progress-bar/progress-bar.component';
import {ResizeOnHoverDirective} from './common/tale-navigation/pic-galery/resize-on-hover/resize-on-hover.directive';
import {PicGalleryComponent} from './common/tale-navigation/pic-galery/pic-gallery.component';
import {WhiteSnakeComponent} from './tales/white-snake/white-snake.component';
import {TwentyFifthComponent} from './tales/twenty-fifth/twenty-fifth.component';
import {NamelessChildComponent} from './tales/nameless-child/nameless-child.component';
import {NoSanitizePipe} from './ui-kit/no-sanitize/no-sanitize.pipe';
import {AppRoutingModule} from './app-routing.module';
import {BrandIconComponent} from './ui-kit/brand-icon/brand-icon.component';
import {RoundSelectComponent} from './ui-kit/round-select/round-select.component';
import {TooltipModule} from './ui-kit/tooltip/tooltip.module';
import {OverlayModule} from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaleNavigationComponent,
    FrontPictureComponent,
    ProgressBarComponent,
    RoundButtonComponent,
    HeaderComponent,
    ResizeOnHoverDirective,
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
    OverlayModule,
    HttpClientModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
