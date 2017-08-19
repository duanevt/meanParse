import { Component } from "@angular/core";

@Component({
    selector: 'app-parse-posts',
    template: `
        <div class="row">
            <app-parse-post-input></app-parse-post-input>
        </div>
        <hr>
        <div class="row">
            <app-parse-post-list></app-parse-post-list>
        </div>
    `
})
export class PremierComponent {
  constructor() {
    console.log("PremierLeagueComponent constructor")
  }
}
