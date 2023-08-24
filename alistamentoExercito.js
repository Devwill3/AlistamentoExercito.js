let nome 
let idade
let peso
let altura


nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
peso = parseFloat(prompt("DIgite seu peso"))
altura = parseFloat(prompt("Digite sua altura"))

let anoNasc
anoNasc = 2022.3 - idade

console.log("Olá " + nome + ", você tem " + idade + " e nasceu em " + anoNasc + ", pesa " + peso + "kg")