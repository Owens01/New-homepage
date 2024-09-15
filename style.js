var mobileNavopen = document.querySelector(".mobile-nav__open");
var mobileNav = document.querySelector(".mobile-nav");
var backDrop = document.querySelector(".backdrop");
var mobileClose = document.querySelector(".mobile-nav__close");

mobileNavopen.addEventListener("click", function() {
    mobileNav.style.display = "block";
    backDrop.style.display = "block";

    // setTimeout(function() {
    //     mobileNav.style.display = "block";
    //     backDrop.style.display = "block";
    // }, 10);
})

mobileClose.addEventListener("click", function() {
    mobileNav.style.display = "none";
    backDrop.style.display = "none";

    // setTimeout(function() {
    //     mobileNav.style.display = "none";
    //     backDrop.style.display = "none";
    // }, 10);
})