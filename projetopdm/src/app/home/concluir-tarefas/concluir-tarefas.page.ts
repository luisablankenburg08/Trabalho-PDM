import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Tarefa } from '../../services/data.service';

@Component({
  selector: 'app-concluir-tarefas',
  templateUrl: './concluir-tarefas.page.html',
  styleUrls: ['./concluir-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox, CommonModule, FormsModule]
})
export class ConcluirTarefasPage implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tarefas = this.dataService.getTarefas();
  }

  concluirTarefa(id: number) {
    this.dataService.concluirTarefa(id);
  }

  voltar() {
    window.location.href = '/home';
  }

}
