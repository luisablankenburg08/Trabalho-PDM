import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService, Tarefa } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(
    private dataService: DataService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.tarefas = this.dataService.getTarefas();
  }

  voltar() {
    this.navigationService.goHome();
  }

}
