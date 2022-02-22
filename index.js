import randomWords from "./node_modules/random-words/index.js";
import Swal from "./node_modules/sweetalert2/src/sweetalert2.js";
// import Swal from "sweetalert2";
// import KioskBoard from "./node_modules/kioskboard/src/kioskboard.js";
// import Keyboard from "./node_modules/simple-keyboard/build/index.modern.js";
// import "./node_modules/simple-keyboard/build/css/index.css";

// const keyboard = new Keyboard({
//   onChange: (input) => onChange(input),
//   onKeyPress: (button) => onKeyPress(button),
// });

// function onChange(input) {
//   document.querySelector(".input").value = input;
//   console.log("Input changed", input);
// }

// function onKeyPress(button) {
//   console.log("Button pressed", button);
// }

var i = 0;

const box1 = document.getElementById("Id1");
const box2 = document.getElementById("Id2");
const box3 = document.getElementById("Id3");
const box4 = document.getElementById("Id4");
const box5 = document.getElementById("Id5");
const box6 = document.getElementById("Id6");
const box7 = document.getElementById("Id7");
const box8 = document.getElementById("Id8");
const box9 = document.getElementById("Id9");
const box10 = document.getElementById("Id10");
const box11 = document.getElementById("Id11");
const box12 = document.getElementById("Id12");
const box13 = document.getElementById("Id13");
const box14 = document.getElementById("Id14");
const box15 = document.getElementById("Id15");
const box16 = document.getElementById("Id16");
const box17 = document.getElementById("Id17");
const box18 = document.getElementById("Id18");
const box19 = document.getElementById("Id19");
const box20 = document.getElementById("Id20");
const box21 = document.getElementById("Id21");
const box22 = document.getElementById("Id22");
const box23 = document.getElementById("Id23");
const box24 = document.getElementById("Id24");
const box25 = document.getElementById("Id25");
const box26 = document.getElementById("Id26");
const box27 = document.getElementById("Id27");
const box28 = document.getElementById("Id28");
const box29 = document.getElementById("Id29");
const box30 = document.getElementById("Id30");

const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");
const li5 = document.getElementById("li5");
const li6 = document.getElementById("li6");
const li7 = document.getElementById("li7");
const li8 = document.getElementById("li8");
const li9 = document.getElementById("li9");
const li10 = document.getElementById("li10");
const li11 = document.getElementById("li11");
const li12 = document.getElementById("li12");
const li13 = document.getElementById("li13");
const li14 = document.getElementById("li14");
const li15 = document.getElementById("li15");
const li16 = document.getElementById("li16");
const li17 = document.getElementById("li17");
const li18 = document.getElementById("li18");
const li19 = document.getElementById("li19");
const li20 = document.getElementById("li20");
const li21 = document.getElementById("li21");
const li22 = document.getElementById("li22");
const li23 = document.getElementById("li23");
const li24 = document.getElementById("li24");
const li25 = document.getElementById("li25");
const li26 = document.getElementById("li26");
const li27 = document.getElementById("li27");
const li28 = document.getElementById("li28");
const li29 = document.getElementById("li29");
const li30 = document.getElementById("li30");

const ul1 = document.getElementById("ul1");
const ul2 = document.getElementById("ul2");
const ul3 = document.getElementById("ul3");
const ul4 = document.getElementById("ul4");
const ul5 = document.getElementById("ul5");

const submit = document.getElementById("submit");

var newWord;
const body = document.getElementById("body");
body.addEventListener("pointerdown", (e) => {
  // e.preventDefault();
});
body.addEventListener("onload", (e) => {
  box1.focus();
});
body.addEventListener("onload", generateWord());
function generateWord() {
  newWord = randomWords({ exactly: 1, maxLength: 5 })[0];
  if (newWord.length != 5) {
    generateWord();
  }
}
console.log(newWord);

box1.addEventListener("input", (e) => {
  const key = e.data;
  li1.style.borderColor = "#818384";
  box2.focus();
});
box2.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box1.value = "";
    li1.style.borderColor = "#3a3a3c";
    box1.focus();
  }
});
box2.addEventListener("input", (e) => {
  const key = e.data;
  li2.style.borderColor = "#818384";
  box3.focus();
});
box3.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box2.value = "";
    li2.style.borderColor = "#3a3a3c";
    box2.focus();
  }
});
box3.addEventListener("input", (e) => {
  const key = e.data;
  li3.style.borderColor = "#818384";
  box4.focus();
});
box4.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box3.value = "";
    li3.style.borderColor = "#3a3a3c";
    box3.focus();
  }
});
box4.addEventListener("input", (e) => {
  const key = e.data;
  li4.style.borderColor = "#818384";
  box5.focus();
});
box5.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    if (box5.value != "") {
      box5.value = "";
      li5.style.borderColor = "#3a3a3c";
    } else {
      box4.value = "";
      li4.style.borderColor = "#3a3a3c";
      box4.focus();
    }
  }
});
box5.addEventListener("input", (e) => {
  const key = e.data;
  li5.style.borderColor = "#818384";
});

