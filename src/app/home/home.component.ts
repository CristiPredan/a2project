import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component'

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'This is Homepage';
  paragraph = 'Use this document as a way to quickly start any new project. All you get is this text and a mostly barebones HTML document.';
  placeholder = "Insert your name";

  private textValue = "initial value";
    private log: string ='';

    private logText(value: string): void {
        this.log += `Mesaj: '${value}'\n`
  }
}
