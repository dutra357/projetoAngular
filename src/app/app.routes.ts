import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { CadastrodocComponent } from './pages/cadastrodoc/cadastrodoc.component';
import { cadastrodocGuard } from './shared/guards/cadastrodoc.guard';
import { CadastroalComponent } from './pages/cadastroal/cadastroal.component';
import { cadastroalGuard } from './shared/guards/cadastroal.guard';
import { CadastroturmaComponent } from './pages/cadastroturma/cadastroturma.component';

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
    {path: 'cadastroturma', component: CadastroturmaComponent},
    {path: '**', redirectTo: 'login'},
];
