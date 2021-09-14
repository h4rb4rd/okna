document.addEventListener('DOMContentLoaded', () => {
  // Gulp webP function ============================================

function testWebP(callback) {

  const webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
  // burger =======================================/
const menuBurger = document.querySelector('.icon-menu'),
  menuBody = document.querySelector('.nav-header'),
  pageBody = document.querySelector('body');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  menuBody.classList.toggle('active');
  pageBody.classList.toggle('lock');
});
document.querySelectorAll('.nav-header__link').forEach((link) => {
  link.addEventListener('click', () => {
    menuBurger.classList.contains('active') ? menuBurger.classList.remove('active') : null;
    menuBody.classList.contains('active') ? menuBody.classList.remove('active') : null;
    pageBody.classList.contains('lock') ? pageBody.classList.remove('lock') : null;
  });
});

// tabs =========================================/

const modelTabs = document.querySelectorAll('.tabs-triggers__item'),
  modelContent = document.querySelectorAll('.tabs-content__item'),
  wishesTabs = document.querySelectorAll('.wishes-tabs__link'),
  wishesContent = document.querySelectorAll('.wishes-tabs__slider');

const addTabs = (tabs, blocks) => {
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      if (!tab.classList.contains('active')) {
        tabs.forEach((tab, i) => {
          tab.classList.remove('active');
          blocks[i].classList.remove('active');
        });

        tab.classList.add('active');
        blocks[i].classList.add('active');
      }
    });
  });
  document.querySelector('.wishes-tabs__link').click();
  document.querySelector('.tabs-triggers__item').click();
};

addTabs(modelTabs, modelContent);
addTabs(wishesTabs, wishesContent);
// compare slider ===============================/
if (document.querySelector('.compare-slider')) {
  const compareSlider = new Swiper('.compare-slider', {
    spaceBetween: 0,
    speed: 800,
    pagination: {
      el: '.compare-slider__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 6,
      },
    },
  });
}

// wishes sliders ===============================/
// wishes
const wishesSlider = (slider, prev, next, pgn) => {
  const wishesSlider = new Swiper(slider, {
    spaceBetween: 0,
    speed: 800,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    pagination: {
      el: pgn,
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
      },
    },
  });
};

const wishesSliderData = {
  wSlider: {
    s1: '.wishes-slider--1',
    s2: '.wishes-slider--2',
    s3: '.wishes-slider--3',
  },
  arrow: {
    p1: '.wishes-slider01__arrow--prev',
    n1: '.wishes-slider01__arrow--next',
    p2: '.wishes-slider02__arrow--prev',
    n2: '.wishes-slider02__arrow--next',
    p3: '.wishes-slider03__arrow--prev',
    n3: '.wishes-slider03__arrow--next',
  },
  pgn: {
    p1: '.wishes-slider01__pagination',
    p2: '.wishes-slider02__pagination',
    p3: '.wishes-slider03__pagination',
  },
};
const { wSlider, arrow, pgn } = wishesSliderData;
wishesSlider(wSlider.s1, arrow.p1, arrow.n1, pgn.p1);
wishesSlider(wSlider.s2, arrow.p2, arrow.n2, pgn.p2);
wishesSlider(wSlider.s3, arrow.p3, arrow.n3, pgn.p3);

// image
const imageSlider = (slider, input, slide) => {
  if (document.querySelector(slider)) {
    const wishesImageSlider = new Swiper(slider, {
      observer: true,
      observeParents: true,
      spaceBetween: 0,
      speed: 800,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      effect: 'fade',
    });
    const wishesChecboxes = document.querySelectorAll(input);
    wishesImageSlider.on('slideChange', function () {
      let i = wishesImageSlider.realIndex;
      wishesChecboxes[i].checked = true;
    });

    const wishesSlides = document.querySelectorAll(slide);
    wishesSlides.forEach((slide, i) => {
      slide.addEventListener('click', () => {
        wishesImageSlider.slideTo(i);
      });
    });
  }
};
const imageSliderData = {
  iSlider: {
    s1: '.wishes-image__slider--1',
    s2: '.wishes-image__slider--2',
    s3: '.wishes-image__slider--3',
  },
  input: {
    i1: '.wishes-slide__input--1',
    i2: '.wishes-slide__input--2',
    i3: '.wishes-slide__input--3',
  },
  slide: {
    sl1: '.wishes-slide--1',
    sl2: '.wishes-slide--2',
    sl3: '.wishes-slide--3',
  },
};
const { iSlider, input, slide } = imageSliderData;
imageSlider(iSlider.s1, input.i1, slide.sl1);
imageSlider(iSlider.s2, input.i2, slide.sl2);
imageSlider(iSlider.s3, input.i3, slide.sl3);

// properties  slider ==============================/
if (document.querySelector('.properties-slider')) {
  const propertiesSlider = new Swiper('.properties-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 800,
    pagination: {
      el: '.properties__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.properties__arrow--next',
      prevEl: '.properties__arrow--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        autoHeight: true,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });
}
// price  slider ==============================/

// type
if (document.querySelector('.type-slider')) {
  const typeSlider = new Swiper('.type-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800,
    pagination: {
      el: '.price-type__pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 3,
      },
    },
  });
}
// profile
if (document.querySelector('.profile-slider')) {
  const profileSlider = new Swiper('.profile-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    slidesPerColumn: 2,

    slidesPerColumnFill: 'row',
    spaceBetween: 0,
    speed: 800,
    pagination: {
      el: '.price-profile__pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 0,
      },
      480: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },

      992: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      },
      1050: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      },
    },
  });
}

// timer ======================================/
const deadline = '2023-05-20';

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    // days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);
  return {
    total: t,
    // days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    // days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);
    // days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}
setClock('.timer', deadline);

// works slider ==============================/
if (document.querySelector('.works-slider')) {
  const propertiesSlider = new Swiper('.works-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    pagination: {
      el: '.works__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.works__arrow--next',
      prevEl: '.works__arrow--prev',
    },
  });
}
// reviews slider ==============================/
if (document.querySelector('.reviews-slider')) {
  const propertiesSlider = new Swiper('.reviews-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
  });
}

// scroll ======================================/

function scrollWithRaf() {
  const links = document.querySelectorAll('[href^="#"]'),
    speed = 0.2;

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
}
scrollWithRaf();

});