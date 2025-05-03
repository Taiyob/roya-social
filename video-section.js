// console.log("video section script loaded");

// window.addEventListener("load", function () {
//   const sliders = document.querySelectorAll(".custom-slider");

//   sliders.forEach((slider) => {
//     const track = slider.querySelector(".slider-track");
//     const prevBtn = slider.querySelector(".custom-prev");
//     const nextBtn = slider.querySelector(".custom-next");
//     const cards = slider.querySelectorAll(".card");

//     if (!track || !prevBtn || !nextBtn || cards.length === 0) {
//       console.warn("One of the slider elements not found");
//       return;
//     }

//     let currentIndex = 0;
//     const cardWidth = cards[0].offsetWidth + 20;

//     nextBtn.addEventListener("click", () => {
//       if (currentIndex < cards.length - 1) {
//         currentIndex++;
//         track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
//       }
//     });

//     prevBtn.addEventListener("click", () => {
//       if (currentIndex > 0) {
//         currentIndex--;
//         track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
//       }
//     });
//   });
// });

console.log("video section script loaded");

window.addEventListener("load", function () {
  const sliders = document.querySelectorAll(".custom-slider");

  sliders.forEach((slider) => {
    const track = slider.querySelector(".slider-track");
    const nextBtn = slider.querySelector(".custom-next");
    const cards = slider.querySelectorAll(".card");

    if (!track || !nextBtn || cards.length === 0) {
      console.warn("Slider elements not found");
      return;
    }

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20;

    nextBtn.addEventListener("click", () => {
      currentIndex++;

      if (currentIndex >= cards.length) {
        currentIndex = 0; // reset to first slide
      }

      track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    });
  });
});
