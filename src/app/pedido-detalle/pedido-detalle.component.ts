import { Component, OnInit, Input } from '@angular/core';
import { PedidoDetalle } from '../models/pedidoDetalle';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.scss']
})
export class PedidoDetalleComponent implements OnInit {

  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>();
  constructor() { }

  ngOnInit(): void {
  }

}
