// const navOpenButton = document.querySelector("#xnav-show");
// const navCloseButton = document.querySelector("#xnav-close");
// const navElement = document.querySelector('nav');

// navOpenButton.addEventListener('click', function() {
//     navElement.classList.remove('hide');
// });

// navCloseButton.addEventListener('click', function() {
//     navElement.classList.add('hide');
// });
const openNavButton = document.querySelector("#open-nav");
const closeNavButton = document.querySelector("#close-nav");
const nav = document.querySelector("nav");
openNavButton.addEventListener("click", function () {
 nav.classList.toggle("hide");
});
closeNavButton.addEventListener("click", function () {
 nav.classList.toggle("hide");
});
