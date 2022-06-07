const adicionarElemento = (event) => {
    event.preventDefault();

    //Captura o valor
    const valor = event.target.elements[0].value;
    console.log(valor);
    event.target.elements[0].value = ""; // para limpar o campo
}
    const elementoForm = document.querySelector("form");
    elementoForm.addEventListener('submit', adicionarElemento);





