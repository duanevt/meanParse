// import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

// import Parse from 'parse';
var Parse = require('parse');

import { Premier } from "./premier.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class PremierService {
    private premPosts: Premier[] = [];
    private parsePremPosts: any[] = [];
    postIsEdit = new EventEmitter<Premier>();
    // serverAddress = " https://mean-max-angujlar4.herokuapp.com/message/";
    serverAddress = "http://localhost:3000/post/";

    // Parse stuff
    Premier;
    q;

    constructor(private errorService: ErrorService) {
      console.log("Initialise Parse");
      console.log(Parse)
      console.log(typeof Parse)
      Parse.initialize("myAppId");
      // Parse.serverURL = 'https://corchecks.herokuapp.com/parse';
      Parse.serverURL = "http://localhost:3000/parse/";
      this.Premier = Parse.Object.extend("Premier");
      this.q = new Parse.Query(this.Premier);
    }

    getParsePosts() {

      return Observable.fromPromise(this.q.find())
        .map((response) => {
            console.log("Map the parse find reply for posts")
            this.parsePremPosts = response as Array<any>;
            // const posts = response.json();
            console.log(response);
            console.log(typeof response)
            let dvt = (response as Array<any>);

            console.log("num of posts is " + dvt.length)
            let transformedPosts: Premier[] = [];
            for (let post of dvt) {
              console.log(post)
              let user = post.get("user");
              let username = "anon";
              if (user !== undefined) {
                console.log(user)
                username = user.get("username")
                console.log(username)
              }
                transformedPosts.push(new Premier(
                    post.get("home"),
                    post.get("away"),
                    post.get("goalsHome"),
                    post.get("goalsAway"),
                    post.id,
                    username
                    )
                );
            }
            this.premPosts = transformedPosts;
            return transformedPosts;
        })
        .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }

    addPost(post: Premier) {
      // lets get the current'y logged on user
      let currentUser = Parse.User.current();
      post.user = currentUser;
      // if currentUser === null return null;

      console.log("about to add a post");
      let parsepost = new this.Premier();

      return Observable.fromPromise(parsepost.save(post))
              .map((prem) => {
                console.log("mapping prem post in service")
                console.log(prem)
                let pp = prem as any;
                this.parsePremPosts.push(prem);
                this.premPosts.push(new Premier(
                    pp.get("home"),
                    pp.get("away"),
                    pp.get("goalsHome"),
                    pp.get("goalsAway"),
                    pp.id
                    )
                );
                return prem;
              })
    }


    editPost(post: Premier) {
        this.postIsEdit.emit(post);
    }

    updatePost(post: Premier) {
      let res = this.parsePremPosts.filter(obj => {
        return obj.id === post.id;
      })
      console.log("found post to update")
      console.log(res[0])
      let updatePost = res[0];
      updatePost.set("away", post.away);
      updatePost.set("home", post.home);
      updatePost.set("goalsHome", post.goalsHome);
      updatePost.set("goalsAway", post.goalsAway);

      console.log(updatePost)

      return Observable.fromPromise(
        updatePost.save().then(
          (p) => console.log("successfully updated parse post"),
          err => console.error(err)
        )
      )

    }


    deletePost(post: Premier) {
      console.log("about to delete a parse post")
      console.log(post)
      let res = this.parsePremPosts.find(obj => {
        return obj.id === post.id;
      })
      console.log("found the post?")
      console.log(res)


      // remove post from local list - if the destroy fails the user will
      // need to refresh the page to get the post back again. should do the
      // removal in the service .... perhaps here with then???
      return Observable.fromPromise(
        // parsepost.destroy(res[0])
        res.destroy().then(p => {
          console.log("in service and successfully destroyed p")
          console.log(p)
          this.premPosts.splice(this.premPosts.indexOf(post), 1)
        })
      )
    }
}
