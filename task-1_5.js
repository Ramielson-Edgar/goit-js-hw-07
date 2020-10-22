'use strict';


const inputRef = document.querySelector('#name-input')
console.log(inputRef)
const outputRef = document.querySelector('#name-output')
console.log(outputRef)


inputRef.addEventListener('input', onInputChange )

function onInputChange(event) {
 

    if ( event.currentTarget.value === '')  {
       outputRef.textContent = 'незнакомец'
    } else {
           outputRef.textContent = event.currentTarget.value
    }
  

}