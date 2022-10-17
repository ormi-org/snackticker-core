import { Component, Input } from '@angular/core';

const logoRatio = 213 / 173;

@Component({
  selector: 'snackticket-core-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass'],
})
export class LogoComponent {
  logoRatio = logoRatio;
  @Input() width = 0;
}
