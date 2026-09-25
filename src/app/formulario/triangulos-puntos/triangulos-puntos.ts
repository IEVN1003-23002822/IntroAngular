import { Component } from '@angular/core';

@Component({
  selector: 'triangulos-puntos',
  standalone: false,
  styleUrl: './triangulos-puntos.css',
  templateUrl: './triangulos-puntos.html',
})
export class TriangulosPuntos {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  x3: number = 0;
  y3: number = 0;
  area: number = 0;
  mensaje: string = '';
  esTriangulo: boolean = false;

  analizarPuntos(): void {
    let pX1 = Number(this.x1);
    let pY1 = Number(this.y1);
    let pX2 = Number(this.x2);
    let pY2 = Number(this.y2);
    let pX3 = Number(this.x3);
    let pY3 = Number(this.y3);

    let operacion = pX1 * (pY2 - pY3) + pX2 * (pY3 - pY1) + pX3 * (pY1 - pY2);
    
    let operacionPositiva = operacion;
    if (operacion < 0) {
      operacionPositiva = -operacion;
    }

    let areaCalculada = operacionPositiva / 2;

    if (areaCalculada > 0) {
      this.esTriangulo = true;
      this.area = areaCalculada;
      this.mensaje = 'Los puntos forman un triángulo.';
    } else {
      this.esTriangulo = false;
      this.area = 0;
      this.mensaje = 'Los tres puntos no forman un triángulo porque son colineales.';
    }
  }
}