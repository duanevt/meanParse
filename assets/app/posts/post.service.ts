import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Post } from "./post.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class PostService {
    private posts: Post[] = [];
    postIsEdit = new EventEmitter<Post>();
    // serverAddress = " https://mean-max-angujlar4.herokuapp.com/message/";
    serverAddress = "http://localhost:3000/post/";

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addPost(post: Post) {
        const body = JSON.stringify(post);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this.serverAddress + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const post = new Post(
                    result.obj.content,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.posts.push(post);
                return post;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getPosts() {
        return this.http.get(this.serverAddress)
            .map((response: Response) => {
                console.log("got response for posts get")
                console.log(response)
                const posts = response.json().obj;
                let transformedPosts: Post[] = [];
                for (let post of posts) {
                    transformedPosts.push(new Post(
                        post.fred,
                        post.conquered,
                        post.numComments,
                        post.cccc)
                    );
                }
                this.posts = transformedPosts;
                return transformedPosts;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editPost(post: Post) {
        this.postIsEdit.emit(post);
    }

    updatePost(post: Post) {
        const body = JSON.stringify(post);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(this.serverAddress + post.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deletePost(post: Post) {
        this.posts.splice(this.posts.indexOf(post), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this.serverAddress + post.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}
