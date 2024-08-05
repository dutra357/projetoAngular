import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DocentesComponent } from './pages/docentes/docentes.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'docentes', component: DocentesComponent},
];
