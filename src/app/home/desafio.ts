import { Component } from "@angular/core";
import { IonButton, IonToolbar, IonContent, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { App } from '@capacitor/app';

type Produto = {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
  prioridade: "baixa" | "media" | "alta";
  dataCriacao: Date;
}

@Component({
  selector: 'app-desafio',
  templateUrl: 'desafio.html',
  styleUrls: ['desafio.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class DesafioComponent {

    // Dados
    produtos: Produto[] = [
        { id: 1, nome: "Pão Francês", preco: 9.00, estoque: 20 },
        { id: 2, nome: "Queijo Mussarela", preco: 6.99, estoque: 50 },
        { id: 3, nome: "Tomate", preco: 3.00, estoque: 40 },
        { id: 4, nome: "Feijão", preco: 4.00, estoque: 60 },
        { id: 5, nome: "Sabão Líquido", preco: 20.00, estoque: 15 }
    ];

    tarefas: Tarefa[] = [
        { id: 1, titulo: "Reposição de verduras", concluida: true, prioridade: "alta", dataCriacao: new Date(2025, 5, 5, 15, 0, 0) },
        { id: 2, titulo: "Limpeza dos corredores", concluida: false, prioridade: "media", dataCriacao: new Date(2025, 5, 5, 7, 0, 0) },
        { id: 3, titulo: "Organizar a folha de pagamento", concluida: false, prioridade: "alta", dataCriacao: new Date(2025, 4, 5, 16, 30, 0) },
        { id: 4, titulo: "Averiguar novas mercadorias", concluida: false, prioridade: "media", dataCriacao: new Date(2025, 2, 5, 10, 30, 0) },
        { id: 5, titulo: "Contar o valor do caixa", concluida: true, prioridade: "baixa", dataCriacao: new Date(2025, 4, 3, 14, 0, 0) }
    ];

    totalEstoque: number = 0;
    tarefasFiltradas: Tarefa[] = [];
    contagemTarefas: { baixa: number; media: number; alta: number } = { baixa: 0, media: 0, alta: 0 };
    
    mostrarProdutos: boolean = false;
    mostrarEstoque: boolean = false;
    mostrarTarefas: boolean = false;
    mostrarFiltroTarefas: boolean = false;
    mostrarResultadoFiltro: boolean = false;
    mostrarContagem: boolean = false;

    constructor() { }

    // MENU 
    listarProdutos() {
        this.mostrarProdutos = true;
    }

    calcularTotalEstoque() {
        this.totalEstoque = 0;
        for (const produto of this.produtos) {
            this.totalEstoque += produto.preco * produto.estoque;
        }
        this.mostrarEstoque = true;
    }

    listarTarefas() {
        this.mostrarTarefas = true;
    }

    filtrarTarefas() {
        this.mostrarFiltroTarefas = true;
        this.mostrarResultadoFiltro = false;
    }

    escolhafiltrarTarefas(concluida: boolean) {
        this.tarefasFiltradas = this.tarefas.filter(tarefa => tarefa.concluida === concluida);
        this.mostrarFiltroTarefas = false;
        this.mostrarResultadoFiltro = true;
    }

    novoFiltro() {
        this.mostrarFiltroTarefas = true;
        this.mostrarResultadoFiltro = false;
    }

    contagemPorPrioridade() {
        this.contagemTarefas = { baixa: 0, media: 0, alta: 0 };
        for (const tarefa of this.tarefas) {
            this.contagemTarefas[tarefa.prioridade]++;
        }
        this.mostrarContagem = true;
    }

    // FUNCIONALIDADES
    cadastrarProdutos() {
        window.location.href = '/cadastrar-produtos'; 
    }

    concluirTarefas() {
        window.location.href = '/concluir-tarefas'; 
    }

    ordenarTarefas() {
        window.location.href = '/ordenar-tarefas';
    }

    exitApp() {
        App.exitApp();
        window.close();
    }
}
