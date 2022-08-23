
function onScroll(){
    if (scrollY > 0){
        document.getElementById('navigation').classList.add('scroll');
    }else{
        document.getElementById('navigation').classList .remove('scroll');
    }
    //console.log(scrollY);
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}