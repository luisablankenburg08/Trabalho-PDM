import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel,IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../desafio';


@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.page.html',
  styleUrls: ['./cadastrar-produtos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem, CommonModule, FormsModule]
})
export class CadastrarProdutosPage {
  produtos : Produto[] = JSON.parse(sessionStorage.getItem('produtos') || '[]');

  novoProduto: Produto = { id: 0, nome: '', preco: 0, estoque: 0 };

  cadastrar() {
    if (this.novoProduto.nome && this.novoProduto.preco > 0 && this.novoProduto.estoque > 0) {
      this.novoProduto.id = this.produtos.length + 1;
      this.produtos.push({ ...this.novoProduto });

      sessionStorage.setItem('produtos', JSON.stringify(this.produtos));   
      this.novoProduto = { id: 0, nome: '', preco: 0, estoque: 0 };
    } 
  }

  voltar() {
    window.location.href = '/home';
  }
}
