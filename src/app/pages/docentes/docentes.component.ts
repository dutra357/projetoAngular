import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { CommonModule } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';
import { CardAlunoComponent } from "../../shared/card-aluno/card-aluno.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [MenuComponent, FormsModule, ToolbarComponent, CommonModule, CardAlunoComponent],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.scss'
})
export class DocentesComponent {

  constructor(private loginService: LoginService) { }

  isAdm: boolean = false;
  parametro: string = '';
  alunos: any;

  ngOnInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    if (this.loginService.getLogado(email) == 'Administrador') {
      this.isAdm = true;
    }

    this.alunos = this.loginService.getAlunos();
  }

  buscar(parametro: string) {

  }

}
