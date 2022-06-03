const bar = document.querySelector("#bar-menu");
const listItem = document.querySelector("#hide");
const list = document.queryCommandValue(".list");

bar.addEventListener("click", (e) => {
 e.preventDefault();
 listItem.classList.toggle("active");
})