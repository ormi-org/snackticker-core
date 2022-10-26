import { Component, Input, ViewChild, HostBinding } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'snackticket-core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  @Input() currentAmount = 0;

  @ViewChild(SideMenuComponent)
  sideMenu!: SideMenuComponent;

  @HostBinding('class.hidden') isHidden = true;

  toggleSideMenu() {
    this.sideMenu.toggleVisibility();
  }
}
