import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { TableComponent } from './table/table.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { CalendarModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    TableComponent,
    ContactComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    routes,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
