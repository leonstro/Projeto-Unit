const imagens = document.querySelectorAll('.thumbnails img');
const divPrincipal = document.querySelector('#container img');



function trocar(e) {
    const imgAtual = e.currentTarget;
    divPrincipal.src = imgAtual.src;
}

function mudarImg(item) {
    item.addEventListener('click', trocar);
}

imagens.forEach(mudarImg);