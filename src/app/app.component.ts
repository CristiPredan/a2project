import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { TableComponent } from './table/table.component';
import {ButtonModule} from 'primeng/primeng';

import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project';
}
