import { Component } from '@angular/core';
import { HeaderComponent} from "./components/header/header.component";
import { PriceComponent } from "./components/price/price.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    imports: [
        HeaderComponent,
        PriceComponent,
        NgOptimizedImage,
    ],
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
