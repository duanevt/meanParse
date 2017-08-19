import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PremierComponent } from "./premier-league.component";
import { PostListComponent } from "./premier-list.component";
import { PostComponent } from "./premier.component";
import { PostInputComponent } from "./premier-input.component";
import { PremierService } from "./premier.service";

@NgModule({
    declarations: [
        PremierComponent,
        PostListComponent,
        PostComponent,
        PostInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [PremierService]
})
export class PremierModule {

}
