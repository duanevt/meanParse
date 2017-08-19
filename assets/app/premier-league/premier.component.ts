import { Component, Input } from "@angular/core";

import { Premier } from "./premier.model";
import { PremierService } from "./premier.service";

@Component({
    selector: 'app-parse-post',
    templateUrl: './premier.component.html',
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
    @Input() post: Premier;

    constructor(private premierService: PremierService) {}

    onEdit() {
        this.premierService.editPost(this.post);
    }

    onDelete() {
        this.premierService.deletePost(this.post)
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
