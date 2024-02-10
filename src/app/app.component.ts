import {  Component,  signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BgDirective } from './CustomDirectives/bg.directive';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    BgDirective,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DarkModeService],
})
export class AppComponent  {
  title = 'Uegtic';
  darkMode = signal<boolean>(false);
  // @HostBinding('class.dark') get mode() {
    // return this.darkMode;
  // }
  // dark(e: any) {
    // console.log(e);
    // this.darkMode = e;
  // }

  // @ViewChildren('child1, child2') childElements!: QueryList<ElementRef>;

  // constructor(private renderer: Renderer2) {}

  // ngAfterViewInit() {
    // this.childElements.forEach((childElement: ElementRef) => {
      // const hasDarkClass = childElement.nativeElement.classList.contains('dark');
      // if (hasDarkClass) {
        // this.renderer.addClass(childElement.nativeElement, 'dark');
      // }
    // });
  // }
}
