import { Component, inject } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { TurmasService } from '../../shared/services/turmas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroal',
  standalone: true,
  imports: [FormsModule, CommonModule, ToolbarComponent, MenuComponent],
  templateUrl: './cadastroal.component.html',
  styleUrl: './cadastroal.component.scss'
})
export class CadastroalComponent {

  router = inject(Router);
  statusEdicao: boolean = false;
  
  constructor(private loginService: LoginService) {
    let alunoRecebido = this.router.getCurrentNavigation()?.extras.state?.['event'];

    if (alunoRecebido) {
      this.statusEdicao = true;

      this.aluno.nome = alunoRecebido.nome;
      this.aluno.genero = alunoRecebido.genero;
      this.aluno.nascimento = alunoRecebido.nascimento;
      this.aluno.cpf = alunoRecebido.cpf;
      this.aluno.rg = alunoRecebido.rg;
      this.aluno.expeditor = alunoRecebido.expeditor;
      this.aluno.naturalidade = alunoRecebido.naturalidade;
      this.aluno.telefone = alunoRecebido.telefone;
      this.aluno.email = alunoRecebido.email;
      this.aluno.senha = alunoRecebido.senha;
      this.aluno.endereco.cep = alunoRecebido.endereco.cep;
      this.aluno.endereco.cidade = alunoRecebido.endereco.cidade;
      this.aluno.endereco.logradouro = alunoRecebido.endereco.logradouro;
      this.aluno.endereco.numero = alunoRecebido.endereco.numero;
      this.aluno.endereco.complemento = alunoRecebido.endereco.complemento;
      this.aluno.endereco.bairro = alunoRecebido.endereco.bairro;
      this.aluno.endereco.referencia = alunoRecebido.endereco.referencia;
      this.aluno.turmas = alunoRecebido.turmas;
    }
  }

  aluno = {
    id: '',
    nome: '',
    genero: '',
    nascimento: '',
    cpf: '',
    rg: '',
    expeditor: '',
    naturalidade: '',
    telefone: '',
    email: '',
    senha: '',
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

  serviceTurmas = inject(TurmasService);
  turmas = this.serviceTurmas.getTurmas();


  cadastrar() {
    let inputs = document.getElementsByTagName("input");
    let turmas: string[] = []

    for (let i = inputs.length - 1; i >= 0; i--) {
      if (inputs[i].type === "checkbox" && inputs[i].checked) {
        turmas.push(inputs[i].value);
      }
    }
    this.aluno.turmas = turmas;

    if (
      (this.aluno.nome.length > 8) && (this.aluno.nome.length < 65) &&
      (this.aluno.genero) && (this.aluno.nascimento) &&
      (this.aluno.rg.length <= 20) && (this.aluno.expeditor.length < 9) &&
      (this.aluno.telefone) && (this.validaEmail(this.aluno.email)) &&
      (this.aluno.naturalidade.length > 8) && (this.aluno.naturalidade.length < 65) &&
      (this.aluno.senha.length > 7) && (turmas.length != 0)
    ) {
      if (
        (this.aluno.endereco.cep) && (this.aluno.endereco.bairro) &&
        (this.aluno.endereco.cidade) && (this.aluno.endereco.logradouro) &&
        (this.aluno.endereco.numero)
      ) {
        this.loginService.cadastrar(this.aluno)
        alert('Aluno cadastrado com sucesso!')
        
      } else {
        alert('Por favor, preencha todos os campos em "endereço".')
      }
    } else {
      alert('Por favor, confira os campos.')
    }

  }

  excluir(aluno: any) {
    // this.loginService.excluir(docente);
  }

  salvar() {
    // this.loginService.salvar(docente);
  }

  buscaCep() {
    let inputCep = this.aluno.endereco.cep;

    const viaCep = fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
    viaCep.then(r => r.json())
      .then(body => {

        this.aluno.endereco.cidade = body.localidade;
        this.aluno.endereco.logradouro = body.logradouro;
        this.aluno.endereco.bairro = body.bairro;

      })
      .catch(() => {
        console.log("CEP errado!")
      })
  }

  validaEmail(email: string) {
    let parametroRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!parametroRegex.test(email)) {
    }
    return parametroRegex.test(email);
  }

  validaCpf(cpf: string) {

  }

}
