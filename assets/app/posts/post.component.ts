import { Component, Input } from "@angular/core";

import { Post } from "./post.model";
import { PostService } from "./post.service";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
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
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.post.userId;
    }
}
