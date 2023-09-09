const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 5)) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  })
});

AOS.init({
    once: false,
  });

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



function opentab(tabName) {
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-link", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active-link";
}


document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('#allaboutme');
  let hasScrolled = false;

  window.addEventListener('scroll', function() {
      hasScrolled = true;
  });

  let observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
  };

  let fadeInObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting && hasScrolled) {
              section.style.animationName = 'fadeIn';
              section.style.animationDuration = '2s';
              section.style.animationFillMode = 'forwards';
              observer.disconnect();
          }
      });
  }, observerOptions);

  fadeInObserver.observe(section);
});



let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}