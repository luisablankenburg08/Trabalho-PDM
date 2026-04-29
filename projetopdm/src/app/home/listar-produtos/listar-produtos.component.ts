import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DataService, Produto } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private dataService: DataService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.produtos = this.dataService.getProdutos();
  }

  voltar() {
    this.navigationService.goHome();
  }

}
