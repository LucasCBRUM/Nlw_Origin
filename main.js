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

function closeMenu(){
    document.body.classList.remove('menu-expanded');
    window.scrollTo(0, y)
}