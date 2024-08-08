import { Component } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listadoc',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, CommonModule, FormsModule],
  templateUrl: './listadoc.component.html',
  styleUrl: './listadoc.component.scss'
})
export class ListadocComponent {

  constructor(private loginService: LoginService) { }

  isAdm: boolean = false;
  parametro: string = '';

  totalDocentes: string = '';
  totalAlunos: string = '';
  totalTurmas: string = '';

  alunos = this.loginService.getAlunos();
  alunosFiltrados: any;

  ngOnInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    if (this.loginService.getLogado(email).perfil == 'Administrador') {
      this.isAdm = true;
    }
    this.alunosFiltrados = [...this.alunos];

   this.totalAlunos = this.loginService.getTotalAlunos().toString();
   this.totalDocentes = this.loginService.getTotalDocentes().toString();
   this.totalTurmas = this.loginService.getTotalTurmas().toString();
  }

  buscar(parametro: string) {
    if (parametro) {
      this.alunosFiltrados = this.alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(this.parametro.toLowerCase()) ||
        aluno.email.toLowerCase().includes(this.parametro.toLowerCase())
      );
    } else {
      this.alunosFiltrados = [...this.alunos];
    }
  }
}