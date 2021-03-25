const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
    
const startBtn = document.querySelector('[data-action=start]');
const stopBtn = document.querySelector('[data-action=stop]');
let timeColor = null;

startBtn.addEventListener('click', () => {
    timeColor = setInterval(() => {
        const randomIndex = randomIntegerFromInterval(0, 5)
        document.body.style.backgroundColor = colors[randomIndex]
    }, 1000)
});

stopBtn.addEventListener('click', () => {
  clearInterval(timeColor);
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};







