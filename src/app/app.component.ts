import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { PriceComponent } from "./components/price/price.component";
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from "./components/contact/contact.component";
import { MatDialogModule, MatDialog } from "@angular/material/dialog";
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
    imports: [
        HeaderComponent,
        PriceComponent,
        ReviewComponent,
        ContactComponent,
        MatDialogModule,
        ModalComponent
    ],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private dialog: MatDialog
  ) {}

  public open() {
   this.dialog.open(ModalComponent, {
    width: '85%',
   });
  }
}
