import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  constructor() { }

  startTurmas() {
    let turmasArray = []
    for (let turma of this.turmas) {
      turmasArray.push(turma);
    }
    localStorage.setItem('Turmas', JSON.stringify(turmasArray))
    localStorage.setItem('countTurmaId', JSON.stringify(3))
  }

  getTurmas() {
    let turmas = JSON.parse(localStorage.getItem('Turmas') || "{}")
    return turmas;
  }

  getStats() {
    let turmas = JSON.parse(localStorage.getItem('Turmas') || "{}")

    let qtd = 0;
    for(let turma of turmas) {
      ++qtd;
    }
    return qtd;
  }

  getTurmaById (id: number) {
    let turmas = JSON.parse(localStorage.getItem('Turmas') || "{}")

    for(let turma of turmas) {
      if (turma.id == id) {
        return turma;
      }
    }
    return -1;
  }
  
  cadastrarTurma(turma: any) {
    let turmas = JSON.parse(localStorage.getItem('Turmas') || "{}")
    let idAtual = JSON.parse(localStorage.getItem('countTurmaId') || "{}")
    turma.id = ++idAtual;

    turmas.push(turma);

    localStorage.removeItem('Turmas');
    localStorage.setItem('Turmas', JSON.stringify(turmas))

    localStorage.removeItem('countTurmaId');
    localStorage.setItem('countTurmaId', JSON.stringify(idAtual))
  }


  getHorario(nomeTurma: string): any {
    let turmas = JSON.parse(localStorage.getItem('Turmas') || "{}")

    for (let turma of turmas) {
      if (nomeTurma == turma.nome) {
        return turma.horario;
      }
    }
  }

  



    //Mock inicial a ser carregado no LocalStorage
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
