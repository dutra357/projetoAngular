import { Component, inject } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }
  router = inject(Router);

  login = {
    email: "",
    senha: ""
  };

  entrar() {
    if (this.login.email && this.login.senha) {
      if (this.loginService.login(this.login)) {
        if (this.loginService.getLogado(this.login.email).perfil == 'Administrador' ||
          this.loginService.getLogado(this.login.email).perfil == 'Docente') {
          this.router.navigate(['/docentes']);
        } else {
          this.router.navigate(['/alunos']);
        }
      } else {
        alert('Usuário ou senha incorretos!')
      }
    } else {
      alert('Campos em branco!');
    }
  }

  criar() {
    alert('Funcionalidade em construção!')
  }
  recuperar() {
    alert('Funcionalidade em construção!')
  }

}
