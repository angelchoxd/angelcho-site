const projectsButton = document.getElementById("projectsButton");
const toast = document.getElementById("toast");

let toastTimer;

projectsButton.addEventListener("click", () => {
  clearTimeout(toastTimer);

  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
});

document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
