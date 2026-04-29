
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DesafioComponent } from './desafio';
import { NavigationService, ViewType } from '../services/navigation.service';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { ValorEstoqueComponent } from './valor-estoque/valor-estoque.component';
import { FiltrarTarefasComponent } from './filtrar-tarefas/filtrar-tarefas.component';
import { ContagemPrioridadeComponent } from './contagem-prioridade/contagem-prioridade.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ConcluirTarefasComponent } from './concluir-tarefas/concluir-tarefas.component';
import { OrdenarTarefasComponent } from './ordenar-tarefas/ordenar-tarefas.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    DesafioComponent,
    ListarProdutosComponent,
    ListarTarefasComponent,
    ValorEstoqueComponent,
    FiltrarTarefasComponent,
    ContagemPrioridadeComponent,
    CadastrarProdutosComponent,
    ConcluirTarefasComponent,
    OrdenarTarefasComponent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ],
})
export class HomePage implements OnInit {
  currentView: ViewType = 'home';

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.currentView$.subscribe(view => {
      this.currentView = view;
    });
  }

  isViewActive(view: ViewType): boolean {
    return this.currentView === view;
  }
}

