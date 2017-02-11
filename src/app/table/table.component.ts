import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-root',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'Table page';
  constructor() { }

  ngOnInit() {
  }

}
