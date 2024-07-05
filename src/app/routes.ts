import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GameScreenComponent } from './pages/game-screen/game-screen.component';

const routeConfig: Routes = [
    {
        path: "",
        component: LandingPageComponent,
        title: "Home page",
    },
    {
        path: "gamescreen",
        component: GameScreenComponent,
        title: "GameScreen",
    }
];

export default routeConfig;