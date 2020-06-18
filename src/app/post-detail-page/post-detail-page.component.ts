import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { ApiService } from '../services/ApiService.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.scss']
})
export class PostDetailPageComponent implements OnInit, OnDestroy {
  post : Post = new Post;
  slug : string;
  sub : Subscription;
  otherSub : Subscription;
  constructor(private route : ActivatedRoute, private apiService : ApiService, private title : Title) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.otherSub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];

      this.otherSub = this.apiService.getPost(this.slug).subscribe(res => {
        this.post.author = res.author.username;
        this.post.content = res.content;//.replace(new RegExp('\n', 'g'), "<br />");
        this.post.created_on = res.created_on;
        this.post.slug = res.slug;
        this.post.title = res.title;
        this.post.id = res.id;
        this.post.status = res.status;
        this.title.setTitle(res.title);
      });
    });
  }

}
