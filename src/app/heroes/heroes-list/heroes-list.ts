import { Component } from '@angular/core';
import { IHeroe } from '../heroe';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWith: number = 40;
  imageMargin: number = 2;
  muestraImagen: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  heroes: IHeroe[] = [
    {
      imagen: 'https://dragonball-api.com/characters/vegeta_normal.webp',
      nombre: 'vegeta',
      descripcion: 'onda vital',
      race: 'saiyan',
      ki: 9000,
    },
    {
      imagen: 'https://dragonball-api.com/characters/goku_normal.webp',
      nombre: 'goku',
      descripcion: 'kame hame ha',
      race: 'saiyan',
      ki: 8000,
    },
    {
      imagen: 'https://dragonball-api.com/characters/picolo_normal.webp',
      nombre: 'piccolo',
      descripcion: 'Es verde',
      race: 'no se',
      ki: 7000,
    },
    {
      imagen: 'https://dragonball-api.com/characters/bulma.webp',
      nombre: 'bulma',
      descripcion: 'Es chida',
      race: 'humana',
      ki: 0,
    },
  ];
}