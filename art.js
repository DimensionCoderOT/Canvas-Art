function init() {
  const canvas = document.querySelector('canvas');
  const c = canvas.getContent('2d');

  c.fillStyle = "pink";
  c.fillRect(100, 0, 200, 500);
}

window.addEventListener('load', init);
