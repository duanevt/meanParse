import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PremierService } from "./premier.service";
import { Premier } from "./premier.model";

@Component({
    selector: 'app-parse-post-input',
    templateUrl: './premier-input.component.html'
})
export class PostInputComponent implements OnInit {
    post: Premier;

    constructor(private premierService: PremierService) {}

    onSubmit(form: NgForm) {
        if (this.post) {
            // Edit
            this.post.home = form.value.home;
            this.post.away = form.value.away;
            this.post.goalsHome = form.value.goalsHome;
            this.post.goalsAway = form.value.goalsAway;
            this.premierService.updatePost(this.post)
                .subscribe(
                    result => console.log(result)
                );
            this.post = null;
        } else {
            // Create
            console.log("form value is")
            console.log(form.value)
            const post = new Premier(form.value.home, form.value.away,
                              form.value.goalsHome, form.value.goalsAway);
            this.premierService.addPost(post)
                .subscribe(
                    data => {
                      console.log("subscribe returned for addPremier prem parse")
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
        this.premierService.postIsEdit.subscribe(
            (post: Premier) => this.post = post
        );
    }
}
