import { Component, OnInit } from '@angular/core';
import { testimonials } from '../../../data';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {

  ngOnInit(): void {
    console.log("app-about-us is working");
    this.loadAboutUs();
  }

   loadAboutUs()
   {
    this.comentList = [];
    this.comentList = testimonials.clients;
    console.log(this.comentList);
   }

   numbersRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  comentList : any[] | undefined;
  
  title : string = "Que dicen nuestros clientes";
}
