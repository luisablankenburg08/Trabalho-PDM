
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesafioComponent } from './desafio';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    DesafioComponent
  ],
})
export class HomePage {
  constructor() {}
}

