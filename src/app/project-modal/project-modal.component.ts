import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  goToPage(link : string) {
    window.open(link);
  }
}
