import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { CommonModule } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [MenuComponent, ToolbarComponent, CommonModule],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.scss'
})
export class DocentesComponent {

isAdm: boolean = false;

constructor(private loginService: LoginService) {}

ngOnInit() {
  let email = JSON.parse(sessionStorage['usuarioLogado']);
  if (this.loginService.getLogado(email) == 'Administrador') {
    this.isAdm = true;
  }
}

}
