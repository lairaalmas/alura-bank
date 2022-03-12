import { NegociacaoController } from "./controllers/negociacao-controller.js"; // nao esquecer .js no final
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
