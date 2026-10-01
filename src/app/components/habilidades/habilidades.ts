interface Habilidade {
  titulo: string;
  descricao: string;
}

class Habilidades {
  public itens: Habilidade[] = [
    {
      titulo: 'Git/Github',
      descricao: 'Controle de versão e colaboração em projetos de software.',
    },
  ];
}
