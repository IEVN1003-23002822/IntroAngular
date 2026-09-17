import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  /* num1:string=''
  num2:string=''
  resultado:number=0

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }

  num3:string=''
  num4:string=''
  resultadoMultiplicacion:number=0

  multiplicar():void{
    this.resultadoMultiplicacion=parseInt(this.num3)*parseInt(this.num4)
  } */

    Numero1:number=0;        
    Numero2:number=0;
    operacion:string = '';
    resultado:number=0;

    calcular():void{
      let num1=Number(this.Numero1)
      let num2=Number(this.Numero2)

      switch (this.operacion) {
        case 'sumar':
          this.resultado = num1 + num2;
          break;
        case 'restar':
          this.resultado = num1 - num2;
          break;
        case 'multiplicar':
          this.resultado = num1 * num2;
          break;
      }

    }



}
