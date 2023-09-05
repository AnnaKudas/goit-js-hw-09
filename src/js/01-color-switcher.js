// TASK 1

// Завдання 1 - перемикач кольорів
// Виконуй це завдання у файлах 01-color-switcher.html і 01-color-switcher.js. Подивися демо-відео роботи перемикача.

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  let intervalId = null;
  
  document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');
  
    startButton.addEventListener('click', () => {
      if (!intervalId) {
        intervalId = setInterval(() => {
          document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
      }
    });
  
    stopButton.addEventListener('click', () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        startButton.disabled = false;
        stopButton.disabled = true;
      }
    });
  });
