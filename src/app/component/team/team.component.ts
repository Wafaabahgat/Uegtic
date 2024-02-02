import { Component } from '@angular/core';
import { Team1Component } from './team1/team1.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [Team1Component],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {

}
