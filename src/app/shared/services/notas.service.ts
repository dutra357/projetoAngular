import { Injectable } from '@angular/core';
import { not } from 'rxjs/internal/util/not';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor() { }

  getTodasNotasAluno(email: string) {
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
      let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
      usuarios.push(usuario);
    }

    for (let usr of usuarios) {
      if (usr.email == email) {
        return usr.avaliacoes;
      }
    }
    return 'null';
  }

  getMateriasAluno(email: string) {
    let materias = []
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
      let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
      usuarios.push(usuario);
    }

    for (let usr of usuarios) {
      if (usr.email == email) {
        for (let avaliacao of usr.avaliacoes) {
          materias.push(avaliacao.materia)
        }
      }
    }
    return materias;
  }


  getMateriasPossiveis() {
    let possiveis = []
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
      let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
      usuarios.push(usuario);
    }

    for (let usr of usuarios) {
      if (usr.perfil == 'Aluno') {
        for (let avaliacao of usr.avaliacoes) {
          possiveis.push(avaliacao.materia)
        }
      }
    }
    return possiveis;
  }

  cadastrarAvaliacao(email: string, avaliacao: any) {
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
      let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
      usuarios.push(usuario);
    }

    for (let usr of usuarios) {
      if(usr.perfil == 'Aluno') {
        if(usr.email == email) {
          avaliacao.id = ++usr.notaCountId;
          usr.notaCountId++;
      
          usr.avaliacoes.push(avaliacao);
      
          localStorage.removeItem(email);
          localStorage.setItem(email, JSON.stringify(usr))
        }
      }
    }
  }
}
