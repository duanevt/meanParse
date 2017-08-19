import { Component, OnInit } from "@angular/core";

import { Premier } from "./premier.model";
import { PremierService } from "./premier.service";

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
    posts: Premier[];

    constructor(private premierService: PremierService) {}

    ngOnInit() {
        this.premierService.getParsePosts()
            .subscribe(

                (posts: Premier[]) => {
                  console.log("got prem results")
                    this.posts = posts;
                }
            );
    }
}
