/*🎬 Filme
* Título; 
* Sinopse; 
* Duração em minutos; 
* Ano de Lançamento; 
* Gênero (terror, suspense, ação, comédia etc);
* É um remake? nao */ 

/*1. Para o item que você decidiu, pense nas características que são importantes 
para construí-lo. Vamos usar estas características para definir exemplos destes 
objetos usando o código.
Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean; */

const titulo1 = "The Fast and the Furious"; //string
const sinopse1 = "The Fast and the Furious é uma franquia de mídia e Universo Compartilhado centrado em uma série de filmes de ação que estão amplamente preocupados com corridas de rua, assaltos, espiões e família. A franquia também inclui curtas-metragens, uma série de televisão, videogames e atrações de parques temáticos."
const duracao1 = 106
const anoDoFilme1 = 2001; //number 
const generoAcao1 = true //boolean 
const personagens1 = "Brian, Toretto, Mia, Letty, Vince, Leon, Jesse, Johnny"; //array de strings


// nesse caso, vai imprimir false, pois atorPrincipal3 === false

//console.table(`TíTulo: ${titulo} \nSinopse: ${sinopse} \nDuração: ${duracao}minutos \nData de lançamento: ${anoDoFilme} \nGênero: ${genero} \nPersonagens: ${personagens})`)



const titulo2 = "Pets"; //string
const sinopse2 = "Max, um cão da raça terrier, precisa aprender a conviver com Duke, o novo cão do seu dono. Os dois acabam na carrocinha e agora, juntos nas ruas de Nova York, conhecem um adorável coelho branco, líder de um exército de animais abandonados."
const duracao2 = 90
const anoDoFilme2 = 2016; //number 
const generoAcao2 = true //boolean 
const personagens2 = "Max, Duke, Gidget, Snowball, Chloe, Tiberius, Katie, Buddy, Mel, Pops, Norman"; //array de strings


// nesse caso, vai imprimir false, pois atorPrincipal3 === false

//console.table(`TíTulo: ${titulo} \nSinopse: ${sinopse} \nDuração: ${duracao}minutos \nData de lançamento: ${anoDoFilme} \nGênero: ${genero} \nPersonagens: ${personagens})`)
/*
const filmes = [titulo1,titulo2]
const sinopes = [sinopse1,sinopse2]
const duracao = [duracao1,duracao2]
const anoDoFilme = [anoDoFilme1,anoDoFilme2]
const generosAcao = [generoAcao1,generoAcao2]
const personagens = [personagens1,personagens2]
console.table(filmes,(sinopes),duracao,anoDoFilme,generosAcao,personagens)*/


const filme1 = [titulo1,sinopse1,duracao1,anoDoFilme1,generoAcao1,personagens1]
console.table(filme1)
const filme2 = [titulo2,sinopse2,duracao2,anoDoFilme2,generoAcao2,personagens2]
console.table(filme2)

// const converter = (minutos) => {
//   const horas = Math.floor(minutos/ 60);          
//   const min = minutos % 60;
//   const textoHoras = (`00${horas}`).slice(-2);
//   const textoMinutos = (`00${min}`).slice(-2);
  
//   return `${textoHoras }:${textoMinutos}`;
// };

// console.log(converter(70));


//MODO 2
const filmes00 = []
let filme01 = 
  {filme: "The Fast and The Furious",
  sinopse: "The Fast and the Furious é uma franquia de mídia e Universo Compartilhado",
  duracao: 106,
  anoDoFilme: 2001,
  generoAcao: true,
  personagens: "Brian, Toretto, Mia, Letty, Vince, Leon, Jesse, Johnny"}

 let filme02 =
  {filme: "Pets",
  sinopse: "Max, um cão da raça terrier, precisa aprender a conviver com Duke, o novo cão do seu dono.",
  duracao: 90,
  anoDoFilme: 2016,
  generoAcao: true,
  personagens: "Max, Duke, Gidget, Snowball, Chloe, Tiberius, Katie, Buddy, Mel, Pops, Norman"}

if (filme01.generoAcao == true){
  filmes00.push(filme01)
} else {
  alert (`O filme ${filme01.filme} não é de ação`)
}

if (filme02.generoAcao == true){
  filmes00.push(filme02)
} else {
  alert (`O filme ${filme02.filme} não é de ação`)
}
console.log(filmes00)


const mediaDuracao = ((duracao1+duracao2)/2)
console.log("Duração média dos filmes:", mediaDuracao)

const generoAcao = generoAcao1 && generoAcao2;
console.log("Gênero de Ação?",generoAcao);

for(filmeco of filmes00){
  for(propriedade in filmeco){
    console.log(`${propriedade}: \n${filmeco[propriedade]}`)
  }console.log("\n")
}

//Semana 3 . 3
function chamadaDeFilme(filme03) {
  filme03 = {
  filme: "Guardiões da Galáxia",
  sinopse: "O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres.",
  duracao: 122,
  anoDoFilme: 2014,
  generoAcao: true,
  personagens: "Senhor das Estrelas, Gamora, Baby Groot, Rocket Raccoon, Drax O Destruidor, Nebula"
};
return `Venha assistir ao filme ${filme03.filme}, de ${filme03.anoDoFilme}, estrelado por ${filme03.personagens}.
\n Sinopse: ${filme03.sinopse}
\n Duração: ${filme03.duracao} minutos.`
}

function retornaChamadaDeFilme(filme) {
  filme = {
nome: 'O Diabo Veste Prada',
ano: 2006,
diretor: 'David Frankel',
atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
};
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

//Semana 3 . 4
let filmesDestaque = [
	{ nome: "The Fast and The Furious", ano: 2001, duracao: 106},
	{ nome: "Pets", ano: 2016, duracao: 90},
	{ nome: "Guardiões da Galáxia", ano: 2014, duracao: 122},
]

function filmesEmDestaque(filmesDestaque) {
    const destaques = filmesDestaque.filter(filmesDestaque => filmesDestaque.ano > 2015)
    return destaques
}

//Semana x
function buscar (){
  var input,filtro,menu,menuItens,links;
  input = document.getElementById("search");
  filtro = input.value.toLowerCase();
  menu = document.getElementById("menu");
  menuItens = menu.getElementsByTagName("article");
  for (var i = 0; i < menuItens.length; i++) {
    links = menuItens[i].getElementsByTagName("p")[0];
    if(links.innerHTML.toLowerCase().indexOf(filtro)>-1){
      menuItens[i].style.display="";
    }else{
      menuItens[i].style.display="none"
    }
    
  }
}

const buttonGenero = document.getElementById("buttonGenero");

  buttonGenero.addEventListener("click", () => {
    const generoContainer = document.getElementById("generos");
    generoContainer.classList.toggle("hideBackground");
    
  });


function generosFilme (){
  var input,filtro,menu,menuItens,links;
  input = document.getElementById("pesquisa");
  filtro = input.value.toUpperCase();
  menu = document.getElementById("generos");
  menuItens = menu.getElementsByTagName("li");
  for (var i = 0; i < menuItens.length; i++) {
    links = menuItens[i].getElementsByTagName("a")[0];
    if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
      menuItens[i].style.display="";
    }else{
      menuItens[i].style.display="none"
    }
    
  }
}