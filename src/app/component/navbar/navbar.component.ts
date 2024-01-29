import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BgDirective } from '../../CustomDirectives/bg.directive';
import { flush } from '@angular/core/testing';
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
  showitems(): void {
    console.log('open navigation menu');
    this.isItemsShowed = !this.isItemsShowed;
  }
  
  closeNav(): void {
    console.log('Closing navigation menu');
    this.isItemsShowed = false;
  }
}
