import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project.model';
import { ApiService } from '../services/ApiService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, OnDestroy {
  projects : Project[];
  sub : Subscription;

  constructor(private title : Title, private api : ApiService) { }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.api.getProjects().subscribe((res) =>  {
      this.projects = res;
      for (let i = 0; i < this.projects.length; i++) {
        let project = this.projects[i];
        let data = res[i];
        project.thumbnailUrl = data.thumbnailUrl;
      }
    });
    this.title.setTitle('Gabriel Kaszewski - Projects');
  }

}
