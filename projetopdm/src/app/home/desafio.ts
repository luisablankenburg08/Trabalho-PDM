import { Component } from "@angular/core";
import { IonButton, IonToolbar, IonContent, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { App } from '@capacitor/app';
import { DataService } from "../services/data.service";
import { NavigationService } from "../services/navigation.service";

@Component({
  selector: 'app-desafio',
  templateUrl: 'desafio.html',
  styleUrls: ['desafio.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class DesafioComponent {

    constructor(
        private dataService: DataService,
        private navigationService: NavigationService
    ) { }

    // MENU DE INTERAÇÃO
    listarProdutos() {
        this.navigationService.navigateTo('listarprodutos');
    }

    calcularTotalEstoque() {
        this.navigationService.navigateTo('valor-estoque');
    }

    listarTarefas() {
        this.navigationService.navigateTo('listar-tarefas');
    }

    filtrarTarefas() {
        this.navigationService.navigateTo('filtrar-tarefas');
    }

    contagemPorPrioridade() {
        this.navigationService.navigateTo('contagem-prioridade');
    }

    // FUNCIONALIDADES
    cadastrarProdutos() {
        this.navigationService.navigateTo('cadastrar-produtos');
    }

    concluirTarefas() {
        this.navigationService.navigateTo('concluir-tarefas');
    }

    ordenarTarefas() {
        this.navigationService.navigateTo('ordenar-tarefas');
    }

    exitApp() {
        App.exitApp();
        window.close();
    }
}
