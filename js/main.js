// 모바일 메뉴 열기/닫기
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// 현재 페이지 메뉴에 active 표시
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a").forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

// 푸터 연도 자동 갱신
document.querySelectorAll(".year-now").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
