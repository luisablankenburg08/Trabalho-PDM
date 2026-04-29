import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Tarefa } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-concluir-tarefas',
  templateUrl: './concluir-tarefas.component.html',
  styleUrls: ['./concluir-tarefas.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox, CommonModule, FormsModule]
})
export class ConcluirTarefasComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(
    private dataService: DataService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.tarefas = this.dataService.getTarefas();
  }

  concluirTarefa(id: number) {
    this.dataService.concluirTarefa(id);
  }

  voltar() {
    this.navigationService.goHome();
  }

}
