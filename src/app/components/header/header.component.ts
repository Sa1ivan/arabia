import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  public scrollToContact() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
