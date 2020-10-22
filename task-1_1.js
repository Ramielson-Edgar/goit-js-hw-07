'use strict';


const childtEl = document.querySelectorAll('.item')
console.log(childtEl)


const result = Array.from(childtEl).map(el => 
    `Категория: ${el.firstElementChild.textContent}
    - Количество элементов: ${el.lastElementChild.children.length}`)


console.log(result)