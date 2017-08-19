import { Component } from "@angular/core";

import { DvtService } from "./dvt.service";

@Component({
    selector: 'dvt-parse',
    template: `
<p>hellow dvt</p>
<pre>{{items | json}}</pre>
    `
})
export class DvtComponent {

    constructor(private dvtService: DvtService) {}
    items: any[] = [];

    ngOnInit() {
        this.dvtService.getItems()
            .subscribe(
                (items) => {
                    this.items = items;
                }
            );
    }

}
