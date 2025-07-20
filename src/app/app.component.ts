import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { PriceComponent } from "./components/price/price.component";
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from "./components/contact/contact.component";
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { WordsComponent } from "./components/words/words.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
    imports: [
        HeaderComponent,
        PriceComponent,
        ReviewComponent,
        ContactComponent,
        WordsComponent,
    ],
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly dialog: MatDialog  = inject(MatDialog);

  public open() {
   this.dialog.open(ModalComponent, {
    width: '75%',
   });
  }
}
