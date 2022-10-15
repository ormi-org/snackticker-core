import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './g-elements/logo/logo.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AuthorSplashComponent } from './g-elements/author-splash/author-splash.component';
import { LogoTextComponent } from './g-elements/logo-text/logo-text.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BurgerButtonComponent } from './components/navbar/burger-button/burger-button.component';
import { QrcodeButtonComponent } from './components/navbar/qrcode-button/qrcode-button.component';
import { BasketButtonComponent } from './components/navbar/basket-button/basket-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LogoComponent,
    SplashScreenComponent,
    AuthorSplashComponent,
    LogoTextComponent,
    LoadingBarComponent,
    NavbarComponent,
    BurgerButtonComponent,
    QrcodeButtonComponent,
    BasketButtonComponent,
  ],
  exports: [
    LogoTextComponent,
    AuthorSplashComponent,
    LogoComponent,
    SplashScreenComponent,
    LoadingBarComponent,
    BurgerButtonComponent,
    QrcodeButtonComponent,
    BasketButtonComponent,
  ],
})
export class SnackticketUiModule {}
