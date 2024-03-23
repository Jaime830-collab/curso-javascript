//manipulando o atributo a

let ancora = document.querySelector('footer a');

console.log(ancora.getAttribute('href'));

let link = 'https://www.linkedin.com/in/jaime-vaz-nogueira-9b8697249/'

ancora.setAttribute('href', link);

console.log(ancora.getAttribute('href'));

