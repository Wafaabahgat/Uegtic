import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }
  darkMode = signal<boolean>(false);

  setDarkMode(value: boolean): void {
    this.darkMode.set(value);
  }

}
