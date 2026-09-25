import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {
  palabra: string = '';
  vocales: number = 0;
  consonantes: number = 0;
  resultado: string = '';

  analizar(): void {
    this.vocales = 0;
    this.consonantes = 0;

    let textoLimpio = '';

    for (let c of this.palabra) {
      switch (c) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
          this.vocales++;
          break;
        default:
          if (c >= 'a') {
            if (c <= 'z') {
              this.consonantes++;
            }
          }
          break;
      }

      if (c !== ' ') {
        textoLimpio += c;
      }
    }

    let invertido = '';
    for (let c of textoLimpio) {
      invertido = c + invertido;
    }

    this.resultado = 'No es palíndromo';

    if (textoLimpio !== '') {
      if (textoLimpio === invertido) {
        this.resultado = 'Es palíndromo';
      }
    }
  }
} 