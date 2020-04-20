import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  constructor(private router : Router, private title : Title) {}

  ngOnInit(): void {
    this.title.setTitle("Gabriel Kaszewski - Home");
  }
  
  goToPage(pageName : string):void {
    this.router.navigate([`${pageName}`]);
  }
}
