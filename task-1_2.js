'use strict';


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients')
console.log(listRef)


const item = ingredients.map(el=> {
  const liref = document.createElement('li')
  liref.textContent = `${el}`


  return liref;
})

console.log(item)


listRef.append(...item)



