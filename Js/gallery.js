const imagens = document.querySelectorAll(".thumbnails img");
const divPrincipal = document.querySelector("#container img");

function trocar(e) {
  const imgAtual = e.currentTarget;
  divPrincipal.src = imgAtual.src;
}

function mudarImg(item) {
  item.addEventListener("click", trocar);
}

imagens.forEach(mudarImg);

document
  .querySelector(".plus")
  .addEventListener("click", function () {
    console.log("mais");
    let $quantidade = document.querySelector(".valor-atualG");
    if ($quantidade.textContent < 10){
        $quantidade.textContent = Number($quantidade.textContent) + 1;
    }
  });

document
  .querySelector(".minus")
  .addEventListener("click", function () {
    console.log("menos");
    let $quantidade = document.querySelector(".valor-atualG");
    let quantidadeNumber = Number($quantidade.textContent);
    if (quantidadeNumber > 0) {
      $quantidade.textContent = quantidadeNumber - 1;
    }
  });
