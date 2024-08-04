import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  usuarioLogado: string = '';

  isAluno: boolean = false;
  isDocente: boolean = false;
  isAdm: boolean = false;

  constructor(private loginService: LoginService) { }

  onInit() {
    this.usuarioLogado = this.loginService.getPerfil();
    switch (this.usuarioLogado) {
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
  

  verificaPerfil(): boolean {
    return true;
  }

}
