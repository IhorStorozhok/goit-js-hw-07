const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("focus", onInpytFocus);
inputEl.addEventListener("blur", onInpytFocusLost);

function onInpytFocus() {}

function onInpytFocusLost(event) {
  if (
    event.currentTarget.value.length ===
    parseInt(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
