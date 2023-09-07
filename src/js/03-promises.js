const button = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });

  return promise;
}

button.addEventListener("click", (evt) => {
  evt.preventDefault(); 
  const amount = parseInt(document.getElementsByName("amount")[0].value, 10);
  const initialDelay = parseInt(document.getElementsByName("delay")[0].value, 10);
  const step = parseInt(document.getElementsByName("step")[0].value, 10);

  if (isNaN(amount) || isNaN(initialDelay) || isNaN(step)) {
      alert("Please enter valid numeric values.");
      return;
  }

  for (let i = 0; i < amount; i++) {
      const position = i + 1;
      const delay = initialDelay + i * step;
      
      createPromise(position, delay)
        .then(({ position, delay }) => {
        console.log(` ✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
  }
}) 
