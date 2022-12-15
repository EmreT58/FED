// JavaScript Document
var hbmContainer = document.querySelector('#hbm-container');
var hbmOpenButton= document.querySelector('#hbm-open'); 
var hbmCloseButton = document.querySelector('#hbm-close'); 

hbmOpenButton.addEventListener('click', openMenu);
hbmCloseButton.addEventListener('click', sluitMenu);

/* menu openen de MENU button */
function openMenu() {  
  hbmContainer.classList.add("toonMenu");
}

/* menu sluiten met de sluit button */
function sluitMenu() {
  hbmContainer.classList.remove("toonMenu");
}

/* bonus: menu sluiten met escape */
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    hbmContainer.classList.remove("toonMenu");
  }
}