import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuarioIngresado: string = '';
  contrasenaIngresada: string = '';

  private readonly usuarioCorrecto: string = 'admin';
  private readonly contrasenaCorrecta: string = '12345';

  mensaje: string = '';

  iniciarSesion(): void {
    if (this.usuarioIngresado !== this.usuarioCorrecto) {
      this.mensaje = 'El nombre de usuario no es válido.';
    } else if (this.contrasenaIngresada !== this.contrasenaCorrecta) {
      this.mensaje = 'La contraseña no es válida.';
    } else {
      this.mensaje = `Bienvenido al sistema, ${this.usuarioCorrecto}.`;
    }
  }
}