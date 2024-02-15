import { Component, OnInit } from '@angular/core';
import {FaqComponent} from './faq/faq.component';
import { PricesComponent } from './prices/prices.component';
import { SectionComponent } from './section/section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { MainfeaturesComponent } from '../shared/mainfeatures/mainfeatures.component';
import { CtaComponent } from './cta/cta.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TestimonialsComponent,FaqComponent, PricesComponent,SectionComponent,MainfeaturesComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  priceCard : any [] | undefined;

  ngOnInit(): void {
    console.log("component works");
  }


}
