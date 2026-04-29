import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Produto } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, CommonModule, FormsModule]
})
export class CadastrarProdutosComponent implements OnInit {

  novoProduto: Produto = { id: 0, nome: '', preco: 0, estoque: 0 };
  mensagem: string = '';

  constructor(
    private dataService: DataService,
    private navigationService: NavigationService
  ) { }

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
    this.navigationService.goHome();
  }

  formatarPreco(preco: number): string {
    return "R$ " + preco.toFixed(2);
  }

}
