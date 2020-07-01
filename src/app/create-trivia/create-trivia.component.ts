import { Component, OnInit, OnDestroy } from '@angular/core';
import { Trivia } from '../models/trivia.model';
import { ApiService } from '../services/ApiService.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-trivia',
  templateUrl: './create-trivia.component.html',
  styleUrls: ['./create-trivia.component.scss']
})
export class CreateTriviaComponent implements OnDestroy {
  data : Trivia = new Trivia();
  sub : Subscription;

  constructor(private apiService : ApiService, public auth : AuthService) { }

  ngOnDestroy(): void {
    if(this.sub != null)
      this.sub.unsubscribe();
  }

  addNewTrivia() {
    this.data.slug = this.data.name.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    console.log(this.data.slug);
    this.sub = this.apiService.postTrivia(this.data).subscribe(res => {
      console.log(res);
    });
  }
}
