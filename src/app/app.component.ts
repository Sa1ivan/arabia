import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { PriceComponent } from "./components/price/price.component";
import { ReviewComponent } from './components/review/review.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    imports: [
        HeaderComponent,
        PriceComponent,
        ReviewComponent
    ],
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
