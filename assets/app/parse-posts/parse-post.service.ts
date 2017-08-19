// import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

// import Parse from 'parse';
var Parse = require('parse');

import { Post } from "./parse-post.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class PostService {
    private posts: Post[] = [];
    private parsePosts: any[] = [];
    postIsEdit = new EventEmitter<Post>();
    // serverAddress = " https://mean-max-angujlar4.herokuapp.com/message/";
    serverAddress = "http://localhost:3000/post/";

    // Parse stuff
    PPost;
    q;

    constructor(private errorService: ErrorService) {
      console.log("Initialise Parse");
      console.log(Parse)
      console.log(typeof Parse)
      Parse.initialize("myAppId");
      // Parse.serverURL = 'https://corchecks.herokuapp.com/parse';
      Parse.serverURL = "http://localhost:3000/parse/";
      this.PPost = Parse.Object.extend("Post");
      this.q = new Parse.Query(this.PPost);
    }

    getParsePosts() {

      return Observable.fromPromise(this.q.find())
        .map((response) => {
            console.log("Map the parse find reply for posts")
            this.parsePosts = response as Array<any>;
            // const posts = response.json();
            console.log(response);
            console.log(typeof response)
            let dvt = (response as Array<any>);

            console.log("num of posts is " + dvt.length)
            let transformedPosts: Post[] = [];
            for (let post of dvt) {
              console.log(post)
                transformedPosts.push(new Post(
                    post.get("fred"),
                    post.attributes.conquered,
                    post.attributes.numComments,
                    post.attributes.cccc,
                    post.id
                    )
                );
            }
            this.posts = transformedPosts;
            return transformedPosts;
        })
        .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });

      // this.q.find().then((posts) => {
      //   console.log("got posts via parse")
      //   console.log(posts)
      // })
    }

    addPost(post: Post) {
      // use parse sdk
      console.log("about to add a post");
      let parsepost = new this.PPost();
      return Observable.fromPromise(
        parsepost.save(post)
      )
    }


    editPost(post: Post) {
        this.postIsEdit.emit(post);
    }

    updatePost(post: Post) {
      let res = this.parsePosts.filter(obj => {
        return obj.id === post.id;
      })
      console.log("found post to update")
      console.log(res[0])
      let updatePost = res[0];
      updatePost.set("conquered", post.conquered);
      updatePost.set("fred", post.fred);
      updatePost.set("numComments", post.numComments);

      console.log(updatePost)

      // updatePost.save().then((p) => {
      //   console.log("successfully updated pasrse post")
      //   },
      //   err => console.error(err)
      // );

      return Observable.fromPromise(
        updatePost.save().then(
          (p) => console.log("successfully updated parse post"),
          err => console.error(err)
        )
      )




    }
    // updatePost(post: Post) {
    //     const body = JSON.stringify(post);
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     return this.http.patch(this.serverAddress + post.messageId + token, body, {headers: headers})
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }

    deletePost(post: Post) {
      console.log("about to delete a parse post")
      console.log(post)
      let res = this.parsePosts.filter(obj => {
        return obj.id === post.id;
      })
      console.log("found the post?")
      console.log(res)
      // let parsepost = new this.PPost();
      // res[0].destroy().then(res => {
      //   console.log("destroy worked")
      //   console.log(res)
      //   },
      //   err => console.error(err)
      // )

      // remove post from local list - if the destroy fails the user will
      // need to refresh the page to get the post back again. should do the
      // removal in the service .... perhaps here with then???
      return Observable.fromPromise(
        // parsepost.destroy(res[0])
        res[0].destroy().then(p => {
          console.log("in service and successfully destroyed p")
          console.log(p)
          this.posts.splice(this.posts.indexOf(res[0]), 1)
        })
      )

        // this.posts.splice(this.posts.indexOf(post), 1);
        // const token = localStorage.getItem('token')
        //     ? '?token=' + localStorage.getItem('token')
        //     : '';
        // return this.http.delete(this.serverAddress + post.messageId + token)
        //     .map((response: Response) => response.json())
        //     .catch((error: Response) => {
        //         this.errorService.handleError(error.json());
        //         return Observable.throw(error.json());
        //     });
    }
}
