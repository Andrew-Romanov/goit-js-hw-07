let counterValue = 0;

const decrementButtonElement = document.querySelector('button[data-action="decrement"]');
const incrementButtonElement = document.querySelector('button[data-action="increment"]');
const valueDisplayElement = document.querySelector('#value');

const decrement = () => {
  counterValue -= 1;
  valueDisplayElement.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueDisplayElement.textContent = counterValue;
};

decrementButtonElement.addEventListener('click', decrement);

incrementButtonElement.addEventListener('click', increment);
