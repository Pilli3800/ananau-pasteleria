// Navbar

const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

// Slideshow

let slideIndex = 0;
let slideTimer;
const slideDelay = 10;
const slides = document.getElementsByClassName("slide");
const pills = document.getElementsByClassName("pill");
const bar = document.getElementsByClassName("progress");

ShowSlide = (index) => {
  if (index == slides.length)
    slideIndex = 0;
  else if (index < 0)
    slideIndex = slides.length-1;
  else
    slideIndex = index;
  
  for (i=0; i< slides.length; i++) {
    slides[i].style.display = "none";
    pills[i].classList.remove("active");
  }
  
  SlideReset();
  slides[slideIndex].style.display = "block";
  pills[slideIndex].classList.add("active");
}

SlideReset = () => {
  window.clearInterval(slideTimer);
  
  bar[0].style.animation = null;
  
  setTimeout(function(){
    bar[0].style.animation = "progression linear " + (slideDelay-.11) + "s";
  
    slideTimer = window.setInterval(function(){
      ShowSlide(slideIndex+=1);
    }, slideDelay*1000);
  },10);
}

for (i=0;i<pills.length;i++) {
  pills[i].addEventListener("click", function(){
    let si = this.getAttribute("data-index");
    ShowSlide(Number(si));
  })
};

neg.addEventListener("click", function(){
  ShowSlide(slideIndex-=1);
});
pos.addEventListener("click", function(){
  ShowSlide(slideIndex+=1);
});

ShowSlide(slideIndex);

// Navbar

const navbarMenu = navbar.querySelector("#navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

document
  .getElementById("options")
  .querySelectorAll("input[name='navtype']")
  .forEach((option) => {
    option.addEventListener("change", (e) => {
      const navType = e.target.id.split("-").join(" ");
      navbarMenu.classList = navType;
    });
  });

