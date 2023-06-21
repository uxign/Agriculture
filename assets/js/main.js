/*global $, jQuery, alert*/
$(function () {


    // ========================================================================= //
    //   Js cursor link hover
    // ========================================================================= //

    jQuery('.js-cursor-inner').hover(
        function () { $(this).addClass('js-link-hover') },
        function () { $(this).removeClass('js-link-hover') }
    )

    // ========================================================================= //
    //  Bar search open/close
    // ========================================================================= //

    jQuery('.ina_bar-search').on('click', function () {
        jQuery('.ina_bar-search-open .ina-search-layouts').addClass('active');
        jQuery('.overlay-search').addClass('active');
    })

    jQuery('.search-close').on('click', function () {

        jQuery('.ina_bar-search-open .ina-search-layouts').removeClass('active')
        jQuery('.overlay-search').removeClass('active');

    })

    jQuery('.overlay-search').on('click', function () {
        jQuery('.overlay-search').removeClass('active');
        jQuery('.ina_bar-search-open .ina-search-layouts').removeClass('active')
    })


    // ========================================================================= //
    //  Humberger menu sidebar open/close
    // ========================================================================= //

    jQuery('.ina_side-menu-button-open').on('click', function () {

        jQuery('.ina-sidebar .sidbar-content').toggleClass('active');
        jQuery('.ina-sidebar .overlay-sidebar').addClass('active');
    })

    jQuery('.ina-sidebar .sidbar-content .search-close').on('click', function () {

        jQuery('.ina-sidebar .sidbar-content').removeClass('active');

        jQuery('.ina-sidebar .overlay-sidebar').removeClass('active');

    })

    jQuery('.overlay-sidebar').on('click', function () {
        jQuery('.sidbar-content').removeClass('active')
        jQuery('.overlay-sidebar').removeClass('active');

    })



    // ========================================================================= //
    //   Sub menu active class
    // ========================================================================= //

    // jQuery(".nav-item li a").filter(function () {
    //   return this.href == location.href.replace(/#.*/, "");
    // })
    //   .addClass("active")
    //   .closest('ul')
    //   .prev('a')
    //   .addClass("active");

    // ========================================================================= //
    //   Run swiper js
    // ========================================================================= //

    var swiper = new Swiper(".ina-insta-swiper", {
        direction: 'horizontal',
        loop: false,
        speed: 1200,
        slidesPerView: 6,
        centeredSlides: false,
        initialSlide: 2,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
        },
    });


    var swiper = new Swiper(".ina-item-columns-3", {
        slidesPerView: 3,
        spaceBetween: 24,
        direction: 'horizontal',
        speed: 1200,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },


        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },

    });

    var swiper = new Swiper(".ina-item-columns-4", {
        slidesPerView: 4,
        spaceBetween: 24,
        direction: 'horizontal',
        speed: 1200,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },


    });


    // Services


    var swiper = new Swiper('.ina_swiper-style-two', {
        direction: 'horizontal',
        loop: false,
        speed: 1200,
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
        },

    });


    // Testimonials

    var swiper = new Swiper('.ina_swiper-testimonials-style-one', {
        direction: 'horizontal',
        loop: false,
        speed: 1200,
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 24,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 12,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });



    var brands = new Swiper(".ina_brands-list", {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
        },
    });





    // ========================================================================= //
    //   Swiper item colmuns 3
    // ========================================================================= //


    if (jQuery('.ina-posts-3 .ina-container-posts').hasClass('ina-item-columns-3')) {
        jQuery('.ina-posts-3 .ina-item-columns-3').addClass('swiper');
        jQuery('.ina-posts-3 .ina-container-posts .swiper-wrapper').removeClass('row');
        jQuery('.ina-posts-3 .ina-container-posts .swiper-slide').removeClass('col-md-4');
    } else {

        jQuery('.ina-posts-3 .ina-container-posts').removeClass('swiper');
        jQuery('.ina-posts-3 .ina-container-posts .swiper-wrapper').addClass('row');
        jQuery('.ina-posts-3 .ina-container-posts .row').removeClass('swiper-wrapper');
        jQuery('.ina-posts-3 .ina-container-posts .swiper-slide').addClass('col-md-4');
        jQuery('.ina-posts-3 .ina-container-posts .col-md-4').removeClass('swiper-slide');
    }



    // ========================================================================= //
    //   Swiper item colmuns 4
    // ========================================================================= //

    if (jQuery('.ina-posts-4 .ina-container-posts').hasClass('ina-item-columns-4')) {
        jQuery('.ina-posts-4 .ina-item-columns-4').addClass('swiper');
        jQuery('.ina-posts-4 .ina-container-posts .swiper-wrapper').removeClass('row');
        jQuery('.ina-posts-4 .ina-container-posts .swiper-slide').removeClass('col-md-3');
    } else {

        jQuery('.ina-posts-4 .ina-container-posts').removeClass('swiper');
        jQuery('.ina-posts-4 .ina-container-posts .swiper-wrapper').addClass('row');
        jQuery('.ina-posts-4 .ina-container-posts .row').removeClass('swiper-wrapper');
        jQuery('.ina-posts-4 .ina-container-posts .swiper-slide').addClass('col-md-3');
        jQuery('.ina-posts-4 .ina-container-posts .col-md-3').removeClass('swiper-slide');
    }


    /*========== Ajax Contact Form  ==========*/
    jQuery('.contact-form').on("submit", function () {

        var myForm = $(this),
            data = {};

        myForm.find('[name]').each(function () {

            var that = $(this),
                name = that.attr('name'),
                value = that.val();

            data[name] = value;

        });

        $.ajax({

            url: myForm.attr('action'),
            type: myForm.attr('method'),
            data: data,
            success: function (response) {

                if (response == "success") {

                    $(".contact-form").find(".form-message").addClass("success");
                    $(".form-message span").text("Message Sent!");

                } else {

                    $(".contact-form").find(".form-message").addClass("error");
                    $(".form-message span").text("Error Sending!");

                }
            }

        });

        return false;

    });


});




