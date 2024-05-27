var didScroll;
var delta = 5;

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
}

const showMobileNavigation = () => {
  const isOpen = $('.navigation').hasClass('navigation-show');

  if (isOpen) {
    $('.navigation').removeClass('navigation-show');
  } else {
    $('.navigation').addClass('navigation-show');
  }
};
