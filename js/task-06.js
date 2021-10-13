const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("focus", onInpytFocus);
inputEl.addEventListener("blur", onInpytFocusLost);

function onInpytFocus() {
  inputEl.className = "";
}

const inputClassList = inputEl.classList;

function classChanger(classToRemove, classToAdd) {
  inputClassList.remove(classToRemove);
  inputClassList.add(classToAdd);
}

function onInpytFocusLost(event) {
  if (
    event.currentTarget.value.length ===
    parseInt(inputEl.getAttribute("data-length"))
  ) {
    classChanger("invalid", "valid");
  } else {
    classChanger("valid", "invalid");
  }
}
