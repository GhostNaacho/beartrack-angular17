import { Component, Input, OnInit } from '@angular/core';
//import {Iprices} from './../../../interfaces/Iprices/Iprices';
import {pricing} from  './../../../data/index'

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})
export class PricesComponent implements OnInit {

  @Input() cardList! : any[];

  ngOnInit(): void {
    this.loadCardList();
    console.log("PricesComponent Works");
  }

  loadCardList()
  {
    this.cardList! = []
    this.cardList! = pricing.cards
  }


}
