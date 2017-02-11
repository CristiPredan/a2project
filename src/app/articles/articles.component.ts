import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-root',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  checkAlert(event){
      alert("Articol");
    }

  modifica(element, element2): void {
  	element.classList.toggle('not-visible');
    element2.style.color='red';
  }

  constructor() { }

  ngOnInit() {
  }

}
