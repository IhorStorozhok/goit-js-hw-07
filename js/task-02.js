const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const newArr = [];
const ingridientsListEl = ingredients.forEach((ingridient) => {
  const listEl = document.createElement("li");
  listEl.textContent = `${ingridient}`;
  newArr.push(listEl);
});

const ingridientsEl = document.querySelector("ul");

ingridientsEl.append(...newArr);
