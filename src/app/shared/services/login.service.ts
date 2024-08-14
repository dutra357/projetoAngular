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
    localStorage.setItem('countId', JSON.stringify(7))
  }

  login(usuario: { email: string, senha: string }): boolean {
    let arrayChaves = Object.keys(localStorage);
    let usrLogin;

    for (let chave of arrayChaves) {
      if (usuario.email == chave) {
        usrLogin = JSON.parse(localStorage.getItem(chave) || "{}")
      }
    }

    if (usrLogin) {
      if ((usrLogin.email === usuario.email) && (usrLogin.senha === usuario.senha)) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario.email));
        alert('Usuário logado com sucesso!');
        return true;
      }
    }
    return false;
  }

  getLogado(email: any): any {
    let arrayChaves = Object.keys(localStorage);
    let usrLogin;

    for (let chave of arrayChaves) {
      if (email == chave) {
        usrLogin = JSON.parse(localStorage.getItem(chave) || "{}")
        return usrLogin;
      }
    }
  }

  getAlunos() {
    let usuarios: any = [];
    let alunos = [];
    let arrayChaves = Object.keys(localStorage);

    for (let chave of arrayChaves) {
        let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
        usuarios.push(usuario);
    }

    for (let usr of usuarios) {
      if (usr.perfil == 'Aluno') {
        alunos.push(usr);
      }
    }
    return alunos;
  }

  getDocentes() {
    let usuarios: any = [];
    let docentes = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
        let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
        usuarios.push(usuario);
    }

    for (let usr of usuarios) {
      if (usr.perfil == 'Docente') {
        docentes.push(usr);
      }
    }
    return docentes;
  }

  getTotalAlunos() {
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
        let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
        usuarios.push(usuario);
    }

    let total = 0;
    for (let usr of usuarios) {
      if (usr.perfil == 'Aluno') {
        ++total;
      }
    }
    return total;
  }

  getTotalDocentes() {
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
        let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
        usuarios.push(usuario);
    }

    let total = 0;
    for (let usr of usuarios) {
      if (usr.perfil == 'Docente') {
        ++total;
      }
    }
    return total;
  }

  getPerfil(email: string) {
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
        let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
        usuarios.push(usuario);
    }

    for (let usr of usuarios) {
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
    let idAtual = JSON.parse(localStorage.getItem('countId') || "{}")
    usuario.id = ++idAtual;
    localStorage.setItem(`${usuario.email}`, JSON.stringify(usuario))
    localStorage.removeItem('countId');
    localStorage.setItem('countId', JSON.stringify(usuario.id))
  }

  excluir(usuario: any) {
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
        let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
        usuarios.push(usuario);
    }

    for(let usr of usuarios) {
      if(usuario.email == usr.email) {
        localStorage.removeItem(usuario.email);
      }
    }
  }

  salvar(usuario: any) {
    let usuarios: any = [];
    let arrayChaves = Object.keys(localStorage);
    for (let chave of arrayChaves) {
        let usuario = JSON.parse(localStorage.getItem(chave) || "{}");
        usuarios.push(usuario);
    }

    for(let usr of usuarios) {
      if(usr.email == usuario.email) {
        localStorage.removeItem(usr.email);
        localStorage.setItem(`${usuario.email}`, JSON.stringify(usuario))
      }
    }
  }







  //Mock inicial a ser carregado no LocalStorage
  countId = 7;
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
      telefone: '(99)99999-9999',
      email: 'adm@adm.com',
      senha: 'adm',
      perfil: 'Administrador',
      endereco: {
        cep: '88015-201',
        cidade: 'Florianopolis',
        logradouro: 'Avenida Rio Branco',
        numero: 'S/n',
        complemento: '',
        bairro: 'Centro',
        referencia: '',
      },
      avaliacoes: [],
      notaCountId: '0',
      turma: '',
      materias: {}
    },
    {
      id: 2,
      nome: 'Paulo da Silva',
      genero: 'Masculino',
      nascimento: '1983-10-10',
      cpf: '111.111.111-11',
      rg: '1111111-9',
      idade: '40',
      expeditor: 'IGP',
      naturalidade: 'Florianópolis',
      estadoCivil: 'Casado',
      telefone: '(99)98888-9999',
      email: 'paulo@docente.com',
      senha: 'paulo123',
      perfil: 'Docente',
      endereco: {
        cep: '88015-201',
        cidade: 'Florianópolis',
        logradouro: 'Avenida Rio Branco',
        numero: 'S/n',
        complemento: '',
        bairro: 'Centro',
        referencia: '',
      },
      avaliacoes: [],
      notaCountId: '0',
      turma: '',
      materias: {}
    },
    {
      id: 3,
      nome: 'Maria Silverio',
      genero: 'Feminino',
      nascimento: '1971-01-01',
      cpf: '222.222.222-22',
      rg: '222222-1',
      idade: '45',
      expeditor: 'SSP',
      naturalidade: 'Florianópolis',
      estadoCivil: 'Casado',
      telefone: '(99)97777-9999',
      email: 'maria@docente.com',
      senha: 'maria123',
      perfil: 'Docente',
      endereco: {
        cep: '88015-201',
        cidade: 'Florianópolis',
        logradouro: 'Avenida Rio Branco',
        numero: 'S/n',
        complemento: '',
        bairro: 'Centro',
        referencia: '',
      },
      avaliacoes: [],
      notaCountId: '0',
      turma: '',
      materias: {}
    },
    {
      id: 4,
      nome: 'Laura da Silva',
      genero: 'Feminino',
      nascimento: '1970-02-02',
      cpf: '999.777.88-44',
      rg: '99999-7',
      idade: '59',
      expeditor: 'SSP',
      naturalidade: 'Florianópolis',
      estadoCivil: 'Casado',
      telefone: '(99)99999-0000',
      email: 'laura@gmail.com',
      senha: 'laura123',
      perfil: 'Docente',
      endereco: {
        cep: '88015-201',
        cidade: 'Florianópolis',
        logradouro: 'Avenida Rio Branco',
        numero: 'S/n',
        complemento: '',
        bairro: 'Centro',
        referencia: '',
      },
      avaliacoes: [],
      notaCountId: '0',
      turma: '',
      materias: {}
    },
    {
      id: 5,
      nome: 'Francisco das Neves',
      genero: 'Masculino',
      nascimento: '2005-01-01',
      cpf: '888.000.888-08',
      rg: '33635587-6',
      idade: '19',
      expeditor: 'IGP',
      naturalidade: 'São José/SC',
      estadoCivil: 'Solteiro',
      telefone: '(99)99898-9898',
      email: 'chico@gmail.com',
      senha: 'francisco123',
      perfil: 'Aluno',
      endereco: {
        cep: '88015-201',
        cidade: 'Florianópolis',
        logradouro: 'Avenida Rio Branco',
        numero: 'S/n',
        complemento: '',
        bairro: 'Centro',
        referencia: '',
      },
      avaliacoes: [
        {
          id: 1,
          materia: 'Java POO',
          nota: '9.5',
          data: '2024-08-06',
          avaliacao: 'Prova 1',
          turma: 'Java',
          docente: 'Paulo da Silva',
          aluno: 'Francisco das Neves'
        },
        {
          id: 2,
          materia: 'Java SpringBoot',
          nota: '9.0',
          data: '2024-08-10',
          avaliacao: 'Prova 2',
          turma: 'Excel',
          docente: 'Laura da Silva',
          aluno: 'Francisco das Neves'
        },
        {
          id: 3,
          materia: 'Java DataStructures',
          nota: '10.0',
          data: '2024-07-10',
          avaliacao: 'Trabalho (equipe)',
          turma: 'Java',
          docente: 'Laura da Silva',
          aluno: 'Francisco das Neves'
        }
      ],
      notaCountId: '3',
      turma: 'Java',
      materias: {}
    },
    {
      id: 6,
      nome: 'Julia Gonçalves',
      genero: 'Feminino',
      nascimento: '2002-01-01',
      cpf: '000.000.000-00',
      rg: '64444',
      idade: '22',
      expeditor: 'IGP',
      naturalidade: 'São José/SC',
      estadoCivil: 'Solteiro',
      telefone: '(99)99999-9999',
      email: 'julia@gmail.com',
      senha: 'julia123',
      perfil: 'Aluno',
      endereco: {
        cep: '88015-201',
        cidade: 'Florianópolis',
        logradouro: 'Avenida Rio Branco',
        numero: 'S/n',
        complemento: '',
        bairro: 'Centro',
        referencia: '',
      },
      avaliacoes: [
        {
          id: 1,
          materia: 'Bancos de Dados SQL',
          nota: '9.5',
          data: '2024-08-06',
          avaliacao: 'Prova 1',
          turma: 'Oracle DB PL',
          docente: 'Paulo da Silva',
          aluno: 'Francisco das Neves'
        },
        {
          id: 2,
          materia: 'Bancos de dados NoSQL',
          nota: '9.0',
          data: '2024-08-10',
          avaliacao: 'Prova 2',
          turma: 'Oracle DB PL',
          docente: 'Laura da Silva',
          aluno: 'Francisco das Neves'
        },
        {
          id: 3,
          materia: 'Modelagem de DB',
          nota: '10.0',
          data: '2024-07-11',
          avaliacao: 'Trabalho (equipe)',
          turma: 'Oracle DB PL',
          docente: 'Laura da Silva',
          aluno: 'Francisco das Neves'
        }
      ],
      notaCountId: '3',
      turma: 'Oracle DB PL',
      materias: {}
    },
    {
      id: 7,
      nome: 'Bob Field',
      genero: 'Masculino',
      nascimento: '1999-01-01',
      cpf: '000.000.000-00',
      rg: '',
      idade: '25',
      expeditor: 'SSP',
      naturalidade: 'Palhoça/SC',
      estadoCivil: 'Solteiro',
      telefone: '(99)98888-9999',
      email: 'bob@gmail.com',
      senha: 'bob123',
      perfil: 'Aluno',
      endereco: {
        cep: '88015-201',
        cidade: 'Florianópolis',
        logradouro: 'Avenida Rio Branco',
        numero: 'S/n',
        complemento: '',
        bairro: 'Centro',
        referencia: '',
      },
      avaliacoes: [
        {
          id: 1,
          materia: 'Excel Básico',
          nota: '9.5',
          data: '2024-08-06',
          avaliacao: 'Prova 1',
          turma: 'Oracle DB PL',
          docente: 'Paulo da Silva',
          aluno: 'Francisco das Neves'
        },
        {
          id: 2,
          materia: 'Excel Avançado',
          nota: '9.0',
          data: '2024-08-10',
          avaliacao: 'Prova 2',
          turma: 'Oracle DB PL',
          docente: 'Laura da Silva',
          aluno: 'Francisco das Neves'
        },
        {
          id: 3,
          materia: 'Macros (Excel)',
          nota: '10.0',
          data: '2024-07-11',
          avaliacao: 'Trabalho (equipe)',
          turma: 'Oracle DB PL',
          docente: 'Laura da Silva',
          aluno: 'Francisco das Neves'
        }
      ],
      notaCountId: '3',
      turma: 'Excel',
      materias: {}
    }
  ]
}
