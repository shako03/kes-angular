import { Component } from '@angular/core';
import { ButtonComponent } from "./button/button.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-footer',
  imports: [ButtonComponent, SearchComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
textFromParent = 'Hello from parent';
}
