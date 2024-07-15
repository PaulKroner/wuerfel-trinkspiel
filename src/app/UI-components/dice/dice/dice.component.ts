import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { DiceSide } from '../../../services/interfaces/diceinterface';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent {

  sides: DiceSide[] = [
    { name: 'One', svg: './assets/dice-six-faces-one.svg' },
    { name: 'Two', svg: './assets/dice-six-faces-two.svg' },
    { name: 'Three', svg: './assets/dice-six-faces-three.svg' },
    { name: 'Four', svg: './assets/dice-six-faces-four.svg' },
    { name: 'Five', svg: './assets/dice-six-faces-five.svg' },
    { name: 'Six', svg: './assets/dice-six-faces-six.svg' }
  ];

  currentSide: DiceSide = this.sides[0];
  ImagePath: string = this.currentSide.svg;
  isDisabled: boolean = false; // Zustand für deaktivierten Würfel
  
  constructor() {}

  rollDice(): void {
    if (this.isDisabled) return; // Verhindert das Würfeln, wenn deaktiviert
    const randomIndex = Math.floor(Math.random() * this.sides.length);
    this.currentSide = this.sides[randomIndex];
    this.ImagePath = this.currentSide.svg;
    this.isDisabled = true; // Deaktiviert den Würfel nach dem Wurf
    this.rolled.emit(); // Emit event when dice is rolled
  }

  @Output() rolled = new EventEmitter<void>();

  enableDice(): void {
    this.isDisabled = false;
  }

  @Input() dice_id: number = 0;
}
