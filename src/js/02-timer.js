import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

startButton.disabled = true;

let countdownInterval;

let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // here was only:
  // onClose(selectedDates) {
  //     console.log(selectedDates[0]);
  //   },
  onClose(selectedDates) {
    const selectedDate = new Date(selectedDates[0]);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  datetimePicker.disabled = true;
  const selectedDate = new Date(datetimePicker.value);
  const currentDate = new Date();
  const timeRemaining = selectedDate - currentDate;

  if (timeRemaining <= 0) {
    alert('The selected time has already passed.');
    return;
  }

  countdownInterval = setInterval(() => {
    const currentDate = new Date();
    const timeRemaining = selectedDate - currentDate;
    if (timeRemaining > 0) {
      const time = convertMs(timeRemaining);
      daysValue.textContent = addLeadingZero(time.days);
      hoursValue.textContent = addLeadingZero(time.hours);
      minutesValue.textContent = addLeadingZero(time.minutes);
      secondsValue.textContent = addLeadingZero(time.seconds);
      timeRemaining -= 1000;
    } else {
      clearInterval(countdownInterval);
      daysValue.textContent = '00';
      hoursValue.textContent = '00';
      minutesValue.textContent = '00';
      secondsValue.textContent = '00';
      alert('Countdown has finished.');
      datetimePicker.disabled = false;
      return;
    }
  }, 1000);
});
