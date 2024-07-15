import { Component, QueryList, ViewChildren } from '@angular/core';
import { DiceComponent } from "../../UI-components/dice/dice/dice.component";
import { TooltipComponent } from "../../UI-components/tooltip/tooltip.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-game-screen',
    standalone: true,
    templateUrl: './game-screen.component.html',
    styleUrl: './game-screen.component.css',
    imports: [DiceComponent, TooltipComponent, CommonModule]
})
export class GameScreenComponent {

    text = "Das bedeuten die Symbole";

    @ViewChildren(DiceComponent) diceComponents!: QueryList<DiceComponent>;
    allRolled: boolean = false;

    enableAllDice(): void {
        this.diceComponents.forEach(dice => dice.enableDice());
        this.checkAllRolled()
    }

    checkAllRolled(): void {
        this.allRolled = this.diceComponents.toArray().every(dice => dice.isDisabled);
    }

    onDiceRolled(): void {
        this.checkAllRolled();
    }
}
