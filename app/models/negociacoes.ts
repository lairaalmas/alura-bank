import { Negociacao } from "./negociacao.js";

// Essa classe irá restringir acesso a uma lista (generics)
export class Negociacoes {
  
  private negociacoes: Array<Negociacao> = []; // Array do tipo negociacao

  adiciona (negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // Regra de negocio: nao pode modificar array (ReadOnlyArray)
  lista (): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

}