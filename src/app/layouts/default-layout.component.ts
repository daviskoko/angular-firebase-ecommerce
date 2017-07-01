import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'apfem-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
