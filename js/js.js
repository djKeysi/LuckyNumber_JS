let input = document.querySelector(".input-lucky__number");

let buttonCheck = document.querySelector(".input-lucky__btn-check");
let buttonAgain = document.querySelector(".header__button");
const luckyNumber = () => Math.floor(Math.random() * 20);
// let luckyNumber = Math.floor(Math.random() * 20);
let number = luckyNumber();

buttonCheck.addEventListener("click", () => {
  console.log(number);
});

buttonAgain.addEventListener("click", () => {
  //   number = luckyNumber;
  number = luckyNumber();
});
