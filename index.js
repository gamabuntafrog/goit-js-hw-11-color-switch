const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitcher = () => {
 body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
}

buttonStop.style.display = 'none'

const autoColorSwitcher = () => {
   const intervalId = setInterval(() => {
        colorSwitcher()
   }, 1000);
    buttonStop.style.display = 'block'
    buttonStart.style.display = 'none'
    buttonStop.addEventListener('click', () => {
        clearInterval(intervalId)
        buttonStart.style.display = 'block'
        buttonStop.style.display = 'none'
})
}

buttonStart.addEventListener('click', autoColorSwitcher)

