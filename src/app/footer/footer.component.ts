import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-footer',
  imports: [SearchComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  textFromParent = 'See more';
  labelFromParent = 'Email';
  print() {
    console.log('Hello from footer component');
  }
}
