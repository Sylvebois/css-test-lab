const body = document.querySelector('body');
const portrait = document.querySelector('.portrait');
const button = document.getElementById('clickit');

button.addEventListener('click', e => {
  portrait.style.opacity = 0;

  if (body.className === 'first') {
    body.className = 'second';
    setTimeout(() => {
      portrait.src = 'portrait2.jpg'
      portrait.style.opacity = 1;
    }, 500);
  }
  else {
    body.className = 'first';
        setTimeout(() => {
      portrait.src = 'portrait1.png'
      portrait.style.opacity = 1;
    }, 500);
  }
});