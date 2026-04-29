import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-valor-estoque',
  templateUrl: './valor-estoque.component.html',
  styleUrls: ['./valor-estoque.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class ValorEstoqueComponent implements OnInit {

  totalEstoque: number = 0;

  constructor(
    private dataService: DataService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.totalEstoque = this.dataService.calcularTotalEstoque();
  }

  voltar() {
    this.navigationService.goHome();
  }

  formatarPreco(preco: number): string {
    return "R$ " + preco.toFixed(2);
  }

}
