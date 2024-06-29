import { Injectable } from '@angular/core';
import { DicePresetInterface } from './interfaces/dicepreset';

@Injectable({
  providedIn: 'root'
})
export class DicePresetService {

  constructor() { }

    presetList: DicePresetInterface[] = [
        {
            id: 1,
            title: "string",
            image: "img",
            subtext: "bla",
        },
        {
            id: 1,
            title: "string",
            image: "img",
            subtext: "bla",
        },
        {
            id: 1,
            title: "string",
            image: "img",
            subtext: "bla",
        },
        {
            id: 1,
            title: "string",
            image: "img",
            subtext: "bla",
        },
    ];

    getAllPresets(): DicePresetInterface[] {
      return this.presetList;
    }

  }