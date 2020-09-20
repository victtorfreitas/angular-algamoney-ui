import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'algamoney-ui';
  lancamentos: any;

  ngOnInit() {
    this.lancamentos = [
      {
        tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
        dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
      },
      {
        tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
        dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil'
      }
    ];
  }
}
