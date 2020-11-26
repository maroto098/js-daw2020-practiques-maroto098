window.onload = () => {
  document.body.addEventListener('keyup', cambiaFondo, false);
};

function cambiaFondo(ev) {
  if (ev.altKey) {
    if (ev.key == 'F12') {
      let fondo = document.getElementById('imagen');
      fondo.style.backgroundImage = 'url("https://source.unsplash.com/random")';
    }
  }
}
