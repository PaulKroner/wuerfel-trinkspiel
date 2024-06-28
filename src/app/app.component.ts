import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wuerfel-trinkspiel';
}
