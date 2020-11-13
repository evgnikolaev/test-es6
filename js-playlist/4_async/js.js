/*
Асинхронность.
При выполнении кода, записывается в стек. При этом поток не блокируется.
То место, где есть асинхронность (обычно жто внешнее web api), мы закидываем в определенное место, в очередь.
Эта очередь обычным циклом (EventLoop) проверяется и если ф-ия готова, возвращается обратно в стек.
Асинхронность( это слушатели событий, setTimeout, работа с сервером ).


Полезный сервис для демонстрации:
http://latentflip.com/loupe/


!!! EventLoop выполнится после того как весь синхронный стек выполнится !!!
*/

console.log('start');

window.setTimeout(function () {
	console.log('after 5 sec');
}, 5000);

window.setTimeout(function () {
	console.log('after 2 sec');
}, 2000);

console.log('end');


// пример2
//!!! EventLoop выполнится после того как весь синхронный стек выполнится !!!
console.log("Hi!");

setTimeout(function timeout() {
	console.log("Click the button!");
}, 0);

for (var i = 1; i < 6; i++) {
	console.log(i);
}

console.log("Welcome to loupe.");
