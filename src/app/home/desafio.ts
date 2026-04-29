import { Component } from "@angular/core";
import { IonButton, IonToolbar, IonContent, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { App } from '@capacitor/app';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

interface Tarefa {
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

    // Propriedades para resultados do MENU DE INTERAÇÃO
    totalEstoque: number = 0;
    tarefasFiltradas: Tarefa[] = [];
    contagemTarefas: { baixa: number; media: number; alta: number } = { baixa: 0, media: 0, alta: 0 };
    tarefasOrdenadas: Tarefa[] = [];

    // Propriedades para controlar visibilidade dos resultados
    mostrarProdutos: boolean = false;
    mostrarEstoque: boolean = false;
    mostrarTarefas: boolean = false;
    mostrarFiltroTarefas: boolean = false;
    mostrarResultadoFiltro: boolean = false;
    mostrarContagem: boolean = false;
    mostrarCadastro: boolean = false;
    mostrarConcluir: boolean = false;
    mostrarOrdenar: boolean = false;

    constructor() { }

    // MENU DE INTERAÇÃO
    listarProdutos() {
        this.mostrarProdutos = true;
        this.limparOutrosResultados('produtos');
    }

    calcularTotalEstoque() {
        this.totalEstoque = 0;
        for (const produto of this.produtos) {
            this.totalEstoque += produto.preco * produto.estoque;
        }
        this.mostrarEstoque = true;
        this.limparOutrosResultados('estoque');
    }

    listarTarefas() {
        this.mostrarTarefas = true;
        this.limparOutrosResultados('tarefas');
    }

    filtrarTarefas() {
        this.mostrarFiltroTarefas = true;
        this.mostrarResultadoFiltro = false;
        this.limparOutrosResultados('filtro');
    }

    filtrarTarefasComStatus(concluida: boolean) {
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
        this.limparOutrosResultados('contagem');
    }

    limparOutrosResultados(tipo: string) {
        if (tipo !== 'produtos') this.mostrarProdutos = false;
        if (tipo !== 'estoque') this.mostrarEstoque = false;
        if (tipo !== 'tarefas') this.mostrarTarefas = false;
        if (tipo !== 'filtro' && tipo !== 'resultadoFiltro') {
            this.mostrarFiltroTarefas = false;
            this.mostrarResultadoFiltro = false;
        }
        if (tipo !== 'contagem') this.mostrarContagem = false;
        if (tipo !== 'cadastro') this.mostrarCadastro = false;
        if (tipo !== 'concluir') this.mostrarConcluir = false;
        if (tipo !== 'ordenar') this.mostrarOrdenar = false;
    }

    // FUNCIONALIDADES
    cadastrarProdutos() {
        this.mostrarCadastro = true;
        this.limparOutrosResultados('cadastro');
    }

    concluirTarefas() {
        this.mostrarConcluir = true;
        this.limparOutrosResultados('concluir');
    }

    ordenarTarefas() {
        const prioridadeOrdem: { [key in "alta" | "media" | "baixa"]: number } = { alta: 1, media: 2, baixa: 3 };
        this.tarefasOrdenadas = [...this.tarefas].sort((a, b) => prioridadeOrdem[a.prioridade] - prioridadeOrdem[b.prioridade]);
        this.mostrarOrdenar = true;
        this.limparOutrosResultados('ordenar');
    }

    exitApp() {
        App.exitApp();
        window.close();
    }
}
