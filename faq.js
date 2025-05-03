// console.log("FAQ");
// window.addEventListener("DOMContentLoaded", function () {
//   console.log("FAQ");
//   var acc = document.getElementsByClassName("accordion");
//   console.log(acc);
//   for (var i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       this.parentElement.classList.toggle("active");

//       var panel = this.nextElementSibling;
//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       } else {
//         panel.style.display = "block";
//       }
//     });
//   }
// });
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var panel = this.nextElementSibling;
    var style = window.getComputedStyle(panel);
    var icon = this.querySelector(".icon");

    if (style.display === "none") {
      panel.style.display = "block";
      if (icon) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      }
    } else {
      panel.style.display = "none";
      if (icon) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    }
  });
}
