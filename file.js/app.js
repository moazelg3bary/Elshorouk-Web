/*global console, alert, swal, prompt, $*/
window.onload = function () {
  'use strict';
  var container = document.getElementById('view_img'),
      children = document.getElementById('children');

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
