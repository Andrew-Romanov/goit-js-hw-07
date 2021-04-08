const inputTextElement = document.querySelector('#validation-input');

inputTextElement.addEventListener('blur', () => {
  inputTextElement.value.length === Number(inputTextElement.dataset.length) ?
    inputTextElement.classList.add('valid') :
    inputTextElement.classList.add('invalid');
});

inputTextElement.addEventListener('focus', () => {
  inputTextElement.classList.remove('valid');
  inputTextElement.classList.remove('invalid');
});