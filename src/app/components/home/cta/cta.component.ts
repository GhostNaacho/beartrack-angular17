import { Component } from '@angular/core';
import { cta } from '../../../data';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {

  cta : any = cta;

}
