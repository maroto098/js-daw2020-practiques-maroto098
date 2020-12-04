window.onload = () => {
  let parrafo = document.getElementById('parrafo');

  function esperar(time) {
    let promesa = new Promise((resolver, rechazar) => {
      let time1 = setTimeout(() => {
        //clearTimeout(time2);
        resolver('xxxx');
      }, time);
      let time2 = setTimeout(() => {
        rechazar('xxxxxx');
      }, time * 2);
    });

    return promesa;
  }

  esperar(5000)
    .then(() => {
      parrafo.innerHTML = 'tiempo concluido';
    })
    .catch(() => {
      parrafo.innerHTML = 'algo pasa';
    });
};
