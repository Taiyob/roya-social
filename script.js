document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const dropdown = document.querySelector(".dropdown");
    console.log("Dropdown after timeout:", dropdown);

    if (dropdown) {
      const toggle = dropdown.querySelector(".dropdown-toggle");

      if (toggle) {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();
          dropdown.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
          if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
          }
        });
      }
    }

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
    }
  }, 300);
});

function selectCard(serviceCard) {
  document
    .querySelectorAll(".serviceCard")
    .forEach((c) => c.classList.remove("selected"));
  serviceCard.classList.add("selected");
}
