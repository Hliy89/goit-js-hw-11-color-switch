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
        const randomIndex = randomIntegerFromInterval(0, colors.length)
        document.body.style.backgroundColor = colors[randomIndex]
    }, 1000)

    if (timeColor) {
        startBtn.disabled = true;
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timeColor);
    startBtn.disabled = false;
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Есть массив цветов в hex-формате и кнопки Start и Stop.

// Напиши скрипт, который после нажатия кнопки Start,
//     раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// Учти, на кнопку Start можно нажать бесконечное количество раз.Сделай так,
//     чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов),
//     используй функцию randomIntegerFromInterval.







