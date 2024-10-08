import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { CadastrodocComponent } from './pages/cadastrodoc/cadastrodoc.component';
import { cadastrodocGuard } from './shared/guards/cadastrodoc.guard';
import { CadastroalComponent } from './pages/cadastroal/cadastroal.component';
import { cadastroalGuard } from './shared/guards/cadastroal.guard';
import { CadastroturmaComponent } from './pages/cadastroturma/cadastroturma.component';
import { cadastroturmaGuard } from './shared/guards/cadastroturma.guard';
import { CadastroavaComponent } from './pages/cadastroava/cadastroava.component';
import { cadastroavaGuard } from './shared/guards/cadastroava.guard';
import { ListadocComponent } from './pages/listadoc/listadoc.component';
import { NotasComponent } from './pages/notas/notas.component';
import { notasGuard } from './shared/guards/notas.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'docentes', component: DocentesComponent},
    {path: 'alunos', component: AlunosComponent},
    {
        path: 'cadastrodoc', component: CadastrodocComponent,
        canActivate: [cadastrodocGuard]
    },
    {
        path: 'cadastroal', component: CadastroalComponent,
        canActivate: [cadastroalGuard]
    },
    {
        path: 'cadastroturma', component: CadastroturmaComponent,
        canActivate: [cadastroturmaGuard]
    },
    {
        path: 'cadastroava', component: CadastroavaComponent,
        canActivate: [cadastroavaGuard]
    },
    {
        path: 'listadoc', component: ListadocComponent,
        canActivate: [cadastrodocGuard]
    },
    {
        path: 'notas', component: NotasComponent,
        canActivate: [notasGuard]
    },
    {path: '**', redirectTo: 'login'},
];
