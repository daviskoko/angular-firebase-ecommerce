import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ItemService, Item } from "./items";

@Component({
  selector: 'apfem-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  delay: number = 5000;
  loop: boolean = false;
  loading: boolean = false;
  items: Item[] = [];
  slides: Array<any> = [
    {link: '#', color: 'grey'},
    {link: '#', color: 'purple'},
    {link: '#', color: 'yellow'},
    {link: '#', color: 'orange'}
  ];

  constructor(
    private itemService: ItemService
  ) { }

  // Simulate a post
  postItems(){
    this.itemService.storeItem().subscribe(
      (data: Response) => console.log(data.statusText)
    )
  }

  getItems(){
    this.loading = true;
    this.itemService.getItems().subscribe(
      data => {
        this.items = data,
        this.loading = false
      }
    );
  }

  ngOnInit() {
    this.getItems();
  }
}
