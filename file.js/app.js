/*global console, alert, swal, prompt, $*/
window.onload = function () {
  'use strict';

  // init global varibles
  var toNum,
      calc,
      container = document.getElementById('view_img'),
      children = document.getElementById('children'),
      total_cart = document.querySelector('.total-cart'),
      ditlist = document.querySelectorAll('.ditlist');

  // get cart & increase number
  for (let i = 0; i < ditlist.length; i++) {
    ditlist[i].lastElementChild.onclick = function () {
      toNum = parseInt(total_cart.innerHTML);
      calc = toNum += 1;
      total_cart.innerHTML = calc;
    }

  }      

  
  for(let i = 0; i < children.children.length; i++) {

    children.children[i].onclick = function() {

      container.firstElementChild.setAttribute('src', this.firstElementChild.getAttribute('src'));

      for (let i = 0; i < this.parentElement.children.length; i++) {

        this.parentElement.children[i].classList.remove('active')

      }
      this.classList.add('active')
    }
  }
  
}
