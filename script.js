let menu = document.getElementById("menu");
let btn = document.getElementById("menuBtn");
let poczatek = document.getElementById("poczatek");
let zdjecia = document.getElementById("zdjecia");
let zdjeciaBtn = document.getElementById("zdjeciaBtn");
let info = document.getElementById("info");
let ankietaBtn = document.getElementById("ankietaBtn");
let ankieta = document.getElementById("ankieta");
let tabelaBtn = document.getElementById("tabelaBtn");
let tabela = document.getElementById("tabela");
let listaBtn = document.getElementById("listaBtn");
let lista = document.getElementById("lista");
let isOpen = false;
function Media(event) {
    if (event.matches) {
        btn.onclick = function () {
            isOpen = !isOpen;
            if (isOpen) {
                menu.style.transform = "translateY(0)";
                menu.style.transition = "transform 0.4s ease-in-out";
                btn.querySelectorAll(".menuLine, .menuLine1").forEach(function (line) {
                    line.style.transition = "transform 0.4s ease-in-out";
                    line.style.transform = "scaleY(1.5)";
                });
            } else {
                menu.style.transform = "translateY(-100%)";
                menu.style.transition = "transform 0.4s ease-in-out";
                btn.querySelectorAll(".menuLine, .menuLine1").forEach(function (line) {
                    line.style.transition = "transform 0.4s ease-in-out";
                    line.style.transform = "scaleY(1)";
                });
            }
        };
    } else {
        btn.onclick = function () {
            isOpen = !isOpen;
            if (isOpen) {
                menu.style.transform = "translateX(0)";
                menu.style.transition = "transform 0.4s ease-in-out";
                btn.querySelectorAll(".menuLine, .menuLine1").forEach(function (line) {
                    line.style.transition = "transform 0.4s ease-in-out";
                    line.style.transform = "scaleX(2)";
                });
            } else {
                menu.style.transform = "translateX(-100%)";
                menu.style.transition = "transform 0.4s ease-in-out";
                btn.querySelectorAll(".menuLine, .menuLine1").forEach(function (line) {
                    line.style.transition = "transform 0.4s ease-in-out";
                    line.style.transform = "scaleX(1)";
                });
            }
        };
    }
}

poczatek.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

zdjeciaBtn.addEventListener('click', function () {
    zdjecia.scrollIntoView({ behavior: 'smooth' });
});

infoBtn.addEventListener('click', function () {
    info.scrollIntoView({ behavior: 'smooth' });
});

ankietaBtn.addEventListener('click', function () {
    ankieta.scrollIntoView({ behavior: 'smooth' });
});
tabelaBtn.addEventListener('click', function () {
    tabela.scrollIntoView({ behavior: 'smooth' });
});
listaBtn.addEventListener('click', function () {
    lista.scrollIntoView({ behavior: 'smooth' });
});
const mediaQuery = window.matchMedia("(max-width: 1200px)");
mediaQuery.addListener(Media);
Media(mediaQuery);  
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}