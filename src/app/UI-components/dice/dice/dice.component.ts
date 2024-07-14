import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent {
  ImagePath: string;
  
  constructor() {
    this.ImagePath = "./assets/dice-six-faces-four.png"
  }
}
