import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'snackticket-core-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export abstract class ButtonComponent{
  protected icon: SafeHtml;
  protected inputSvg = '';
  @ViewChild('buttonIcon')
  buttonIconContainer!: ElementRef;

  @HostBinding('class.clicked') isClicked = false;

  constructor(protected sanitizer: DomSanitizer) {
    this.icon = sanitizer.bypassSecurityTrustHtml(this.inputSvg);
  }

  toggleFeedback() {
    this.isClicked = !this.isClicked;
  }

}
