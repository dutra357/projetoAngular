import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  usuarioLogado!: {email: string, senha: string, nome: string, perfil: string}

  login(usuario: {email: string, senha: string}): boolean {
    for(let usr of this.usuarios) {
      if((usr.email === usuario.email) && (usr.senha === usuario.senha)) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        sessionStorage.setItem('emailLogado', usuario.email);
        alert('Usuário logado com sucesso!')
        return true;
      }
    }
    return false;
}

getLogado() {
  return this.usuarioLogado;
}

getNome() {
  return this.usuarioLogado.nome;
}

getPerfil() {
  return this.usuarioLogado.perfil;
}

logout() {
  sessionStorage.removeItem('usuarioLogado');
}


  usuarios = [
    {
      email: 'jose@gmail.com',
      senha: 'jose123',
      nome: 'José da Silva',
      perfil: 'Aluno'
    },
    {
      email: 'adm@adm.com',
      senha: 'adm',
      nome: 'Jorge Saraiva',
      perfil: 'Administrador'
    },
    {
      email: 'paulo@adm.com',
      senha: 'paulo123',
      nome: 'Paulo da Silva',
      perfil: 'Docente'
    }
  ]
}
