const listaDeItems = [];
let idItemContador = 0;
const conteudoLista = document.querySelector('.conteudoLista');
const lista = document.querySelector('.lista');

const apagarElemento = (idItemContador) => {
    console.log(listaDeItems);
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
    conteudoLista.innerHTML=`
    <h3 class="tituloLista">Sua lista :)</h3>
    <ul class="listaNova">
        
    </ul>
    `;
    
}

const criarElemento = (valor) => {
    limpaLista();
    idItemContador = listaDeItems.length; // para impedir que o contador some valores antigos a cada vez que um item é adicionado
    listaDeItems[idItemContador] = valor; // armazenando o valor digitado em uma array na posicao idItem
    
    listaDeItems.forEach((elemento) => {
        
        const elementoItem = document.createElement('li');
        elementoItem.innerText = elemento;
        elementoItem.setAttribute('id', listaDeItems.length);
            // após criar o elemento, vamos criar o botão de apagá-lo:
        const apagarItem = itemApagarElemento(idItemContador);
        elementoItem.appendChild(apagarItem);
        const listaNova = document.querySelector('.listaNova');
        listaNova.appendChild(elementoItem);
        //console.log(idItemContador);
        idItemContador++;
    });
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





