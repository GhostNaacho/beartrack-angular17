import { Component, OnInit } from '@angular/core';
import { hero } from '../../../data';
@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {

  heroes : any = hero;
  
}
