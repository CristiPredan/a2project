import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { TableComponent } from './table/table.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'table', component: TableComponent },
  { path: 'contact', component: ContactComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
