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
    window.scrollTo( 0, 0 );
}

function closeMenu(a){
    document.body.classList.remove('menu-expanded');
    if(a = true){
        window.scrollTo(0, 0);
        document.querySelector('#popUp').classList.add()
    }else{
        window.scrollTo(0, y);  
    }  
}

function onOpen(){
    window.scroll(0, 0);
}

//criando um objeto


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal('#home, #home img, #home .stats');