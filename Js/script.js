var header = document.getElementById('header');
var navegar2 = document.getElementById('navegar2');
var content = document.getElementById('content');

var showSidebar = false;



// Rotas
// function login() {
//   window.location.href = "/index.html";
// } 
exibeOcultaMsgCarrinhoVazio()

function exibeOcultaMsgCarrinhoVazio(){
  if(isCarrinhoVazio()){
  let msg = document.querySelector("#msg-carrinho-vazio")
  msg.classList.add("carrinho-vazio")
}
else{
  let msg = document.querySelector("#msg-carrinho-vazio")
  msg.classList.remove("carrinho-vazio")
}

}

//perfil


// Logo
function logo() {
  window.location.href = "/index.html";
}

function logout(){
  window.location.href = "/telas/login.html";
}

function car() {
  window.location.href = "/telas/carrinho.html";
}

function prdPrincipal() {
  window.location.href = "/telas/prdprincipal.html";
}

// Ecobags
function ecoBag() {
  window.location.href = "/telas/tdsEcobag.html";
}
// Bioobok
function bioBook() {
  window.location.href = "/telas/tdsBiobook.html";
}
// SelfCare
function selfcare() {
  window.location.href = "/telas/tdsSelfcare.html";
}
// Para Casa
function paraCasa() {
  window.location.href = "/telas/tdsCasa.html";
}

// Pay 
function pay() {
  window.location.href = "/telas/pay.html";
}

// Pay 
function review() {
  window.location.href = "/telas/review.html";
}


//mini carrossel
const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains('arrow-left');
    
    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0 ) {
      currentItem = maxItems -1;
    }

    items.forEach(item => item.classList.remove('current-item'));

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth"
    })

    items[currentItem].classList.add("current-item")

  })
})


function toggleSidebar()
{
  showSidebar = !showSidebar
  if(showSidebar)
  {
    navegar2.style.marginLeft = '-10vw';
    navegar2.style.animationName = 'showSidebar';
    content.style.filter = 'blur(2px)'

  }
  else
  {
    navegar2.style.marginLeft = '-100vw';
    navegar2.style.animationName = '';
    content.style.filter = ''
  }
}
function closeSidebar()
{
  if(showSidebar)
  {
    toggleSidebar();
  }
}



const perfil = document.querySelector('.dropdown');
const menu = document.querySelector('.menu');

perfil.onclick = () => {
  menu.classList.toggle('ativo');
}

document.querySelector("#abrir-cart").addEventListener("click", function(){
  document.querySelector("#cart").classList.toggle("aberto")

})

document.querySelector("#quantidade-mais").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade")
  $quantidade.textContent = Number($quantidade.textContent) + 1
  
})

document.querySelector("#quantidade-menos").addEventListener("click", function(){
  console.log("menos")
  let $quantidade = document.querySelector("#quantidade")
  let quantidadeNumber = Number($quantidade.textContent)
  if (quantidadeNumber > 0 ) {
    $quantidade.textContent = quantidadeNumber - 1
  }
  
})

document.querySelector("#quantidade-mais1").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade1")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-mais2").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade2")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-mais3").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade3")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos3").addEventListener("click", function(){
  console.log("menos")
  let $quantidade = document.querySelector("#quantidade3")
  let quantidadeNumber = Number($quantidade.textContent)
  if (quantidadeNumber > 0 ) {
    $quantidade.textContent = quantidadeNumber - 1
  }
  
})

document.querySelector("#quantidade-mais4").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade4")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos4").addEventListener("click", function(){
  console.log("menos")
  let $quantidade = document.querySelector("#quantidade4")
  let quantidadeNumber = Number($quantidade.textContent)
  if (quantidadeNumber > 0 ) {
    $quantidade.textContent = quantidadeNumber - 1
  }
  
})

document.querySelector("#quantidade-mais5").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade5")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos5").addEventListener("click", function(){
  console.log("menos")
  let $quantidade = document.querySelector("#quantidade5")
  let quantidadeNumber = Number($quantidade.textContent)
  if (quantidadeNumber > 0 ) {
    $quantidade.textContent = quantidadeNumber - 1
  }
  
})

document.querySelector("#quantidade-mais6").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade6")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos6").addEventListener("click", function(){
  console.log("menos")
  let $quantidade = document.querySelector("#quantidade6")
  let quantidadeNumber = Number($quantidade.textContent)
  if (quantidadeNumber > 0 ) {
    $quantidade.textContent = quantidadeNumber - 1
  }
  
})

document.querySelector("#quantidade-mais7").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade7")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos7").addEventListener("click", function(){
  console.log("menos")
  let $quantidade = document.querySelector("#quantidade7")
  let quantidadeNumber = Number($quantidade.textContent)
  if (quantidadeNumber > 0 ) {
    $quantidade.textContent = quantidadeNumber - 1
  }
  
})

