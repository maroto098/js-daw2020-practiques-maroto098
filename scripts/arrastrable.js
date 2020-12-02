window.onload = () => {
  let capa1 = document.getElementById('capa1');
  let capa2 = document.getElementById('capa2');

  capa1.addEventListener('drag', trasparentar, false);
  capa1.addEventListener('dragend', opacar, false);

  capa2.addEventListener('dragenter', fondoRojo, false);
  capa2.addEventListener('dragleave', fondoBlanco, false);
  capa2.addEventListener('dragover', function (e) {
    e.preventDefault();
  });
  capa2.addEventListener('drop', success, false);

  function success() {
    fondoAmarillo();
    capa2.innerHTML = '¡Lo has logrado! ';
    document.body.removeChild(capa1);
  }

  function trasparentar(ev) {
    ev.currentTarget.style.opacity = 0.5;
  }
  function opacar(ev) {
    ev.currentTarget.style.opacity = 1;
  }

  function fondoRojo() {
    capa2.style.backgroundColor = 'red';
  }
  function fondoBlanco() {
    capa2.style.backgroundColor = 'white';
  }
  function fondoAmarillo() {
    capa2.style.backgroundColor = 'yellow';
  }
};
