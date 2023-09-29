
function lang_btn_event(el) {
  let text =  el.querySelector('span#lang_btn_text');
  if (text.innerHTML == 'en') {
    text.innerHTML = 'ru'
  } else {
    text.innerHTML = 'en'
  }
};
document.addEventListener("DOMContentLoaded", () => {
  let parrent = document.querySelectorAll('.animated-bg #line');

  for (line of parrent) {
    let caps = line.querySelectorAll('object');
    console.log(caps);
    for(el of caps) {
      line.appendChild(el.cloneNode(true));
    };
  };
});

