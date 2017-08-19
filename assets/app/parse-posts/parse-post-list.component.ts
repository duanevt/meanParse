import { Component, OnInit } from "@angular/core";

import { Post } from "./parse-post.model";
import { PostService } from "./parse-post.service";

@Component({
    selector: 'app-parse-post-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-parse-post
                   [post]="post"
                    *ngFor="let post of posts"></app-parse-post>
        </div>
    `
})
export class PostListComponent implements OnInit {
    posts: Post[];

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService.getParsePosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts;
                }
            );
    }
}
