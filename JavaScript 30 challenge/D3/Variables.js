const inputs = document.querySelectorAll(".controls input");
function inputsUpdate() {
  const suffix = this.dataset.sizing || "";
  console.log(suffix);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach((input) => input.addEventListener("change", inputsUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", inputsUpdate));
