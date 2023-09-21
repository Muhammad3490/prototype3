const About = document.getElementById("About");
let displayAbout = false;
About.addEventListener("click", () => {
  const subList = document.querySelector(".sub-list"); // Corrected selector
  if (displayAbout) {
    subList.style.display = "none"; // Removed [0]
  } else {
    subList.style.display = "grid"; // Removed [0]
  }

  displayAbout = !displayAbout;
});
