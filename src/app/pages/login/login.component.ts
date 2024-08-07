import { Component } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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

  login = {
    email: "",
    senha: ""
  };

  entrar() {
    if (this.login.email && this.login.senha) {
      if(this.loginService.login(this.login)) {

        //window.location.href = "/home";
        //this.router.navigate(["alunos"])
        console.log('Redirecionando...!')

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
