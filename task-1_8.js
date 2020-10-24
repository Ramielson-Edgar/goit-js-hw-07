'use strict';

const refs = {
  buttonActionRenderEl: document.querySelector(
    'button[data-action="render"]'
  ),
  buttonActionDestroyEl: document.querySelector(
    'button[data-action="destroy"]'
  ),
  input: document.querySelector("#controls input"),
  divContainerEl: document.querySelector("#boxes")
};

const {
  buttonActionRenderEl,
  buttonActionDestroyEl,
  input,
  divContainerEl
} = refs;

buttonActionRenderEl.addEventListener("click", () =>
  onHandleCreate(+input.value)
);

buttonActionDestroyEl.addEventListener("click", onHandeldstroeyrEl);

function onHandleCreate(amount) {
  const boxCollection = [...new Array(amount)];
  const createDivBoxes = boxCollection.map((_, i) => createdBoxes(i));
  divContainerEl.append(...createDivBoxes);
}
const randomColor = () => {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const STEP = 10;
const SIZE = 30;
function createdBoxes(i) {
  const creatDivEl = document.createElement("div");
  creatDivEl.style.backgroundColor = randomColor();
  creatDivEl.style.width = `${i * STEP + SIZE}px`;
  creatDivEl.style.height = `${i * STEP + SIZE}px`;
  return creatDivEl;
} 

function onHandeldstroeyrEl() {
  divContainerEl.innerHTML = "";
}
