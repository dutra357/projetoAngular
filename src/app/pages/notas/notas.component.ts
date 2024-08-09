import { Component, inject } from '@angular/core';
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { NotasService } from '../../shared/services/notas.service';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, CommonModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.scss'
})
export class NotasComponent {

  titulo: string = 'HOME Aluno - Bem-vindo!';
  notas: any;

  constructor(private notasService: NotasService) { }
  loginService = inject(LoginService)


  ngOnInit() {
    let email = JSON.parse(sessionStorage['usuarioLogado']);
    let nome = this.loginService.getLogado(email).nome;
    this.notas = this.notasService.getTodasNotasAluno(nome);
    
    for(let nota of this.notas) {
      console.log(this.notasService.getDataAjustada(nota.data))
    }
  }

  paginaNotas() {
    console.log('PAGINA DE NOTAS!')
  }



  //Cursos extras - meramente ilustrativo
  opcoesCurso(curso: any) {
    let element = document.getElementById('result');

    element!.innerHTML = `
                                  <p><b>Curso: </b>${curso.nome}</p>
                            <p><b>Disponibilidade: </b>${curso.dispobibilidade}</p>
                            <p><b>Disciplinas: </b>${curso.disciplinas}</p>
                            `
  }

  cursosExtras = [
    {
      nome: 'Java',
      dispobibilidade: 'Disponível',
      disciplinas: '1. Lógica de programação..',
      url: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000',
      alt: 'Curso Java'
    },
    {
      nome: 'Excel',
      dispobibilidade: 'Disponível',
      disciplinas: '1. Recursos básicos..',
      url: 'https://img.icons8.com/?size=100&id=GthFctfEG5cW&format=png&color=000000',
      alt: 'Curso Excel'
    },
    {
      nome: 'Oracle DB',
      dispobibilidade: 'Disponível',
      disciplinas: '1. Fundamentos de SQL..',
      url: 'https://img.icons8.com/?size=100&id=8ljTDYUEydbJ&format=png&color=000000',
      alt: 'Curso Oracle DataBase'
    }
  ]

}