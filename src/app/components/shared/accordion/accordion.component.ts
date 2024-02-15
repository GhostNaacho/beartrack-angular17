import { Component, Input, OnInit } from '@angular/core';
import {accordion} from './../../../data/index';
 
@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent implements OnInit {
  ngOnInit(): void {
    console.log("app-acordion ok");
  }
  @Input() accordionItems!: any[] | undefined;

  loadAcordion()
  {
    this.accordionItems! = [];
  }

  toggleAccordion(item: any): void {
    item.show = !item.show;
  }
}
