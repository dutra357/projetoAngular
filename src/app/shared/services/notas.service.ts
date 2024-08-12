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

  getTodasNotasAluno(aluno: string) {
    let notasAluno = []
    for (let nota of this.notas) {
      if(nota.aluno == aluno) {
        notasAluno.push(nota);
      }
    }
    return notasAluno;
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

  getAvaliacao(aluno: string): any {
    for(let avaliacao of this.notas) {
      if(avaliacao.aluno == aluno) {
        return avaliacao;
      }
    }
  }

  cadastrarAvaliacao(avaliacao: any) {
    avaliacao.id = ++this.countId;
    this.notas.push(avaliacao);
    console.log(avaliacao)
  }

  countId = 7;
  notas = [
    {
      id: 1,
      materia: 'Excel básico',
      nota: '9.5',
      data: '06/08/2024',
      avaliacao: 'Prova 1',
      turma: 'Turma Excel',
      docente: 'Paulo da Silva',
      aluno: 'Francisco das Neves'
    },
    {
      id: 2,
      materia: 'Excel avançado',
      nota: '9.0',
      data: '10/08/2024',
      avaliacao: 'Prova 2',
      turma: 'Turma Excel',
      docente: 'Paulo da Silva',
      aluno: 'Francisco das Neves'
    },
    {
      id: 3,
      materia: 'SpringBoot',
      nota: '10.0',
      data: '11/07/2024',
      avaliacao: 'Prova',
      turma: 'Turma JAVA',
      docente: 'Maria Silverio',
      aluno: 'Julia Gonçalves'
    },
    {
      id: 4,
      materia: 'Linguagem SQL',
      nota: '8.5',
      data: '10/06/2024',
      avaliacao: 'Trabalho (equipes)',
      turma: 'Turma Oracle DB PL',
      docente: 'Laura da Silva',
      aluno: 'Maria Berenice'
    },
    {
      id: 5,
      materia: 'Bancos de Dados',
      nota: '8.9',
      data: '07/07/2024',
      avaliacao: 'Prova 1',
      turma: 'Turma Oracle DB PL',
      docente: 'Laura da Silva',
      aluno: 'Bob Field'
    },
    {
      id: 6,
      materia: 'Inglês técnico',
      nota: '8.8',
      data: '01/06/2024',
      avaliacao: 'Prova 1',
      turma: 'Turma JAVA',
      docente: 'Maria Silverio',
      aluno: 'João Rodrigues'
    },
    {
      id: 7,
      materia: 'Quarkus',
      nota: '10.0',
      data: '11/07/2024',
      avaliacao: 'Prova',
      turma: 'Turma JAVA',
      docente: 'Maria Silverio',
      aluno: 'João Rodrigues'
    }
  ]

  getDataAjustada(data: string) {
    const array = data.split("/");
    let dia = array[0];
    let mes = array[1];
    let ano = array[2];
    return ano + "-" + mes + "-" + dia;
  }
}
