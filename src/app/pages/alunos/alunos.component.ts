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

}
