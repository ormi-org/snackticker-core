import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { SplashScreenComponent } from '@snackticket-core/snackticket-ui';

@Component({
  selector: 'snackticket-core-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.sass'],
})
export class StartupComponent implements OnInit {
  @ViewChild(SplashScreenComponent) splashScreen!: SplashScreenComponent;

  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
