// DOM Declaration
const nav = document.getElementById("header_navigation")
const closeIco = document.getElementById("close-ico")

const toggleMenu = (displayState) => {
  nav.style.display = displayState;
  closeIco.style.display = displayState;
}