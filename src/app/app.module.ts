import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/components/table/table';
import {ButtonModule} from 'primeng/button';
import {CalendarModule, DropdownModule, InputTextareaModule, SelectButtonModule, TooltipModule} from 'primeng/primeng';
import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {LancamentosCadastroComponent} from './lancamentos-cadastro/lancamentos-cadastro.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentosCadastroComponent,
    PessoasCadastroComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
