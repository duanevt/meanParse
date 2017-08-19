import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsComponent } from "./posts.component";
import { PostListComponent } from "./post-list.component";
import { PostComponent } from "./post.component";
import { PostInputComponent } from "./post-input.component";
import { PostService } from "./post.service";

@NgModule({
    declarations: [
        PostsComponent,
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
export class PostModule {

}
