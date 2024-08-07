import { Component } from '@angular/core';
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrodoc',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, FormsModule],
  templateUrl: './cadastrodoc.component.html',
  styleUrl: './cadastrodoc.component.scss'
})
export class CadastrodocComponent {

  docente = {
    nome: '',
    genero: '',
    nascimento: '',
    cpf: '',
    rg: '',
    naturalidade: '',
    estadoCivil: '',
    telefone: '',
    email: '',
    senha: '',
    endereco: {
      cep: '',
      cidade: '',
      logradouro: '',
      numero:'',
      complemento: '',
      bairro: '',
      referencia: '',
    },
    materias: []
  }

  buscaCep(){
    let inputCep = this.docente.endereco.cep;

    const viaCep = fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
    viaCep.then(r => r.json())
    .then(body => {

      this.docente.endereco.cidade = body.localidade;
      this.docente.endereco.logradouro = body.logradouro;

    })
    .catch(() => {
      console.log("CEP errado!")
    })
    .finally(()=>{
        console.log("CEP encontrado!")
    })
}
}
