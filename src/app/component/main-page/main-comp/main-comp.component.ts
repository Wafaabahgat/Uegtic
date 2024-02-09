import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  signal,
} from '@angular/core';
import { DarkModeService } from '../../../dark-mode.service';

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

  // darkMode = signal<boolean>(false);
  // @HostBinding('class.dark') get() {}
  // constructor(
  //   private darkModeService: DarkModeService,
  //   private el: ElementRef,
  //   private renderer: Renderer2
  // ) {}
  // ngOnInit(): void {
  //   this.applyDarkMode();
  // }

  // private applyDarkMode(): void {
  //   const isDarkMode = this.darkModeService.darkMode();

  // const h2Element = this.el.nativeElement.querySelector('#ttl');
  // if (h2Element) {
  //   if (isDarkMode) {
  //     this.renderer.setStyle(h2Element, 'color', '#000000');
  //   } else {
  //     this.renderer.setStyle(h2Element, 'color', '#FFFFFF');
  //   }
  // }
  //}
}
