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
		// 'public readonly data: Date' equivalente a 'private _data: Date' associado a getter

		// IMPORTANTE: o ts lida com muita coisa q garante a regra
		// de negocio que definimos de "nao deixar sobrescrever", mas um objeto
		// como o do tipo Date (aqui no exemplo) permite usar o metodos proprios dele
		// como setDate() e mudar o valor - O ts nao tem como checar todo metodo próprio dele...

		// nesse caso nem essa versao nem a anterior garantem isso

		// SOLUÇÃO: "programação defensiva"
		// quando for um atributo primitivo deixa assim readonly, mas
		// quando for objeto, use combo anterior de private+getter porém retorne um clone dele!
		// Assim, se ele modificarem estarão modificando uma cópia e não o original.
		private _data: Date,
		public readonly quantidade: number,
		public readonly valor: number
	) { }

	get volume (): number {
		return this.quantidade * this.valor;
	}

	get data (): Date {
		const cloneData = new Date(this._data.getTime()); // esse novo objeto terá o mesmo valor do outro
		return cloneData;
	}
}