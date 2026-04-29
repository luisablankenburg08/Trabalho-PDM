import { Component} from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, CommonModule]
})
export class CadastrarProdutosComponent {
  voltar() {
    window.location.href = '/home';
  }

}
