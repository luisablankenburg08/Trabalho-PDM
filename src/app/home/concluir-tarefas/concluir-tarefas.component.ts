import { Component} from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-concluir-tarefas',
  templateUrl: './concluir-tarefas.component.html',
  styleUrls: ['./concluir-tarefas.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCheckbox, CommonModule]
})
export class ConcluirTarefasComponent{

  voltar() {
    window.location.href = '/home';
  }

}
