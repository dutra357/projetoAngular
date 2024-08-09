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
    // let i = 0;
    // let index = 0
    // for (let usr of this.usuarios) {
    //   i++;
    //   if(usuario.id == usr.id) {
    //     index = i;
    //   }
    // }
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
      nome: 'Laura da Silva',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '59',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'laura@gmail.com',
      senha: 'laura123',
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
      turmas: {}
    },
    {
      id: 5,
      nome: 'Francisco das Neves',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '19',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'chico@gmail.com',
      senha: 'francisco123',
      perfil: 'Aluno',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turmas: {}
    },
    {
      id: 6,
      nome: 'Manuela das Chagas',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '20',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'manuela@gmail.com',
      senha: 'manuela123',
      perfil: 'Aluno',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turmas: {}
    },
    {
      id: 7,
      nome: 'Julia Gonçalves',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '22',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'julia@gmail.com',
      senha: 'julia123',
      perfil: 'Aluno',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turmas: {}
    },
    {
      id: 8,
      nome: 'Bob Field',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '22',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'bob@gmail.com',
      senha: 'bob123',
      perfil: 'Aluno',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turmas: {}
    },
    {
      id: 9,
      nome: 'João Rodrigues',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '22',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'joao@gmail.com',
      senha: 'joao123',
      perfil: 'Aluno',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turmas: {}
    },
    {
      id: 10,
      nome: 'Maria Berenice',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '22',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'berenice@gmail.com',
      senha: 'berenice123',
      perfil: 'Aluno',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turmas: {}
    },
    {
      id: 8,
      nome: 'Renata Lacerda',
      genero: '',
      nascimento: '',
      cpf: '',
      rg: '',
      idade: '22',
      expeditor: '',
      naturalidade: '',
      estadoCivil: '',
      telefone: '',
      email: 'renata@gmail.com',
      senha: 'renata123',
      perfil: 'Aluno',
      endereco: {
        cep: '',
        cidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turmas: {}
    }
  ]
}
