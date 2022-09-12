import { Component, Input } from '@angular/core';

@Component({
  selector: 'snackticket-core-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.sass'],
})
export class LoadingBarComponent {
  @Input() width = 0;
  @Input() height = 0;
  @Input() progress = 0;
}
