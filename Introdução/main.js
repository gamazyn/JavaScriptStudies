//Variáveis, alertas e console logs

// var nome = "Thiago Moreira";
// var idade = 23;
// var idade2 = 26;
// var n1 = (Math.random() * 10) + 1;
// var n2 = (Math.random() * 10) + 1;
// var frase = "Naruto pode ser duro as vezes...";
// //alert(nome + " tem " + idade + " anos");
// //alert(idade + idade2);
// console.log(nome);
// console.log(idade);
// // console.log(frase);
// // console.log(frase.replace("duro","puto"));
// console.log(frase.toUpperCase());
// console.log(n1 + n2);

//Array e Dicionário

/*
var lista =  ["maçã", "laranja", "abacaxi"];
console.log(lista);
console.log(lista[2]);
lista.push("goiaba");
console.log(lista);
lista.pop();
console.log(lista.reverse());
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" -- "))
*/

/*
var frutas = [{nome: "Maçã", cor: "Vermelho"} , {nome: "Uva" , cor: "Roxo"}]
alert(frutas[1].nome);
console.log(frutas[0].cor);
console.log(frutas);
*/

//Condicionais, Loops e Date

/*
var idade = prompt("Qual sua idade, mulambento?");
if (idade >= 18) {
    alert("ta velho heim, de maior");
}else{
    alert("sai daqui que tu é novo, seu sacana")
}
*/

/*
var count = 0;
while (count < 6){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var count;
for (count=0; count <=5; count++){
    alert(count);
}
*/

// var d3= new Date();
// alert(d3.getDate);
// alert(d3.getMonth);
// alert(d3.getMinutes);

// Funções

// function soma(n1 , n2) {
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// function validarIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }

function clicou(){
    //return alert("Valeu por ter clicado! <3");
    document.getElementById("soagradece").innerHTML = "<b>Valeu por ter clicado! <3</b>"
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=fpmTe3TDdVU")
   //window.location.href = "https://www.youtube.com/watch?v=fpmTe3TDdVU";
}

function trocar(element){
    //document.getElementById("trocatexto").innerHTML = "<b>Valeu por passar o mouse! <3</b>"
    element.innerHTML = "<b>Valeu por passar o mouse! <3</b>";
}

function voltar(element){
    //document.getElementById("trocatexto").innerHTML = "Passe o mouse aqui";
    element.innerHTML = "Passe o mouse aqui";
}

function loading(){
    alert("página carregada");
}

function mudar(element){
    console.log(element.value)
}


// var idade = prompt("Qual a sua idade?")
// console.log(validarIdade(idade));

// alert(soma(5,10));
// alert(setReplace("Vai Cavalo", "Cavalo", "Jabuti"));
