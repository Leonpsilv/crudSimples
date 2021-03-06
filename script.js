const listaDeItens = [];
let idItemContador = 0;
const conteudoLista = document.querySelector('.conteudoLista');
const lista = document.querySelector('.lista');

const apagarElemento = (idItem) => {
    //const listaNova = document.querySelector('.listaNova');
    listaDeItens.splice(idItem, 1); // para remover o item desejado

    criarLista();
}

const itemApagarElemento = (idItem) => {
    const itemDelete = document.createElement('input');
    itemDelete.value = "X"; 
    itemDelete.setAttribute('type', 'button');
    itemDelete.setAttribute('class', 'removedor')
    itemDelete.addEventListener('click', () => apagarElemento(idItem))

    return itemDelete;
}
const limpaLista = () => {
    if(listaDeItens.length === 0){
        conteudoLista.innerHTML=`
        <h3 class="tituloLista">Sua lista :)</h3>
        <ul class="listaNova">
            <p class="TextoListaVazia">A lista está vazia :( </p>
        </ul>
        `;
    }
}

const criarLista = (valor) => {
    conteudoLista.innerHTML=`
    <h3 class="tituloLista">Sua lista :)</h3>
    <ul class="listaNova">
        
    </ul>
    `;

    idItemContador = listaDeItens.length; // para impedir que o contador some valores antigos a cada vez que um item é adicionado
    if (valor){
        listaDeItens[idItemContador] = valor; // armazenando o valor digitado em uma array na posicao idItem
    }
    if(!listaDeItens){
        limpaLista();
        return;
    }
    listaDeItens.forEach((elemento) => {

        const idItem = listaDeItens.indexOf(elemento); 

        const elementoItem = document.createElement('li');
        elementoItem.innerText = elemento;
        elementoItem.setAttribute('id', idItem); // para que cada id seja igual ao index do item em listaDeItems

            // após criar o elemento, vamos criar o botão de apagá-lo:
        
        const apagarItem = itemApagarElemento(idItem);
        elementoItem.appendChild(apagarItem);
        const listaNova = document.querySelector('.listaNova');
        listaNova.appendChild(elementoItem);
        //console.log(idItemContador);
        idItemContador++;
    });
    limpaLista();
}

const adicionarElemento = (event) => {
    event.preventDefault();

    //Captura o valor
    const valor = event.target.elements[0].value;
    event.target.elements[0].value = ""; // para limpar o campo

    criarLista(valor);
}

    const elementoForm = document.querySelector("form");
    elementoForm.addEventListener('submit', adicionarElemento); // chamará a função adicionarElemento quando ocorrer submit





