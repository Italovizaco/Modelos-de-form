//pegar os elementos do html
const range = document.querySelector('#rangeValor');
const caixa = document.querySelector('#caixa');
caixa.textContent = range.value;
range.oninput = function(){
    caixa.textContent = this.value;
}   