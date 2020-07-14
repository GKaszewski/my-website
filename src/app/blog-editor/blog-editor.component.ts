import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/ApiService.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

enum EditorMode {
  CREATE_NEW,
  MODIFY_EXISTING
}

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})

export class BlogEditorComponent implements OnInit, OnDestroy {
  data : Post = new Post();
  category : string = "LIFE";
  categories : string[] = ["LIFE", "TECHNOLOGY", "TUTORIAL"];
  publishSub : Subscription;
  draftsSub : Subscription;
  openedDraftTab : boolean = false;
  mode : EditorMode;

  drafts : Post[] = [];
  
  constructor(private apiService : ApiService, private title : Title, public auth : AuthService) { }

  ngOnDestroy(): void {
    if(this.publishSub != null) this.publishSub.unsubscribe();
    if(this.draftsSub != null) this.draftsSub.unsubscribe();
  }

  ngOnInit(): void {
    this.mode = EditorMode.CREATE_NEW;
    this.title.setTitle('Blog Editor');
    this.getDrafts();
  }

  createSlug(name) : string {
    return name.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  }

  onSelection(option : string) {
    this.data.category = option;
  }

  publishPost() {
    switch(this.mode) {
      case EditorMode.CREATE_NEW:
        this.createPost(1);
        break;
      case EditorMode.MODIFY_EXISTING:
        this.modifyPost(1);
        break;
    }
  }

  saveDraft() {
    switch(this.mode) {
      case EditorMode.CREATE_NEW:
        this.createPost(0);
        break;
      case EditorMode.MODIFY_EXISTING:
        this.modifyPost(0);
        break;
    }
  }

  private createPost(status : number) {
    this.data.slug = this.createSlug(this.data.title);
    this.data.status = status;
    this.publishSub = this.apiService.postPost(JSON.stringify(this.data)).subscribe(res => {
      this.displayResponseStatus('Success!');
    });
  }

  private modifyPost(status : number) {
    this.data.slug = this.createSlug(this.data.title);
    this.data.status = status;
    this.publishSub = this.apiService.updatePost(this.data.slug, JSON.stringify(this.data)).subscribe(res => {
      this.displayResponseStatus('Success!');
    });
  }

  displayResponseStatus(message : string) {
    alert(message);
  }

  getDrafts() {
    this.draftsSub = this.apiService.getDrafts().subscribe(data => {
      this.drafts = data;
    });
  }

  selectDraft(selected : Post) {
    this.data = selected;
    this.mode = EditorMode.MODIFY_EXISTING;
  }

  createNew() {
    this.data = new Post();
    this.mode = EditorMode.CREATE_NEW;
  }

}
