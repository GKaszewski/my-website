import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/ApiService.service';
import { Subscription } from 'rxjs';
import { Trivia } from '../models/trivia.model';

@Component({
  selector: 'app-trivias-page',
  templateUrl: './trivias-page.component.html',
  styleUrls: ['./trivias-page.component.scss']
})
export class TriviasPageComponent implements OnInit, OnDestroy {
  sub : Subscription;
  trivias : Trivia[];
  constructor(private apiService : ApiService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.apiService.getTrivias().subscribe(res => {
      this.trivias = res;
    })
  }

}
