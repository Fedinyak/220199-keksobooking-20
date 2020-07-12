'use strict';

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var cardCount = 8;

// 1. Генерирует массив заданной длины (то есть принимает число в аргумент) с рандомными данными
var getArray = function (length) {
  for (var i = 0; i < length; i++) {

  }
};

getArray(cardCount);

// 2. Создание одного элемента по данным
var createElement = function () {

};

// 3. Создание нескольких (на выходе массив из ДОМ узлов, но которые еще не были вставлены)
var createElements = function () {

};

// 4. Отрисовка одного элемента в нужный контейнер (принимает ДОМ узел, как аргумент)
var renderElement = function () {

};

// 5. Отрисовка нескольких (сначала закидываем во фрагмент, а потом вставляем в нужный ДОМ узел)
var fragment = document.createDocumentFragment();
for (var i = 0; i < 8; i++) {
  fragment.appendChild();
}
similarListElement.appendChild(fragment);


//Напишите функцию для создания массива 
// из 8 сгенерированных JS-объектов. 
// Структура объектов должна быть следующей:

var getRandomArrayLength = function () {
  return getRandomNumber(6);
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



// var author = function () {
//   for (var i = 0; i < 8; i++) {
//     var authorImgNumber = authorImgNumber[i];
//   } 
//   return authorImgNumber;
// };

// console.log(author);

var getAvatarImgNumber = function () {
  for (var i = 1; i < 9; i++) {
    var avatarImgNumber = i;
  }
  console.log(avatarImgNumber);
  return avatarImgNumber;
};




var templateCard = {
  author: {
    // avatar: 'img/avatars/user01.png',
    // это число от 1 до 8 с ведущим нулём. Например, 01, 02 Адреса изображений не повторяются
    avatar: 'img/avatars/user0' + getAvatarImgNumber() + '.png',
  },

  offer: {

    title: "Прекрасное предложение",
    //  строка, заголовок предложения

    address: "600, 350",
    //  строка, адрес предложения. 
    // Для простоты пусть пока представляет собой запись вида "{{location.x}}, {{location.y}}", например, "600, 350"

    price: 234123,
    //  число, стоимость

    type: "palace",
    //  строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo

    rooms: 4,
    //  число, количество комнат

    guests: 8,
    //  число, количество гостей, которое можно разместить

    checkin: '12:00',
    //  строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,

    checkout: '12:00',
    //  строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00

    features: "wifi",
    //  массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",

    description: "Описание случайной длины из ниже предложенных",
    //  строка с описанием,

    photos: "http://o0.github.io/assets/images/tokyo/hotel1.jpg"
    // массив строк случайной длины, содержащий адреса фотографий "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
  },

  location:
  {
    x: 200,
    // случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.

    y: 130
    // случайное число, координата y метки на карте от 130 до 630.
  }
}


var announcement = function () {

};