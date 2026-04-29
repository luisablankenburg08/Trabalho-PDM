import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService, Tarefa } from '../../services/data.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.page.html',
  styleUrls: ['./listar-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class ListarTarefasPage implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tarefas = this.dataService.getTarefas();
  }

  voltar() {
    window.location.href = '/home';
  }

}
