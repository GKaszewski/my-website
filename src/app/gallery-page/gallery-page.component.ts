import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/ApiService.service';
import { Photo } from '../models/photo.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  photos : Photo[] = [];
  constructor(private apiService : ApiService, private title : Title) { }

  ngOnInit(): void {
    this.apiService.getPhotos().subscribe(res => {
      res.forEach(photo => {
        console.log(photo.image);
        this.photos.push(photo);
        console.log(photo);
      });
      this.photos = res;
    });
    console.log(this.photos);
    this.title.setTitle('Gabriel Kaszewski - Gallery');
  }

}
