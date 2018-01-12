var burger = document.querySelector('.burger');
var menu = document.querySelector('.navbar-menu')
burger.addEventListener('click', function() {
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active')
});


let content = document.querySelectorAll(".fadeIn")
let logo = document.querySelectorAll(".navbar-brand")

let tl = new TimelineMax({delay: .3})
      tl.to(content, 1, {opacity: 1})
      tl.to(logo, 1, {top: 0}, "-=1")


function showModal (x) {
  let modalTarget = x.getAttribute('target')
  let modal = document.getElementById(modalTarget)
  modal.className += " is-active";

  let close = modal.querySelector('.delete')
  close.addEventListener('click', hideModal)
  function hideModal () {
    modal.classList.remove("is-active")
  }
}
