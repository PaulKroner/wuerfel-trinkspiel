import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dice-preset',
  standalone: true,
  imports: [],
  templateUrl: './dice-preset.component.html',
  styleUrl: './dice-preset.component.css'
})
export class DicePresetComponent {
  ImagePath: string;
  
  constructor() {
    this.ImagePath = "./assets/dice-six-faces-four.png"
  }

  @Input() title: string = "Titel";
}
