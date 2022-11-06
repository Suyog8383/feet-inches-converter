let feet = document.getElementById("feet-text");
let inches = document.getElementById("inches-text");

feet.addEventListener("input", function () {
  let a = this.value;
  let b = a * 12;
  inches.value = b;
});
inches.addEventListener("input", function () {
  let b = this.value;
  let a = b / 12;
  feet.value = a;
});
