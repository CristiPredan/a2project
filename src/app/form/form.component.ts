import { Component, OnInit } from '@angular/core';
// import { FormComponent } from './contact/contact.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private textValue = "initial value";
    private log: string ='';

    private logText(value: string): void {
        this.log += `Mesaj: '${value}'\n`
  }

  constructor() { }

  ngOnInit() {
  }

}
