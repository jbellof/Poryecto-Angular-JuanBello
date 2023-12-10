import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // Simulación de autenticación exitosa, puedes agregar tu lógica de autenticación real aquí
    const authenticationSuccessful = true;

    if (authenticationSuccessful) {
      this.router.navigate(['/home']);
    } else {
      // Manejo de autenticación fallida si es necesario
    }
  }
}
