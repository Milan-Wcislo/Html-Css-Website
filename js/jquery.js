$(document).on('scroll', function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $landing = $('.landingPage');
  const $navBorder = $('.navBorder');
  const landingFromTop = $landing.offset().top


  if (scrollValue > landingFromTop - windowHeight + 100) {
    $navBorder.addClass('active');
  }
  if (scrollValue < 100) {
    $navBorder.removeClass('active');
  }

})


// Init Scrollspy
$('body').scrollspy({ target: '#mainNav' });

// Smooth Scrolling
$("#mainNav a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      window.location.hash = hash;
    });
  }
});