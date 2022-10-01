const refStart = document.querySelector('[data-start]');
const refStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerColor;

refStart.addEventListener('click', evt => {
  refStart.disabled = true;

  const color = getRandomHexColor();
  body.style.backgroundColor = color;

  timerColor = setInterval(() => {
    if (!refStart.disabled) {
      return;
    }
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
});

refStop.addEventListener('click', evt => {
  refStart.disabled = false;
  clearInterval(timerColor);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
