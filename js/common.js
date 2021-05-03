const start = document.getElementById("start_btn");
const info = document.getElementById("info-box");
const infoFalse = document.querySelector(".info-button .false");

// 시작
start.onclick = () => {
   info.classList.add("active");
   infoFalse.onclick = () => {
      info.classList.remove("active");
   }
}