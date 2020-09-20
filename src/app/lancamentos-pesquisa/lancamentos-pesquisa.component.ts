import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  private lancamentos: any;

  constructor() { }

  ngOnInit() {
    this.lancamentos = [
      {
        tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
        dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
      }, {
        tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
        dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil'
      }, {
        tipo: 'DESPESA', descricao: 'Compra de livro', dataVencimento: '31/06/2017',
        dataPagamento: '19/06/2017', valor: 14.55, pessoa: 'Livraria do João'
      }, {
        tipo: 'RECEITA', descricao: 'Venda de cadernos', dataVencimento: '10/07/2017',
        dataPagamento: '09/07/2017', valor: 50.45, pessoa: 'Livraria Brasil'
      }, {
        tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: '05/08/2017',
        dataPagamento: '04/08/207', valor: 45000.00, pessoa: 'Honda'
      }, {
        tipo: 'DESPESA', descricao: 'Compra de carro', dataVencimento: '08/08/2017',
        dataPagamento: '08/08/2017', valor: 55000.00, pessoa: 'Ford'
      },
    ];
  }

}
