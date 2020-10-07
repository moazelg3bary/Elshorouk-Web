/*global console, alert, swal, prompt, $*/
window.onload = function () {
  'use strict';

  // init global varibles
  var toNum,
      calc,
      clear,
      container = document.getElementById('view_img'),
      children = document.getElementById('children'),
      total_cart = document.querySelector('.total-cart'),
      ditlist = document.querySelectorAll('.ditlist'),
      heart = document.querySelectorAll('.heart'),
      notification_cart = document.querySelector('.notification-cart'),
      notification_heart = document.querySelector('.notification-heart');



  // get cart & increase number
  for (let i = 0; i < ditlist.length; i++) {
      ditlist[i].lastElementChild.onclick = function () {
        toNum = parseInt(total_cart.innerHTML);
        calc = toNum += 1;
        total_cart.innerHTML = calc;

        notification_cart.classList.add('show')
        
        notification_cart.classList.contains('show') ? clear = setTimeout(function () { notification_cart.classList.remove('show') }, 3000) : null
    }
    // heart[i].onclick = function() {

    //   this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')

    //   notification_heart.classList.add('show')
      
    //   notification_heart.classList.contains('show') ? clear = setTimeout(function () { notification_heart.classList.remove('show') }, 3000) : null
    // }
  }      

  
  for(let i = 0; i < children.children.length; i++) {

    children.children[i].onclick = function() {

      // container.firstElementChild.setAttribute('src', this.firstElementChild.getAttribute('src'));

      for (let i = 0; i < this.parentElement.children.length; i++) {
        container.children[i].classList.remove('active')
        this.parentElement.children[i].classList.remove('active')

      }
      container.children[i].classList.add('active')
      this.classList.add('active')
    }
  }
  
}

$(document).ready(() => {
  $("html").niceScroll({
    cursorcolor: "#2A509F",
    cursorwidth: "7px",
    background: "transparent",
    cursorborder: "none",
    cursorborderradius: 15
  });
})
