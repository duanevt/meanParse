import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostService } from "./post.service";
import { Post } from "./post.model";

@Component({
    selector: 'app-post-input',
    templateUrl: './post-input.component.html'
})
export class PostInputComponent implements OnInit {
    post: Post;

    constructor(private postService: PostService) {}

    onSubmit(form: NgForm) {
        if (this.post) {
            // Edit
            this.post.fred = form.value.content;
            this.postService.updatePost(this.post)
                .subscribe(
                    result => console.log(result)
                );
            this.post = null;
        } else {
            // Create
            const post = new Post(form.value.content, 'tractorBoys', 3, 11);
            this.postService.addPost(post)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.post = null;
        form.resetForm();
    }

    ngOnInit() {
        this.postService.postIsEdit.subscribe(
            (post: Post) => this.post = post
        );
    }
}
