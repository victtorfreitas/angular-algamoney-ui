import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoas: any;

  constructor() { }

  ngOnInit() {
    this.pessoas = [
      {
        nome: 'Ricardo Oliveira', cidade: 'Palmas', estado: 'TO', status: true
      }, {
        nome: 'Marcos Araújo', cidade: 'Curitiba', estado: 'PR', status: true
      }, {
        nome: 'Luís Souza', cidade: 'São Paulo', estado: 'SP', status: false
      }
    ];
  }

  formataStatus(status: boolean): string {
    return status ? 'Ativo' : 'Inativo';
  }

  formataAcaoStatus(status: boolean): string {
    return status ? 'Desativar' : 'Ativar';
  }
}
