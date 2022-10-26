import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'snackticket-core-qrcode-button',
  templateUrl: './qrcode-button.component.html',
  styleUrls: ['./qrcode-button.component.sass'],
})
export class QrcodeButtonComponent {
  @HostBinding('class.clicked') isClicked = false;

  toggleFeedback() {
    this.isClicked = !this.isClicked;
  }
}
