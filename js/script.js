const overlay = document.querySelector('.overlay');
const applicationBtn = document.querySelectorAll('.application');
const popupClose = document.querySelector('.popup-close');
const input = document.getElementById('phone');
const navigation = document.querySelector('.header__navigation');
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');


// work with hamburger 

header.addEventListener('click', (event) => {
  const target = event.target;
  const targetClassList = target.classList;
  
  switch (true) {
      case (targetClassList.contains('hamburger') && !target.classList.contains('toggle')): 
          getNavigationMenu();
      break;
      case targetClassList.contains('toggle') || targetClassList.contains('navigation__link '):
          removeNavigationMenu();
      break;
      case targetClassList.contains('navigation__link'): 
          removeNavigationMenu();
      break;
      default:
      break;
  }

});

function getNavigationMenu() {
  navigation.classList.add('navigation-active');
  hamburger.classList.toggle('toggle');
  body.classList.add('scroll-hidden');
}

function removeNavigationMenu() {
  navigation.classList.remove('navigation-active');
  hamburger.classList.remove('toggle');
  body.classList.remove('scroll-hidden');
}

// scroll and choose active link 
document.addEventListener("touchstart", function(){}, true);
document.addEventListener('scroll', onScroll);

function onScroll() {
    const curPos = window.scrollY;
    // console.log(' window.scrollY: ',  window.scrollY);
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }

    document.querySelectorAll('.main>section').forEach((el) => {
        // console.log(el.getAttribute('id'));
        if (el.offsetTop - 90 <= curPos && (el.offsetTop - 90 + el.offsetHeight) > curPos) {
            navigation.querySelectorAll('a').forEach(a => {
                a.classList.remove('navigation-active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('navigation-active');
                }
            });
        }
    });
}

// // add active link on navigation
// navigation.addEventListener('click', (event) => {
   
// });

// add flags to phone input
window.intlTelInput(input, {
    initialCountry: "by",
// separateDialCode: true,

    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        if (selectedCountryData.iso2 === 'by') {
            selectedCountryPlaceholder = "+375 29 771 16 49";
        }
        return selectedCountryPlaceholder;
    },
    utilsScript: "../intl-tel-input/build/js/utils.js",
});


// show overlay
    applicationBtn.forEach(el => {
        el.addEventListener('click', () => {
        overlay.classList.toggle('overlay-visible');
        });
    });

// close overlay
  overlay.addEventListener('click', (e) => {
    if (e.target == overlay || e.target == popupClose) {
      overlay.classList.toggle('overlay-visible');
    }
  });







// send message with user data to youe mail
  function send(event, php){
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
      if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // Ебанный internet explorer 11
          console.log(json);
            
          // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
          if (json.result == "success") {
            // Если сообщение отправлено
            alert("Сообщение отправлено");
          } else {
            // Если произошла ошибка
            alert("Ошибка. Сообщение не отправлено");
          }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    }

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    // slidesPerView: 3,
    // spaceBetween: 40,
    // slidesPerGroup: 3,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
          slidesPerGroup: 1,
        },
        // when window width is >= 480px
        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          slidesPerGroup: 3,
        },

        1240: {
          slidesPerView: 3,
          spaceBetween: 40,
          slidesPerGroup: 3,
        }
      },

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })



