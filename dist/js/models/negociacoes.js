// Essa classe irá restringir acesso a uma lista (generics)
export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Array do tipo negociacao
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Regra de negocio: nao pode modificar array (ReadOnlyArray)
    lista() {
        return this.negociacoes;
    }
}
