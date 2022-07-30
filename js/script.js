const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector(".bxmenu");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.hometext',{delay:350, origin:'left'})
sr.reveal('.hometext',{delay:350, origin:'right'})

sr.reveal('.subservice,.about,.portfolio,.service,.nonsocontact,.contact',{delay:200, origin:'bottom'})