//iserindo texto em uma teg vazia do html
let paragrafoSemTexto = document.getElementById("sem-texto");

let texto = document.createTextNode("Inserir este texto no paragrafo");

paragrafoSemTexto.appendChild(texto);