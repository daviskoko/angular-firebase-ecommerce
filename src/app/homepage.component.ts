import { Component, OnInit } from '@angular/core';

import { Item } from "./items";

@Component({
  selector: 'apfem-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  delay: number = 5000;
  loop: boolean = false;
  items: Item[] = [];
  slides: Array<any> = [
    {link: '#', color: 'grey'},
    {link: '#', color: 'purple'},
    {link: '#', color: 'yellow'},
    {link: '#', color: 'orange'}
  ];

  constructor(
  ) { }

  ngOnInit() {
  }

}
