import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  usuarioLogado!: {email: string, nome: string, perfil: string}

  login(usuario: {email: string, senha: string}): boolean {
    for(let usr of this.usuarios) {
      if((usr.email === usuario.email) && (usr.senha === usuario.senha)) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario.email));
        alert('Usuário logado com sucesso!');
        return true;
      }
    }
    return false;
}

getLogado(email: any) {
  for(let usr of this.usuarios) {
    if (usr.email == email) {
      return usr.perfil
    }
  }

  return this.usuarioLogado;
}

getAlunos() {
  let alunos = [];
  for(let usr of this.usuarios) {
    if (usr.perfil == 'Aluno') {
      alunos.push(usr);
    }
  }
  return alunos;
}

getNome() {
  return this.usuarioLogado.nome;
}

getPerfil() {
  return this.usuarioLogado.perfil;
}

logout() {
  sessionStorage.removeItem('usuarioLogado');
  window.location.href = "/login";
}


  usuarios = [
    {
      email: 'adm@adm.com',
      senha: 'adm',
      nome: 'Jorge Saraiva',
      idade: '41',
      perfil: 'Administrador'
    },
    {
      email: 'paulo@docente.com',
      senha: 'paulo123',
      nome: 'Paulo da Silva',
      idade: '40',
      perfil: 'Docente'
    },
    {
      email: 'maria@gmail.com',
      senha: 'maria123',
      nome: 'Maria da Silva',
      idade: '21',
      perfil: 'Aluno'
    },
    {
      email: 'laura@gmail.com',
      senha: 'laura123',
      nome: 'Laura da Silva',
      idade: '19',
      perfil: 'Aluno'
    },
    {
      email: 'chico@gmail.com',
      senha: 'francisco123',
      nome: 'Francisco das Neves',
      idade: '19',
      perfil: 'Aluno'
    },
    {
      email: 'manuela@gmail.com',
      senha: 'manuela123',
      nome: 'Manuela das Neves',
      idade: '20',
      perfil: 'Aluno'
    },
    {
      email: 'julia@gmail.com',
      senha: 'julia123',
      nome: 'Julia das Couves',
      idade: '22',
      perfil: 'Aluno'
    },
    {
      email: 'roberto@gmail.com',
      senha: 'roberto123',
      nome: 'Roberto das Couves',
      idade: '19',
      perfil: 'Aluno'
    },
    {
      email: 'renata@gmail.com',
      senha: 'renata123',
      nome: 'Renata de Tal',
      idade: '20',
      perfil: 'Aluno'
    },
    {
      email: 'julia@gmail.com',
      senha: 'julia123',
      nome: 'Julia de Souza',
      idade: '20',
      perfil: 'Aluno'
    },
    {
      email: 'renata@gmail.com',
      senha: 'renata123',
      nome: 'Renata das Couves',
      idade: '18',
      perfil: 'Aluno'
    }
  ]
}
