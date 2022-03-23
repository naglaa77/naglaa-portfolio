let nav =document.querySelector('.navbar');
let navSpan = document.querySelector(".logo span ");
let navLi = document.querySelectorAll('.menu li');
let navList = document.querySelectorAll('.menu li a');
console.log(navList);
window.addEventListener('scroll', () => {
    if(window.scrollY > 20) {
        nav.classList.add('change');
        navSpan.style.color = '#fff';
    }else {
        nav.classList.remove('change');
    }
});