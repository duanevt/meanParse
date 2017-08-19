import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/dvt']">DvT</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/pmsgs']">Parse Msg</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/posts']">Post</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/parseposts']">Parse Post</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/prem']">Prem League</a></li>
                </ul>
            </nav>
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/prem']">Prem League</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/parseauth']">Parse Auth</a></li>
                </ul>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}
