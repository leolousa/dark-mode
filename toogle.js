const $html = document.querySelector('html')
const $checkbox = document.querySelector('#toogle')

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('dark-mode')
})