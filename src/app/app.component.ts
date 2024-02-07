import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  title = '14feb';


  risposta: string = ""

  saidNo() {
    this.risposta = "N"
  }
  
  saidYes() {
    this.risposta = "Y"
  }

  saidSi() {
    this.risposta = "S"
  }

  saidPronta() {
    this.risposta = "S1"
  }

  saidS2() {
    this.risposta = "S2"
  }

  saidOk() {
    this.risposta = "ok"
  }
  
}
