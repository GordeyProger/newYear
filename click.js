document.getElementById("tree").addEventListener("click", function () {
  const gifts = [
    document.getElementById("gift1"),
    document.getElementById("gift2"),
    document.getElementById("gift3"),
    document.getElementById("gift4"),
  ];

  // Убираем все анимации
  gifts.forEach((gift) => {
    gift.classList.remove("fly-left", "fly-right", "fly-up", "fly-down");
    gift.classList.remove("show"); // Скрываем перед повторным показом
  });

  // Включаем показ и анимации
  setTimeout(() => {
    gifts[0].classList.add("show", "fly-left");
    gifts[1].classList.add("show", "fly-right");
    gifts[2].classList.add("show", "fly-up");
    gifts[3].classList.add("show", "fly-down");
  }, 100);
});
