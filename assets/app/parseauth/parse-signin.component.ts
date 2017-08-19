import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "./parse-user.model";
import { ParseAuthService } from "./parse-auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './parse-signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;

    constructor(private authService: ParseAuthService, private router: Router) {}

    onSubmit() {
        const user = new User(this.myForm.value.username, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                  console.log("signed into parse ok")
                  console.log(data)
                    // localStorage.setItem('token2', data.username);
                    // localStorage.setItem('userId2', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }
}
