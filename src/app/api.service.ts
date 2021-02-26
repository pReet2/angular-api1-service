import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Posts } from "/posts";

@Injectable()
export class ApiService {
  readonly api_url = "https://jsonplaceholder.typicode.com/todos/1";
  posts: any;
  newPost: any;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.api_url + "/posts");
  }

  deletePost() {
    this.newPost = this.http.delete(this.api_url + "/posts");
  }

  post(posto: Posts): Observable<any> {
    return this.http.post(this.api_url, posto);
  }

  put(posto: Posts): Observable<any> {
    return this.http.put(this.api_url, posto);
  }

  patch(posto: Posts): Observable<any> {
    return this.http.patch(this.api_url, posto);
  }

  delete(): Observable<any> {
    return this.http.delete(this.api_url);
  }
}
