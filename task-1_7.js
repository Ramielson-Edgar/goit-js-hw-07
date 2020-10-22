'use strict';


const inputRef = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')


inputRef.addEventListener('change', onChangeRangeAndFontSize )


function onChangeRangeAndFontSize(event) {
    let x = 50
    if (event.currentTarget.value > x ) {
        textEl.style.fontSize = '20px'
    } else {
            textEl.style.fontSize = '10px'
    }
}