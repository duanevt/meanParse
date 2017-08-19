import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./parse-user.model";
import { ErrorService } from "../errors/error.service";

// import Parse from 'parse';
var Parse = require('parse');

@Injectable()
export class ParseAuthService {
    // serverAddress = " https://mean-max-angujlar4.herokuapp.com/user";
    serverAddress = "http://localhost:3000/user";
    user;

    constructor(private http: Http, private errorService: ErrorService) {
      console.log("Initialise Parse - Parse Auth Service");
      console.log(Parse)
      console.log(typeof Parse)
      Parse.initialize("myAppId");
      // Parse.serverURL = 'https://corchecks.herokuapp.com/parse';
      Parse.serverURL = "http://localhost:3000/parse/";
      this.user = new Parse.User();
    }

    signup(user: User) {
      this.user.set("username", user.firstName);
      this.user.set("password", user.password);
      this.user.set("email", user.email);
      this.user.set("lastName", user.lastName);
      this.user.set("firstName", user.firstName);
      this.user.set("team", "Chelsea");

        return Observable.fromPromise(this.user.signUp())
            .map((user) => {
              console.log("successfully signed up");
              console.log(user)
              return user;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        return Observable.fromPromise(
          Parse.User.logIn(user.username, user.password));
    }

    logout() {
      Parse.User.logOut().then((u) => {
        console.log("logged out of parse for user .." )
        console.log(u)
      })
    }

    isLoggedIn() {
        return Parse.User.current() !== null;
    }
}
