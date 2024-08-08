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

  constructor(private loginService: LoginService) {
    let docenteRecebido = this.router.getCurrentNavigation()?.extras.state;
    console.log(docenteRecebido)

    // if (parametro) {
    //   this.buscar(parametro?.['parametro']);
    // }
  }

  docente = {
    id: '',
    nome: '',
    genero: '',
    nascimento: '',
    cpf: '',
    rg: '',
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
        this.loginService.cadastrar(this.docente)
        alert('Docente cadastrado com sucesso!')
        
      } else {
        alert('Por favor, preencha todos os campos em "endereço".')
      }
    } else {
      alert('Por favor, confira os campos.')
    }

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

    if(!parametroRegex.test(email)) {
    }
    return parametroRegex.test(email);
  }

  validaCpf(cpf: string) {

  }
}
