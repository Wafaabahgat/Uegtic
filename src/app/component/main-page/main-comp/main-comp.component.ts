import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-comp.component.html',
  styleUrl: './main-comp.component.css',
})
export class MainCompComponent {
  @Input() TARGET: string = '';
  @Input() imageSrc: string = '';
  @Input() BgColor: string = '';
  @Input() className: string = '';
}
