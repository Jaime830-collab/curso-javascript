//remove um evento
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function msg() {
    console.log('Clicou no botão!');
}

btn1.addEventListener('click', msg);

//ao clicar no btn2 irá remover qualquer ação do btn1
btn2.addEventListener('click', function() {
    btn1.removeEventListener('click', msg);
    console.log('Parou de funcionar!!');
});
    




