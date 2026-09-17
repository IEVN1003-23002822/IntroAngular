import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  distancia: number = 0;

  calcularDistancia(): void {
    let pX1 = Number(this.x1);
    let pY1 = Number(this.y1);
    let pX2 = Number(this.x2);
    let pY2 = Number(this.y2);

    this.distancia = Math.sqrt(Math.pow(pX2-pX1, 2) + Math.pow(pY2-pY1, 2));
  }
}