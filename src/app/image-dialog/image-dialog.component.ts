import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
  url : string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { this.url = data.data;}
  ngOnInit(): void {
  }

}
