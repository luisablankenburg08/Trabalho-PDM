import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { DataService, Produto } from '../../services/data.service';

@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.page.html',
  styleUrls: ['./listarprodutos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class ListarprodutosPage implements OnInit {

  produtos: Produto[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.produtos = this.dataService.getProdutos();
  }

  voltar() {
    window.location.href = '/home' 
  }

  formatarPreco(preco: number): string {
    return "R$ " + preco.toFixed(2);
  }


}
