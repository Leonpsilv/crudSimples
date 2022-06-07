const listaDeItems = [];
let idItemContador = 0;
const conteudoLista = document.querySelector('.conteudoLista');

const criarElemento = (elementoItem) => {
    conteudoLista.innerHTML = `
        <h3 class="tituloLista">Sua lista :)</h3>
        <ul class="listaNova">
        </ul>
    `;
    const listaNova = document.querySelector('.listaNova');
    listaNova.appendChild(elementoItem);

}

const criarArrayLista = (valor) => {
    const idItem = idItemContador;
    listaDeItems[idItemContador] = valor; // armazenando o valor digitado em uma array na posicao idItemContador
    const elementoItem = document.createElement('li');
    elementoItem.innerText = listaDeItems [idItemContador];
    elementoItem.setAttribute('id', idItemContador);

    idItemContador++;
    criarElemento(elementoItem);
}

const adicionarElemento = (event) => {
    event.preventDefault();

    //Captura o valor
    const valor = event.target.elements[0].value;
    event.target.elements[0].value = ""; // para limpar o campo

    criarArrayLista(valor);
}

    const elementoForm = document.querySelector("form");
    elementoForm.addEventListener('submit', adicionarElemento); // chamará a função adicionarElemento quando ocorrer submit





