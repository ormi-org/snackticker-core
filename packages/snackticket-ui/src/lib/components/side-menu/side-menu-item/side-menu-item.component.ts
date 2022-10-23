import { Component, Input } from '@angular/core';

@Component({
  selector: 'snackticket-core-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.sass'],
})
export class SideMenuItemComponent {
  @Input() isActive = false;
  @Input() item:
    | { isActive: boolean; name: string; icon: string; route: string }
    | undefined;
  @Input() route = '';
}
