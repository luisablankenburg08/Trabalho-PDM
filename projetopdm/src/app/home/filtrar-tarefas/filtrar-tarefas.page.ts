import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService, Tarefa } from '../../services/data.service';

@Component({
  selector: 'app-filtrar-tarefas',
  templateUrl: './filtrar-tarefas.page.html',
  styleUrls: ['./filtrar-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class FiltrarTarefasPage implements OnInit {

  tarefasFiltradas: Tarefa[] = [];
  mostrarFiltro: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  filtrarTarefas(concluida: boolean) {
    this.tarefasFiltradas = this.dataService.filtrarTarefas(concluida);
    this.mostrarFiltro = false;
  }

  voltar() {
    window.location.href = '/home';
  }

}
