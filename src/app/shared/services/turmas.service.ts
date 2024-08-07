import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  constructor() { }



  getTurmas() {
    return this.turmas;
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

  countId = 4;
  turmas = [
    {
      id: 1,
      nome: 'Turma JAVA',
      dataInicio: '',
      dataTermino: '',
      horario: '',
      professor: 'Rosalvo Alves',
    },
    {
      id: 1,
      nome: 'Turma SpringBoot',
      dataInicio: '',
      dataTermino: '',
      horario: '',
      professor: 'Renato das Neves',
    },
    {
      id: 1,
      nome: 'Turma Excel',
      dataInicio: '',
      dataTermino: '',
      horario: '',
      professor: 'Florisvaldo da Luz',
    },
    {
      id: 1,
      nome: 'Turma Oracle DB PL',
      dataInicio: '',
      dataTermino: '',
      horario: '',
      professor: 'Florinda Nunes',
    },
  ]
}
