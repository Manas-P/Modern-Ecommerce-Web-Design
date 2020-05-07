function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*
============================================================
  JavaScript for Navigation Bar for Mobile Responsive Start
============================================================
*/
// Declaring Variables
const nav_btn = document.querySelector(".nav_btn"); // Responsive Navigation Button
const nav = document.querySelector(".nav-links"); // Drawer
const navLinks = document.querySelectorAll(".nav-links li"); // Drawer Menu List

//For loop to select each list since we can't pass muliple values on EventListener
for (eachLi of navLinks) {
  eachLi.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    nav_btn.classList.toggle(`toggle`);
  });
}

// Navigation Button Click Event
nav_btn.addEventListener("click", () => {
  nav.classList.toggle("nav-active"); //Calling Drawer
  nav_btn.classList.toggle(`toggle`); //nav Button Animation

  //To Prevent Scroll for Drawer on Mobile Responsive
  nav.addEventListener(
    "touchmove",
    (nav) => {
      nav.preventDefault();
    },
    false
  );
});
/*
=============================================================
  End of JavaScript for Navigation Bar for Mobile Responsive
=============================================================
*/

$(document).ready(function () {
  $(".toggleNight").click(function () {
    $(".toggleNight").toggleClass("active");
    $("body").toggleClass("night");
    //Change Logo
    /* !!! Code Not Working */
    /*var img1 = "./images/vector/logo.png",
      img2 = "./images/vector/logoWhite.png";
    var imgElement = document.getElementById("chImg");

    imgElement.src = imgElement.src === img1 ? img2 : img1;*/
  });
});


let img_id = "b";

function imgCh() {
  //Change Logo
  const logo = document.getElementById("chImg");

  if (img_id == "b") {
    logo.src = "./images/vector/logoWhite.png";
    img_id = "w";
  } else {
    logo.src = "./images/vector/logo.png";
    img_id = "b";
  }
}

// Preload

window.addEventListener("load", () => {
  const preload = document.querySelector(".preloader");
  preload.classList.add("preload_finish");
});

/*
===========
  Quantity
===========
*/
$(function () {
  $('input[type="number"]').niceNumber();
});

function addToCart() {
  alert("Item Added to Cart");
}
