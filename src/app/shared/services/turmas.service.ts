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

  countTurmas = 4;
  turmas = [
    {
      id: 1,
      nome: 'Turma JAVA',
      data: '',
      horario: '',
      professor: 'Rosalvo Alves',
    },
    {
      id: 1,
      nome: 'Turma SpringBoot',
      data: '',
      horario: '',
      professor: 'Renato das Neves',
    },
    {
      id: 1,
      nome: 'Turma Excel',
      data: '',
      horario: '',
      professor: 'Florisvaldo da Luz',
    },
    {
      id: 1,
      nome: 'Turma Oracle DB PL',
      data: '',
      horario: '',
      professor: 'Florinda Nunes',
    },
  ]
}
