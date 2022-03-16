# Alura Bank

### Projeto desenvolvido durante o curso [TypeScript parte 1: Evoluindo seu JavaScript](https://cursos.alura.com.br/course/typescript-evoluindo-javascript) da Alura:

- HTML
- CSS
- TypeScript / Javascript
- npm
- json 
- Padrão MVC

---

# Sobre o processo de criação desse arquivo:

## Como usar o arquivo inicial da aula:

- Ao abrir diretório da aula, escreva o código a seguir no terminal para instalar todas dependências: 

`npm install`

-  Para abrir um "live server" no navegador padrão digite:

`npm run start`

**Obs.:** o script *server* está definido no arquivo *package.json*.

## Conhecendo os diretórios:

#### 1) `./app/`contém arquivos Typescript

- Arquivo principal: `./app/app.ts` (arquivo principal)

- Arquivos TS são divididos usando o padrão MVC (Model View Controller) e seguem o padrão `meuArquivo.s`
	- `./app/models/`
	- `./app/views/`
	- `./app/controllers/`

#### 2) `./dist/`contém arquivos Javascript (os arquivos typescript em ./app/ vem para ca depois de compilados)

- `/dist/js/`

## Gerenciando compilador typescript

#### 1) `tsconfig.json`: 

Para tudo funcionar é preciso existir um arquivo `tsconfig.json`na raiz do porjeto. Este arquivo gerenciar a compilação do typescript.

**Configuração mínima para este arquivo:**

````
{
  "compilerOptions": {
    "outDir": "dist/js",
    "target": "ES6",
  },
  "include": ["app/**/*"]
}
````

#### 2) `package.json`:

Com o `tsconfig.json` definido, é preciso adicionar o script para compilar ao `package.json`:

````
{
  ...
  "script": {
    ...,
    "compile": "tsc"
  }
}
````

**Obs.:** `tsc`significa *typescript compiler*

## Outros scripts:


- `npm run server`abre *live serve* no navegador

- `npm run compile` compila typescript

- `npm run watch` recompila o codigo sempre que ha modificação

- **[Principal]** `npm run start` (junção do `watch` com `server`)
