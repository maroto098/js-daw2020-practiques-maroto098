window.onload = () => {
  let cookies = document.cookie;
  let h1 = document.getElementById('h1');
  if (cookies == '') {
    document.cookie = 'visitas = 1';
    h1.innerHTML = 'Es la primera vez que visitas esta página';
  } else {
    let visitas = cookies.split('=')[1];

    document.cookie = 'visitas = ' + ++visitas;

    h1.innerHTML = 'Has visitado esta página ' + visitas + ' veces';

    if (visitas == 10) {
      document.cookie = 'visitas=;expires=0';
    }
  }
};
