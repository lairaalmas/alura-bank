import { Negociacao } from "./negociacao.js";

// Essa classe irá restringir acesso a uma lista (generics)
export class Negociacoes {

  /*
    (forma mais verbosa)

    private negociacoes: Array<Negociacao> = []; 
  */
  private negociacoes: Negociacao[] = []; // Array do tipo negociacao

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // Regra de negocio: nao pode modificar array (ReadOnlyArray)
  /*
    (forma mais verbosa)

    lista(): ReadonlyArray<Negociacao> {
  */
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

}