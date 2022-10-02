function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    });
  } else {
    // Reject
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    });
  }
}

const refForm = document.querySelector('.form');

refForm.addEventListener('submit', event => {
  event.preventDefault();
  let timeDelay = Number(refForm.delay.value) + Number(refForm.step.value);
  for (let index = 0; index < refForm.amount.value; index++) {
    createPromise(index, timeDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      });
    timeDelay += Number(refForm.step.value);
  }
  // console.log(refForm.delay.value);
});
