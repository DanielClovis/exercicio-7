let v1 = Number(prompt("Digite o primeiro valor: "));
let v2 = Number(prompt("Digite o segundo valor: "));
let v3 = Number(prompt("Digite o terceiro valor: "));

let media = (v1 + v2 + v3) / 3;

let mediaFormatada = media.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

alert("A média dos valores é: " + mediaFormatada);
