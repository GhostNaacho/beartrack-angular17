import { Component, OnInit } from '@angular/core';
import {nav} from './../../../data/index'; 

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  ngOnInit()
  {
    this.loadNav()
  }

  navbarList: any[] = [];
  
  navbarOpen: boolean = false;

  public toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  loadNav()
  {
    this.navbarList = nav;
  }
}
