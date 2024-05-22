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
  
