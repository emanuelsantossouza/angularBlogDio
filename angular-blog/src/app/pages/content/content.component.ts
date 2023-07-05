import { dataFake } from './../../data/dataFake/dataFake';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  cardTitle: string = '';
  cardDescription: string = '';

  componentId!: number;

  constructor(private router:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => {
      console.log(value.get('id'));
      this.componentId = parseInt(value.get('id')!);

      this.setValuesToComponent(this.componentId);
    });

  }

  setValuesToComponent(id: number) {
    const results = dataFake.filter(article => article.id === id)[0];
    console.log(results);

    this.cardDescription = results.description;
    this.cardTitle = results.title;
    this.photoCover = results.photo;
  }
}
