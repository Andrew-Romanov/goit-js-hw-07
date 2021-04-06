const itemElements = document.querySelectorAll('.item');

console.log("Вариант 1. С использованием document.querySelectorAll('.item') и length");
console.log(`В списке ${itemElements.length} категории.`);

const categoriesElement = document.querySelector('#categories');
console.log("Вариант 2. С использованием document.querySelector('#categories') и childElementCount");
console.log(`В списке ${categoriesElement.childElementCount} категории.`);
console.log("Вариант 3. С использованием document.querySelector('#categories') и children.length");
console.log(`В списке ${categoriesElement.children.length} категории.`);

itemElements.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log("Вариант 1. С использованием element.querySelectorAll(li) и length");
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
  console.log("Вариант 2. С использованием element.lastElementChild.childElementCount");
  console.log(`Количество элементов: ${element.lastElementChild.childElementCount}`);
  console.log("Вариант 2. С использованием element.lastElementChild.children.length");
  console.log(`Количество элементов: ${element.lastElementChild.children.length}`);
});