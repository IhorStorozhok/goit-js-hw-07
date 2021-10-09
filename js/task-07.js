const rangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

rangeEl.addEventListener("input", onRangeChange);
function onRangeChange(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
