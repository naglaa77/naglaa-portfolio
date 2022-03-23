let nav =document.querySelector('.navbar');
let navSpan = document.querySelector(".logo span ");
let typingAfter = document.querySelector('.text-3 span');
window.addEventListener('scroll', () => {
    if(window.scrollY > 20) {
        nav.classList.add('change');
        navSpan.style.color = '#fff';
    }else {
        nav.classList.remove('change');
    }
});

// typing text
let texts = ["developper","Design"];
let count = 0;
let index = 0;
let curentText = '';
let letter = '';
(function type() {
    if (count === texts.length) {
        count = 0;
    }
    curentText = texts[count];
    letter = curentText.slice(0,++index);
    document.querySelector('.')
}());