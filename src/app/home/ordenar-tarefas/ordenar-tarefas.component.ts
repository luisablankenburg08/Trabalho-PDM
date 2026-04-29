import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ordenar-tarefas',
  templateUrl: './ordenar-tarefas.component.html',
  styleUrls: ['./ordenar-tarefas.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class OrdenarTarefasComponent {
  voltar() {
    window.location.href = '/home';
  }

}
