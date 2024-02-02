import { Component } from '@angular/core';
import { BackGroundDirective } from '../../CustomDirectives/back-ground.directive';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [BackGroundDirective],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
