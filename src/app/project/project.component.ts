import { Component, Input, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() title : string;
  @Input() technology : string;
  @Input() desc : string;
  @Input() imgUrl : string;
  @Input() longDescription : string;
  @Input() githubUrl : string;
  @Input() downloadUrl : string;
  @Input() visitUrl : string;
  @Input() github : boolean = false;
  @Input() download : boolean = false;
  @Input() visit : boolean = false;

  constructor(public dialog : MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(ProjectModalComponent, { data: {title : this.title, tech : this.technology, 
      desc : this.desc, imgUrl : this.imgUrl, 
      longDesc : this.longDescription, github:this.github, download:this.download, visit:this.visit,
      githubUrl:this.githubUrl, downloadUrl:this.downloadUrl, visitUrl:this.visitUrl}});
  }
}
