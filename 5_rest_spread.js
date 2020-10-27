/* ---------------------------------------------------------------------------------------------------------------------
	 Новые операторы
	 Rest
	...  -  положим набор в массив!!!(когда в аргументе)

*/

//	среднее значение массива
function averrage(a, b, ...args) {
	// reduce(), find, findIn .. -  новые ф-ии для массивов (hioverfunctions)

	// return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length; - раньше пришлось бы делать так
	return args.reduce((acc, i) => acc += i, 0) / args.length;
}

//console.log(averrage(10, 20, 30, 40));


/* ---------------------------------------------------------------------------------------------------------------------
	Spread
	...  -  разворачивает массив
*/

const array = [1, 2, 3, 5, 8, 13];
// console.log(...array);
// console.log(Math.max(...array));
// console.log(Math.max.apply(null, array)); - делали раньше

// клонируем массив
const fib = [1, ...array];
// console.log(fib);



/* ---------------------------------------------------------------------------------------------------------------------
	Destructoring - деструктуризация
*/
const arrays = [1, undefined, 3, 5, 8, 13];
// Делалали раньше
// const a = arrays[0];
// const b = arrays[1];

const [a, b = 42, , c, ...d] = arrays;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


/*
	Работа оператора Destructoring с объектом
*/
const address = {
	country: 'Russia',
	city: 'Moskow',
	street: 'Lenina',
	house: undefined,
	concat: function () {
		return `${this.country}, ${this.city}, ${this.street}`
	}
};

// console.log(address.concat());

const {street, city: cityVar, house = '13', concat} = address;
// console.log(street);
// console.log(cityVar);
// console.log(house);
// console.log(concat()); - будет undefined, у window нет этих свойств, поэтому
// console.log(concat.call(address));


const {city: cityVar2, ...rest} = address;
// console.log(cityVar2);
// console.log(rest);


//клонируем объект, при этом могу менять свойства
const newAdress = {...address, street: 'Tverskaya', code: 123};
console.log(newAdress);