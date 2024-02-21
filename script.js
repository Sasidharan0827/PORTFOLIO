const header =document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 120);

})
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var contactSection = document.getElementById("contact");
        var scrollUpButton = document.querySelector(".scroll-up");

        // Get the position of the contact section relative to the viewport
        var contactSectionTop = contactSection.getBoundingClientRect().top;

        // Show the scroll-up button if the contact section is in the viewport
        if (contactSectionTop < window.innerHeight) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    });
});
   let menu=document.querySelector('#menu-icon');
   let navlist=document.querySelector('.navlist');
   menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
   }
   window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');

   };