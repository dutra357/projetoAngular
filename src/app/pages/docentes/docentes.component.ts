import { Component, inject } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { CommonModule } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';
import { CardAlunoComponent } from "../../shared/card/card.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [MenuComponent, FormsModule, ToolbarComponent, CommonModule, CardAlunoComponent],
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.scss'
})
export class DocentesComponent {

  constructor(private loginService: LoginService) { }
  router = inject(Router);

  isAdm: boolean = false;
  parametro: string = '';

  totalDocentes: string = '';
  totalAlunos: string = '';
  totalTurmas: string = '';

  alunos = this.loginService.getAlunos();
  alunosFiltrados: any;

  ngOnInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    if (this.loginService.getLogado(email).perfil == 'Administrador') {
      this.isAdm = true;
    }
    this.alunosFiltrados = [...this.alunos];

   this.totalAlunos = this.loginService.getTotalAlunos().toString();
   this.totalDocentes = this.loginService.getTotalDocentes().toString();
   this.totalTurmas = this.loginService.getTotalTurmas().toString();
  }

  buscar(parametro: string) {
    if (parametro) {
      this.alunosFiltrados = this.alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(this.parametro.toLowerCase()) ||
        aluno.email.toLowerCase().includes(this.parametro.toLowerCase())
      );
    } else {
      this.alunosFiltrados = [...this.alunos];
    }
  }

  buttonClicked(event: Event) {
    if(this.isAdm == true) {
      this.router.navigate(['/cadastroal'], { state: { event } });
    } else {
      console.log('lancar notas!')
      // this.router.navigate(['/lancarnotas'], { state: { event } });
    }
  }
}