box6.addEventListener("input", (e) => {
  const key = e.data;
  li6.style.borderColor = "#818384";
  box7.focus();
});
box7.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box6.value = "";
    li6.style.borderColor = "#3a3a3c";
    box6.focus();
  }
});
box7.addEventListener("input", (e) => {
  const key = e.data;
  li7.style.borderColor = "#818384";
  box8.focus();
});
box8.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box7.value = "";
    li7.style.borderColor = "#3a3a3c";
    box7.focus();
  }
});
box8.addEventListener("input", (e) => {
  const key = e.data;
  li8.style.borderColor = "#818384";
  box9.focus();
});
box9.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box8.value = "";
    li8.style.borderColor = "#3a3a3c";
    box8.focus();
  }
});
box9.addEventListener("input", (e) => {
  const key = e.data;
  li9.style.borderColor = "#818384";
  box10.focus();
});
box10.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    if (box10.value != "") {
      box10.value = "";
      li10.style.borderColor = "#3a3a3c";
    } else {
      box9.value = "";
      li9.style.borderColor = "#3a3a3c";
      box9.focus();
    }
  }
});
box10.addEventListener("input", (e) => {
  const key = e.data;
  li10.style.borderColor = "#818384";
});
box11.addEventListener("input", (e) => {
  const key = e.data;
  li11.style.borderColor = "#818384";
  box12.focus();
});
box12.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box11.value = "";
    li11.style.borderColor = "#3a3a3c";
    box11.focus();
  }
});
box12.addEventListener("input", (e) => {
  const key = e.data;
  li12.style.borderColor = "#818384";
  box13.focus();
});
box13.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box12.value = "";
    li12.style.borderColor = "#3a3a3c";
    box12.focus();
  }
});
box13.addEventListener("input", (e) => {
  const key = e.data;
  li13.style.borderColor = "#818384";
  box14.focus();
});
box14.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box13.value = "";
    li13.style.borderColor = "#3a3a3c";
    box13.focus();
  }
});
box14.addEventListener("input", (e) => {
  const key = e.data;
  li14.style.borderColor = "#818384";
  box15.focus();
});
box15.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    if (box15.value != "") {
      box15.value = "";
      li15.style.borderColor = "#3a3a3c";
    } else {
      box14.value = "";
      li14.style.borderColor = "#3a3a3c";
      box14.focus();
    }
  }
});
box15.addEventListener("input", (e) => {
  const key = e.data;
  li15.style.borderColor = "#818384";
});
box16.addEventListener("input", (e) => {
  const key = e.data;
  li16.style.borderColor = "#818384";
  box17.focus();
});
box17.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box16.value = "";
    li16.style.borderColor = "#3a3a3c";
    box16.focus();
  }
});
box17.addEventListener("input", (e) => {
  const key = e.data;
  li17.style.borderColor = "#818384";
  box18.focus();
});
box18.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box17.value = "";
    li17.style.borderColor = "#3a3a3c";
    box17.focus();
  }
});
box18.addEventListener("input", (e) => {
  const key = e.data;
  li18.style.borderColor = "#818384";
  box19.focus();
});
box19.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box18.value = "";
    li18.style.borderColor = "#3a3a3c";
    box18.focus();
  }
});
box19.addEventListener("input", (e) => {
  const key = e.data;
  li19.style.borderColor = "#818384";
  box20.focus();
});
box20.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    if (box20.value != "") {
      box20.value = "";
      li20.style.borderColor = "#3a3a3c";
    } else {
      box19.value = "";
      li19.style.borderColor = "#3a3a3c";
      box19.focus();
    }
  }
});
box20.addEventListener("input", (e) => {
  const key = e.data;
  li20.style.borderColor = "#818384";
});
box21.addEventListener("input", (e) => {
  const key = e.data;
  li21.style.borderColor = "#818384";
  box22.focus();
});
box22.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box21.value = "";
    li21.style.borderColor = "#3a3a3c";
    box21.focus();
  }
});
box22.addEventListener("input", (e) => {
  const key = e.data;
  li22.style.borderColor = "#818384";
  box23.focus();
});
box23.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box22.value = "";
    li22.style.borderColor = "#3a3a3c";
    box22.focus();
  }
});
box23.addEventListener("input", (e) => {
  const key = e.data;
  li23.style.borderColor = "#818384";
  box24.focus();
});
box24.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box23.value = "";
    li23.style.borderColor = "#3a3a3c";
    box23.focus();
  }
});
box24.addEventListener("input", (e) => {
  const key = e.data;
  li24.style.borderColor = "#818384";
  box25.focus();
});
box25.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    if (box25.value != "") {
      box25.value = "";
      li25.style.borderColor = "#3a3a3c";
    } else {
      box24.value = "";
      li24.style.borderColor = "#3a3a3c";
      box24.focus();
    }
  }
});
box25.addEventListener("input", (e) => {
  const key = e.data;
  li25.style.borderColor = "#818384";
});
box26.addEventListener("input", (e) => {
  const key = e.data;
  li26.style.borderColor = "#818384";
  box27.focus();
});
box27.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box26.value = "";
    li26.style.borderColor = "#3a3a3c";
    box26.focus();
  }
});
box27.addEventListener("input", (e) => {
  const key = e.data;
  li27.style.borderColor = "#818384";
  box28.focus();
});
box28.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box27.value = "";
    li27.style.borderColor = "#3a3a3c";
    box27.focus();
  }
});
box28.addEventListener("input", (e) => {
  const key = e.data;
  li28.style.borderColor = "#818384";
  box29.focus();
});
box29.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    box28.value = "";
    li28.style.borderColor = "#3a3a3c";
    box28.focus();
  }
});
box29.addEventListener("input", (e) => {
  const key = e.data;
  li29.style.borderColor = "#818384";
  box30.focus();
});
box30.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace") {
    if (box30.value != "") {
      box30.value = "";
      li30.style.borderColor = "#3a3a3c";
    } else {
      box29.value = "";
      li29.style.borderColor = "#3a3a3c";
      box29.focus();
    }
  }
});
box30.addEventListener("input", (e) => {
  const key = e.data;
  li30.style.borderColor = "#818384";
});

