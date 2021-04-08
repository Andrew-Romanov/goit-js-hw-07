const inputTextElement = document.querySelector('#name-input');
const outputTextElement = document.querySelector('#name-output');

inputTextElement.addEventListener('input', () => {
  inputTextElement.value === '' ?
    outputTextElement.textContent = 'незнакомец' :
    outputTextElement.textContent = inputTextElement.value;
});