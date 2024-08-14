import { Component, inject } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { CommonModule } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';
import { CardAlunoComponent } from "../../shared/card/card.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TurmasService } from '../../shared/services/turmas.service';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [MenuComponent, FormsModule, ToolbarComponent, CommonModule, CardAlunoComponent],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.scss'
})
export class DocentesComponent {

  constructor(private loginService: LoginService) { }
  router = inject(Router);
  turmasService = inject(TurmasService)

  perfil: string = ''
  titulo = `Início - bem-vindo!`;

  isAdm: boolean = false;
  parametro: string = '';

  totalDocentes: string = '';
  totalAlunos: string = '';
  totalTurmas: number = 0;

  alunos = this.loginService.getAlunos();
  alunosFiltrados: any;

  ngOnInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    this.perfil = this.loginService.getLogado(email).perfil;
    if (this.loginService.getLogado(email).perfil == 'Administrador') {
      this.isAdm = true;
    }
    this.alunosFiltrados = [...this.alunos];

   this.totalAlunos = this.loginService.getTotalAlunos().toString();
   this.totalDocentes = this.loginService.getTotalDocentes().toString();

   this.totalTurmas = this.turmasService.getStats();
  }

  buscar(parametro: string) {
    if (parametro) {
      this.alunosFiltrados = this.alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(this.parametro.toLowerCase()) ||
        aluno.email.toLowerCase().includes(this.parametro.toLowerCase()) ||
        aluno.telefone.toLowerCase().includes(this.parametro.toLowerCase())
      );
    } else {
      this.alunosFiltrados = [...this.alunos];
    }
  }

  buttonClicked(event: Event) {
    if(this.isAdm == true) {
      this.router.navigate(['/cadastroal'], { state: { event } });
    } else {
      this.router.navigate(['/cadastroava']);
    }
  }
}
