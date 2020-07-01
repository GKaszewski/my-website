import { Component, OnInit, NgModule, ViewChild, Input } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Trivia } from '../models/trivia.model';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() triva : Trivia;
}
