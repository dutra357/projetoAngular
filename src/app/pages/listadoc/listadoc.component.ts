import { Component, inject } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardAlunoComponent } from "../../shared/card/card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadoc',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, CommonModule, FormsModule, CardAlunoComponent],
  templateUrl: './listadoc.component.html',
  styleUrl: './listadoc.component.scss'
})
export class ListadocComponent {

  constructor(private loginService: LoginService) { }
  router = inject(Router);

  parametro: string = '';

  docentes = this.loginService.getDocentes();
  docentesFiltrados: any;

  ngOnInit() {
    this.docentesFiltrados = [...this.docentes];
  }

  buscar(parametro: string) {
    if (parametro) {
      this.docentesFiltrados = this.docentes.filter(docente =>
        docente.nome.toLowerCase().includes(this.parametro.toLowerCase()) ||
        docente.email.toLowerCase().includes(this.parametro.toLowerCase()) ||
        docente.id.toString() == this.parametro
      );
    } else {
      this.docentesFiltrados = [...this.docentes];
    }
  }

  buttonClicked(event: Event) {
    this.router.navigate(['/cadastrodoc'], { state: { event } });
  }
}