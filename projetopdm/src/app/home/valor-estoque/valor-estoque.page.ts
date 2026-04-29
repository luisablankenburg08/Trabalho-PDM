import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-valor-estoque',
  templateUrl: './valor-estoque.page.html',
  styleUrls: ['./valor-estoque.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class ValorEstoquePage implements OnInit {

  totalEstoque: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.totalEstoque = this.dataService.calcularTotalEstoque();
  }

  voltar() {
    window.location.href = '/home';
  }

  formatarPreco(preco: number): string {
    return "R$ " + preco.toFixed(2);
  }

}
