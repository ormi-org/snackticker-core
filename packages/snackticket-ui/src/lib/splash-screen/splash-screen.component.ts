import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

const SPLASH_SCREEN_LOADING_SENTENCES = [
  'Tartinage du beurre',
  'Glaçage de la saucisse',
  'Sucrage des fraises',
  'Cuisson de la tarte',
  'Léchage de la cuillière',
  'Découpage des cornichons',
  'Préparation du sandwich',
  'Battage des œufs',
  'Friture des beignets',
  'Tourne et retourne !',
  'Super nickel !',
  'Nettoyage des assiettes',
  'Emballage des friandises',
  'Refroidissement des boissons',
  'Service du café'
]

@Component({
  selector: 'snackticket-core-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.sass'],
})
export class SplashScreenComponent implements AfterViewInit {

  @ViewChild('random_text')
  randomText!: ElementRef;

  ngAfterViewInit(): void {
    timer(0, 2000)
    .subscribe(() => {
      console.log("text")
      this.randomText.nativeElement.textContent = SPLASH_SCREEN_LOADING_SENTENCES[Math.floor(Math.random() * SPLASH_SCREEN_LOADING_SENTENCES.length)]
    });
  } 
}
