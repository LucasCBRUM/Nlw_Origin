var y;
function onScroll(){
    if (scrollY > 0){
        document.getElementById('navigation').classList.add('scroll');
    }else{
        document.getElementById('navigation').classList .remove('scroll');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
    y = window.scrollY;
}

function closeMenu(a){
    document.body.classList.remove('menu-expanded');
    if(a = true){
        window.scrollTo(0, 0);
    }else{
        window.scrollTo(0, y);  
    }  
}




ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card`);