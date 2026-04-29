import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService, Tarefa } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-filtrar-tarefas',
  templateUrl: './filtrar-tarefas.component.html',
  styleUrls: ['./filtrar-tarefas.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class FiltrarTarefasComponent implements OnInit {

  tarefasFiltradas: Tarefa[] = [];
  mostrarFiltro: boolean = true;

  constructor(
    private dataService: DataService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  filtrarTarefas(concluida: boolean) {
    this.tarefasFiltradas = this.dataService.filtrarTarefas(concluida);
    this.mostrarFiltro = false;
  }

  voltar() {
    this.navigationService.goHome();
  }

}
