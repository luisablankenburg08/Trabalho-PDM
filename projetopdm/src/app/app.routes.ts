import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'listarprodutos',
    loadComponent: () => import('./home/listarprodutos/listarprodutos.page').then(m => m.ListarprodutosPage)
  },
  {
    path: 'valor-estoque',
    loadComponent: () => import('./home/valor-estoque/valor-estoque.page').then(m => m.ValorEstoquePage)
  },
  {
    path: 'listar-tarefas',
    loadComponent: () => import('./home/listar-tarefas/listar-tarefas.page').then(m => m.ListarTarefasPage)
  },
  {
    path: 'filtrar-tarefas',
    loadComponent: () => import('./home/filtrar-tarefas/filtrar-tarefas.page').then(m => m.FiltrarTarefasPage)
  },
  {
    path: 'contagem-prioridade',
    loadComponent: () => import('./home/contagem-prioridade/contagem-prioridade.page').then(m => m.ContagemPrioridadePage)
  },
  {
    path: 'cadastrar-produtos',
    loadComponent: () => import('./home/cadastrar-produtos/cadastrar-produtos.page').then(m => m.CadastrarProdutosPage)
  },
  {
    path: 'concluir-tarefas',
    loadComponent: () => import('./home/concluir-tarefas/concluir-tarefas.page').then(m => m.ConcluirTarefasPage)
  },
  {
    path: 'ordenar-tarefas',
    loadComponent: () => import('./home/ordenar-tarefas/ordenar-tarefas.page').then(m => m.OrdenarTarefasPage)
  },
];
