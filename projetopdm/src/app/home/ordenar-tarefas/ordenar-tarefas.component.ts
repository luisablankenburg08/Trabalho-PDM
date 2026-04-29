import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService, Tarefa } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-ordenar-tarefas',
  templateUrl: './ordenar-tarefas.component.html',
  styleUrls: ['./ordenar-tarefas.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class OrdenarTarefasComponent implements OnInit {

  tarefasOrdenadas: Tarefa[] = [];
  mostraResultado: boolean = false;

  constructor(
    private dataService: DataService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  ordenarPorPrioridade() {
    this.tarefasOrdenadas = this.dataService.ordenarTarefasPorPrioridade();
    this.mostraResultado = true;
  }

  voltar() {
    this.navigationService.goHome();
  }

}
