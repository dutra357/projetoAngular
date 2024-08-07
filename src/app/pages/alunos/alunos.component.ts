import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { NotasService } from '../../shared/services/notas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [MenuComponent, ToolbarComponent, CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent {

  titulo: string = 'HOME Aluno - Bem-vindo!';
  notas: any;
  materias: any;

  constructor(private notasService: NotasService) { }

  ngOnInit() {
    this.notas = this.notasService.getTodasNotas();
    this.materias = this.notasService.getMaterias();
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
