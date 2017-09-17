import { Component, OnInit, Input } from '@angular/core';

import { Item } from './index';

@Component({
  selector: 'apfem-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() selectedItem: number;

  constructor() { }

  ngOnInit() {
  }

}
