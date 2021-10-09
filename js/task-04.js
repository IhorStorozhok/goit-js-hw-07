const valueEL = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  return (valueEL.textContent = counterValue);
};
const decrement = () => {
  counterValue -= 1;
  return (valueEL.textContent = counterValue);
};

const actionsEl = document.querySelectorAll("button");

actionsEl[1].addEventListener("click", increment);
actionsEl[0].addEventListener("click", decrement);
