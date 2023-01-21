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

  const identidade = document.getElementById("identidade")
identidade.innerHTML += ' R.'