import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apfem-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
