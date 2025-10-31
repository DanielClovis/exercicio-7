let numero = prompt("Digite o numero")
let numerico = Number(numero)

alert(numerico.toLocaleString('pt-br' , {style: 'currency', currency: "BRL"}))

