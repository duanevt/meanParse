import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { DvtComponent } from "./dvt/dvt.component";
import { PmsgsComponent } from "./pmsg/pmsgs.component";
import { PostsComponent } from "./posts/posts.component";
import { ParsePostsComponent } from "./parse-posts/parse-posts.component";
import { PremierComponent } from "./premier-league/premier-league.component";
import { ParseAuthenticationComponent } from "./parseauth/parse-authentication.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'dvt', component: DvtComponent },
    { path: 'pmsgs', component: PmsgsComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'parseposts', component: ParsePostsComponent },
    { path: 'prem', component: PremierComponent },
    { path: 'parseauth', component: ParseAuthenticationComponent, loadChildren: './parseauth/parse-auth.module#ParseAuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
