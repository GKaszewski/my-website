import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Trivia } from '../models/trivia.model';
import { ApiService } from '../services/ApiService.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Title, Meta } from '@angular/platform-browser';
import { TriviaEditorComponent } from '../trivia-editor/trivia-editor.component';
@Component({
  selector: 'app-create-trivia',
  templateUrl: './create-trivia.component.html',
  styleUrls: ['./create-trivia.component.scss'],
})
export class CreateTriviaComponent implements OnInit, OnDestroy {
  data : Trivia = new Trivia();
  sub : Subscription;
  jsonFile : File;
  triviaPanels = [];
  triviasToAdd : Trivia[] = [];
  uploadedTrivias : boolean = false;

  constructor(private apiService : ApiService, public auth : AuthService, private title : Title, private meta : Meta) { }
  
  ngOnInit(): void {
    this.title.setTitle('Gabriel Kaszewski - Add trivia');
    this.meta.updateTag({name: 'description', content: 'Add new trivia.'});
  }

  ngOnDestroy(): void {
    if(this.sub != null)
      this.sub.unsubscribe();
  }

  createSlug(name) : string {
    return name.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  }

  addNewTriviaPanel() {
    this.triviaPanels.length++;
  }

  removeTriviaPanel() {
    this.triviaPanels.length--;
  }

  async readFile(file){
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
  
      reader.onload = () => {
        resolve(reader.result);
      };
  
      reader.onerror = reject;
  
      reader.readAsText(file, "UTF-8");
    });
  }

  async onFileChange(event) {
    this.jsonFile = event.target.files[0];
    let data = await this.readFile(this.jsonFile);
    this.triviasToAdd = JSON.parse(data as string);
    this.triviasToAdd.forEach((e)=>{
      e.slug = this.createSlug(e.name);
    });

    if(this.triviasToAdd.length > 0) this.uploadedTrivias = true;
    else this.uploadedTrivias = false;
  }

  addMultipleTrivias() {
    this.sub = this.apiService.postTrivias(this.triviasToAdd).subscribe((res) => {});
    this.triviasToAdd = [];
    this.jsonFile = null;
    this.uploadedTrivias = false;
  }
}
