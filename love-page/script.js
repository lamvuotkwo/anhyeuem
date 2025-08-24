document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".bunnies");
  for (let i = 0; i < 100; i++) {
    const img = document.createElement("img");
    img.src = "assets/bunny.png";
    container.appendChild(img);
  }

  document.getElementById("okBtn").addEventListener("click", () => {
    window.location.href = "https://love.tsonit.com/hoanglam5377";
  });
});
