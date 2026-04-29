import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contagem-prioridade',
  templateUrl: './contagem-prioridade.page.html',
  styleUrls: ['./contagem-prioridade.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class ContagemPrioridadePage implements OnInit {

  contagem: { baixa: number; media: number; alta: number } = { baixa: 0, media: 0, alta: 0 };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.contagem = this.dataService.contagemPorPrioridade();
  }

  voltar() {
    window.location.href = '/home';
  }

}
