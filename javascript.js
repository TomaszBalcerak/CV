<<<<<<< HEAD

//efekt ruszającej się strzałki//
//var arrow=document.getElementById("arrow");//
var $arrow = $("#arrow");
var $off = $("main").offset().top;

$("#arrow").click(() => {
	$("body,html").animate({
		scrollTop: $("main").offset().top}, //odległosc od góry//
		500);//1sekunda//
	});

//hamburger button zmiana//
$("#menu-button").click(()=>{
  $(this).toggleClass("active");
  $("#line-1").toggleClass("active");
  $("#line-2").toggleClass("active");
  $("#line-3").toggleClass("active");
  $("#menu").slideToggle("slow");
});


//efekt zanikania zdjęcia//
  //zmienne globalne wykorzystywane we wszystkich projektach ponizej//
  const $doc = $(document);/*pozwala stosować jquery*/
  const $header = $('.photo');
  const $main = $('main');

//zanikanie zdjęcia głównego//
$doc.on("scroll", function(){
  const scrollPos = $doc.scrollTop();//aktualna wartość scrolla//
  const sectionOffset = $main.offset().top;//ile od początku strony//
  const headerHeight = $header.outerHeight();//wysokość z borderem i paddingiem//

  $header.css({
  'opacity' : 1 - scrollPos/headerHeight,//działanie pozwalające utrzymywać wartość opacity jako zmienną wyliczaną z pozycji scrollTop-outerHeight-mega fajny efekt!!//
  'filter': 'grayscale(' +scrollPos/headerHeight +')'//tez korzysta ze zmiennej wyliczającej pozycję. Dwójkę daliśmy by szybciej efekt szarości zachodzil//
  })
})

//pojawianie się i zanikanie//
$(window).scroll(() => {
	if($(this).scrollTop()>300)$('.class').fadeOut();else $('.class').fadeIn();
});

//language switch//

//TIMELINE//

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");
  var edu=document.querySelectorAll(".studyElement");
  var hob=document.querySelectorAll(".icon");
  var star=document.querySelectorAll(".star p");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
//efekt pojawiających się doświadczeń na linii czasu//
  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  //efekt pojawiających się paneli z edukacją//
  function call() {
for (let i = 0; i < edu.length; i++) {
  if (isElementInViewport(edu[i])) {
  edu[i].classList.add("int");
}
}
}
//efekt opadających zainteresowań//
function calling() {
for (let i = 0; i < hob.length; i++) {
  if (isElementInViewport(hob[i])) {
  hob[i].classList.add("show");
}
}
}
//efekt wlatujących gwiazd//
function castar() {
for (let i = 0; i < star.length; i++) {
  if (isElementInViewport(star[i])) {
    star[i].classList.add("starBlack");
  
  /*Ta opcja pomaga nadac transition na before jbc - na razie rezygnuje z niej
  var styleElem = document.head.appendChild(document.createElement("style"));
  styleElem.innerHTML = ".star.pol:before {transform: translate(0);opacity:1;}.star.eng:before {transform: translate(0);opacity:1;}.star.ger:before {transform: translate(0);opacity:1}.star.rus:before {transform: translate(0);opacity:1}";*/
}
}
}
  // listen for events
  window.addEventListener("load", callbackFunc,);
  window.addEventListener("resize", callbackFunc,);
  window.addEventListener("scroll", callbackFunc,);
  window.addEventListener("load", call);
  window.addEventListener("resize", call);
  window.addEventListener("scroll", call);
  window.addEventListener("load", calling);
  window.addEventListener("resize", calling);
  window.addEventListener("scroll", calling);
  window.addEventListener("load", castar);
  window.addEventListener("resize", castar);
  window.addEventListener("scroll", castar);

})();

//efekt rozwijania accordion//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("act");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
=======

//efekt ruszającej się strzałki//
//var arrow=document.getElementById("arrow");//
var $arrow = $("#arrow");
var $off = $("main").offset().top;

$("#arrow").click(() => {
	$("body,html").animate({
		scrollTop: $("main").offset().top}, //odległosc od góry//
		500);//1sekunda//
	});

//hamburger button zmiana//
$("#menu-button").click(()=>{
  $(this).toggleClass("active");
  $("#line-1").toggleClass("active");
  $("#line-2").toggleClass("active");
  $("#line-3").toggleClass("active");
  $("#menu").slideToggle("slow");
});


//efekt zanikania zdjęcia//
  //zmienne globalne wykorzystywane we wszystkich projektach ponizej//
  const $doc = $(document);/*pozwala stosować jquery*/
  const $header = $('.photo');
  const $main = $('main');

//zanikanie zdjęcia głównego//
$doc.on("scroll", function(){
  const scrollPos = $doc.scrollTop();//aktualna wartość scrolla//
  const sectionOffset = $main.offset().top;//ile od początku strony//
  const headerHeight = $header.outerHeight();//wysokość z borderem i paddingiem//

  $header.css({
  'opacity' : 1 - scrollPos/headerHeight,//działanie pozwalające utrzymywać wartość opacity jako zmienną wyliczaną z pozycji scrollTop-outerHeight-mega fajny efekt!!//
  'filter': 'grayscale(' +scrollPos/headerHeight +')'//tez korzysta ze zmiennej wyliczającej pozycję. Dwójkę daliśmy by szybciej efekt szarości zachodzil//
  })
})

//pojawianie się i zanikanie//
$(window).scroll(() => {
	if($(this).scrollTop()>300)$('.class').fadeOut();else $('.class').fadeIn();
});

//language switch//

//TIMELINE//

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");
  var edu=document.querySelectorAll(".studyElement");
  var hob=document.querySelectorAll(".icon");
  var star=document.querySelectorAll(".star p");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
//efekt pojawiających się doświadczeń na linii czasu//
  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  //efekt pojawiających się paneli z edukacją//
  function call() {
for (let i = 0; i < edu.length; i++) {
  if (isElementInViewport(edu[i])) {
  edu[i].classList.add("int");
}
}
}
//efekt opadających zainteresowań//
function calling() {
for (let i = 0; i < hob.length; i++) {
  if (isElementInViewport(hob[i])) {
  hob[i].classList.add("show");
}
}
}
//efekt wlatujących gwiazd//
function castar() {
for (let i = 0; i < star.length; i++) {
  if (isElementInViewport(star[i])) {
    star[i].classList.add("starBlack");
  
  /*Ta opcja pomaga nadac transition na before jbc - na razie rezygnuje z niej
  var styleElem = document.head.appendChild(document.createElement("style"));
  styleElem.innerHTML = ".star.pol:before {transform: translate(0);opacity:1;}.star.eng:before {transform: translate(0);opacity:1;}.star.ger:before {transform: translate(0);opacity:1}.star.rus:before {transform: translate(0);opacity:1}";*/
}
}
}
  // listen for events
  window.addEventListener("load", callbackFunc,);
  window.addEventListener("resize", callbackFunc,);
  window.addEventListener("scroll", callbackFunc,);
  window.addEventListener("load", call);
  window.addEventListener("resize", call);
  window.addEventListener("scroll", call);
  window.addEventListener("load", calling);
  window.addEventListener("resize", calling);
  window.addEventListener("scroll", calling);
  window.addEventListener("load", castar);
  window.addEventListener("resize", castar);
  window.addEventListener("scroll", castar);

})();

//efekt rozwijania accordion//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("act");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
>>>>>>> b4ef33e7f2cb0e08370709f822ede042e9d11335
}