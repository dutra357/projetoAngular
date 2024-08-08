import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(private loginService: LoginService) { }

  titulo: string = '';

  usuarioNome: string = '';
  usuarioPerfil : string = '';

  onInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    this.usuarioNome = this.loginService.getLogado(email).nome;
    this.usuarioPerfil = this.loginService.getLogado(email).perfil;
    
    console.log(this.usuarioNome);
    console.log('this.usuarioNome');
  }

  logout() {
    this.loginService.logout();
    }

}
