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
  }
];
