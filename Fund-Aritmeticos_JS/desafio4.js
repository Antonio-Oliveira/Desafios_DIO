let valor = parseInt(gets());
let cem, cinquenta, vinte, dez, cinco, dois, um;
let resto = valor;

cem = parseInt(resto/100);
resto = resto%100;

cinquenta = parseInt(resto/50);
resto = resto%50;

vinte = parseInt(resto/20);
resto = resto%20;

dez = parseInt(resto/10);
resto = resto%10;

cinco = parseInt(resto/5);
resto = resto%5;

dois = parseInt(resto/2);
resto = resto%2;

um = parseInt(resto/1);
resto = resto%1;
 
console.log(valor)
console.log(cem + " nota(s) de R$ 100,00");
console.log(cinquenta + " nota(s) de R$ 50,00");
console.log(vinte + " nota(s) de R$ 20,00");
console.log(dez + " nota(s) de R$ 10,00")
console.log(cinco + " nota(s) de R$ 5,00");
console.log(dois + " nota(s) de R$ 2,00");
console.log(um + " nota(s) de R$ 1,00");
