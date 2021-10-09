const categoriesEL = document.querySelectorAll(".item");
console.log(`В списке ${categoriesEL.length} категории.`);
categoriesEL.forEach((category) => {
  console.log(`Категория: ${category.querySelector("h2").textContent}`);
  console.log(
    `Количество елементов: ${category.querySelectorAll("li").length}`
  );
});
