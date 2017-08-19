import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "./parse-signup.component";
import { SigninComponent } from "./parse-signin.component";
import { LogoutComponent } from "./parse-logout.component";

const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);
