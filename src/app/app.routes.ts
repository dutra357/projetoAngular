import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { CadastrodocComponent } from './pages/cadastrodoc/cadastrodoc.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'docentes', component: DocentesComponent},
    {path: 'alunos', component: AlunosComponent},
    {path: 'cadastrodoc', component: CadastrodocComponent},
];