document.querySelector("#quantidade-mais8").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade8")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos8").addEventListener("click", function(){
  console.log("menos")
  let $quantidade = document.querySelector("#quantidade8")
  let quantidadeNumber = Number($quantidade.textContent)
  if (quantidadeNumber > 0 ) {
    $quantidade.textContent = quantidadeNumber - 1
  }
  
})

document.querySelector("#quantidade-mais9").addEventListener("click", function(){
  console.log("mais")
  let $quantidade = document.querySelector("#quantidade9")
  $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos9").addEventListener("click", function(){
  console.log("menos")
  let $quantidade = document.querySelector("#quantidade9")
  let quantidadeNumber = Number($quantidade.textContent)
  if (quantidadeNumber > 0 ) {
    $quantidade.textContent = quantidadeNumber - 1
  }
  
})


  
document.querySelector("#adicionar-carrinho").addEventListener("click", function(){
   console.log("adicionar...")
   let titulo = document.querySelector("#produtoSelecionado #titulo-principal").textContent
   let preco = document.querySelector("#produtoSelecionado #preco1").textContent
   let quantidade = document.querySelector("#produtoSelecionado #quantidade").textContent
   let total = Number(preco.replace("R$", "")) * Number(quantidade)
   console.log(titulo, preco, quantidade, total.toFixed(2))

   let listaProdutos = document.querySelector("#cart ul")
   
   let produtoLi = document.createElement("li")

   let produtoDiv = document.createElement("div")
   produtoDiv.classList.add("produtos-cart")

   let imgProdutos = document.createElement("img")
   imgProdutos.classList.add("img-produtos")
   imgProdutos.src = "/Imgs/produtos img/caderno1.png"

   let produtoDescricao = document.createElement("div")
   produtoDescricao.classList.add("produto-descricao")

   let produtoH2 = document.createElement("h2")
   produtoH2.textContent = titulo

   let produtoSpanPreco = document.createElement("div")
   produtoSpanPreco.classList.add("produto-preco")
   produtoSpanPreco.textContent = preco + " x " + quantidade

   let produtoSpanPrecoTotal = document.createElement("div")
   produtoSpanPrecoTotal.classList.add("produto-preco-total")
   produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

   let produtoImgDeletar = document.createElement("img")
   produtoImgDeletar.classList.add("lixeira")
   produtoImgDeletar.src = "/Imgs/trash.png"

   produtoImgDeletar.addEventListener("click" , function(event){
    let $divProduto = event.target.parentElement.parentElement
    $divProduto.remove()
    exibeOcultaMsgCarrinhoVazio()
   })

   produtoLi.appendChild(imgProdutos)
   produtoDescricao.appendChild(produtoH2)
   produtoDescricao.appendChild(produtoSpanPreco)
   produtoDescricao.appendChild(produtoSpanPrecoTotal)
   
   produtoLi.appendChild(produtoDescricao)

   produtoDiv.appendChild(imgProdutos)
   produtoDiv.appendChild(produtoDescricao)
   produtoDiv.appendChild(produtoImgDeletar)

   produtoLi.appendChild(produtoDiv)

   listaProdutos.appendChild(produtoLi)

   exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho1").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado1 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado1 #preco1").textContent
  let quantidade = document.querySelector("#produtoSelecionado1 #quantidade1").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/caderno2.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
  produtoImgDeletar.classList.add("lixeira")
  produtoImgDeletar.src = "/Imgs/trash.png"

  produtoImgDeletar.addEventListener("click" , function(event){
   let $divProduto = event.target.parentElement.parentElement
   $divProduto.remove()
   exibeOcultaMsgCarrinhoVazio()

  })

  produtoLi.appendChild(imgProdutos)
  produtoDescricao.appendChild(produtoH2)
  produtoDescricao.appendChild(produtoSpanPreco)
  produtoDescricao.appendChild(produtoSpanPrecoTotal)
  
  produtoLi.appendChild(produtoDescricao)

  produtoDiv.appendChild(imgProdutos)
  produtoDiv.appendChild(produtoDescricao)
  produtoDiv.appendChild(produtoImgDeletar)

  produtoLi.appendChild(produtoDiv)

  listaProdutos.appendChild(produtoLi)

  exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho2").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado2 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado2 #preco2").textContent
  let quantidade = document.querySelector("#produtoSelecionado2 #quantidade2").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/caderno3.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
  produtoImgDeletar.classList.add("lixeira")
  produtoImgDeletar.src = "/Imgs/trash.png"

  produtoImgDeletar.addEventListener("click" , function(event){
   let $divProduto = event.target.parentElement.parentElement
   $divProduto.remove()
   exibeOcultaMsgCarrinhoVazio()

  })

  produtoLi.appendChild(imgProdutos)
  produtoDescricao.appendChild(produtoH2)
  produtoDescricao.appendChild(produtoSpanPreco)
  produtoDescricao.appendChild(produtoSpanPrecoTotal)
  
  produtoLi.appendChild(produtoDescricao)

  produtoDiv.appendChild(imgProdutos)
  produtoDiv.appendChild(produtoDescricao)
  produtoDiv.appendChild(produtoImgDeletar)

  produtoLi.appendChild(produtoDiv)

  listaProdutos.appendChild(produtoLi)

  exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho3").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado3 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado3 #preco3").textContent
  let quantidade = document.querySelector("#produtoSelecionado3 #quantidade3").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/creme1.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
   produtoImgDeletar.classList.add("lixeira")
   produtoImgDeletar.src = "/Imgs/trash.png"

   produtoImgDeletar.addEventListener("click" , function(event){
    let $divProduto = event.target.parentElement.parentElement
    $divProduto.remove()
    exibeOcultaMsgCarrinhoVazio()

   })

   produtoLi.appendChild(imgProdutos)
   produtoDescricao.appendChild(produtoH2)
   produtoDescricao.appendChild(produtoSpanPreco)
   produtoDescricao.appendChild(produtoSpanPrecoTotal)
   
   produtoLi.appendChild(produtoDescricao)

   produtoDiv.appendChild(imgProdutos)
   produtoDiv.appendChild(produtoDescricao)
   produtoDiv.appendChild(produtoImgDeletar)

   produtoLi.appendChild(produtoDiv)

   listaProdutos.appendChild(produtoLi)

   exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho4").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado4 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado4 #preco4").textContent
  let quantidade = document.querySelector("#produtoSelecionado4 #quantidade4").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/esponja.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
  produtoImgDeletar.classList.add("lixeira")
  produtoImgDeletar.src = "/Imgs/trash.png"

  produtoImgDeletar.addEventListener("click" , function(event){
   let $divProduto = event.target.parentElement.parentElement
   $divProduto.remove()
   exibeOcultaMsgCarrinhoVazio()

  })

  produtoLi.appendChild(imgProdutos)
  produtoDescricao.appendChild(produtoH2)
  produtoDescricao.appendChild(produtoSpanPreco)
  produtoDescricao.appendChild(produtoSpanPrecoTotal)
  
  produtoLi.appendChild(produtoDescricao)

  produtoDiv.appendChild(imgProdutos)
  produtoDiv.appendChild(produtoDescricao)
  produtoDiv.appendChild(produtoImgDeletar)

  produtoLi.appendChild(produtoDiv)

  listaProdutos.appendChild(produtoLi)

  exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho5").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado5 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado5 #preco5").textContent
  let quantidade = document.querySelector("#produtoSelecionado5 #quantidade5").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/sabonete1.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
  produtoImgDeletar.classList.add("lixeira")
  produtoImgDeletar.src = "/Imgs/trash.png"

  produtoImgDeletar.addEventListener("click" , function(event){
   let $divProduto = event.target.parentElement.parentElement
   $divProduto.remove()
   exibeOcultaMsgCarrinhoVazio()

  })

  produtoLi.appendChild(imgProdutos)
  produtoDescricao.appendChild(produtoH2)
  produtoDescricao.appendChild(produtoSpanPreco)
  produtoDescricao.appendChild(produtoSpanPrecoTotal)
  
  produtoLi.appendChild(produtoDescricao)

  produtoDiv.appendChild(imgProdutos)
  produtoDiv.appendChild(produtoDescricao)
  produtoDiv.appendChild(produtoImgDeletar)

  produtoLi.appendChild(produtoDiv)

  listaProdutos.appendChild(produtoLi)

  exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho6").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado6 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado6 #preco6").textContent
  let quantidade = document.querySelector("#produtoSelecionado6 #quantidade6").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/pente.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
  produtoImgDeletar.classList.add("lixeira")
  produtoImgDeletar.src = "/Imgs/trash.png"

  produtoImgDeletar.addEventListener("click" , function(event){
   let $divProduto = event.target.parentElement.parentElement
   $divProduto.remove()
   exibeOcultaMsgCarrinhoVazio()

  })

  produtoLi.appendChild(imgProdutos)
  produtoDescricao.appendChild(produtoH2)
  produtoDescricao.appendChild(produtoSpanPreco)
  produtoDescricao.appendChild(produtoSpanPrecoTotal)
  
  produtoLi.appendChild(produtoDescricao)

  produtoDiv.appendChild(imgProdutos)
  produtoDiv.appendChild(produtoDescricao)
  produtoDiv.appendChild(produtoImgDeletar)

  produtoLi.appendChild(produtoDiv)

  listaProdutos.appendChild(produtoLi)

  exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho7").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado7 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado7 #preco7").textContent
  let quantidade = document.querySelector("#produtoSelecionado7 #quantidade7").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/faca.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
  produtoImgDeletar.classList.add("lixeira")
  produtoImgDeletar.src = "/Imgs/trash.png"

  produtoImgDeletar.addEventListener("click" , function(event){
   let $divProduto = event.target.parentElement.parentElement
   $divProduto.remove()
   exibeOcultaMsgCarrinhoVazio()

  })

  produtoLi.appendChild(imgProdutos)
  produtoDescricao.appendChild(produtoH2)
  produtoDescricao.appendChild(produtoSpanPreco)
  produtoDescricao.appendChild(produtoSpanPrecoTotal)
  
  produtoLi.appendChild(produtoDescricao)

  produtoDiv.appendChild(imgProdutos)
  produtoDiv.appendChild(produtoDescricao)
  produtoDiv.appendChild(produtoImgDeletar)

  produtoLi.appendChild(produtoDiv)

  listaProdutos.appendChild(produtoLi)

  exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho8").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado8 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado8 #preco8").textContent
  let quantidade = document.querySelector("#produtoSelecionado8 #quantidade8").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/tabua.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
  produtoImgDeletar.classList.add("lixeira")
  produtoImgDeletar.src = "/Imgs/trash.png"

  produtoImgDeletar.addEventListener("click" , function(event){
   let $divProduto = event.target.parentElement.parentElement
   $divProduto.remove()
   exibeOcultaMsgCarrinhoVazio()

  })

  produtoLi.appendChild(imgProdutos)
  produtoDescricao.appendChild(produtoH2)
  produtoDescricao.appendChild(produtoSpanPreco)
  produtoDescricao.appendChild(produtoSpanPrecoTotal)
  
  produtoLi.appendChild(produtoDescricao)

  produtoDiv.appendChild(imgProdutos)
  produtoDiv.appendChild(produtoDescricao)
  produtoDiv.appendChild(produtoImgDeletar)

  produtoLi.appendChild(produtoDiv)

  listaProdutos.appendChild(produtoLi)

  exibeOcultaMsgCarrinhoVazio()

})

