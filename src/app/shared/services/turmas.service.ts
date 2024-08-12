import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  constructor() { }

  getTurmas() {
    return this.turmas;
  }

  getStats() {
    let qty = 0;
    for(let turma of this.turmas) {
      ++qty;
    }
    return qty;
  }

  getTurmaById (id: number) {
    for(let turma of this.turmas) {
      if (turma.id == id) {
        return turma;
      }
    }
    return -1;
  }

  cadastrarTurma(turma: any) {
    turma.id = ++this.countId;
    this.turmas.push(turma);
  }

  getHorario(nomeTurma: string): any {
    for (let turma of this.turmas) {
      if (nomeTurma == turma.nome) {
        return turma.horario;
      }
    }
  }

  countId = 3;
  turmas = [
    {
      id: 1,
      nome: 'Java',
      dataInicio: '',
      dataTermino: '',
      horario: '13:00',
      professor: 'Rosalvo Alves',
    },
    {
      id: 2,
      nome: 'Excel',
      dataInicio: '',
      dataTermino: '',
      horario: '14:00',
      professor: 'Maria Silverio',
    },
    {
      id: 3,
      nome: 'Oracle DB PL',
      dataInicio: '',
      dataTermino: '',
      horario: '15:00',
      professor: 'Laura da Silva',
    },
  ]
}
