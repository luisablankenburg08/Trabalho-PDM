import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-contagem-prioridade',
  templateUrl: './contagem-prioridade.component.html',
  styleUrls: ['./contagem-prioridade.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class ContagemPrioridadeComponent implements OnInit {

  contagem: { baixa: number; media: number; alta: number } = { baixa: 0, media: 0, alta: 0 };

  constructor(
    private dataService: DataService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.contagem = this.dataService.contagemPorPrioridade();
  }

  voltar() {
    this.navigationService.goHome();
  }

}
