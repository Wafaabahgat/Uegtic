import { Component } from '@angular/core';
import { MainCompComponent } from './main-comp/main-comp.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainCompComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
