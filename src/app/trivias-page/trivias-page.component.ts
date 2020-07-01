import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/ApiService.service';
import { Subscription } from 'rxjs';
import { Trivia } from '../models/trivia.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-trivias-page',
  templateUrl: './trivias-page.component.html',
  styleUrls: ['./trivias-page.component.scss']
})
export class TriviasPageComponent implements OnInit, OnDestroy {
  sub : Subscription;
  trivias : Trivia[];
  constructor(private apiService : ApiService, private title : Title, private meta : Meta) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.title.setTitle('Gabriel Kaszewski - Trivias');
    this.meta.updateTag({name: 'description', content: 'Random trivias about everything.'});
    this.sub = this.apiService.getTrivias().subscribe(res => {
      this.trivias = res;
    })
  }

}
