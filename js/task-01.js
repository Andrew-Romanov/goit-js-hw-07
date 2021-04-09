const itemElements = document.querySelectorAll('.item');

console.log(`В списке ${itemElements.length} категории.`);

itemElements.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
});