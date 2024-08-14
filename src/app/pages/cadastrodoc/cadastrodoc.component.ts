import { Component, inject } from '@angular/core';
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrodoc',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, FormsModule],
  templateUrl: './cadastrodoc.component.html',
  styleUrl: './cadastrodoc.component.scss'
})
export class CadastrodocComponent {

  router = inject(Router);
  statusEdicao: boolean = false;
  titulo = `Cadastro de Docentes`;

  constructor(private loginService: LoginService) {
    let docenteRecebido = this.router.getCurrentNavigation()?.extras.state?.['event'];

    if (docenteRecebido) {
      this.statusEdicao = true;

      this.docente.nome = docenteRecebido.nome;
      this.docente.genero = docenteRecebido.genero;
      this.docente.nascimento = docenteRecebido.nascimento;
      this.docente.cpf = docenteRecebido.cpf;
      this.docente.rg = docenteRecebido.rg;
      this.docente.expeditor = docenteRecebido.expeditor;
      this.docente.naturalidade = docenteRecebido.naturalidade;
      this.docente.estadoCivil = docenteRecebido.estadoCivil;
      this.docente.telefone = docenteRecebido.telefone;
      this.docente.email = docenteRecebido.email;
      this.docente.senha = docenteRecebido.senha;
      this.docente.endereco.cep = docenteRecebido.endereco.cep;
      this.docente.endereco.cidade = docenteRecebido.endereco.cidade;
      this.docente.endereco.logradouro = docenteRecebido.endereco.logradouro;
      this.docente.endereco.numero = docenteRecebido.endereco.numero;
      this.docente.endereco.complemento = docenteRecebido.endereco.complemento;
      this.docente.endereco.bairro = docenteRecebido.endereco.bairro;
      this.docente.endereco.referencia = docenteRecebido.endereco.referencia;
      this.docente.materias = docenteRecebido.materias;
    }
  }

  docente = {
    id: '',
    nome: '',
    genero: '',
    nascimento: '',
    cpf: '',
    rg: '',
    idade: '',
    expeditor: '',
    naturalidade: '',
    estadoCivil: '',
    telefone: '',
    email: '',
    senha: '',
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
  }

  cadastrar() {
    let inputs = document.getElementsByTagName("input");
    let materias: string[] = []

    for (let i = inputs.length - 1; i >= 0; i--) {
      if (inputs[i].type === "checkbox" && inputs[i].checked) {
        materias.push(inputs[i].value);
      }
    }
    this.docente.materias = materias;

    if (
      (this.docente.nome.length > 8) && (this.docente.nome.length < 65) &&
      (this.docente.genero) && (this.docente.nascimento) &&
      (this.docente.rg.length <= 20) && (this.docente.expeditor.length < 9) &&
      (this.docente.estadoCivil) && (this.docente.telefone) && (this.docente.email) &&
      (this.docente.naturalidade.length > 8) && (this.docente.naturalidade.length < 65) &&
      (this.docente.senha.length > 7) && (materias.length != 0) && (this.validaEmail(this.docente.email))
    ) {
      if (
        (this.docente.endereco.cep) && (this.docente.endereco.bairro) &&
        (this.docente.endereco.cidade) && (this.docente.endereco.logradouro) &&
        (this.docente.endereco.numero)
      ) {
        this.docente.idade = this.calculaIdade(this.docente.nascimento).toString();
        this.loginService.cadastrar(this.docente)
        alert('Docente cadastrado com sucesso!')

      } else {
        alert('Por favor, preencha todos os campos em "endereço".')
      }
    } else {
      alert('Por favor, confira os campos.')
    }
  }

  excluir(docente: any) {
    this.loginService.excluir(docente);
  }

  salvar() {
    this.loginService.salvar(this.docente);
  }

  buscaCep() {
    let inputCep = this.docente.endereco.cep;

    const viaCep = fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
    viaCep.then(r => r.json())
      .then(body => {

        this.docente.endereco.cidade = body.localidade;
        this.docente.endereco.logradouro = body.logradouro;
        this.docente.endereco.bairro = body.bairro;

      })
      .catch(() => {
        console.log("CEP errado!")
      })
  }

  validaEmail(email: string) {
    let parametroRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!parametroRegex.test(email)) {
    }
    return parametroRegex.test(email);
  }

  validaCpf(cpf: string) {
  cpf = cpf.replace(/[^\d]/g, "");
  this.docente.cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  validaTelefone(telefone: string) {
    const ajuste = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    let ajustado = telefone.replace(/[^0-9]/g, "").slice(0, 11);
    this.docente.telefone = ajustado.replace(ajuste, "($1)$2-$3");
  }

  calculaIdade(nascimento: string) {
    var birthday = +new Date(nascimento);
    return ~~((Date.now() - birthday) / (31557600000));
  }
}
