
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.addEventListener('scroll', () => {

    let current ='';
    sections.forEach(sec => {
        let sectionTop = sec.offsetTop;
        let sectionHeight = sec.clientHeight;
        if (pageYOffset  >= sectionTop - (sectionHeight)/4) {
            current = sec.getAttribute('id');

        }

    })
    navLinks.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
})


window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

 
    // section.forEach(sec => {

    //     let top = window.scrollY;
    //     let height = sec.offsetHeight;
    //     let offset = sec.offsetTop - 150;
    //     let id = sec.getAttribute('id');

    //     if(top => offset && top < offset + height){

    //         navLinks.forEach(links =>{
    //             links.classList.remove('active');
    //             document.querySelector("header .navbar a[href*='+id+']").classList.add('active');
    //         });
    //     };

    // });

}
 
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active')
}


$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplayTimeout:3000,
        autoplay:true,
        items:1,
        margin:20,
       
    });

    // bxslider
    $(".slider-area").bxSlider({
     
        slideMargin:10,
        speed:22000,
        ticker:true,
        minSlides:1,
        maxSlides:9,
        slideWidth:520,
        tickerHover:true,

      
    });

    // Aos 
    AOS.init();

});



// loader part

function loader() {
     document.querySelector('.loader-container').classList.add('fade-out');

}
function fadeOut() {
    setInterval(loader,3000);
}

window.onload = fadeOut;