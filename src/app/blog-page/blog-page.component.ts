import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { ApiService } from '../services/ApiService.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, OnDestroy {
  posts : Post[] = [];
  sub : Subscription;

  constructor(private apiService : ApiService, private router : Router, private title : Title) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.apiService.getPosts().subscribe(res => {
      res.forEach(data => {
        let post = new Post;
        post.author = data.author.username;
        post.content = data.content;
        post.created_on = data.created_on;
        post.slug = data.slug;
        post.title = data.title;
        post.id = data.id;
        post.status = data.status;
        post.category = data.category;
        this.posts.push(post);
      });
    });
    this.title.setTitle('Gabriel Kaszewski - Blog');
  }

  goToPost(slug) {
    this.router.navigate(['/blog/posts', slug]);
  }

}
