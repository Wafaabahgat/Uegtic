import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team1.component.html',
  styleUrl: './team1.component.css',
})
export class Team1Component {
  className: string = '';
}