submit.addEventListener("click", submitPress);
box5.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key === "Enter" && box5.value != "") {
    submitPress();
  }
});
box10.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key === "Enter" && box10.value != "") {
    submitPress();
  }
});
box15.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key === "Enter" && box15.value != "") {
    submitPress();
  }
});
box20.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key === "Enter" && box20.value != "") {
    submitPress();
  }
});
box25.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key === "Enter" && box25.value != "") {
    submitPress();
  }
});
box30.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key === "Enter" && box30.value != "") {
    submitPress();
  }
});

function submitPress() {
  var word = "";
  if (i === 0) {
    if (checkRow(box1, box2, box3, box4, box5)) {
      word = liBorderColor(word, li1, li2, li3, li4, li5);
      checkWin(word);
      liGrow(li1, li2, li3, li4, li5);
    }
  } else if (i === 1) {
    if (checkRow(box6, box7, box8, box9, box10)) {
      word = liBorderColor(word, li6, li7, li8, li9, li10);
      checkWin(word);
      liGrow(li6, li7, li8, li9, li10);
    }
  } else if (i === 2) {
    if (checkRow(box11, box12, box13, box14, box15)) {
      word = liBorderColor(word, li11, li12, li13, li14, li15);
      checkWin(word);
      liGrow(li11, li12, li13, li14, li15);
    }
  } else if (i === 3) {
    if (checkRow(box16, box17, box18, box19, box20)) {
      word = liBorderColor(word, li16, li17, li18, li19, li20);
      checkWin(word);
      liGrow(li16, li17, li18, li19, li20);
    }
  } else if (i === 4) {
    if (checkRow(box21, box22, box23, box24, box25)) {
      word = liBorderColor(word, li21, li22, li23, li24, li25);
      checkWin(word);
      liGrow(li21, li22, li23, li24, li25);
    }
  } else if (i === 5) {
    if (checkRow(box26, box27, box28, box29, box30)) {
      word = liBorderColor(word, li26, li27, li28, li29, li30);
      checkWin(word);
      liGrow(li26, li27, li28, li29, li20);
    }
  }
}

