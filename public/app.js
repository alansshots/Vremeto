const elementFive = document.querySelector('.element-five');

// if(window.innerWidth < 1250) {
//     elementFive.classList.add("hidden");
// }

window.addEventListener("resize", function() {
    if(window.innerWidth < 1250 && window.innerWidth > 767) {
        elementFive.classList.add("hidden");
    } else {
        elementFive.classList.remove("hidden");
    }
  });