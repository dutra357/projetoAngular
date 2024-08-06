import { Injectable } from '@angular/core';
import { not } from 'rxjs/internal/util/not';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor() { }

  getTodasNotas() {
    return this.notas;
  }

  notas = [
    {
      materia: 'Matemática',
      nota: '9.5',
      data: '06/08/2024',
      avaliacao: 'Prova 1'
    },
    {
      materia: 'Matemática',
      nota: '9.0',
      data: '10/08/2024',
      avaliacao: 'Prova 2'
    },
    {
      materia: 'Português',
      nota: '10.0',
      data: '11/07/2024',
      avaliacao: 'Prova'
    },
    {
      materia: 'Português',
      nota: '8.5',
      data: '10/06/2024',
      avaliacao: 'Trabalho (equipes)'
    }
  ]
}
