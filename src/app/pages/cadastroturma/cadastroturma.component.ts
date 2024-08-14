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
  titulo = `Cadastro de Turmas`;

  isAdm: boolean = false;
  isDocente: boolean = false;
  docentes: any = []
  docenteLogado: string = '';

  turma = {
    id: '',
    nome: '',
    dataInicio: '',
    dataTermino: '',
    horario: '',
    professor: '',
  }

  ngOnInit() {
    this.docentes = this.loginService.getDocentes();

    if (this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Administrador') {
      this.isAdm = true;
    } else if (this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Docente') {
      this.isDocente = true
      this.docenteLogado = this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).nome;
    }

    let date = new Date();
    this.turma.dataInicio = date.toISOString().split('T')[0]
    this.turma.dataTermino = date.toISOString().split('T')[0]

    this.turma.horario = date.getHours() + ':' + date.getMinutes();
  }

  cadastrar() {
    if (
      (this.turma.nome.length > 8) && (this.turma.nome.length < 65) &&
      (this.turma.dataInicio) && (this.turma.dataTermino) &&
      (this.turma.horario) && (this.turma.professor)
    ) {

      console.log()
      this.turmaService.cadastrarTurma(this.turma)
      alert('Turma cadastrada com sucesso!')

    } else {
      alert('Por favor, confira os campos.')
    }
  }
}
