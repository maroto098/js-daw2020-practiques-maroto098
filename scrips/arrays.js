Array.prototype.media = function () {
  return this.reduce(function (a, b) {
    return a + b / 2;
  }, 0);
};

window.onload = () => {
  console.log('los valores del primer array son 22 25 27 ');
  let a = [22, 25, 27];

  console.log('lamedia es ' + a.media());

  console.log('los valores del primer array son 45 59 32 ');
  let b = [45, 59, 32];

  console.log('lamedia es ' + b.media());
};
