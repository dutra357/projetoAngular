import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  start() {
    for (let usr of this.usuarios) {
      localStorage.setItem(`${usr.email}`, JSON.stringify(usr))
    }
  }

  login(usuario: { email: string, senha: string }): boolean {
    let arrayChaves = Object.keys(localStorage);
    let usrLogin;

    for (let chave of arrayChaves) {
      if (usuario.email == chave) {
        usrLogin = JSON.parse(localStorage.getItem(chave) || "{}")
      }
    }    

    if(usrLogin) {
      if ((usrLogin.email === usuario.email) && (usrLogin.senha === usuario.senha)) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario.email));
        alert('Usuário logado com sucesso!');
        return true;
      }
    }

    return false;

    // for (let usr of array) {
    //   if ((usr.email === usuario.email) && (usr.senha === usuario.senha)) {
    //     sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario.email));
    //     alert('Usuário logado com sucesso!');
    //     return true;
    //   }
    // }
    // return false;
  }

  getLogado(email: any): any {
    for (let usr of this.usuarios) {
      if (usr.email == email) {
        return usr;
      }
    }
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

  getTurma(aluno: string): any {
    for (let usr of this.usuarios) {
      if (usr.nome == aluno) {
        return usr.turma;
      }
    }
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





  //Mock inicial a ser carregado no LocalStorage
  countId = 11;
  usuarios = [
    {
      id: 1,
      nome: 'Jorge Saraiva',
      genero: 'Masculino',
      nascimento: '1983-01-01',
      cpf: '000.000.000-00',
      rg: '000000-1',
      idade: '41',
      expeditor: 'SSP',
      naturalidade: 'Florianópolis',
      estadoCivil: 'Casado',
      telefone: '(99) 9 9999-99999',
      email: 'adm@adm.com',
      senha: 'adm',
      perfil: 'Administrador',
      endereco: {
        cep: '88040000',
        cidade: 'Florianopolis',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turma: '',
      materias: {}
    },
    {
      id: 2,
      nome: 'Paulo da Silva',
      genero: 'Masculino',
      nascimento: '1983-10-10',
      cpf: '111.111.111-11',
      rg: '1111111',
      idade: '40',
      expeditor: 'IGP',
      naturalidade: 'Florianópolis',
      estadoCivil: 'Casado',
      telefone: '(99) 9 8888-99999',
      email: 'paulo@docente.com',
      senha: 'paulo123',
      perfil: 'Docente',
      endereco: {
        cep: '88040010',
        cidade: 'Florianópolis',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turma: '',
      materias: {}
    },
    {
      id: 3,
      nome: 'Maria Silverio',
      genero: 'Feminino',
      nascimento: '1971-01-01',
      cpf: '222.222.222-22',
      rg: '222222',
      idade: '45',
      expeditor: 'SSP',
      naturalidade: 'Florianópolis',
      estadoCivil: 'Casado',
      telefone: '(99) 9 7777-99999',
      email: 'maria@docente.com',
      senha: 'maria123',
      perfil: 'Docente',
      endereco: {
        cep: '88040020',
        cidade: 'Florianópolis',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turma: '',
      materias: {}
    },
    {
      id: 4,
      nome: 'Laura da Silva',
      genero: 'Feminino',
      nascimento: '1970-02-02',
      cpf: '999.777.88-44',
      rg: '999999',
      idade: '59',
      expeditor: 'SSP',
      naturalidade: 'Florianópolis',
      estadoCivil: 'Casado',
      telefone: '(99) 9 9999-99999',
      email: 'laura@gmail.com',
      senha: 'laura123',
      perfil: 'Docente',
      endereco: {
        cep: '88040090',
        cidade: 'Florianópolis',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turma: '',
      materias: {}
    },
    {
      id: 5,
      nome: 'Francisco das Neves',
      genero: 'Masculino',
      nascimento: '2005-01-01',
      cpf: '888.000.888-08',
      rg: '33635587',
      idade: '19',
      expeditor: 'IGP',
      naturalidade: 'São José/SC',
      estadoCivil: 'Solteiro',
      telefone: '(99) 9 9898-9898',
      email: 'chico@gmail.com',
      senha: 'francisco123',
      perfil: 'Aluno',
      endereco: {
        cep: '88040001',
        cidade: 'Florianópolis',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turma: 'Excel',
      materias: {}
    },
    {
      id: 7,
      nome: 'Julia Gonçalves',
      genero: 'Feminino',
      nascimento: '2002-01-01',
      cpf: '000.000.000-00',
      rg: '64444',
      idade: '22',
      expeditor: 'IGP',
      naturalidade: 'São José/SC',
      estadoCivil: 'Solteiro',
      telefone: '(99) 9 9999-99999',
      email: 'julia@gmail.com',
      senha: 'julia123',
      perfil: 'Aluno',
      endereco: {
        cep: '88010092',
        cidade: 'Florianópolis',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turma: 'Java',
      materias: {}
    },
    {
      id: 8,
      nome: 'Bob Field',
      genero: 'Masculino',
      nascimento: '1999-01-01',
      cpf: '000.000.000-00',
      rg: '',
      idade: '25',
      expeditor: 'SSP',
      naturalidade: 'Palhoça/SC',
      estadoCivil: 'Solteiro',
      telefone: '(99) 9 9999-99999',
      email: 'bob@gmail.com',
      senha: 'bob123',
      perfil: 'Aluno',
      endereco: {
        cep: '88010091',
        cidade: 'Florianópolis',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
      },
      turma: 'Java',
      materias: {}
    }
  ]
}
