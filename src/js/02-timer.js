import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const refDivTimer = document.querySelector('.timer');
const refDivFields = document.querySelectorAll('.field');
const refDays = document.querySelector('[data-days]');
const refHours = document.querySelector('[data-hours]');
const refMinutes = document.querySelector('[data-minutes]');
const refSeconds = document.querySelector('[data-seconds]');

const refStart = document.querySelector('[data-start]');
refStart.disabled = true;

refDivTimer.style.display = 'flex';
refDivTimer.style.gap = '20px';

refDivFields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
  field.children[0].style.fontSize = '30px';
  field.children[0].style.fontWeight = '400';
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDateTime = selectedDates[0].getTime();

    if (selectedDateTime < Date.now()) {
      return alert('Please choose a date in the future');
    }
    inputDate = selectedDates[0];
    refStart.disabled = false;
  },
};

let inputDate;

flatpickr('#datetime-picker', options);

refStart.addEventListener('click', event => {
  renderTime();
  const timerId = setInterval(() => {
    if (inputDate.getTime() <= Date.now()) {
      clearInterval(timerId);
      return alert('READY!');
    }
    renderTime();
  }, 1000);
});

function renderTime() {
  const diffTimes = convertMs(inputDate.getTime() - Date.now());
  refDays.textContent = addLeadingZero(diffTimes.days);
  refHours.textContent = addLeadingZero(diffTimes.hours);
  refMinutes.textContent = addLeadingZero(diffTimes.minutes);
  refSeconds.textContent = addLeadingZero(diffTimes.seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
