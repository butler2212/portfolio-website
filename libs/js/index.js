//Preloader

setTimeout(function(){
  $('.loader_bg').fadeToggle();
      }, 1500);

//Nav hamburger

const navToggle =document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click',() => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click',() => {
    document.body.classList.remove ('nav-open');
  })
});

//Saba Image Change:
document.getElementById("headingtext").addEventListener("mouseover", mouseOver);
document.getElementById("headingtext").addEventListener("mouseout", mouseOut);

function mouseOver () {
  image = document.getElementById("imgDiv");
  image.src = "img/saba-01.jpg";
}

function mouseOut() {
  image = document.getElementById("imgDiv");
  image.src = "img/jordan-02.jpg";
}


//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}