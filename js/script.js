//simple change text btn =)
function lang_btn_event(el) {
  let text =  el.querySelector('span#lang_btn_text');
  if (text.innerHTML == 'en') {
    text.innerHTML = 'ru'
  } else {
    text.innerHTML = 'en'
  }
};

//dublicate caps
document.addEventListener("DOMContentLoaded", async () => {
  let parrent = document.querySelectorAll('.animated-bg #line');
  for await (line of parrent) {
    let caps = line.querySelectorAll('object');
    console.log(caps);
    for (let i = 0; i < 4; i++) {
      for await (el of caps) {
        line.appendChild(el.cloneNode(true));
      };      
    }
  };
});

// hide ugly loading of caps
window.addEventListener('load', function() {
  document.querySelector(".animated-bg").style.opacity = 1;
})

// lil mobile navbar
let nav_toggle = document.querySelector('.burger');
let nav_menu = document.querySelector('.navbar-mobile');
nav_toggle.addEventListener('click', function(){
  nav_toggle.classList.toggle('active');
  nav_menu.classList.toggle('active');
})