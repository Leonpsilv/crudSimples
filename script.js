const listaDeItems = [];
let idItemContador = 0;
const conteudoLista = document.querySelector('.conteudoLista');
const lista = document.querySelector('.lista');

const apagarElemento = (idItemContador) => {
    console.log('apagar :' + idItemContador);
}

const itemApagarElemento = (idItemContador) => {
    const itemDelete = document.createElement('input');
    itemDelete.value = "X"; 
    itemDelete.setAttribute('type', 'button');
    itemDelete.setAttribute('class', 'removedor')
    itemDelete.addEventListener('click', () => apagarElemento(idItemContador))

    return itemDelete;
}
const limpaLista = () => {
    //console.log('listaLimpa');
}

const criarElemento = (valor) => {
    limpaLista();
    //const idItem = idItemContador;
    listaDeItems[idItemContador] = valor; // armazenando o valor digitado em uma array na posicao idItemContador

    listaDeItems.forEach((elemento) => {
        const elementoItem = document.createElement('li');
        elementoItem.innerText = elemento;
        elementoItem.setAttribute('id', idItemContador);
            // após criar o elemento, vamos criar o botão de apagá-lo:
        const apagarItem = itemApagarElemento(idItemContador);
        elementoItem.appendChild(apagarItem);
        
        lista.appendChild(elementoItem);
        //console.log(idItemContador);
        idItemContador++;
    });
    //idItemContador++;
}
const verificaLista = () => {
    if(idItemContador !== 0) {
        document.querySelector('.TextoListaVazia').innerText = '';
    }
    
}

const adicionarElemento = (event) => {
    event.preventDefault();

    //Captura o valor
    const valor = event.target.elements[0].value;
    event.target.elements[0].value = ""; // para limpar o campo

    criarElemento(valor);
    //console.log(listaDeItems);///////////////////

    verificaLista();
}

    const elementoForm = document.querySelector("form");
    elementoForm.addEventListener('submit', adicionarElemento); // chamará a função adicionarElemento quando ocorrer submit





