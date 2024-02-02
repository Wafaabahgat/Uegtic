import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-rights',
  standalone: true,
  imports: [CommonModule, TextComponent],
  templateUrl: './rights.component.html',
  styleUrl: './rights.component.css',
})
export class RightsComponent {}
