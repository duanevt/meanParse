import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PmsgsComponent } from "./pmsgs.component";
import { MessageListComponent } from "./pmsg-list.component";
import { PmsgComponent } from "./pmsg.component";
import { MessageInputComponent } from "./pmsg-input.component";
import { MessageService } from "./pmsg.service";

@NgModule({
    declarations: [
        PmsgsComponent,
        MessageListComponent,
        PmsgComponent,
        MessageInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [MessageService]
})
export class PmsgModule {

}
