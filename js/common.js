const start = document.getElementById("start_btn");
const info = document.getElementById("info-box");
const infoFalse = document.querySelector(".info-button .false");
const infoTrue = document.querySelector(".info-button .true");
const quiz = document.getElementById("quiz");

// 시작
start.onclick = () => {
   info.classList.add("active");
   infoFalse.onclick = () => {
      info.classList.remove("active");
   }
}

infoTrue.onclick = () => {
   info.classList.remove("active");
   quiz.classList.add("active");
}