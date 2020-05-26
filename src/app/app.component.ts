import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplosCore';
  @ViewChild ('inputNombre', {static: true}) inputNombre: ElementRef;

  constructor(){
    console.log(this.inputNombre);
    
  }

}
