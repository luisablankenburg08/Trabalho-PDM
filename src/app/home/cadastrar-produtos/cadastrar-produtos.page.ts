import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel,IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Produto = {
  nome: string;
  preco: number;
  estoque: number;
}

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.page.html',
  styleUrls: ['./cadastrar-produtos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, CommonModule, FormsModule]
})
export class CadastrarProdutosPage {

  novoProduto: Produto = { nome: '', preco: 0, estoque: 0 };

  cadastrar() {
    if (this.novoProduto.nome && this.novoProduto.preco > 0 && this.novoProduto.estoque > 0) {
      this.novoProduto = { nome: '', preco: 0, estoque: 0 };
    } 
  }
  voltar() {
    window.location.href = '/home';
  }
}
