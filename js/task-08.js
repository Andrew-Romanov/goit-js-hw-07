const numberInputElement = document.querySelector('#controls input');
const createBoxesButtonElement = document.querySelector('#controls button[data-action="render"]');
const destroyBoxesButtonElement = document.querySelector('#controls button[data-action="destroy"]');
const boxesContainerElement = document.querySelector('#boxes');

numberInputElement.value = 0;

const createBoxes = (amount) => {
  if (amount === 0) return;
  const tempBoxes = [];
  for (let i = 0; i < amount; i += 1)
  {
    tempBoxes[i] = document.createElement('div');
    tempBoxes[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    tempBoxes[i].style.margin = '5px';
    tempBoxes[i].style.width = `${30 + 10 * i}px`;
    tempBoxes[i].style.height = `${30 + 10 * i}px`;
  };
  boxesContainerElement.append(...tempBoxes);
};

const destroyBoxes = () => {
  boxesContainerElement.innerHTML = '';
};

createBoxesButtonElement.addEventListener('click', () => {
  createBoxes(numberInputElement.value);
});

destroyBoxesButtonElement.addEventListener('click', () => {
  destroyBoxes();
});