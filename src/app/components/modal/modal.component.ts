import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-modal',
  imports: [
    MatIconModule,
    MatDialogContent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

}