document.querySelector("#adicionar-carrinho9").addEventListener("click", function(){
  console.log("adicionar...")
  let titulo = document.querySelector("#produtoSelecionado9 #titulo-principal").textContent
  let preco = document.querySelector("#produtoSelecionado9 #preco9").textContent
  let quantidade = document.querySelector("#produtoSelecionado9 #quantidade9").textContent
  let total = Number(preco.replace("R$", "")) * Number(quantidade)
  console.log(titulo, preco, quantidade, total.toFixed(2))

  let listaProdutos = document.querySelector("#cart ul")
  
  let produtoLi = document.createElement("li")

  let produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produtos-cart")

  let imgProdutos = document.createElement("img")
  imgProdutos.classList.add("img-produtos")
  imgProdutos.src = "/Imgs/produtos img/tesoura2.png"

  let produtoDescricao = document.createElement("div")
  produtoDescricao.classList.add("produto-descricao")

  let produtoH2 = document.createElement("h2")
  produtoH2.textContent = titulo

  let produtoSpanPreco = document.createElement("div")
  produtoSpanPreco.classList.add("produto-preco")
  produtoSpanPreco.textContent = preco + " x " + quantidade

  let produtoSpanPrecoTotal = document.createElement("div")
  produtoSpanPrecoTotal.classList.add("produto-preco-total")
  produtoSpanPrecoTotal.textContent = "R$" + total.toFixed(2)

  let produtoImgDeletar = document.createElement("img")
  produtoImgDeletar.classList.add("lixeira")
  produtoImgDeletar.src = "/Imgs/trash.png"

  produtoImgDeletar.addEventListener("click" , function(event){
   let $divProduto = event.target.parentElement.parentElement
   $divProduto.remove()
   exibeOcultaMsgCarrinhoVazio()

  })

  produtoLi.appendChild(imgProdutos)
  produtoDescricao.appendChild(produtoH2)
  produtoDescricao.appendChild(produtoSpanPreco)
  produtoDescricao.appendChild(produtoSpanPrecoTotal)
  
  produtoLi.appendChild(produtoDescricao)

  produtoDiv.appendChild(imgProdutos)
  produtoDiv.appendChild(produtoDescricao)
  produtoDiv.appendChild(produtoImgDeletar)

  produtoLi.appendChild(produtoDiv)

  listaProdutos.appendChild(produtoLi)

  exibeOcultaMsgCarrinhoVazio()

})

if(isCarrinhoVazio()){
  let msg = document.querySelector("#msg-carrinho-vazio")
  msg.classList.add("carrinho-vazio")
}
else{
  let msg = document.querySelector("#msg-carrinho-vazio")
  msg.classList.remove("carrinho-vazio")
}

function isCarrinhoVazio(){
  return document.querySelectorAll("#cart li").length == 0
}