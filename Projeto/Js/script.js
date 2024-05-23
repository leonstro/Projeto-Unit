var header = document.getElementById('header');
var navegar2 = document.getElementById('navegar2');
var content = document.getElementById('content');
var showSidebar = false;

// Rotas
// function login() {
//   window.location.href = "/projeto/index.html";
// } 

function logout(){
  window.location.href = "/projeto/telas/login.html";
}

function car() {
  window.location.href = "/projeto/telas/carrinho.html";
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
  
