import { Component, Input } from '@angular/core';

const logoRatio = 64 / 175;

@Component({
  selector: 'snackticket-core-author-splash',
  templateUrl: './author-splash.component.html',
  styleUrls: ['./author-splash.component.sass'],
})
export class AuthorSplashComponent {
  logoRatio = logoRatio;
  @Input() width = 0;
}
