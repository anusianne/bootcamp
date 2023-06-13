const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const allSpans = document.querySelectorAll("span");

for (let i = 0; i < colors.length; i++) {
  allSpans[i].style.color = colors[i];
}
