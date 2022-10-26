import { Component, HostBinding } from '@angular/core';

const MENU_ITEMS: Array<{
  isActive: boolean;
  name: string;
  icon: string;
  route: string;
}> = [];

@Component({
  selector: 'snackticket-core-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass'],
})
export class SideMenuComponent {
  menuItems = MENU_ITEMS;
  @HostBinding('class.hidden') isHidden = true;
  eventName = '';
  eventLocation = '';
  eventHour = '';

  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }
}
