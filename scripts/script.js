// JavaScript Document
var hbmStatus = false;
var hbmContainer = document.querySelector('#hbm-container');

var hbmOpenButton= document.querySelector('#hbm-open'); 
var hbmCloseButton = document.querySelector('#hbm-close'); 

hbmOpenButton.addEventListener('click', hamburgerMenu);
hbmCloseButton.addEventListener('click', hamburgerMenu);

function hamburgerMenu() {
    if (hbmStatus == false){
        hbmContainer.style.display = "flex";
        hbmStatus = true;
        }
        else {
            hbmContainer.style.display = "none";
            hbmStatus = false;
        }
}