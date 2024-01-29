import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BgDirective } from './CustomDirectives/bg.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, BgDirective, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Uegtic';
}
