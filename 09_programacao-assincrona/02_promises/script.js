console.log("1");

//o código executas segundos depois, pois é um callback
//pois os consoles tem códigos menores isso faz com que executem primeiro
setTimeout(function () {
    console.log("4");
},2000);

console.log("2");
console.log("3");
console.log("5");