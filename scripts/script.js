let listsItems = document.querySelector('.lists-items')
let menuIcon = document.querySelector('.menu-icon')
console.log(listsItems);
menuIcon.addEventListener('click',function(){
    if(menuIcon.classList.contains('fa-bars')){
        menuIcon.classList = 'fa fa-times menu-icon'
        listsItems.style.left = '0px';
        listsItems.style.top = '0'
        listsItems.style.display = 'block'

    }else{
        listsItems.style.left = '-200px';
        menuIcon.classList = 'fa fa-bars menu-icon'

    }

    console.log(menuIcon);
})

// ================================
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 80,
    autoplay: true,
    autoplayTimeout:2000,
    responsiveClass: true,
    navText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
    responsive: {
        0: {
            items: 1,
            nav: true,
            
        },
        768: {
            items: 2,
            nav: true
        },
        992 : {
            items : 2,
            nav: true
        }
    }
})