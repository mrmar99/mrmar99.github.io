$(function(){
    $('.header-slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
    });
    $('.eps-nav__item1').on('click', function() {
        $('.container__eps-description').show();
        $('.container__eps-description-p').hide();
        $('.eps-literature__content').hide();
        $('div.eps-nav__item1').addClass('eps-nav__active');
        $('div.eps-nav__item2').removeClass('eps-nav__active');
        $('div.eps-nav__item3').removeClass('eps-nav__active');
    });
    $('.eps-nav__item2').on('click', function() {
        $('.container__eps-description').hide();
        $('.container__eps-description-p').show();
        $('.eps-literature__content').hide();
        $('div.eps-nav__item1').removeClass('eps-nav__active');
        $('div.eps-nav__item2').addClass('eps-nav__active');
        $('div.eps-nav__item3').removeClass('eps-nav__active');
    });
    $('.eps-nav__item3').on('click', function() {
        $('.container__eps-description').hide();
        $('.container__eps-description-p').hide();
        $('.eps-literature__content').show();
        $('div.eps-nav__item1').removeClass('eps-nav__active');
        $('div.eps-nav__item2').removeClass('eps-nav__active');
        $('div.eps-nav__item3').addClass('eps-nav__active');
    });
    $('.projects__button1').on('click', function() {$('.projects').hide();$('.ind-projects1').css('display', 'flex');});
    $('.projects__button2').on('click', function() {$('.projects').hide();$('.ind-projects2').css('display', 'flex');});
    $('.projects__button3').on('click', function() {$('.projects').hide();$('.ind-projects3').css('display', 'flex');});
    $('.projects__button4').on('click', function() {$('.projects').hide();$('.ind-projects4').css('display', 'flex');});
    $('.projects__button5').on('click', function() {$('.projects').hide();$('.ind-projects5').css('display', 'flex');});
    $('.projects__button6').on('click', function() {$('.projects').hide();$('.ind-projects6').css('display', 'flex');});
    $('.ind-projects__back-btn').on('click', function() {
        $('.ind-projects1').hide();
        $('.ind-projects2').hide();
        $('.ind-projects3').hide();
        $('.ind-projects4').hide();
        $('.ind-projects5').hide();
        $('.ind-projects6').hide();

        $('#projects__gallery1').hide();
        $('#projects__gallery2').hide();
        $('#projects__gallery3').hide();
        $('#projects__gallery4').hide();
        $('#projects__gallery5').hide();
        $('#projects__gallery6').hide();
        $('.projects').show();
    });
    $('.ind-projects__photo-button1').on('click', function() {$('#projects__gallery1').show();});
    $('.ind-projects__photo-button2').on('click', function() {$('#projects__gallery2').show();});
    $('.ind-projects__photo-button3').on('click', function() {$('#projects__gallery3').show();});
    $('.ind-projects__photo-button4').on('click', function() {$('#projects__gallery4').show();});
    $('.ind-projects__photo-button5').on('click', function() {$('#projects__gallery5').show();});
    $('.ind-projects__photo-button6').on('click', function() {$('#projects__gallery6').show();});


    $('.international__btn-1').on('click', function() {$('.ind-international-1').show();$('#international').hide();});
    $('.international__btn-2').on('click', function() {$('.ind-international-2').show();$('#international').hide();});
    $('.international__btn-3').on('click', function() {$('.ind-international-3').show();$('#international').hide();});
    $('.international__btn-4').on('click', function() {$('.ind-international-4').show();$('#international').hide();});


    $('.news__btn-1').on('click', function() {$('.news-ind1').css('display', 'flex');$('#news').hide();});
    $('.news__btn-2').on('click', function() {$('.news-ind2').css('display', 'flex');$('#news').hide();});
    $('.news__btn-3').on('click', function() {$('.news-ind3').css('display', 'flex');$('#news').hide();});


    $('.menu-btn').on('click', function() {
        $('.nav_menu').toggle();
    });


    $('.ind-international__back-btn').on('click', function() {
        $('.ind-international-1').hide();
        $('.ind-international-2').hide();
        $('.ind-international-3').hide();
        $('.ind-international-4').hide();
        $('#international').show();
    });
});

$(document).ready(function() {
    $('.eps__product-item-popup').magnificPopup({
        type: 'image',
        zoom: {
            enabled: true,
        }
    });
});
$(document).ready(function(){
    $('.ind-international__slider1').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '.csb-prev-1',
        nextArrow: '.csb-next-1',
    });
});
$(document).ready(function(){
    $('.ind-international__slider2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '.csb-prev-2',
        nextArrow: '.csb-next-2',
    });
});
$(document).ready(function(){
    $('.ind-international__slider3').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '.csb-prev-3',
        nextArrow: '.csb-next-3',
    });
});
$(document).ready(function(){
    $('.ind-international__slider4').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '.csb-prev-4',
        nextArrow: '.csb-next-4',
    });
});

$(document).ready(function() {
    $('.projects__gallery1-item-popup').magnificPopup({
        type: 'image',
        duration: 300,
        zoom: {
            enabled: true,
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            tPrev: 'Previous image',
            tNext: 'Next image',
        },
        callbacks: {
            buildControls: function() {
                // re-appends controls inside the main container
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
        }
    });
    $('.projects__gallery2-item-popup').magnificPopup({
        type: 'image',
        duration: 300,
        zoom: {
            enabled: true,
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            tPrev: 'Previous image',
            tNext: 'Next image',
        },
        callbacks: {
            buildControls: function() {
                // re-appends controls inside the main container
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
        }
    });
    $('.projects__gallery3-item-popup').magnificPopup({
        type: 'image',
        duration: 300,
        zoom: {
            enabled: true,
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            tPrev: 'Previous image',
            tNext: 'Next image',
        },
        callbacks: {
            buildControls: function() {
                // re-appends controls inside the main container
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
        }
    });
    $('.projects__gallery4-item-popup').magnificPopup({
        type: 'image',
        duration: 300,
        zoom: {
            enabled: true,
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            tPrev: 'Previous image',
            tNext: 'Next image',
        },
        callbacks: {
            buildControls: function() {
                // re-appends controls inside the main container
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
        }
    });
    $('.projects__gallery5-item-popup').magnificPopup({
        type: 'image',
        duration: 300,
        zoom: {
            enabled: true,
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            tPrev: 'Previous image',
            tNext: 'Next image',
        },
        callbacks: {
            buildControls: function() {
                // re-appends controls inside the main container
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
        }
    });
    $('.projects__gallery6-item-popup').magnificPopup({
        type: 'image',
        duration: 300,
        zoom: {
            enabled: true,
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            tPrev: 'Previous image',
            tNext: 'Next image'
        },
        callbacks: {
            buildControls: function() {
                // re-appends controls inside the main container
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
        }
    });
});
