function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnColor = document.querySelector('.change-color');
let spanColor = document.querySelector('.color');

btnColor.addEventListener('click', () => {
  let color = getRandomHexColor();

  body.style.backgroundColor = color;

  spanColor.textContent = color;
});
