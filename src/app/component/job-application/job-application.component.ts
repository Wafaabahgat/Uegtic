import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css',
})
export class JobApplicationComponent {}
