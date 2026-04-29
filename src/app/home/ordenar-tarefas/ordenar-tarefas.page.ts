import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
  prioridade: "baixa" | "media" | "alta";
  dataCriacao: Date;
}

@Component({
  selector: 'app-ordenar-tarefas',
  templateUrl: './ordenar-tarefas.page.html',
  styleUrls: ['./ordenar-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class OrdenarTarefasPage implements OnInit {
  tarefas: Tarefa[] = [
    { id: 1, titulo: "Reposição de verduras", concluida: true, prioridade: "alta", dataCriacao: new Date(2025, 5, 5, 15, 0, 0) },
    { id: 2, titulo: "Limpeza dos corredores", concluida: false, prioridade: "media", dataCriacao: new Date(2025, 5, 5, 7, 0, 0) },
    { id: 3, titulo: "Organizar a folha de pagamento", concluida: false, prioridade: "alta", dataCriacao: new Date(2025, 4, 5, 16, 30, 0) },
    { id: 4, titulo: "Averiguar novas mercadorias", concluida: false, prioridade: "media", dataCriacao: new Date(2025, 2, 5, 10, 30, 0) },
    { id: 5, titulo: "Contar o valor do caixa", concluida: true, prioridade: "baixa", dataCriacao: new Date(2025, 4, 3, 14, 0, 0) }
  ];

  ngOnInit() {
    const prioridadeOrdem: { [key in "alta" | "media" | "baixa"]: number } = { alta: 1, media: 2, baixa: 3 };
    this.tarefas.sort((a, b) => prioridadeOrdem[a.prioridade] - prioridadeOrdem[b.prioridade]);
  }

  voltar() {
    window.location.href = '/home';
  }

}


