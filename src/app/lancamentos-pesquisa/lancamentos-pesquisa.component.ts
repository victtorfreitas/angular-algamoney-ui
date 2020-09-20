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
        tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 6, 30),
        dataPagamento:  new Date(2017, 7, 1), valor: 4.55, pessoa: 'Padaria do José'
      }, {
        tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento:  new Date(2017, 6, 10),
        dataPagamento:  new Date(2017, 6, 9), valor: 80000, pessoa: 'Atacado Brasil'
      }, {
        tipo: 'DESPESA', descricao: 'Compra de livro', dataVencimento:  new Date(2017, 6, 31),
        dataPagamento: new Date(2017, 6, 19), valor: 14.55, pessoa: 'Livraria do João'
      }, {
        tipo: 'RECEITA', descricao: 'Venda de cadernos', dataVencimento:  new Date(2017, 7, 10),
        dataPagamento:  new Date(2017, 7, 9), valor: 50.45, pessoa: 'Livraria Brasil'
      }, {
        tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento:  new Date(2017, 8, 5),
        dataPagamento: '04/08/207', valor: 45000.00, pessoa: 'Honda'
      }, {
        tipo: 'DESPESA', descricao: 'Compra de carro', dataVencimento:  new Date(2017, 8, 8),
        dataPagamento:  new Date(2017, 8, 8), valor: 55000.00, pessoa: 'Ford'
      },
    ];
  }

}
