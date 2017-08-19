import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParsePostsComponent } from "./parse-posts.component";
import { PostListComponent } from "./parse-post-list.component";
import { PostComponent } from "./parse-post.component";
import { PostInputComponent } from "./parse-post-input.component";
import { PostService } from "./parse-post.service";

@NgModule({
    declarations: [
        ParsePostsComponent,
        PostListComponent,
        PostComponent,
        PostInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [PostService]
})
export class ParsePostModule {

}
