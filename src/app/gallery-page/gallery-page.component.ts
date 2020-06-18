import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/ApiService.service';
import { Photo } from '../models/photo.model';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit, OnDestroy {
  photos : Photo[] = [];
  sub : Subscription;
  constructor(private apiService : ApiService, private title : Title) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.apiService.getPhotos().subscribe(res => {
      res.forEach(photo => {
        this.photos.push(photo);
      });
      this.photos = res;
    });
    this.title.setTitle('Gabriel Kaszewski - Gallery');
  }

}
