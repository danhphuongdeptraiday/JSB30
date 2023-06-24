let backgroundDarker = document.querySelector(".background_darker");
let buyButton = document.querySelector("#buy");

buyButton.addEventListener("click", function () {
  if (backgroundDarker.style.display === "none") {
    backgroundDarker.style.display = "block";
  } else {
    backgroundDarker.style.display = "none";
  }
});
