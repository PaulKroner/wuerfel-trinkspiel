import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GameScreenComponent } from './pages/game-screen/game-screen.component';

const routeConfig: Routes = [
    {
        path: "",
        component: LandingPageComponent,
    },
    {
        path: "gamescreen",
        component: GameScreenComponent,
    }
];

export default routeConfig;