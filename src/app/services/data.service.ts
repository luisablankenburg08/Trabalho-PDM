import { Injectable } from '@angular/core';

export type Produto = {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
};

export type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
  prioridade: "baixa" | "media" | "alta";
  dataCriacao: Date;
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
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

  constructor() { }

  // PRODUTOS
  getProdutos(): Produto[] {
    return this.produtos;
  }

  cadastrarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  // TAREFAS
  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  calcularTotalEstoque(): number {
    let soma = 0;
    for (const produto of this.produtos) {
      soma += produto.preco * produto.estoque;
    }
    return soma;
  }

  filtrarTarefas(concluida: boolean): Tarefa[] {
    return this.tarefas.filter(tarefa => tarefa.concluida == concluida);
  }

  contagemPorPrioridade(): { baixa: number; media: number; alta: number } {
    const contagem = { baixa: 0, media: 0, alta: 0 };
    for (const tarefa of this.tarefas) {
      contagem[tarefa.prioridade]++;
    }
    return contagem;
  }

  concluirTarefa(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
    }
  }

  ordenarTarefasPorPrioridade(): Tarefa[] {
    const prioridadeOrdem: { [key in "alta" | "media" | "baixa"]: number } = { alta: 1, media: 2, baixa: 3 };
    return [...this.tarefas].sort((a, b) => prioridadeOrdem[a.prioridade] - prioridadeOrdem[b.prioridade]);
  }
}
