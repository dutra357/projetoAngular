import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @Input() titulo: string = '';

  constructor(private loginService: LoginService) { }

  usrLogado: string = '';
  perfil: string = '';

  ngOnInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);

    this.usrLogado = this.loginService.getLogado(email).nome;
    this.perfil = this.loginService.getLogado(email).perfil;
  }

  logout() {
    this.loginService.logout();
  }

}
