import { Component ,OnInit} from '@angular/core';
import { features } from './../../../data/index';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainfeatures',
  standalone: true,
  imports: [],
  templateUrl: './mainfeatures.component.html',
  styleUrl: './mainfeatures.component.scss'
})
export class MainfeaturesComponent {

  title : string = features.title;
  subTitle : string = features.subtitle;
  selectedMenu : number = 0;

  items : any[] = features.items;


  activeItem: string = features.items[0].title;

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  handleMenuClick(item:any)
  {
    this.selectedMenu = item.id;
    this.activeItem = item.title;

  }
}
