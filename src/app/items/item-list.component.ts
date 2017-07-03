import { Component, OnInit } from '@angular/core';

import { ItemService, Item } from "./index";

@Component({
  selector: 'apfem-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  loading: boolean = false;
  items: Item[] = [];

  constructor(
    private itemService: ItemService
  ) { }

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
