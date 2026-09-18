import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  figura: string = 'cuadrado';
  Valor1: number = 0;
  Valor2: number = 0;
  Area: number = 0;

  calcularArea(): void {
    let val1 = Number(this.Valor1);
    let val2 = Number(this.Valor2);

    switch (this.figura) {
      case 'cuadrado':
        this.Area = val1*val1;
        break;
      case 'triangulo':
        this.Area = (val1*val2)/2;
        break;
      case 'rectangulo':
        this.Area = val1*val2;
        break;
      case 'poligono':
        this.Area = (val1*val2)/2;
        break;
      case 'circulo':
        this.Area = 3.1416 * (val1*val1);
        break;
      default:
        this.Area = 0;
        break;
    }
  }
}