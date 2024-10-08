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

  loginService = inject(LoginService);
  titulo = `Cadastro de Avaliações/Notas`;

  constructor(private notasService: NotasService) { }

  isAdm: boolean = false;
  isDocente: boolean = false;
  docentes: any = [];
  alunos: any = [];
  materias: any = [];
  docenteLogado: string = '';

  avaliacao = {
    id: '',
    materia: '',
    data: '',
    avaliacao: '',
    docente: '',
    aluno: '',
    nota: ''
  }

  ngOnInit() {
    this.docentes = this.loginService.getDocentes();
    this.alunos = this.loginService.getAlunos();
    this.materias = this.notasService.getMateriasPossiveis();

    if (this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Administrador') {
      this.isAdm = true;
    } else if (this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Docente') {
      this.isDocente = true
      this.docenteLogado = this.loginService.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).nome;
    }

    this.avaliacao.data = new Date().toISOString().split('T')[0]
  }

  cadastrar() {
    if (
      (this.avaliacao.materia) && (this.avaliacao.data) &&
      (this.avaliacao.avaliacao) && (this.avaliacao.docente) &&
      (this.avaliacao.aluno) && (this.avaliacao.nota) && (parseFloat(this.avaliacao.nota) >= 0) &&
      (parseFloat(this.avaliacao.nota) <= 10)
    ) {
      this.notasService.cadastrarAvaliacao(this.avaliacao.aluno, this.avaliacao)
      alert('Nota cadastrada com sucesso!')

    } else {
      alert('Por favor, confira os campos.')
    }
  }
}