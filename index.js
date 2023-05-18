var menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function (menuItem) {
  var submenu = menuItem.querySelector('.app-bar__submenu');
  var arrowIcon = menuItem.querySelector('.arrow-icon');

  if (submenu) {
    if (window.innerWidth <= 835) {
      // Обработчик клика в мобильной версии
      menuItem.addEventListener('click', function (event) {
        event.preventDefault();
        if (submenu.style.display === 'block') {
          submenu.style.display = 'none';
          arrowIcon.setAttribute('src', './images/icon-arrow-down.svg');
        } else {
          submenu.style.display = 'block';
          arrowIcon.setAttribute('src', './images/icon-arrow-up.svg');
        }
      });
    } else {
      // Обработчики наведения в десктопной версии
      menuItem.addEventListener('mouseenter', function () {
        submenu.style.display = 'block';
        arrowIcon.setAttribute('src', './images/icon-arrow-up.svg');
      });

      menuItem.addEventListener('mouseleave', function () {
        submenu.style.display = 'none';
        arrowIcon.setAttribute('src', './images/icon-arrow-down.svg');
      });
    }
  }
});


(function(){
    const burgerItem = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.nav_header');
    const menuCloseItem = document.querySelector('.hamburger-close-menu');
    burgerItem.addEventListener('click', () => {
        console.log(1);
        menu.classList.add('hide-nav');
    })
    
    menuCloseItem.addEventListener('click', ()=>{
        console.log(2);
       menu.classList.remove('hide-nav');
    })
    }());
    
