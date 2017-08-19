import { Component } from "@angular/core";

@Component({
    selector: 'app-posts',
    template: `
        <div class="row">
            <app-post-input></app-post-input>
        </div>
        <hr>
        <div class="row">
            <app-post-list></app-post-list>
        </div>
    `
})
export class PostsComponent {
  constructor() {
    console.log("PostsComponent constructor")
  }
}
