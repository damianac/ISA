import { SiteLoginComponent } from './site-login/site-login.component';
import { LoginComponent } from './login.component';

export const routes = [
    {
        path: '', children: [
            { path: '', component: LoginComponent },
            { path: 'site-login', component: SiteLoginComponent }
        ]
    },
];
