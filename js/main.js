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

// 납품 실적 표 검색 (실적·고객사 페이지에만 있음)
const search = document.querySelector("#records-search");
if (search) {
  const rows = document.querySelectorAll("#records tbody tr");
  const count = document.querySelector("#records-count");

  const filter = () => {
    const keyword = search.value.trim().toLowerCase();
    let shown = 0;
    rows.forEach((row) => {
      const match = row.textContent.toLowerCase().includes(keyword);
      row.hidden = !match;
      if (match) shown++;
    });
    count.textContent = `총 ${shown}건`;
  };

  search.addEventListener("input", filter);
  filter();
}
