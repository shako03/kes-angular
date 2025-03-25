import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'home works!!';
  color: string = 'white'; // Default color
  linkstyle: string = 'black';
  linkstyle1: string = 'white';
  ProductName = 'National Team'
  productDescription = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, recusandae.'

  img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3yHLC8oAYGD8_CSXbE09c2i8e4NFgQC_SGQxCZB1oCwesphbUkvtdFkyBJXbjhnlRBiejAQrOgI8jdkGEQNAEUQFxL_r8xkVxftwSA'
  img2 = 'https://cdn.1tv.ge/app/uploads/2024/10/1728470356-Khvicha-Kvaratskhelia_FIFA-1024x576.jpg'
  img3 = 'https://www.worldsport.ge/img/articles/i_f2c6b1a32ab097ef9f647b3146bb390d_1640266745435843_0.jpg'

  ColMode() {
    this.color = this.color === this.linkstyle ? this.linkstyle1 : this.linkstyle;
  }
}

