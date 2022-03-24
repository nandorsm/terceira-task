//Estrutura Sequencial
//01
// let nome = prompt("Qual seu nome? ")
// alert("Olá " + nome)
// console.log(nome)


//02
// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o segundo número"))
// console.log((num1+num2))
// alert("Soma: " + (num1+num2))


//03
// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o segundo número"))
// let media = (num1 + num2) / 2
// console.log("Média: " + media)


//04
// let anoNasc = parseInt(prompt("Digite o ano de nascimento"))
// const date = new Date();
// const currentYear = date.getFullYear()
// console.log(currentYear - anoNasc)


//05
// let valorHora = parseFloat(prompt("Quanto você ganha por Hora?"))
// let horasMes = parseFloat(prompt("Quantas horas você trabalha por Mês?"))
// let totSalario = valorHora * horasMes
// console.log("Seu salário é de: " + totSalario)


//06
// let = fahrenheit = parseInt(prompt("Digite a temperatura em Fahrenheit"))
// let celsius = 5 * ((fahrenheit - 32) / 9)
// console.log(celsius)



//Estrutura de Decisão
//01
// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o primeiro número"))
// if(num1 > num2){
//     console.log(num1)
// }else{
//     console.log(num2)
// }


//02
// let valor = parseInt(prompt("Digite um valor para saber se é positivo ou negativo"))
// if(valor >= 0){
//     console.log("Valor: POSITIVO")
// }else{
//     console.log("Valor: NEGATIVO")
// }


//03
// let sexo = prompt("Digite seu sexo:[F/M] ").toUpperCase()
// console.log(sexo);
// if(sexo === "F"){
//     console.log("Feminino")
// }else if(sexo === "M"){
//     console.log("Masculino")
// }else{
//     console.log("Valor INVÁLIDO")
// }


//04
// let nota1 = parseFloat(prompt("Digite a primeira Nota"))
// let nota2 = parseFloat(prompt("Digite a segunda Nota"))
// let media = (nota1 + nota2) / 2
// console.log(media)
// if(media >= 7 && media < 10){
//     console.log("Aprovado!")
// }else if(media < 7){
//     console.log("Reprovado!")
// }else if(media == 10){
//     console.log("Aprovado com Distinção!")
// }else{
//     console.log("Nota Inválida")
// }


//05
// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o segundo número"))
// let num3 = parseInt(prompt("Digite o terceiro número"))
// console.log(num1, num2, num3)
// if(num1 >= num2 && num1 >=num3){
//     maior = num1
// }else if(num2 >= num1 && num2 >= num3){
//     maior = num2
// }else{
//     maior = num3
// }

// if(num1 <= num2 && num1 <=num3){
//     menor = num1
// }else if(num2 <= num1 && num2 <= num3){
//     menor = num2
// }else{
//     menor = num3
// }
// console.log("Maior: " + maior)
// console.log("Menor: " + menor)


//06
// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o segundo número"))
// let soma = num1+num2;
// if(num1 % 2 === 0){
//     console.log(num1 + " é PAR")
// }else{
//     console.log(num1 + " é IMPAR")
// }

// if(num2 % 2 === 0){
//     console.log(num2 + " é PAR")
// }else{
//     console.log(num2 + " é IMPAR")
// }

// if(soma % 2 === 0){
//     console.log(soma + " é PAR")
// }else{
//     console.log("A soma dos dois números é " + soma + " que é IMPAR")
// }