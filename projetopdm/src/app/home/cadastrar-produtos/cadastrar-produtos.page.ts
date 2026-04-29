import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Produto } from '../../services/data.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.page.html',
  styleUrls: ['./cadastrar-produtos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, CommonModule, FormsModule]
})
export class CadastrarProdutosPage implements OnInit {

  novoProduto: Produto = { id: 0, nome: '', preco: 0, estoque: 0 };
  mensagem: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  cadastrar() {
    if (this.novoProduto.nome && this.novoProduto.preco > 0 && this.novoProduto.estoque >= 0) {
      this.novoProduto.id = Date.now();
      this.dataService.cadastrarProduto(this.novoProduto);
      this.mensagem = `Produto "${this.novoProduto.nome}" cadastrado com sucesso!`;
      this.novoProduto = { id: 0, nome: '', preco: 0, estoque: 0 };
      setTimeout(() => this.mensagem = '', 3000);
    } else {
      this.mensagem = 'Preencha todos os campos corretamente!';
    }
  }

  voltar() {
    window.location.href = '/home';
  }

  formatarPreco(preco: number): string {
    return "R$ " + preco.toFixed(2);
  }

}
