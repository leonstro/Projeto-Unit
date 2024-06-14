// produto 1
document.querySelector(".contador-mais").addEventListener("click", function () {
  console.log("mais");
  let $quantidade = document.querySelector(".valor-atualC");
  if ($quantidade.textContent < 10) {
    $quantidade.textContent = Number($quantidade.textContent) + 1;
  }
});

document
  .querySelector(".contador-menos")
  .addEventListener("click", function () {
    console.log("menos");
    let $quantidade = document.querySelector(".valor-atualC");
    let quantidadeNumber = Number($quantidade.textContent);
    if (quantidadeNumber > 0) {
      $quantidade.textContent = quantidadeNumber - 1;
    }
  });

//produto 2
document
  .querySelector(".contador-mais2")
  .addEventListener("click", function () {
    console.log("mais");
    let $quantidade = document.querySelector(".valor-atualC2");
    if ($quantidade.textContent < 10) {
      $quantidade.textContent = Number($quantidade.textContent) + 1;
    }
  });

document
  .querySelector(".contador-menos2")
  .addEventListener("click", function () {
    console.log("menos");
    let $quantidade = document.querySelector(".valor-atualC2");
    let quantidadeNumber = Number($quantidade.textContent);
    if (quantidadeNumber > 0) {
      $quantidade.textContent = quantidadeNumber - 1;
    }
  });

//produto 3
document
  .querySelector(".contador-mais3")
  .addEventListener("click", function () {
    console.log("mais");
    let $quantidade = document.querySelector(".valor-atualC3");
    if ($quantidade.textContent < 10) {
      $quantidade.textContent = Number($quantidade.textContent) + 1;
    }
  });

document
  .querySelector(".contador-menos3")
  .addEventListener("click", function () {
    console.log("menos");
    let $quantidade = document.querySelector(".valor-atualC3");
    let quantidadeNumber = Number($quantidade.textContent);
    if (quantidadeNumber > 0) {
      $quantidade.textContent = quantidadeNumber - 1;
    }
  });

//produto 4
document
  .querySelector(".contador-mais4")
  .addEventListener("click", function () {
    console.log("mais");
    let $quantidade = document.querySelector(".valor-atualC4");
    if ($quantidade.textContent < 10) {
      $quantidade.textContent = Number($quantidade.textContent) + 1;
    }
  });

document
  .querySelector(".contador-menos4")
  .addEventListener("click", function () {
    console.log("menos");
    let $quantidade = document.querySelector(".valor-atualC4");
    let quantidadeNumber = Number($quantidade.textContent);
    if (quantidadeNumber > 0) {
      $quantidade.textContent = quantidadeNumber - 1;
    }
  });

//produto 5
document
  .querySelector(".contador-mais5")
  .addEventListener("click", function () {
    console.log("mais");
    let $quantidade = document.querySelector(".valor-atualC5");
    if ($quantidade.textContent < 10) {
      $quantidade.textContent = Number($quantidade.textContent) + 1;
    }
  });

document
  .querySelector(".contador-menos5")
  .addEventListener("click", function () {
    console.log("menos");
    let $quantidade = document.querySelector(".valor-atualC5");
    let quantidadeNumber = Number($quantidade.textContent);
    if (quantidadeNumber > 0) {
      $quantidade.textContent = quantidadeNumber - 1;
    }
  });
