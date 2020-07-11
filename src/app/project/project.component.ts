import { Component, Input, } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() data : Project;

  constructor() {}

  goToPage(url : string) {
    window.open(url);
  }
}
