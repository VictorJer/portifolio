import { Component } from '@angular/core';

interface Habilidade {
  imagem: string;
  titulo: string;
  descricao: string;
}

@Component({
  imports: [],
  selector: 'app-habilidades',
  templateUrl: './habilidades.html',
})
export class Habilidades {
  public readonly habilidades: Habilidade[] = [
    {
      titulo: 'Git/Github',
      descricao: 'Controle de versão e colaboração em projetos de software.',
      imagem: 'https://skillicons.dev/icons?i=github',
    },
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
      titulo: 'Docker',
      descricao:
        'Plataforma para desenvolvimento, entrega e operação de aplicações em contêineres.',
      imagem: 'https://skillicons.dev/icons?i=docker',
    },
    {
      titulo: 'Azure',
      descricao: 'Plataforma de computação em nuvem da Microsoft.',
      imagem: 'https://skillicons.dev/icons?i=azure',
    },
  ];
}
