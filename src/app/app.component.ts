import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    AboutComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-features></app-features>
    <app-about></app-about>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'Angular Landing Page';
}

