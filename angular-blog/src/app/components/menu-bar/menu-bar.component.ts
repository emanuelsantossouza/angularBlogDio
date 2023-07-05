import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  bottom: string = '';

  isSelecionado() {
    this.bottom = '';
    return 'container__menu-rede-sociais-bottom'
  }
}
