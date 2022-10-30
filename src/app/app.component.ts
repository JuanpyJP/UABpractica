import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensaje="No hay saldo"
  visualizaDiv = false;
  visualiza(){
    this.visualizaDiv = !this.visualizaDiv;
  }
}
