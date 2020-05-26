import { Component, ViewChild, ElementRef } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplosCore';
  @ViewChild ('inputNombre', {static: true}) inputNombre: ElementRef;

  @ViewChild (HijoComponent, {static:true}) hijo: HijoComponent;

  constructor(){
    
    
  }

  mostrar(){
    // console.log(this.inputNombre);
    // console.log(this.inputNombre.nativeElement.value);
    
    // this.inputNombre.nativeElement.style.background = "blue"

    this.hijo.titulo = 'Ha sido modificado desde el Padre'
  }

}
