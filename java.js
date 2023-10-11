const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})





let menu =document.querySelector('#menu-icon');
let sidemenu =document.querySelector('.sidemenu');
let clsbtn =document.querySelector('.cls-btn')




  clsbtn.addEventListener("click", function () {
    sidemenu.classList.remove("side");
  });
  
  menu.addEventListener("click", function () {
    sidemenu.classList.add("side");
  });

