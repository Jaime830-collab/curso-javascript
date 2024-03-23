let promessa = Promise.resolve(new Error('Algo deu errado!'));

console.log('hakuna matata');

promessa.then(value => {console.log(value)})
        .catch(reason => {console.log('falhou ' + reason);
})
