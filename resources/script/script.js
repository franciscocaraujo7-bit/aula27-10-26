// let body = document.querySelector("body");
// let h1 = document.querySelector("h1");
// body.removeChild(h1);


// let h1 = document.querySelector("#trocarCor");


 //esse comando serve para eu acessar a propiedade de cores da fonte html.
// h1.style.color = "green";
// h1.style.backgrond = "blue";
// h1.style.height = "50px";

//SEMPRE QUE QUISER ALTERAR OU SABER UM CALOR DO CSS DE UM ELEMENTO HTML
//nomeDaTag.stile.atributo 

// let body = document.querySelector("body")
//  body.style.backgroundColor = "blue";


//  var h1 = document.querySelector("h1");
//  var paragrafo = document.querySelector("p");

//  paragrafo.innerText = h1.textContent;

 
// let cor = prompt("Escolha uma cor: vermelho, azul, amarelo, verde, laranja ou roxo");

// switch (cor) {
//   case "vermelho":
//   case "azul":
//   case "amarelo":
//     alert("cor primaria escolhida");
//     break;

//   case "verde":
//   case "laranja":
//   case "roxo":
//     alert("cor secundaria");
//     break;

//   default:
//     alert("Cor inválida");
// }


// let button = document.querySelector("button");

// button.addEventListener("click",function (){
//     console.log("Cliquei")
// });


  document.querySelector("button").addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});
