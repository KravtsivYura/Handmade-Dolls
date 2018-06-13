;(function($){
	'use strict';

	$(document).ready(function(){
		$('.section-one-slider-container').on("init", function(event, slick){
      $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

  $(".section-one-slider-container").on("afterChange", function(event, slick, currentSlide){
    $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
  }).slick({
			infinite: true,
      dots: true,
			speed: 500,
			fade: true,
			nextArrow: '.header-slick-button-next',
			prevArrow: '.header-slick-button-prev'
		});

  // $('.header-button').on('click', function(){
  //   $('header').css('height', '35vh');
  // });

  $('#header-button').on('click', function(){
      $('header').toggleClass('changeHeight');
    });

  $('#showText').on('click', function(){
      $('.section-five-hidden').toggleClass('section-five-left0');
    });

  $('.section-one-button').on('click', function(){
      $('.section-one-hidden-info').toggleClass('section-one-show-info');
    });

  $('#showPhoto').on('click', function(){
      $('.section-six-hidden-photo').toggleClass('section-six-show-photo');
    });

		$('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
          }
        }
      });

      $('.button-like').on('click', function(){
        $(this).prev('.circle-heart').children('.heart').css('display', 'none');
        $(this).prev('.circle-heart').children('.heart-like').css('display', 'block');
      });

	});

})(jQuery);


