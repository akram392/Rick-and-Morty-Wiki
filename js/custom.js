$(".fruits").owlCarousel({
    margin:30,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2.5,
            merge:true,
            loop:true,
            nav:true,
            navText:["<b>‹</b>","<b>›</b>"]
        }
    }
});

$(".character").owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2.5,
            merge:true,
            loop:true,
            nav:true,
            navText:["<b>‹</b>","<b>›</b>"]
        }
    }
})