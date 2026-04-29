import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ViewType = 'home' | 'listarprodutos' | 'valor-estoque' | 'listar-tarefas' | 
  'filtrar-tarefas' | 'contagem-prioridade' | 'cadastrar-produtos' | 'concluir-tarefas' | 'ordenar-tarefas';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentViewSubject = new BehaviorSubject<ViewType>('home');
  public currentView$ = this.currentViewSubject.asObservable();

  constructor() {}

  navigateTo(view: ViewType): void {
    this.currentViewSubject.next(view);
  }

  getCurrentView(): ViewType {
    return this.currentViewSubject.value;
  }

  goHome(): void {
    this.navigateTo('home');
  }
}
