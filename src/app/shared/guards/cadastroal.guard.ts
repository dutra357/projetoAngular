import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const cadastroalGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(LoginService)

  if(service.getLogado(JSON.parse(sessionStorage['usuarioLogado'])) == 'Administrador') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};
