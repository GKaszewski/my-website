import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/ApiService.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list-element',
  templateUrl: './blog-list-element.component.html',
  styleUrls: ['./blog-list-element.component.scss']
})
export class BlogListElementComponent {
  @Input() post : Post;
}
