import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoDetalle } from '../models/pedidoDetalle';


@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.scss']
})
export class PedidoDetalleComponent implements OnInit {

  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>();
  @Output() productoEliminado = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  eliminarProducto(i: number){
    this.productoEliminado.emit({id: i})
    
  }

}
