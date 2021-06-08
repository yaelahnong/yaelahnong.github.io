// Scroll
$('.nav-link').on('click', function async(e) {
  e.preventDefault();

  let hrefVal = $(this).attr('href');
  let hrefEl = $(hrefVal);
  let homeEl = hrefVal === '#home';

  $('html').animate(
    {
      scrollTop: homeEl ? hrefEl.offset().top : hrefEl.offset().top - 150,
    },
    1000,
    'easeInOutExpo'
  );

  $('.nav-link').removeClass('active');
  $(this).addClass('active');
});

// Parallax
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  if (wScroll > $('#about').offset().top - 600) {
    $('.about .heading').addClass('scrolled');
    setTimeout(function () {
      $('.about .paragraph-left').addClass('scrolled');
      $('.about .paragraph-right').addClass('scrolled');
    }, 300);
  }

  if (wScroll > $('#projects').offset().top - 600) {
    $('.projects .heading').addClass('scrolled');
    $('.projects .img-wrapper').each(function (i) {
      setTimeout(function () {
        $('.projects .img-wrapper').eq(i).addClass('scrolled');
      }, 300 * (i + 1));
    });
  }

  if (wScroll > $('#contact').offset().top - 600) {
    $('.contact .heading').addClass('scrolled');
    $('.contact .component').each(function (i) {
      setTimeout(function () {
        $('.contact .component').eq(i).addClass('scrolled');
      }, 100 * (i + 1));
    });
  }

  if (wScroll > $('footer').offset().top - 705) {
    // $('footer').addClass('scrolled');
    $('footer p i').animate(
      {
        opacity: 1,
        fontSize: 16,
      },
      1000,
      'easeOutExpo'
    );
  }
});
