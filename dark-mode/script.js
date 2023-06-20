const menuBtn = document.querySelector('#menu-btn');

const menu = document.querySelector('.menu');
const menu_a = document.querySelectorAll('.menu-a');

const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', function(){

    menu.classList.add("active");
    menuBtn.classList.add("hide");

    menu_a.forEach(element => {
        element.classList.add("active-a");
    });
    
});

closeBtn.addEventListener('click', function(){
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");

    menu_a.forEach(element => {
        element.classList.remove("active-a");
    });
});

const darkMode_icon = document.querySelector('.dark-mode img');

darkMode_icon.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        darkMode_icon.src = "images/sun.png";
    }else{
        darkMode_icon.src = "images/moon.png";
    }
});