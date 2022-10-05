// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counter = {
    value: 0,
increment() {
    console.log('increment => this', this);
    this.value += 1;
},
decrement() {
   console.log('decrement => this', this);
    this.value -= 1;
},
};

const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;

});
incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value;

});