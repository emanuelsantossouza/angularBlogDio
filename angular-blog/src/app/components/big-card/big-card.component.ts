import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDate: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  Id: string = "0";

  constructor(private router: Router) {
    this.photoCover = '';
    this.cardDate = ''
    this.cardTitle = 'Ekasplarasi design untuk melamar pekerjaan UI Designer',
    this.cardDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam dolor felis, id cursus ipsum tempus nec. Vivamus odio sapien, congue non nunc non, scelerisque cursus massa.Ut luctus, nisl id finibus facilisis, ante velit vulputate lorem, eget posuere lorem ipsum quis dui.Nunc elementum aliquam viverra.Vestibulum ex nulla, accumsan sit amet risus sit amet, euismod efficitur nunc rutrum.'
  }
  linkClick() {
    this.router.navigateByUrl('/home')
  }


}
