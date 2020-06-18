import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ApiService } from '../services/ApiService.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  posts : Post[] = [];
  
  constructor(private apiService : ApiService, private router : Router, private title : Title) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(res => {
      console.log(res);
      res.forEach(data => {
        let post = new Post;
        post.author = data.author.username;
        post.content = data.content;
        post.created_on = data.created_on;
        post.slug = data.slug;
        post.title = data.title;
        post.id = data.id;
        post.status = data.status;
        this.posts.push(post);
      });
    });
    console.log(this.posts);
    this.title.setTitle('Gabriel Kaszewski - Blog');
  }

  goToPost(slug) {
    this.router.navigate(['/blog/posts', slug]);
  }

}
