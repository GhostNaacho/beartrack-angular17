import { Component, OnInit } from '@angular/core';

import {AccordionComponent} from './../../shared/accordion/accordion.component';
import { accordion } from './../../../data/index';
import { share } from 'rxjs';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {

  ngOnInit(): void {
    console.log("Faq Component OK");
    this.loadAcordion();
  }
  accordionItems: any[] | undefined;

  loadAcordion()
  {

    this.accordionItems = [];
    this.accordionItems = accordion.faqs;
  }

}
