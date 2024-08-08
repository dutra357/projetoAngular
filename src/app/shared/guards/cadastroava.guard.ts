import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const cadastroavaGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(LoginService)

  if((service.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Administrador') || 
  service.getLogado(JSON.parse(sessionStorage['usuarioLogado'])).perfil == 'Docente') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
