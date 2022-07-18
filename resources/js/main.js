const nav = document.getElementById('nav-container');

window.addEventListener('scroll', function(){
    if (window.pageYOffset > 300){
        nav.classList.add('sticky-nav');
    } else{
        nav.classList.remove('sticky-nav');
    }
})



//smooth scroll by jQuery
$(function(){
    $('#nav ul li a,.next-section a, .top a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        }, 1000);
    })
});


//nav active 



const bar =document.getElementById('bar');
bar.addEventListener('click', function(){
    toggleMenu();
})

const close = document.getElementById('closeIcon');
close.addEventListener('click', function(){
    toggleMenu();    
})

//Toggle Class from Nav Menu
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('menu-active');
}


//Add event listener on every menu item
const li = document.querySelectorAll('#nav ul li a');
li.forEach(item =>{
    item.addEventListener('click', function(){
        toggleMenu();
    })
})