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
    
    
  }

  mostrar(){
    console.log(this.inputNombre);
    console.log(this.inputNombre.nativeElement.value);
    
    this.inputNombre.nativeElement.style.background = "blue"
  }

}
