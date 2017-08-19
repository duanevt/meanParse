import { Component, OnInit } from "@angular/core";

import { Post } from "./post.model";
import { PostService } from "./post.service";

@Component({
    selector: 'app-post-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-post
                   [post]="post"
                    *ngFor="let post of posts"></app-post>
        </div>
    `
})
export class PostListComponent implements OnInit {
    posts: Post[];

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService.getPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts;
                }
            );
    }
}
