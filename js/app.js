function menuOpen () {
    let hamburger = document.querySelector('#hamburger');
    let nav = document.querySelector('#nav__links');
    let body = document.querySelector('#body');        
    hamburger.onclick = function () {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('nav_active');
        body.classList.toggle('no-scroll');
    }
    let navLinks = document.querySelectorAll('#nav__links a');
    navLinks.forEach( function(navLink){
        navLink.onclick = function  () {
            hamburger.classList.remove('hamburger_active');
            nav.classList.remove('nav_active');
            body.classList.remove('no-scroll');
        }
    })
}

menuOpen ();    


function menuBtnShow () {
    let firstScroll = window.pageYOffset;
    document.getElementById('hamburger').style.top = "10px";
    window.onscroll = function () {
        let lastScroll = window.pageYOffset;
        if (firstScroll > lastScroll) {
            document.getElementById('hamburger').style.top = "10px";
        } else {
            document.getElementById('hamburger').style.top = "-100px";
        }
        firstScroll = lastScroll;               
    }
}
menuBtnShow ();