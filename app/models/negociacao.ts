export class Negociacao {

	/*
	(forma mais verbosa)

	private data: Date;
	private quantidade: number;
	private valor: number;

	constructor(data: Date, quantidade: number, valor: number) {
		this.data = data;
		this.quantidade = quantidade;
		this.valor = valor;
	}
	*/

	// se colocar private/public nos parametros do construtor 
	// o ts já cria esses atributos
	constructor(
		// equivalente a 'private _data: Date' associado a getter 
		public readonly data: Date,
		public readonly quantidade: number,
		public readonly valor: number
	) { }

	get volume(): number {
		return this.quantidade * this.valor;
	}
}