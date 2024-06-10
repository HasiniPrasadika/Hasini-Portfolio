function toggleMenuTabs() {
  var navTabs = document.getElementById("menutab");
  navTabs.classList.toggle("show");
}

var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
function setupNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });

      history.pushState(null, null, `#${targetId}`);

      refreshContent(targetId);
    });
  });
}

function refreshContent(sectionId) {
  const section = document.getElementById(sectionId);

  section.innerHTML += "";
}

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 80;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function initializeCarousel(containerId) {
    const container = document.getElementById(containerId);
    const images = container.querySelectorAll(".carousel-images img");
    const dots = container.querySelectorAll(".carousel-dots .dot");

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showImage(index);
      });
    });

    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
      currentIndex = index;
    }

    function autoShowImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    container.addEventListener("mouseenter", () => {
      container.intervalId = setInterval(autoShowImage, 1500);
    });

    container.addEventListener("mouseleave", () => {
      clearInterval(container.intervalId);
    });

    showImage(currentIndex);
  }

  initializeCarousel("project-box-1");
  initializeCarousel("project-box-2");
  initializeCarousel("project-box-3");
});
document.addEventListener('DOMContentLoaded', function() {
  // Show preloader and hide main content
  document.body.classList.add('loading');

  setTimeout(function() {
    // Hide preloader and show main content
    document.getElementById('preloader').style.display = 'none';
    document.body.classList.remove('loading');
  }, 2000); // 5000 milliseconds = 5 seconds
});


