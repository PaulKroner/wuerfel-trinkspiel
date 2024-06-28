import {Routes} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';

const routeConfig: Routes = [
    {
        path: "",
        component: LandingPageComponent,
        title: "Home page",
    }
];

export default routeConfig;