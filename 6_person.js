/*
нововведения,
1) методы можно писать без function.
2) можно использовать стрелочные ф-ии (так как у него нет своего контекста, не исопльзуем внутри нее this!!)
3) также можно задавать динамические ключи (в квадратных скобках)



Новые методы:
Object.is() - сравниваем на эквивалентность значения
Object.assign() -  объединяем объекты, при этом меняется первый объект
					Object.assign({},first,second) - так мы создадим новый объект

Object.entries() 	- конвертирует в двумерный массив - [ [ 'a', 1 ], [ 'c', 2 ], [ 'd', 3 ] ]
Object.keys(obj) 	- массив ключей объекта
Object.values(obj) 	- массив значений объекта
*/

const cityFiled = 'city';
const job = 'frontend';

const person = {
	age: 26,
	name: 'Irina',
	'country-live': 'Russia',

	//динамический ключ
	[cityFiled]: 'Saint-Peterburg',

	job, //если название совпадает с переменной, можно опустить (можно было бы написать job:job)

	print: () => {
		//не используем внутри this
		return 'Person';
	},


	toString() {
		//toString: function () {
		// Object.keys - позволяет пробежаться по элементам объекта, вернет массив ключей
		return Object
			.keys(this)
			.filter(key => key !== 'toString')
			.map(key => this[key])
			.join(' ');
	}
};
// console.log(person.toString());
// console.log(person);


/* Новые мотоды */

const first = {a: 1};
const second = {b: 2};

// console.log(Object.is(20,20));
// console.log(Object.is(20,'20'));

// console.log(Object.assign(first,second));
// console.log(Object.assign({},first,second));

const obj = Object.assign({}, first, {c: 2, d: 3});
console.log(obj);
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));