import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private backNav: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.backNav.back();
  }

}
