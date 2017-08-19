import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from "./parse-signin.component";
import { SignupComponent } from "./parse-signup.component";
import { LogoutComponent } from "./parse-logout.component";
import { authRouting } from "./parse-auth.routing";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})
export class ParseAuthModule {

}
