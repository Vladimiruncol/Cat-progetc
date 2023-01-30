function selFyagra() {
  let image = document.getElementById('imgF');
  let text = document.getElementById('fyagraP');
  let top = document.getElementById('fyagraTop');
  let isFyagra = document.getElementById('isFyagra');
  if (image.src.match('/img/Selected')) {
    image.src = './img/Defauit.png'; // применят картинку при обратном клике.
    text.innerHTML = 'Чего сидишь? Порадуй котэ, <a href="#3">купи.</a>'; // Возвращает Defauit
    top.innerHTML = 'Сказачное заморское яство'; // Возвращает Defauit
    isFyagra.addEventListener(
      'mouseout',
      () => (top.innerHTML = 'Сказачное заморское яство') // Возвращает Defauit
    );
  } else {
    image.src = './img/Selected.png'; // Применяет картинку если не попадает под условия.
    text.innerHTML = 'Печень утки разварная с артишоками.'; // Описание Вкусовые
    isFyagra.addEventListener(
      'mouseout',
      () => (top.innerHTML = '<p>Котэ не одобряет?</p>') // При уходе с блока уточняет одобрения.
    );
  }
  isFyagra.addEventListener('dblclick', () => {
    image.src = './img/Disabled.png';
    text.innerHTML = '<p>Печалька с курой закончилось</p>';
  });
}

// При двойном клике делает Дизейбл.(так как не к чему было прикрутить по окончанию товара)
// Все остальные функции аналогичны .
// Не знаю почему не работает функционал который связан с addEventListener после уменьшения изображения. Возможно связано скодом.
function selFish() {
  let image = document.getElementById('imgFi');
  let text = document.getElementById('fishP');
  let top = document.getElementById('fishTop');
  let isFish = document.getElementById('isFish');
  if (image.src.match('/img/Selected')) {
    image.src = './img/Defauit.png';
    text.innerHTML = 'Чего сидишь? Порадуй котэ, <a href="#3">купи.</a>';
    top.innerHTML = 'Сказачное заморское яство';
    isFish.addEventListener(
      'mouseout',
      () => (top.innerHTML = 'Сказачное заморское яство')
    );
  } else {
    image.src = './img/Selected.png';
    text.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмушка.';
    isFish.addEventListener(
      'mouseout',
      () => (top.innerHTML = '<p>Котэ не одобряет?</p>')
    );
  }
  isFish.addEventListener('dblclick', () => {
    image.src = './img/Disabled.png';
    text.innerHTML = '<p>Печалька с курой закончилось</p>';
  });
}

function selChiken() {
  let image = document.getElementById('imgC');
  let text = document.getElementById('chikenP');
  let top = document.getElementById('chikenTop');
  let isChiken = document.getElementById('isChiken');
  if (image.src.match('/img/Selected')) {
    image.src = './img/Defauit.png';
    text.innerHTML = 'Чего сидишь? Порадуй котэ, <a href="#3">купи.</a>';
    top.innerHTML = 'Сказачное заморское яство';
    isChiken.addEventListener(
      'mouseout',
      () => (top.innerHTML = 'Сказачное заморское яство')
    );
  } else {
    image.src = './img/Selected.png';
    text.innerHTML = 'Филе из цыплят с трюфелями в бульоное.';
    isChiken.addEventListener(
      'mouseout',
      () => (top.innerHTML = '<p>Котэ не одобряет?</p>')
    );
  }
  isChiken.addEventListener('dblclick', () => {
    image.src = './img/Disabled.png';
    text.innerHTML = '<p>Печалька с курой закончилось</p>';
  });
}
