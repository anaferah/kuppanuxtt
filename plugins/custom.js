// Switcher for faqs and pricing pages
document.addEventListener('DOMContentLoaded', () => {

  var e = document.getElementById("filt-monthly"),
      d = document.getElementById("filt-hourly"),
      t = document.getElementById("switcher"),
      m = document.getElementById("monthly"),
      y = document.getElementById("hourly");
  
  
  e.addEventListener("click", function(){
    t.checked = false;
    e.classList.add("toggler--is-active");
    d.classList.remove("toggler--is-active");
    m.classList.remove("hide");
    y.classList.add("hide");
  });
  
  d.addEventListener("click", function(){
    t.checked = true;
    d.classList.add("toggler--is-active");
    e.classList.remove("toggler--is-active");
    m.classList.add("hide");
    y.classList.remove("hide");
  });
  
  t.addEventListener("click", function(){
    d.classList.toggle("toggler--is-active");
    e.classList.toggle("toggler--is-active");
    m.classList.toggle("hide");
    y.classList.toggle("hide");
  })
  
  });
  
  
  
  // Accordion FAQs

  const accordionContainer = document.querySelector(".accordion-container");

  // select accordion header
  accordionContainer.addEventListener("click", (e) => {
  const accordionHeader = e.target.closest(".accordion__header");

  if (accordionHeader) {
      const accordion = accordionHeader.parentElement;
      const accordionContent = accordionHeader.nextElementSibling;
      const accordionInner = accordionContent.children[0];

      let height;

      if (accordion.classList.contains("is-open")) {
         height = 0;
      } else {
         height = accordionInner.getBoundingClientRect().height;
      }

      accordion.classList.toggle("is-open");
      accordionContent.style.height = `${height}px`;
   }
});


const accordionContainer2 = document.querySelector(".accordion-container2");

// select accordion header
accordionContainer2.addEventListener("click", (e) => {
const accordionHeader = e.target.closest(".accordion__header");

if (accordionHeader) {
    const accordion = accordionHeader.parentElement;
    const accordionContent = accordionHeader.nextElementSibling;
    const accordionInner = accordionContent.children[0];

    let height;

    if (accordion.classList.contains("is-open")) {
       height = 0;
    } else {
       height = accordionInner.getBoundingClientRect().height;
    }

    accordion.classList.toggle("is-open");
    accordionContent.style.height = `${height}px`;
 }
});




  // Header Mobile
var navTrigger = document.getElementsByClassName('nav-trigger')[0],
naviTrigger = document.getElementsByClassName('navi-trigger')[0],
navi1Trigger = document.getElementsByClassName('navi1-trigger')[0],
navi2Trigger = document.getElementsByClassName('navi2-trigger')[0],
navi3Trigger = document.getElementsByClassName('navi3-trigger')[0],
body = document.getElementsByTagName('body')[0]

navTrigger.addEventListener('click', toggleNavigation)
naviTrigger.addEventListener('click', toggleNavigation)
navi1Trigger.addEventListener('click', toggleNavigation)
navi2Trigger.addEventListener('click', toggleNavigation)
navi3Trigger.addEventListener('click', toggleNavigation)

function toggleNavigation(event) {
  event.preventDefault()
  body.classList.toggle('nav-open')
};