

// табы

//нашли все кнопки
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

//отслеживаем событие клик
tabItem.forEach(function(element) {
element.addEventListener('click', open);
})

function open(evt){
const tabTarget = evt.currentTarget; //для отслеживания по айпи того на ком это происходит
const button = tabTarget.dataset.button; //прикрепляет контент-1 кнопку к контенту-1 листу

//пробегаемся по всем и убираем класс активности
tabItem.forEach(function(item){
item.classList.remove('tabs__btn-item--active');
});

//находим того на кого нажали и добавляем класс активности
tabTarget.classList.add('tabs__btn-item--active');

tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active');
});

//выбираем #айдишник и $то что мы находим конкретный контент
document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

// бургерное меню

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
})




// слайдер
const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });