import { Component, Input } from "@angular/core";

import { Post } from "./parse-post.model";
import { PostService } from "./parse-post.service";

@Component({
    selector: 'app-parse-post',
    templateUrl: './parse-post.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class PostComponent {
    @Input() post: Post;

    constructor(private postService: PostService) {}

    onEdit() {
        this.postService.editPost(this.post);
    }

    onDelete() {
        this.postService.deletePost(this.post)
            .subscribe(
                result => {
                  console.log("successfully destroyed")
                  console.log(result);
                  // now remove from list locally
                  
                }
            );
    }

    belongsToUser() {
        return true; // temp debug until userid working with parse
        // return localStorage.getItem('userId') == this.post.userId;
    }
}
