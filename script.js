const listaDeItems = [];
let idItemContador = 0;
const lista = document.querySelector('.lista');

const apagarElemento = () => {
    
}

const itemApagarElemento = (idItemContador) => {
    const itemDelete = document.createElement('input');
    itemDelete.value = "X"; 
    itemDelete.setAttribute('type', 'button');
    itemDelete.setAttribute('class', 'removedor')
    itemDelete.addEventListener('click', () => apagarElemento(idItemContador))

    return itemDelete;
}

const criarElemento = (valor) => {
    listaDeItems[idItemContador] = valor; // armazenando o valor digitado em uma array na posicao idItemContador
    const elementoItem = document.createElement('li');
    elementoItem.innerText = listaDeItems [idItemContador];
    elementoItem.setAttribute('id', idItemContador);
    // após criar o elemento, vamos criar o botão de apagá-lo

    const apagarItem = itemApagarElemento(idItemContador);
    elementoItem.appendChild(apagarItem);

    lista.appendChild(elementoItem);
 
}

const adicionarElemento = (event) => {
    event.preventDefault();

    //Captura o valor
    const valor = event.target.elements[0].value;
    event.target.elements[0].value = ""; // para limpar o campo
    criarElemento(valor);
}

    const elementoForm = document.querySelector("form");
    elementoForm.addEventListener('submit', adicionarElemento); // chamará a função adicionarElemento quando ocorrer submit





