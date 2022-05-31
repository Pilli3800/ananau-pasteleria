const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLink1 = document.querySelector(".nav-menu-item-nosotros");
const navLink2 = document.querySelector(".nav-menu-item-contacto");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

navLink1.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  console.log("Hola Mundo");
});

navLink2.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  console.log("Hola Mundo");
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("nav-menu-link").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        100,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      200
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });
});

/* user defined variables */
var timeOnSlide = 3,
  // the time each image will remain static on the screen, measured in seconds
  timeBetweenSlides = 1,
  // the time taken to transition between images, measured in seconds

  // test if the browser supports animation, and if it needs a vendor prefix to do so
  animationstring = "animation",
  animation = false,
  keyframeprefix = "",
  domPrefixes = "Webkit Moz O Khtml".split(" "),
  // array of possible vendor prefixes
  pfx = "",
  slidy = document.getElementById("slidy");
if (slidy.style.animationName !== undefined) {
  animation = true;
}
// browser supports keyframe animation w/o prefixes

if (animation === false) {
  for (var i = 0; i < domPrefixes.length; i++) {
    if (slidy.style[domPrefixes[i] + "AnimationName"] !== undefined) {
      pfx = domPrefixes[i];
      animationstring = pfx + "Animation";
      keyframeprefix = "-" + pfx.toLowerCase() + "-";
      animation = true;
      break;
    }
  }
}

if (animation === false) {
  // animate in JavaScript fallback
} else {
  var images = slidy.getElementsByTagName("img"),
    firstImg = images[0],
    // get the first image inside the "slidy" element.
    imgWrap = firstImg.cloneNode(false); // copy it.
  slidy.appendChild(imgWrap); // add the clone to the end of the images
  var imgCount = images.length, // count the number of images in the slide, including the new cloned element
    totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
    slideRatio = (timeOnSlide / totalTime) * 100, // determine the percentage of time an induvidual image is held static during the animation
    moveRatio = (timeBetweenSlides / totalTime) * 100, // determine the percentage of time for an individual movement
    basePercentage = 100 / imgCount, // work out how wide each image should be in the slidy, as a percentage.
    position = 0, // set the initial position of the slidy element
    css = document.createElement("style"); // start marking a new style sheet
  css.type = "text/css";
  css.innerHTML +=
    "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " +
    imgCount * 100 +
    "%;  }\n"; // set the width for the slidy container
  css.innerHTML +=
    "#slidy img { float: left; width: " + basePercentage + "%; }\n";
  css.innerHTML += "@" + keyframeprefix + "keyframes slidy {\n";
  for (i = 0; i < imgCount - 1; i++) {
    //
    position += slideRatio; // make the keyframe the position of the image
    css.innerHTML += position + "% { left: -" + i * 100 + "%; }\n";
    position += moveRatio; // make the postion for the _next_ slide
    css.innerHTML += position + "% { left: -" + (i + 1) * 100 + "%; }\n";
  }
  css.innerHTML += "}\n";
  css.innerHTML +=
    "#slidy { left: 0%; " +
    keyframeprefix +
    "transform: translate3d(0,0,0); " +
    keyframeprefix +
    "animation: " +
    totalTime +
    "s slidy infinite; }\n"; // call on the completed keyframe animation sequence
  document.body.appendChild(css); // add the new stylesheet to the end of the document
}
