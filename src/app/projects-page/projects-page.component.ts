import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Project } from '../models/project.model';
import { ApiService } from '../services/ApiService.service';
import { Subscription } from 'rxjs';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, OnDestroy {
  allProjects: Project[] = [];
  webProjects: Project[] = [];
  gameProjects: Project[] = [];
  mobileProjects: Project[] = [];
  desktopProjects: Project[] = [];

  currentlyDisplayedProjects: Project[] = [];
  currentCategory : string = "";

  sub: Subscription;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private title: Title, private api: ApiService, private meta: Meta) { }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  changeDisplayedProjects(mode: string) {
    switch (mode) {
      case "All":
        this.currentlyDisplayedProjects = this.allProjects;
        this.currentCategory = "";
        break;
      case "Games":
        this.currentlyDisplayedProjects = this.gameProjects;
        this.currentCategory = "Games";
        break;
      case "Web":
        this.currentlyDisplayedProjects = this.webProjects;
        this.currentCategory = "Web";
        break;
      case "Desktop":
        this.currentlyDisplayedProjects = this.desktopProjects;
        this.currentCategory = "Desktop";
        break;
      case "Mobile":
        this.currentlyDisplayedProjects = this.mobileProjects;
        this.currentCategory = "Mobile";
        break;
    }
  }

  ngOnInit(): void {
    this.sub = this.api.getProjects().subscribe((res) => {
      this.allProjects = res;
      this.currentlyDisplayedProjects = this.allProjects;
      for (let i = 0; i < this.allProjects.length; i++) {
        let project = this.allProjects[i];
        let data = res[i];
        project.category = data.category;
        project.thumbnailUrl = data.thumbnailUrl;
        this.addToCollection(data, project);
      }
    });
    this.title.setTitle('Gabriel Kaszewski - Projects');
    this.meta.updateTag({ name: 'description', content: 'My projects' });
  }

  private addToCollection(data: any, project: Project) {
    switch (data.category) {
      case "Web":
        this.webProjects.push(project);
        break;
      case "Game":
        this.gameProjects.push(project);
        break;
      case "Desktop":
        this.desktopProjects.push(project);
        break;
      case "Mobile":
        this.mobileProjects.push(project);
        break;
    }
  }
}
