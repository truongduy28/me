// handle mousemove
window.onscroll = function() {
        projectScroll1();
        projectScroll2();
        skillScroll();
    }
    // sticky top
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener('load', function() {
    const pageload = document.querySelector('.page-load');

    setTimeout(function() {
        pageload.style.bottom = '100%';
        pageload.style.top = '-100%';
        // pageload.parentElement.removeChild(pageload);
    }, 2000);
})

const clock = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = t;
}

function menuNavBlock() {
    const menuNav = document.querySelector('.nav').style;
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('overlay-wait');
    menuNav.right = 0 + 'px';
}

function menuNavHidden() {
    const menuNav = document.querySelector('.nav').style;
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('overlay-wait');
    menuNav.right = -100 + '%';
}

const cursorHighlight = document.querySelector('.cursor-highlight');
document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorHighlight.style.left = x + 'px';
        cursorHighlight.style.top = y + 'px';
    })
    // animate scroll
function projectScroll1() {
    const scroll = document.querySelector('.element-1');
    let contentPosition = scroll.getBoundingClientRect().top;
    let screnPosition = window.innerHeight / 1.2;
    if (contentPosition < screnPosition) {
        scroll.classList.add('scroll-block');
        scroll.style.transform = 'translateX(0%)';
        scroll.style.opacity = '1';
    } else if (contentPosition > screnPosition) {
        scroll.style.transform = 'translateX(150%)';
        scroll.classList.remove('scroll-block');
        scroll.style.opacity = '0';
    } else {
        scroll.classList.remove('scroll-block');
        scroll.style.opacity = '0';
        scroll.style.transform = 'translateX(150%)'
    }
}

function projectScroll2() {
    const scroll = document.querySelector('.element-2');
    let contentPosition = scroll.getBoundingClientRect().top;
    let screnPosition = window.innerHeight / 1.2;
    if (contentPosition < screnPosition) {
        scroll.classList.add('scroll-block');
        scroll.style.transform = 'translateX(0%)';
        scroll.style.opacity = '1';
    } else if (contentPosition > screnPosition) {
        scroll.style.transform = 'translateX(-150%)';
        scroll.classList.remove('scroll-block');
        scroll.style.opacity = '0';
    } else {
        scroll.classList.remove('scroll-block');
        scroll.style.opacity = '0';
        scroll.style.transform = 'translateX(-150%)'
    }
}

function skillScroll() {
    const scroll = document.querySelector('.skills');
    let contentPosition = scroll.getBoundingClientRect().top;
    let screnPosition = window.innerHeight / 0.95;
    if (contentPosition < screnPosition) {
        // scroll.classList.add('skill-block');
        scroll.style.transform = 'translateY(0%)';
        scroll.style.opacity = '1';
    } else if (contentPosition > screnPosition) {
        scroll.style.transform = 'translateY(150%)';
        // scroll.classList.remove('skill-block');
        scroll.style.opacity = '0';
    } else {
        // scroll.classList.remove('skill-block');
        scroll.style.opacity = '0';
        scroll.style.transform = 'translateY(150%)'
    }
}