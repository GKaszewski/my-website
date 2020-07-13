import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { ApiService } from '../services/ApiService.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, OnDestroy {
  posts : Post[] = [];
  searchedPosts : Post[] = [];
  lifePosts : Post[] = [];
  technologyPosts : Post[] = [];
  tutorialPosts : Post[] = [];

  fetchAllPostsSub : Subscription;
  searchPostsSub : Subscription;

  query : string = "";

  currentPosts : Post[] = [];

  constructor(private apiService : ApiService, private router : Router, private title : Title, private meta : Meta, public auth : AuthService) { }

  ngOnDestroy(): void {
    this.fetchAllPostsSub.unsubscribe();
    this.searchPostsSub.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchAllPostsSub = this.apiService.getPosts().subscribe(res => {
      this.posts = res;
      this.currentPosts = this.posts;
      for(let i = 0; i < this.posts.length; i++) {
        let post : Post = this.posts[i];
        this.addToCollection(post.category, post);
      }
    });
    this.title.setTitle('Gabriel Kaszewski - Blog');
    this.meta.updateTag({name: 'description', content: 'Blog about programming and my life style.'});
  }

  private addToCollection(category : string, post: Post) {
    switch (category) {
      case "LIFE":
        this.lifePosts.push(post);
        break;
      case "TECHNOLOGY":
        this.technologyPosts.push(post);
        break;
      case "TUTORIAL":
        this.tutorialPosts.push(post);
        break;
    }
  }

  changeDisplayedPosts(mode: string) {
    switch (mode) {
      case "All":
        this.currentPosts = this.posts;
        break;
      case "Life":
        this.currentPosts = this.lifePosts;
        break;
      case "Technology":
        this.currentPosts = this.technologyPosts;
        break;
      case "Tutorial":
        this.currentPosts = this.tutorialPosts;
        break;
    }
  }

  goToPost(slug) {
    this.router.navigate(['/blog/posts', slug]);
  }

  search() {
    this.searchPostsSub = this.apiService.getPostsByQuery(this.query).subscribe(res => {
      this.searchedPosts = res;
      this.currentPosts = this.searchedPosts;
    });
  }

}
