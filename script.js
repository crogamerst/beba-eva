let isOpen = false;

const showMobileNavigation = () => {
  if (isOpen) {
    $('.navigation').css({ opacity: 0, visibility: 'hidden' });
  } else {
    $('.navigation').css({ opacity: 1, visibility: 'visible' });
  }

  isOpen = !isOpen;
};
