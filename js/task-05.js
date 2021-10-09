const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
function onInputChange(event) {
  event.currentTarget.value === ""
    ? (nameOutputEl.textContent = "Незнакомец")
    : (nameOutputEl.textContent = event.currentTarget.value);
}
inputEl.addEventListener("input", onInputChange);
