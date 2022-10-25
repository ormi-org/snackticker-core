import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './g-elements/logo/logo.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AuthorSplashComponent } from './g-elements/author-splash/author-splash.component';
import { LogoTextComponent } from './g-elements/logo-text/logo-text.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu/side-menu-item/side-menu-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LogoComponent,
    SplashScreenComponent,
    AuthorSplashComponent,
    LogoTextComponent,
    LoadingBarComponent,
    SideMenuComponent,
    SideMenuItemComponent,
  ],
  exports: [
    LogoTextComponent,
    AuthorSplashComponent,
    LogoComponent,
    SplashScreenComponent,
    LoadingBarComponent,
    SideMenuComponent,
    SideMenuItemComponent,
  ],
})
export class SnackticketUiModule {}
