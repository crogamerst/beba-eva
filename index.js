var didScroll;
var delta = 5;
let isOpen = false;

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
  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  let $birthCourseContainer = $('.birth-course-container');
  let birthCourseContainerTop = $birthCourseContainer.offset().top;
  let birthCourseContainerBottom =
    $birthCourseContainer.offset().top + $birthCourseContainer.outerHeight();

  let $breastFeedingContainer = $('.breast-feeding-container');
  let breastFeedingContainerTop = $breastFeedingContainer.offset().top;
  let breastFeedingContainerBottom =
    $breastFeedingContainer.offset().top +
    $breastFeedingContainer.outerHeight();

  if (
    birthCourseContainerBottom > viewportTop &&
    birthCourseContainerTop < viewportBottom
  ) {
    $('.birth-course').css({ opacity: 0, visibility: 'hidden' });
    $('.birth-course-container-hovered').css({
      opacity: 1,
      visibility: 'visible',
    });
  } else {
    $('.birth-course').css({ opacity: 1, visibility: 'visible' });
    $('.birth-course-container-hovered').css({
      opacity: 0,
      visibility: 'hidden',
    });
  }

  if (
    breastFeedingContainerBottom > viewportTop &&
    breastFeedingContainerTop < viewportBottom
  ) {
    $('.breast-feeding').css({ opacity: 0, visibility: 'hidden' });
    $('.breast-feeding-container-hovered').css({
      opacity: 1,
      visibility: 'visible',
    });
  } else {
    $('.breast-feeding').css({ opacity: 1, visibility: 'visible' });
    $('.breast-feeding-container-hovered').css({
      opacity: 0,
      visibility: 'hidden',
    });
  }

  // var $self = $('.birth-course');
  // var $selfSecond = $('.breast-feeding');

  // var $selfChild = $('.birth-course-container-hovered');

  // var elementTop = $self.offset().top;
  // var elementBottom = elementTop + $self.outerHeight();

  // if (elementBottom > viewportTop && elementTop < viewportBottom) {
  //   $self.addClass('birth-course-hidden');
  //   $selfSecond.addClass('birth-course-hidden');
  //   $selfChild.addClass('birth-course-show');
  // } else {
  //   $self.removeClass('birth-course-hidden');
  //   $selfSecond.removeClass('birth-course-hidden');
  //   $selfChild.removeClass('birth-course-show');
  // }
}

const showMobileNavigation = () => {
  if (isOpen) {
    $('.navigation').css({ opacity: 0, visibility: 'hidden' });
  } else {
    $('.navigation').css({ opacity: 1, visibility: 'visible' });
  }

  isOpen = !isOpen;
};

const scrollToCourses = () => {
  let value;

  if (window.matchMedia('(max-width: 768px)').matches) {
    value = 200;
  } else {
    value = 300;
  }

  $('html,body').animate({
    scrollTop: $('.birth-course-container').offset().top - value,
  });
};

const scrollToContact = () => {
  $('html,body').animate({
    scrollTop: $('#contact-section').offset().top,
  });
};
