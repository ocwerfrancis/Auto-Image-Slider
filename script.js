var swiper = new Swiper(".myswiper", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
    },

    mousewheel: {
        invert: true,
    },
});