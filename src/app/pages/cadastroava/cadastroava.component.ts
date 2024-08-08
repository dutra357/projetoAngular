import { Component, inject } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { LoginService } from '../../shared/services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotasService } from '../../shared/services/notas.service';

@Component({
  selector: 'app-cadastroava',
  standalone: true,
  imports: [MenuComponent, ToolbarComponent, FormsModule, CommonModule],
  templateUrl: './cadastroava.component.html',
  styleUrl: './cadastroava.component.scss'
})
export class CadastroavaComponent {

  constructor(private notasService: NotasService) { }
  loginService = inject(LoginService);

  isAdm: boolean = false;
  isDocente: boolean = false;
  docentes: any = [];
  alunos: any = [];
  materias: any = [];
  docenteLogado: string = '';

  avaliacao = {
    id: '',
    nomeMateria: '',
    data: '',
    nomeAvaliacao: '',
    professor: '',
    aluno: '',
    nota: ''
  }

  ngOnInit() {
    this.docentes = this.loginService.getDocentes();
    this.alunos = this.loginService.getAlunos();
    this.materias = this.notasService.getMaterias();

    if (this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Administrador') {
      this.isAdm = true;
    } else if (this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Docente') {
      this.isDocente = true
      this.docenteLogado = this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).nome;
    }
  }

  cadastrar() {
    if (
      (this.avaliacao.nomeMateria) && (this.avaliacao.data) &&
      (this.avaliacao.nomeAvaliacao) && (this.avaliacao.professor) && 
      (this.avaliacao.aluno) && (this.avaliacao.nota) && (parseFloat(this.avaliacao.nota) >= 0) &&
      (parseFloat(this.avaliacao.nota) <= 10)
    ) {

      this.notasService.cadastrarAvaliacao(this.avaliacao)
      alert('Nota cadastrada com sucesso!')

    } else {
      alert('Por favor, confira os campos.')
    }
  }
}