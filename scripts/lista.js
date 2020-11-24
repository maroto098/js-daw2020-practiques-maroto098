window.onload = () => {
  setTimeout(pregunta, 3000);

  function pregunta() {
    result = window.confirm('Quieres ordenar la lista ?');

    if (result) {
      setListaOrdenada(getLista());
    }
  }

  function getLista() {
    let nodos = document.getElementById('lista').children;
    let lista = [];

    for (nodo of nodos) {
      lista.push(nodo.innerHTML);
    }

    lista.sort((elem1, elem2) => elem1.localeCompare(elem2, 'es'));

    return lista;
  }

  function limpiarLista() {
    document.body.removeChild(document.getElementById('lista'));

    let ul = document.createElement('ul');
    ul.id = 'lista';
    document.body.appendChild(ul);
  }

  function setListaOrdenada(lista) {
    limpiarLista();
    let ul = document.getElementById('lista');

    for (palabra of lista) {
      let li = document.createElement('li');
      li.innerHTML = palabra;
      ul.appendChild(li);
    }
  }
};
