import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title: string = 'Kevin Elias';

  duplicarnumero(a: number): number {
    return a * 2;
  }

  sumar(a: number, b: number): number {
    return a + b;
  }

  pelicula = {
    titulo: 'spider man',
    fechaLanzamiento: new Date(),
    precio: 2353
  };
}