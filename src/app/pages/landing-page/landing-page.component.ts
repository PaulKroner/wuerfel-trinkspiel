import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../UI-components/accordion/accordion.component';
import { DicePresetComponent } from '../../UI-components/dice-preset/dice-preset.component';
import { DicePresetInterface } from '../../services/interfaces/dicepreset';
import { DicePresetService } from '../../services/dice-preset-service.service';
import { TooltipComponent } from '../../UI-components/tooltip/tooltip.component';
import { ModalComponent } from '../../UI-components/modal/modal.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, AccordionComponent, DicePresetComponent, TooltipComponent, ModalComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  presetList: DicePresetInterface[] = [];
  text = "Wie wird gespielt?";

  constructor(private dicePresetService: DicePresetService) {}

  ngOnInit(): void {
    this.presetList = this.dicePresetService.getAllPresets();
  }

}
