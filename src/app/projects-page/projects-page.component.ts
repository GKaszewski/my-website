import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project.model';
import { ApiService } from '../services/ApiService.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projects : Project[];
  constructor(private title : Title, private api : ApiService) { }

  ngOnInit(): void {
    this.title.setTitle('Gabriel Kaszewski - Projects');
    this.title.setTitle("Gabriel Kaszewski - Home");
    this.api.getProjects().subscribe((res) =>  {
      this.projects = res;
      console.log(res);
      console.log(this.projects[0]);
    });
    this.title.setTitle('Gabriel Kaszewski - Projects');
  }

}
