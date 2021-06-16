import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import{ Post } from './post.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  postss = [];
  loadedPosts: Post[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }
  
  onCreatePosts(postData:{title: string;content: string}){
    this.http.post<{name: string}>('https://addposts-394bc.firebaseio.com/posts.json',postData).subscribe(dt =>{
      console.log(dt);
    })
  }

  fetchPosts(){
    this.http
      .get<{[key: string]: Post}>('https://addposts-394bc.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
              this.fetchPosts();
            }
          }
          return postsArray;
        }
        )
      )
      .subscribe(posts => {
       this.loadedPosts = posts;
      });
     }  
    }






