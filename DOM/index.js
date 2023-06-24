const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const allSpans = document.querySelectorAll("span");

for (let i = 0; i < colors.length; i++) {
  allSpans[i].style.color = colors[i];
}

const li = document.querySelectorAll("li");
li.forEach((li) => {
  li.classList.toggle("highlight");
});

const div = document.getElementById("container");
for (let i = 0; i < 100; i++) {
  const btn = div.appendChild(document.createElement("button"));
  btn.innerText = "Hello";
}

const form = document.querySelector("form");
const quantity = document.querySelector("#qty");
const product = document.querySelector("#product");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const qty = quantity.value;
  const productName = product.value;
  const productList = document.createElement("li");
  productList.innerText = qty + " " + productName;
  list.append(productList);
  form.reset();
});

const user = document.getElementById("username");
const h2 = document.querySelector("h2");
user.addEventListener("input", (e) => {
  h2.innerText = "Welcome" + ", " + user.value;
  if (user.value === "") {
    h2.innerText = "Enter Your Username";
  }
});
