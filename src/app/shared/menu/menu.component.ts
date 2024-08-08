import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  perfil: string = '';

  isAluno: boolean = true;
  isDocente: boolean = true;
  isAdm: boolean = true;

  constructor(private loginService: LoginService) { }

  onInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    this.perfil = this.loginService.getLogado(email).perfil;
    switch (this.perfil) {
      case 'Aluno':
        this.isAluno = true;
        break;

      case 'Docente':
        this.isDocente = true;
        break;

      case 'Administrador':
        this.isAdm = true;
        break;
    }
  }

  logout() {
    this.loginService.logout();
    window.location.href = "/login";
  }

  notas() {
    //router-passar alunoLogado
    window.location.href = "/notas";
  }

  listarDocentes() {
    window.location.href = "/listaDocentes";
  }

  cadastroAvaliacao() {
    window.location.href = "/cadastroNotas";
  }

  cadastroTurmas() {
    window.location.href = "/cadastroTurmas";
  }

  cadastroAlunos() {
    window.location.href = "/cadastroAlunos";
  }

  cadastroDocentes() {
    window.location.href = "/cadastroDocentes";
  }

  inicio() {
    if (this.isDocente || this.isAdm ) {
      window.location.href = "/homeAdm";
    } else if (this.isAluno) {
      window.location.href = "/homeAluno";
    } else {
      alert('Por favor, faça um novo login!')
      window.location.href = "/login";
    }
  }


}