function resetBoard() {
  box1.value = "";
  box1.focus();
  box2.value = "";
  box3.value = "";
  box4.value = "";
  box5.value = "";
  box6.value = "";
  box7.value = "";
  box8.value = "";
  box9.value = "";
  box10.value = "";
  box11.value = "";
  box12.value = "";
  box13.value = "";
  box14.value = "";
  box15.value = "";
  box16.value = "";
  box17.value = "";
  box18.value = "";
  box19.value = "";
  box20.value = "";
  box21.value = "";
  box22.value = "";
  box23.value = "";
  box24.value = "";
  box25.value = "";
  box26.value = "";
  box27.value = "";
  box28.value = "";
  box29.value = "";
  box30.value = "";

  li1.style.borderColor = "#3a3a3c";
  li2.style.borderColor = "#3a3a3c";
  li3.style.borderColor = "#3a3a3c";
  li4.style.borderColor = "#3a3a3c";
  li5.style.borderColor = "#3a3a3c";
  li6.style.borderColor = "#3a3a3c";
  li7.style.borderColor = "#3a3a3c";
  li8.style.borderColor = "#3a3a3c";
  li9.style.borderColor = "#3a3a3c";
  li10.style.borderColor = "#3a3a3c";
  li11.style.borderColor = "#3a3a3c";
  li12.style.borderColor = "#3a3a3c";
  li13.style.borderColor = "#3a3a3c";
  li14.style.borderColor = "#3a3a3c";
  li15.style.borderColor = "#3a3a3c";
  li16.style.borderColor = "#3a3a3c";
  li17.style.borderColor = "#3a3a3c";
  li18.style.borderColor = "#3a3a3c";
  li19.style.borderColor = "#3a3a3c";
  li20.style.borderColor = "#3a3a3c";
  li21.style.borderColor = "#3a3a3c";
  li22.style.borderColor = "#3a3a3c";
  li23.style.borderColor = "#3a3a3c";
  li24.style.borderColor = "#3a3a3c";
  li25.style.borderColor = "#3a3a3c";
  li26.style.borderColor = "#3a3a3c";
  li27.style.borderColor = "#3a3a3c";
  li28.style.borderColor = "#3a3a3c";
  li29.style.borderColor = "#3a3a3c";
  li30.style.borderColor = "#3a3a3c";
  i = 0;
}

function liBorderColor(
  word,
  liObject1,
  liObject2,
  liObject3,
  liObject4,
  liObject5
) {
  if (i === 0) {
    word = box1.value + box2.value + box3.value + box4.value + box5.value;
  } else if (i === 1) {
    word = box6.value + box7.value + box8.value + box9.value + box10.value;
  } else if (i === 2) {
    word = box11.value + box12.value + box13.value + box14.value + box15.value;
  } else if (i === 3) {
    word = box16.value + box17.value + box18.value + box19.value + box20.value;
  } else if (i === 4) {
    word = box21.value + box22.value + box23.value + box24.value + box25.value;
  } else if (i === 5) {
    word = box26.value + box27.value + box28.value + box29.value + box30.value;
  }

  if (word[0] === newWord[0]) {
    liObject1.style.borderColor = "green";
  } else if (newWord.includes(word[0])) {
    if (
      !checkDuplicate(
        word,
        0,
        liObject1,
        liObject2,
        liObject3,
        liObject4,
        liObject5
      )
    ) {
      liObject1.style.borderColor = "yellow";
    }
  } else {
    liObject1.style.borderColor = "red";
  }
  if (word[1] === newWord[1]) {
    liObject2.style.borderColor = "green";
  } else if (newWord.includes(word[1])) {
    if (
      !checkDuplicate(
        word,
        1,
        liObject1,
        liObject2,
        liObject3,
        liObject4,
        liObject5
      )
    ) {
      liObject2.style.borderColor = "yellow";
    }
  } else {
    liObject2.style.borderColor = "red";
  }
  if (word[2] === newWord[2]) {
    liObject3.style.borderColor = "green";
  } else if (newWord.includes(word[2])) {
    if (
      !checkDuplicate(
        word,
        2,
        liObject1,
        liObject2,
        liObject3,
        liObject4,
        liObject5
      )
    ) {
      liObject3.style.borderColor = "yellow";
    }
  } else {
    liObject3.style.borderColor = "red";
  }
  if (word[3] === newWord[3]) {
    liObject4.style.borderColor = "green";
  } else if (newWord.includes(word[3])) {
    if (
      !checkDuplicate(
        word,
        3,
        liObject1,
        liObject2,
        liObject3,
        liObject4,
        liObject5
      )
    ) {
      liObject4.style.borderColor = "yellow";
    }
  } else {
    liObject4.style.borderColor = "red";
  }
  if (word[4] === newWord[4]) {
    liObject5.style.borderColor = "green";
  } else if (newWord.includes(word[4])) {
    if (
      !checkDuplicate(
        word,
        4,
        liObject1,
        liObject2,
        liObject3,
        liObject4,
        liObject5
      )
    ) {
      liObject5.style.borderColor = "yellow";
    }
  } else {
    liObject5.style.borderColor = "red";
  }
  i++;

  return word;
}

