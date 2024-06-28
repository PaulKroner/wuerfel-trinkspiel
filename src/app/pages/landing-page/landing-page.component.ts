import { Component } from '@angular/core';
import { AccordionComponent } from '../../UI-components/accordion/accordion.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
