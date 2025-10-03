let input = document.querySelector(".input-lucky__number");
let buttonCheck = document.querySelector(".input-lucky__btn-check");
let buttonAgain = document.querySelector(".header__button");
let sectionLuckyResult = document.querySelector(".section-lucky__result");
let input_lucky_text = document.querySelector(".input-lucky_text");
let inputLuckySpan1 = document.querySelector(".input-lucky__span1");
let body = document.querySelector("body");
let inputLuckySpan2 = document.querySelector(".input-lucky__span2");

const luckyNumber = () => Math.floor(Math.random() * 20);
// let luckyNumber = Math.floor(Math.random() * 20);
let number = luckyNumber();
let record = 0;

buttonCheck.addEventListener("click", () => {
  // console.log("19" !== "19");
  console.log(number);
  console.log(typeof +input.value);
  if (+inputLuckySpan1.innerHTML !== 0) {
    if (number < +input.value && number !== +input.value) {
      input_lucky_text.innerHTML = "Слишком много";
      Number(inputLuckySpan1.innerHTML--);
    } else if (number > +input.value && number !== +input.value) {
      input_lucky_text.innerHTML = "Слишком мало";
      Number(inputLuckySpan1.innerHTML--);
    } else {
      sectionLuckyResult.innerHTML = number;
      input_lucky_text.innerHTML = "Правильное число";
      body.style.backgroundColor = "green";
      inputLuckySpan2.innerHTML = inputLuckySpan1.innerHTML;
      record = inputLuckySpan1.innerHTML;
    }
  } else {
    input_lucky_text.innerHTML = "У Вас закончились попытки!!!";
  }
});

buttonAgain.addEventListener("click", () => {
  //   number = luckyNumber;
  number = luckyNumber();
  inputLuckySpan1.innerHTML = "20";
  body.style.backgroundColor = "black";
  input_lucky_text.innerHTML = "Начните угадывать...";
  sectionLuckyResult.innerHTML = "?";
  input.value = "";
  if (+record <= +inputLuckySpan2.innerHTML) {
    inputLuckySpan2.innerHTML = record;
  } else {
    record = inputLuckySpan2.innerHTML;
  }
});
