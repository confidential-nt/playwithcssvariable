const inputs = document.querySelectorAll(".controls input");

function cssUpdate() {
  const unit = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}

inputs.forEach((input) => input.addEventListener("change", cssUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", cssUpdate));
