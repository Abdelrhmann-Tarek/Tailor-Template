// ==================== animation ===========================

var preloader = document.getElementsByClassName("preloader")[0];
window.addEventListener("load", function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 300ms";
    preloader.style.opacity = 0;
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1000);
  }, 1000);
});

// ===================================

var header = document.getElementsByClassName("header")[0];

var offers = document.getElementsByClassName("offer");
var services = document.getElementsByClassName("service");
window.onscroll = function () {
  if (scrollY > 440) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards";
  } else {
    header.classList.remove("fixed-bar");
  }
  if (scrollY > 1600) {
    var delay = 0;
    for (var i = 0; i < services.length; i++) {
      services[i].style.animation = `fadeInUp 1.5s ${delay}s forwards`;
      delay += 0.4;
    }
  }
};

//slider
var testimonials = document.getElementsByClassName("testimonial");
var slideNumber = document.getElementById("slide-number");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

var currentIndex = 0;
var autoPlayTimer;

function clearTestimonials() {
  for (var i = 0; i < testimonials.length; i++) {
    testimonials[i].classList.remove(
      "active",
      "slide-in-left",
      "slide-in-right"
    );
    testimonials[i].style.display = "none";
  }
}

function showTestimonial(index, direction) {
  clearTestimonials();

  var current = testimonials[index];
  current.style.display = "block";

  if (direction === "right") {
    current.classList.add("slide-in-right");
  } else {
    current.classList.add("slide-in-left");
  }

  void current.offsetWidth;
  current.classList.add("active");

  slideNumber.textContent = index + 1;
}

function updateSlider(step) {
  var direction = step > 0 ? "right" : "left";
  currentIndex =
    (currentIndex + step + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex, direction);
}

function startAutoplay() {
  autoPlayTimer = setInterval(function () {
    updateSlider(1);
  }, 3000);
}

function resetAutoplay() {
  clearInterval(autoPlayTimer);
  startAutoplay();
}

nextBtn.onclick = function () {
  updateSlider(1);
  resetAutoplay();
};

prevBtn.onclick = function () {
  updateSlider(-1);
  resetAutoplay();
};

// Start
showTestimonial(currentIndex, "right");
startAutoplay();

// footer
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
