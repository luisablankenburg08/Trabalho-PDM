import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService, Tarefa } from '../../services/data.service';

@Component({
  selector: 'app-ordenar-tarefas',
  templateUrl: './ordenar-tarefas.page.html',
  styleUrls: ['./ordenar-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class OrdenarTarefasPage implements OnInit {

  tarefasOrdenadas: Tarefa[] = [];
  mostraResultado: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ordenarPorPrioridade() {
    this.tarefasOrdenadas = this.dataService.ordenarTarefasPorPrioridade();
    this.mostraResultado = true;
  }

  voltar() {
    window.location.href = '/home';
  }

}
