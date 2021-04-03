let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseInt(gets());
let valor4 = parseInt(gets());
let valor5 = parseInt(gets());

let valores = [valor1,valor2,valor3,valor4,valor5];

let valoresPar = valores.filter(valor => (valor%2) == 0);
let valoresImpar = valores.filter(valor => (valor%2) != 0);
let valoresPositivos = valores.filter(valor => valor > 0);
let valoresNegativos = valores.filter(valor => valor < 0);

console.log(valoresPar.length + " valor(es) par(es)");
console.log(valoresImpar.length + " valor(es) impar(es)");
console.log(valoresPositivos.length + " valor(es) positivo(s)");
console.log(valoresNegativos.length + " valor(es) negativo(s)");

