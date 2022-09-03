let shoesMinus = document.getElementById("shoes-minus");
let shoesPlus = document.getElementById("shoes-plus");
let backpackMinus = document.getElementById("backpack-minus");
let backpackPlus = document.getElementById("backpack-plus");
let total = document.getElementById("spanTwo");

let shoesCounter = document.getElementById("shoes-counter");
let backpackCounter = document.getElementById("backpack-counter");
let shoesCount = 0;
let backpackCount = 0;
let totalCount = 0;

shoesPlus.addEventListener("click", function () {
  shoesCount += 1;
  shoesCounter.textContent = shoesCount;
  totalCount += 74;
  total.textContent = `$${totalCount}`;
});

shoesMinus.addEventListener("click", function () {
  shoesCount -= 1;
  shoesCounter.textContent = shoesCount;
  totalCount -= 74;
  total.textContent = `$${totalCount}`;
});

backpackPlus.addEventListener("click", function () {
  backpackCount += 1;
  backpackCounter.textContent = backpackCount;
  totalCount += 54;
  total.textContent = `$${totalCount}`;
});

backpackMinus.addEventListener("click", function () {
  backpackCount -= 1;
  backpackCounter.textContent = backpackCount;
  totalCount -= 54;
  total.textContent = `$${totalCount}`;
});







