import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const cadastroturmaGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(LoginService)

  if((service.getLogado(JSON.parse(sessionStorage['usuarioLogado'])) == 'Administrador') || 
  service.getLogado(JSON.parse(sessionStorage['usuarioLogado'])) == 'Docente') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
