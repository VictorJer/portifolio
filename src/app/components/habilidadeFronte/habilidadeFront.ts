import { Component } from '@angular/core';

interface HabilidadeFronte {
  imagem: string;
  titulo: string;
  descricao: string;
}

@Component({
  imports: [],
  selector: 'app-habilidadesFront',
  templateUrl: './habilidadeFront.html',
})
export class HabilidadesFronte {
  public readonly habilidades: HabilidadeFronte[] = [
    {
      titulo: 'HTML',
      descricao: 'Linguagem de marcação para criação de páginas web.',
      imagem: 'https://skillicons.dev/icons?i=html',
    },
    {
      titulo: 'SCSS',
      descricao: 'Linguagem de folha de estilo para criação de páginas web.',
      imagem: 'https://skillicons.dev/icons?i=scss',
    },
    {
      titulo: 'TypeScript',
      descricao: 'Linguagem de programação para desenvolvimento de aplicações web.',
      imagem: 'https://skillicons.dev/icons?i=typescript',
    },
    {
      titulo: 'Angular',
      descricao: 'Framework para desenvolvimento de aplicações web.',
      imagem: 'https://skillicons.dev/icons?i=angular',
    },
    {
      titulo: 'RxJS',
      descricao: 'Biblioteca para programação reativa.',
      imagem: 'https://skillicons.dev/icons?i=rxjs',
    },
    {
      titulo: 'Cypress',
      descricao: 'Framework para testes de ponta a ponta.',
      imagem: 'https://skillicons.dev/icons?i=cypress',
    },
  ];
}
