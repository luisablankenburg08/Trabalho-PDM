import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import {Tarefa} from '../desafio';


@Component({
  selector: 'app-ordenar-tarefas',
  templateUrl: './ordenar-tarefas.page.html',
  styleUrls: ['./ordenar-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class OrdenarTarefasPage {
tarefas: Tarefa[] =JSON.parse(sessionStorage.getItem('tarefas') || '[]');
  ngOnInit() {
    const altas = this.tarefas.filter(t => t.prioridade === "alta");
    const medias = this.tarefas.filter(t => t.prioridade === "media");
    const baixas = this.tarefas.filter(t => t.prioridade === "baixa");
    this.tarefas = altas.concat(medias, baixas);
  }


  voltar() {
    window.location.href = '/home';
  }

}


