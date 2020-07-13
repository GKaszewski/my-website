import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/ApiService.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})
export class BlogEditorComponent implements OnInit, OnDestroy {
  data : Post = new Post();
  category : string = "LIFE";
  categories : string[] = ["LIFE", "TECHNOLOGY", "TUTORIAL"];
  sub : Subscription;
  
  constructor(private apiService : ApiService, private title : Title, public auth : AuthService) { }

  ngOnDestroy(): void {
    if(this.sub != null) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.title.setTitle('Blog Editor');
  }

  createSlug(name) : string {
    return name.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  }

  onSelection(option : string) {
    this.data.category = option;
  }

  publishPost() {
    this.data.slug = this.createSlug(this.data.title);
    this.data.status = 1;
    this.sub = this.apiService.postPost(JSON.stringify(this.data)).subscribe();
  }

  saveDraft() {
    this.data.slug = this.createSlug(this.data.title);
    this.data.status = 0;
    this.sub = this.apiService.postPost(JSON.stringify(this.data)).subscribe();
  }

}
