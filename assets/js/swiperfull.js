var swiperBottomScrollbarFull = new Swiper(
    ".swiper-bottom-scrollbar-full",
    {
        allowTouchMove: true,
        slidesPerView: "auto",
        grabCursor: true,
        preventClicks: true,
        spaceBetween: 30,
        //keyboardControl: true,
        //observer: true,  //theme
        speed: 1000,
        //centeredSlides: true,   //theme
        pagination: {
            el: null,
            // el: ".swiper-pagination",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: false,
            hide: false,
            snapOnRelease: false,
        },


        mousewheel: {
            releaseOnEdges: true,
            invert: false, //theme
        },

        autoplay: {
            delay: 3000
        },


        keyboard: {
            enabled: false,
            onlyInViewport: false, //themes
        },



        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


        breakpoints: {
            767: {
                scrollbar: {
                    hide: true,
                },
                spaceBetween: 0,
                autoHeight: true,
                centeredSlides: false,
                slidesOffsetAfter: 85,
            },
        },
        on: {
            resize: function () {
                var windowWidth = $(window).width();
                if (windowWidth <= 767) {
                    swiperBottomScrollbarFull.direction("vertical");
                    swiperBottomScrollbarFull.detachEvents();
                } else {
                    swiperBottomScrollbarFull.direction("horizontal");
                    swiperBottomScrollbarFull.attachEvents();
                }
                swiperBottomScrollbarFull.update();
            },
        },
    }
);
