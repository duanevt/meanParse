import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostService } from "./parse-post.service";
import { Post } from "./parse-post.model";

@Component({
    selector: 'app-parse-post-input',
    templateUrl: './parse-post-input.component.html'
})
export class PostInputComponent implements OnInit {
    post: Post;

    constructor(private postService: PostService) {}

    onSubmit(form: NgForm) {
        if (this.post) {
            // Edit
            this.post.fred = form.value.fred;
            this.post.conquered = form.value.conquered;
            this.post.numComments = form.value.numComments;
            this.postService.updatePost(this.post)
                .subscribe(
                    result => console.log(result)
                );
            this.post = null;
        } else {
            // Create
            console.log("form value is")
            console.log(form.value)
            const post = new Post(form.value.fred, 'tractorBoys', 3, 11);
            this.postService.addPost(post)
                .subscribe(
                    data => {
                      console.log("subscribe returned for addPost parse")
                      console.log(data)
                    },
                    error => console.error(error)
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
