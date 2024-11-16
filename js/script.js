'use strict';

const menuButtons = document.querySelectorAll('.menu__btn');
const menuCats = document.querySelectorAll('.menu__cat')
const modal = document.querySelector('#modal');
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__btn')) changeTabMenu(e.target);
  if (e.target.classList.contains('js-modal-btn')) openModal(e.target);
  if (e.target.classList.contains('modal__close') || e.target.classList.contains('modal')) closeModal(e.target);
})

function openModal(target) {
  modal.classList.add('modal--active');
}

function closeModal(target) {
  modal.classList.remove('modal--active');
}

function changeTabMenu(target) {
  const activeBtn = document.querySelector('.menu__btn.active');
  const activeTab = document.querySelector('.menu__cat.active');
  let currentId = target.getAttribute('btn-tab');
  console.log(currentId);
  const nextTab = document.querySelector(`[tab="${currentId}"]`);

  if (activeBtn) activeBtn.classList.remove('active');
  target.classList.add('active');

  if(activeTab) activeTab.classList.remove('active');
  nextTab.classList.add('active');
}

function setAttribute(buttons, panel) {
  buttons.forEach((item, index) => {
    item.setAttribute('btn-tab', `${index + 1}`)
  })

  panel.forEach((item, index) => {
    item.setAttribute('tab', `${index + 1}`);
  })
}

setAttribute(menuButtons, menuCats);

const HERO_SWIPER = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 2000
})

const MENU_SWIPEER = new Swiper('.menu__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    prevEl: '.prev',
    nextEl: '.next'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  },

  speed: 1000,
})




Fancybox.bind("[data-fancybox]", {});

