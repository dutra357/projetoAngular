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

  getMaterias() {
    let saida: string[] = [];

    this.notas.forEach(element => {
        if (!saida.includes(element.materia)) {
          saida.push(element.materia);
        }
    });
    
    return saida;
  }

  cadastrarAvaliacao(avaliacao: any) {
    avaliacao.id = ++this.countId;
    this.notas.push(avaliacao);
    console.log(avaliacao)
  } 

  countId = 6;
  notas = [
    {
      id: 1,
      materia: 'Matemática',
      nota: '9.5',
      data: '06/08/2024',
      avaliacao: 'Prova 1'
    },
    {
      id: 2,
      materia: 'Matemática',
      nota: '9.0',
      data: '10/08/2024',
      avaliacao: 'Prova 2'
    },
    {
      id: 3,
      materia: 'Português',
      nota: '10.0',
      data: '11/07/2024',
      avaliacao: 'Prova'
    },
    {
      id: 4,
      materia: 'Português',
      nota: '8.5',
      data: '10/06/2024',
      avaliacao: 'Trabalho (equipes)'
    },
    {
      id: 5,
      materia: 'Física',
      nota: '8.9',
      data: '07/07/2024',
      avaliacao: 'Prova 1'
    },
    {
      id: 6,
      materia: 'Inglês',
      nota: '8.8',
      data: '01/06/2024',
      avaliacao: 'Prova 1'
    }
  ]
}
