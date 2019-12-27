(function() {
const options = {
  threshold: [0.5]
};

const observer = new IntersectionObserver(entry => {
  entry.forEach(change => {
    console.log(change.isIntersecting);

    if (change.isIntersecting) {
      change.target.classList.add("visible");
    }
  });
}, options);

[...document.querySelectorAll(".about__title")].forEach(elm => observer.observe(elm));

[...document.querySelectorAll(".about__description")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".services__top")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".workers__text")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".feature__top")].forEach(elm => observer.observe(elm));


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("about__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}
    
var slideInd = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("about__item2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideInd++;
  if (slideInd > slides.length) {slideInd = 1}
  slides[slideInd-1].style.display = "block";
  setTimeout(showSlides2, 5000);
}

var slideI = 0;
showSlides3();

$('.change__left>a').click(function() {
  var i;
  var slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideI++;
  if (slideI > slides.length) {slideI = 1}
  slides[slideI-1].style.display = "block";
});

$('.change__right>a').click(function() {
  var i;
  var slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideI++;
  if (slideI > slides.length) {slideI = 1}
  slides[slideI-1].style.display = "block";
});
    
function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("review__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideI++;
  if (slideI > slides.length) {slideI = 1}
  slides[slideI-1].style.display = "block";
  setTimeout(showSlides3, 5000);
}

  $(".menu__button").click(function() {
    $(".menu__list").css("display", "block");
  });

  let lastHiddenItem = '';
  let lastWrapItem = '';

  $(".sitem__button1").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden1') {
      $(".sitem__hidden1").show(300);
      $(".sitem__wrap1").hide();

      lastWrapItem = '.sitem__wrap1';
      lastHiddenItem = ".sitem__hidden1";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button2").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden2') {
      $(".sitem__hidden2").show(300);
      $(".sitem__wrap2").hide();

      lastWrapItem = '.sitem__wrap2';
      lastHiddenItem = ".sitem__hidden2";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button3").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden3') {
      $(".sitem__hidden3").show(300);
      $(".sitem__wrap3").hide();

      lastWrapItem = '.sitem__wrap3';
      lastHiddenItem = ".sitem__hidden3";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button4").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden4') {
      $(".sitem__hidden4").show(300);
      $(".sitem__wrap4").hide();

      lastWrapItem = '.sitem__wrap4';
      lastHiddenItem = ".sitem__hidden4";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button5").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden5') {
      $(".sitem__hidden5").show(300);
      $(".sitem__wrap5").hide();

      lastWrapItem = '.sitem__wrap5';
      lastHiddenItem = ".sitem__hidden5";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button6").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden6') {
      $(".sitem__hidden6").show(300);
      $(".sitem__wrap6").hide();

      lastWrapItem = '.sitem__wrap6';
      lastHiddenItem = ".sitem__hidden6";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });
})()
