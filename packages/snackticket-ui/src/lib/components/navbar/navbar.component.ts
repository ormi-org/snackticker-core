import { Component, Input } from '@angular/core';

@Component({
  selector: 'snackticket-core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent{

    @Input() currentAmount = 0;
  
}
