import {
  Component,
  HostBinding,
  Output,
  signal,
  EventEmitter,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BgDirective } from '../../CustomDirectives/bg.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, BgDirective, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isItemsShowed: boolean = false;

  darkMode = signal<boolean>(false);
  @HostBinding('class.darkk') get mode() {
    if (this.darkMode()) {
      document.body.classList.remove('dark');
      document.body.style.backgroundImage = 'url(./assets/lightBG.svg)';
      if (window.matchMedia('(max-width: 1020px)')) {
        document.body.style.backgroundImage = 'url(./assets/lightBGSmall.svg)';
      }
      return this.darkMode();
    }
    document.body.classList.add('dark');

    document.body.style.backgroundImage = 'url(./assets/Background.svg)';
    if (window.matchMedia('(max-width: 1020px)')) {
      document.body.style.backgroundImage = 'url(./assets/smallBackground.svg)';
    }
    return this.darkMode();
  }

  showitems(): void {
    console.log('open navigation menu');
    this.isItemsShowed = !this.isItemsShowed;
  }

  closeNav(): void {
    console.log('Closing navigation menu');
    this.isItemsShowed = false;
  }
}
