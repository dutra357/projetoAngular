import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-aluno.component.html',
  styleUrl: './card-aluno.component.scss'
})
export class CardAlunoComponent {

  isAdm: boolean = false;
  isDocente: boolean = false;

  constructor(private loginService: LoginService) { }

  @Input() nome: string = '';
  @Input() idade: string = '';
  @Input() contato: string = '';


  ngOnInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    if (this.loginService.getLogado(email) == 'Administrador') {
      this.isAdm = true;
    } else if (this.loginService.getLogado(email) == 'Docente') {
      this.isDocente = true;
    }
  }

  verMais() {
    console.log('IMPLEMENTAR paraq ADM!')
  }

  lancarNota() {
    console.log('IMPLEMENTAR paraq DOCENTE!')
    }

}
