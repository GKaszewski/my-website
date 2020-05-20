import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models/photo.model';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-photo-detail-page',
  templateUrl: './photo-detail-page.component.html',
  styleUrls: ['./photo-detail-page.component.scss']
})
export class PhotoDetailPageComponent implements OnInit {
  @Input() photo : Photo;

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  showOnFullscreen() {
    const dialogRef = this.dialog.open(ImageDialogComponent, {data: {data : this.photo.imageUrl}});
  }

}
