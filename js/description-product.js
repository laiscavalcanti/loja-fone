const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);

function handleClick() {
  this.classList.toggle("-active");
}

$stars.forEach(($star, itemSelected) => {
  $star.addEventListener("click", starSelected);

  function starSelected() {
    $stars.forEach((star, index) => {
      if (itemSelected >= index) {
        star.classList.add("-active");
      } else {
        star.classList.remove("-active");
      }s
    });
  }
});





