const showMobileNavigation = () => {
  const isOpen = $('.navigation').hasClass('navigation-show');

  if (isOpen) {
    $('.navigation').removeClass('navigation-show');
  } else {
    $('.navigation').addClass('navigation-show');
  }
};