function checkDuplicate(
  word,
  place,
  liObject1,
  liObject2,
  liObject3,
  liObject4,
  liObject5
) {
  var bool = false;
  if (place === 0) {
    if (newWord[1] === word[place]) {
      if (liObject2.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[2] === word[place]) {
      if (liObject3.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[3] === word[place]) {
      if (liObject4.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[4] === word[place]) {
      if (liObject5.style.borderColor === "green") {
        bool = true;
      }
    }
  } else if (place === 1) {
    if (newWord[0] === word[place]) {
      if (liObject1.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[2] === word[place]) {
      if (liObject3.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[3] === word[place]) {
      if (liObject4.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[4] === word[place]) {
      if (liObject5.style.borderColor === "green") {
        bool = true;
      }
    }
  } else if (place === 2) {
    if (newWord[0] === word[place]) {
      if (liObject1.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[1] === word[place]) {
      if (liObject2.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[3] === word[place]) {
      if (liObject4.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[4] === word[place]) {
      if (liObject5.style.borderColor === "green") {
        bool = true;
      }
    }
  } else if (place === 3) {
    if (newWord[0] === word[place]) {
      if (liObject1.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[1] === word[place]) {
      if (liObject2.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[2] === word[place]) {
      if (liObject3.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[4] === word[place]) {
      if (liObject5.style.borderColor === "green") {
        bool = true;
      }
    }
  } else if (place === 4) {
    if (newWord[0] === word[place]) {
      if (liObject1.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[1] === word[place]) {
      if (liObject2.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[2] === word[place]) {
      if (liObject3.style.borderColor === "green") {
        bool = true;
      }
    } else if (newWord[3] === word[place]) {
      if (liObject4.style.borderColor === "green") {
        bool = true;
      }
    }
  }
  return bool;
}

function liGrow(liObject1, liObject2, liObject3, liObject4, liObject5) {
  var id = null;
  var iter = 0;
  clearInterval(id);
  id = setInterval(frame, 100);
  function frame() {
    if (iter === 2) {
      clearInterval(id);
    } else if (iter === 0) {
      iter++;
      liObject1.style.webkitTransform = "scale(1.25)";
      setTimeout(() => {
        liObject2.style.webkitTransform = "scale(1.25)";
        setTimeout(() => {
          liObject3.style.webkitTransform = "scale(1.25)";
          setTimeout(() => {
            liObject4.style.webkitTransform = "scale(1.25)";
            setTimeout(() => {
              liObject5.style.webkitTransform = "scale(1.25)";
            }, 50);
          }, 50);
        }, 50);
      }, 50);
    } else {
      iter++;
      liObject1.style.webkitTransform = "scale(1)";
      setTimeout(() => {
        liObject2.style.webkitTransform = "scale(1)";
        setTimeout(() => {
          liObject3.style.webkitTransform = "scale(1)";
          setTimeout(() => {
            liObject4.style.webkitTransform = "scale(1)";
            setTimeout(() => {
              liObject5.style.webkitTransform = "scale(1)";
            }, 50);
          }, 50);
        }, 50);
      }, 50);
    }
  }
}

function checkRow(boxObj1, boxObj2, boxObj3, boxObj4, boxObj5) {
  if (
    boxObj1.value === "" ||
    boxObj2.value === "" ||
    boxObj3.value === "" ||
    boxObj4.value === "" ||
    boxObj5.value === ""
  ) {
    return false;
  }
  return true;
}

function checkWin(word) {
  if (word != newWord) {
    if (box6.value === "") {
      box6.focus();
    } else if (box11.value === "") {
      box11.focus();
    } else if (box16.value === "") {
      box16.focus();
    } else if (box21.value === "") {
      box21.focus();
    } else if (box26.value === "") {
      box26.focus();
    } else {
      Swal.fire({
        title: "You Lose!",
        text: "The word was '" + newWord + "'",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  } else {
    console.log("True");
    Swal.fire({
      title: "You Win!",
      text: "Congratulations on being smart",
      icon: "success",
      confirmButtonText: "Thanks",
    });
  }
}
// var keyboard = $("#keyboard").getkeyboard();
// keyboard.reveal();
$("button.open").click(function () {
  var keyboard = $("#keyboard").getkeyboard();
  keyboard.reveal();
});
