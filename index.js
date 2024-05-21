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

  var $self = $('.birth-course');
  var $selfSecond = $('.breast-feeding');

  var $selfChild = $('.birth-course-container-hovered');

  var elementTop = $self.offset().top;
  var elementBottom = elementTop + $self.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  if (elementBottom > viewportTop && elementTop < viewportBottom) {
    $self.addClass('birth-course-hidden');
    $selfSecond.addClass('birth-course-hidden');
    $selfChild.addClass('birth-course-show');
  } else {
    $self.removeClass('birth-course-hidden');
    $selfSecond.removeClass('birth-course-hidden');
    $selfChild.removeClass('birth-course-show');
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
