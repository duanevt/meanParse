import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/message.module";
import { DvtComponent } from "./dvt/dvt.component";
import { DvtService } from "./dvt/dvt.service";
import { PmsgModule } from "./pmsg/pmsg.module";
import { PostModule } from "./posts/post.module";
import { ParsePostModule } from "./parse-posts/parse-post.module";
import { PremierModule } from "./premier-league/premier.module";
import { ParseAuthenticationComponent } from "./parseauth/parse-authentication.component";
import { ParseAuthService } from "./parseauth/parse-auth.service";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent,
        DvtComponent,
        ParseAuthenticationComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        MessageModule,
        PmsgModule,
        PostModule,
        ParsePostModule,
        PremierModule
    ],
    providers: [AuthService, ErrorService, DvtService, ParseAuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
