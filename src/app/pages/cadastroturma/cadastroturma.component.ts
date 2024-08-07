import { Component, inject } from '@angular/core';
import { TurmasService } from '../../shared/services/turmas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-cadastroturma',
  standalone: true,
  imports: [FormsModule, CommonModule, ToolbarComponent, MenuComponent],
  templateUrl: './cadastroturma.component.html',
  styleUrl: './cadastroturma.component.scss'
})
export class CadastroturmaComponent {

  constructor(private turmaService: TurmasService) { }
  loginService = inject(LoginService);

  isAdm: boolean = false;
  isDocente: boolean = false;
  docentes: any = []
  docenteLogado: string = '';

  ngOnInit() {
    this.docentes = this.loginService.getDocentes();

    if (this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Administrador') {
      this.isAdm = true;
    } else if (this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Docente') {
      this.isDocente = true
      this.docenteLogado = this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).nome;
    }

  }

  turma = {
    id: 0,
    nome: '',
    data: '',
    horario: '',
    professor: '',
  }

  cadastrar() {
    let inputs = document.getElementsByTagName("input");
    let turmas: string[] = []

    for (let i = inputs.length - 1; i >= 0; i--) {
      if (inputs[i].type === "checkbox" && inputs[i].checked) {
        turmas.push(inputs[i].value);
      }
    }

    if (
      (this.turma.nome.length > 8) && (this.turma.nome.length < 65)
    ) {
      this.turmaService.cadastrarTurma(this.turma)
      alert('Turma cadastrado com sucesso!')

    } else {
      alert('Por favor, confira os campos.')
    }
  }
}
