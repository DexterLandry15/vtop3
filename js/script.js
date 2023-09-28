
function lang_btn_event(el) {
  let text =  el.querySelector('span#lang_btn_text');
  if (text.innerHTML == 'en') {
    text.innerHTML = 'ru'
  } else {
    text.innerHTML = 'en'
  }
}