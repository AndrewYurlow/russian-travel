let popup = document.querySelector('.popup');
let buttonAbout = document.querySelector('.button-about');
let buttonClosePopup = document.querySelector('.popup__close-button');

const popupToggle = function() {
  popup.classList.toggle('popup_opened');
}

const popupClose = function(event){
  if(event.target === event.currentTarget){
    popupToggle();
  }
}

buttonAbout.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);
popup.addEventListener('click', popupClose);