import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  usuarioLogado!: { email: string, nome: string, perfil: string }

  login(usuario: { email: string, senha: string }): boolean {
    for (let usr of this.usuarios) {
      if ((usr.email === usuario.email) && (usr.senha === usuario.senha)) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario.email));
        alert('Usuário logado com sucesso!');
        return true;
      }
    }
    return false;
  }

  getLogado(email: any) {
    for (let usr of this.usuarios) {
      if (usr.email == email) {
        return usr;
      }
    }
    return this.usuarioLogado;
  }

  getAlunos() {
    let alunos = [];
    for (let usr of this.usuarios) {
      if (usr.perfil == 'Aluno') {
        alunos.push(usr);
      }
    }
    return alunos;
  }

  getDocentes() {
    let docentes = [];
    for (let usr of this.usuarios) {
      if (usr.perfil == 'Docente') {
        docentes.push(usr);
      }
    }
    return docentes;
  }

  getTotalAlunos() {
    let total = 0;
    for (let usr of this.usuarios) {
      if (usr.perfil == 'Aluno') {
        total++;
      }
    }
    return total;
  }

  getTotalDocentes() {
    let total = 0;
    for (let usr of this.usuarios) {
      if (usr.perfil == 'Docente') {
        total++;
      }
    }
    return total;
  }

  getTotalTurmas() {
    let total = 0;
    for (let usr of this.usuarios) {
      if (usr.perfil == 'Turma') {
        total++;
      }
    }
    return total;
  }

  getPerfil(email: string) {
    for (let usr of this.usuarios) {
      if (usr.email == email) {
        return usr.perfil;
      }
    }
    return 'null';
  }

  logout() {
    sessionStorage.removeItem('usuarioLogado');
    window.location.href = "/login";
  }

  cadastrar(usuario: any) {
    usuario.id = ++this.countId;
    this.usuarios.push(usuario);
  }

  excluir(usuario: any) {
    let i = 0;
    let index = 0
    for (let usr of this.usuarios) {
      i++;
      if(usuario.id == usr.id) {
        index = i;
      }
    }
    
    // if (index > -1) { // only splice array when item is found
    //   this.usuarios.splice(index, 1); // 2nd parameter means remove one item only
    // }
    console.log(usuario)
  }

  salvar(usuario: any) {
    // mock
  }


  countId = 11;
  usuarios = [
    {
      id: 1,
      nome: 'Jorge Saraiva',
      genero: 'Masculino',
      nascimento: '01-01-1983',
      cpf: '',
      rg: '',
      idade: '41',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'adm@adm.com',
      senha: 'adm',
      perfil: 'Administrador',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      materias: {}
    },
    {
      id: 2,
      nome: 'Paulo da Silva',
      genero: '',
      nascimento: '1983-10-10',
      cpf: '',
      rg: '',
      idade: '40',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'paulo@docente.com',
      senha: 'paulo123',
      perfil: 'Docente',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      materias: {}
    },
    {
      id: 3,
      nome: 'Maria Silverio',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '45',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'maria@docente.com',
      senha: 'maria123',
      perfil: 'Docente',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      materias: {}
    },
    {
      id: 4,
      email: 'laura@gmail.com',
      senha: 'laura123',
      nome: 'Laura da Silva',
      idade: '19',
      perfil: 'Aluno'
    },
    {
      id: 5,
      email: 'chico@gmail.com',
      senha: 'francisco123',
      nome: 'Francisco das Neves',
      idade: '19',
      perfil: 'Aluno'
    },
    {
      id: 6,
      email: 'manuela@gmail.com',
      senha: 'manuela123',
      nome: 'Manuela das Neves',
      idade: '20',
      perfil: 'Aluno'
    },
    {
      id: 7,
      email: 'julia@gmail.com',
      senha: 'julia123',
      nome: 'Julia das Couves',
      idade: '22',
      perfil: 'Aluno'
    },
    {
      id: 8,
      email: 'roberto@gmail.com',
      senha: 'roberto123',
      nome: 'Roberto das Couves',
      idade: '19',
      perfil: 'Aluno'
    },
    {
      id: 9,
      email: 'renata@gmail.com',
      senha: 'renata123',
      nome: 'Renata de Tal',
      idade: '20',
      perfil: 'Aluno'
    },
    {
      id: 10,
      email: 'julia@gmail.com',
      senha: 'julia123',
      nome: 'Julia de Souza',
      idade: '20',
      perfil: 'Aluno'
    },
    {
      id: 11,
      email: 'renata@gmail.com',
      senha: 'renata123',
      nome: 'Renata das Couves',
      idade: '18',
      perfil: 'Aluno'
    }
  ]
}
