import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { Posts } from "./posts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  data: any;
  objPosts: Posts;
  objPuts: Posts;
  objPatch: Posts;
  message: string;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getPosts().subscribe(result => {
      this.data = result;
    });

    var posto = new Posts();
    posto.id = 24;
    posto.title = "new post";
    posto.body = "this is a new post";

    this.api.put(posto).subscribe(dataa => {
      this.objPuts = dataa;
    });

    posto = new Posts();
    posto.body = "this is a patch method";

    this.api.patch(posto).subscribe(dataa => {
      this.objPatch = dataa;
    });

    this.api.delete(posto).subscribe(dataa => {
      this.message = "delete method called";
    });
  }
}
