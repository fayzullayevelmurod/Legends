var swiper = new Swiper(".eventSwiper", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".event-button-next",
        prevEl: ".event-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.20,
        },
        768: {
            slidesPerView: 3.10,
        },
        1200: {
            slidesPerView: 4.20,
        },
    },
});