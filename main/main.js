const body = document.querySelector ('body')
const clickMe = document.querySelector('.logo-dark')
const burGer = document.querySelector('.line')
const change = document.querySelector('.hamburger')
clickMe.addEventListener('click', function (){
    body.classList.toggle('dark-theme')
})
        hamburger = document.querySelector(".hamburger");
        hamburger.onclick = function(){
            change.classList.toggle("active")
            navBar = document.querySelector(".navbar");
            navBar.classList.toggle("active")
        }