import { Component, HostBinding, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BgDirective } from './CustomDirectives/bg.directive';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    BgDirective,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DarkModeService],
})
export class AppComponent {
  title = 'Uegtic';

  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() {
    if (this.darkMode()) {
      document.body.style.backgroundImage = 'url(./assets/lightBG.svg)';
      if (window.matchMedia('(max-width: 1020px)')) {
        document.body.style.backgroundImage = 'url(./assets/lightBGSmall.svg)';
      }
      return this.darkMode();
    }
    document.body.style.backgroundImage = 'url(./assets/Background.svg)';
    if (window.matchMedia('(max-width: 1020px)')) {
      document.body.style.backgroundImage = 'url(./assets/smallBackground.svg)';
    }
    return this.darkMode();
  }
}
