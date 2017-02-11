import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormComponent } from '../form/form.component'
// import { SplitButtonModule } from './primeng/primeng';
import { CalendarModule } from 'primeng/primeng';

@Component({
  selector: 'app-router',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
