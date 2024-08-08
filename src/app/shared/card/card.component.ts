import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardAlunoComponent {

  isAdm: boolean = false;
  isDocente: boolean = false;

  constructor(private loginService: LoginService) { }
  router = inject(Router);

  @Input() nome: string = '';
  @Input() idade: string = '';
  @Input() contato: string = '';
  @Input() id: string = '';

  @Input() usuarioSelecionado: any;
  
  @Output('buttonClick') evento = new EventEmitter();

  ngOnInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    if (this.loginService.getLogado(email).perfil == 'Administrador') {
      this.isAdm = true;
    } else if (this.loginService.getLogado(email).perfil == 'Docente') {
      this.isDocente = true;
    }
  }

  acao() {
    if (this.router.url === '/listadoc') {
      this.evento.emit(this.usuarioSelecionado);
    } else if (this.router.url === '/docentes') {
      this.evento.emit(this.usuarioSelecionado);
    }
  }
}