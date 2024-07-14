import { Component } from '@angular/core';
import { DiceComponent } from "../../UI-components/dice/dice/dice.component";
import { TooltipComponent } from "../../UI-components/tooltip/tooltip.component";

@Component({
    selector: 'app-game-screen',
    standalone: true,
    templateUrl: './game-screen.component.html',
    styleUrl: './game-screen.component.css',
    imports: [DiceComponent, TooltipComponent]
})
export class GameScreenComponent {
    text = "Das bedeuten die Symbole"
}
