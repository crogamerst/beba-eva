var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop || st > navbarHeight) {
    $('header').removeClass('nav-down').addClass('nav-up');
    $('.navigation').removeClass('navigation-show');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

const showMobileNavigation = () => {
  const isOpen = $('.navigation').hasClass('navigation-show');

  if (isOpen) {
    $('.navigation').removeClass('navigation-show');
  } else {
    $('.navigation').addClass('navigation-show');
  }
};
