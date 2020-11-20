function Punto(cordX, cordY) {
  this.x = isNaN(cordX) ? 0 : cordX;
  this.y = isNaN(cordY) ? 0 : cordY;

  this.cambiar = (cordX, cordY) => {
    this.x = cordX;
    this.y = cordY;
  };
  this.copia = () => {
    return new Punto(this.x, this.y);
  };
  this.suma = (otroPunto) => {
    return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
  };
}

window.onload = () => {
  let a = new Punto('a', 'a');
  let b = new Punto(10, 10);
  let c = new Punto(20, 20);
  let d = b.copia();
  let e = b.suma(c);

  console.log('Punto a con cordenadas a,a');
  console.log(a.x + ' ' + a.y);
  console.log('Punto b con cordenadas 10,10');
  console.log(b.x + ' ' + b.y);
  console.log('Punto c con cordenadas 20,20');
  console.log(c.x + ' ' + c.y);
  console.log('Punto d copia de b');
  console.log(d.x + ' ' + d.y);
  console.log('Punto e con suma de b y c');
  console.log(e.x + ' ' + e.y);

  a.cambiar(25, 25);
  console.log('Cambio los valores de a 25,25');
  console.log(a.x + ' ' + a.y);
};
