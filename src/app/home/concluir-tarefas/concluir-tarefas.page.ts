import { Component} from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa} from '../desafio';

@Component({
  selector: 'app-concluir-tarefas',
  templateUrl: './concluir-tarefas.page.html',
  styleUrls: ['./concluir-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox, CommonModule, FormsModule]
})
export class ConcluirTarefasPage {
tarefas: Tarefa[] =JSON.parse(localStorage.getItem('tarefas') || '[]');

  concluirTarefa(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;

    sessionStorage.setItem('tarefas', JSON.stringify(this.tarefas));   
    }
  }

  voltar() {
    window.location.href = '/home';
  }

}
