import { Component, inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  perfil: string = '';

  isAluno: boolean = false;
  isDocente: boolean = false;
  isAdm: boolean = false;

  recolhido: boolean = true;

  constructor(private loginService: LoginService) { }
  router = inject(Router);

  ngOnInit() {
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

  recolher() {
    this.recolhido = !this.recolhido;
  }

  logout() {
    this.loginService.logout();
  }


  notas() {
    window.location.href = "/notas";
  }

  listarDocentes() {
    window.location.href = "/listadoc";
  }

  cadastroAvaliacao() {
    window.location.href = "/cadastroava";
  }

  cadastroTurmas() {
    window.location.href = "/cadastroturma";
  }

  cadastroAlunos() {
    window.location.href = "/cadastroal";
  }

  cadastroDocentes() {
    window.location.href = "/cadastrodoc";
  }

  inicio() {
    if (this.isDocente || this.isAdm ) {
      window.location.href = "/docentes";
    } else if (this.isAluno) {
      window.location.href = "/alunos";
    } else {
      alert('Por favor, faça um novo login!')
      window.location.href = "/login";
    }
  }


}
