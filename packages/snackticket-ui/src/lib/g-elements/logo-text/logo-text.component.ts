import { Component, Input } from '@angular/core';

const logoRatio = 139 / 258;

@Component({
  selector: 'snackticket-core-logo-text',
  templateUrl: './logo-text.component.html',
  styleUrls: ['./logo-text.component.sass'],
})
export class LogoTextComponent {
  logoRatio = logoRatio;
  @Input() width = 0;
}
