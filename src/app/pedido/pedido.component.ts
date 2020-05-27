import { Component, OnInit, Output } from '@angular/core';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.pedido.pedidoDetalle.push({
      cantidad: 20,
      producto: "Agua mineral",
      precio: 80,
      total: 1600
    })
  }

  elHijoEliminoAlgo(event){
    console.log(event);
    
  }
}
