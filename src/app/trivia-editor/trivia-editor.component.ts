import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Trivia } from '../models/trivia.model';
import { ApiService } from '../services/ApiService.service';

@Component({
  selector: 'app-trivia-editor',
  templateUrl: './trivia-editor.component.html',
  styleUrls: ['./trivia-editor.component.scss']
})
export class TriviaEditorComponent implements OnDestroy {
  data : Trivia = new Trivia();
  sub : Subscription;
  @Output() addEvent = new EventEmitter(); 

  constructor(private apiService : ApiService) { }

  ngOnDestroy(): void {
    if(this.sub != null)
      this.sub.unsubscribe();
  }

  createSlug(name) : string {
    return name.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  }
  

  async addNewTrivia() {
    this.data.slug = this.createSlug(this.data.name);
    this.sub = this.apiService.postTrivia(this.data).subscribe(res => {
    });
    this.addEvent.emit(null);
  }
}
