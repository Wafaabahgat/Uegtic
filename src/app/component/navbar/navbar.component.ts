import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BgDirective } from '../../CustomDirectives/bg.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, BgDirective, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
